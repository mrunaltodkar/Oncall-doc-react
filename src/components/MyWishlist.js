import React, { Component } from 'react'
import axios from 'axios'
import './MyPayments.css'
import dominos from './images/Dominos.jpg'
import './MyWishlist.css';

export default class MyWishlist extends Component{

constructor(props){

    super()
    this.state = {
        couponId:"",
        couponName:"",
        couponDescription:"",
        cardName:"",
        couponRate:"",
        email:"",
        status:""
    };

}

    componentDidMount() {
        //this.props.getDoctors();
        axios.get('http://localhost:8181/mywhishlist')
            .then((res) => {
                console.log(res);
                this.setState(
                    { 
                        email: res.data.email,
                        couponId:res.data.coupons.couponId,
                        couponName:res.data.coupons.couponName,
                        couponDescription:res.data.coupons.couponDescription,
                        couponRate:res.data.coupons.couponRate,

                    }
                    )
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleSubmit=(e)=>{
        alert("Your Coupoun has been deleted from whishlist")
            axios.get('http://localhost:8181/deletewhishlist')
                .then((res) => {
                    console.log(res);
                    alert(res)
                        this.props.history.push({
        })
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    render(){
        return(
            <div>
                <br></br>
                <h2><i>Your Whishlist</i></h2>
                <img className="imgdisplaywhishlist" src={dominos} />

            <div className="paymentlist" >
                        <div className='payments' >
                            <div className='whishlistdescription'>
                                <div className='description1'>
                                    <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Email  : {this.state.email}</i></h2>
                                    <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Coupon Rate  : {this.state.couponRate}</i></h2>
                                    <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Coupon Name : {this.state.couponName}</i></h2>
                                    <h2 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>coupon Code  : {this.state.couponId}</i></h2>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                <button className="buttonpress" type="submit">Remove</button>
                                </form>
                            </div>
                        </div>
        </div>
        </div>
        )
}
} 