import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {IndexLink,Link,hashHistory} from 'react-router'

import './MineComponent.scss'
export default class Indexcomponent extends Component{
    componentWillMount(){
        var username1 = sessionStorage.getItem("username");
        this.setState({
            username:username1
        })
        if(!username1){
            hashHistory.push({pathname:'login'});
        }
    }
    logout(){
        var con =confirm('确定要退出登录吗?');
        if(con==true){
           hashHistory.push({pathname:'index'}); 
           sessionStorage.removeItem('username');
        }
    }
    goIndent(){
        hashHistory.push({pathname:'indent'}); 
    }
<<<<<<< HEAD
    collect(){
        
    }
=======
>>>>>>> 1b99b76ba6d4ac74aedb64f35fa27570e19aa104
    state = {
        username:''
    }
    render(){
        return(
            <div className="mine">
                <header className="mine_header">
                	<i className="icon iconfont icon-shezhi"></i>
                	<div className="user_infor">
                		<div className="headimg"><img src="./src/front/img/touxiang.png" alt=""/></div>
                		<div className="username">
                			<div className="nikename">{this.state.username}</div>
                			<div className="user_level">会员等级LV1</div>
                		</div>
                	</div>
                	<div className="logout_btn" onClick={this.logout.bind(this)}>退出登录</div>
                </header>
                <section className="mine_indent">
                	<div className="indent_top">
                		<h3>我的订单</h3>
                		<IndexLink to="/indent" className="indent_btn">
                            查看全部订单
                            <i className="fa fa-chevron-right"></i>
                        </IndexLink>
                	</div>
                	<ul className="indent_bottom">
                		<li onClick={this.goIndent.bind(this)}>
                			<i className="fa fa-credit-card"></i>
                			待付款
                		</li>
                		<li onClick={this.goIndent.bind(this)}>
                			<i className="fa fa-cube"></i>
                			待发货
                		</li>
                		<li onClick={this.goIndent.bind(this)}>
                			<i className="fa fa-truck"></i>
                			待收货
                		</li>
                		<li onClick={this.goIndent.bind(this)}>
                			<i className="fa fa-clone"></i>
                			待评价
                		</li>
                	</ul>
                </section>
                <main className="mine_main">
                	<ul className="main_ul">
                		<IndexLink to="/collect">
                			<i className="icon iconfont icon-shoucang"></i>
                			商品收藏
                		</IndexLink>
                		<li><i className="icon iconfont icon-zuji"></i>浏览足迹</li>
                		<li><i className="icon iconfont icon-dizhi1"></i>地址管理</li>
                		<li><i className="icon iconfont icon-ai-safe"></i>账户安全</li>
                		<li><i className="icon iconfont icon-drxx66"></i>意见反馈</li>
                		<li><i className="icon iconfont icon-kefurexian"></i>客户热线</li>
                	</ul>
                </main>
            </div>
        )
    }
}