
import * as React from 'react'
// import Link from '../Link/Link'
import './Footer.css'
import { Test} from './index'
import code2d from '../../Images/code2d.jpg';

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
        if (footerData != null && footerData.length == 2) {
            footerDataExsits = footerData;
        } else {
            footerDataExsits = ['无数据', '无数据'];
        }
        return (
            <div >
                <Test>12312321</Test>
                <address className='address'>
                    <div>
                        <header>新闻中心</header>
                        <nav>公司动态</nav>
                        <nav>媒体聚焦</nav>
                        <nav>社交媒体</nav>
                        <nav><img src={code2d} style={{ width: 'auto', height: 'auto', marginTop: 10 }} /></nav>

                    </div>
                    <div>
                        <header>投资者</header>
                        <nav>财务报表</nav>
                        <nav>联交所公告</nav>
                        <nav>IR日历</nav>
                        <nav>分析师信息</nav>
                        <nav>财务摘要</nav>
                        <nav>股权结构</nav>
                        <nav>推介材料</nav>
                    </div>
                    <div>
                        <header>关于中软国际</header>
                        <nav>公司概览</nav>
                        <nav>愿景与使命</nav>
                        <nav>发展历史</nav>
                        <nav>管理团队</nav>
                        <nav>公司荣誉</nav>
                        <nav>社会责任</nav>
                    </div>
                    <div>
                        <header>联系我们</header>
                        <nav>香港</nav>
                        <nav>北京</nav>
                        <nav>上海</nav>
                        <nav>西安</nav>
                        <nav>____________</nav>
                        <nav>人力资源</nav>
                        <nav>媒体关系</nav>
                        <nav>投资者关系</nav>
                        <nav>业务接洽</nav>
                    </div>
                    <div>
                        <header>加入我们</header>
                        <nav>CEO致辞</nav>
                        <nav>加入中软国际的10个理由</nav>
                        <nav>了解中软国际</nav>
                        <nav>工作在中软国际</nav>
                        <nav>培训与晋升</nav>
                        <nav>快乐中软国际</nav>
                        <nav>工作机会</nav>
                    </div>
                </address>
                {/* 页脚 */}
                <footer className='footer'>
                    <p>{footerDataExsits[0]}</p>
                    <p>{footerDataExsits[1]}</p>
                </footer>
            </div>
        );
    }
}

export default Footer
