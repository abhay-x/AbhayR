import React from "react";
export default function Home() {
  return (
    <div>
      <section class="home bd-grid" id="home">
        <div class="home__data">
          <h1 class="home__title">
            Hi,
            <br />
            I'am <span class="home__title-color">Abhay</span>
            <br /> Web Designer
          </h1>

          <a href="#" class="button">
            Contact
          </a>
        </div>

        <div class="home__social">
          <a href="" class="home__social-icon">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="" class="home__social-icon">
            <i class="bx bxl-behance"></i>
          </a>
          <a href="https://github.com/lightningpointer/lab/tree/main" class="home__social-icon">
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <div class="home__img">
          <img src={"images/perfil.png"} alt="Not available" />
        </div>
      </section>
    </div>
  );
}
