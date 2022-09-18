import React from "react";

export class News extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <h5>{this.props.text}</h5>
        );
    }
}
export class NewsLetter extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <News text={this.props.text}/>
        );
    }
}

