import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/me/index',
      'pages/components/Swiper',
      'pages/components/MovableView',
      'pages/components/Icon',
      'pages/components/Progress',
      'pages/components/Form',
      'pages/components/Input',
      'pages/components/Label',
      'pages/components/Button',
      'pages/components/Radio',
      'pages/components/CheckboxGroup',
      'pages/components/Picker',
      'pages/components/PickerView',
      'pages/components/Slider',
      'pages/components/Switch',
      'pages/components/Textarea',
      'pages/components/Audio',
      'pages/components/Image',
      'pages/components/Video',
      'pages/components/Camera'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '组件'
        },
        {
          pagePath: 'pages/me/index',
          text: '关于'
        }
      ]
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {
    if (0 < 1) {
      return
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
