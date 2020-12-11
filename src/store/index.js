import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { store, persistor };



//       ***** OLD STORE *****

// import rootReducer from './reducer';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// const store = createStore(
//     rootReducer,
//     {},
//     applyMiddleware(thunk)
// );

// export default store;
