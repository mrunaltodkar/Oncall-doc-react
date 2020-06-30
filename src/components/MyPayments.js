import React, { Component } from 'react'
import axios from 'axios'
import './MyPayments.css'

export default class MyPayments extends Component {

    state = {
        email: "",
        address: "",
        cardHolderName: "",
        cardName: "",

    }

    componentDidMount() {
        //this.props.getDoctors();
        axios.get('http://localhost:8085/mypayments/')
            .then((res) => {
                console.log(res);
                console.log(res.data.email);

                this.setState(
                    {
                        email: res.data.email,
                        address: res.data.address,
                        cardHolderName: res.data.cardDetails.cardHolderName,
                        city: res.data.city,
                        state: res.data.state,

                    }
                )
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>

                <br></br>
                <h2><i>Your Recent Transactions</i></h2>
                <div className="paymentlist" >
                    <div className='payments' >
                        <div className='paymentdescription'>
                            <div className='description1'>
                                <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Email  : {this.state.email}</i></h2>
                                <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Location : {this.state.address}</i></h2>
                                <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Card Holder Name  : {this.state.cardHolderName}</i></h2>
                                <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>City: {this.state.city}</i></h2>
                                <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>State : {this.state.state}</i></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}