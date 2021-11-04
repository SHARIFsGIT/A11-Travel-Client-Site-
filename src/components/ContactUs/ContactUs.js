import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="d-lg-flex">
            <div className="p-3 m-lg-5">
            <h3>Have any query? Feel free to messages us.</h3>
            <br />
                <form action="">
                    <h5>Full name</h5>
                    <input className="px-5" type="text" />
                    <h5>Email</h5>
                    <input className="px-5" type="text" />
                    <h5>Message</h5>
                    <textarea name="message" id="message" cols="70" rows="8"></textarea>
                    <br />
                    <button>Send Message</button>
                </form>
            </div>
                <div className="p-3 m-5">
                    <div>
                        <h3>Get in touch with us</h3>
                        <p>Feel free to contact us at any query and needs. We always ready to serve you at our level best.</p>
                    </div>
                    <div>
                        <h3>Our Office</h3>
                        <div>
                            <h5>Address: <small>House#15-19, Block-E, Banasree, Main Road, Rampura, Dhaka-1219.</small> </h5>
                            <h5>Phone: <small>+8802-8390000, +8801952289332, +8801845444444</small> </h5>
                            <h5>Email: <small>tourdeworld@gmail.com</small> </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;