<?php get_header(); ?>

<!-----ham　表示させる部分----->
    <aside class="js-offcanvas">
        <div id="category">
            <ul id="menu">
                <li>
                    <div class="main_menu">私たちについて</div>
                    <ul class="sub_menu">
                        <li><a href="#">ご挨拶</a></li>
                        <li><a href="#">スタッフ紹介</a></li>
                        <li><a href="#">ご家族の方へ</a></li>
                    </ul>
                </li>
                <li>
                    <div class="main_menu">サービス内容</div>
                    <ul class="sub_menu">
                        <li><a href="#">訪問介護とは</a></li>
                        <li><a href="#">1日の流れ</a></li>
                        <li><a href="#">よくあるご質問</a></li>
                    </ul>
                </li>
                <li>
                    <div class="main_menu2">お申し込みの流れ</div>
                </li>
                <li>
                    <div class="main_menu2">お知らせ</div>
                </li>
                <li>
                    <div class="main_menu">ドンキーについて</div>
                    <ul class="sub_menu">
                        <li><a href="#">会社概要</a></li>
                        <li><a href="#">採用情報</a></li>
                </li>
            </ul>
            </li>
            <li>
                <div class="main_menu">お問い合わせ</div>
                <ul class="sub_menu">
                    <li><a href="#">プライバシーポリシー</a></li>
                </ul>
            </li>
            　　</ul>
            <div class="ham_content"><!-----ハンバーガー下層部分----->
                <div class="ham_logo">
                    <a href="#">
                        <img src="<?php echo esc_url( get_theme_file_uri( "img/header/logo.svg" ) ); ?>" alt="ロゴ画像">
                </div>
                <p>お問い合わせ・ご相談</p>
                <p class="ham_tel">00-0000-0000</p>
                <p class="ham_time">【営業時間】9：00~17：00<br>
                    【休日】日・祝・年末年始</p>
                <a href="#" class="ham_btn">メールフォームはこちら</a>
            </div>
    </aside>


<!----- main ----->
    <section class="key_visual">
        <img  class="pcimg" src="<?php echo esc_url( get_theme_file_uri( "img/main/main_img.png" ) ); ?>" alt="pcメイン画像">
        <img  class="smimg" src="<?php echo esc_url( get_theme_file_uri( "img/main/sm_topimg.png" ) ); ?>" alt="スマホトップ画像">
    </section>
 <main>
        <!--背景色ここから-->

        <!----- 私たちについて ----->
        <section class="about">
            <h2>
                <div class="title_icon"></div>私たちについて
            </h2>
        <img  class="about_img" src="<?php echo esc_url( get_theme_file_uri( "img/main/about_img.png" ) ); ?>" alt="私たちについての画像">
            <p>ケアステーションドンキーはおひとりで生活することが困難になった方やお手伝いが必要な方が住み慣れたご自宅で、いつもどおり自分らしく生活できるようお手伝いをしています。</p>
            <div class="button">
                <a href="<?php echo esc_url(get_permalink( 11 )); ?>">詳しく見る</a>
            </div>
        </section>


 <!----- お知らせ ----->
 <section class="news">
            <div class="wrap">
            <div class="news_title_box">
                        <h2 class="news_title">お知らせ</h2>
                          <img src="<?php echo esc_url( get_theme_file_uri( "img/main/news.png" ) ); ?>" alt="ロバのイラスト">
            </div>
<div class="news_content_box2">
                <?php
                $aPosts = get_posts([
                    'posts_per_page' => 3, // 件数の指定
                    'orderby' => 'date', // 並び順の対象（date=投稿日時）
                    'order' => 'DESC', // 並び順を新しい順に
                    'post_type' => 'post', // 投稿データが対象（pageにすると固定ページ）
                    'post_status' => 'publish', // 公開されているデータが対象
                ]);
                foreach ($aPosts as $post) {
                    // HTMLとして表示したい情報をまとめる
                    $aCategory = get_the_category();
                    $sCategoryHref = $aCategory[0]->slug;
                    $sCategoryName = $aCategory[0]->cat_name;
                    $sPostHref = get_permalink($post->ID);
                    $sPostTitle = $post->post_title;
                    $sPostDate = mysql2date('Y.m.d', $post->post_date);

                    // HTMLとして出力
                    echo '<p class="contents">';
                    echo '<a href="' . esc_url($sCategoryHref) . '" class="cat">' . esc_html($sCategoryName) . '</a>';
                    echo '<span class="date">' . esc_html($sPostDate) . '</span>';
                    echo '<a class="title" href="' . esc_url($sPostHref) . '">' . esc_html($sPostTitle) . '</a>';
                    echo '</p>';
                }
                ?>
      </div>
            </div> <!----wrap.end---->
            <a class="news_more" href= "<?php echo esc_url(get_permalink( 69 )); ?>">
                 お知らせ一覧へ
            </a>
 </section>


 <!----- サービス内容----->
<section class="service">
        <h2>
            <div class="title_icon"></div>サービス内容
        </h2>
        <p>介護やお手伝いが必要になった方々が住み慣れたご自宅で安心して過ごせるようにお手伝いをしています。</p>
<!---身体介護--->
<div class="service1">
        <div class="box_1">
            <h3>身体介護</h3>
            <p>利用者様のご自宅を直接訪問し、食事・入浴・排泄など直接身体に触れるサービスです。
                利用者が自宅にいても自立した日常生活を送れるように生活を支援することが目的です。
            </p>
           <div class="button">
                <a href="<?php echo esc_url(get_permalink( 65 )); ?>">詳しく見る</a>
            </div>
        </div>
        <div class="triangle-left"></div>
        <div class="box_2">
        <img src="<?php echo esc_url( get_theme_file_uri( "img/main/service_img1.jpg" ) ); ?>" alt="身体介護の画像">
       </div>
</div>
<!---生活援助--->
<div class="service2">
        <div class="box_4">
            <h3>生活援助</h3>
            <p>利用者が一人暮らしや同居している家族が行うことが困難など何かしらの理由で行うことが困難な日常生活の家事を代わりに行うサービスです。
                食事の準備や掃除洗濯買い物をお手伝いします。
            </p>
               <div class="button">
                <a href="<?php echo esc_url(get_permalink( 67 )); ?>">詳しく見る</a>
            </div>
        </div>
        <div class="triangle-right"></div>
        <div class="box_3">
            <img src="<?php echo esc_url( get_theme_file_uri( "img/main/service_img2.jpg" ) ); ?>" alt="生活援助の画像">
   　　　 </div>
</div>
 </section>

           <!----- お申し込みの流れ ----->

<section class="application">
            <h2>
                <div class="title_icon"></div>お申し込みの流れ
            </h2>
            <p>お悩みや相談に応じて最適なプランを提案します。お気軽にご相談ください。</p>
            <div class="application-box">
                <div class="ap_item">
                    <p class="step">STEP.<span>1</span></p>
                    <p>こちらのページまたはお電話でお申込み
                    </p>
                    <img src="<?php echo esc_url( get_theme_file_uri( "img/main/Step1.png" ) ); ?>" alt="お申込みのイラスト">
                </div>
                <div class="ap_triangle"></div>
                <div class="ap_item">
                    <p class="step">STEP.<span>2</span></p>
                    <p>訪問日程の調整<br>
                        お見積り・お支払い
                    </p>
                    <img src="<?php echo esc_url( get_theme_file_uri( "img/main/Step2.png" ) ); ?>" alt="日程調整のイラスト">
                </div>
                <div class="ap_triangle"></div>
                <div class="ap_item">
                    <p class="step">STEP.<span>3</span></p>
                    <p>訪問介護当日<br>
                        次回の予約
                    </p>
                    <img src="<?php echo esc_url( get_theme_file_uri( "img/main/Step3.png" ) ); ?>" alt="次回予約のイラスト">
                </div>
            </div>
               <div class="button">
                <a href="<?php echo esc_url(get_permalink( 15 )); ?>">詳しく見る</a>
            </div>
</section>


 <!----- よくあるご質問 ----->
            <section class="question">
                <h2>
                    <div class="title_icon"></div>よくあるご質問
                </h2>
                <p>お悩みや相談に応じて最適なプランを提案します。お気軽にご相談ください。</p>
                <div class="qa-list mts">
                    <dl class="qa">
                        <dt>費用はどのくらいかかりますか</dt>
                        <dd>プランによりますので一度お見積りをご利用ください</dd>
                    </dl>
                    <dl class="qa">
                        <dt>費用はどのくらいかかりますか</dt>
                        <dd>プランによりますので一度お見積りをご利用ください
                        </dd>
                    </dl>
                    <dl class="qa">
                        <dt>費用はどのくらいかかりますか</dt>
                        <dd>プランによりますので一度お見積りをご利用ください
                        </dd>
                    </dl>
                </div>
                <div class="qa_more">
                    <a href="<?php echo esc_url(get_permalink( 17 )); ?>" class="qa_more_icon">よくあるご質問一覧へ</a>
                </div>
            </section>


 <!----- お問い合わせ ----->
            <section class="contact">
                <h2>
                    <div class="title_icon"></div>お問い合わせ
                </h2>
                <p>ドンキーについてや訪問介護のお問い合わせはこちらからお気軽にお問い合わせください。</p>
                <div class="contact_bgcolor">
                    <div class="contact_item">
                        <div class="tel_balloon">
                            <p>お電話でのお問い合わせはこちら</p>
                        </div>
                        <img src="<?php echo esc_url( get_theme_file_uri( "img/main/phone_icon.svg" ) ); ?>" alt="電話アイコン"><br>
                        <a class="number" href="tel:00-0000-0000">00-0000-0000</a>
                        <p class="tel_time">営業時間（土日祝休み）09：00~17：00</p>
                    </div>
                    <div class="line"></div>
                    <div class="contact_item">
                        <div class="tel_balloon">
                            <p>メールでのお問い合わせはこちら</p>
                        </div>
                        <img src="<?php echo esc_url( get_theme_file_uri( "img/main/mail_icon.svg" ) ); ?>" alt="メールアイコン"><br>
                        <div class="btn_mail"><a href="#">メールフォームはこちら</a></div>
                    </div>
            </section>
 <!----- リクルートバナー ----->
  <a href="<?php echo esc_url(get_permalink( 49 )); ?>">
            <img  class="recruit" src="<?php echo esc_url( get_theme_file_uri( "img/main/recruit_banner.jpg" ) ); ?>" alt="pc求人バナー">
            <img  class="recruit_sm" src="<?php echo esc_url( get_theme_file_uri( "img/main/recruit_banner_sm.jpg" ) ); ?>" alt="sm求人バナー">
  </a>


<?php dynamic_sidebar( "sidebar-widget" ); ?>


    </main>
</div>

<?php get_footer(); ?>
