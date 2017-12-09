
import * as React from 'react'
 
import Link from '../Link/Link'
// import LinkButton from '../../components/LinkButton/LinkButton'

import  './Header.css'
 
import naviIconLanguage from './Images/navi_icon_language.png'
 

class Header extends React.Component {
  render () {
     
    return (
      <div id='header-root'>
       
        <div className='topBar'>
           <span><img src="/static/media/navi_icon_language.png"/></span>
           <span>中国</span>
          <Link to={`/login`} >登录</Link>
          <Link to={`/register`} >注册</Link>
          <Link to={`/developerCommunity`}>开发者社区</Link>
        </div>
        <div className='searchBar'>
           <span><img src="./navi_logo.png"/></span>
           <span><img src="./navi_icon_search.png"/></span>
        </div>

        <div className='allNav'>
           <Link to={"/"}><img src="./navi_icon_menu.png"/>全部导航</Link>
           <Link to={"/user"} >用户中心</Link>
           <Link to={"/developerCommunity"}>开发者社区</Link>
           <Link to={"/"}>资源大厅</Link>
           <Link to={"/"}>制造服务中心</Link>
           <Link to={`/solution`}>云制造解决方案</Link>
           <Link to={"/message"} >资讯服务</Link>
           <Link to={"/"}>产品中心</Link>
           <Link to={"/"}>首页</Link>
        </div>
      </div>
    )
  }
}
 
export default Header;