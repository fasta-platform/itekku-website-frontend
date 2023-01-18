import React, { useEffect } from "react";
import ContactAddressDetails from "../components/contact/ContactAddressDetails";
import ContactBanner from "../components/contact/ContactBanner";
import Footer from "../components/footer/Footer";

const Contact = () => {
  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0 });
    };
  }, []);
  return (
    <div className="contacts">
      <ContactBanner />
      <ContactAddressDetails />
      <Footer />
    </div>
  );
};

export default Contact;
