import React from 'react';
import ReactDOM from 'react-dom';

// APP
import { App } from './App';

// ANTD STYLES
import './styles/app-theme.less';

// COMMON STYLES
import './styles/common.scss';

// REDUX
import { Provider } from 'react-redux'
import {store} from './store'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
