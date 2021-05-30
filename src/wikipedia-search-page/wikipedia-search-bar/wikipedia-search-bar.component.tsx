import React, { ChangeEvent, useContext, useState } from 'react';
import { WikipediaSearchInputContext } from '..';
import './wikipedia-search-bar.css';

export function WikipediaSearchBar(): JSX.Element {
  const { setSearchInput } = useContext(WikipediaSearchInputContext);
  const [inputValue, setInputValue] = useState<string>('');

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function onButtonClick() {
    setSearchInput(inputValue);
  }

  return (
    <div className="Component">
      <span className="Label">Search: </span>
      <input className="SearchBar" value={inputValue} type="text" onChange={onInputChange} />
      <button type="button" onClick={onButtonClick}>Search</button>
    </div>
  );
}
