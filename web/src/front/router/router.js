import React,{Component} from 'react'
import {Route,IndexRedirect} from 'react-router'

// 根目录
import appComponent from '../components/app/appComponent.js'
// home
import HomeComponent from '../components/home/HomeComponent.js'
// 首页
import IndexComponent from '../components/index/IndexComponent.js'
// 购物车
import CartComponent from '../components/cart/CartComponent.js'
// 列表
import ListComponent from '../components/list/ListComponent.js'
// 我的
import MineComponent from '../components/mine/MineComponent.js'
// 登录
import LoginComponent from '../components/login/LoginComponent.js'
// 分类
import goodlistComponent from '../components/goodlist/goodlistComponent.js'
// 社区
import CommunityComponent from '../components/community/CommunityComponent.js'



export default (
    <Route path='/' component={appComponent}> 
        <IndexRedirect to="/home" />
        <Route path='/home' component={HomeComponent}>
            <IndexRedirect to="/index" />
            <Route path='/index' component={IndexComponent}/>
            <Route path='/goodlist' component={goodlistComponent}/>
            <Route path='/community' component={CommunityComponent}/>
            <Route path='/cart' component={CartComponent}/>
            <Route path='/mine' component={MineComponent}/>
        </Route>
    </Route>
)



