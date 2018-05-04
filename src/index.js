import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {Map, Marker} from 'react-amap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: {longitude: 114, latitude: 30},
    };
    this.mapPlugins = ['ToolBar'];

  }

  randomPosition() {
    this.setState({
      position: {
        longitude: 114 + Math.random() * 10,
        latitude: 30 + Math.random() * 10
      }
    });
  }


  render() {

    const markerEvents = {
      click: () => {
        console.log('marker clicked!')
      }
    }
    return <div>

      <div style={{width: '80%', height: 330}}>
        <Map plugins={this.mapPlugins} center={this.state.position} zoom={12}>
          <Marker
              events={markerEvents}
              position={this.state.position}
          />
        </Map>
      </div>
      <button onClick={() => {
        this.randomPosition()
      }}>Position
      </button>

    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
