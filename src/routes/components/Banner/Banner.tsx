import * as React from 'react'

import {BannerBackgroundExpend, AdvertWrapper, NormalSpan, GradientSpan,EnglishTitle,Brief} from "./";

interface BannerProps {
    titleCN
        ?
        : string[];
    titleEN
        ?
        : string[];
    paragraph?: string[];
    csstyle?: React.CSSProperties;
    defaultValue : string;

}
class Banner extends React.Component < BannerProps,
any > {

    constructor(props : BannerProps) {
        super(props)

        this.props = {
            defaultValue: 'no data'
        };
    }
    render() {

        const {titleCN, titleEN, paragraph, csstyle, defaultValue} = this.props;

        return (
            <BannerBackgroundExpend>
                <div className={'swiper-container-banner'}>
                    <div className={'swiper-wrapper'}>
                        <div>
                            <AdvertWrapper style={csstyle}>
                                <NormalSpan>{titleCN === undefined ? defaultValue: titleCN[0]}</NormalSpan>
                                <GradientSpan>{titleCN === undefined ? defaultValue  : titleCN[0]}</GradientSpan>
                                <EnglishTitle>{titleEN === undefined
                                        ? defaultValue
                                        : titleEN[0]}</EnglishTitle>
                                <Brief>{paragraph}</Brief>
                                {/* <div><LinkButton linkValue={'了解更多'} styleColor={'white'}/></div> */}
                            </AdvertWrapper>
                        </div>
                    </div>
                </div>
            </BannerBackgroundExpend>
        );
    }
}
