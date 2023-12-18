import SearchIcon from "./SearchIcon";

interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  count: number;
  filter: string;
}

const Search = ({ handleChange, count, filter }: SearchProps) => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        className="search__input"
        placeholder="What test are you looking for?"
        onChange={handleChange}
        value={filter}
      />
      <p className="search__count">{count} tests</p>
    </div>
  );
};

export default Search;
