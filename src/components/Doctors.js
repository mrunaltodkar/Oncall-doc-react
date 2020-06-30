import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './Doctors.css'
import BookDoctorModal from './BookDoctorModal';


export default class DoctorList extends React.Component {
    state = {
        doctorList: [],
        modalOpen: false,
        selectedDoctor: {},
        finalSubmit: false
    }

    componentDidMount() {
        //this.props.getDoctors();
        axios.get('http://localhost:8187/doctorlist')
            .then((res) => {
                //console.log(res);
                //console.log(res.data);
                this.setState({ doctorList: res.data.doctors })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    modalHandler = (doctor) => {
        this.setState({
            modalOpen: true,
            selectedDoctor: {
                doctorName: doctor.doctorName,
                doctorFees: doctor.fees
            }
        })
    }

    render() {
        //console.log(this.state.doctorList)
        let bookDoctorModalClose = () => this.setState({ modalOpen: false });
        console.log(this.state.modalOpen)
        return (
            <div className="container">
                {/* {this.state.finalSubmit && <CustomizedSnackbar finalSubmit={(value) => this.setState({ finalSubmit: value })} selectedDoctor={this.state.selectedDoctor} />} */}
                
                {this.state.doctorList.length ?
                    this.state.doctorList.map(item =>
                        (
                            <div className='items' key={item.doctorName}>
                                <div className='avatar'>
                                    {item.image ?
                                        // <img src={`data:image/png;base64,${Buffer.from(item.image.data).toString('base64')}`} alt="mh" className={styles.avatar}/>
                                        // <img src={'https://reactapp-images.s3.us-east-2.amazonaws.com/' + item.image} alt="mh"className={styles.avatar}/>
                                        <img src={'http://localhost:3002/' + item.image} alt="mh" className='avatar' />
                                        : <h3>No image</h3>}
                                </div>
                                <div className='description'>
                                    <div className='description1'>
                                        <h2 style={{ marginBottom: '5px', color: '#007c9d', fontFamily: 'El Messiri' }}>{item.doctorName}</h2>
                                        <li>Qualification: {item.qualification}</li>
                                        <li>Speciality: {item.speciality}</li>
                                        <li>Experience: {item.experience} years</li>
                                        <li>Fees: Rs {item.fees}/hour</li>
                                    </div>
                                    <div className='description2'>
                                        <i className='fas fa-map-marker-alt' style={{ fontSize: '20px', color: '#007c9d' }}>
                                            <h2 style={{ float: 'right', fontSize: '18px', color: '#007c9d', fontFamily: 'El Messiri', marginLeft: '5px' }}>
                                                {item.location}
                                            </h2>
                                        </i>
                                        <Button variant="contained" style={{ background: '#ec7323', color: 'white' }}
                                            onClick={() => this.modalHandler(item)}>Book Appointment</Button>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    :
                    // <CircularProgress color="secondary" size="8rem"/>
                    <h3>Loading...</h3>
                }
                {this.state.modalOpen &&
                                            <BookDoctorModal
                                                show={this.state.modalOpen}
                                                onHide={bookDoctorModalClose}
                                                doctorname={this.state.selectedDoctor.doctorName}
                                                doctorfees={this.state.selectedDoctor.doctorFees}
                                            />}
                {/* {this.state.modalOpen && <DoctorModal finalSubmit={(value) => this.setState({ finalSubmit: value })} currentDoctor={this.state.selectedDoctor} />} */}
            </div>
        )
    }
}

