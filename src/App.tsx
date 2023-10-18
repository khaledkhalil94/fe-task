import DestinationSearch from './components/DestinationSearch';
import DestinationDetails from './components/DestinationDetails';
import Recommendation from './components/Recommendation';
import {Container} from '@mui/material';

function App() {
  return (
    <Container sx={{mt: 10}}>
      <DestinationSearch />
      <DestinationDetails />
      <Recommendation />
    </Container>
  );
}

export default App;
