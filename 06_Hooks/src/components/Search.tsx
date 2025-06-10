import { memo } from "react";

interface ISearch {
  onChange: (text: string) => void;
}

const Search = ({ onChange }: ISearch) => {
  console.log("Search rendered");
  return <input type="search" onChange={(e) => onChange(e.target.value)} />;
};

export default memo(Search);
