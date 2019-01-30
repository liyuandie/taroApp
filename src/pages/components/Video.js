import Taro, { Component } from '@tarojs/taro'
import { View, Text, Video } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Video_ extends Component {
  config = {
    navigationBarTitleText: 'Video'
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
        <Video
          src='https://v.qq.com/x/cover/brq7blajvjhrcit/r0029y3drka.html'
          controls={true}
          autoplay={false}
          poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
          initialTime='0'
          id='video'
          loop={false}
          muted={false}
        />
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
)(Video_)
