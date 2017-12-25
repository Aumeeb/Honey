import styled from 'styled-components';

import bgExpend from "../../Images/bgExpandsForever450.png";
import banner2 from "../../Images/banner2.jpeg";

export const BannerBackgroundExpend = styled.div`
background-image: url(${bgExpend}) ;
background-repeat: repeat-x;
height: 100%;
background-size: 100%;
`;

export const AdvertWrapper = styled.div`
width: 100%;
  height: 100%;
  text-align: left;
  padding-top: 124px;
  padding-left: 120px;
  height: 450px;
`;

export const NormalSpan = styled.span`
font-size: 44px;
color:#fff;
`;
export const GradientSpan = styled(NormalSpan) `
padding-left: 20px;
background-image: -webkit-linear-gradient(left, #03bce0 , #2783ce); /* Safari 5.1 - 6.0 */
background-image: -o-linear-gradient(left, #03bce0 , #2783ce); /* Opera 11.1 - 12.0 */
background-image: -moz-linear-gradient(left,  #03bce0 , #2783ce); /* Firefox 3.6 - 15 */
background-image: linear-gradient(to left,  #03bce0 , #2783ce); /* 标准的语法 */
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const EnglishTitle = styled.div`
padding-top: 20px;
  padding-bottom: 20px;
  color: rgba(255, 255, 255, 0.32);
  font-size: 16px;
`;
export const Brief = styled.p`
font-size: 20px;
color: rgb(225, 225, 225);
padding-bottom: 15px;
`;


export const SwiperContainer = styled.div`
width:1440px;  
margin:auto;
`;

export const SwiperWrapper = styled.div.attrs<any>({
  // we can define static props
  // or we can define dynamic ones
   backgroundurl : `${banner2}`,
}) `
text-align: center;
font-size: 18px;
display: flex;
width: 1440px;
height: 630px;
background:url(${banner2});
/* here we use the dynamically computed props */
background:   ${(props :any)=>props.backgroundurl} ;
`;


export const Input = styled.input.attrs({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  margin: (props: any) => props.size as string || "1em",
  padding: (props: any) => props.size as string || "1em"
}) `
	color: palevioletred;
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

	/* here we use the dynamically computed props */
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
`;


