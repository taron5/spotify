'use client';

import useSWR from 'swr';
import { localFetcher } from '../../utils/fetcher';
import { removeDuplicates } from '../../utils/helper';

type historyItem = {
  id: string;
  searchTerm: string;
};

const SearchHistoryNavbar = ({
  activeId,
  setActiveId,
}: {
  activeId: string;
  setActiveId: (e: string) => void;
}) => {
  const { data: historyItems } = useSWR('search-terms', localFetcher);
  const uniqueItems = (historyItems && removeDuplicates(historyItems, 'searchTerm')) || [];

  return (
    <nav className="bg-gray text-white h-screen w-96 px-4 pt-6">
      <p className="text-md font-bold mb-3">Recent searches</p>
      <div className="flex flex-col gap-4">
        {uniqueItems.map((historyItem: historyItem) => (
          <div
            key={historyItem.id}
            onClick={() => setActiveId(historyItem.searchTerm)}
            className={`text-light-gray p-2 rounded-md cursor-pointer flex items-center gap-2 bg-gray-100 truncate ${
              activeId === historyItem.searchTerm ? 'bg-primary' : 'hover:bg-brand-black'
            }`}
          >
            <span className="icon-search" />
            {historyItem.searchTerm}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SearchHistoryNavbar;
