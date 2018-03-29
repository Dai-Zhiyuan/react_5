import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {get} from '../../utils/httpclient.js'
import {history} from 'react-router'
import './login.scss'

import HomeComponent from '../home/home.js'
import SpinnerComponent from '../spinner/SpinnerComponent.js'
export default class Indexcomponent extends Component{
   state = {
        username:'',
        password:'',
        spinnerShow:false,
    }
    gaiBianUser(event){
        this.setState({
            username:event.target.value,
           
        })
    }
    gaiBianPwd(event){
        this.setState({
            password:event.target.value
        })
    }
    login(){
       var username = this.state.username;
       var password = this.state.password;
       var params = 'username='+username+'&password='+password;
        this.setState({spinnerShow:true})
        get('http://10.3.136.55:8181/selectusers?'+params).then((res)=>{
           if(res.qty==0){
                alert('登录失败，请输入正确的账号密码');
                this.setState({
                        
                        spinnerShow:false,
                });
            }
           else{
                window.sessionStorage.setItem("username",this.state.username);
                this.props.router.push('/HomeComponent')
                this.setState({
                        
                        spinnerShow:false,
                });
           } 
        });
    }
    render(){
        
        return(
            
            <div>  
               <div className="login-box">
                    <div>
                        <h3>登录</h3>
                        <form role="form">
                             <div>
                                <label>用户名：</label>
                                <input type="text" className="username" name="username" placeholder="请输入用户名" value={this.state.username} onChange={this.gaiBianUser.bind(this)}  />
                            </div>
                            <div>
                                <label>密码：</label>
                                <input type="password" className="password" name="password" placeholder="请输入密码" value={this.state.password} onChange={this.gaiBianPwd.bind(this)} />
                            </div>
                            <div>
                                <input type="button" value="登录" className="login" onClick ={this.login.bind(this)}  />
                            </div>
                          
                        </form>

                    </div>
                    <div className="copyright">2018 © the fifth group by www.fifth_group.com</div>
                    <SpinnerComponent show1={this.state.spinnerShow}/>
                </div>
            </div>
        )
    }
}