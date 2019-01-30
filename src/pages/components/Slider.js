import Taro, { Component } from '@tarojs/taro'
import { View, Text, Slider } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Slider_ extends Component {
  config = {
    navigationBarTitleText: 'Slider'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index' style='align-items:unset'>
        <Text>设置 step</Text>
        <Slider step='1' value='50' />
        <Text>显示当前 value</Text>
        <Slider step='1' value='50' showValue />
        <Text>设置最小/最大值</Text>
        <Slider step='1' value='100' showValue min='50' max='200' />
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
)(Slider_)
