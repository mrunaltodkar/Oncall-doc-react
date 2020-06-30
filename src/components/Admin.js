import React, { Component } from 'react';
import Logog from './images/admin.png';


export default class Admin extends Component{

    render(){
        return(
                <div>
                <br/>
                <img src={Logog} width="400px" height="300px"/>
                </div>
        )
    }
}