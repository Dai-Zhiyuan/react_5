import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {IndexLink,Link,hashHistory} from 'react-router'

import './findComponent.scss'
import http from '../../../utils/httpclient.js'

export default class Indexcomponent extends Component{
	goBack(){
	    window.history.back()
	}
	yzm(){
	    var res = '';
	    for(var i=0; i<4; i++){
	        res +=parseInt(Math.random()*10)
	    };
	    return res;
	}
	changeCode(){
	    this.setState({
	            yzm:this.yzm()
	    })
	}
	getJym(){
	    this.setState({
	        jym:this.yzm()
	    });

	    setTimeout(this.callback.bind(this),100);
	    var jymTime = 60;
	    this.setTime(this,jymTime);
	}
	// 校验码倒计时
	setTime(val,jymTime){
	    if(jymTime==0){
	        val.refs.jymBtn.removeAttribute("disabled");
	        val.refs.jymBtn.style.background='#DF3832'
	        val.refs.jymBtn.value = '重新获取';
	        jymTime = 60;
	        if(val.refs.jymBtn){
	            val.refs.jymBtn.removeAttribute("disabled");
	            val.refs.jymBtn.style.background='#DF3832'
	            val.refs.jymBtn.value = '重新获取';
	        }
	        jymTime = 10;
	        val.setState({
	            jym:null
	        })
	        return
	    }else{
	        if(val.refs.jymBtn){
	            val.refs.jymBtn.value = "重新发送(" + jymTime + ")";
	            val.refs.jymBtn.setAttribute("disabled", true);
	            val.refs.jymBtn.style.background='#626365';
	        }
	        jymTime--;
	    }
	    setTimeout(function(){
	        val.setTime(val,jymTime)
	    },1000)
	}
	callback(){
	    console.log('校验码：'+ this.state.jym);
	}
	find(){
		var tel_regExp = /^[1][3,4,5,7,8][\d]{9}$/;
		if(tel_regExp.test(this.refs.tel.value)){
			if(this.refs.yzm.value == this.state.yzm){
				if(this.refs.jym.value == this.state.jym){
					http.get('selectAppUsers',{username:this.refs.tel.value}).then((res) => {
						console.log('当前帐户密码为：' + res.data[0].password);
						hashHistory.push({pathname:'login'})
					})
				}else{
					alert('校验码错误');
					this.refs.jym.value = '';
				}
			}else{
				alert('验证码错误');
                this.refs.yzm.value = '';
			}
		}else{
			alert('请输入正确的手机号');
            this.refs.tel.value = '';
		}
	}
	state = {
		yzm:this.yzm(),
		jym:null
	}
	render(){
		return (
			<div className="find">
				<header className="find_header">
					<i className="icon iconfont icon-htmal5icon37 back" onClick={this.goBack}></i>
					<h2 className="headTitle">找回密码</h2>
					<a className="navBar fa fa-bars" ></a>
				</header>
				<main className="find_main">
					<div className="user">
        				<i className="fa fa-mobile-phone"></i>
        				<input type="text" placeholder="手机号" ref="tel"/>
        			</div>
        			<div className="verify">
        				<div className="yzminput">
        					<input type="text" placeholder="请输入验证码" ref="yzm"/>
        				</div>
        				<div className="yzmimg">
        					<p className="codeimg">{this.state.yzm}</p>
        					<span className="change" onClick={this.changeCode.bind(this)}>换一张</span>
        				</div>
        			</div>
        			<div className="identify">
        				<input type="text" placeholder="请输入校验码" className="security_code" ref="jym"/>
        				<input type="button" value="获取校验码" className="getjym" ref="jymBtn" onClick={this.getJym.bind(this)}/>
        			</div>
        			<span  className="find_btn" onClick={this.find.bind(this)}>找回密码</span>
				</main>
			</div>
		)
	}
}