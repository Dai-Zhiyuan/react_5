import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BackTop} from 'antd';

export default class BackTopComponent extends Component{
    render(){
        return(
            <div>
               <BackTop/>
               <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            </div>
        )
    }
}