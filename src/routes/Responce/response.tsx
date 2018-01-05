import * as React from "react";

interface IComment {
    name: string;
    content: string;
    publishTime: string;
}
interface ResponceState {
    loading: boolean;
    error: any;
    value: { commentList: IComment[] } | null
}
interface ResponceProps {
    promise: Promise<Response>
}

export default class ZResponce extends React.Component<ResponceProps, ResponceState>{
    constructor(props: ResponceProps) {
        super(props);

        this.state = {
            loading: true,
            error: null,
            value: null,
        }

    }
    componentDidMount() {
        if(this.props.promise!=undefined){
            this.props.promise.then(
                response => response.json()
            ).then( value => this.setState({ loading: false, value }))
                .catch(error => this.setState({ loading: false, error }));
        }
    }

    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            const list = this.state.value && this.state.value.commentList;
            return (
                <ul className="comment-box">
                    {list && list.map((item, i) => (
                        <li key={`reponse-${i}`}>
                            <p >{item.name}</p>
                            <p >{item.content}</p>
                            <p >{item.publishTime}</p>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}