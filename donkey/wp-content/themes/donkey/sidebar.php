<? php //サイドバー
?>

<aside class="side-bar">
  <p class="headline">カテゴリー</p>
  <ul class="category-lists">
    <?php
    wp_list_categories([
      'show_count' => false, // falseにすると投稿数を非表示
      'title_li' => '', // 見出しを空に（文字を入れると見出しとして出力される）
      'orderby' => 'count', // 並び順の対象
      'order' => 'DESC', // 並び順
      'depth' => true // 階層付きの場合はtrue、階層なしの場合はfalseを指定
    ]);
    ?>
  </ul>
</aside>
