import {Box, Card, CardActionArea, CardContent, Divider, Typography} from '@mui/material';
import useStore from '../../store';
import {doSelectDestination} from '../../store/actions.ts';

function Recommendation() {
  const {destination} = useStore(state => ({
    destination: state.selectedDestination,
  }));

  return (
    <Box mt={4}>
      <Divider variant="inset" sx={{my: 4}} />
      <Typography variant="h5">Recommendations</Typography>
      {destination?.closeDestinations && (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap="30px 30px" mt={4}>
          {destination?.closeDestinations.map(recommendation => (
            <Card
              key={recommendation.id}
              sx={{width: 275}}
              onClick={() => doSelectDestination(recommendation.id)}
            >
              <CardActionArea sx={{height: '100%'}}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {recommendation.name}
                  </Typography>
                  <Typography variant="body2">{recommendation.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Recommendation;
