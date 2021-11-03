import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { React, Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2 className="ms-5 mt-5">Our Insurance Partners</h2>
        <Slider {...settings}>
          <div>
            <img src="https://images-platform.99static.com//0snvdo6K6vvVgbYmQmf9Sp4khh4=/0x0:1024x1024/fit-in/500x500/99designs-contests-attachments/113/113975/attachment_113975607" alt="" />
          </div>
          <div>
            <img src="https://images-platform.99static.com/mN7coJKK6pOgrGD_p_76C-qBzwM=/190x190:1714x1714/500x500/top/smart/99designs-contests-attachments/112/112567/attachment_112567001" alt="" />
          </div>
          <div>
		  	<img src="https://images-platform.99static.com/nvQ_Kl2dRp3BIjYAj784vdQ1Z3s=/0x0:1500x1500/500x500/top/smart/99designs-contests-attachments/123/123754/attachment_123754685" alt="" />
          </div>
          <div>
		  	<img src="https://images-platform.99static.com//Qi-waTpZX0AyVBzSYr0rh2Zzyls=/246x118:778x650/fit-in/500x500/99designs-contests-attachments/51/51242/attachment_51242639" alt="" />
          </div>
          <div>
		  	<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bc2eb220200081.562e75393b562.png" alt="" />
          </div>
          <div>
		  	<img src="https://s.tmimgcdn.com/scr/800x500/184200/arrows-invest-tech-logo-template_184226-original.jpg" alt="" />
          </div>
          <div>
		  	<img src="https://logopond.com/logos/7d58bd1600ad2b0c32c2606fc8ba1b0a.png" alt="" />
          </div>
          <div>
		  	<img src="https://assets.themuse.com/uploaded/companies/61/small_logo.png" alt="" />
          </div>
          <div>
		  	<img src="https://digitalhealthcanada.com/wp-content/uploads/2019/03/Fraser-Health-620x310.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}