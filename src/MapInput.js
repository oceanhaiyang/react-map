import React, {Component} from 'react'

class MapInput extends Component {
  constructor() {
    super()
    this.state = {
      address: ''
    }
  }

  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    })
  }

  handleAddressBlur(){
    if (this.props.onBlur) {
      this.props.onBlur({
        address: this.state.address

      })
    }
  }

  render() {
    return (
        <div>
          <div>
            <span>地址：</span>

            <input
                value={this.state.address}
                onChange={this.handleAddressChange.bind(this)}
                onBlur={this.handleAddressBlur.bind(this)}
            />

          </div>

        </div>
    )
  }
}

export default MapInput
