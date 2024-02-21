'use client';

import useAuthToken from '../hooks/useAuthToken';
import { createSearchTerm } from 'src/app/actions';

import React from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { spotifyFetcher } from '../../utils/fetcher';
import useDebounce from '../hooks/useDebounce';
import Skeleton from './Skeleton';
import { DataSuccess } from './types';
import MessageBlock from './MessageBlock';
import SearchBar from './SearchBar';

const MainView = ({
  activeId = '',
  handleChange,
}: {
  activeId: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { token } = useAuthToken();
  const debouncedSearchTerm = useDebounce(activeId, 500);
  const {
    data,
    isLoading,
    isValidating,
  }: {
    data: DataSuccess | undefined;
    isLoading: boolean;
    isValidating: boolean;
  } = useSWR(
    token && debouncedSearchTerm
      ? [`v1/search?q=${debouncedSearchTerm}&type=track&limit=15`, token]
      : null,
    spotifyFetcher,
    {
      revalidateOnFocus: false,
    }
  );
  const handleSearchBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      createSearchTerm(event.target.value);
    }
  };

  function renderContent() {
    if (!activeId) {
      return <MessageBlock message="Search a song" />;
    }
    if (isLoading || isValidating || data === undefined) {
      return <Skeleton />;
    }

    if (!data?.tracks?.items?.length) {
      return (
        <MessageBlock message="It seems like that song isn not available yet. How about trying a different song?" />
      );
    }

    return (
      <div className="flex flex-col flex-1 gap-3 my-5 h-full overflow-auto pr-8">
        {data?.tracks?.items.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-3 w-full hover:bg-gray-100 p-4 rounded-md"
          >
            <div>{index + 1}</div>
            <div className="flex gap-2 w-3/5 items-center">
              <div>
                <Image src={item.album.images[0].url} width={40} height={40} alt={item.name} />
              </div>
              <div>
                <p className="text-white">{item.name}</p>
                <p className="text-xs text-white-100">{item.artists[0].name}</p>
              </div>
            </div>
            <div className="w-1/4">{item.album.name}</div>
            <div className="flex-1 text-right">
              {Math.ceil(item.duration_ms / (1000 * 60))} mins
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="pl-8 py-6 w-full ml-2 flex flex-col h-screen rounded-md">
      <SearchBar
        activeId={activeId}
        handleSearchBlur={handleSearchBlur}
        handleChange={handleChange}
        error={data?.error}
      />
      {renderContent()}
    </div>
  );
};

export default MainView;
