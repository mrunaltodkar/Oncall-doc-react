import React, { Component } from "react";
import covid from "./images/COVID-19.jpg";
import kawhi2 from "./images/2.jpg";
import kawhi3 from "./images/3.jpg";
import "./News.css";

export class News extends Component {
    render() {
        return (
            <div className="n-container-0-2-90">
                <a className="mr-container-0-2-92" href="/news">
                    <div class="h3">Company News</div>
                    <div class="mr-arrowContainer-0-2-94">
                        <div class="mr-arrowRight-0-2-95" />
                    </div>
                </a>
                <div className="n-container-0-2-96">
                    <a
                        className="n-coverPhoto-0-2-97 n-photo-0-2-102"
                        href="https://www.ssa.gov/coronavirus/"
                        aria-label="Covid Impact on goveronment"
                    >
                        <img
                            src={covid}
                            // height="250"
                            // width="250"
                            // style={{ backgroundColor: "dark" }}
                            alt="covid"
                        />
                    </a>

                    <div className="Sr-container-0-2-103">
                        <div className="label3 Sr-publication-0-2-104">Covid Impact on industries</div>
                        <div className="Sr-divider-0-2-105" />
                        <div className="label3 Sr-date-0-2-106">February 12th, 2020</div>
                    </div>

                    <a href="/news/article/honey-partners-with-kawhi-leonard-for-celebrity-ad-campaign">
                        <div
                            className="title4 n-title-0-2-99"
                            style={{ color: "#292a2a", margin: "16px 0px" }}
                        >
                            <b style={{ fontSize: "118%" }}>
                                Honey Partners with Kawhi Leonard for Celebrity Ad Campaign
                            </b>
                        </div>
                    </a>

                    <div className="body4 n-tag-0-2-100">
                        Last night, we launched our first ever celebrity ad spot featuring
                        Los Angeles Clippers’ superstar, two-time NBA champion, and finals
                        MVP Kawhi Leonard.
                        <br />
                    </div>
                </div>

                <div className="n-container-0-2-96">
                    <a
                        className="n-coverPhoto-0-2-97 n-photo-0-2-102"
                        href="/news/article/honey-partners-with-kawhi-leonard-for-celebrity-ad-campaign"
                        aria-label="Our next stage of growth begins..."
                    >
                        <img
                            src={kawhi2}
                            // height="250"
                            // width="250"
                            // style={{ backgroundColor: "dark" }}
                            alt="kawhi"
                        />
                    </a>

                    <div className="Sr-container-0-2-103">
                        <div className="label3 Sr-publication-0-2-104">LEADERSHIPS</div>
                        <div className="Sr-divider-0-2-105" />
                        <div className="label3 Sr-date-0-2-106">November 20th, 2019</div>
                    </div>

                    <a href="https://www.joinhoney.com/news/article/our-next-stage-of-growth-begins">
                        <div
                            className="title4 n-title-0-2-99"
                            style={{ color: "#292a2a", margin: "16px 0px" }}
                        >
                            <b style={{ fontSize: "118%" }}>
                                Our next stage of growth begins...
                            </b>
                        </div>
                    </a>

                    <div className="body4 n-tag-0-2-100">
                        Today we announced that Honey is being acquired by PayPal. By
                        joining forces, Honey will be able to build products faster, connect
                        with more merchants, and, most importantly, help people save money
                        on a massive scale.
                        <br />
                    </div>


                    <div className="n-container-0-2-96">
                        <a
                            className="n-coverPhoto-0-2-97 n-photo-0-2-102"
                            href="https://www.joinhoney.com/news/article/honey-launches-multi-year-partnership-with-la-clippers"
                            aria-label="Honey Launches Multi-Year Partnership with LA Clippers"
                        >
                            <img
                                src={kawhi3}
                                // height="250"
                                // width="250"
                                // style={{ backgroundColor: "dark" }}
                                alt="kawhi"
                            />
                        </a>
                    </div>
                    <div className="Sr-container-0-2-103">
                        <div className="label3 Sr-publication-0-2-104">PARTNERSHIPS</div>
                        <div className="Sr-divider-0-2-105" />
                        <div className="label3 Sr-date-0-2-106">September 20th, 2019</div>
                    </div>

                    <a href="https://www.joinhoney.com/news/article/honey-launches-multi-year-partnership-with-la-clippers" />
                    <div
                        className="title4 n-title-0-2-99"
                        style={{ color: "#292a2a", margin: "16px 0px" }}
                    >
                        <b style={{ fontSize: "118%" }}>
                            Honey Launches Multi-Year Partnership with LA Clippers
                            </b>
                    </div>
                </div>
            </div>
        )
    }
}