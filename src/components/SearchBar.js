import { React} from 'react';

import { StyledSearchInput } from './StyledComponents';

/*
 * SearchBar
 *
 * This is the page where you rednder both search bars (tag, name) and students list
 * State: searchTerm : str
 *        searchTag: str
 *        
 * props:
      * handleChangeTerm ; fn to control the searchTermintput
      * handleChangeTag ; fn to control the intput

 * App---> SearchBar
 */

function SearchBar({ handleChangeTag, handleChangeSearch}) {
 
  return (
    <div style={{margin:30}}>
      <StyledSearchInput
        type="text"
        name="term"
        id="term"
        placeholder="Search by name"
        onChange={handleChangeSearch}
      />
      <StyledSearchInput
        type="text"
        name="tag"
        id="tag"
        placeholder="Search by tag"
        onChange={handleChangeTag}
      />
      
    </div>
  )
}

export default SearchBar;
