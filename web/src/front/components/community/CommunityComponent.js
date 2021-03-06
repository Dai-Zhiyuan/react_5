import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {IndexLink,Link,hashHistory} from 'react-router'
import './community.css'
import http from '../../utils/httpclient.js'
import {IndexLink,Link,hashHistory} from 'react-router'

import SpinnerComponent from '../spinner/SpinnerComponent.js'


export default class Indexcomponent extends Component{

    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            // 滚动方向 horizontal/vertical
            direction: 'horizontal',
            // 自动播放
            autoplay:2000,
            // 是否循环播放
            loop: true,
            // 如果需要分页器（小圆点）
            // 是否需要分页器
            pagination: '.swiper-pagination',
            // 点击分页器是否切换到对应的图片 是 true 否 false
            paginationClickable:true,

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
            // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
            // 操作包括触碰，拖动，点击pagination等。
            autoplayDisableOnInteraction:false,
        }) 
    }

    componentWillMount(){
<<<<<<< HEAD
        this.setState({
            spinnerShow:true,
        })
=======
        var username1 = sessionStorage.getItem("username");
        console.log(username1)
        if(username1){
            this.setState({
                username:username1
            })
        }
>>>>>>> 1b99b76ba6d4ac74aedb64f35fa27570e19aa104
        http.get('http://10.3.136.55:8181/community',{}).then((res)=>{
            this.setState({
                dataset:res.data
            })
            this.setState({
                spinnerShow:false,
            })
        })

    }

    state = {
<<<<<<< HEAD

        dataset : [],
        spinnerShow:false,

=======
        dataset : [],
        username: ''
>>>>>>> 1b99b76ba6d4ac74aedb64f35fa27570e19aa104
    }
    dengl(){
        hashHistory.push('/login')
    }
    render(){
        var content;
        if(this.state.username){
            content = (
                <Link to="/mine" className="goMine">
                    <i className="fa fa-user-o"></i>
                    <span>我的</span>
                </Link>
            )
        }else{
            content =(
                <Link to="/login" className="goLogin">
                    <i className="fa fa-user-o"></i>
                    <span>登录</span>
                </Link>
            )
        }
        var toast = (
            <div className="toast">
                
            </div>
        )

        return(

            <div className="community">
                
                <div className="c_header">
<<<<<<< HEAD
                    <span onClick={this.dengl}>
                        <i className="fa fa-user-o"></i>
                        <span>登录</span>
                    </span>
                    <span className="ico iconfont icon-xinxi sp2"></span>
=======
                    {content}
>>>>>>> 1b99b76ba6d4ac74aedb64f35fa27570e19aa104
                </div>
                <SpinnerComponent show = {this.state.spinnerShow} />
                <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="./src/front/img/shequ1.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/front/img/shequ2.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/front/img/sheque3.jpg"/></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

                

                <div className="c_container">
                    
                    {
                            this.state.dataset.map((item,idx)=>{
                                return(
                                    <div className="c_box" key={idx}>
                                        <div className="username">
                                            {item.name}
                                            <i></i>
                                            <span>{item.time}</span>
                                        </div>
                                        <div>
                                            <h6>{item.title}</h6>
                                            <p>{item.content}</p>
                                            <img src={item.imgurl} />
                                        </div>
                                        <div className="type">
                                            {item.type}
                                             <i></i>
                                        </div>
                                    </div>
                                )
                            })
                        }


                </div>

            </div>
        )
    }
}