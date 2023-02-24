// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {randomNum: 1, total: 0, heads: 0, tails: 0}

  onClickToss = async () => {
    await this.setState(prevState => ({
      randomNum: Math.floor(Math.random() * 2),
      total: prevState.total + 1,
    }))
    const {randomNum} = this.state
    const isTrue =
      randomNum === 1
        ? this.setState(prevState => ({heads: prevState.heads + 1}))
        : this.setState(prevState => ({tails: prevState.tails + 1}))
  }

  render() {
    const {randomNum, total, heads, tails} = this.state
    const isHeads = randomNum === 1
    const imgUrl = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="container">
        <div className="card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p>heads (or) tails</p>
          <div>
            <img src={imgUrl} alt="toss result" className="image-toss" />
          </div>
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="list-container">
            <p className="end-result">Total: {total}</p>
            <p className="end-result">Heads: {heads}</p>
            <p className="end-result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
