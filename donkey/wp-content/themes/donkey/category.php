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


  <div class="wrap_bg">
    <div class="sidebar_wrap">
      <main class="main category">
        <?php if (have_posts()) : while (have_posts()) : the_post();

            $this_categories = get_the_category();
            if ($this_categories) {
              $this_category_color = get_field('color', 'category_' . $this_categories[0]->term_id);
              $this_category_name = $this_categories[0]->name;
            }
        ?>

            <a class="box" href="<?php the_permalink(); ?>">
              <p class="cat_time_catname">
                <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
                <?php
                $category = get_the_category();
                $cat_name = $category[0]->cat_name; //カテゴリー名の取得
                ?>
                <?php
                echo '<span class="entry-label" style="' . esc_attr('background:' . $this_category_color) . ';">' . esc_html($this_category_name) . '</span>';
                //カテゴリー色表示?>
              </p>
              <h2 class="title"><?php the_title(); ?></h2>

              <p><?php
                  $remove_array = ["\r\n", "\r", "\n", " ", "　"];
                  $content = wp_trim_words(strip_shortcodes(get_the_content('続きを見る')), 130, '…');
                  $content = str_replace($remove_array, '', $content);
                  echo $content;
                  ?></p>
            </a>

        <?php endwhile;
        endif; ?>


      </main>
      <?php get_sidebar(); //サイドバー表示
      ?>
    </div>
    <?php echo breadcrumb_func(); //パンくずリスト表示
    ?>
  </div>

  <?php get_footer(); ?>
