import React, { Component } from 'react'
import axios from 'axios';
import './DoctorList.css';

export default class AdminDoctorList extends Component{
    state = {
        doctorList: [],
        selectedDoctor: {}
    }

    componentDidMount() {
        //this.props.getDoctors();
        axios.get('http://localhost:8187/doctorlist')
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


            axios.get('http://localhost:8187/deletedoctor/'+e)
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
                                    <h4 className="itemsfont" style={{ marginBottom: '5px', fontFamily: 'El Messiri', }}><i>Doctor Name : {item.doctorName}</i></h4>
                                    <h4 className="itemsfont" ><i>Doctor Email : {item.email}</i></h4>
                                    <h4 className="itemsfont" ><i>Qualification : {item.doctorQualification}</i></h4>
                                    <h4 className="itemsfont" ><i>Fee : {item.doctorPrice}</i></h4>
                                    <h4 className="itemsfont" ><i>Availability : {item.availability}</i> </h4>
                                    <h4 className="itemsfont" ><i>Address : {item.address}</i></h4>
                                </div>
                                <form onSubmit={()=>this.handleSubmit(item.email)}>
                                <button className="buttonpressitem" type="submit">Remove</button>
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