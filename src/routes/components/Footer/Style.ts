import styled from 'styled-components';

import bgn_downbar from '../../Images/bgn_downbar.jpeg';

// 页脚的导航
export const NavWrapper = styled.div`
    height: 375px;
    padding-left: 140px;
    padding-right: 100px;
    padding-top: 70px;
    margin-top: 30px;
    background: url(${bgn_downbar});
`;
export const NavSubWrapper = styled.div`
float: left;
height: 100%;
width: 20%;
color: white;
`;

export const FooterWarpper = styled.footer`
font-size: 12px;
color:white;
height: 76px;
text-align: center;
background: -webkit-linear-gradient(left, #03bce0 , #2783ce); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(left, #03bce0 , #2783ce); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(left,  #03bce0 , #2783ce); /* Firefox 3.6 - 15 */
background: linear-gradient(to left,  #03bce0 , #2783ce); /* 标准的语法 */
`

const P = styled.p`
   margin:0;
`;

export const PCopyRight =styled(P)`
padding-top: 20px;
`;
export const ICP  =styled(P)`
padding-top: 10px;
`;
 


 export const NavHeader= styled.header`
 height: 40px;
 font-style: normal; 
 font-size: 20px;
 `;

 export const Nav= styled.nav`
 font-style: normal;
 line-height: 25px; 
 font-size: 16px;
 color:rgb(187, 187, 187);
 `
  
 
//   .address > div :first-child{
//     height: 120px;
//   }
//   .address > div :first-child> div:first-child{
//     float: left;
//   }
//   .address > div :first-child> div:last-child{
//     float: left;
//   }
//   .address > div :first-child{
//     height: 120px;
//   }
//   .addressUL1{

//   }
//   .addressUL1 li {
//       width: 160px;
//       margin-left: 50px;
//       float: left;
//   }
//   .addressUL1> li > img{
//     width: 160px;
//     height: 50px;

//   }

