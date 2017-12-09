import * as React from 'react'
import './LinkButton.css'


interface ILinkButtonProps {
    linkValue?: string
    styleColor?: string | undefined
    to?: string
}

class LinkButton extends React.Component<ILinkButtonProps, any>{
    constructor(public props: ILinkButtonProps) {
        super(props)
        this.props = {
            linkValue: 'null',
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
                <a href={to} className={`linkButton`} style={this.changeStyle(styleColor)}>{linkValue}</a>
            </div>
        );
    }
}


export default LinkButton;
