<?php /* Template Name: 新着記事全一覧 */ ?>

<?php get_header(); ?>

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
  <div class="sidebar_wrap">
    <section class="article-lists">
      <?php
      /**
       * 記事一覧の表示
       */
      $iPaged = (get_query_var('paged')) ? get_query_var('paged') : 1;
      $aPosts = new WP_Query([
        'posts_per_page' => get_option('posts_per_page'), // 件数の指定
        'paged' => $iPaged, // ページ番号
        'orderby' => 'date', // 並び順の対象（date=投稿日時）
        'order' => 'DESC', // 並び順を新しい順に
        'post_type' => 'post', // 投稿データが対象（pageにすると固定ページ）
        'post_status' => 'publish' // 公開されているデータが対象
      ]);


      $iPages = $aPosts->max_num_pages;

      if ($aPosts->have_posts()) :
        while ($aPosts->have_posts()) : $aPosts->the_post();
          //カテゴリーの色取得
          $this_categories = get_the_category();
          if ($this_categories) {
            $this_category_color = get_field('color', 'category_' . $this_categories[0]->term_id);
            $this_category_name  = $this_categories[0]->name;
          }
          //
          $aCategory = get_the_category();
          $sCategorySlug = $aCategory[0]->slug;
          $sCategoryName = $aCategory[0]->cat_name;
          // ID
          $iPostId = esc_html($post->ID);
          // 記事URL
          $sPostUrl = get_permalink($iPostId);
          // 公開日
          $sPostDate = mysql2date('Y.m.d', esc_html($post->post_date));
          // 抜粋・本文
          $sPostContent = strip_tags($post->post_content);
          $sPostExcerpt = esc_html($post->post_excerpt);
          if (trim($sPostExcerpt) == '') {
            // 抜粋が空だったら本文から文字を抽出
            $sPostExcerpt = mb_substr($sPostContent, 0, 130) . '...';
            $this_category_color = get_field('color', 'category_' . $this_categories[0]->term_id);
            $this_category_name  = $this_categories[0]->name;
          }

          echo '<a class="box" href="' . esc_url($sPostUrl) . '">';
          echo '<div class="detail">';
          echo '<p class="post-date"><time>' . esc_html($sPostDate) . '</time></p>';
          echo '<span class="entry-label" style="' . esc_attr('background:' . $this_category_color) . ';">' . esc_html($this_category_name) . '</span>';
          echo '<h3 class="title">'. esc_html($post->post_title) . '</h3>';
          echo '<p class="excerpt">' . esc_html($sPostExcerpt) . '</p>';
          echo '</div><!--/.detail-->';
          echo '</a><!--/.box-->';
        endwhile;
      endif;


      /*
echo '<div class="box">';
echo '<div class="detail">';
echo '<p class="post-date">' . esc_html($sPostDate) . '</p>';
echo '<span class="entry-label" style="' . esc_attr('background:' . $this_category_color) . ';">' . esc_html($this_category_name) . '</span>';
echo '<h3 class="title"><a href="' . esc_url($sPostUrl) . '">' . esc_html($post->post_title) . '</h3>';
echo '<p class="excerpt">' . esc_html($sPostExcerpt) . '</a></p>';
echo '</div><!--/.detail-->';
echo '</div><!--/.box-->';

*/


      /**
       * ページネーション
       */
      $iRange = 4;
      $iShowItems = ($iRange * 2) + 1;
      // 現在のページ
      global $paged;
      if (empty($paged)) $paged = 1;
      // ページ数
      if (!$iPages) {
        global $wp_query;
        $iPages = $wp_query->max_num_pages;
      }
      if (!$iPages) {
        $iPages = 1;
      }
      if (1 != $iPages) {
        echo "<div class=\"pagination\"><span>" . $paged . " / " . $iPages . "</span>";
        if ($paged > 2 && $paged > $iRange + 1 && $iShowItems < $iPages) echo "<a href='" . get_pagenum_link(1) . "'>&laquo; 最初へ</a>";
        if ($paged > 1 && $iShowItems < $iPages) echo "<a href='" . get_pagenum_link($paged - 1) . "'>&lsaquo; 前へ</a>";
        for ($i = 1; $i <= $iPages; $i++) {
          if (1 != $iPages && (!($i >= $paged + $iRange + 1 || $i <= $paged - $iRange - 1) || $iPages <= $iShowItems)) {
            echo ($paged == $i) ? "<span class=\"current\">" . $i . "</span>" : "<a href='" . get_pagenum_link($i) . "' class=\"inactive\">" . $i . "</a>";
          }
        }
        if ($paged < $iPages && $iShowItems < $iPages) echo "<a href=\"" . get_pagenum_link($paged + 1) . "\">次へ &rsaquo;</a>";
        if ($paged < $iPages - 1 && $paged + $iRange - 1 < $iPages && $iShowItems < $iPages) echo "<a href='" . get_pagenum_link($iPages) . "'>最後へ &raquo;</a>";
        echo "</div>\n";
      }
      ?>
      <?php wp_reset_query(); ?>





    </section>
    <?php get_sidebar(); //サイドバー表示
    ?>
  </div>
</div>
<?php get_footer(); ?>
