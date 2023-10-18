import {Box, Typography, CircularProgress} from '@mui/material';
import useStore from '../../store';
import {useMemo} from 'react';

function DestinationDetails() {
  const {destination, isLoading} = useStore(state => ({
    destination: state.selectedDestination,
    isLoading: state.isLoadingDetails,
  }));

  const children = useMemo(() => {
    if (isLoading) {
      return <CircularProgress color="inherit" size={30} />;
    }

    if (!destination) {
      return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight={120}>
          <Typography variant="h5">Use the search box above to find a destination!</Typography>
        </Box>
      );
    }

    return (
      <>
        <Typography variant="h2">{destination.name}</Typography>
        <Typography variant="subtitle1">{destination.description}</Typography>
        <Typography variant="caption">Climate: {destination.climate}</Typography>
      </>
    );
  }, [destination, isLoading]);

  return (
    <Box my={6} minHeight={120} textAlign="center">
      {children}
    </Box>
  );
}

export default DestinationDetails;
