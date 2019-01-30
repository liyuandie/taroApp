import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Switch, Input, Button, Label } from '@tarojs/components'
import { connect } from '@tarojs/redux'

class Form_ extends Component {
  config = {
    navigationBarTitleText: 'Form'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
  }

  render() {
    return (
      <View className='index'>
        <Form onSubmit={this.formSubmit} onReset={this.formReset}>
          <View className='example-body'>
            <View style='display:flex; align-items:center'>
              <Label>姓名：</Label>
              <Input type='text' placeholder='请输入姓名' placeholderStyle='color:#646464' focus style='padding:20px' />
            </View>
            <View style='display:flex; align-items:center'>
              <Label>密码：</Label>
              <Input
                type='text'
                placeholder='请输入密码'
                placeholderStyle='color:#646464'
                password
                focus
                style='padding:20px'
              />
            </View>
            <View style='display:flex; align-items:center'>
              <Label>手机号：</Label>
              <Input
                type='text'
                placeholder='请输入手机号'
                placeholderStyle='color:#646464'
                focus
                style='padding:20px'
                maxLength='11'
              />
            </View>
            <View style='display:flex; align-items:center'>
              <Label>个人用户：</Label>
              <Switch name='switch' className='form-switch' style='padding:20px' />
            </View>
          </View>
          <Button onClick={this.formSubmit}>submit</Button>
        </Form>
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
)(Form_)
