import * as React from 'react'

import { SwiperWrapper, BannerBackgroundExpend, AdvertWrapper, NormalSpan, GradientSpan, EnglishTitle, Brief, SwiperContainer } from "./";



interface BannerProps {
    titleCN?: string[];
    titleEN?: string[];
    paragraph?: string[];
    csstyle?: React.CSSProperties;


}
export default class Banner extends React.Component<BannerProps, any> {

    constructor(props: BannerProps) {
        super(props)


    }
    deconstruction(arr: Array<string> | undefined):JSX.Element[] {
        
        let jsxEleArr= new Array<JSX.Element>();
        if(arr!=undefined){
            arr.forEach(val=>{
                jsxEleArr.push(<Brief key={val}>{val}</Brief>)
            })
        }
        return jsxEleArr;
    }

    render() {
        let defaultValue = 'no data';
        const { titleCN, titleEN, paragraph, csstyle } = this.props;

        return (
            <BannerBackgroundExpend>
                <SwiperContainer >
                    <SwiperWrapper >
                        <div>
                            <AdvertWrapper style={csstyle}>
                                <NormalSpan>{titleCN === undefined ? defaultValue : titleCN[0]}</NormalSpan>
                                <GradientSpan>{titleCN === undefined ? defaultValue : titleCN[1]}</GradientSpan>
                                <EnglishTitle>{titleEN === undefined ? defaultValue : titleEN[0]}</EnglishTitle>
                                {this.deconstruction(paragraph)}
                                {/* <div><LinkButton linkValue={'了解更多'} styleColor={'white'}/></div> */}
                            </AdvertWrapper>
                        </div>
                    </SwiperWrapper>
                </SwiperContainer>
            </BannerBackgroundExpend>
        );
    }
}


