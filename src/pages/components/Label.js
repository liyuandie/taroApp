import Taro, { Component } from '@tarojs/taro'
import { View, Label, RadioGroup, Radio } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Label_ extends Component {
  config = {
    navigationBarTitleText: 'Label'
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
        <RadioGroup>
          <Label className='example-body__label' for='1' key='1'>
            <Radio value='USA'>USA</Radio>
          </Label>
          <Label className='example-body__label' for='2' key='2'>
            <Radio value='CHN' checked>
              CHN
            </Radio>
          </Label>
        </RadioGroup>
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
)(Label_)
