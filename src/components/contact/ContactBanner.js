import React from "react";

const ContactBanner = () => {
  return (
    <div className="contactBanner">
      <h5>Contact Us </h5>
      <h3>
        We Would <span className="grayColor">Love</span> To hear From You
      </h3>
      <div className="contactBannerMap">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="600"
              title="lagos"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=lagos&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://www.crocothemes.net">crocothemes.net</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
