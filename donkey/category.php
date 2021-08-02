<?php//カテゴリーページ?>

<?php get_header(); ?>

<main class="main category">
<h1>カテゴリー/<?php single_cat_title(); ?></h1>

<div class="category_flex">
<?php if(have_posts()): while(have_posts()):the_post(); ?>
  <div class="box">
    <?php
    echo '<span class="image">';//アイキャッチ
        if ( has_post_thumbnail( $post->ID ) ) {
            echo get_the_post_thumbnail( $post->ID, 'medium' );
        } else {
            echo '<img src="' . esc_url( get_theme_file_uri( "img/default-image.png" ) ) . '" alt="">';
        }
        echo '</span>';
　　　?>
    <h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <time datetime="<?php the_time('Y-m-d'); ?>"><?php the_time('Y.m.d'); ?></time>
    <p><?php the_category(', '); ?></p>
    <p><?php the_content('続きを見る'); ?></p>
  </div>
<?php endwhile; endif; ?>
</div>

</main>
<?php get_footer(); ?>
