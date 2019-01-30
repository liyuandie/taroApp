import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Picker_ extends Component {
  config = {
    navigationBarTitleText: 'Picker'
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
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
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>当前选择：{this.state.selectorChecked}</View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>当前选择：{this.state.timeSel}</View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>当前选择：{this.state.dateSel}</View>
              </Picker>
            </View>
          </View>
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
)(Picker_)
