import React, { Component } from 'react'

class QuizEnd extends Component{
    handleClickReset(){
        this.props.resetClickHandler()
    }

    render(){
        return(
            <div>
            <p>Thanks for playing!</p>
            <a href='' onClick={this.handleClickReset.bind(this)}>Reset Quiz</a>
            </div>
        )
    }
}
export default QuizEnd