import React, { Component } from "react";
import "./Home.css";
import udemy from "./images/udemy1.png";
import flipcart from "./images/flipkart1.jpg";
import amazon from "./images/amazon1.jpg";
import pizza from "./images/pizza.jpg";
import mmt from "./images/mmt.jpg"


class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>India's Leading Coupons &amp; Deals Marketplace</h1>
                <div className="row">
                    <div className="column">
                        <img margin="left" src={amazon} alt="amazon" height="250" width="350" />
                        &nbsp;&nbsp;
                        <img src={flipcart} alt="flipcart" height="250" width="390" />
                        &nbsp;&nbsp;
                        <img src={udemy} alt="udemy" height="250" width="390" />
                    </div>
                </div>
                <div className="go-poCont">
                    <div className="go-poTitle">
                        <h3>Popular Offers of the Day</h3>
                    </div>
                    <div className="go-poCar">
                        <div
                            class="go-po go-cpn-show"
                            data-ctype="mb_m_h"
                            data-pos="1"
                            data-retype="c"
                            data-goid="92450"
                            data-type="cp"
                        >
                            <span>
                                <img
                                    src={pizza}
                                    alt="Dominos Offers"
                                    height="140"
                                    width="290"
                                />
                            </span>
                            <div class="go-poMer">
                                <p>
                                    <a href="/coupons">
                                        Flat Rs 100 Off On Orders Those Are Above Rs 500
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            class="go-po go-cpn-show"
                            data-ctype="mb_m_h"
                            data-pos="2"
                            data-retype="c"
                            data-goid="90370"
                            data-type="dl"
                        >
                            <span>
                                <img src={mmt} alt="mmt Offers" height="140" width="290" />
                            </span>
                            <div class="go-poMer">
                                <p>Flat 55% Off on Hotel Bookings(Coupon Code - MakeMyTRIPGRABR)</p>
                            </div>
                        </div>

                        <div
                            class="go-po go-cpn-show"
                            data-ctype="mb_m_h"
                            data-pos="3"
                            data-retype="c"
                            data-goid="76201"
                            data-type="cp"
                        >
                            <span>
                                <img src={udemy} alt="udemy Offers" height="140" width="290" />
                            </span>
                            <div class="go-poMer">
                                <p>Udemy - Get 100% OFF Free Courses Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;