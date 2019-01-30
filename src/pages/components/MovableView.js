import Taro, { Component } from '@tarojs/taro'
import { View, Text, MovableArea, MovableView } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class MovableView_ extends Component {
  config = {
    navigationBarTitleText: 'MovableView'
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
        <MovableArea style='height: 200px; width: 200px; background: red;'>
          <MovableView style='height: 50px; width: 50px; background: blue;' direction='all' />
        </MovableArea>
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
)(MovableView_)
