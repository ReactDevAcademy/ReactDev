import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Home.css"

import sliderimg1 from "../assets/Images/sliderimg1.jpg"
import sliderimg2 from "../assets/Images/sliderimg2.jpg"
import sliderimg3 from "../assets/Images/sliderimg3.jpg"
import group8 from "../assets/Images/Group8.png"
import leftbtn from "../assets/Images/leftbtn.png"
import rightbtn from "../assets/Images/rightbtn.png"
import whatsappimg from "../assets/Images/whatsappimga.png"
import staricon from "../assets/Images/starticon.png"
import bottomicon from "../assets/Images/bottomicon.png"
import image1 from "../assets/Images/image1.png"
import Infoboxback from '../assets/Images/Infoboxback.png'
import starwhite from "../assets/Images/startwhite.png"
import subphoto1 from "../assets/Images/subphoto1.png"
import favicon1 from "../assets/Images/favicon1.png"
import Getintouch from "../assets/Images/Getintouch.png"
import Infinityimg from "../assets/Images/Infinityimg.png"
import laptopgirl from "../assets/Images/laptopgirl.png"
import Vectorline from "../assets/Images/Vectorline.png"
import sendusmsgicon from "../assets/Images/sendusmsgicon.png"
import arrowright from "../assets/Images/arrow_right_alt.png"
const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        // setIndex(selectedIndex);
    };

    return (
        <>
            <div className="HomeMaincontainer">
                <div className="whatsappIcon">
                    <img src={whatsappimg} height={36} width={36} alt="" />
                </div>
                <div className="Homecontainer1">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 sliderimg"
                                src={sliderimg2}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <img src={group8} className='GetInTouch' alt="" />
                                <div className="leftrightbtn">
                                    <img src={leftbtn} onClick={() => setIndex(2)} alt="" />
                                    <img src={rightbtn} onClick={() => setIndex(1)} alt="" />
                                </div>
                                {/* <h3>First Slide</h3> */}
                                {/* <p>Description for the first slide.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 sliderimg"
                                src={sliderimg1}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <div className="leftrightbtn">
                                    <img src={leftbtn} onClick={() => setIndex(0)} alt="" />
                                    <img src={rightbtn} onClick={() => setIndex(2)} alt="" />
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 sliderimg"
                                src={sliderimg3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <div className="leftrightbtn">
                                    <img src={leftbtn} onClick={() => setIndex(1)} alt="" />
                                    <img src={rightbtn} onClick={() => setIndex(0)} alt="" />
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="Homecontainer2">
                    <hr className='hrline' />
                    <div className="container">
                        <div className="row">
                            <div className="col-10" style={{ marginLeft: '5%' }}>
                                <img src={staricon} alt="" style={{ marginBottom: "6px" }} />
                                <p className='whychoose'>Why Choose ReactDev Academy?</p>
                            </div>
                            <div className="col-1">
                                <div className="bottmicon">
                                    <img src={bottomicon} alt="bottomicon" />
                                </div>
                            </div>
                        </div>
                        <div className="row " style={{ position: "relative", left: "6%" }}>
                            {Array.from({ length: 9 }).map((item) => {
                                return (
                                    <div className="col-4 mb-5">
                                        <div className="InfoBox " style={{ background: `url(${Infoboxback})` }}>
                                            <div className="pbox">
                                                <img src={image1} className='infoprofile' alt="" />
                                            </div>
                                            <div className="cbox">
                                                <p className='title'>
                                                    100% placement assistance & best support
                                                </p>
                                                <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur molestiae error nihil optio, quaerat eius enim odio recusandae beatae totam?</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="Homecontainer3">
                <div className="container">
                        <div className="row" style={{ height: '35px' }}>
                            <div className="col-12 d-flex justify-content-center" >
                                <img src={starwhite} alt="" style={{ marginBottom: "15px" }} />
                                <p className='whychoose2'>Why Choose ReactDev Academy?</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <span className='chooseInfo'>Here's a glimpse into who we are and what sets us apart.</span>
                        </div>
                    </div>
                <div className="container">
                        <div className="row" style={{ marginLeft: '5%' }}>
                            <div className="col-6">
                                <img src={favicon1} className='favicon1' alt="" />
                                <img src={subphoto1} height={300} width={500} alt="" />
                            </div>
                            <div className="col-6" style={{ paddingRight: '60px' }}>
                                <span className='bigcontent'>
                                    Embark on an exciting journey to unravel the potential of React.js! Discover how your development team can effortlessly express creativity through code, creating engaging and impactful user interfaces. Our guidance will make learning React.js a seamless and thrilling experience, saying goodbye to complex IT processes. Get ready to dive into the world of React.js mastery – an adventure in which your skills and creativity will thrive!

                                    Embark on an exciting journey to unravel the potential of React.js! Discover how your development team can effortlessly express creativity through code, creating engaging and impactful user interfaces. Our guidance will make learning React.js a seamless and thrilling experience, saying goodbye to complex IT processes.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Homecontainer4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src={Getintouch} className='GetinTouch' alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6" style={{marginLeft:"5%"}}>
                            <img src={Vectorline} className='vectorline' alt="" />
                            <img src={laptopgirl} className='laptopgirl' alt="" />
                            <img src={Infinityimg} className='infinityimg' alt="" />
                        </div>
                        <div className="col-5">
                            <div className="d-flex justify-content-center">

                                <span className='sendUsMsg'>send us message</span>
                                <img src={sendusmsgicon}  className='sendmsgicon' alt="" />
                            </div>
                            <div className="form-group">
                                <input type="text"  placeholder='Name*' className='form-control mt-2'/>
                                <input type="text"  placeholder='Mobile No*' className='form-control mt-2'/>
                                <input type="text"  placeholder='Email ID*' className='form-control mt-2'/>
                                <input type="text"  placeholder='Requirement *' className='form-control mt-2'/>
                                <button className='btn mt-4 submitbtn'>
                                    <img src={arrowright}className='rightarrow' alt="" />
                                    <span>Submit</span>
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home