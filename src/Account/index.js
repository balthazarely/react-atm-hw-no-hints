import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }

  depositFunction = (e) => {
    const depositCash = parseInt(this.refs.amount.value);

    this.setState({
      balance: this.state.balance + depositCash
    })
  }

  withdrawFunction = (e) => {
    const withdrawCash = parseInt(this.refs.amount.value);
    if(withdrawCash > this.state.balance) {
      return false
    }
    this.setState({
      balance: this.state.balance - withdrawCash
    })
  } 

  

  render() {
    
    let className = "balance";
    if(this.state.balance === 0) {
      className = 'zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={className}>${this.state.balance}</div>
        <input ref="amount" type="number" placeholder="enter an amount" />
        <button onClick={this.depositFunction}>Deposit</button>
        <button onClick={this.withdrawFunction}>Withdrawl</button>
      </div>
    )
  }
}

export default Account
