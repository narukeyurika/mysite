<?php //投稿ページ　
?>

<?php get_header(); //ヘッダーを取得
?>

<?php /* 投稿があれば投稿を表示　タイトルも */ ?>
<main class="main single common-lower">
    <?php echo breadcrumb_func(); //パンくずリスト表示
    ?>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <h1><?php the_title(); ?></h1>
            <?php
            /* ここからアイキャッチ設定 */
            echo '<span class="image">';
            if (has_post_thumbnail($post->ID)) {
                echo get_the_post_thumbnail($post->ID, 'large');
            } else {
                echo '<img src="' . esc_url(get_theme_file_uri("img/default-image.png")) . '" alt="">';
            }
            echo '</span>';
            /* ここまで */
            ?>

            <div class="single_cat">
                </* 投稿日 */ ?>
                <span class="article-date">
                    <i class="far fa-clock"></i>
                    <time datetime="<?php echo get_the_date('Y-m-d'); ?>">
                        <?php echo get_the_date(); ?>
                    </time>
                </span>
                <span>カテゴリー/
                    <?php
                    $aCategory = get_the_category();
                    $sCategoryName = $aCategory[0]->cat_name;
                    echo '<a href="' . esc_url($sCategoryHref) . '" class="cat">' . esc_html($sCategoryName) . '</a>';
                    ?>
                </span>
            </div>


            <div class="wysiwyg-editor">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>

    <div class="r_n">
        <span class="return">
            <?php previous_post_link('%link', '<  前の記事へ'); ?>
        </span>
        <span class="next">
            <?php next_post_link('%link', '次の記事へ  >'); ?>
        </span>
    </div>


</main>


<?php get_footer(); ?>
