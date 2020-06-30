import React, { Component } from "react";
import './PaymentCard.css';
import axios from 'axios';

export default class PaymentCard extends Component {

  state = {
    address:'',
    city:'',
    state:'',
    zip:'',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/payment', {
      address:this.state.address,
      city:this.state.zip,
      state:this.state.state,
      zip:this.state.zip,
      cardDetails:{
          cardHolderName: this.state.cardHolderName,
          cardNumber: this.state.cardNumber,
          expiryDate: this.state.expiryDate,
          cvv: this.state.cvv
      }
    }).then((res) => {
      alert("Your Payment is successfull")
      console.log(res);
      this.props.history.push({

        pathname: "/coupons",
        state: { data: res.data },
      })
    })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    return (
      <div className="payment-form">
        <form onSubmit={this.handleSubmit} method="post">
          <h2 className="text-center" style={{textSizeAdjust:"10px"}}>CREDIT/DEBIT CARD PAYMENT</h2>
          <div className="text-center card-btn">
              <img src="https://img.icons8.com/color/36/000000/visa.png" alt="visa card" width="80" height="50" /> <img src="https://img.icons8.com/color/36/000000/mastercard.png" alt="mastercard" width="80" height="50" /> <img src="https://img.icons8.com/color/36/000000/amex.png" alt="amex" width="80" height="50" />
          </div>
          <div className="or-seperator"></div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">CARD NUMBER</label>
                  <input className={"form-control new-line"} type="text" id="cardNumber" name="cardNumber" autoComplete="off" placeholder="•••• •••• •••• ••••" value={this.state.cardNumber} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">CARD EXPIRY</label>
                  <input className={"form-control new-line"} id="expiryDate" type="date" name="expiryDate" autoComplete="off" placeholder="•• / ••" value={this.state.expiryDate} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">CARD CVC</label>
                  <input className={"form-control new-line"} id="cvv" type="text" name="cvv" autoComplete="off" placeholder="••••" value={this.state.cvv} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">CARD HOLDER NAME</label>
                  <input className={"form-control new-line"} id="cardHolderName" type="text" name="cardHolderName" placeholder="Enter Card Holder Name here" value={this.state.cardHolderName} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">Address</label>
                  <input className={"form-control new-line"} id="address" type="text" name="address" placeholder="Enter address here" value={this.state.address} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">City</label>
                  <input className={"form-control new-line"} id="city" type="text" name="city" placeholder="Enter city name" value={this.state.city} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">State</label>
                  <input className={"form-control new-line"} id="state" type="text" name="state" placeholder="Enter state name" value={this.state.state} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <div className="input-group">
                  <label className="control-label">Zip</label>
                  <input className={"form-control new-line"} id="zip" type="text" name="zip" placeholder="Enter pincode here" value={this.state.zip} onChange={this.handleChange} required="required" />
              </div>
          </div>
          <div className="form-group">
              <button type="submit" className="btn btn-success btn-block login-btn">Make Payment</button>
          </div>
        </form>
      </div>	      
    )
  }
}