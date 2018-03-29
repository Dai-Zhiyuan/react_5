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
                mul: mul*1.7 + 1 + 'rem'
            })
            // jQuery($ => {
            //     let $img=$('.bennerImg');
            //     // console.log($img.length)
            //     // $('img').slice(1).hide();
            //     let i=0;
            //     setInterval(function(){
            //         i++;
            //         if(i>2){
            //             i=0;
            //         }
            //         $img.hide();
            //         $img.eq(i).fadeIn();
                    
            //     }, 3000)
            // })
        })
        
    }
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            // 滚动方向 horizontal/vertical
            direction: 'horizontal',
            // 自动播放
            autoplay:3000,
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
    render(){
        // console.log(this.state.type)
        // console.log(this.state.brandArray)
        // console.log(this.state.addressArray)
        // console.dir(this.refs.hostBrand)
        // let list = 'list'
        // console.log(this.state.mul)
        if(this.refs.img0){
            this.refs.img0.src="./src/front/img/bj-fj1.jpg"
        }
        if(this.refs.img1){
            this.refs.img1.src="./src/front/img/bj-fj2.jpg"
        }
        if(this.refs.img2){
            this.refs.img2.src="./src/front/img/bj-mt1.jpg"
        }
        if(this.refs.img3){
            this.refs.img3.src="./src/front/img/bj-mt2.jpg"
        }
        if(this.refs.img4){
            this.refs.img4.src="./src/front/img/bj-lj1.jpg"
        }
        if(this.refs.img5){
            this.refs.img5.src="./src/front/img/bj-lj2.jpg"
        }
        if(this.refs.img6){
            this.refs.img6.src="./src/front/img/bj-qx1.jpg"
        }
        if(this.refs.img7){
            this.refs.img7.src="./src/front/img/bj-qx2.jpg"
        }
        if(this.refs.img8){
            this.refs.img8.src="./src/front/img/bj-gjg1.jpg"
        }
        if(this.refs.img9){
            this.refs.img9.src="./src/front/img/bj-gjg2.jpg"
        } 
        if(this.refs.img10){
            this.refs.img10.src="./src/front/img/bj-jgj1.jpg"
        } 
        if(this.refs.img11){
            this.refs.img11.src="./src/front/img/bj-jgj2.jpg"
        }
        return (
            <div className="datagrid">

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="./src/front/img/listBenner1.jpg" className="bennerImg"/></div>
                        <div className="swiper-slide"><img src="./src/front/img/listBenner2.jpg" className="bennerImg"/></div>
                        <div className="swiper-slide"><img src="./src/front/img/listBenner3.jpg" className="bennerImg"/></div>
                    </div>
                </div>
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
                                                <img ref={"img"+idx} src="" />
                                                <span>{item}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        
                    </div>
                </div>
                <div className="address" >
                    <div className="addressSpan">
                        <span>产地</span>
                    </div>
                    <div className="allAddress">
                        {
                            this.state.addressArray.map((item,idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={"/list?type1="+this.state.type+"&&address="+item} activeClassName="active" className="col">
                                            {item}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="price">
                    <div className="priceSpan">
                        <span>价位</span>
                    </div>
                    <div className="allPrice">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>                        
                    </div>
                </div> */}
            </div>
        )
    }
}