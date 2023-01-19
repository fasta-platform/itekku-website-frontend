import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { countries } from "../../appData/countries";
import { setCurrentStep } from "../../store/authSlice/authSlice";
import SelectModals from "../modals/SelectModals";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorSteppers from "./CalculatorSteppers";
import Directions from "./Directions";
import PaymentSummary from "./PaymentSummary";

const CalculatorForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.oauth.currentStep);

  // const [alertStatus, setAlertStatus] = useState(false);
  const [visibilityStatus, setVisiblityStatus] = useState(false);
  const [selectItemData, setSelectItemData] = useState([]);
  const [selectItemType, setSelectItemType] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState(undefined);
  const [senderName, setSenderName] = useState("");
  const [senderCountryPhoneCode, setSenderCountryPhoneCode] = useState("+234");
  const [senderPhone, setSenderPhone] = useState("");
  const [pickUpTime, setPickUpTime] = useState(undefined);
  const [priority, setPriority] = useState(false);
  const [deliveryPoint, setDeliveryPoint] = useState(undefined);
  const [receiverName, setReceiverName] = useState("");
  const [receiverCountryPhoneCode, setReceiverCountryPhoneCode] =
    useState("+234");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [itemDesc, setItemDesc] = useState("");

  const [emptyFields, setEmptyFields] = useState(true);
  const [completedStep1, setCompletedStep1] = useState(false);
  const [completedStep2, setCompletedStep2] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [itemType, setItemType] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);

  const allCountries = countries();

  const itemTypeData = [
    {
      id: 1,
      title: "Food",
      img: require("../../assets/img/vector/fast-food.png"),
    },
    {
      id: 2,
      title: "Clothing",
      img: require("../../assets/img/vector/clothes-hanger.png"),
    },
    {
      id: 3,
      title: "Electronics",
      img: require("../../assets/img/vector/electronics.png"),
    },
    {
      id: 4,
      title: "Accessories & more",
      img: require("../../assets/img/vector/diamond-ring.png"),
    },
    {
      id: 5,
      title: "Gadget",
      img: require("../../assets/img/vector/desktop.png"),
    },
    {
      id: 6,
      title: "Documents",
      img: require("../../assets/img/vector/documents.png"),
    },
    {
      id: 7,
      title: "Others",
      img: null,
    },
  ];

  const vehicleTypeData = [
    {
      id: 1,
      title: "Bike",
      img: require("../../assets/img/vector/bike.png"),
    },
    {
      id: 2,
      title: "Car",
      img: require("../../assets/img/vector/car.png"),
    },
    {
      id: 3,
      title: "Mini Van",
      img: require("../../assets/img/vector/van.png"),
    },
    {
      id: 4,
      title: "Truck",
      img: require("../../assets/img/vector/truck.png"),
    },
  ];

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pickUpPoint,
    pickUpTime,
    senderName,
    senderCountryPhoneCode,
    senderPhone,
    vehicleType,
    priority,
    deliveryPoint,
    receiverName,
    receiverCountryPhoneCode,
    receiverPhone,
    itemType,
    itemDesc,
    quantity,
    currentStep,
  ]);

  const validateForm = () => {
    if (currentStep === 1) {
      setCompletedStep1(false);
      if (!pickUpPoint) {
        setEmptyFields(true);
        return false;
      }
      if (!senderName) {
        setEmptyFields(true);
        return false;
      }
      if (!senderCountryPhoneCode) {
        setEmptyFields(true);
        return false;
      }
      if (!senderPhone) {
        setEmptyFields(true);
        return false;
      }
      if (!vehicleType) {
        setEmptyFields(true);
        return false;
      }
      if (!priority) {
        setEmptyFields(true);
        return false;
      }

      // return;
    }

    setCompletedStep1(true);
    setEmptyFields(true);

    if (currentStep === 2) {
      setCompletedStep2(false);
      if (!deliveryPoint) {
        setEmptyFields(true);
        return false;
      }
      if (!receiverName) {
        setEmptyFields(true);
        return false;
      }
      if (!receiverCountryPhoneCode) {
        setEmptyFields(true);
        return false;
      }
      if (!receiverPhone) {
        setEmptyFields(true);
        return false;
      }
      if (!itemType) {
        setEmptyFields(true);
        return false;
      }
      if (!itemDesc) {
        setEmptyFields(true);
        return false;
      }
      if (!quantity) {
        setEmptyFields(true);
        return false;
      }

      // return;
    }

    setCompletedStep2(true);

    setEmptyFields(false);
  };

  const addToCart = () => {
    // setAlertStatus(true);
    // setTimeout(() => {
    //   setAlertStatus(false);
    // }, 4000);
  };

  const gotoNext = () => {
    if (completedStep1 === true) {
      dispatch(setCurrentStep(2));
      setTimeout(() => {
        setEmptyFields(true);
        validateForm();
      }, 500);

      return;
    }
    if (completedStep2 === true) {
      dispatch(setCurrentStep(3));
      setTimeout(() => {
        setEmptyFields(true);
        validateForm();
      }, 500);

      return;
    }
  };
  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    let newQty = quantity;

    newQty--;
    setQuantity(newQty);
  };

  const increaseQuantity = () => {
    let newQty = quantity;

    newQty++;
    setQuantity(newQty);
  };

  const handleSelected = (item) => {
    if (selectItemType === "ITEMTYPE") {
      setItemType(item);
    }
    if (selectItemType === "VEHICLETYPE") {
      setVehicleType(item);
    }

    setVisiblityStatus(false);
    setTimeout(() => {
      setselectedItem(item);
    }, 300);
  };

  const handleSelectItemType = () => {
    setSelectItemData(itemTypeData);
    setSelectItemType("ITEMTYPE");
    setVisiblityStatus(true);
    setselectedItem(itemType);
  };

  const handleSelectVehicleType = () => {
    setSelectItemData(vehicleTypeData);
    setSelectItemType("VEHICLETYPE");
    setVisiblityStatus(true);
    setselectedItem(vehicleType);
  };

  const goToPrevious = () => {
    if (currentStep === 1) {
      navigate(-1);

      return;
    }
    if (currentStep === 2) {
      dispatch(setCurrentStep(1));

      return;
    }

    if (currentStep === 3) {
      dispatch(setCurrentStep(2));

      return;
    }
  };

  return (
    <div
      className={`calculator_wrapper ${
        currentStep === 3 ? "wrapper_large" : null
      }`}
    >
      <SelectModals
        status={visibilityStatus}
        data={selectItemData}
        setVisiblityStatus={setVisiblityStatus}
        handleSelected={handleSelected}
        selectedItem={selectedItem}
      />
      <CalculatorHeader currentStep={currentStep} goToPrevious={goToPrevious} />
      <div className="calculatorForm">
        {/* <div className=" " id="formHeader">
          <div className="calculatorFormHeader ">
            <div
              style={{ display: "flex", alignItems: "center", columnGap: 30 }}
            >
              <span
                className="fa fa-chevron-left "
                id="arrowLeftt"
                onClick={() => goToHome()}
              ></span>
              <h6 className="calculatorTitle">Order Info:</h6>
            </div>

            <CartIcons alertStatus={alertStatus} />
          </div>
        </div> */}

        <div className="calculatorFormScroll">
          <form className="itekku_form" style={{ width: "100%", marginTop: 0 }}>
            {currentStep !== 3 ? (
              <CalculatorSteppers
                currentStep={currentStep}
                completedStep1={completedStep1}
                completedStep2={completedStep2}
              />
            ) : null}

            {currentStep === 1 ? (
              <>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Pickup Point:</label>
                    <input
                      type="text"
                      value={pickUpPoint}
                      onChange={(e) => setPickUpPoint(e.target.value)}
                      placeholder="Ajah Under Bridge"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Sender’s Name:</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Sender's Whatsapp Number :</label>
                    <div className="form-phone">
                      <select
                        onChange={(e) =>
                          setSenderCountryPhoneCode(e.target.value)
                        }
                        value={senderCountryPhoneCode}
                      >
                        {allCountries &&
                          allCountries?.map((item, i) => (
                            <option key={i} value={item?.dialCode}>
                              {item?.name}
                            </option>
                          ))}
                      </select>
                      <div className="form-phone-input">
                        <div className="form-phone-input-code">
                          {senderCountryPhoneCode}
                        </div>
                        <input
                          type="text"
                          value={senderPhone}
                          onChange={(e) => setSenderPhone(e.target.value)}
                          placeholder="8025777224"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Vehicle type:</label>
                    <div
                      className="form-phone-input "
                      onClick={() => handleSelectVehicleType()}
                    >
                      <div className="form-phone-input-code">
                        {vehicleType?.title || "Bike"}{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form_grid">
                  <div className="form-group">
                    <div className="form_pickup_time">
                      <div className="form_pickup_time_left">
                        <img
                          src={require("../../assets/img/vector/alarm.png")}
                          alt="itekku"
                        />
                        <span>Pickup time</span>
                      </div>
                      <div className="form_pickup_time_left">
                        <span>Now</span>
                        <i className="fa fa-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-group">
                      <div className="form_custom_switch">
                        <span>Is this a priority delivery ?</span>
                        <div className="custom-control custom-switch">
                          <input
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            type="checkbox"
                            className="custom-control-input"
                            id="customSwitch1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customSwitch1"
                          >
                            {/* Toggle this switch element */}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {currentStep === 2 ? (
              <>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Delivery Point 1:</label>
                    <input
                      type="text"
                      value={deliveryPoint}
                      onChange={(e) => setDeliveryPoint(e.target.value)}
                      placeholder="Ikeja Computer village"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Receivers Name :</label>
                    <input
                      type="text"
                      value={receiverName}
                      onChange={(e) => setReceiverName(e.target.value)}
                      placeholder="Mike vic"
                    />
                  </div>
                </div>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Receivers Number :</label>
                    <div className="form-phone">
                      <select
                        onChange={(e) =>
                          setReceiverCountryPhoneCode(e.target.value)
                        }
                      >
                        {allCountries &&
                          allCountries?.map((item, i) => (
                            <option key={i} value={item}>
                              {item?.name}
                            </option>
                          ))}
                      </select>
                      <div className="form-phone-input">
                        <div className="form-phone-input-code">
                          {receiverCountryPhoneCode?.dialCode}
                        </div>
                        <input
                          type="text"
                          value={receiverPhone}
                          onChange={(e) => setReceiverPhone(e.target.value)}
                          placeholder="8025777224"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Item type :</label>
                    <div
                      className="form-phone-input "
                      onClick={() => handleSelectItemType()}
                    >
                      <div className="form-phone-input-code">
                        {itemType?.title || "Computer"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Item Description :</label>
                    <input
                      type="text"
                      value={itemDesc}
                      onChange={(e) => setItemDesc(e.target.value)}
                      placeholder="Laptop"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Quantity:</label>
                    <div className="form-phone-input quantity_div">
                      <div className="form-phone-input-code">Optional</div>
                      <div className="quantity_input">
                        <i
                          className={`${
                            quantity === 1 ? "disabledd" : ""
                          } fa fa-minus`}
                          onClick={() => decreaseQuantity()}
                        ></i>
                        <span>{quantity}</span>
                        <i
                          className="fa fa-plus"
                          onClick={() => increaseQuantity()}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form_grid mt-4">
                  <button
                    type="button"
                    style={{
                      paddingLeft: 60,
                      paddingRight: 60,
                      width: 300,
                    }}
                    onClick={() => addToCart()}
                    className="fasta_outline_button borderDark"
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        columnGap: 10,
                      }}
                    >
                      <span>Add New Delivery </span>
                      <span className="fa fa-plus"></span>
                    </span>
                  </button>
                </div>
              </>
            ) : null}

            {currentStep === 3 ? (
              <div className="cartComp">
                <div className="cartCompLeft">
                  <Directions />
                </div>

                <div className="cartCompRight">
                  <PaymentSummary />
                </div>
              </div>
            ) : null}

            {currentStep !== 3 ? (
              <div>
                <div className="itekku_form_flex">
                  <button
                    onClick={() => gotoNext()}
                    disabled={emptyFields}
                    type="button"
                    style={{
                      paddingLeft: 60,
                      paddingRight: 60,
                      width: 300,
                    }}
                    className="fasta_button"
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
