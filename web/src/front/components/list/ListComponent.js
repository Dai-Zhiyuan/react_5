import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from "react-router";
// import { BackTop } from 'antd';
import http from '../../utils/httpclient'
import './list.scss'


export default class Indexcomponent extends Component{
    state = {
        dataset: []
    }
    componentWillMount(){
        // if(this.props.location.query == ''){
        //     this.props.location.query = {brand: "茅台"}
        // }
        if(this.props.location.query){
            http.get('products',this.props.location.query ).then((res) => {
                // console.log(res)
                this.setState({
                    dataset: res.data
                })
            })
        } else {
            http.get('products',{brand: "茅台"} ).then((res) => {
                // console.log(res)
                this.setState({
                    dataset: res.data
                })
            })
        }
        
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
                    <Link to="/goodlist" style={{width:"0.3rem",height:"0.3rem"}}>

                    <i className="fa fa-chevron-left" style={{padding:"3px 5px"}}>
                        
                    </i>
                    </Link>
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
                                        <p className="price">￥{item.price}</p>
                                        <p style={{color:'skyblue'}}>产地：{item.address}</p>
                                        <p style={{color:'pink'}} >销量：{item.saleQty}</p>
                                        <p><span style={{color:'green'}}>99%好评</span><span style={{color:'blue'}}>评论数：{item.reviewQty}</span></p>
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