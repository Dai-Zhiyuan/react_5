import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from "react-router";
import http from '../../utils/httpclient'
import './list.scss'

export default class Indexcomponent extends Component{
    state = {
        dataset: []
    }
    componentWillMount(){
        
        http.get('products',this.props.location.query).then((res) => {
            // console.log(res)
            this.setState({
                dataset: res.data
            })
        })
    }
    all(){
        http.get('products',this.props.location.query).then((res) => {
            // console.log(res)
            this.setState({
                dataset: res.data
            })
        })
    }
    saleOrder(){
        // console.log(this)
        http.get('saleProducts',this.props.location.query).then((res) => {
            // console.log(res)
            this.setState({
                dataset: res.data
            })
        })
    }
    priceOrder(){
        // console.log(this)
        http.get('priceProducts',this.props.location.query).then((res) => {
            // console.log(res)
            this.setState({
                dataset: res.data
            })
        })
    }
    render(){
        // console.log(location.href)
        console.log('111',(this.props.location.query))
        
        return(
            <div className="hyz_list">
                <div className="listHeader">
                    <i className="fa fa-chevron-left"></i>
                    <h3>商品列表</h3>
                    <span>筛选</span>
                </div>
                <div className="listNav">
                    <ul>
                        <li onClick={this.all.bind(this)}><span>综合</span></li>
                        <li onClick={this.saleOrder.bind(this)}><span>销量</span></li>
                        <li onClick={this.priceOrder.bind(this)}><span>价格</span></li>
                        <li><i className="fa fa-list-ul"></i></li>
                    </ul>
                </div>
                <div className="listGoods">
                    <ul>
                        {
                            this.state.dataset.map((item,idx) => {
                                return (
                                <li key={idx}>
                                    <Link to={"/details?id="+item.id}>
                                        <img src={item.img} />
                                        <p className="goodsName">{item.name}</p>
                                        <p>￥{item.price}</p>
                                        <p>产地：{item.address}</p>
                                        <p >销量：{item.saleQty}</p>
                                        <p><span>99%好评</span><span>评论数：{item.reviewQty}</span></p>
                                    </Link>
                                </li>
                                
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}