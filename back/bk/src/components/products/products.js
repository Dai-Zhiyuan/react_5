import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";
import DataComponent from '../datagrid/datagrid.js'

import {get} from '../../utils/httpclient.js'
import classNames from 'classnames'
import $ from '../../utils/jquery-3.2.1.min.js'
import SpinnerComponent from '../spinner/SpinnerComponent.js'

import './product.scss'
export default class Products extends Component{
    state ={
        proData:[],
        userData:[],
        db:'products',
        pageCurr:0,
        startPage:1,
        pageCount:10,
        groupCount:7,
        totalPage:'',
        pages:'',
        dataset:[],
        pages:[],
        brand:'',
        val:'' ,
        show:true, 
        addShow:true,
        editShow:true,
        editId:'',
        spinnerShow:false,
    }
    componentWillMount(){
        get('http://10.3.136.55:8181/products').then((res)=>{
            
            this.state.totalPage = res.qty;
            this.state.pages = parseInt((res.qty/this.state.pageCount)+1);



        })
    }
  

    dataAjax(idx){
        this.state.pageCurr = idx ;
        var pageNum = this.state.pageCurr +1;
        var params = 'db='+this.state.db+'&pageNum='+pageNum+'&qty='+this.state.pageCount
        get('http://10.3.136.55:8181/page?'+params).then((res)=>{
         
            this.setState({
                proData:res.data,
            });
            
            
         })
    }

    showCheck(){
       
        if(this.state.show){
            jQuery(($)=>{
                $('.toOperate').show()
                $('.toOperate2').hide()
                
                this.setState({
                    show : false
                });
            })
        }else{
            jQuery(($)=>{
                $('.toOperate').hide()
                $('.toOperate2').hide()
            })
            this.setState({
                    show : true
            });
        }
       
    }
    goCheck(){
        jQuery(($)=>{
                var key = $('.checkKey').val();
                var value = $('.checkVal').val();
                var params = 'db=products&pageNum=1&qty=1000&key='+key+'&val='+value
                this.setState({spinnerShow:true})
                get('http://10.3.136.55:8181/insert?'+params).then((res)=>{
                   
                    this.setState({
                        proData:res.data,
                        spinnerShow:false,
                    });
                    
                })
                $('.toOperate').hide()
               
        })
    }

    showAdd(){
        if(this.state.addShow){
            jQuery(($)=>{
                $('.toOperate2').show()
                $('.toOperate').hide()
                
                this.setState({
                    addShow : false
                });
            })
        }else{
            jQuery(($)=>{
                $('.toOperate2').hide()
                $('.toOperate').hide()
            })
            this.setState({
                    addShow : true
            });
        }
    }

    goAdd(){
        jQuery(($)=>{
                var id = $('#id').val();
                var _id = $('#_id').val();
                var name = $('#name').val();
                var qty = $('#qty').val();
                var price = $('#price').val();
                var salePrice = $('#salePrice').val();
                var saleQty = $('#saleQty').val();
                var img = $('#img').val();
                var imgurl1 = $('#imgurl1').val();
                var imgurl2 = $('#imgurl2').val();
               
                var reviewQty = $('#reviewQty').val();
                var type = $('#type').val();
                var brand = $('#brand').val();
                var address = $('#address').val();
                var spike = $('#spike').val();
                var recommend = $('#recommend').val();
              
                var params = 'db=products&_id='+_id+'&name='+name+'&qty='+qty+'&price='+price+'&salePrice='+salePrice+'&saleQty='+saleQty+'&img='+img+'&imgurl1='+imgurl1+'&imgurl2='+imgurl2+'&reviewQty='+reviewQty+'&type='+type+'&brand='+brand+'&address='+address+'&spike='+spike+'&recommend='+recommend;
               
                get('http://10.3.136.55:8181/add?'+params).then((res)=>{
                 

                    if(res.data){
                        alert('添加成功')
                    }else{
                        alert('添加失败')
                    }
                });

                $('.toOperate2').hide()
                    
                
        })
    }
    goEdit(id,idx){
       this.state.editId = idx;
       if(this.state.editShow){
            jQuery(($)=>{
                $('.zhezhao').show()
              
                
                this.setState({
                    editShow : false
                });
            })
        }else{
            jQuery(($)=>{
                $('.zhezhao').hide()
                
            })
            this.setState({
                    editShow : true
            });
        }

       
        get('http://10.3.136.55:8181/suibianid?id='+id).then((res)=>{
            var data = res.data[0];
           
            jQuery(($)=>{
                $('#idCopy').val(data.id);
                $('#_idCopy').val(data._id);
                $('#nameCopy').val(data.name);
                $('#qtyCopy').val(data.qty);
                $('#priceCopy').val(data.price);
                $('#salePriceCopy').val(data.salePrice);
                $('#saleQtyCopy').val(data.saleQty);
                $('#imgCopy').val(data.img);
                $('#imgurl1Copy').val(data.imgurl1);
                $('#imgurl2Copy').val(data.imgurl2);
               
                $('#reviewQtyCopy').val(data.reviewQty);
                $('#typeCopy').val(data.type);
                $('#brandCopy').val(data.brand);
                $('#addressCopy').val(data.address);
                $('#spikeCopy').val(data.spike);
                $('#recommendCopy').val(data.recommend);
            })
    })  
    }
    upData(){
            var idx = this.state.editId;
            jQuery(($)=>{
                var id = $('#idCopy').val();
                var _id = $('#_idCopy').val();
                var name = $('#nameCopy').val();
                var qty = $('#qtyCopy').val();
                var price = $('#priceCopy').val();
                var salePrice = $('#salePriceCopy').val();
                var saleQty = $('#saleQtyCopy').val();
                var img = $('#imgCopy').val();
                var imgurl1 = $('#imgurl1Copy').val();
                var imgurl2 = $('#imgurl2Copy').val();
               
                var reviewQty = $('#reviewQtyCopy').val();
                var type = $('#typeCopy').val();
                var brand = $('#brandCopy').val();
                var address = $('#addressCopy').val();
                var spike = $('#spikeCopy').val();
                var recommend = $('#recommendCopy').val();
              
                var params = '&name='+name+'&qty='+qty+'&price='+price+'&salePrice='+salePrice+'&saleQty='+saleQty+'&img='+img+'&imgurl1='+imgurl1+'&imgurl2='+imgurl2+'&reviewQty='+reviewQty+'&type='+type+'&brand='+brand+'&address='+address+'&spike='+spike+'&recommend='+recommend;
           
               

                get('http://10.3.136.55:8181/update?db=products&_id='+idx+params).then((res)=>{
                   
                    if(res.data){
                        alert('修改成功')
                    }else{
                        alert('修改失败')
                    }

                   jQuery(($)=>{
                        $('.zhezhao').hide()
                        
                    })
                    this.setState({
                            editShow : true
                    });

                  
                });

              
                    
                
            }) 
    }
    editExit(){
        jQuery(($)=>{
            $('.zhezhao').hide()
                
        })
        this.setState({
            editShow : true
        });
        
    }
    goDel(id){
        
        var params = 'db=products&_id='+id;
         get('http://10.3.136.55:8181/delete?'+params).then((res)=>{
            
         })
        var pageNum = this.state.pageCurr +1;
        var params2 = 'db=products&pageNum='+pageNum+'&qty='+this.state.pageCount
        get('http://10.3.136.55:8181/page?'+params2).then((res)=>{
         
            this.setState({
                proData:res.data,
            });
            
            
         })
    }

    getKeys(item){
        return item ? Object.keys(item) : [];
    }
    

    render(){
       

        
        var dataset = this.state.proData.length >=1  ?this.state.proData : this.props.proTake;
        if(dataset.length>0){
          
            var res = [];
            for(var i=1;i<=this.state.pages;i++){
                res.push(i)
            }
            
            this.state.proData = [];
            return <div className="contConfig">
                                <div className="zhezhao" style={{display:'none'}}>
                                    <div  className="plaCenter">
                                           
                                        <label>id: </label>
                                        <input type="text" id="idCopy"  /><br/>
                                         <label>_id: </label>
                                        <input type="text"   id="_idCopy" /><br/>
                                        <label>name: </label>
                                        <input type="text"   id="nameCopy" /><br/>
                                        <label>qty: </label>
                                        <input type="text"   id="qtyCopy" /><br/>
                                        <label>price: </label>
                                        <input type="text"   id="priceCopy" /><br/>
                                        <label>salePrice: </label>
                                        <input type="text"   id="salePriceCopy" /><br/>
                                        <label>saleQty: </label>
                                        <input type="text"   id="saleQtyCopy" /><br/>
                                        
                                        <label>img: </label>
                                        <input type="text"  id="imgCopy"/><br/>
                                        <label>imgurl1: </label>
                                        <input type="text"  id="imgurl1Copy"/><br/>
                                        <label>imgurl2: </label>
                                        <input type="text"   id="imgurl2Copy"/><br/>
                                       
                                        <label>reviewQty: </label>
                                        <input type="text"  id="reviewQtyCopy"/><br/>
                                        <label>type: </label>
                                        <input type="text"   id="typeCopy" /><br/>
                                        
                                        <label>brand: </label>
                                        <input type="text"  id="brandCopy"/><br/>
                                        <label>address: </label>
                                        <input type="text"   id="addressCopy" /><br/>
                                        <label>spike: </label>
                                        <input type="text"   id="spikeCopy" /><br/>
                                        <label>recommend: </label>
                                        <input type="text"  id="recommendCopy" /><br/>
                                        <input type="button" className="btn btnSure" value="确定"  id="btnSure" onClick={this.upData.bind(this)} />
                                        <input type="button" className="btn btnExit" value="退出"  id="btnExit" onClick={this.editExit.bind(this)} />
                                    </div>
                                </div>

                                <div className="operate">
                                    <input type="button" className="btn btnCheck" value="查找"  id="btnCheck" onClick={this.showCheck.bind(this)} />
                                    <input type="button" className="btn btnAdd" value="添加"  id="btnAdd" onClick={this.showAdd.bind(this)} />
                                </div>
                                <div className="toOperate" style={{display:'none'}}>
                                    <input type="text" className="form-control checkKey" placeholder="请输入相应参数名" />
                                    <input type="text" className="form-control checkVal" placeholder="请输入相应参数" />
                                    <input type="button" className="btn btn-primary" value="查找" onClick={this.goCheck.bind(this)} />
                                </div>

                                <div  className="toOperate2" style={{display:'none'}} >
                                    <label>id: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品id" id="id" />
                                     <label>_id: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品_id" id="_id" />
                                    <label>name: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品名" id="name" />
                                    <label>qty: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品个数" id="qty" />
                                    <label>price: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品价格" id="price" /><br/>
                                    <label>salePrice: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品salePrice" id="salePrice" /><br/>
                                    <label>saleQty: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品的saleQty" id="saleQty" /><br/>
                                    
                                    <label>img: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品图片路径1" id="img"/>
                                    <label>imgurl1: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品图片路径2" id="imgurl1"/>
                                    <label>imgurl2: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品图片路径3" id="imgurl2"/>
                                   
                                    <label>reviewQty: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品reviewQty" id="reviewQty"/>
                                    <label>type: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品类型" id="type" />
                                    
                                    <label>brand: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品大的品牌" id="brand"/>
                                    <label>address: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品产地" id="address" />
                                    <label>spike: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品spike" id="spike" />
                                    <label>recommend: </label>
                                    <input type="text" className="form-control" placeholder="请输入商品recommend" id="recommend" />
                                    <input type="button" className="btn btn-success" value="添加" onClick={this.goAdd.bind(this)} />
                                </div>
                                <SpinnerComponent show1={this.state.spinnerShow}></SpinnerComponent>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            {   

                                                this.getKeys(dataset[0]).map((key) => {
                                                    
                                                        return  (<th key={Math.random()} scope="col">{key}</th>)
                                                    
                                                    
                                                })
                                                
                                            }
                                            <th scope="col">compile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                           dataset.map((item) => {
                                                return (

                                                    <tr key={item.id || item.indexid}>
                                                        {
                                                            this.getKeys(item).map((key) => {
                                                                return <td  className='tdStyle' key={Math.random()}>{item[key]}</td>
                                                            })
                                                        }
                                                        <td> 
                                                            
                                                                <input type="button" className="btn btn-primary  btnInline" value="编辑" onClick={this.goEdit.bind(this,item.id,item._id)}  />
                                                                <p className="river"></p>
                                                                <input type="button" className="btn btn-primary green btnInline" onClick={this.goDel.bind(this,item._id)} value="删除" />
                                                            
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        <tr></tr>
                                    </tbody>
                                </table>
                                <div className="pages">
                                   <a href="javascript:void(0);" 

                                    className = { classNames({activePage:this.state.pageCurr == 1},'spage')} 
                                    onClick={this.dataAjax.bind(this,0)}

                                    >1...</a>
                                    <div style={{display:'inline-block'}}>
                                    {
                                        res.map((key,idx) => {
                                            return (

                                                <a href="javascript:void(0);"  className = { classNames(
                                                    {activePage:this.state.pageCurr == idx},'spage','showFalse',
                                                    {showTrue:this.state.pageCurr<=idx && idx<(this.state.pageCurr+5) && idx !=0},
                                                    {showhaha:this.state.pageCurr==this.state.pages && idx == (this.state.pages-1) || idx == (this.state.pages-2) || idx == (this.state.pages-3) || idx == (this.state.pages-4)  })} key={idx} 
                                                onClick={this.dataAjax.bind(this,idx)}>

                                                
                                                    {key}
                                                </a>  

                                            
                                            )
                                        })
                                    }
                                    </div>
                                    <a href="javascript:void(0);" 
                                     onClick={this.dataAjax.bind(this,(this.state.pages-1))}
                                    className = { classNames({activePage:this.state.pageCurr == 

                                    this.state.totalPage},'spage')} ref="name1">...{this.state.pages}
                                   
                                    </a>



                                </div>
                    </div>
        }else{
            return null;
        }
       
       
    }
}