import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Link,hashHistory} from 'react-router'

import './gotoSearch.scss'

export default class GotoSearchComponent extends Component{
    componentDidMount(){
        this.refs.input.value = '';
        this.refs.input.focus();
        document.addEventListener('keyup',(e) => {
            if(e.keyCode == '13'){
                if(this.refs.input){
                    let brand = this.refs.input.value;
                    hashHistory.push('/list?brand='+brand) 
                } 
            }
        })
    }
    render(){
        return(
            <div id="gotoSearch">
                <div className="hotsearch-top">
                    <i className='fa fa-search'></i>
                    <input type="text" placeholder='超值加价购' ref="input"/>
                    <Link to='/index'><span>取消</span></Link>
                </div>

                <div className="hotsearch">
                    <h5>热门搜索</h5>
                    <ul className="hotsearch-list">
                        <li>茅台</li>
                        <li>五粮液</li>
                        <li>剑南春</li>
                        <li>泸州老窖</li>
                        <li>汾酒</li>
                        <li>洋河</li>
                        <li>古井贡</li>
                        <li>郎酒</li>
                        <li>西凤</li>
                        <li>酒鬼酒</li>
                        <li>董酒</li>
                        <li>拉菲</li>
                        <li>奔富</li>
                        <li>黄尾袋鼠</li>
                        <li>茉莉花</li>
                        <li>魅利</li>
                    </ul>
                </div>

                <div className="historysearch">
                    <h5>最近搜索</h5>
                    <ul>
                        <li>拉菲</li>
                        <li>奔富</li>
                        <li>茉莉花</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}