import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link,IndexLink} from "react-router";



export default class ReactUsers extends Component{
    state ={
        show:true, 
        addShow:true,
        editShow:true,
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
    getKeys(item){
        return item ? Object.keys(item) : [];
    }

    render(){
        var dataset = this.props.proTake;
        if(dataset.length>0){
             
            return <div className="contConfig">
                                <div className="operate">
                                    <input type="button" className="btn btnCheck" value="查找"  id="btnCheck" onClick={this.showCheck.bind(this)} />
                                    <input type="button" className="btn btnAdd" value="添加"  id="btnAdd" onClick={this.showAdd.bind(this)} />
                                </div>
                                <div className="toOperate" style={{display:'none'}}>
                                    <input type="text" className="form-control checkKey" placeholder="请输入相应参数名" />
                                    <input type="text" className="form-control checkVal" placeholder="请输入相应参数" />
                                    <input type="button" className="btn btn-primary" value="查找"  />
                                </div>

                                <div  className="toOperate2" style={{display:'none'}} >
                                    <label>id: </label>
                                    <input type="text" className="form-control" placeholder="请输入用户id" id="id" />
                                    <label>用户名: </label>
                                    <input type="text" className="form-control" placeholder="请输入用户名" id="id" />
                                    <label>密码: </label>
                                    <input type="text" className="form-control" placeholder="请输入用户密码" id="id" />
                                
                                   
                                    <input type="button" className="btn btn-success" value="添加" />
                                </div>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            {
                                                this.getKeys(dataset[0]).map((key) => {
                                                    if(key){
                                                        return <th key={Math.random()} scope="col">{key}</th>
                                                    }
                                                    
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
                                                                return <td key={Math.random()}>{item[key]}</td>
                                                            })
                                                        }

                                                        <td>
                                                            
                                                                <input type="button" className="btn btn-primary" value="编辑"  />
                                                                <p className="river"></p>
                                                                <input type="button" className="btn btn-primary green" value="删除" />
                                                            
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                    </div>
        }else{
            return null;
        }
       
       
    }
}