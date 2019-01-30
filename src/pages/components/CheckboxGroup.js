import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class CheckboxGroup_ extends Component {
  config = {
    navigationBarTitleText: 'CheckboxGroup'
  }

  state = {
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
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
        <View className='page-section'>
          <Text>默认样式</Text>
          <Checkbox value='选中' checked>
            选中
          </Checkbox>
          <Checkbox style='margin-left: 20rpx' value='未选中'>
            未选中
          </Checkbox>
        </View>
        <View className='page-section'>
          <Text>推荐展示样式</Text>
          {this.state.list.map((item, i) => {
            return (
              <Label className='checkbox-list__label' for={i} key={i}>
                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>
                  {item.text}
                </Checkbox>
              </Label>
            )
          })}
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
)(CheckboxGroup_)
