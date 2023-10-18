import {DestinationDetails, SearchResults} from '../types.ts';
import data from './data.json';
import getCloseDestinations from './getCloseDestinations.ts';

const TIME_OUT_MS = 500;

export const searchForDestination = (searchText: string): Promise<SearchResults[]> => {
  console.log('[API - searchForDestination]:', {searchText});

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (searchText === 'fail') {
        reject('Unexpected Error: please try again in a while!');
      } else {
        const matchedData = data
          .filter(city => city.name.toLowerCase().includes(searchText.toLowerCase()))
          .map(city => ({id: city.id, name: city.name}));
        resolve(matchedData);
      }
    }, TIME_OUT_MS);
  });
};

export const getDestinationDetails = (
  destinationId: number,
  options?: {limit?: number},
): Promise<DestinationDetails> => {
  console.log('[API - getDestinationDetails]:', {destinationId, options});

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const destinationDetails = data.find(({id}) => id === destinationId);
      if (!destinationDetails) {
        reject('Error: destination not found!');
        return;
      }
      resolve({
        ...destinationDetails,
        closeDestinations: getCloseDestinations(destinationDetails, options),
      });
    }, TIME_OUT_MS);
  });
};
