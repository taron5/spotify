export default function SearchBar({
  activeId,
  error,
  handleChange,
  handleSearchBlur,
}: {
  activeId: string;
  error: object | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <header className="relative flex gap-3 items-center">
      <button className="absolute left-0 top-0 mt-2 ml-2">
        <span className="icon-search" />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={activeId}
        className="outline-unset border-gprimary rounded-full py-2 pl-7 focus:border-white-500 bg-gray-100 text-white"
        onChange={handleChange}
        onBlur={handleSearchBlur}
      />
      {error && (
        <div className="text-red-500 font-bold">Sorry, something went wrong! Please try again.</div>
      )}
    </header>
  );
}
