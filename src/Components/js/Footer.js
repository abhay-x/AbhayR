import React from 'react'

export default function Footer(){
  return (
     <div>
         <footer class="footer">
            <p class="footer__title">Abhay.R</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169; 2021 copyright all right reserved</p>
        </footer>

         {/* //<!--===== SCROLL REVEAL =====--> */}
        <script src="https://unpkg.com/scrollreveal"></script>

        {/* <!--===== MAIN JS =====--> */}
        <script src="assets/js/main.js"></script>
    </div>
  )
}
