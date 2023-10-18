import {getDestinationDetails, searchForDestination} from '../api';
import store from '../store/';
import {Destination} from '../types.ts';

export const doSearch = async (searchText: string) => {
  store.setState({
    searchResult: [],
    isLoadingSearch: true,
    error: undefined,
  });
  try {
    const result = await searchForDestination(searchText);
    store.setState({
      searchResult: result,
      isLoadingSearch: false,
    });
  } catch (error) {
    if (typeof error === 'string') {
      store.setState({
        isLoadingSearch: false,
        error: error,
      });
    }
  }
};

export const doSelectDestination = async (destinationId: Destination['id']) => {
  store.setState({
    isLoadingDetails: true,
  });

  try {
    const destinationDetails = await getDestinationDetails(destinationId);
    store.setState({
      selectedDestination: destinationDetails,
      isLoadingDetails: false,
    });
  } catch (error) {
    store.setState({
      selectedDestination: undefined,
      isLoadingDetails: false,
    });
  }
};
