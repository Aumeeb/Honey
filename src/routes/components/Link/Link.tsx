
import * as React from 'react';
// import history from '../../history';

// function isLeftClickEvent(event) {
//   return event.button === 0;
// }

// function isModifiedEvent(event) {
//   return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
// }
interface ILinkProps {
    to?: string;
    children?: React.ReactNode;
    onClick?: () => void;

    csstyle?: React.CSSProperties
}
interface ILinkState {

}
class Link extends React.Component<ILinkProps, ILinkState>{
    // static propTypes = {
    //     to: PropTypes.string.isRequired,
    //     children: PropTypes.node.isRequired,
    //     onClick: PropTypes.func,
    // };

    static defaultProps = {
        onClick: null,
    };

    // handleClick = event => {
    //     if (this.props.onClick) {
    //         this.props.onClick(event);
    //     }

    //     if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
    //         return;
    //     }

    //     if (event.defaultPrevented === true) {
    //         return;
    //     }

    //     event.preventDefault();
    //     history.push(this.props.to);
    // };

    render() {
        const { to, children, onClick, csstyle } = this.props;
        return (
            <a href={to} onClick={onClick} style={csstyle}   >
                {children}
            </a>
        );
    }
}

export default Link;
