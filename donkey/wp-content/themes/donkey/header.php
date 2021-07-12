<!DOCTYPE html>
<html lang="ja" <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( "charset"); ?>">
    <meta name="description" content="訪問介護施設ケアステーションドンキーのHPです">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap" rel="stylesheet">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<!-----ham span----->
    <header class="header">
        <button type="button" class="js-offcanvas-btn">
          <span class="hiraku-open-btn-line"></span>
        </button>
      </header>
<!-----heder ue----->
      <div class="flex">
        <div class="f_item">
            <!--ロゴ-->
            <div class="logo">
                <a href="http://donkey.localhost:8888/">
                    <img src="<?php echo esc_url( get_theme_file_uri( "img/header/logo.svg" ) ); ?>" alt="pcロゴ画像">
                </a>
            </div>
        </div>
        <div class="f_item">
            <p class="tel_item">お問い合わせ・ご相談</p>
            <p class="tel_item2">【営業時間】9：00~17：00【休日】日・祝・年末年始</p>
        </div>
        <div class="f_item">
            <!--電話番号-->
            <div class="tel">
                <p class="tel_green">
                <img src="<?php echo esc_url( get_theme_file_uri( "img/header/tel_icon.svg" ) ); ?>" alt="電話アイコン">00-0000-0000</p>
            </div>
        </div>
    </div>
    <?php
wp_nav_menu(//ナビゲーションを取得
	array(
		"theme_location" => "global-nav",
		"container" => "div",
		"container_class" =>"c-global-nav"
	)
);
?>
