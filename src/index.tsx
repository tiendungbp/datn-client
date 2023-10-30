import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { ToastMessage } from './module/ToastMessage';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ToastMessage />
			<App />
		</PersistGate>
	</Provider>
);
reportWebVitals();
