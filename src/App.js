import React, { Component } from 'react';

class MyExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
    }
    handleClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <p>Считать: {count}</p>
                <button onClick={this.handleClick}>Нажать</button>
            </div>
        );
    }
}
export default MyExampleComponent;

