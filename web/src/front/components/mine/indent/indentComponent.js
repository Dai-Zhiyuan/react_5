import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexLink,Link,hashHistory} from 'react-router'

import './indentComponent.scss'
export default class Indexcomponent extends Component{
	render(){
		return(
			<div className="indent">
				<header className="indent_header">
					<span className="back icon iconfont icon-htmal5icon37" ></span>
					<h2 className="headTitle">商品订单</h2>
				</header>
				<nav className="indent_nav">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</nav>
				<main className="indent_main">
				</main>
			</div>
		)
	}	
}