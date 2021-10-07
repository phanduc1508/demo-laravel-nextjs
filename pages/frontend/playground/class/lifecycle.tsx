import React, { Component } from "react";

export default class ClassLifeCycle extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        console.log('run contructor')
    }

    componentWillMount() {
        console.log("run truoc render")
    }

    componentDidMount() {
        console.log('run sau render')
    }

    componentWillUpdate() {
        // tự kiểm tra xem mỗi state, state nào bị thay đổi ?
        // để mình thực hiện logic sao cho phù hợp

        //userId->call server -> data phu thuoc vao userId
        console.log('run componentWillUpdate')
    }

    componentWillReceiveProps() {
        
    }

    render() {
        console.log('run render')
        return (
            <>
                <h1>counter: {this.state.counter}</h1>
                <button onClick={() => {
                    this.setState((prevState) =>  {
                       return {
                            counter: prevState.counter + 1
                       }
                    })
                } }>counter</button>
            </>
        )
    }
}