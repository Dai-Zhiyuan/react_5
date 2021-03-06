import React,{Component} from 'react'
import ReactDOM from 'react-dom'

// import LazyLoad from 'react-lazyload';
import {Link} from 'react-router'
import './index.scss'

import $ from './jquery-3.2.1.min.js'

import SearchComponent from './SearchComponent/SearchComponent.js'
import CarouselComponent from './CarouselComponent/CarouselComponent.js'
import IndexNavComponent from './IndexNavComponent/IndexNavComponent.js'

import SpinnerComponent from '../spinner/SpinnerComponent.js'
import http from '../../utils/httpclient.js'


import './index.css'


export default class Indexcomponent extends Component{
    state = { //定义一个变量接收数据
        dataset1: [],
        dataset2: [],
        spinnerShow:false,

    }
    componentWillMount(){

        this.setState({
            spinnerShow:true,
        })
        http.get('products',{spike:1}).then((res)=>{
            // console.log(res)
            this.setState({   //在这里改变dataset的值
                dataset1:res.data
            }),
            this.setState({
            spinnerShow:false,
        })
            // console.log(this.state.dataset);
        }),
        http.get('products',{recommend:true}).then((res)=>{
            // console.log('hh',res)
            this.setState({   //在这里改变dataset的值
                dataset2:res.data
            })
            // console.log(this.state.dataset);
        })
    }
    componentDidMount(){
        $(function(){ 
        countDown("2019/3/30 00:00:00","#colockbox1"); 
        }); 
        function countDown(time,id){ 
            var day_elem = $(id).find('.day'); 
            var hour_elem = $(id).find('.hour'); 
            var minute_elem = $(id).find('.minute'); 
            var second_elem = $(id).find('.second'); 

            //if(typeof end_time == "string") 
            var end_time = new Date(time).getTime(),//月份是实际月份-1 
            sys_second = (end_time-new Date().getTime())/1000; 
            var timer = setInterval(function(){ 
                if (sys_second > 1) { 
                    sys_second -= 1; 
                    var day = Math.floor((sys_second / 3600) / 24); 
                    var hour = Math.floor((sys_second / 3600) % 24); 
                    var minute = Math.floor((sys_second / 60) % 60); 
                    var second = Math.floor(sys_second % 60); 
                    day_elem && $(day_elem).text(day);//计算天 
                    $(hour_elem).text(hour<10?"0"+hour:hour);//计算小时 
                    $(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟 
                    $(second_elem).text(second<10?"0"+second:second);//计算秒杀 
                } else { 
                    clearInterval(timer); 
                } 
            }, 1000); 
        } 
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
                <SpinnerComponent show = {this.state.spinnerShow} />
                <main id='j_index_main'>
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
                        <p className="colockbox" id="colockbox1">
                            距结束 
                            <span className="hour">00</span> :&nbsp;
                            <span className="minute">00</span> :&nbsp;
                            <span className="second">00</span> 
                        </p>
                        <a href="#">更多的商品你来抢！<i className='fa fa-chevron-circle-right'></i></a>
                    </div>
                    <div className="spike_list">
                        <ul>    
                            {
                                this.state.dataset1.map((item)=>{
                                    return(
                                        <Link to ={"/details?id="+item.id} key={item.id}> 
                                            <li  key={item.id}>
                                                    
                                                    <img src={item.img} />
                                                    <span className='name'>{item.name}</span>
                                                    <span className='salesPrice'>￥{item.salePrice}</span>
                                                    <span className='index_price'><del>￥{item.price}</del></span>
                                                   
                                            </li>
                                        </Link>
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
                                            <Link to ={"/details?id="+item.id} key={item.id}> 
                                                <li  key={item.id}>
                                                    
                                                        <img src={item.img} />
                                                        <span className='name'>{item.name}</span>
                                                        <span className='salesPrice'>￥{item.salePrice}</span>
                                                        <span className='index_price'><del>￥{item.price}</del></span>
                                                    
                                                </li>
                                            </Link>
                                        )
                                    })
                                } 
                            </ul>
                        </div>
                    </div>
                </main>   
            <div className="indexbox">
            </div>
            </div>
        )
    }
}

