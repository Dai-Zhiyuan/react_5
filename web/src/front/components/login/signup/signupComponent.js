import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import './signupComponent.scss'

export default class SignupComponent extends Component{
	render(){
		return(
			<div className="signup">
				<header className="signup_header">
					<a className="back">&lt;</a>
                	<h2 className="headTitle">用户注册</h2>
                	<a className="navBar fa fa-bars" ></a>
				</header>
				<main className="signup_main">
					<div className="user">
        				<i className="fa fa-mobile-phone"></i>
        				<input type="text" placeholder="手机号" />
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
        			<div className="pwd1">
        				<i className="fa fa-lock"></i>
        				<input type="text" placeholder="请输入密码"/>
        			</div>
        			<div className="pwd2">
        				<i className="fa fa-lock"></i>
        				<input type="text" placeholder="再次输入密码"/>
        			</div>
        			<a href="" className="signup_btn">确认注册</a>
				</main>
			</div>
		)
	}
}