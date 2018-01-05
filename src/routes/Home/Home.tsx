import * as React from 'react';

import Link from '../components/Link/Link'
import LinkButton from '../components/LinkButton/LinkButton'
import Banner from "../components/Banner/Banner";
import { BannerBackgroundExpend } from "../components/Banner/";
import { Container } from "../components/Containers/CommonStyle";
import s from './Home.css';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getGift ,ILogin} from "../../actions/action";

import nes_icon1 from '../Images/nes_icon1.png';
import nes_icon2 from '../Images/nes_icon2.png';
import logo_a1 from '../Images/logo_a1.png';
import logo_a2 from '../Images/logo_a2.png';
import logo_a3 from '../Images/logo_a3.png';

// import { createStore, AnyAction } from "redux";

// type SchoolType = 'failure' | 'takeParents' | 'cannotGoHome' | 'biteAss' | 'kneel' | 'acceptGift'
// class SchoolAction implements AnyAction {
//     [extraProps: string]: any;
//     type: SchoolType;
// }

// type Report = { english: number, chinese: number, history?: number };
// // let myScore: Report = { english: 50, chinese: 99, history: 0 };

// /**
//  * 🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️🏝️️🏝️🏝️🏝️🏝️🏝️🏝️🏝️ 
//  * 使用createStore函数 创建一个 store   第一个参数是Reducer 第二个是存储增强可以省略
//  */
// const store = createStore((state: Report = { english: 46, chinese: 99 }, action: SchoolAction) => {
//     switch (action.type) {
//         case 'biteAss':
//             state.chinese++
//             break;
//         case 'acceptGift':
//             state.english++
//         default:
//             break;
//     }
//     return state
// }, )

// /**
//  * 💅💅💅💅 step 2 订阅💅💅💅💅
//  */
// store.subscribe(() => {

//     console.log(`fn1  current state  `, store.getState())

// })

// /**
//  * 🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️🏜️️️️️️️🏜️🏜️🏜️🏜️🏜️🏜️🏜️
//  * step 3 派发事件
//  */
// store.dispatch<SchoolAction>({ type: `biteAss` });
// store.dispatch<SchoolAction>({ type: `acceptGift` });





export interface IHomeProps {
    english: number,
    chinese: number,
    history?: number

    homeInfo: any;
    action: (data:any)=> ILogin;
}
export interface IHomeState{
    english?: number
}
class Home extends React.Component<IHomeProps, any> {
    constructor(props: IHomeProps) {
        super(props);

    }



    render() {
        <div></div>
        const { } = this.props;
        return (
            <div>
                {/* 
                    <div className={'swiper-container-banner'}>
                        <div className={'swiper-wrapper'}>
                            <div className={'swiper-slide-banner'}>
                                <div className={`bannerAdvertment`}>
                                    <span>中软云制造</span><span>平台优势</span>
                                    <div>ADVANTAGE OF PLATFORM</div>
                                    <p>跨行业的制造模块库 , 开发的集成体系 ;</p>
                                    <p>以覆盖多行业的制造模型库聚集ISV ,</p>
                                    <p>提供面向全制造行业的智能制造解决方案 。</p>
                                    <div><LinkButton linkValue={'开启制造之旅'} styleColor={'white'} /></div>
                                </div>
                            </div>

                        </div>
                    </div>
              
               */}
                <BannerBackgroundExpend>
                    <Banner
                        titleCN={[`中软云制造`, `平台优势`]}
                        titleEN={[`ADVANTAGE OF PLATFORM`]}
                        paragraph={[`跨行业的制造模块库 , 开发的集成体系 ;`, `以覆盖多行业的制造模型库聚集ISV ,`, `提供面向全制造行业的智能制造解决方案 。`]}

                    />
                </BannerBackgroundExpend>
                <Container>

                    <div className={`${s.latestProduct}`}>

                        <div className={`latestProductTitle`} ><span>最新</span><span>产品</span></div>
                        <div className={`latestProductETitle`} >NEW PRODUCTS</div>
                        <div className={`detail`}>中国电信股份有限公司山西分公司 2013 年 移动营销门户建设工程应用软件 产品描述 东软集团股份有限公司
              2013中国电信股份有限公司山西分公司 2013 年 移动营销门户建设工程应用软件 产品描述 东软集团股份有限公司 2013

              <Link to='/about' >
                                了解详情>
              </Link>
                        </div>
                        <div className={`itemsContainer`}>
                            <div className={`floatLeft widthPercent33 latestProductItem`}>
                                <div className={`latestProductIcon1`}></div>
                                <div >葡萄看板</div>
                                <div>文字问问释放了江苏电力负荷适当放宽了江苏的房间里</div>
                            </div>
                            <div className={`floatLeft widthPercent33 latestProductItem`}>
                                <div className={`latestProductIcon2`}></div>
                                <div >制造企业诊断云</div>
                                <div>文字问问释放了江苏电力负荷适当放宽了江苏的房间里</div>
                            </div>
                            <div className={`floatLeft widthPercent33 latestProductItem`}>
                                <div className={`latestProductIcon1`}></div>
                                <div >调研宝</div>
                                <div>文字问问释放了江苏电力负荷适当放宽了江苏的房间里</div>
                            </div>
                        </div>
                        <LinkButton linkValue={`查看详情`} />
                    </div>

                    {/* industry Information */}
                    <div className={`textAlignCenter`}>
                        <div className={`latestProductTitle`} ><span>资讯</span><span>服务</span></div>
                        <div className={`latestProductETitle`} >INFORMATION</div>

                    </div>
                    {/* industry Information items content */}
                    <div className={`IndustryInfoContainer`}>
                        <div>
                            <header>工业大数据</header>
                            <article>
                                <ul className={`IndustryInfoContainerUL IndustryULLeftBorder`}>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div >看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div>看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div>看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                </ul>
                            </article>

                        </div>
                        <div>
                            <header>物联网</header>
                            <article>
                                <ul className={`IndustryInfoContainerUL`}>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div >看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div>看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div>看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                </ul>
                            </article>

                        </div>
                        <div>
                            <header>工业大数据</header>
                            <article>
                                <ul className={`IndustryInfoContainerUL IndustryULRightBorder`}>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div >看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div>看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                    <li className={`IndustryInfoContainerLi`}>
                                        <div><span>网站可视化数据分析</span><span>了解详情</span></div>
                                        <div>看了就发生了进来看是否是否合胃口链接士大夫解开了斯达克警方就开始大幅</div>

                                    </li>
                                </ul>
                            </article>

                        </div>
                    </div>

                    {/* 需求板块 */}
                    <div className={`textAlignCenter`}>

                        <div className={`latestProductTitle`} ><span>最新</span><span>需求</span></div>
                        <div className={`latestProductETitle`} >LATEST DEMAND</div>

                    </div>
                    <div className={`demandContainer`}>
                        <div>
                            <div>
                                <div><img src={nes_icon1} /></div>
                                <div>最新商品需求</div>
                                <div>COMMODIT DEMAND</div>
                                <div><LinkButton linkValue={`查看更多`} styleColor={'white'} /></div>
                            </div>
                            <div className={`abilityRequirement`}>

                                <div><img src={nes_icon2} /></div>
                                <div>最新能力需求</div>
                                <div>COMMODIT DEMAND</div>

                            </div>
                        </div>
                        <div>
                            <ul className={`demandUL`}>
                                <li>
                                    <div>
                                        <span>需求名称</span>
                                        <span>$100,000</span>
                                        <span>需求报价</span>
                                    </div>
                                    <div>需求商名称 : 示范文字内容示范文字内容  <span>发布日期 2019-08-10</span></div>
                                    <div>需求描述 <span>示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容</span></div>
                                    <div><LinkButton linkValue={`查看详情`} styleColor={'white'} /></div>
                                </li>

                                <li>
                                    <div>
                                        <span>需求名称</span>
                                        <span>$100,000</span>
                                        <span>需求报价</span>
                                    </div>
                                    <div>需求商名称 : 示范文字内容示范文字内容  <span>发布日期 2019-08-10</span></div>
                                    <div>需求描述 <span>示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容</span></div>
                                    <div><LinkButton linkValue={`查看详情`} styleColor={'white'} /></div>
                                </li>

                                <li>
                                    <div>
                                        <span>需求名称</span>
                                        <span>$100,000</span>
                                        <span>需求报价</span>
                                    </div>
                                    <div>需求商名称 : 示范文字内容示范文字内容  <span>发布日期 2019-08-10</span></div>
                                    <div>需求描述 <span>示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容示范文字内容</span></div>
                                    <div><LinkButton linkValue={`查看详情`} styleColor={'white'} /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* cooperative partner 合作伙伴*/}
                    <div className={`cooperativePartner`}>
                        <div className={`cooperativePartnerLeftTitle`}>
                            <div><span>合作</span><span>伙伴</span></div>
                            <div>携手共赢 , 共建中国制造2025</div>
                            <div><LinkButton linkValue="查看更多" /></div>
                        </div>
                        <div className={`cooperativePartnerBrand`}>
                            <ul>
                                <li><img src={logo_a1} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a3} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a1} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a3} /></li>
                            </ul>
                        </div>
                    </div>
                    {/* partner enterprise 驻入企业*/}
                    <div className={`partnerEnterprise`}>
                        <div className={`partnerEnterpriseBrand`}>
                            <ul>
                                <li><img src={logo_a1} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a3} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a1} /></li>
                                <li><img src={logo_a2} /></li>
                                <li><img src={logo_a3} /></li>
                            </ul>
                        </div>
                        <div className={`cooperativePartnerLeftTitle`}>
                            <div><span>入驻</span><span className={`blue1`}>企业</span></div>
                            <div>携手共赢 , 共建中国制造2025</div>
                            <div><LinkButton linkValue="查看更多" /></div>
                        </div>
                    </div>
                </Container>

            </div>
        );
    }


}
function mapStateToProps(state: any) {
    return {
        homeInfo: state.homeReducer
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        action: bindActionCreators(getGift, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home
