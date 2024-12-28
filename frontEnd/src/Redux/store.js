import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Utilisez une importation nommée pour redux-thunk
import { authReducer } from './Auth/auth.reducer'; // Assurez-vous que ce chemin est correct

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
