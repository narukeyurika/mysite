   <footer>
       <section class="footer">
           <div class="flex">
               <div class="footer_box">
                   <a href="/">
                       <img src="<?php echo esc_url(get_theme_file_uri("img/header/logo.svg")); ?>" alt="ロゴ">
                   </a>
                   <p>〒000-0000 〇〇県〇〇市00-0</p>
                   <div class="f_tel">
                       <p>お問い合わせ・ご相談</p>
                       <p class="f_tel_icon">00-0000-0000</p>
                       <p>[営業時間]9：00~17：00 休日】日・祝・年末年始</p>
                   </div>
                   <div class="f_mail">
                       <a href="<?php echo esc_url(get_permalink(21)); ?>">
                           <p>メールでのお問い合わせはこちら</p>
                       </a>
                   </div>
               </div>

               <div id="footer-menu">
                   <?php wp_nav_menu(array('theme_location' => 'footer-menu')); ?>
               </div>
       </section>

       <!----- モバイルフッター ----->
       <section class="m-footer">
           <div class="m_f_log">
               <a href="/">
                   <img src="<?php echo esc_url(get_theme_file_uri("img/header/logo.svg")); ?>" alt="モバイルフッターロゴ">
               </a>
               <div class="m_f_address">
                   <p>〒000-0000<br> 〇〇県〇〇市00-0</p>
               </div>
           </div>
           <div class="m_f_wrap">
               <div class="m_f_contact">
                   <p>お問い合わせ・ご相談</p>
                   <p class="f_tel_icon">00-0000-0000</p>
                   <p class="m_f_time">
                       <span class="f_tel_time">営業時間</span>9：00~17：00 <br>
                   <span class="f_tel_time">　休日　</span>日・祝・年末年始</p>
               </div>
           </div>
       </section>

       <!----- copyright ----->
       <section class="copyright">
           <p>Copyright 2021 grow, INC. All Rights Reserved</p>
       </section>
   </footer>
   <!----- /footer ----->
   <?php wp_footer(); ?>
   </body>

   </html>
