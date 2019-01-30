import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Swiper_ extends Component {
  config = {
    navigationBarTitleText: 'Swiper'
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
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          // vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1' style='background-color:red;height:100%'>
              1
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2' style='background-color:green;height:100%'>
              2
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3' style='background-color:orange;height:100%'>
              3
            </View>
          </SwiperItem>
        </Swiper>
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
)(Swiper_)
