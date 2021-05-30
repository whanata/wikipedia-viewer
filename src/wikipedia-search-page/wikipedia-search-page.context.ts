import { createContext } from 'react';
import { WikipediaSearchInputContextInterface } from './wikipedia-search-page.model';

export const WikipediaSearchInputContext = createContext<WikipediaSearchInputContextInterface>({} as WikipediaSearchInputContextInterface);
