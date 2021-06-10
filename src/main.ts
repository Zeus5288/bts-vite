import { createApp } from 'vue'
import router from '@/router'
import { 
    NavBar, 
    Tabbar, 
    TabbarItem, 
    Row, 
    Col, Icon, 
    Button, 
    Overlay, 
    Picker, 
    Calendar, 
    List, 
    PullRefresh 
} from 'vant';

import App from './App.vue'

// vant样式
import 'vant/lib/index.css';
// 初始化样式
import '@/assets/css/reset.css'
import '@/assets/css/common.scss'

// px自动转化成rem
import 'amfe-flexible/index.js'

const app = createApp(App);
app.use(NavBar)
.use(Tabbar)
.use(TabbarItem)
.use(Row)
.use(Col)
.use(Icon)
.use(Button)
.use(Overlay)
.use(Picker)
.use(Calendar)
.use(List)
.use(PullRefresh);
app.use(router);
app.mount('#app');
