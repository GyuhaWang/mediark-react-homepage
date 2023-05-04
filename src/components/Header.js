import React from "react";
import { TypingText } from "../util/TypingText";
export const Header = () => {
  return (
    <header class="masthead" style={{ height: "100vh" }}>
      <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-8 align-self-end">
            <TypingText text="모 두의 건강을 Draw IT" delay={100} />

            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <a class="btn btn-primary btn-xl" href="#about">
              메디아크 알아보기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
