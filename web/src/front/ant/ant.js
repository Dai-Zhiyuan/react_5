import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';


export default class Ant extends Component{
    render(){
        return(
            <div>
                <BackTop />
                Scroll down to see the bottom-right
                <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            </div>
        )
    }
}