<?php
define( 'WP_CACHE', true ); 
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'stellarswag' );
/** Database username */
define( 'DB_USER', 'ali' );
/** Database password */
define( 'DB_PASSWORD', 'Aali2000@$' );
/** Database hostname */
define( 'DB_HOST', 'localhost' );
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
define( 'AUTH_KEY',         'h3S}J4}uqV!z Jt~FV,i]KF-V}R;IL2I9yi(!];p28~Ce}]S|1kWS)8)H/svyI*|' );
define( 'SECURE_AUTH_KEY',  '5`1ru{}`4e+>6hG,D47;3|I0QpOFKAe<=j)XF_` Tgbvex)+QCKo8w*DnP)kNREt' );
define( 'LOGGED_IN_KEY',    '2.b#JSW2aRL9`n?A>^gPHg{.e$jY8)Unk5D&EInnsia4_sZ9# F;!<E~s$Q&-ZXA' );
define( 'NONCE_KEY',        '?^$tVVSV_G7%*fV*sAr?4%4U%-t&8rcst`I J<ep!B=EhM8>ae](oA/?o#:Gz)Gr' );
define( 'AUTH_SALT',        ']6k3UgA:!vf/x>$K1}m)]cIo&Oi:i21tR}[I@T~3SodI9sz4$R*Z+g7PGqX#Xluq' );
define( 'SECURE_AUTH_SALT', 'HheGc`G1bU7Uu8!rqD}By<EY/(F&?=S@**f9hJ2Sn>6^6-@zw)yk>oIuY4|]&:2 ' );
define( 'LOGGED_IN_SALT',   'I*kHAPe#X#odpqv.is7K*)vN=vi53XER)n<yk*D6I7)vvM;U-TJD|MaC[)]hh+-p' );
define( 'NONCE_SALT',       '{9(#%x6%}<6#P=~Wq,n*W,AKCjAi8/fS13gSw:VY1GfgR|S[+h1,^A=^mzsVSLLh' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ahr_';
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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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