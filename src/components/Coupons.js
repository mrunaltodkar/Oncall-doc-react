import React, { Component } from "react";
import dominoeslogo from "./images/dominoslogo.jpg";
import "./Coupons.css";

export class Coupons extends Component {
    render() {
        return (
            <div className="go-pc">
                <div className="go-cidCont">
                    <div className="container">
                        <div className="go-cidBox">
                            <div className="go-cidCopy ">
                                <div className="go-cdBox go-smooth">
                                    <p className="paratext">
                                        <h5>
                                            Rs.100<span> OFF</span>
                                        </h5>
                                        
Flat Rs 100 Off On Orders Above Rs 500
</p>
                                    <div className="go-cid-cont">
                                        <b>Use this coupon code at checkout:</b>
                                        <div className="go-ccCont ">
                                            <b>FIRSTPIZZA</b>
                                            <span
                                                className="go-cidCC"
                                                id="clpCde"
                                                data-clipboard-text="FIRSTPIZZA"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="go-coupDetails">
                                <h4 className="hdesc">Coupon/Offer Description</h4>
                                <div className="go-cdDesc go-smooth">
                                    <ul className="design">
                                        <li>
                                            Get <span className="ner-13 ner-m">flat Rs 100 off</span> on
all orders above <span className="ner-10 ner-m">Rs 500</span>.
</li>
                                        <li>
                                            Valid on the <span className="ner-14 ner-m">app only</span>.
</li>
                                        <li>
                                            Applicable from{" "}
                                            <span className="ner-16 ner-m">11 AM to 11 PM.</span>
                                        </li>
                                        <li>
                                            Not applicable on everyday value orders, combos, or pizza
                                            mania orders.
</li>
                                        <li>Cannot be combined with other offers/coupons.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="go-popularOffersContainer go-cidpo withBg">
                    <div
                        className="container"
                        style={{ margin: "0 auto", position: "relative" }}
                    >
                        <div
                            className="go-cidRC"
                            data-cid="92450"
                            id="go_sgstd_cid"
                            data-sc=""
                            data-catid="25"
                            data-catytpe="1"
                        >
                            <h2 className="designh1">GrabOn Related Coupons</h2>
                            <ul className="list-inline" style={{ margin: "0 -12px" }}>
                                <li>
                                    <div className="go-crcBox">
                                        <span>
                                            <img
                                                src={dominoeslogo}
                                                alt="Dominos"
                                                style={{
                                                    maxHeight: "40px",
                                                    maxWidth: "100%",
                                                    verticalAlign: "bottom"
                                                }}
                                            />
                                        </span>
                                        <b className="styles">
                                            50%<span> Cashback</span>
                                        </b>
                                        <h2
                                            className="go-cpn-show go-cur"
                                            data-goid="91349"
                                            data-ctype="cid_s"
                                            data-retype="m"
                                            data-fname="dominos-coupons/"
                                            data-type="dl"
                                        >
                                            Amazon Pay Offer - Flat 50% Cashback (New Users)
</h2>
                                        <a
                                            title="Dominos"
                                            href="https://www.grabon.in/dominos-coupons/"
                                        >
                                            See All Dominos Offers
</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="go-crcBox">
                                        <span>
                                            <img
                                                src={dominoeslogo}
                                                alt="Dominos"
                                                style={{
                                                    maxHeight: "40px",
                                                    maxWidth: "100%",
                                                    verticalAlign: "bottom"
                                                }}
                                            />
                                        </span>
                                        <b className="styles">
                                            <span> Free Offer</span>
                                        </b>
                                        <h2
                                            className="go-cpn-show go-cur"
                                            data-goid="91349"
                                            data-ctype="cid_s"
                                            data-retype="m"
                                            data-fname="dominos-coupons/"
                                            data-type="dl"
                                        >
                                            Free Garlic Bread On All Orders Above Rs 300
</h2>
                                        <a
                                            title="Dominos"
                                            href="https://www.grabon.in/dominos-coupons/"
                                        >
                                            See All Dominos Offers
</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="go-crcBox">
                                        <span>
                                            <img
                                                src={dominoeslogo}
                                                alt="Dominos"
                                                style={{
                                                    maxHeight: "40px",
                                                    maxWidth: "100%",
                                                    verticalAlign: "bottom"
                                                }}
                                            />
                                        </span>
                                        <b className="styles">
                                            Rs.50<span> OFF</span>
                                        </b>
                                        <h2
                                            className="go-cpn-show go-cur"
                                            data-goid="91349"
                                            data-ctype="cid_s"
                                            data-retype="m"
                                            data-fname="dominos-coupons/"
                                            data-type="dl"
                                        >
                                            Flat Rs 50 Off On Orders Above Rs 500
</h2>
                                        <a
                                            title="Dominos"
                                            href="https://www.grabon.in/dominos-coupons/"
                                        >
                                            See All Dominos Offers
</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
