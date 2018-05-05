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

  componentWillMount(){
    <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.6&key=51cdf2ef09128d21c0238bc777287cad"></script>
  }

  render() {

    var map = new AMap.Map('root', {
      resizeEnable: true,
      zoom: 13,
      center: [116.39, 39.9]
    });
    const mapCollection = AMap.plugin('AMap.Geocoder', function () {
      var geocoder = new AMap.Geocoder({
        city: "036"//城市，默认：“全国”
      });
      var marker = new AMap.Marker({
        map: map,
        bubble: true
      })
      var input = document.getElementById('input');
      var message = document.getElementById('message');

      input.onchange = function (e) {
        var address = input.value;
        geocoder.getLocation(address, function (status, result) {
          if (status == 'complete' && result.geocodes.length) {
            marker.setPosition(result.geocodes[0].location);
            map.setCenter(marker.getPosition())
            message.innerHTML = ''
          } else {
            message.innerHTML = '无法获取位置'
          }
        })
      }

    });

    const markerEvents = {
      click: () => {
        console.log('marker clicked!')
      }
    }
    return <div>
      <div>
        <input id='input' value='输入地址显示位置' onfocus='this.value=""'></input>
        <div id='message'></div>
      </div>
      <div style={{width: '80%', height: 330}}>
        <Map plugins={this.mapPlugins} center={this.state.position} zoom={12}>
          <Marker
              events={markerEvents}
              position={mapCollection.maker.getPositon()}
          />
        </Map>
      </div>

    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
