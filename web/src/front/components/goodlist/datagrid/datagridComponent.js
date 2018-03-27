import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from "react-router";
import './datagrid.scss'
import http from '../../../utils/httpclient'

export default class DataGridComponent extends React.Component{
    state = {
        dataset: [],
        brandArray: [],
        addressArray: [],
        mul: 0,
        type: ''
    }
    componentWillMount(){
        // console.log(this.props.type)
        let obj = this.props.type;
        http.get('products',obj).then((res) => {
            //所有类型的商品数据
            this.setState({
                dataset: res.data
            })
            //类型
            this.setState({
                type: this.state.dataset[0].type
            })
            //品牌
            let array1 = [];
            for(var i=0;i<res.data.length;i++){
                while(array1.indexOf(res.data[i].brand) == -1){
                    array1.push(res.data[i].brand)
                    
                }
            }
            this.setState({
                brandArray: array1
            })
            //产地
            let array2 = [];
            for(var i=0;i<res.data.length;i++){
                while(array2.indexOf(res.data[i].address) == -1){
                    array2.push(res.data[i].address)
                    
                }
            }
            this.setState({
                addressArray: array2
            })
            //倍数
            let mul = Math.ceil(array1.length/3);
            this.setState({
                mul: mul*1.7 + 0.5 + 'rem'
            })
        })
    }
    render(){
        console.log(this.state.type)
        // console.log(this.state.brandArray)
        // console.log(this.state.addressArray)
        // console.dir(this.refs.hostBrand)
        // let list = 'list'
        // console.log(this.state.mul)
        return (
            <div className="datagrid">
                <div className="hostBrand" ref="hostBrand" style={{height: this.state.mul}} >
                    <div className="brand">
                        <span>热门品牌</span>
                    </div>
                    <div className="allBrand">
                        <ul>
                            {
                                this.state.brandArray.map((item,idx) => {
                                    return (
                                        <li key={idx}>
                                            <Link to ={"/list?brand="+item}  activeClassName="active">
                                                <img src="./src/front/img/bj-fj2.jpg" />
                                                <span>{item}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        
                    </div>
                </div>
                <div className="address" style={{height: '3rem'}}>
                    <div className="addressSpan">
                        <span>产地</span>
                    </div>
                    <div className="allAddress">
                        {
                            this.state.addressArray.map((item,idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={"/list?type1="+this.state.type+"&&address="+item} activeClassName="active">
                                            {item}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="price">
                    <div>
                        <span>价位</span>
                    </div>
                    <div className="allPrice">
                        
                    </div>
                </div>
            </div>
        )
    }
}