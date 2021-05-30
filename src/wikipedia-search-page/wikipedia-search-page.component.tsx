import React, { useEffect, useState } from 'react';
import { WikipediaSearchBar } from './wikipedia-search-bar';
import { WikipediaSearchInputContext } from './wikipedia-search-page.context';
import './wikipedia-search-page.css';
import { WikipediaPageResult, WikipediaSearchResult } from './wikipedia-search-result';

export function WikipediaSearchPage(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ReadonlyArray<WikipediaPageResult>>([]);

  useEffect(
    () => {
      const fetchWikipediaResult = async () => {
        const response = await fetch(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${searchInput}&limit=20`);
        const result = await response.json();
        setSearchResult(result.pages);
      };

      if (searchInput) {
        fetchWikipediaResult();
      }
    },
    [searchInput],
  );

  return (
    <WikipediaSearchInputContext.Provider
      value={{ setSearchInput }}
    >
      <div className="Page">
        <h1 className="Heading">Wikipedia Viewer</h1>
        <WikipediaSearchBar />
        <a className="Button" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Special:Random">Click for Random Page.</a>
        <WikipediaSearchResult searchResult={searchResult} />
      </div>
    </WikipediaSearchInputContext.Provider>
  );
}
