import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import './MineComponent.scss'
export default class Indexcomponent extends Component{
    render(){
        return(
            <div className="mine">
                <header className="mine_header">
                	<i className="fa fa-commenting-o"></i>
                	<div className="user_infor">
                		<div className="headimg"><img src="" alt=""/></div>
                		<div className="username">
                			<div className="nikename">用户昵称</div>
                			<div className="user_level">用户等级</div>
                		</div>
                	</div>
                	<div className="logout_btn">退出登录</div>
                </header>
                <section className="mine_indent">
                	<div className="indent_top">
                		<h3>我的订单</h3>
                		<a href="" className="indent_btn">查看全部订单<i className="fa fa-chevron-right"></i></a>
                	</div>
                	<ul className="indent_bottom">
                		<li>
                			<i className="fa fa-credit-card"></i>
                			待付款
                		</li>
                		<li>
                			<i className="fa fa-cube"></i>
                			待发货
                		</li>
                		<li>
                			<i className="fa fa-truck"></i>
                			待收货
                		</li>
                		<li>
                			<i className="fa fa-clone"></i>
                			待评价
                		</li>
                	</ul>
                </section>
                <main className="mine_main">
                	<ul className="main_ul">
                		<li>
                			<i className="icon iconfont icon-shoucang"></i>
                			商品收藏
                		</li>
                		<li><i className="icon iconfont icon-zuji"></i>浏览足迹</li>
                		<li><i className="icon iconfont icon-dizhi"></i>地址管理</li>
                		<li><i className="icon iconfont icon-anquan"></i>账户安全</li>
                		<li><i className="icon iconfont icon-drxx66"></i>意见反馈</li>
                		<li><i className="icon iconfont icon-kefurexian"></i>客户热线</li>
                	</ul>
                </main>
            </div>
        )
    }
}