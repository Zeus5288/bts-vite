import { createApp } from 'vue'
import router from '@/router'
import { axiosPlugin } from './plugins/axios';
import { 
    NavBar, 
    Tabbar, 
    TabbarItem, 
    CellGroup,
    Cell,
    Row, 
    Col, 
    Icon, 
    Button, 
    Tabs,
    Tab,
    Overlay, 
    Picker, 
    Calendar, 
    List, 
    PullRefresh,
    Toast
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
.use(CellGroup)
.use(Cell)
.use(Row)
.use(Col)
.use(Icon)
.use(Button)
.use(Tabs)
.use(Tab)
.use(Overlay)
.use(Picker)
.use(Calendar)
.use(List)
.use(PullRefresh)
.use(Toast);

app.use(router);
app.use(axiosPlugin);
app.mount('#app');
