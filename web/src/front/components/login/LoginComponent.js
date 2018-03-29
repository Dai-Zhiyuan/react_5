import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {IndexLink,Link,hashHistory} from 'react-router'

import './LoginComponent.scss'
import http from '../../utils/httpclient.js'

export default class Indexcomponent extends Component{
    componentWillMount(){
        this.setState({
            yzm:this.yzm(),

        })
    }
    getJym(){
        this.setState({
            jym:this.yzm()
        });

        setTimeout(this.callback.bind(this),100);
        var jymTime = 10;
        this.setTime(this,jymTime);
    }
    // 校验码倒计时
    setTime(val,jymTime){
        if(jymTime==0){
            if(val.refs.jymBtn){
                val.refs.jymBtn.removeAttribute("disabled");
                val.refs.jymBtn.style.background='#DF3832'
                val.refs.jymBtn.value = '重新获取';
            }
            
            jymTime = 10;
            val.setState({
                jym:null
            })
            console.log(val.state.jym);
            return
        }else{
            if(val.refs.jymBtn){
                val.refs.jymBtn.setAttribute("disabled", true);
                val.refs.jymBtn.style.background='#626365';
                val.refs.jymBtn.value = "重新发送(" + jymTime + ")";
            }
            
            jymTime--;
        }
        setTimeout(function(){
            val.setTime(val,jymTime)}
            ,1000)
    }
    callback(){
        console.log(this.state.jym)
    }
    yzm(){
        var res = '';
        for(var i=0; i<4; i++){
            res +=parseInt(Math.random()*10)
        };
        return res;
    }
    showPhone(){
        this.setState({
            phoneShow:true,
            accountShow:false,
            phoneColor:'#DE4943',
            accountColor:'#626365',
            yzm:this.yzm()
        })
    }
    showAccount(){
        this.setState({
            accountShow:true,
            phoneShow:false,
            phoneColor:'#626365',
            accountColor:'#DE4943',
            yzm:this.yzm()
        })
    }
    hasPhone(event){
        if(!event.target.value){
            this.setState({
                noPhoneNum:true,
                errorPhoneNum:false
            })
        }else{
            var phone_regExp = /^[1][3,4,5,7,8][\d]{9}$/;
            if(!phone_regExp.test(event.target.value)){
                this.setState({
                noPhoneNum:false,
                errorPhoneNum:true
                })
            }else{
                this.setState({
                    noPhoneNum:false,
                    errorPhoneNum:false
                }) 
            }    
        }
    }
    hasYzm(event){
        if(!event.target.value){
            this.setState({
                noYzm:true
            })
        }else{
            this.setState({
                noYzm:false
            })
        }
    }
    changeCode(){
        this.setState({
            yzm:this.yzm(),

        })
    }
    loginPhone(){
        var tel_regExp = /^[1][3,4,5,7,8][\d]{9}$/;
        if(tel_regExp.test(this.refs.tel.value)){
            http.get('selectAppUsers',{username:this.refs.tel.value}).then((res) => {
                console.log(res)
                if(res.qty>0){
                    if(this.refs.yzm.value == this.state.yzm){
                        if(this.refs.jym.value == this.state.jym){
                            sessionStorage.setItem('username',this.refs.tel.value);
                            hashHistory.push({pathname:'mine'});
                        }else{
                            alert('校验码错误')
                        }
                    }else{
                        alert('验证码错误');
                        this.refs.yzm.value = '';
                    }
                }else{
                    alert('该手机号未被注册');
                    this.refs.tel.value = '';
                }
            })
        }else{
            alert('请输入正确的手机号');
            this.refs.tel.value = '';
        }
    }
    loginAccount(){
        if(this.refs.yzm.value == this.state.yzm){
            http.get('selectAppUsers',{username:this.refs.tel.value,password:this.refs.pwd.value}).then((res) => {
                var data = res.data[0];
                console.log(data);
                if(data.username == this.refs.tel.value && data.password == this.refs.pwd.value){
                    sessionStorage.setItem('username',data.username);
                    hashHistory.push({pathname:'mine'});
                    console.log(sessionStorage);
                }else{
                    alert('账户或密码错误');
                }
            })
        }else{
            alert('验证码错误');
            this.refs.yzm.value = '';
        }
    }
    getData(oThis){
        console.log(oThis)
        http.get('selectAppUsers',{username:oThis.refs.tel.value}).then((res) => {
            oThis.setState({
                data:res
            })
            console.log(this.state.data)
        })
    }
    state={
        accountShow:true,
        phoneShow:false,
        phoneColor:'#626365',
        accountColor:'#DE4943',
        yzm:0,
        phoneVal:'',
        noPhoneNum:'',
        errorPhoneNum:'',
        noYzm:'',
        jym:null,
    }
    render(){
        var content;
        if(this.state.phoneShow){
            var content1;
            if(this.state.noPhoneNum){
                content1 =(
                    <p>！请输入手机号</p>
                )
            }
            if(this.state.errorPhoneNum){
                content1 =(
                    <p>！请输入正确的手机号</p>
                )
            }

            var content2;
            if(this.state.noYzm){
                content2=(
                    <p>！请输入验证码</p>
                )
            }
            content = (
                <div className="content_phone">
                    <div className="user_phone">
                        <i className="fa fa-mobile-phone"></i>
                        <input type="text" placeholder="请输入手机号" onBlur={this.hasPhone.bind(this)} ref="tel"/>
                        {content1}
                    </div>
                    <div className="verify_phone">
                        <div className="yzminput">
                            <input type="text" placeholder="请输入验证码"onBlur={this.hasYzm.bind(this)} ref="yzm"/>
                            {content2}
                        </div>
                        <div className="yzmimg">
                            <p className="codeimg">{this.state.yzm}</p>
                            <span className="change" onClick={this.changeCode.bind(this)}>换一张</span>
                        </div>
                    </div>
                    <div className="identify_phone">
                        <input type="text" placeholder="请输入校验码" className="security_code" ref="jym"/>
                        <input type="button" value="获取校验码" className="getjym" onClick={this.getJym.bind(this)} ref="jymBtn"/>
                    </div>
                    <span className="login_btn2" onClick={this.loginPhone.bind(this)}>立即登录</span>
                    <div className="serve_phone">
                        <IndexLink to="/reg" activeClassName="regist">免费注册</IndexLink>
                        <a href="" className="getpwd">找回密码</a>
                    </div>
                </div>
            )
        }
        if(this.state.accountShow){
            var content2;
            if(this.state.noYzm){
                content2=(
                    <p>！请输入验证码</p>
                )
            }
            content = (
                <div className="content_account">
                    <div className="user_account">
                        <i className="fa fa-user"></i>
                        <input type="text" placeholder="用户名/邮箱/手机号" ref="tel"/>
                    </div>
                    <div className="pwd_account">
                        <i className="fa fa-lock"></i>
                        <input type="text" placeholder="密码" ref="pwd"/>
                    </div>
                    <div className="verify_account">
                        <div className="yzminput">
                            <input type="text" placeholder="请输入验证码" onBlur={this.hasYzm.bind(this)} ref="yzm"/>
                            {content2}
                        </div>
                        <div className="yzmimg">
                            <p className="codeimg">{this.state.yzm}</p>
                            <span className="change" onClick={this.changeCode.bind(this)}>换一张</span>
                        </div>
                    </div>
                    <span  className="login_btn1" onClick={this.loginAccount.bind(this)}>立即登录</span>
                    <div className="serve_account">
                        <IndexLink to="/reg" activeClassName="regist">免费注册</IndexLink>
                        <a href="" className="getpwd">找回密码</a>
                    </div>
                </div>
            )
        }
        return(
            <div className="login">
                <header className="login_header">
                	<a className="back">&lt;</a>
                	<h2 className="headTitle">用户登录</h2>
                	<a className="navBar fa fa-bars" ></a>
                </header>
                <main className="login_main">
                	<div className="login_select">
                		<p className="select_account" onClick={this.showAccount.bind(this)} style={{color:this.state.accountColor}}>帐号登录</p>
                		<p className="select_phone" onClick={this.showPhone.bind(this)} style={{color:this.state.phoneColor}}>手机动态密码登录</p>
                	</div>
                	<div className="login_content">
                		{content}
                	</div>
                </main>
            </div>
        )
    }
}