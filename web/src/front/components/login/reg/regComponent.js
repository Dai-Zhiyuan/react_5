import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import {hashHistory} from 'react-router'
import './regComponent.scss'
import http from '../../../utils/httpclient.js'

export default class SignupComponent extends React.Component{
        yzm(){
            var res = '';
            for(var i=0; i<4; i++){
                res +=parseInt(Math.random()*10)
            };
            return res;
        }
        state={
            yzm:this.yzm(),
            noPhoneNum:'',
            errorPhoneNum:'',
            somePwd: true,
            hasReg:'',
            canReg:'',
            jym:null
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
            console.log(this.state.jym)
        }
        changeCode(){
            this.setState({
                    yzm:this.yzm()
            })
        }
        hasPhone(event){
            if(!event.target.value){
                this.setState({
                    noPhoneNum:true,
                    errorPhoneNum:false,
                    canReg:false,
                    hasReg:false
                })
            }else{
                var phone_regExp = /^[1][3,4,5,7,8][\d]{9}$/;
                if(!phone_regExp.test(event.target.value)){
                    this.setState({
                    noPhoneNum:false,
                    errorPhoneNum:true,
                    canReg:false,
                    hasReg:false
                    })
                }else{
                    var $this = this;
                    http.get('appUsers').then((res) => {
                        var res1 = res.data.some(function(item){
                            if(item.username == $this.refs.tel.value){
                                $this.setState({
                                    hasReg: true,
                                    canReg: false,
                                    noPhoneNum:false,
                                    errorPhoneNum:false,
                                })
                                return true;
                            }
                        })
                        if(!res1){
                            $this.setState({
                                canReg: true,
                                hasReg: false,
                                noPhoneNum:false,
                                errorPhoneNum:false,
                            })  
                        }
                    })
                    this.setState({
                        noPhoneNum:false,
                        errorPhoneNum:false,
                        canReg:false,
                        hasReg:false
                    }) 
                }         
            }

        }
        somePwd(){
            if(this.refs.pwd1.value == this.refs.pwd2.value){
                this.setState({
                    somePwd: true
                })
            }else{
                this.setState({
                    somePwd: false
                })
            }
        }
        reg(){
            var pwd_regExp = /^[\w]{6,16}$/;
            var tel_regExp = /^[1][3,4,5,7,8][\d]{9}$/;
            if(tel_regExp.test(this.refs.tel.value) && pwd_regExp.test(this.refs.pwd1.value)){
                if(this.refs.yzm.value == this.state.yzm){
                    if(this.refs.jym.value == this.state.jym){
                        if(this.state.canReg){
                            if(this.refs.pwd1.value == this.refs.pwd2.value){
                                http.get('insertAppUsers',{username:this.refs.tel.value,password:this.refs.pwd1.value}).then((res) => {
                                    console.log(this.refs.tel.value);
                                    hashHistory.push({pathname:'login'});
                                })
                            }else{
                                alert('两次输入的密码不一致');
                            }
                        }else{
                            this.refs.tel.value = '';
                            alert('该手机号已被注册');
                            this.setState({
                                noPhoneNum:false,
                                errorPhoneNum:false,
                                canReg:false,
                                hasReg:false
                            })
                        }
                    }else{
                        alert('校验码错误！');
                    }
                }else{
                   alert('验证码错误！'); 
                }
            }else{
                alert('亲，用户名或者密码格式错误,请参照提示好嘛！');
                this.refs.tel.value='';
                this.refs.pwd1.value='';
                this.refs.pwd2.value='';
                this.setState({
                    noPhoneNum:false,
                    errorPhoneNum:false,
                    canReg:false,
                    hasReg:false
                }) 
            }
        }
        componentDidMount(){

        }
        render(){
            var content;
            if(this.state.noPhoneNum){
                content =(
                    <p>！请输入手机号</p>
                )
            }
            if(this.state.errorPhoneNum){
                content =(
                    <p>！请输入正确的手机号</p>
                )
            }
            var content1;
            if(!this.state.somePwd){
                content1 = (
                    <p>！两次输入的密码不一致</p>
                )
            }
            if(this.state.hasReg){
                content = (
                    <p>！该手机号已被注册</p>
                )
            }
            var content2;
            if(this.state.canReg){
                content2 = (
                    <span>该手机号可以注册</span>
                )
            }
    		return(
    			<div className="reg">
    				<header className="reg_header">
    					<a className="back">&lt;</a>
        	               <h2 className="headTitle">用户注册</h2>
        	               <a className="navBar fa fa-bars" ></a>
    				</header>
    				<main className="reg_main">
    					<div className="user">
            				<i className="fa fa-mobile-phone"></i>
            				<input type="text" placeholder="手机号" onBlur={this.hasPhone.bind(this)} ref="tel"/>
                                            {content}
                                            {content2}
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
            			<div className="pwd1">
            				<i className="fa fa-lock"></i>
            				<input type="password" placeholder="密码6~16位字母，数字，下划线" ref="pwd1" onChange={this.somePwd.bind(this)}/>
            			</div>
            			<div className="pwd2">
            				<i className="fa fa-lock"></i>
            				<input type="password" placeholder="再次输入密码"
                            ref="pwd2" onChange={this.somePwd.bind(this)}/>
                            {content1}
            			</div>
            			<span href="" className="reg_btn" onClick={this.reg.bind(this)}>确认注册</span>
				    </main>
		        </div>
	 	    )
        }
}