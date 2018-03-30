import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexLink,Link,hashHistory} from 'react-router'

import './indentComponent.scss'
export default class Indexcomponent extends Component{
	content1(){
		this.setState({
			content:'暂时没有订单'
		})
	}
	content2(){
		this.setState({
			content:'暂时没有待付款商品'
		})
	}
	content3(){
		this.setState({
			content:'暂时没有待发货商品'
		})
	}
	content4(){
		this.setState({
			content:'暂时没有待收货商品'
		})
	}
	state = {
		content:'暂时没有订单'
	}
	goBack(){
        window.history.back()
    }
	render(){
		return(
			<div className="indent">
				<header className="indent_header">
					<i className="back icon iconfont icon-htmal5icon37" onClick={this.goBack}></i>
					<h2 className="headTitle">商品订单</h2>
				</header>
				<nav className="indent_nav">
					<ul className="nav_ul">
						<li className="all" onClick={this.content1.bind(this)}>全部</li>
						<li className="pay" onClick={this.content2.bind(this)}>待付款</li>
						<li className="fahuo" onClick={this.content3.bind(this)}>待发货</li>
						<li className="shouhuo" onClick={this.content4.bind(this)}>待收货</li>
					</ul>
				</nav>
				<main className="indent_main">
					<div className="icon_side">
						<i className="icon iconfont icon-wenjian"></i>
					</div>
					<p>{this.state.content}</p>
				</main>
			</div>
		)
	}	
}