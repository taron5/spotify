'use client';
import React, { useState } from 'react';
import History from 'src/components/history/History';
import MainView from 'src/components/search/MainView';

export default function Home() {
  const [selectedSearch, setSelectedSearch] = useState<Readonly<string>>('');
  const [searchTerm, setSearchTerm] = useState<Readonly<string>>('');

  const search = searchTerm || selectedSearch;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedSearch('');
  };
  const handleSetActive = (value: string) => {
    setSearchTerm('');
    setSelectedSearch(value);
  };
  return (
    <main>
      <div className="flex bg-black">
        <History activeId={selectedSearch} setActiveId={handleSetActive} />
        <MainView activeId={search} handleChange={handleChange} />
      </div>
    </main>
  );
}
