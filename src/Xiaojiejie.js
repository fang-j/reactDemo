import React,{Component,Fragment} from 'react';
import axios from 'axios';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem';

class Xiaojiejie extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list:[]
    }
  }

  componentWillMount(){
    // console.log('componentWillUnmount---------组件将要挂载到页面的时刻');
  }

  componentDidMount(){
    console.log('componentDidMount---------组件挂载完成的时刻');
    axios.get('https://mock.mengxuegu.com/mock/605c58920d58b864da03daf2/xiaojiejie/xiaojiejie').then((res) => {
      console.log('获取成功'+JSON.stringify(res));
      this.setState({
        list: res.data.data
      })
    }).catch((err) => {
      console.log('失败'+JSON.stringify(err));
    })
  }
  // 组件更新之前执行 控制render渲染
  // 返回true 执行render渲染
  // 返回false 不在执行render渲染
  shouldComponentUpdate(){
    // console.log('1-shouldComponentUpdate', 'state数据发生变化触发的生命周期')
    return true
  }

  componentWillUpdate(){
    // console.log('2-componentWillUpdate', 'state数据发生变化触发的生命周期');
  }

  componentDidUpdate(){
    // console.log('4-componentDidUpdate', 'state数据发生变化触发的生命周期');
  }

  render(){
    // console.log('3-render---------组件挂载中', 'state数据发生变化触发的生命周期');
    return(
      <Fragment>
        {/* 注释 */}
        <div>
          <label htmlFor="jspang">增加服务</label>
          <input 
              id="jspang"
              className='input'
              value={this.state.inputValue}
              onChange={this.inputChange.bind(this)}
              ref = {(input) => { this.input = input }}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref = {(ul) => {this.ul = ul}}>
         {
           this.state.list.map((item,index)=>{
             return (
                <XiaojiejieItem
                  key={index+item}
                  content={item} 
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                />
             )
           })
         }
        </ul>
      </Fragment>
    )
  }
  inputChange(){
    // console.log(this.input);
    this.setState({
      inputValue: this.input.value
    })
  }
  // 增加列表
  addList() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  // 删除列表项
  deleteItem(index){
    // console.log(index);
    let {list} = this.state;
    list.splice(index,1);
    this.setState({
      list
    })
  }
}

export default Xiaojiejie