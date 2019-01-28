import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as counterActions from '../../actions/counter'
import { btns } from '../../constants/btns'

import './index.css'

class Index extends Component {
  config = {
    navigationBarTitleText: 'Taro组件'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onClick = url => {
    console.log('111111111')
    Taro.navigateTo({
      url: url
    })
  }

  render() {
    return (
      <ScrollView>
        <View className='col-box-center'>
          <Icon size={60} type='search' className='logo' />
          <Text className='slogan'>
            Taro 以 微信小程序组件库 为标准，结合 jsx 语法规范，定制了一套自己的组件库规范。
          </Text>
        </View>
        <View className='item-container'>
          {btns.map(x => {
            return (
              <View
                className='item'
                hoverClass='item-hover'
                hoverStayTime={200}
                hoverStartTime={10}
                taroKey={x.title}
                onClick={this.onClick.bind(this, x.url)}
              >
                <Text className='title'>{x.title}</Text>
                <Text className='subtitle'>{x.subtitle}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
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
  counterActions
)(Index)
