import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Textarea_ extends Component {
  config = {
    navigationBarTitleText: 'Textarea'
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
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight />
        <Text>这是一个可以自动聚焦的 textarea</Text>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus />
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
)(Textarea_)
