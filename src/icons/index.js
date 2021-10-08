import Vue from 'vue'
import SvgIcon from '../components/SvgIcon/index.vue'// svg组件

// 注册全局组件
Vue.component('svg-icon', SvgIcon)
console.log('-==================');

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
console.log('-==================');