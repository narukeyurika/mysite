<?php //固定ページ
?>
<?php get_header(); ?>


<?php while (have_posts()) : the_post(); ?>
  <!--アイキャッチがある時のみ、CSSで設定している背景を上書きする-->
  <div class="eye_catch">
    <?php
    $sTitle = esc_html(get_the_title());
    echo <<<EOM
  <section id="main-visual-underlayer">
    <div class="mv-wrapper">
      <div class="mv-img-wrapper"></div>
      <h1 class="title">{$sTitle}</h1>
    </div>
  </section>
EOM;
    if (has_post_thumbnail()) {
      $sBgUrl = esc_url(get_the_post_thumbnail_url(get_the_ID(), 'large'));
      echo <<<EOM
  <style>
    .eye_catch #main-visual-underlayer .mv-wrapper {
      background-image: url({$sBgUrl});
    }
  </style>
EOM;
    }
    ?>
  </div>
  <!-------->
  <div class="wrap_bg">
    <main class="main page standard common-lower">
      <div class="wysiwyg-editor">
        <?php the_content(); ?>

      </div>
      <?php echo breadcrumb_func(); //パンくずリスト表示
      ?>
    </main>
  </div>

<?php endwhile; ?>

<?php get_footer(); ?>
