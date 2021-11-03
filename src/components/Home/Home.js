import React from 'react';
import { Carousel } from 'react-bootstrap';
import Client from '../Client/Client';
import ContactForm from '../Contact/Contact';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item className="img-fluid">
                <img className="d-block w-100" src="https://www.topindianholidays.com/images/tours-banner.jpg" alt=""/>
            <Carousel.Caption>
                <h3>India</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://www.puredestinations.co.uk/wp-content/uploads/2017/09/header-Best-Places-To-Visit-In-Thailand-Thailand-Holidays-Packages--1600x500.jpg" alt=""/>
            <Carousel.Caption >
                <h3>Thailand</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://di5fgdew4nptq.cloudfront.net/api2/media/images/50a91471-0db6-ea11-80da-f8bc124783a3" alt=""/>
            <Carousel.Caption>
                <h3>Dubai</h3>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <div>
                <Shop></Shop>
            </div>
            <div>
                <Client></Client>
            </div>
            <div className="d-flex justify-content-around">
                <div>
                <ContactForm></ContactForm>
                </div>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rDYdeq3JW_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>

    );
};

export default Home;