import { React, useRef, useState, useEffect } from "react";
import { useOnScreen } from "../util/useOnScreen";

export const Services = () => {
  const title = useRef(null);
  const content = useRef(null);
  useOnScreen(title);
  useOnScreen(content);

  // const image2 = useRef(null);
  // useMoveOnScreenLeftToCenter(image2);
  // useOnScreen(image2);
  // const text2 = useRef(null);
  // useMoveOnScreenBottomToCenter(text2);
  // useOnScreen(text2);
  return (
    <section class="page-section" id="services">
      <div class="container ">
        <div
          className="show-div"
          ref={title}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p class="text-start mt-0 title-text">PRODUCT & SERVICES</p>
        </div>

        <div
          ref={content}
          class="row  show-div service-box"
          style={{ justifyContent: "center" }}
        >
          {/* <div class="col-lg-3 col-md-6 text-center product-box">
            <div class="mt-5">
              <div class="mb-2">
                <i class="bi-gem fs-1 text-primary"></i>
              </div>
              <h1 class="h4 mb-2" style={{ fontWeight: "bold" }}>
                군강
              </h1>
              <p class="text-muted mb-0">군강으로 시작하는 그룹 건강 관리</p>
            </div>
          </div> */}
          <a
            class="col-md-6  col-sm-12 text-center product-box"
            href="#wooridoctor"
            style={{
              marginLeft: "0",
              marginRight: "0",
              backgroundColor: "white",
            }}
          >
            <div class="mt-5">
              <div class="mb-2">
                <i class="bi-laptop fs-1 text-primary"></i>
              </div>
              <h3
                class="h4 mb-2"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  textAlign: "end",
                }}
              >
                우리닥터
              </h3>
              <p
                style={{
                  color: "black",
                  textAlign: "start",
                }}
              >
                우리닥터로 그리는 우리의 건강한 라이프
              </p>
            </div>
          </a>
          <a
            class="col-md-6 col-sm-12 text-center product-box"
            style={{
              justifyContent: "start",
              backgroundColor: "black",
              marginLeft: "0",
              marginRight: "0",
            }}
            href="#AI"
          >
            <div class="mt-5">
              <div class="mb-2">
                <i class="bi-globe fs-1 text-primary"></i>
              </div>
              <h3
                class="h4 mb-2"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "start",
                }}
              >
                AI 자가진단
              </h3>
              <p
                style={{
                  color: "white",
                  textAlign: "start",
                }}
              >
                AI 자가진단과 함께하는 똑똑한 생활
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
