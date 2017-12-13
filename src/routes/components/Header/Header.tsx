
import * as React from 'react'
import Link from '../Link/Link'
import { TopBar} from './Style'
import { StySpan,StyDiv } from "../Containers/CommonStyle";

import navi_icon_language from '../../Images/navi_icon_language.png';
import navi_logo from '../../Images/navi_logo.png';
import navi_icon_search from '../../Images/navi_icon_search.png';
import navi_icon_menu from '../../Images/navi_icon_menu.png';

 
class Header extends React.Component {

  render() {

    return (
      <StyDiv>
      
        <TopBar>

          <StySpan ml={`40px`} mt={`-2px`} ><img src={navi_icon_language} /></StySpan>
          <StySpan ml={`10px`} lt={`35px`} >中国</StySpan>
          <Link csstyle={{marginLeft:`36px` , float:`right`,lineHeight:`35px`,paddingRight:`40px`}}  to={`/login`} >登录</Link>
          <Link csstyle={{float:`right`,marginRight:`40px`,lineHeight:`35px`}} to={`/register`} >注册</Link>
        </TopBar>
        <div className='searchBar'>
          <span><img src={navi_logo} /></span>
          <span><img src={navi_icon_search} /></span>
        </div>

        <div className='allNav'>
          <Link to={"/"}><img src={navi_icon_menu} />全部导航</Link>
          <Link to={"/user"} >用户中心</Link>
          <Link to={"/developerCommunity"}>开发者社区</Link>
          <Link to={"/"}>资源大厅</Link>
          <Link to={"/"}>制造服务中心</Link>
          <Link to={`/solution`}>云制造解决方案</Link>
          <Link to={"/message"} >资讯服务</Link>
          <Link to={"/"}>产品中心</Link>
          <Link to={"/"}>首页</Link>
        </div>
      </StyDiv>
    )
  }
}

export default Header;
