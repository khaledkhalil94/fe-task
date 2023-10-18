import {useCallback} from 'react';
import debounce from 'lodash.debounce';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box, CircularProgress} from '@mui/material';
import {doSearch, doSelectDestination} from '../../store/actions.ts';
import useStore from '../../store/';

const DEBOUNCE_TIMEOUT_MS = 500;

function DestinationSearch() {
  const {searchResult, error, isLoading} = useStore(state => ({
    searchResult: state.searchResult,
    error: state.error,
    isLoading: state.isLoadingSearch,
  }));

  const handleChange = useCallback(
    debounce((searchText: string) => {
      if (searchText.length) {
        doSearch(searchText);
      }
    }, DEBOUNCE_TIMEOUT_MS),
    [],
  );

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Autocomplete
        disablePortal
        autoFocus
        options={searchResult}
        sx={{width: 300}}
        getOptionLabel={option => option.name}
        loading={isLoading}
        filterOptions={options => options}
        onChange={(_event, value) => {
          if (value) {
            doSelectDestination(value.id);
          }
        }}
        renderInput={params => (
          <TextField
            {...params}
            onChange={event => {
              handleChange(event.target.value);
            }}
            error={Boolean(error)}
            helperText={error}
            label="Search..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}

export default DestinationSearch;
