import React, { Component } from 'react';
import './index.scss'


export default class CrossAndCircles extends Component {

    state = {
        player1: true,
        player2: false,
        player1Turns: [],
        player2Turns: [],
        winCondition: [],
        win: false
    }

    componentDidMount = () => {
        if (localStorage.getItem('one') === null && localStorage.getItem('two') === null) {
            localStorage.setItem('one', 0);
            localStorage.setItem('two', 0);
        }
    }


    renderSquares = () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        return arr.map(item => {
            return <input className="square" id={item} onClick={this.click} readOnly key={item} />
        })
    }

    chekResult = (square) => {
        const { player1Turns, player2Turns } = this.state


        if ((player1Turns.length + player2Turns.length) === 9) {
            setTimeout(() => {
                alert('Draw!')
                localStorage.setItem('one', +localStorage.getItem('one') + 1)
                localStorage.setItem('two', +localStorage.getItem('two') + 1)
            }, 100)

        }

        if (player1Turns.length >= 3 || player2Turns.length >= 3) {

            if (player1Turns.includes('1') && player1Turns.includes('2') && player1Turns.includes('3')) {
                this.setState({ winCondition: [1, 2, 3] })
            }
            else if (player1Turns.includes('4') && player1Turns.includes('5') && player1Turns.includes('6')) {
            }
            else if (player1Turns.includes('7') && player1Turns.includes('8') && player1Turns.includes('9')) {
            }
            else if (player1Turns.includes('1') && player1Turns.includes('4') && player1Turns.includes('7')) {
            }
            else if (player1Turns.includes('2') && player1Turns.includes('5') && player1Turns.includes('8')) {
            }
            else if (player1Turns.includes('3') && player1Turns.includes('6') && player1Turns.includes('9')) {
            }
            else if (player1Turns.includes('1') && player1Turns.includes('5') && player1Turns.includes('9')) {
            }
            else if (player1Turns.includes('3') && player1Turns.includes('5') && player1Turns.includes('7')) {
            }
        }


    }

    click = (e) => {
        const { player1Turns, player2Turns } = this.state;
        if (!e.target.value) {
            this.setState({
                player1: !this.state.player1,
                player2: !this.state.player2,
            })
            if (this.state.player1) {
                e.target.value = '╳';
                player1Turns.push(e.target.id)
                this.setState({
                    player1Turns: player1Turns
                })
            } else {
                e.target.value = '◯';
                player2Turns.push(e.target.id)
                this.setState({
                    player2Turns: player2Turns
                })
            }


        }
        e.target.disabled = true
        this.chekResult(e.target);

    }

    // return 

    render() {
        const { player1, win } = this.state;
        let turn;
        console.log(this.state);
        player1 ? turn = "PLAYER ONE" : turn = "PLAYER TWO"
        if (win) alert('peremoga')
        return (
            <>
                <div className="info">
                    <div className="turn-info">Turn of - <span style={{ color: "red" }}>{turn}</span></div>
                    <div className="score-info">{`Player One:${localStorage.getItem('one')} - Player Two:${localStorage.getItem('two')}`}</div>
                </div>

                <div className="container">
                    {this.renderSquares()}
                </div>
            </>
        )
    }
}

