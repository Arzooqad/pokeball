import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokemonReducer from '../slices/pokemonSlice';






const persistConfig = {
    key: 'root',
    storage,
};



const rootReducer = combineReducers({
    pokemon: pokemonReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
