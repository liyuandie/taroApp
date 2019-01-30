import Taro, { Component } from '@tarojs/taro'
import { View, Progress } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Progress_ extends Component {
  config = {
    navigationBarTitleText: 'Progress'
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
        <Progress percent={20} showInfo strokeWidth={20} />
        <Progress percent={40} strokeWidth={20} active showInfo />
        <Progress percent={60} strokeWidth={20} active showInfo />
        <Progress percent={80} strokeWidth={20} active showInfo activeColor='blue' />
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
)(Progress_)
