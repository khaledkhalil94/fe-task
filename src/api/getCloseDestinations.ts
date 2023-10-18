import destinations from './data.json';
import {Destination} from '../types.ts';

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const radLat1 = (Math.PI * lat1) / 180;
  const radLon1 = (Math.PI * lon1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const radLon2 = (Math.PI * lon2) / 180;

  const dLat = radLat2 - radLat1;
  const dLon = radLon2 - radLon1;

  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadius * c;
}

const closestDestinations = (destination: Destination, options: {limit?: number} = {}) => {
  const {limit = 5} = options;

  return [...destinations]
    .filter(({id}) => id !== destination.id)
    .sort((destinationA, destinationB) => {
      const distanceA = haversine(
        destination.latitude,
        destination.longitude,
        destinationA.latitude,
        destinationA.longitude,
      );
      const distanceB = haversine(
        destination.latitude,
        destination.longitude,
        destinationB.latitude,
        destinationB.longitude,
      );
      return distanceA - distanceB;
    })
    .slice(0, limit);
};

export default closestDestinations;
