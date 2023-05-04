import { React, useRef, useState, useEffect } from "react";
import { useOnScreen } from "../util/useOnScreen";
import wooridoctorsmatPhone from "../assets/iphone.jpg";
import {
  useMoveOnScreenLeftToCenter,
  useMoveOnScreenBottomToCenter,
} from "../util/moveOnScreen";
export const Wooridoctor = () => {
  const image1 = useRef(null);
  useMoveOnScreenLeftToCenter(image1);
  useOnScreen(image1);
  const text1 = useRef(null);
  useMoveOnScreenBottomToCenter(text1);
  useOnScreen(text1);
  return (
    <section style={{ height: "100vh" }} id="wooridoctor" class="page-section ">
      <div class="row ">
        <div
          class="col-md-6 col-sm-12"
          style={{
            height: "auto",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div className="left-image" ref={image1}>
            <img
              src={wooridoctorsmatPhone}
              style={{ objectFit: "contain", height: `100%`, width: "100%" }}
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-box center-text" ref={text1}>
          <div
            class="col-md-3 col-sm-12 "
            style={{
              display: "block",
              maxWidth: "330px",
              width: "auto",
            }}
          >
            <h1 style={{ fontSize: "2.5rem" }}> WOORI-DOCTOR</h1>
          </div>
          <div
            class="col-md-3 col-sm-12"
            style={{
              display: "block",

              maxWidth: "450px",
              width: "auto",
              padding: "30px 0 0 1vw",
              color: "lightgray",
            }}
          >
            <h6 style={{ fontWeight: "400" }}>
              {" "}
              With a display that is now always on, Apple Watch Series 5 is
              there for you like never before. Faces and complications let you
              see the information that matters most to you without raising your
              wrist. Cases are available in a range of materials engineered by
              Apple, including 100% recycled aluminum1 and, for the first time,
              titanium.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};
