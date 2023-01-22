import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { countries } from "../../appData/countries";
import {
  setCurrentStep,
  setPageLoading,
} from "../../store/authSlice/authSlice";
import SelectModals from "../modals/SelectModals";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorSteppers from "./CalculatorSteppers";
import Directions from "./Directions";
import PaymentSummary from "./PaymentSummary";
import { getTimes } from "../../helpers/customFunctions";
import Autocomplete from "react-google-autocomplete";
import Alert from "../alert/Alert";
import Swal from "sweetalert2";

const CalculatorForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.oauth.currentStep);

  const [alertStatus, setAlertStatus] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [visibilityStatus, setVisiblityStatus] = useState(false);
  const [selectItemData, setSelectItemData] = useState([]);
  const [selectItemType, setSelectItemType] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState(undefined);
  const [senderName, setSenderName] = useState("");
  const [senderCountryPhoneCode] = useState("+234");
  const [senderPhone, setSenderPhone] = useState("");
  const [pickUpTime, setPickUpTime] = useState(undefined);
  const [priority, setPriority] = useState(false);
  const [deliveryPoint, setDeliveryPoint] = useState(undefined);
  const [receiverName, setReceiverName] = useState("");
  const [receiverCountryPhoneCode] = useState("+234");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [itemDesc, setItemDesc] = useState("");

  const [emptyFields, setEmptyFields] = useState(true);
  const [completedStep1, setCompletedStep1] = useState(false);
  const [completedStep2, setCompletedStep2] = useState(false);
  const [selectedItem, setselectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [itemType, setItemType] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);
  const [allDeliveryDetails, setAllDeliveryDetails] = useState([]);

  const [allTimes] = useState(getTimes());

  const allCountries = countries();

  const APIKEY = "AIzaSyA-lqYHLBnNE3-I2CaCjgTgQE0BqEzSEWM";

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
      title: "motorcycle",
      img: require("../../assets/img/vector/bike.png"),
    },
    {
      id: 2,
      title: "car",
      img: require("../../assets/img/vector/car.png"),
    },
    {
      id: 3,
      title: "van",
      img: require("../../assets/img/vector/van.png"),
    },
    {
      id: 4,
      title: "truck",
      img: require("../../assets/img/vector/truck.png"),
    },
  ];

  useEffect(() => {
    if (allTimes && allTimes?.length) {
      setPickUpTime(allTimes[0]);
    }

    validateForm();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pickUpPoint,
    pickUpTime,
    senderName,
    senderPhone,
    vehicleType,
    priority,
    deliveryPoint,
    receiverName,
    receiverPhone,
    itemType,
    itemDesc,
    quantity,
    currentStep,
    completedStep1,
    completedStep2,
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

      if (!senderPhone) {
        setEmptyFields(true);
        return false;
      }
      if (!vehicleType) {
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
    dispatch(
      setPageLoading({
        status: true,
        message: "adding, Please wait...",
      })
    );

    setTimeout(() => {
      dispatch(
        setPageLoading({
          status: false,
          message: "",
        })
      );

      let oldData = allDeliveryDetails;

      let newData = [
        ...oldData,
        {
          deliveryPoint,
          receiverName,
          receiverCountryPhoneCode,
          receiverPhone,
          itemDesc,
          itemType,
          quantity,
        },
      ];

      setAllDeliveryDetails(newData);

      setAlertStatus(true);
      setAlertMessage("Your Item has been added");

      setDeliveryPoint(undefined);
      setReceiverName("");
      setItemDesc("");
      setReceiverPhone("");
      setQuantity(1);
      setItemType(null);
    }, 1400);
  };

  const cancelAdd = () => {
    let oldDatas = allDeliveryDetails;
    let lastAddedElement = oldDatas[oldDatas?.length - 1];

    setDeliveryPoint(lastAddedElement?.deliveryPoint);
    setReceiverName(lastAddedElement?.receiverName);
    setItemDesc(lastAddedElement?.itemDesc);
    setReceiverPhone(lastAddedElement?.receiverPhone);
    setQuantity(lastAddedElement?.quantity);
    setItemType(lastAddedElement?.itemType);

    // console.log(lastAddedElement);
    oldDatas.pop();
    setAllDeliveryDetails(oldDatas);
  };

  const gotoNext = () => {
    dispatch(
      setPageLoading({
        status: true,
        message: "please wait...",
      })
    );

    setTimeout(() => {
      if (currentStep === 1) {
        dispatch(
          setPageLoading({
            status: false,
            message: "",
          })
        );
        dispatch(setCurrentStep(2));

        return;
      }
      if (currentStep === 2) {
        console.log("here 2");
        getSummary();

        return;
      }

      scrollToTopView();
    }, 1000);
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

  const scrollToTopView = () => {
    setTimeout(() => {
      document.querySelector(".calculator").scrollTo(0, 0);
    }, 50);
  };

  const getSummary = () => {
    let oldData = allDeliveryDetails;

    let newData = [
      ...oldData,
      {
        deliveryPoint,
        receiverName,
        receiverCountryPhoneCode,
        receiverPhone,
        itemDesc,
        itemType,
        quantity,
      },
    ];

    setAllDeliveryDetails(newData);

    // dispatch(
    //   setPageLoading({
    //     status: true,
    //     message: "please wait...",
    //   })
    // );

    let payload = {
      pickupLocation: {
        lat: pickUpPoint?.geometry.location.lat(),
        lng: pickUpPoint?.geometry.location.lng(),
        address: pickUpPoint?.formatted_address,
      },
      senderName: senderName,
      senderPhoneNumber: senderCountryPhoneCode + senderPhone,
      vehicleType: vehicleType?.title,
      priority: priority,
      destinations: allDeliveryDetails?.map((item) => {
        return {
          receiverName: item?.receiverName,
          receiverPhoneNumber:
            item?.receiverCountryPhoneCode + item?.receiverPhone,
          dropoffLocation: {
            lat: item?.deliveryPoint?.geometry.location.lat(),
            lng: item?.deliveryPoint?.geometry.location.lng(),
            address: item?.deliveryPoint?.formatted_address,
          },
          itemDescription: item?.itemDesc,
          itemWeight: 516,
          itemQuantity: item?.quantity,
          itemType: item?.itemType?.title,
        };
      }),
    };

    console.log(JSON.stringify(payload));

    fetch(`${process.env.REACT_APP_BASEURL}/delivery/summarize`, {
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
        console.log(response);

        if (response?.error !== true) {
          Swal.fire({
            icon: "success",
            title: "Form submitted",
          });

          dispatch(setCurrentStep(3));
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
    <div
      className={`calculator_wrapper ${
        currentStep === 3 ? "wrapper_large" : null
      }`}
    >
      <Alert
        status={alertStatus}
        closeStatus={setAlertStatus}
        message={alertMessage}
        icon="fa fa-shopping-cart"
      />
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
          <form
            className="itekku_form"
            style={{ width: "100%", marginTop: 0, position: "relative" }}
          >
            {currentStep !== 3 ? (
              <CalculatorSteppers
                currentStep={currentStep}
                completedStep1={completedStep1}
                completedStep2={completedStep2}
                scrollToTopView={scrollToTopView}
              />
            ) : null}

            {/* <div className="removeItemCart" style={{ top: 90 }}>
              <span style={{ display: "flex", alignItems: "center" }}>
                <i class="bx bx-x"></i>
                Cancel
              </span>
            </div> */}

            {/* <div>
              <span style={{ display: "flex", alignItems: "center" }}>
                <i class="bx bx-x"></i>
                Cancel
              </span>
            </div> */}

            {currentStep === 1 ? (
              <>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Pickup Point:</label>
                    {/* <input
                      type="text"
                      value={pickUpPoint}
                      onChange={(e) => setPickUpPoint(e.target.value)}
                      placeholder="Ajah Under Bridge"
                    /> */}
                    <Autocomplete
                      apiKey={APIKEY}
                      onPlaceSelected={(place) => {
                        setPickUpPoint(place);
                        console.log(place);
                      }}
                      componentRestrictions={{ country: "ng" }}
                      options={{
                        types: ["geocode", "establishment"],
                      }}
                      defaultValue={pickUpPoint?.formatted_address || ""}
                    />

                    {/* <GoogleComponent
                      apiKey={"AIzaSyDPYzUFewPkFJ8gtgFLhYwzjubyCuOrqtk"}
                      language={"en"}
                      country={"country:ng"}
                      coordinates={true}
                      locationBoxStyle={"custom-style"}
                      locationListStyle={"custom-style-list"}
                      onChange={(e) => {
                        setLocations(e);
                      }}
                    /> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Sender’s Name:</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Sender’s Name"
                    />
                  </div>
                </div>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Sender's Whatsapp Number :</label>
                    <div className="form-phone form_phone_large">
                      {/* <select
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
                      </select> */}
                      <div className="form-phone-input">
                        <div className="form-phone-input-code">
                          {senderCountryPhoneCode}
                        </div>
                        <input
                          type="text"
                          value={senderPhone}
                          onChange={(e) =>
                            setSenderPhone(
                              e.target.value ? parseInt(e.target.value, 10) : ""
                            )
                          }
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
                        {vehicleType?.title || "Select vehicle type"}{" "}
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
                        <select onChange={(e) => setPickUpTime(e.target.value)}>
                          {allTimes &&
                            allTimes?.map((time, i) => (
                              <option key={i} value={time}>
                                {time}
                              </option>
                            ))}
                        </select>
                        {/* <span>Now</span>
                        <i className="fa fa-chevron-down"></i> */}
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
                            onChange={() => setPriority(!priority)}
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
                    <label htmlFor="">
                      Delivery Point {allDeliveryDetails?.length + 1}:
                    </label>
                    {/* <input
                      type="text"
                      value={deliveryPoint}
                      onChange={(e) => setDeliveryPoint(e.target.value)}
                      placeholder="Ikeja Computer village"
                    /> */}

                    <Autocomplete
                      apiKey={APIKEY}
                      onPlaceSelected={(place) => {
                        setDeliveryPoint(place);
                      }}
                      componentRestrictions={{ country: "ng" }}
                      options={{
                        types: ["geocode", "establishment"],
                      }}
                      defaultValue={deliveryPoint?.formatted_address || ""}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="">Receiver's Name :</label>
                    <input
                      type="text"
                      value={receiverName}
                      onChange={(e) => setReceiverName(e.target.value)}
                      placeholder="Receivers Name"
                    />
                  </div>
                </div>
                <div className="form_grid">
                  <div className="form-group">
                    <label htmlFor="">Receiver's Number :</label>
                    <div className="form-phone form_phone_large">
                      <div className="form-phone-input">
                        <div className="form-phone-input-code">
                          {receiverCountryPhoneCode}
                        </div>
                        <input
                          type="text"
                          value={receiverPhone}
                          onChange={(e) =>
                            setReceiverPhone(
                              e.target.value ? parseInt(e.target.value, 10) : ""
                            )
                          }
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
                        {itemType?.title || "Select Item type"}
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
                  <div>
                    {allDeliveryDetails?.length ? (
                      <button
                        type="button"
                        style={{
                          paddingLeft: 60,
                          paddingRight: 60,
                          width: 300,
                          marginBottom: 10,
                        }}
                        onClick={() => cancelAdd()}
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
                          {/* <i class="bx bx-x"></i> */}
                          <span>Cancel </span>
                        </span>
                      </button>
                    ) : null}

                    <button
                      type="button"
                      disabled={emptyFields}
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
