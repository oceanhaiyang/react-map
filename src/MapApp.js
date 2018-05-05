import React, {Component} from 'react'
import MapInput from './MapInput'
import {Map, Marker} from 'react-amap'

export default class MapApp extends Component {

  constructor() {
    super();
    this.state = {
      position: {longitude: 116.39, latitude: 39.9},
    };
    this.mapPlugins = ['ToolBar'];

  }

  componentWillMount() {
    <script type="text/javascript"
            src="http://webapi.amap.com/maps?v=1.4.6&key=51cdf2ef09128d21c0238bc777287cad"></script>
  }

  handleChangeAddress(address) {
    console.log(address)

   /* var map = new AMap.Map('root', {
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

      geocoder.getLocation(address, function (status, result) {
        if (status == 'complete' && result.geocodes.length) {
          marker.setPosition(result.geocodes[0].location);
          map.setCenter(marker.getPosition())
          /!*message.innerHTML = ''*!/
        } else {
          /!*message.innerHTML = '无法获取位置'*!/
        }
      })


    });*/
  }

  render() {

    const markerEvents = {
      click: () => {
        console.log('marker clicked!')
      }
    }
    return (<div>
      <MapInput
          onBlur={this.handleChangeAddress.bind(this)}/>
      <div style={{width: '80%', height: 330}}>
        <Map plugins={this.mapPlugins} center={this.state.position} zoom={12}>
          <Marker
              events={markerEvents}
              position={this.state.position}
          />
        </Map>
      </div>

    </div>)
  }
}
