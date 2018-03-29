import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {IndexLink,Link,hashHistory} from 'react-router'

import './collectComponent.scss'
export default class Indexcomponent extends Component{
	render(){
		return(
			<div className="collect">
				<header className="collect_header">
					<IndexLink className="back icon iconfont icon-htmal5icon37" to="/mine"></IndexLink>
					<h2 className="headTitle">商品订单</h2>
					<span className="compile">编辑</span>
				</header>
				<main className="collect_main">
					<ul className="collect_list">
						<li className="collect_product">
							<img src="../../../img/bj-lj1.jpg" alt=""/>
						</li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</main>
			</div>
		)
	}
}