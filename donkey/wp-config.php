<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'donkey' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'root' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 'root' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'localhost:8889' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')lR5YqQm1{*>!nZxxoy`opIQ4|)]nVcl;=@6V!x},;t8s.EScGN+&^N`H[D+%Ygd');
define('SECURE_AUTH_KEY',  '.NB4}K7dk[.]FtP/QVxoNRqT`a.lnEdeNre$v4?<pBkraUDT;+aXPM60ih-`12xh');
define('LOGGED_IN_KEY',    'wOMuYTk?Z3^ RhWcj`rzd^eVOT,xFh&?f,i5g~|U^nl}]dXNARp0V7Du_Qz[{e!%');
define('NONCE_KEY',        '(Tjkg^&@|^1c@]PZ6>ECCBnf!p5eOHX54K+VBT-3<0zt:~4y+q:tw{uo3,F-4=JA');
define('AUTH_SALT',        '_c5}M5(E]}-G{+UYe#nLuy/c5j/yOgtHE+obLwXMX1gJ8-EEDiQSY=VW.QHud1WX');
define('SECURE_AUTH_SALT', '&a(?a+U.9|UkU[buC^kF),)Nr`.D+>d#kGQUTH<_948Oy+>IYu[hrT4NQ&e8z)c-');
define('LOGGED_IN_SALT',   '|AY_-uvI:j}vtHM+F1(K^O48l3`s5LA]bi).|^JM/xhqzVrF9$jntE,y-BeZy`=0');
define('NONCE_SALT',       '+7, T2~<vp<o8yl+5uGbjYe d]aj.5O seYWC-]Qfd.;,&IcCr|8|FX .{4V|krP');
/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'ny_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
// リビジョン5まで
define('WP_POST_REVISIONS', 5 );
// エラーは非表示
ini_set('display_errors', 0);
// 自動アップデート停止
define('AUTOMATIC_UPDATER_DISABLED', true);
// Contact Form7で自動挿入されるpタグを削除する
// ※以下は無くても問題ないです
define ('WPCF7_AUTOP', false);

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
