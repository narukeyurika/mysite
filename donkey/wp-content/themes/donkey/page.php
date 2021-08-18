<?php //固定ページ
?>
<?php get_header(); ?>


<?php while (have_posts()) : the_post(); ?>
  <main class="main page standard common-lower">
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
    /* アイキャッチがある時のみ、CSSで設定している背景を上書きする */
    if (has_post_thumbnail()) {
      $sBgUrl = esc_url(get_the_post_thumbnail_url(get_the_ID(), 'large'));
      echo <<<EOM
  <style>
    .page.standard #main-visual-underlayer .mv-wrapper {
      background-image: url({$sBgUrl});
    }
  </style>
EOM;
    }
    ?>
  </main>

  
  <div class="breadcrumb_bg">
    <?php echo breadcrumb_func(); //パンくずリスト表示
    ?>
  </div>

  <div class="wrap_bg">
    <div class="wysiwyg-editor">
      <?php the_content(); ?>
    </div>
  </div>


<?php endwhile; ?>

<?php get_footer(); ?>
