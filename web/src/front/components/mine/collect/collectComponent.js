import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {IndexLink,Link,hashHistory} from 'react-router'

import http from '../../../utils/httpclient.js'

import './collectComponent.scss'
export default class Indexcomponent extends Component{
	componentWillMount(){
		var username1 = sessionStorage.getItem("username");
		http.get('getCollect',{username:username1}).then((res) => {
			console.log(res)
			this.setState({
				data:res.data
			})
		})	
	}
	addCart(id,name,price,img){
		var username1 = sessionStorage.getItem("username");
		http.get('add',{db:'cart',username:username1,_id:id,name:name,price:price,img:img,qty:1}).then((res) => {
			console.log(res);
		})
	}
	delCollect(id){
		http.get('delete',{db:'collect',_id:id}).then((res) => {
			console.log(res)
			var username1 = sessionStorage.getItem("username");
			http.get('getCollect',{username:username1}).then((res) => {
				this.setState({
					data:res.data
				})
			})
		})
	}
	state = {
		data:[],
	}
	render(){
		return(
			<div className="collect">
				<header className="collect_header" >
					<IndexLink className="back icon iconfont icon-htmal5icon37" to="/mine"></IndexLink>
					<h2 className="headTitle">我的收藏</h2>
					<span className="compile">编辑</span>
				</header>
				<main className="collect_main">
					<ul className="collect_list">
						{
							this.state.data.map((item,idx)=>{
								return(
									<li className="collect_product" key={idx} data-id={item._id}>
										<img src={item.img} alt=""/>
										<div className="product_detail">
											<p>{item.name}</p>
											<span>￥{item.price}.00</span>
										</div>
										<div className="product_button">
											<span className="addCart">
												<i className="icon iconfont icon-gouwuche-01" onClick={this.addCart.bind(this,item._id,item.name,item.price,item.img)}></i>
											</span>
											<span className="delCollect" onClick={this.delCollect.bind(this,item._id)}>
												<i className="icon iconfont icon-shanchu"></i>
											</span>
										</div>
									</li>
								)
							})
						}
					</ul>
				</main>
			</div>
		)
	}
}