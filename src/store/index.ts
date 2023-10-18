import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {Store} from './types.ts';

const initialStore: Store = {
  isLoadingSearch: false,
  isLoadingDetails: false,
  searchResult: [],
};

const store = create<Store>()(
  persist(() => initialStore, {
    name: 'store',
  }),
);

export default store;
