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
// 填写订单
import jiesuanComponent from '../components/jiesuan/jiesuanComponent.js'
// 支付
import zhifuComponent from '../components/zhifu/zhifuComponent.js'



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
// 详情页
import DetailsComponent from '../components/details/detailsComponent.js'

//分类子文件
import BaijiuComponent from '../components/goodlist/baijiu/baijiuConponent'
import PutaojiuComponent from '../components/goodlist/putaojiu/putaojiuComponent'
import YangjiuComponent from '../components/goodlist/yangjiu/yangjiuComponent'
import HbpComponent from '../components/goodlist/hbp/hbpComponent'
import JxssComponent from '../components/goodlist/jxss/jxssComponent'
import JjzbComponent from '../components/goodlist/jjzb/jjzbComponent'

import GotoSearchComponent from '../components/index/gotoSearch/gotoSearch'


import GoodslistSearchComponent from '../components/goodlist/search/searchComponent'



// 登录子类
import regComponent from '../components/login/reg/regComponent.js'
import indentComponent from '../components/mine/indent/indentComponent.js'

export default (
    <Route path='/' component={appComponent}> 
        <IndexRedirect to="/home" />
        <Route path='/home' component={HomeComponent}>
            <IndexRedirect to="/index" />
            <Route path='/index' component={IndexComponent}/>
            <Route path='/goodlist' component={goodlistComponent}>
                <IndexRedirect to="/baijiu"/>
                <Route path="/baijiu" component={BaijiuComponent} />
                <Route path="/putaojiu" component={PutaojiuComponent} />
                <Route path="/yangjiu" component={YangjiuComponent} />
                <Route path="/hbp" component={HbpComponent} />
                <Route path="/jxss" component={JxssComponent} />
                <Route path="/jjzb" component={JjzbComponent} />
            </Route>
            <Route path='/community' component={CommunityComponent}/>
            <Route path='/mine' component={MineComponent}/>
            <Route path='/list' component={ListComponent}/>
            <Route path='/gotoSearch' component={GotoSearchComponent}/>              
            <Route path='/mine' component={MineComponent} />
            <Route path='/login' component={LoginComponent} /> 
            <Route path='/reg' component={regComponent}/>
            <Route path='/list' component={ListComponent}/>            
        </Route>
        <Route path='/indent' component={indentComponent}></Route>
        <Route path='/details' component={DetailsComponent}></Route>
        <Route path='/cart' component={CartComponent}/>
        <Route path='/jiesuan' component={jiesuanComponent}/>
        <Route path='/zhifu' component={zhifuComponent}/> 
        <Route path='/goodslistSearch' component={GoodslistSearchComponent}></Route>
            <Route path='/cart' component={CartComponent}/>
          
    </Route>
    
)



