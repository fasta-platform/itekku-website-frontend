import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactAddressDetails from "../components/contact/ContactAddressDetails";
import ContactBanner from "../components/contact/ContactBanner";
import Footer from "../components/footer/Footer";
import { setCurrentPageName } from "../store/authSlice/authSlice";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPageName("Contact"));
    return () => {
      window.scrollTo({ top: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
