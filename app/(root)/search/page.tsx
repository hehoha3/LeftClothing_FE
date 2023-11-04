/* eslint-disable react-hooks/exhaustive-deps */
import SearchContent from "./SearchContent";

interface SearchPageProps {
  searchParams: { query: string };
}

const SearchPage: React.FC<SearchPageProps> = ({ searchParams: { query } }) => {
  return (
    <div className="py-8 px-[96px]">
      <SearchContent query={query} />
    </div>
  );
};

export default SearchPage;
