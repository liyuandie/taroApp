import Taro, { Component } from '@tarojs/taro'
import { View, Text, Switch } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Switch_ extends Component {
  config = {
    navigationBarTitleText: 'Switch'
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
        <Text>默认样式</Text>
        <Switch checked />
        <Switch />
        <Text>推荐展示样式</Text>
        <Switch checked />
        <Switch />
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
)(Switch_)
