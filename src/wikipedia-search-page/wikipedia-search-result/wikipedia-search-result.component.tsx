import React from 'react';
import parse from 'html-react-parser';
import { Properties } from './wikipedia-search-result.model';
import './wikipedia-search-result.css';

export function WikipediaSearchResult(props: Properties): JSX.Element {
  const { searchResult } = props;

  function searchResultJsx() {
    return searchResult.map(
      (page) => (
        <div key={page.id}>
          <h2>
            <a className="WikipediaLinkTitle" target="_blank" rel="noopener noreferrer" href={`https://en.wikipedia.org/wiki/${page.key}`}>
              {page.title}
            </a>
          </h2>
          {parse(page.excerpt)}
        </div>
      ),
    );
  }

  return (
    <div>
      {searchResultJsx()}
    </div>
  );
}
