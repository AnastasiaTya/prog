import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraApg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch, ThunkExtraApg, ThunkConfig,
};
