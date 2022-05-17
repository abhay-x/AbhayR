import React from "react";
export default function About() {
  return (
    <div>
      <section class="about section " id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img src="images/about.jpg" alt="no image_" />
          </div>

          <div>
            <h2 class="about__subtitle">I'am Abhay</h2>
            <p class="about__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
              soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
