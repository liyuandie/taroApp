import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Input_ extends Component {
  config = {
    navigationBarTitleText: 'Input'
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
        <Text>可以自动聚焦的 input</Text>
        <Input type='text' placeholder='将会获取焦点' focus />
        <Text>控制最大输入长度的 input</Text>
        <Input type='text' placeholder='最大输入长度为 10' maxLength='10' />
        <Text>实时获取输入值:{this.state.value}</Text>
        <Input type='text' placeholder='输入同步到 view 中' value={this.state.value} onInput={this.onInput} />
        <Text>数字输入的 input</Text>
        <Input type='number' placeholder='这是一个数字输入框' />
        <Text>密码输入的 input</Text>
        <Input type='password' password placeholder='这是一个密码输入框' />
        <Text>带小数点的 input</Text>
        <Input type='digit' placeholder='带小数点的数字键盘' />
        <Text>身份证输入的 input</Text>
        <Input type='idcard' placeholder='身份证输入键盘' />
        <Text>控制占位符颜色的 input</Text>
        <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red' />
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
)(Input_)
