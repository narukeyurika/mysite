<?php
// コンテンツ幅をセット
if (!isset($content_width)) {
    $content_width = 725;
}

function custom_theme_setup()
{
    add_theme_support("automatic-feed-links"); //rss
    add_theme_support("title-tag"); //タイトルを取得
    add_theme_support("responsive-embeds"); //埋め込みコンテンツをレスポンシブ化
    add_theme_support("post-thumbnails"); //アイキャッチ有効化
    set_post_thumbnail_size(1200, 800); //アイキャッチサイズ
    register_nav_menus( //メニューの取得
        array(
            "global-nav" => "グローバルナビゲーション",
            "footer-menu" => "フッターメニュー",
            "mobile-menu" => "モバイルメニュー"
        )
    );
}
add_action("after_setup_theme", "custom_theme_setup");


//css
function css_scripts()
{
    wp_enqueue_style(
        "reset",
        get_template_directory_uri() . '/css/reset.css',
        array(),
        "1.0",
        "all"
    );
    wp_enqueue_style(
        "hiraku.min",
        get_template_directory_uri() . '/css/hiraku.min.css',
        array(),
        "1.0",
        "all"
    );
    wp_enqueue_style(
        "base-style",
        get_stylesheet_uri(),
        array(),
        "1.0",
        "all"
    );
}
add_action("wp_enqueue_scripts", "css_scripts");

//jq
function js_scripts()
{
    wp_enqueue_script(
        'jq',
        get_template_directory_uri() . '/js/jquery-3.6.0.min.js',
        array(),
        "1.0",
        true
    );
    wp_enqueue_script(
        'hirakujs',
        get_template_directory_uri() . '/js/hiraku.min.js',
        array(),
        "1.0",
        true
    );
    wp_enqueue_script(
        'main',
        get_template_directory_uri() . '/js/main.js',
        array(),
        "1.0",
        true
    );
    wp_enqueue_script(
        'webp',
        get_template_directory_uri() . '/js/modernizr-custom.js',
        array(),
        "1.0",
        true
    );
}
add_action('wp_enqueue_scripts', 'js_scripts');
//

//ウィジェットエリアの出力
function custom_widget_register()
{
    register_sidebar(array(
        "name" => "サイドバーウィジェットエリア",
        "id" => "sidebar-widget",
        "description" => "ブログページのサイドバーに表示",
        "after_widget" => "</div>",
        "before_title" => '<h2 class="c-widget_title">',
        "after_title" => "</h2>",
    ));
}
add_action("widgets_init", "custom_widget_register");

//youtubeの動画があったら、divで囲う
function iframe_in_div($the_content)
{
    if (is_single() || is_page()) {
        $the_content = preg_replace('/<iframe/i', '<div class="youtube"><iframe', $the_content);
        $the_content = preg_replace('/<\/iframe>/i', '</iframe></div>', $the_content);
    }
    return $the_content;
}
add_filter('the_content', 'iframe_in_div');
add_theme_support('post-thumbnails');; ?>



<?php
//パンくずリスト構造化
function breadcrumb_func()
{
    global $post;
    $str = '';
    $url = esc_url((is_ssl() ? 'https' : 'http') . '://' . $_SERVER["HTTP_HOST"] . htmlspecialchars($_SERVER["REQUEST_URI"], ENT_QUOTES, 'UTF-8'));
    if (!is_home() && !is_admin()) {
        $str .= '<ul class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">';
        $str .= '<a href="' . home_url() . '" itemprop="item"><span itemprop="name">' . 'TOP' . '</span></a><meta itemprop="position" content="1"></li>';
        if (is_post_type_archive()) {
            $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . $url . '" itemprop="item"><span itemprop="name">' . esc_html(get_post_type_object(get_post_type())->label) . '</span></a><meta itemprop="position" content="2"></li>';
        } elseif (is_tax()) {
            $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . get_post_type_archive_link(get_post_type()) . '" itemprop="item"><span itemprop="name">' . esc_html(get_post_type_object(get_post_type())->label) . '</span></a><meta itemprop="position" content="2"></li>';
            $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . $url . '" itemprop="item"><span itemprop="name">' . single_term_title('', false) . '</span></a><meta itemprop="position" content="3"></li>';
        } elseif (is_tag()) {
            $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . $url . '" itemprop="item"><span itemprop="name">' . single_tag_title('', false) . '</span></a><meta itemprop="position" content="2"></li>';
        } elseif (is_category()) {
            $cat = get_queried_object();
            if ($cat->parent != 0) {
                $ancestors = array_reverse(get_ancestors($cat->cat_ID, 'category'));
                foreach ($ancestors as $ancestor) {
                    $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . get_category_link($ancestor) . '" itemprop="item"><span itemprop="name">' . get_cat_name($ancestor) . '</span></a><meta itemprop="position" content="2"></li>';
                }
            }
            $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . $url . '" itemprop="item"><span itemprop="name">' . $cat->cat_name . '</span></a><meta itemprop="position" content="3"></li>';
        } elseif (is_page()) {
            if ($post->post_parent != 0) {
                $ancestors = array_reverse(get_post_ancestors($post->ID));
                foreach ($ancestors as $ancestor) {
                    $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . get_permalink($ancestor) . '" itemprop="item"><span itemprop="name">' . get_the_title($ancestor) . '</span></a><meta itemprop="position" content="2"></li>';
                    $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . get_the_permalink() . '" itemprop="item"><span itemprop="name">' . get_the_title() . '</span></a><meta itemprop="position" content="3"></li>';
                }
            } else {
                $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . get_the_permalink() . '" itemprop="item"><span itemprop="name">' . get_the_title() . '</span></a><meta itemprop="position" content="2" /></li>';
            }
        } elseif (is_single()) {
            $categories = is_singular('achievement') ? get_terms($post->ID) : get_the_category($post->ID);
            $cat = $categories[0];
            if ($cat->parent != 0) {
                $ancestors = array_reverse(get_ancestors($cat->cat_ID, 'category'));
                foreach ($ancestors as $ancestor) {
                    $str .= '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="' . get_category_link($ancestor) . '" itemprop="item"><span itemprop="name">' . get_cat_name($ancestor) . '</span></a><meta itemprop="position" content="2"></li>';
                }
                $str .= '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="' . get_category_link($cat->term_id) . '" itemprop="item"><span itemprop="name">' . $categories[0]->cat_name . '</span></a><meta itemprop="position" content="3"></li>';
                $str .= '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="' . get_the_permalink() . '" itemprop="item"><span itemprop="name">' . get_the_title() . '</span></a><meta itemprop="position" content="4"></li>';
            } else {
                $str .= '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="' . get_category_link($cat->term_id) . '" itemprop="item"><span itemprop="name">' . $cat->cat_name . '</span></a><meta itemprop="position" content="2"></li>';
                $str .= '<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="' . get_the_permalink() . '" itemprop="item"><span itemprop="name">' . get_the_title() . '</span></a><meta itemprop="position" content="3"></li>';
            }
        } else {
            $str .= '<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a href="' . get_the_permalink() . '" itemprop="item"><span itemprop="name">' . get_the_title() . '</span></a><meta itemprop="position" content="2"></li>';
        }
        $str .= '</ul>' . "\n";
    }
    return $str;
}

/* the_archive_titleで余計な文字を削除する */
add_filter('get_the_archive_title', function ($title) {
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_tax()) {
        $title = single_term_title('', false);
    } elseif (is_post_type_archive()) {
        $title = post_type_archive_title('', false);
    } elseif (is_date()) {
        $title = get_the_time('Y年n月');
    } elseif (is_search()) {
        $title = '検索結果：' . esc_html(get_search_query(false));
    } elseif (is_404()) {
        $title = '「404」ページが見つかりません';
    } else {
    }
    return $title;
});

// Gutenberg用のCSSを読み込む エディタでCSSを表示
add_action('enqueue_block_editor_assets', 'gutenberg_stylesheets_custom');
function gutenberg_stylesheets_custom()
{
    $editor_style_url = get_theme_file_uri('/editor-style.css');
    wp_enqueue_style('theme-editor-style', $editor_style_url);

    // JavaScriptも読み込みたい時は、以下を利用
    // wp_enqueue_script( 'theme-gutenberg-js', get_theme_file_uri('/js/gutenberg.js'), array( 'jquery' ), false, true );
}

function customize_admin_bar_menu($wp_admin_bar)
{
    // Adminバー左側
    $wp_admin_bar->remove_node('wp-logo'); // 一番左のWordPressのロゴ
    // $wp_admin_bar->remove_node('site-name'); // サイト名
    $wp_admin_bar->remove_node('new-content'); // 「＋ 新規」
    $wp_admin_bar->remove_node('comments'); // コメント
    // Adminバー右側
    $wp_admin_bar->remove_node('my-account'); // アカウントのメニュー
}
add_action('admin_bar_menu', 'customize_admin_bar_menu', 9999);


/* メニューにリンク無しの項目を作る */
function no_link_nav_menu($nav_menu, $args)
{
    return str_replace('http://none', 'javascript:void(0);', $nav_menu);
}
add_filter('wp_nav_menu', 'no_link_nav_menu', 9999, 2);


//WordPressバージョン出力metaタグ非表示
remove_action('wp_head', 'wp_generator');

?>
