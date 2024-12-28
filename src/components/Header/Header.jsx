import React from "react";
import PhoneTalk from "../../assets/Images/phone_in_talk.png";
import Drafts from "../../assets/Images/drafts.png";
import Facebook from "../../assets/Images/facebook.png"
import instagram from "../../assets/Images/instagram.png"
import linkedin from "../../assets/Images/linkedin.png"
import youtube from "../../assets/Images/youtube.png"
import Logo1 from "../../assets/Images/logo1.png"
import elipse from "../../assets/Images/Ellipses1.png"
import phoneforward from "../../assets/Images/phone_forwarded.png"
import "../Header/Header.css"
const Header = () => {
    return (
        <>
            <div className="row header1">
                <div className="col-10">
                    <span className="pt-1">
                        <img src={PhoneTalk} alt="phone Talk" />
                    </span>
                    <span className="mobileNum">
                        | 7397820829 -8446739782
                    </span>
                    <span className="pt-1 ps-4">
                        <img src={Drafts} alt="Drafts" />
                    </span>
                    <span className="email">
                        reactdevacademy@gmail.com
                    </span>
                </div>
                <div className="col-2" style={{ position: "relative", left: "36px" }}>
                    <img src={Facebook} className="socialmediaIcon" alt="" />
                    <img src={instagram} className="socialmediaIcon" alt="" />
                    <img src={youtube} className="socialmediaIcon" alt="" />
                    <img src={linkedin} className="socialmediaIcon" alt="" />
                </div>
            </div>
            <div className="row header2">
                <div className="col-3">
                    <img src={Logo1} className="logo1" alt="" />
                </div>
                <div className="col-9">
                    <ul className="pagelist">
                        <li className="pagelink"><img src={elipse} alt="" /> HOME </li>
                        <li className="pagelink">OUR COURCES</li>
                        <li className="pagelink">PLACEMENTS</li>
                        <li className="pagelink">ABOUT US</li>
                        <li className="pagelink">CAREERS</li>
                        <li className="pagelink">
                            <button className="btn pagelink" style={{ background: "#0865FE" }}>
                                <img src={phoneforward} height={19} width={19} alt="" /> |
                                CONTACT</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header