import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise-middleware';

import App from './components/App';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middlewares = [reduxPromise(), reduxThunk];

if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);

	middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

// const store = createStore(rootReducer, {}, applyMiddleware(reduxPromise(), reduxThunk, logger));
const store = createStore(rootReducer, initialState, composedEnhancers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
