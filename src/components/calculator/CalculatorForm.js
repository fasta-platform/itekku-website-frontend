import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartIcons from "../extra/CartIcons";
import SelectModals from "../modals/SelectModals";

const CalculatorForm = () => {
  const navigate = useNavigate();

  const [alertStatus, setAlertStatus] = useState(false);
  const [visibilityStatus, setVisiblityStatus] = useState(false);
  const [selectItemData, setSelectItemData] = useState([]);
  const [selectItemType, setSelectItemType] = useState("");
  const [selectedItem, setselectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [itemType, setItemType] = useState(null);
  const [vehicleType, setVehicleType] = useState(null);

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

  const goToHome = () => {
    navigate("/");
  };

  const addToCart = () => {
    setAlertStatus(true);

    setTimeout(() => {
      setAlertStatus(false);
    }, 4000);
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

  return (
    <>
      <SelectModals
        status={visibilityStatus}
        data={selectItemData}
        setVisiblityStatus={setVisiblityStatus}
        handleSelected={handleSelected}
        selectedItem={selectedItem}
      />
      <div className="calculatorForm">
        <div className=" " id="formHeader">
          <div className="calculatorFormHeader ">
            <div
              style={{ display: "flex", alignItems: "center", columnGap: 30 }}
            >
              <span
                className="fa fa-chevron-left "
                id="arrowLeftt"
                onClick={() => goToHome()}
              ></span>
              <h6>Order Info:</h6>
            </div>

            <CartIcons alertStatus={alertStatus} />
          </div>
        </div>

        <div className="calculatorFormScroll">
          <form className="itekku_form" style={{ width: "100%", marginTop: 0 }}>
            <div className="form_grid">
              <div className="form-group">
                <label htmlFor="">Pickup Point:</label>
                <input type="text" placeholder="Ajah Under Bridge" />
              </div>
              <div className="form-group">
                <label htmlFor="">Sender’s Name:</label>
                <input type="text" placeholder="John Doe" />
              </div>
            </div>
            <div className="form_grid">
              <div className="form-group">
                <label htmlFor="">Sender's Whatsapp Number :</label>
                <div className="form-phone">
                  <select>
                    <option value="NG">NG</option>
                    <option value="GH">GH</option>
                    <option value="US">US</option>
                    <option value="TZ">TZ</option>
                  </select>
                  <div className="form-phone-input">
                    <div className="form-phone-input-code">+234</div>
                    <input type="text" placeholder="8025777224" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Delivery Point 1:</label>
                <input type="text" placeholder="Ikeja Computer village" />
              </div>
            </div>
            <div className="form_grid">
              <div className="form-group">
                <label htmlFor="">Receivers Name :</label>
                <input type="text" placeholder="Mike vic" />
              </div>
              <div className="form-group">
                <label htmlFor="">Receivers Number :</label>
                <div className="form-phone">
                  <select>
                    <option value="NG">NG</option>
                    <option value="GH">GH</option>
                    <option value="US">US</option>
                    <option value="TZ">TZ</option>
                  </select>
                  <div className="form-phone-input">
                    <div className="form-phone-input-code">+234</div>
                    <input type="text" placeholder="8025777224" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form_grid">
              <div className="form-group">
                <label htmlFor="">Item Name:</label>
                <input type="text" placeholder="Laptop" />
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
            <div className="form_grid">
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
              <div className="form-group"></div>
            </div>

            <div>
              <div className="itekku_form_flex">
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
                    <span>Add to cart </span>
                    <span className="fa fa-shopping-cart"></span>
                  </span>
                </button>
                <button
                  type="button"
                  style={{
                    paddingLeft: 60,
                    paddingRight: 60,
                    width: 300,
                  }}
                  className="fasta_button"
                >
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;
