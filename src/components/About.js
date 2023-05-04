import React from "react";

export const About = () => {
  return (
    <section class="page-section bg-primary" id="about">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">
              메디아크는 의료 전문성과 인공지능 기술력을 융합하며 전세계의
              모두가 건강해지는 내일을 그립니다.
            </h2>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4">
              Mediaarch envisions a tomorrow where health care and artificial
              intelligence are impoverished, and everyone is healthy worldwide.
            </p>
            <a class="btn btn-light btn-xl" href="#services">
              더 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
