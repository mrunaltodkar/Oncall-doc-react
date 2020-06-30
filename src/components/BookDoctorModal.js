import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './BookDoctorModal.css';
import { coupons } from './Conscoupon'

export default class BookDoctorModal extends React.Component {
    state = {
        appliedCoupon: "",
        fees: this.props.doctorfees
    }

    componentDidMount() {
        this.setState({
            fees: this.props.doctorfees
        })
    }

    couponApplied = (e) => {
        console.log(this.state)
        this.setState({
            appliedCoupon: e.target.value
        })
    }

    discountedPrice = (e) => {
        //console.log(e.target);
        console.log("fees=", this.state.fees)
        //    const currentItem = coupons.filter(item=> item.name===this.state.appliedCoupon)
        //    console.log("curerntItem=", currentItem) 
        //    let discount = currentItem.discountedPrice
        let objectItem = coupons.filter(item => item.name === this.state.appliedCoupon)
        let discount = parseInt(objectItem.map(item => item.discountedPrice))
        this.setState({
            fees: this.state.fees - discount
        })
    }

    render() {
        //console.log(this.state.doctorFees)
        console.log(this.props.doctorfees)
        return (
            <Modal

                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ marginBottom: '5px', color: '#007c9d', fontFamily: 'El Messiri' }}>
                        Book {this.props.doctorname}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="container">
                    <div className="description">
                        <li>Doctor Name: {this.props.doctorname}</li>
                        <li>Fees: Rs {this.state.fees}/hour</li>
                        <label for="couponId">Enter Coupon Id:</label>
                        <input type="text" id="couponId" name="couponId" onChange={this.couponApplied}></input><br></br>
                        <Button variant="contained" style={{ background: '#ec7323', color: 'white' }}
                            onClick={this.discountedPrice} >Apply Coupon</Button>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide} href="/payment">Confirm Booking</Button>
                </Modal.Footer>
            </Modal>

        )
    }
}