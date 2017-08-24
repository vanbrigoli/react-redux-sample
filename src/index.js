import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import listStore from './store/ListStore';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

global.dispatch = listStore.dispatch;

render(
    <Root store={listStore} />,
    document.getElementById('root')
);
registerServiceWorker();


