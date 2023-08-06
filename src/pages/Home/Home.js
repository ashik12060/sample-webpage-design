import React from "react";
import "./Home.css";
import bg_img from "../../media/vignette-blue-fabric-textured-background-min.jpg";
import banner_img from "../../media/stacks-jeans-clothing-wood-min.jpg";
import denim_logo from "../../media/denim.png";
import denim_cover from "../../media/blue-woven-fabric-background-min.jpg";
import img1 from "../../media/blue-jeans-fabric-details.png";
import jeans from "../../media/jeans-removebg-preview.png";
import denim_bg from "../../media/close-op-shot-collar-classy-ironed-blue-denim-male-shirt.jpg";


import pocket from "../../media/pocket.jpg";
import Carousel from "../Carousel/Carousel";
import Form from "../Form/Form";
import footerImg from "../../media/denim-clothing-fashion-stack-folded-jeans-generative-ai.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSquareFacebook, faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div>
      <section>
        <div className="container1">
          <img className="bg-container" src={bg_img} alt="bg image" />

          <div className="positioning">
            <div className="info">
              <div className="head">
                <div>
                  <img
                    className="denim-logo"
                    src={denim_logo}
                    alt="denim logo"
                  />
                </div>
                <div>
                  <h2>
                    Jeans <span className="denim-color">pants</span>
                  </h2>
                </div>
              </div>
              <h4 className="denim-info">
                <span className="denim-text">
                  পুরুষ এবং মহিলাদের জন্য ডেনিম জিন্স
                </span>
              </h4>
              <h1>স্টাইলিশ ন্যারো ফিটিং সেমি স্টিচড ডেনিম জিন্স প্যান্ট</h1>
              <p className="pricing">সর্বমোট মূল্য ঃ</p>
              <span>
                <del>৳750.00</del>
              </span>{" "}
              <span className="money-rate">৳ 550.00</span> <br></br>
              <button className="btn-style">অর্ডার করুন</button>
              <h3>
                ঢাকার বাহিরে থেকে অর্ডার করতে চাইলে ১৫০ টাকা অগ্রিম ডেলিভারি
                পরিশোধ করুন
              </h3>
            </div>
            <div className="img-container">
              <img className="banner-img" src={banner_img} alt="photo" />
              <div className="contact-position">
                <h1>
                  <span className="number-container">01894844452</span>
                </h1>
                <h4>
                  <span className="contact-option">সরাসরি কিনতে ফোন করুন</span>{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <p className="text-container">
            আমাদের এই ডেনিম ফেব্রিক ১০০% কটন টুইল বা ইস্তেচ টুইল দিয়ে তৈরি ইয়উ।
            এই ফেব্রিক দিয়ে তৈরি ইয়উ শার্ট, জিন্স, ব্যাগ, জ্যাকেটসহ আরও অনেক
            কিছু। নিয়মিত ব্যাবহারের জন্য জিন্স পেন্টের কোনো তুলনা হয় না। জিন্স
            তৈরিতে ব্যবহার হয় ডেনিম কটন যা সম্পূর্ণ সুতি। ছেলেদের জিন্স
            প্যান্টের দাম ও ডিজাইন দেখে কিনুন বাংলাদেশের অন্যতম সেরা অনলাইন শপ
            অফুরন্ত থেকে।
          </p>

          <div className="products">
            <h1>
              আমাদের ডেনিম জিন্স প্যান্ট
              <br /> প্রোডাক্টের বিবরন
            </h1>

            <div className="product-container">
              <div>
                <li>Men's Denim Pant</li>
                <li>Size-30/32/34/36</li>
                <li>Spandax-2%</li>
                <li>Fabrics-Denim</li>
              </div>

              <div>
                <li>Style-Narrow Slim Fit</li>
                <li>Very Comfortable to Wear</li>
                <li>Nice Stylish Narrow Slim Fit.</li>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container1">
          <img className="bg-container" src={denim_cover} alt="denim" />
          <div>
            <img className="new-img" src={img1} alt="new-img" />
          </div>
          <div className="pant-size">
            <h2>ডেনিম ফেব্রিক জিন্স সাইজ</h2>
            <span className="exact-size">৩০</span>
            <span className="exact-size">৩২</span>
            <span className="exact-size">৩৪</span>
            <span className="exact-size">৩৬</span>
          </div>
          <div className=" order-class">
            <h2 className="order-mist">
              সবচেয়ে কম দামে আমাদের <br />
              থেকে কিনুন
            </h2>
            <button className="btn-order">অর্ডার করুন</button>
          </div>
        </div>
      </section>

      <section className="bg-styles">
        <div className="continer-main">
          <div className="jeans-container">
            <div>
              <img className="jeans-img" src={jeans} alt="jeans" />
            </div>
            <div className>
              <p className="back-img">
                মেনস ডেনিম জিন্স পেন্ট
                <br /> ব্লু কালেকশান
              </p>
            </div>
          </div>
          <div className="jeans-container">
            <div>
              <img className="jeans-img" src={jeans} alt="jeans" />
            </div>
            <div className>
              <p className="back-img">
                স্লিম ফিট স্ত্রেচেবল ডেনিম
                <br /> জিন্স ফর মেন
              </p>
            </div>
          </div>
          <div className="jeans-container">
            <div>
              <img className="jeans-img" src={jeans} alt="jeans" />
            </div>
            <div className>
              <p className="back-img">
                সেমি ন্যারো ক্লাসিক ফিট
                <br /> ডেনিম জিন্স
              </p>
            </div>
          </div>
          <div className="jeans-container">
            <div>
              <img className="jeans-img" src={jeans} alt="jeans" />
            </div>
            <div className>
              <p className="back-img">
                সেমি ন্যারো ক্লাসিক ফিট
                <br /> ডেনিম জিন্স
              </p>
            </div>
          </div>
        </div>
        <hr className="horizontal-line" />

        <div>
          <h1 className="prominent">আমাদের ডেনিম ও জিন্সের কিছু বিশিষ্ট</h1>
          <div className="prominent-container">
            <div>
              <li>ডেনিম ফেব্রিক ১০০% কটন টুইল দিয়ে তৈরি হয়।</li>
              <li>ডেনিম ফেব্রিক দিয়ে তৈরি পোশাক অনেকদিন ব্যবহার করা যায়।</li>
              <li>দীর্ঘদিন ব্যবহার করা যায়।</li>
            </div>

            <div className="prominent-text">
              <li>সহজে ভাঁজ পড়ে না। ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।</li>
              <li>জিন্স বারবার ধোয়ার প্রয়োজন হয় না।</li>
            </div>
          </div>
        </div>

        <div className="denim-resizing">
          <img className="denim-img-resize" src={denim_bg} alt="denim"/>
          <div className="video-button">
            <button className="play-button"><a target="_blank" href="https://www.youtube.com/watch?v=ixRanV-rdAQ"><FontAwesomeIcon className="btn-font" icon={faPlay} /></a></button>
          </div>
        </div>

        <div className="trasaction-container">
          <h1>লেনদেনকালে কিভাবে নিরাপদ থাকবেন তার কিছু নির্দেশনাবলী</h1>
          <h5 className="transaction-text1">
            প্রোডাক্ট ভালোভাবে যাচাই করে নিন এবং পরোপুরি সন্তুষ্ট হলে তারপর দাম
            পরিশোধ করুন।
          </h5>
          <h5 className="transaction-text2">
            প্রোডাক্ট ও অর্থ দুটোই একই সময় লেন্দেন করুন
          </h5>
        </div>

        <div className="pocket-container">
          <img className="pocket-img" src={pocket} alt="pocket" />

          <div className="pocket-delivery">
            <h1>মূল্য - 550.00 টাকা</h1>
            <h3>সারা দেশে ফ্রি হোম ডেলিভারি</h3>
            <button>অর্ডার করুন</button>
          </div>
        </div>
      </section>

      <Carousel/>
    
      <Form />

      <section>
        <div className="footer-container">
          <img className="footerImg" src={footerImg} alt="img" />
          
          <div className="extra-container">
            <div>
              <h3>প্রয়োজনীয় লিংক</h3>
              <hr className="horizontal"/>
              <p>প্রাইভেসি পলিসি</p>
              <p>শর্তাবলি</p>
            </div>
            <div>
              <img className="denim-logo" src={denim_logo} alt="imgLogo" />
              <h1>
                Jeans <span className="jeans-color">Pants</span>
              </h1>
            </div>
            <div>
              <h3 className="jeans-color">অর্ডার পেতে কল করুন এই নাম্বারে</h3>
              <h1>+8801799733234</h1>
            </div>
          </div>


          <div className="icon-container">
            <button className="icons"><a href="#"><FontAwesomeIcon className="icon-style" icon={faSquareFacebook} style={{color: "#1877f2",}} /></a></button>
            <button className="icons"><a href="#"><FontAwesomeIcon className="icon-style" icon={faSquareInstagram} style={{color: "#e1306c",}} /></a></button>
            <button className="icons"><a href="#"><FontAwesomeIcon className="icon-style" icon={faYoutube} style={{color: "#cd201f",}} /></a></button>
          </div>

          <div className="footer">
            <p className="footer-host">System Developed by <span className="jeans-color"><u>Funnel Liner</u></span></p>
          </div>




          </div>
        
      </section>


    </div>
  );
};

export default Home;
