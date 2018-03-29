import React,{Component} from 'react'
import {Route,IndexRedirect} from 'react-router'

// 根目录
import appComponent from '../components/app/appComponent.js'
// home
import HomeComponent from '../components/home/home.js'
// 首页
import HeaderComponent from '../components/home/header/header.js'
import ContainerComponent from '../components/home/container/container.js'
import NavComponent from '../components/home/nav/nav.js'

import Products from '../components/products/products.js'
import ReactUsers from '../components/reactUsers/reactUsers.js'

// 登录
import LoginComponent from '../components/login/LoginComponent.js'

import IndexComponent from '../components/index/IndexComponent.js'

export default (
    <Route path='/' component={appComponent}> 
        <IndexRedirect to="/login" />
        <Route path='/login' component={LoginComponent} />  
        <Route path='/HomeComponent' component={HomeComponent} >
                <IndexRedirect to="/index" />
                <Route path='/index' component={IndexComponent} />
           
            

                <Route path='/Products' component={Products} />
                <Route path='/ReactUsers' component={ReactUsers} />
            
        </Route>
    </Route>
)



