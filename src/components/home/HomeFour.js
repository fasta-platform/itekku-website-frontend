import React, { useEffect, useState } from "react";
import { states } from "../../appData/states";
import { formateLists } from "../../helpers/customFunctions";

import Swal from "sweetalert2";
import { setPageLoading } from "../../store/authSlice/authSlice";
import { useDispatch } from "react-redux";

const HomeFour = () => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneCode] = useState("+234");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessLocation, setBusinessLocation] = useState("Lagos State");
  const [selectedBusinessSize, setSelectedBusinessSize] = useState([]);

  const [emptyFields, setEmptyFields] = useState(true);
  const [showDropDown, setShowDropDown] = useState(false);

  const [allStates] = useState(states());

  const servicesType = [
    {
      id: 1,
      name: "Social Commerce",
    },
    {
      id: 2,
      name: "Buy Now Pay Later",
    },
    {
      id: 3,
      name: "Logistics",
    },
    {
      id: 4,
      name: "Meta Credit",
    },
  ];

  const clearFields = () => {
    setFullName("");
    setBusinessName("");
    setPhone("");
    setEmail("");
    setBusinessLocation("Lagos State");
    setSelectedBusinessSize([]);
    setEmptyFields(true);
    setShowDropDown(false);
  };

  useEffect(() => {
    // console.log(allStates);
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fullName,
    businessName,
    phoneCode,
    phone,
    email,
    businessLocation,
    selectedBusinessSize,
  ]);

  const validateForm = () => {
    if (!fullName) {
      setEmptyFields(true);
      return false;
    }
    if (!businessName) {
      setEmptyFields(true);
      return false;
    }
    if (!phone) {
      setEmptyFields(true);
      return false;
    }
    if (!email) {
      setEmptyFields(true);
      return false;
    }
    if (!businessLocation) {
      setEmptyFields(true);
      return false;
    }
    if (selectedBusinessSize?.length <= 0) {
      setEmptyFields(true);
      return false;
    }

    setEmptyFields(false);
  };

  const addCheckboxItems = (value) => {
    let alreadyAdded = selectedBusinessSize.find((items) => items === value);
    if (alreadyAdded) {
      setSelectedBusinessSize((allItems) =>
        allItems.filter((oldItem) => oldItem !== value)
      );
    } else {
      setSelectedBusinessSize((allItems) => [...allItems, value]);
    }

    // Swal.fire({
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  window.addEventListener("click", (e) => {
    // let currentClass = e?.target?.classList[0]

    const dropDown = document.querySelector(".customChechBoxSelect");

    if (dropDown) {
      if (!e.composedPath().includes(dropDown)) {
        toggleDropDown(false);
      }
    }
  });

  const toggleDropDown = (val) => {
    setTimeout(() => {
      val === false ? setShowDropDown(val) : setShowDropDown(!showDropDown);
    }, 300);
  };

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(
      setPageLoading({
        status: true,
        message: "please wait...",
      })
    );

    let payload = {
      name: fullName,
      email,
      phoneNumber: phoneCode + phone,
      businessName: businessName,
      businessAddress: businessLocation,
      preferedService: formateLists(selectedBusinessSize),
    };

    console.log(JSON.stringify(payload));

    fetch(`${process.env.REACT_APP_BASEURL}/subscribe`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((response) => {
        dispatch(
          setPageLoading({
            status: false,
            message: "",
          })
        );

        if (response?.error !== true) {
          Swal.fire({
            icon: "success",
            title: "Form submitted",
          });

          clearFields();
        } else {
          Swal.fire({
            icon: "error",
            title: response?.errors[0] || "Something went wrong",
          });
        }

        console.log(response);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });

        console.log(error);

        dispatch(
          setPageLoading({
            status: false,
            message: "",
          })
        );
      });
  };
  return (
    <div className="HomeFour" id="ItekkuForBusiness">
      <div className="HomeFourLeft">
        {/* <img src={require("../../assets/img/africanman.png")} alt="itekku" /> */}
      </div>
      <div className="HomeFourRight">
        <div className="row">
          <div className="col-md-7">
            <h4>We Would Love to Know you more </h4>
          </div>
          <div className="col-md-5">
            <p>
              Please take a minute to fill the form below so that we can tailor
              our service to your business needs
            </p>
          </div>
        </div>
        {/* <h5>
          We Would <span className="grayColor">Love </span> to Know you more
        </h5>
        <p>
          Please take a minute to fill the form below so that we can tailor our
          service to your business needs
        </p> */}

        <form className="itekku_form" onSubmit={submitForm}>
          <div className="form_grid">
            <div className="form-group">
              <label htmlFor="">Your Full Name:</label>
              <input
                type="text"
                value={fullName}
                required
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g Praise Wiliams "
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Your Business Name:</label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g Cre8tivnerd Limited "
              />
            </div>
          </div>
          <div className="form_grid">
            <div className="form-group">
              <label htmlFor="">Phone No:</label>
              <div className="form-phone form_phone_large">
                {/* <div></div> */}
                <div className="form-phone-input">
                  <div className="form-phone-input-code">{phoneCode}</div>
                  <input
                    type="text"
                    value={phone}
                    required
                    onChange={(e) =>
                      setPhone(
                        e.target.value ? parseInt(e.target.value, 10) : ""
                      )
                    }
                    placeholder="e.g 8025777224 "
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tyewilliams213@gmail.com"
              />
            </div>
          </div>
          <div className="form_grid">
            <div className="form-group">
              <label htmlFor="">Business Location:</label>
              <select
                value={businessLocation}
                onChange={(e) => setBusinessLocation(e.target.value)}
              >
                {allStates &&
                  allStates?.map((item, i) => (
                    <option key={i} value={item?.name}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group" style={{ position: "relative" }}>
              <label htmlFor="">What Service would you like :</label>

              <div
                onClick={() => toggleDropDown(true)}
                className="form-phone-input"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{formateLists(selectedBusinessSize)}</span>{" "}
                <i className="fa fa-chevron-down"></i>
              </div>
              {/* <select
                value={businessSize}
                onChange={(e) => setBusinessSize(e.target.value)}
              >
                <option value="1-10">1-10</option>
                <option value="1-10">1-10</option>
                <option value="1-10">1-10</option>
                <option value="1-10">1-10</option>
              </select> */}

              {showDropDown ? (
                <div className="customChechBoxSelect">
                  <div className="customChechBoxSelectItems">
                    {servicesType &&
                      servicesType?.map((item, i) => (
                        <div className="custom-control custom-checkbox" key={i}>
                          <input
                            type="checkbox"
                            checked={selectedBusinessSize.includes(item.name)}
                            onChange={() => addCheckboxItems(item?.name)}
                            className="custom-control-input"
                            id={`customCheck1${item?.id}`}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`customCheck1${item?.id}`}
                          >
                            {item?.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <div
              className="form-group"
              style={{ marginTop: 80, marginBottom: 60 }}
            >
              <button
                disabled={emptyFields}
                style={{
                  paddingLeft: 60,
                  paddingRight: 60,
                  width: 300,
                }}
                className="fasta_outline_button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeFour;
