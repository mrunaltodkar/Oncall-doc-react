import React, { Component } from "react";
import "./About.css";
import businessstd from "./images/business.png";
import techstory from "./images/techstory.png";
// import toi from "./images/toi.png";
// import techcircle from "./images/techcircle.png";
// import scoop from "./images/scoop.png";
// import startup from "./images/startup.png";
// import india from "./images/india.png";
// import beindian from "./images/beindian.png";
// import hindu from "./images/hindu.png";
// import businessline from "./images/businessline.png";

export class AboutUs extends Component {
    render() {
        return (
            <div className="main">
                <div className="about-us-container">
                    <div className="aboutUs-wrapper">
                        {/* <div class="title">About Us</div> */}
                        <h3 className="textfont">About Us</h3>
                        <div className="about-desc">
                            <p>
                                Founded in 2010, Deals & Coupons is headquartered in Mumbai with
                                a tech office in Bengaluru. Deals & Coupons receives about
<b>
                                    5.2 million monthly visits, lists coupons from 2000+ online
                                    brands
</b>
including top stores like Flipkart, Amazon, MakeMyTrip, PayTM
and BookMyShow, has
<b>7.5 million email subscribers</b> and
<b>more than 2 million App downloads</b>. Deals & Coupons has
grown to become India's largest discount and offer destination.
<br />
                            </p>
                            <p>
                                {" "}
At Deals & Coupons, we help you save money through our
comprehensive listing of coupons, offers, deals and discounts
from top online brands and websites. You can also earn reliable
Cashback on top of the merchant discounts every time you shop
through us. You can make better shopping decisions through our
powerful Price Comparison Browser Extension. <br />
                            </p>
                            <p>
                                Deals & Coupons is a trusted brand and a pioneer in affiliate
                                e-commerce scene in India. We are known for maintaining high
                                quality standards through our unique user interface and user
                                experience. We have been sustaining and preserving our USP,
                                which is to provide the most authentic and updated coupons and
                                deals. Today, Deals & Coupons is the top player in the coupons
                                and deals industry. But we aren’t new to media coverage, in fact
                                the biggest news channels and newspapers in the country along
                                with technological blogs have featured us on their platform. The
                                likes of 'CNBC Awaaz' have hailed us as Internet Heroes thus
                                recognizing one of the most successful E-commerce affiliate
                                start-ups from India. Our strategic B2B partnerships with some
                                powerful e-commerce companies and strong network in the IT
                                sector has benefited not only us but also our affiliates.
                                Through our business partnership programs, we help a company
                                increase its revenue, create brand awareness and expand its
                                reach. Our network includes a wide range of merchants and
                                strategic companies and our aim is to cross-promote each other
                                in providing the best deals to the end-consumer. GrabOn receives
                                partnership requests in bulk everyday but we intent to partner
                                with businesses that offer our users just what they want from
                                us. In the end it’s all about helping our users save on
                                everything!
</p>
                        </div>
                        <section className="go-featuredSection">
                            <div className="container">
                                <h3 className="textfont1">Featured In</h3>
                                <div class="go-featuredLinks">
                                    <div className="row1">
                                        <div className="column1">
                                            {/* <a
                                                className="linksofa"
                                                href="http://yourstory.com/2015/08/grabon/"
                                                rel="nofollow"
                                                target="blank"
                                                title="YourStory"
                                            >
                                                <img alt="YourStory" src={yourstory} />
                                            </a> */}

                                            {/* <a
                                                className="linksofa"
                                                href="https://www.vccircle.com/landmark-its-online-coupons-venture-grabon-grabs-250k-funding/"
                                                rel="nofollow"
                                                target="blank"
                                                title="vccircle"
                                            >
                                                <img alt="vccircle" src={vccircle} />
                                            </a> */}

                                            <a
                                                className="linksofa"
                                                href="http://www.business-standard.com/article/companies/coupons-deals-start-up-grabon-eyes-rs-1-200-crore-gmv-this-year-116021600815_1.html/"
                                                rel="nofollow"
                                                target="blank"
                                                title="businessstd"
                                            >
                                                <img alt="businessstd" src={businessstd} />
                                            </a>

                                            <a
                                                className="linksofa"
                                                href="http://techstory.in/grabon-office/"
                                                rel="nofollow"
                                                target="blank"
                                                title="techstory"
                                            >
                                                <img alt="techstory" src={techstory} />
                                            </a>

                                            {/* <a
                                                className="linksofa"
                                                href="http://economictimes.indiatimes.com/small-biz/startups/how-cashbacks-are-emerging-as-a-tool-for-e-retailers-to-lure-retain-customers/articleshow/49704136.cms/"
                                                rel="nofollow"
                                                target="blank"
                                                title="toi"
                                            >
                                                <img alt="toi" src={toi} />
                                            </a> */}

                                            {/* <a
                                                className="linksofa"
                                                href="http://techcircle.vccircle.com/2014/11/28/landmark-its-online-coupons-venture-grabon-grabs-250k-funding/"
                                                rel="nofollow"
                                                target="blank"
                                                title="techcircle"
                                            >
                                                <img alt="techcircle" src={techcircle} />
                                            </a>

                                            <a
                                                className="linksofa"
                                                href="http://www.scoopwhoop.com/Reasons-Why-Its-Awesome-To-Work-In-A-StartUp/"
                                                rel="nofollow"
                                                target="blank"
                                                title="scoop"
                                            >
                                                <img alt="scoop" src={scoop} />
                                            </a>

                                            <a
                                                className="linksofa"
                                                href="http://startuphyderabad.com/amazing-workplaces-grabon/"
                                                rel="nofollow"
                                                target="blank"
                                                title="startup"
                                            >
                                                <img alt="startup" src={startup} />
                                            </a>

                                            <a
                                                className="linksofa"
                                                href="http://www.thehansindia.com/posts/index/Indian-Business/2016-09-20/GrabOn-In%20dias-1-coupon-company-completes-3-successful-years/254851/"
                                                rel="nofollow"
                                                target="blank"
                                                title="india"
                                            >
                                                <img alt="india" src={india} />
                                            </a>
                                            <a
                                                className="linksofa"
                                                href="http://www.beindian.org/web-is-high-on-grabons-new-feature-buzz-me-15671/"
                                                rel="nofollow"
                                                target="blank"
                                                title="beindian"
                                            >
                                                <img alt="beindian" src={beindian} />
                                            </a>

                                            <a
                                                className="linksofa"
                                                href="http://www.thehindu.com/sci-tech/technology/internet/grabon-technolgies-go-grab-your-workstation/article17466627.ece/"
                                                rel="nofollow"
                                                target="blank"
                                                title="hindu"
                                            >
                                                <img alt="hindu" src={hindu} />
                                            </a>

                                            <a
                                                className="linksofa"
                                                href="http://www.thehindubusinessline.com/info-tech/grabon-opens-hyderabad-office/article8245232.ece/"
                                                rel="nofollow"
                                                target="blank"
                                                title="businessline"
                                            >
                                                <img alt="businessline" src={businessline} />
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
