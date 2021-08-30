<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sql10433597' );

/** MySQL database username */
define( 'DB_USER', 'sql10433597' );

/** MySQL database password */
define( 'DB_PASSWORD', 't39ttwBzfr' );

/** MySQL hostname */
define( 'DB_HOST', 'sql10.freesqldatabase.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'B,s(#>m(5yQorS$ZQkS[bGu~?Sl(X)Yp1*(|C8w#a:b+N]<i>*5S^_;E<nX .p%c' );
define( 'SECURE_AUTH_KEY',  ')N;H3He9&pO8K#$Rf<SomIRROC`)`Mwm,~3Tf.myLJh&Zz|5)O;TLU?B1R#Y1Df]' );
define( 'LOGGED_IN_KEY',    'u/zQQ+^1jXl#:4e)gyz4I`^IL7vi.{*GBm=+GS:EW=A!VHIRi_@a7$+Y=q*IRxH2' );
define( 'NONCE_KEY',        'LB%x4sf`<`b3^IJAD7YX`p?au!{$y&iLi:`ouAXeAw|~RD8t&]tO`}YVC~JC`7EZ' );
define( 'AUTH_SALT',        '-cHM~x-_>m3UgXQDF|N5Y*s 10]Tquc!J(iohoPfG>`chzotbHfA<u$ESScDv@6/' );
define( 'SECURE_AUTH_SALT', '_|[>30BQhQuh(&%zOS1QkhBUCZG*-w/vBxR]EtaV`Jkv.zwqp=l_2`<6pNgV)Hw?' );
define( 'LOGGED_IN_SALT',   'lW!x0RC%8:g<aUV,>R}u9e:{s^GBn=|7[c+U3Pc3F@L9gA3LyMU#nV$Y808aqbMv' );
define( 'NONCE_SALT',       'EYI[>-y,?Iw^)(zIhV}Mn6D{~Kb) Ov=(HCluMWGU|oAW^I}SKjBIZ_Wn-Dgo?j:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
