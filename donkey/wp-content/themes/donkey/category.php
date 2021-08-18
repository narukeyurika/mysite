<? php //カテゴリーページ
?>
<?php get_header(); ?>


<div class="category_page">
  <div class="cat_name_wrap">
    <span class="cat_name"> カテゴリー/
      <?php
      $aCategory = get_the_category();
      $sCategoryName = $aCategory[0]->cat_name;
      echo ($sCategoryName);
      ?>
    </span>
  </div>

  <div class="breadcrumb_bg">
    <?php echo breadcrumb_func(); //パンくずリスト表示
    ?>
  </div>

  <div class="wrap_bg">
    <main class="main category">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>


          <a class="box" href="<?php the_permalink(); ?>">
            <h2 class="title"><?php the_title(); ?></h2>
            <p class="cat_time_catname">
              <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
              <?php
              $category = get_the_category();
              $cat_name = $category[0]->cat_name; //カテゴリー名の取得
              ?>
              <?php echo $cat_name; ?>
              <p><?php the_content('続きを見る'); ?></p>
          </a>


      <?php endwhile;
      endif; ?>
    </main>
  </div>

  <?php get_footer(); ?>

  <!----
  <div class="box">
    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    <h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <p class="cat_time_catname">
      <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
      <span><?php the_category(', '); ?></span>
    </p>

    <p><?php the_content('続きを見る'); ?></p>
  </div>
!>
