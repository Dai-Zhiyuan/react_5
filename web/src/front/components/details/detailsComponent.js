import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";

// 引入样式
import './details.css'
import http from '../../utils/httpclient.js'
import './jquery-3.2.1.min.js'
import './details.js'

export default class DetailsComponent extends Component{
    
    componentDidMount(){
        http.get('http://10.3.136.55:8181/suibianid',this.props.location.query).then((res)=>{
            console.log(res.data)
            this.setState({
                dataset: res.data
            })
        })
        

    }



    state = {
        dataset:[],
        display :'flex',
        count:0,
        shopCount:1,
        qtyNum:0,
        qtynum:0,
        username:sessionStorage.getItem("username"),
        scColor:''
    }
    
    goCar(){
        var data = this.state.dataset;
        this.state.qtynum += (this.refs.input.value)*1;
        this.setState({
            qtyNum:this.state.qtynum
        })
        
        if(this.refs.input){
            console.log('1')
            http.get('http://10.3.136.55:8181/add',{db:"cart",username:this.state.username,_id:data[0].id,name:data[0].name,price:data[0].price,qty:this.refs.input.value,img:data[0].img}).then((res)=>{
            })
        }
    }

    onclose(){
        this.setState({
            display:'none'
        })
    }
    goAdd(){
        this.setState({
            shopCount: this.state.shopCount + 1
        })
    }
    goCut(){
        if(this.state.shopCount==1){
            return false
        }
        this.setState({
            shopCount: this.state.shopCount - 1
        })
    }
    sc(){
        if(this.state.scColor == 'red'){
            this.setState({
                scColor : ''
            })
        }else{
            this.setState({
                scColor : 'red'
            })
        }
        var data = this.state.dataset;
        http.get('http://10.3.136.55:8181/addCollect',{db:"collect",_id:data[0].id,name:data[0].name,username:this.state.username,price:data[0].price,img:data[0].img}).then((res)=>{

            })
    }
    render(){
        console.log(this.state.dataset)
        return(
            <div className="detalBox">
                <div className="header">
                <Link to="/list"><span>&lt;</span></Link>
                    
                    <span>商品详情</span>
                    <span className="fa fa-bars"></span>
                </div>
                
                <div className="advertising" style={{display:this.state.display}}>
                    <span className="close" onClick={this.onclose.bind(this)}>&#10005;</span>
                    <span className="contai">
                        <span className="_img">
                            <img src="./src/front/img/advertising_logo.jpg"/>
                        </span>
                        <span className="_p">
                            <span>首次购买首单满100送100...</span>
                            <span>买真酒,就上酒仙网</span>
                        </span>
                    </span>
                    <span className="download">
                        立即前往
                    </span>
                </div>

                <div className="main">
                    {
                        this.state.dataset.map((item,idx)=>{
                            return(

                                <div className="c_show" key={idx}>
                                                                    
                                    <div className="swiper-container">
                                       <div className="swiper-wrapper">
                                         <div className="swiper-slide"><img src={item.img} alt="" /></div>
                                         <div className="swiper-slide"><img src={item.imgurl1} alt="" /></div>
                                         <div className="swiper-slide"><img src={item.imgurl2} alt="" /></div>
                                        </div>
                                     </div>

                                </div>


                                
                            )
                        })
                    }

                    {
                        this.state.dataset.map((item,idx)=>{
                            return (
                                <div className="intro container" key={idx}>

                                    <div>
                                        {item.name}
                                        <i className="detai_jzxy"></i>
                                    </div>
                                    <span>
                                        ￥{item.price}
                                    </span>
                                </div>
                            )
                        })
                    }

                    <div className="gold">
                        <span>
                            金币
                        </span>
                        <span>
                            赠送<i>133</i>个金币
                        </span>
                    </div>

                    <div className="message">
                        <div className="message_top">
                            <div>
                                <span>数量</span>
                                <span className="add">
                                    <button onClick={this.goCut.bind(this)} className="left_a">-</button>
                                    <input type="text" ref="input" value={this.state.shopCount}/>
                                    <button onClick={this.goAdd.bind(this)} className="right_a">+</button>
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>送至</span>
                                    <i>广东省</i>
                                    <i>广州市</i>
                                    <i>天河区</i>
                                    <p>有货,预计1-2天可到达</p> 
                                </div>
                            </div>
                            <div>
                                <span>提示</span>
                                <i>此商品不能使用优惠券</i><br/>
                                <i className="i2">此商品无原厂手提袋</i>
                            </div>
                        </div>
                        <div className="message_bottom">
                            <ul>
                                <li>
                                    <i className="ico iconfont icon-101"></i>
                                    <span>正品保障</span>
                                </li>
                                <li>
                                    <i className="ico iconfont icon-servicebaoyouqia"></i>
                                    <span>满100包邮</span>
                                </li>
                                <li>
                                    <i className="ico iconfont icon-7"></i>
                                    <span>7天退换</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="evaluate container">
                        <div className="evaluate_title">
                            <span>
                                商品评价
                                <i className="i1">(共3人评价)</i>
                            </span>
                            <span>好评度
                                <i className="i2">100%</i>
                            </span>
                        </div>
                        <div className="evaluate_container">
                            <div>
                                <div>
                                    <span>酒仙酒友</span>
                                    <span className="sp_bor">酒虫</span>
                                    <span className="sp_img"></span>
                                    <span className="time">1</span>
                                </div>
                                <p>没喝呢,尝后评,包装给力，送货快</p>
                                <span>
                                    <img src="./src/front/img/eval1.jpg" />
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>等待等待</span>
                                    <span className="sp_bor">酒虫</span>
                                    <span className="sp_img"></span>
                                    <span className="time">1</span>
                                </div>
                                <p>还没喝,喝了在评</p>
                                <span className="pic_r">
                                    <img src="./src/front/img/eval2.jpg" />
                                    <img src="./src/front/img/eval3.jpg" />
                                    <img src="./src/front/img/eval4.jpg" />
                                </span>
                            </div>
                            <div>
                                <div>
                                    <span>你****的</span>
                                    <span  className="sp_bor">酒虫</span>
                                    <span className="sp_img"></span>
                                    <span className="time">1</span>
                                </div>
                                <p>好酒,有味道</p>
                                <span>
                                    <img src="./src/front/img/eval5.jpg" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="brand">
                        <span>
                            <img src="./src/front/img/details_brand.jpg" alt="" />
                        </span>
                        <span>
                            <i>克洛莉莎</i>
                            <i>克洛莉莎</i>
                            <div></div>
                        </span>
                    </div>

                    <div className="introduce container">
                        <ul>
                            <li>
                                <span>香味</span>
                                <span>显露着草莓与樱桃、梨子、甘草的气息</span>
                            </li>
                            <li>
                                <span>口感</span>
                                <span>入口圆润</span>
                            </li>
                            <li>
                                <span>搭配美食</span>
                                <span>牛排、烧烤、红肉等</span>
                            </li>
                            <li>
                                <span>酒庄</span>
                                <span>奥兰城堡</span>
                            </li>
                            <li>
                                <span>葡萄品种</span>
                                <span>丹魄</span>
                            </li>
                        </ul>
                        <button>点击加载全部</button>
                    </div>

                    <div className="prompt container">
                        <p>温馨提示</p>
                        <i></i>
                        根据新修订的《商标法》及国家工商总局最新文件要求，2014年5月1日之后不得将“驰名商标”字样用于商品宣传，酒仙网依法对商品图片中含“驰名商标”字样做马赛克处理；同时，涉及厂家正在按照新规定逐步更换包装，在此期间，我们将对新旧包装货品随机发货，请以实际收到的货物为准。给您带来的不便，敬请谅解。
                    </div>

                    <div className="trait container">
                        <p>商品特点</p>
                        <i></i>
                    </div>

                    <div className="longImg container">
                        <img src="./src/front/img/details1.jpg" className="img1"/>
                        <img src="./src/front/img/details2.jpg"/>
                        <img src="./src/front/img/details3.jpg"/>
                        <img src="./src/front/img/details4.jpg"/>
                        <img src="./src/front/img/details5.jpg"/>
                        <img src="./src/front/img/details6.jpg"/>
                        <img src="./src/front/img/details7.jpg"/>
                        <img src="./src/front/img/details8.jpg"/>
                        <img src="./src/front/img/details9.jpg"/>
                        <img src="./src/front/img/details10.jpg"/>
                        <img src="./src/front/img/details11.jpg"/>
                        <img src="./src/front/img/details12.jpg"/>
                        <img src="./src/front/img/details13.jpg"/>
                        <img src="./src/front/img/details14.jpg"/>
                        <img src="./src/front/img/details15.jpg"/>
                        <img src="./src/front/img/details16.jpg"/>
                        <img src="./src/front/img/details17.jpg"/>
                        <img src="./src/front/img/details18.jpg"/>
                        <img src="./src/front/img/details19.jpg"/>
                        <img src="./src/front/img/details20.jpg"/>
                        <img src="./src/front/img/details21.jpg"/>
                        <img src="./src/front/img/details22.jpg"/>
                        <img src="./src/front/img/details23.jpg"/>
                        <img src="./src/front/img/details24.jpg"/>
                        <img src="./src/front/img/details25.jpg"/>
                        <img src="./src/front/img/details26.jpg"/>
                        <img src="./src/front/img/details27.jpg"/>
                        <img src="./src/front/img/details28.jpg"/>
                        <img src="./src/front/img/details29.jpg"/>
                        <img src="./src/front/img/details30.jpg"/>
                        <img src="./src/front/img/details31.jpg"/>
                        <img src="./src/front/img/details32.jpg"/>
                        <img src="./src/front/img/details33.jpg"/>
                        <img src="./src/front/img/details34.jpg"/>

                    </div>

                </div>














                <div className="foot">
                    <ul>
                        <li className="option1">
                            <i className="fa fa-user-o"></i>
                            <span>侍酒师</span>
                        </li>
                        <li className="option1" id="sc" onClick={this.sc.bind(this)}>
                            <i className="fa fa-heart-o" id="scc"></i>
                            <span style={{color:this.state.scColor}}>收藏</span>
                        </li>
                        <li className="option1">
                            <i className="fa fa-shopping-cart"></i>
                            <Link to="/cart"><span>购物车</span></Link>
                            <div>{this.state.qtyNum}</div>
                        </li>
                        <li className="option2 col1">
                            <i></i>
                            <span onClick={this.goCar.bind(this)}>
                                加入购物车
                            </span>
                        </li>
                        <li className="option2 col2">
                            <i></i>
                            <Link to="/cart"><span className="col3">立即购买</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

