import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import DocumentReducer from './reducers/DocumentReducer';

export const rootReducer = combineReducers({
	documents: DocumentReducer,
});

export default function configureStore() {
	const middlewares = [reduxThunk];
	const middleWareEnhancer = applyMiddleware(...middlewares);

	const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
	return store;
}
