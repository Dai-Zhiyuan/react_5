import React,{Component} from 'react'
import ReactDOM from 'react-dom'
// import LazyLoad from 'react-lazyload';
// import {Link} from 'react-router'

import './index.scss'

import $ from './jquery-3.2.1.min.js'

import SearchComponent from './SearchComponent/SearchComponent.js'
import CarouselComponent from './CarouselComponent/CarouselComponent.js'
import IndexNavComponent from './IndexNavComponent/IndexNavComponent.js'
import BackTopComponent from './backtop/backtop.js'

import http from '../../utils/httpclient.js'


export default class Indexcomponent extends Component{
    state = { //定义一个变量接收数据
        dataset1: [],
        dataset2: []

    }
    componentWillMount(){
        http.get('products',{spike:1}).then((res)=>{
            console.log(res)
            this.setState({   //在这里改变dataset的值
                dataset1:res.data
            })
            // console.log(this.state.dataset);
        }),
        http.get('products',{recommend:true}).then((res)=>{
            console.log('hh',res)
            this.setState({   //在这里改变dataset的值
                dataset2:res.data
            })
            // console.log(this.state.dataset);
        })
    }
    render(){
        return(
            <div id='jiuxian'>
                <header id='j_search'>
                    <SearchComponent/>
                </header>
                <section id='j_carousel'>   
                    <CarouselComponent/>
                </section>
                <nav id='j_nav'>
                    <IndexNavComponent/>
                </nav>
                <main id='j_main'>
                    <div className="picture_show">
                        <img src="./src/front/img/picture_show1.png" alt="" />
                        <img src="./src/front/img/picture_show2.png" alt="" className='picture1' />
                        <img src="./src/front/img/picture_show3.png" alt="" className='picture2'/>
                    </div>
                    <div className="headline">
                        <img src="./src/front/img/headline.jpg" alt="" />
                        <a href="#">清仓直降 奉赔到底 全场低至1元 清完下架!</a>
                    </div>
                    <div className="spike">
                        <h3>掌上秒拍</h3>
                        <p>距结束 <span>11</span> : <span>11</span> : <span>11</span></p>
                        <a href="#">更多的商品你来抢！<i className='fa fa-chevron-circle-right'></i></a>
                    </div>
                    <div className="spike_list">
                        <ul>    
                            {
                                this.state.dataset1.map((item)=>{
                                    return(
                                            <li  key={item.id}>
                                                <a href="#">
                                                    <img src={item.img} />
                                                    <span className='name'>{item.name}</span>
                                                    <span className='salesPrice'>￥{item.salePrice}</span>
                                                    <span className='price'><del>￥{item.price}</del></span>
                                                </a>
                                            </li>
                                    )
                                })
                            } 
                        </ul>
                    </div>
                    <div className="pubBanner">
                        <ul>
                            <li><img src="./src/front/img/banner1.jpg" alt="" /></li>
                            <li><img src="./src/front/img/banner2.jpg" alt="" /></li>
                            <li><img src="./src/front/img/banner3.jpg" alt="" /></li>
                            <li><img src="./src/front/img/banner4.jpg" alt="" /></li>
                        </ul>
                    </div>
                    <div className="newProduct">
                        <img src="./src/front/img/newProduct1.jpg" className='newProduct1'/>
                        <img src="./src/front/img/newProduct2.jpg" className='newProduct2'/>
                        <img src="./src/front/img/newProduct3.jpg" className='newProduct3'/>
                    </div>
                    <div className="indexClassify">
                        <div className="indexTitle">
                            <div className="bigtitle">
                                <img src="./src/front/img/index_title1.jpg"/>
                            </div>
                            <div className="smalltitle">
                                <img src="./src/front/img/index_title11.jpg"/>
                                <img src="./src/front/img/index_title12.jpg"/>
                                <img src="./src/front/img/index_title13.jpg"/>
                                <img src="./src/front/img/index_title14.jpg"/>
                                <img src="./src/front/img/index_title15.jpg"/>
                            </div>
                        </div>
                        <div className="indexTitle">
                            <div className="bigtitle">
                                <img src="./src/front/img/index_title2.jpg"/>
                            </div>
                            <div className="smalltitle">
                                <img src="./src/front/img/index_title21.jpg"/>
                                <img src="./src/front/img/index_title22.jpg"/>
                                <img src="./src/front/img/index_title23.jpg"/>
                                <img src="./src/front/img/index_title24.jpg"/>
                                <img src="./src/front/img/index_title25.jpg"/>
                            </div>
                        </div>
                        <div className="indexTitle">
                            <div className="bigtitle">
                                <img src="./src/front/img/index_title3.jpg"/>
                            </div>
                            <div className="smalltitle">
                                <img src="./src/front/img/index_title31.jpg"/>
                                <img src="./src/front/img/index_title32.jpg"/>
                                <img src="./src/front/img/index_title33.jpg"/>
                                <img src="./src/front/img/index_title34.jpg"/>
                                <img src="./src/front/img/index_title35.jpg"/>
                            </div>
                        </div>
                        <div className="indexTitle">
                            <div className="bigtitle">
                                <img src="./src/front/img/index_title4.jpg"/>
                            </div>
                            <div className="smalltitle">
                                <img src="./src/front/img/index_title21.jpg"/>
                                <img src="./src/front/img/index_title22.jpg"/>
                                <img src="./src/front/img/index_title23.jpg"/>
                                <img src="./src/front/img/index_title24.jpg"/>
                                <img src="./src/front/img/index_title25.jpg"/>
                            </div>
                        </div>
                        <div className="indexTitle">
                            <div className="bigtitle">
                                <img src="./src/front/img/index_title5.jpg"/>
                            </div>
                            <div className="smalltitle">
                                <img src="./src/front/img/index_title31.jpg"/>
                                <img src="./src/front/img/index_title12.jpg"/>
                                <img src="./src/front/img/index_title33.jpg"/>
                                <img src="./src/front/img/index_title14.jpg"/>
                                <img src="./src/front/img/index_title34.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="hotRecommend">
                        <h5 className="hot_title">爆款推荐</h5>
                        <div className="hot_list">
                            <ul>    
                                {
                                    this.state.dataset2.map((item)=>{
                                        return(
                                            <li  key={item.id}>
                                                <a href="#">
                                                    <img src={item.img} />
                                                    <span className='name'>{item.name}</span>
                                                    <span className='salesPrice'>￥{item.salePrice}</span>
                                                    <span className='price'><del>￥{item.price}</del></span>
                                                </a>
                                            </li>
                                        )
                                    })
                                } 
                            </ul>
                        </div>
                    </div>
                </main>   
            </div>
        )
    }
}

