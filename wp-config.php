<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'codespa' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' 6QdX49y?y%eASwunlo!(^`Sg]XSZ|b}FrC%r(6 S1SrqTV}AEZj$|Fe5c3uS:be' );
define( 'SECURE_AUTH_KEY',  'KW1I9f>8XAem:yB6GZUs[v[A~e&<o6XA$S [El,+eGdf9e,kRx;DjCaFYu&e:H42' );
define( 'LOGGED_IN_KEY',    '5}PJGukyRDu35ACmt>B+%M%m?8V39y/gw{!le&>]$w^Ge4pv | -w:`Qqw5[J,;]' );
define( 'NONCE_KEY',        '!-,F_mf4QP)a4%6.?oq#1iS9B<tWR4=k:ksN}}bK/g=wG^v D:q&;b5y,0[b{.m(' );
define( 'AUTH_SALT',        '; NA6&,Qy0Fk/{Bhc+U=HBm+PIFG9a|B?WNG&`|=_8`,6$joqz;/2r;2po+}#aIk' );
define( 'SECURE_AUTH_SALT', 'I%%hApF-4BE[sq&OETL9ssIedp3l{N+~}} wbtB m.h?Ezz|p|u6xG2< LUFh,<w' );
define( 'LOGGED_IN_SALT',   'M{c+^9[%4IU#Dc)+SlnH[C=6Hx4%tJxUIJ#>i5CgZ),]GBTN  ONRau6M_Pc,=gA' );
define( 'NONCE_SALT',       '={*(Z[ }PM,{gR~}#M~v_Mm.K]ju+a`)Of],.Lvy8fB|^;%b]yEK4Pav= :,=-wo' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
