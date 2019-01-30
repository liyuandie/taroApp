import Taro, { Component } from '@tarojs/taro'
import { View, Text, Camera } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Camera_ extends Component {
  config = {
    navigationBarTitleText: 'Camera'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <View>
          <Text>系统相机</Text>
        </View>
      </View>
    )
  }
}

const mapState2Props = state => {
  return {
    counter: state.counter
  }
}

export default connect(
  mapState2Props,
  null
)(Camera_)
