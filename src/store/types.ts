import {DestinationDetails, SearchResults} from '../types.ts';

export interface Store {
  searchResult: SearchResults[];
  selectedDestination?: DestinationDetails;
  isLoadingSearch: boolean;
  isLoadingDetails: boolean;
  error?: string;
}
