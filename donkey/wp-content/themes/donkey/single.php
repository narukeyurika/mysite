<?php //投稿ページ　
?>

<?php get_header(); //ヘッダーを取得
?>
<div class="breadcrumb_bg">
    <?php echo breadcrumb_func(); //パンくずリスト表示
    ?>
</div>


<div class="wrap_bg">
    <?php /* 投稿があれば投稿を表示　タイトルも */ ?>
    <main class="main single common-lower">

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
                    <?php //投稿日
                    ?>
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
        <div class="return_wrap">
            <p class="return"><a href="<?php echo esc_url(get_permalink(69)); ?>">最新情報一覧に戻る</a></p>
        </div>

    </main>
</div>

<?php get_footer(); ?>
