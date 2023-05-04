import React from "react";
import mediarkLogo from "../assets/mediarkLogoFooter.svg";
export const Footer = () => {
  return (
    <footer id="footer" class="bg-light py-5">
      <div class="container-fluid p-0 footer-container">
        <img class="logo" src={mediarkLogo} />
        <div class="box">
          {" "}
          <div class="text">사업자 등록 번호 : 888-81-02538</div>
          <div class="vertical-divider"></div>
          <div class="text ">대표 : 이찬형</div>
          <div class="text footer-padding">이용약관</div>
          <div class="text footer-padding">개인정보 처리방침</div>
        </div>
        <div class="box">
          {" "}
          <div class="text">02796 서울특별시 성북구 종암로 18, 203</div>
        </div>
      </div>
    </footer>
  );
};
