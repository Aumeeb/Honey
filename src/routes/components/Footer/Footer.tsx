
import * as React from 'react'
// import Link from '../Link/Link'
//import './Footer.css'
import code2d from '../../Images/code2d.jpg';
import { ICP, PCopyRight, FooterWarpper, NavWrapper, NavSubWrapper, NavHeader, Nav } from './Style';


// function classConstructorDec(constructor: Function) {

// 	constructor.prototype.testProperty ="testProperty_value";
// }

// @classConstructorDec
// class ClassWithConstructor {

// }


// let classConstrInstance = new ClassWithConstructor();
// console.log(`classConstrInstance.testProperty : `+ `${(classConstrInstance as any).testProperty}`);


interface IFooterProps {
    navData?: Array<{
        headerTitle?: string,
        subTitle?: string[],
    }>
    footerData?: string[];
}

class Footer extends React.Component<IFooterProps, any> {
    constructor(props: IFooterProps) {
        super(props)
        this.props = {
            footerData:
                [`版权所有 @ 2000-2017 中软国际制造云 All Rights Reserved`,
                    `京ICP 备15012914号-12 京公网安备11001802022625`],
        }
    }
    componentWillMount() {

    }
    render() {
        const { footerData } = this.props


        let footerDataExsits: string[];
        if (footerData !== undefined && footerData.length == 2) {
            footerDataExsits = footerData;
        } else {
            footerDataExsits = ['版权所有 @ 2000-2017 中软国际制造云 All Rights Reserved', '京ICP 备15012914号-12 京公网安备11001802022625'];
        }
        return (
            <div >
                <NavWrapper>
                    <NavSubWrapper>
                        <NavHeader>新闻中心</NavHeader>
                        <Nav>公司动态</Nav>
                        <Nav>媒体聚焦</Nav>
                        <Nav>社交媒体</Nav>
                        <Nav><img src={code2d} style={{ width: 'auto', height: 'auto', marginTop: 10 }} /></Nav>

                    </NavSubWrapper>
                    <NavSubWrapper>
                        <NavHeader>投资者</NavHeader>
                        <Nav>财务报表</Nav>
                        <Nav>联交所公告</Nav>
                        <Nav>IR日历</Nav>
                        <Nav>分析师信息</Nav>
                        <Nav>财务摘要</Nav>
                        <Nav>股权结构</Nav>
                        <Nav>推介材料</Nav>
                    </NavSubWrapper>
                    <NavSubWrapper>
                        <NavHeader>关于中软国际</NavHeader>
                        <Nav>愿景与使命</Nav>
                        <Nav>公司概览</Nav>
                        <Nav>发展历史</Nav>
                        <Nav>管理团队</Nav>
                        <Nav>公司荣誉</Nav>
                        <Nav>社会责任</Nav>
                    </NavSubWrapper>
                    <NavSubWrapper>
                        <NavHeader>联系我们</NavHeader>
                        <Nav>香港</Nav>
                        <Nav>北京</Nav>
                        <Nav>上海</Nav>
                        <Nav>西安</Nav>
                        <Nav>____________</Nav>
                        <Nav>人力资源</Nav>
                        <Nav>媒体关系</Nav>
                        <Nav>投资者关系</Nav>
                        <Nav>业务接洽</Nav>
                    </NavSubWrapper>
                    <NavSubWrapper>
                        <NavHeader>加入我们</NavHeader>
                        <Nav>CEO致辞</Nav>
                        <Nav>加入中软国际的10个理由</Nav>
                        <Nav>了解中软国际</Nav>
                        <Nav>工作在中软国际</Nav>
                        <Nav>培训与晋升</Nav>
                        <Nav>快乐中软国际</Nav>
                        <Nav>工作机会</Nav>
                    </NavSubWrapper>
                </NavWrapper>
                {/* 页脚 */}
                <FooterWarpper>
                    <PCopyRight>{footerDataExsits[0]}</PCopyRight>
                    <ICP>{footerDataExsits[1]}</ICP>
                </FooterWarpper>
            </div>
        );
    }
}

export default Footer
