import React, { Component } from 'react'
import axios from 'axios';
import './DoctorList.css';

export default class AdminCustomerList extends Component{
    state = {
        doctorList: [],
        selectedDoctor: {}
    }

    componentDidMount() {
        //this.props.getDoctors();
        axios.get('http://localhost:8181/allcustomers')
            .then((res) => {
               console.log(res);
                //console.log(res.data);
                this.setState({ doctorList: res.data.doctors})
            })
            .catch((err) => {
                console.log(err);
            })
    }


    handleSubmit=(e)=>{
        alert(e+" has been removed")


            axios.get('http://localhost:8181/deletecustomer/'+e)
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
        console.log(this.state.doctorList)
        return(
            <div className="doctorlist" > 
            {this.state.doctorList.length ?
                this.state.doctorList.map(item =>
                    (
                        <div className='items' key={item.email}>

                            <div className='description'>
                                <div className='description1'>
                                    <h4 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Customer Name : {item.username}</i></h4>
                                    <h4 className="itemsfont" ><i>Customer Email : {item.email}</i></h4>
                                    <h4 className="itemsfont" ><i>Customer Number : {item.number}</i></h4>

                                </div>
                                <form onSubmit={()=>this.handleSubmit(item.email)}>
                                <button className="buttonpress" type="submit">Remove</button>
                                </form>
                            </div>
                        </div>
                    ))
                :
                <h3>Loading...</h3>
            }
        </div>
        )
    }

}