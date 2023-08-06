import React from "react";
import "./Form.css";
import img1 from "../../media/8824383-removebg-preview.png";
const Form = () => {
  return (
    <div className="bg-color">
      <div>
        <h1 className="order-format">
          অর্ডার করতে নিচের ফরমটি পুরন করে সাবমিট করুন !
        </h1>
        <div className="display-container">
          <div>
            <h4 className="bill-style">Billing Details</h4>
            <form>
              <input
                className="input-style"
                type="text"
                id="fname"
                name="fname"
                placeholder="আপনার নাম লিখুন"
              />
              <br />
              <input
                className="input-style"
                type="number"
                id="fname"
                name="fname"
                placeholder="আপনার মোবাইল নাম্বার লিখুন"
              />
              <br />
              <input
                className="input-style"
                type="text"
                id="fname"
                name="fname"
                placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
              />
            </form>

            <div className="pay-ment">
              <h5>Payment</h5>
              <p>ক্যাশ অন ডেলিভারি</p>
              <p className="payment-text">Pay with cash upor delivery</p>
            </div>
          </div>

          <div className="size-container">
            <h6 className="orders">Your Order</h6>
            <div className="order-container">
              <h6 className="pay">Product</h6>
              <h6 className="pay">Subtotal</h6>
            </div>
            <div className="order-container2">
              <img className="brek-img" src={img1} alt="img" />
              <h6 className="order-text2">
                Power of Story <br /> Men's Perfume Set Boss
              </h6>
              <h6>৳1690.00</h6>
            </div>
            <div className="">
              <div className="order-container3">
                <h6>Product</h6>
                <h6>৳1690.00</h6>
              </div>
              <div>
                <div className="order-container4">
                  <h6>Shipping</h6>
                  <div>
                    <h6>ঢাকার মধ্যে</h6>
                    <h6>ঢাকার বাহিরে</h6>
                  </div>
                </div>
              </div>
              <div className="order-container2">
                <h6>Total:</h6>
                <h6>৳1690.00</h6>
              </div>
            </div>
            <button className="order-btn-style">অর্ডার করুন</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
