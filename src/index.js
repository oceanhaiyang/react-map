import React from 'react';
import ReactDOM from 'react-dom';
import MapApp from './MapApp'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MapApp/>, document.getElementById('root'));
registerServiceWorker();
