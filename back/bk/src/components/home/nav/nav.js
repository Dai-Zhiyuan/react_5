import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";
import {get,post} from '../../../utils/httpclient.js'

import SpinnerComponent from '../../spinner/SpinnerComponent.js'

import './nav.scss'
export default class NavComponent extends Component{
    state ={
        proData:[],
        userData:[],
        db:'products',
        pageNum:1,
        qty:10,
        spinnerShow:false,
       
    }
    dataAjax(){
        this.setState({spinnerShow:true})
        var params = 'db='+this.state.db+'&pageNum='+this.state.pageNum+'&qty='+this.state.qty
         get('http://10.3.136.55:8181/page?'+params).then((res)=>{
            this.setState({
                        
                        spinnerShow:false,
            });
            this.setState({
                proData:res.data,
            });
            this.props.change({proData:res.data,userData:[],imgShow:false})
            
         })
    }
    userAjax(){
        this.setState({spinnerShow:true})
        get('http://10.3.136.55:8181/appUsers').then((res)=>{
            this.setState({
                        
                        spinnerShow:false,
            });
            this.setState({
                userData:res.data,
            });
           this.props.change({proData:[],userData:res.data,imgShow:false})
         })
    }
   
    render(){
       
        var html= 
            <div>
                <SpinnerComponent show1={this.state.spinnerShow}></SpinnerComponent>
                <ul className="list-group">
                    <div className="user">
                        <div className="portrait">
                            <img src="./src/img/portrait.jpg"  />
                        </div>
                        <div className="username">
                            <span className="fa fa-circle fa-haha"></span>
                            <small className="haha-name">日向雏田</small>
                        </div>
                    </div>
                    <div className="bianjie"></div>
                    <li className="list-group-item">
                        <i className="fa fa-user"></i>
                        <Link to="/Products" onClick={this.dataAjax.bind(this)}>产品管理</Link>
                    </li>
                    <li className="list-group-item">
                        <i className="fa fa-cloud"></i>
                        <Link to="/ReactUsers" onClick={this.userAjax.bind(this)}>用
                        户管理</Link>
                    </li>
                </ul>
               
            </div>

        return html;
        
    }
}