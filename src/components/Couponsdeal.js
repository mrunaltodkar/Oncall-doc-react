import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import CouponsNav from './CouponsNav';
import './Couponsdeal.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Welcome from './Welcome';
import { News } from './News';
import { AboutUs } from './About';
import { Coupons } from './Coupons';
import { Categories } from './Categories';

function Couponsdeal() {
    return (
        <Router>
            <div className="App">
                <CouponsNav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/login" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/news" component={News} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/coupons" component={Coupons} />
                    <Route path="/categories" component={Categories} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default Couponsdeal;