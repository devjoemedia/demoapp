import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './reducers';

const persistConfig = {
  key: "root",
  storage
};

const persisted_reducers = persistReducer(persistConfig, authReducer);

export const store = createStore(persisted_reducers, applyMiddleware(thunk));
export const persistor = persistStore(store);