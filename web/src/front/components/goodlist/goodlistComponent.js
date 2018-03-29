import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Link,IndexLink,hashHistory} from "react-router";
import http from '../../utils/httpclient'
import './goodslist.scss'

export default class Indexcomponent extends Component{
    componentDidMount(){
        jQuery( $ => {
            $('.hyz_nav').on('click','li',function(){
                $('ul li').className = '';
            })
        })
        
    }
    search(){
        console.log(111)
        hashHistory.push('/goodslistSearch')
    }
    render(){
        return(
            <div className="hyz_goodslist">
                <div className="search">
                    <input type="text" placeholder="请输入搜索信息" onClick={this.search.bind(this)}/>
                    <i className="fa fa-search"></i>
                </div>
                <div className="goodslist clearfix">
                    <div className="hyz_nav">
                        <ul>
                            <li ref="baijiu">
                                <IndexLink to="/baijiu" activeClassName="active">白酒</IndexLink>
                            </li>
                            <li>
                                
                                <Link to="/putaojiu" activeClassName="active">葡萄酒</Link>
                            </li>
                            <li>
                                <Link to="/yangjiu" activeClassName="active">洋酒</Link>
                            </li>
                            <li>
                                <Link to="/hbp" activeClassName="active">黄/保/啤</Link>
                            </li>
                            <li>
                                <Link to="/jxss" activeClassName="active">酒仙食尚</Link>
                            </li>
                            <li>
                                <Link to="/jjzb" activeClassName="active">酒具周边</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="goodslist_cont">
                        {this.props.children}
                    </div>
                </div>
                
            </div>
        )
    }
}