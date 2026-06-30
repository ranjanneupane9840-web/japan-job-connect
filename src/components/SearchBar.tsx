interface Props {
  search: string;
  setSearch: (value: string) => void;
}

function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="my-8 flex justify-center">

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-96"
      />

    </div>
  );
}

export default SearchBar;