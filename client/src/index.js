import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise-middleware';

import App from './components/App';
import rootReducer from './reducers';

// const store = createStore(rootReducer, {}, applyMiddleware(reduxPromise(), reduxThunk, logger));
const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(reduxPromise(), reduxThunk, logger)),
);

// console.log(store.getState());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
