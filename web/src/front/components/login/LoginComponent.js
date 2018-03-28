import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import './LoginComponent.scss'


export default class Indexcomponent extends Component{
    render(){
        return(
            <div className="login">
                <headr className="login_header">
                	<a className="back">&lt;</a>
                	<h2 className="headTitle">用户登录</h2>
                	<a className="navBar fa fa-bars" ></a>
                </headr>
                <main className="login_main">
                	<div className="login_select">
                		<p className="select_account">帐号登录</p>
                		<p className="select_phone">手机动态密码登录</p>
                	</div>
                	<div className="login_content">
                		<div className="content_account">
                			<div className="user">
                				<i className="fa fa-user"></i>
                				<input type="text" placeholder="用户名/邮箱/手机号" />
                			</div>
                			<div className="pwd">
                				<i className="fa fa-lock"></i>
                				<input type="text" placeholder="密码"/>
                			</div>
                			<div className="verify">
                				<div className="yzminput">
                					<input type="text" placeholder="请输入验证码"/>
                				</div>
                				<div className="yzmimg">
                					<p className="codeimg"></p>
                					<a href="" className="change">换一张</a>
                				</div>
                			</div>
                			<a href="" className="login_btn1">立即登录</a>
                			<div className="serve1">
                				<a href="" className="regist">免费注册</a>
                				<a href="" className="getpwd">找回密码</a>
                			</div>
                		</div>
                		<div className="content_phone">
                			<div className="user">
                				<i className="fa fa-mobile-phone"></i>
                				<input type="text" placeholder="请输入手机号，新用户将自动注册" />
                			</div>
                			<div className="verify">
                				<div className="yzminput">
                					<input type="text" placeholder="请输入验证码"/>
                				</div>
                				<div className="yzmimg">
                					<p className="codeimg"></p>
                					<a href="" className="change">换一张</a>
                				</div>
                			</div>
                			<div className="identify">
                				<input type="text" placeholder="请输入校验码" className="security_code"/>
                				<a href="" className="getjym">获取校验码</a>
                			</div>
                			<a href="" className="login_btn2">立即登录</a>
                			<div className="serve2">
                				<a href="" className="regist">免费注册</a>
                				<a href="" className="getpwd">找回密码</a>
                			</div>
                		</div>
                	</div>
                </main>
            </div>
        )
    }
}