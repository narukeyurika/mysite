<?php /* Template Name: 新着記事全一覧 */?>
<?php get_header(); ?>

<main class="lower page-articles">
    <?php the_title( '<h1 class="lower-title">', '</h1>' ); ?>
</ul>

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

if ( $aPosts->have_posts() ) :
    while ( $aPosts->have_posts() ) : $aPosts->the_post();

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
            $sPostExcerpt = mb_substr($sPostContent, 0, 60) . '...';
        }

        echo '<div class="box">';
        echo '<div class="detail">';
        echo '<p class="post-date">' . esc_html($sPostDate) . '</p>';
        //アイキャッチ表示
        echo '<span class="image">';
        if ( has_post_thumbnail( $post->ID ) ) {
            echo get_the_post_thumbnail( $post->ID, 'medium' );
        } else {
            echo '<img src="' . esc_url( get_theme_file_uri( "img/default-image.png" ) ) . '" alt="">';
        }
        echo '</span>';
        //
        echo '<h3 class="title"><a href="' . esc_url($sPostUrl) . '">' . esc_html($post->post_title) . '</a></h3>';
        echo '<p class="excerpt">' . esc_html($sPostExcerpt) . '</p>';
        echo '</div><!--/.detail-->';
        echo '</div><!--/.box-->';
    endwhile;
endif;

/**
* ページネーション
*/
$iRange = 4;
$iShowItems = ($iRange * 2) + 1;
// 現在のページ
global $paged;
if(empty($paged)) $paged = 1;
// ページ数
if (!$iPages){
    global $wp_query;
    $iPages = $wp_query->max_num_pages;
}
if(!$iPages) {
    $iPages = 1;
}
if(1 != $iPages) {
    echo "<div class=\"pagination\"><span>".$paged." / ".$iPages."</span>";
    if($paged > 2 && $paged > $iRange+1 && $iShowItems < $iPages) echo "<a href='".get_pagenum_link(1)."'>&laquo; 最初へ</a>";
    if($paged > 1 && $iShowItems < $iPages) echo "<a href='".get_pagenum_link($paged - 1)."'>&lsaquo; 前へ</a>";
    for ($i=1; $i <= $iPages; $i++) {
        if (1 != $iPages &&( !($i >= $paged+$iRange+1 || $i <= $paged-$iRange-1) || $iPages <= $iShowItems )) {
            echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
        }
    }
    if ($paged < $iPages && $iShowItems < $iPages) echo "<a href=\"".get_pagenum_link($paged + 1)."\">次へ &rsaquo;</a>";
    if ($paged < $iPages-1 && $paged+$iRange-1 < $iPages && $iShowItems < $iPages) echo "<a href='".get_pagenum_link($iPages)."'>最後へ &raquo;</a>";
    echo "</div>\n";
}
?>

<?php wp_reset_query(); ?>

    </section>

</main>
<?php get_footer(); ?>
