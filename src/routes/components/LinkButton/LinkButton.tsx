import * as React from 'react'
import styled from 'styled-components';


interface ILinkButtonProps {
    linkValue?: string
    styleColor?: string | undefined
    to?: string
}

class LinkButton extends React.Component<ILinkButtonProps, any>{
    constructor( props: ILinkButtonProps) {
        super(props)
        this.props = {
            linkValue: '查看详情',
            styleColor: undefined,
            to: '/'
        };
    }


    changeStyle(styleType: string|undefined) {
        //默认使用外部样式
        if (styleType === undefined) {
            return {};
        }
        //白色风格样式
        if (styleType === "white") {
            return { color: 'white', fontSize: 14, border: '1px solid white' }
        }
        if (styleType === 'gray') {
            return { color: '#666', fontSize: 14, border: '1px solid #666' }
        }

        //没有匹配上使用外部样式
        return {};
    }

    render() {

        const { linkValue, styleColor, to } = this.props;
        return (
            <div>
                <StyledA href={to}  style={this.changeStyle(styleColor)}>{linkValue}</StyledA>
            </div>
        );
    }
}


export default LinkButton;


const StyledA = styled.a`
width: 100px;
height: 28px;
display: inline-block;
border: rgb(3, 187, 227) 1px solid;
color:  rgb(3, 187, 227);
font-size: 14px;
border-radius: 1px;
line-height: 24px;
text-align: center;
text-decoration-line: none;
`;

 