const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/App.js', 'public/js')
//     .js('resources/js/reportWebVitals.js', 'public/js')
//     .js('resources/js/index.js', 'public/js')
//     .react()
//     .postCss('resources/css/App.css', 'public/css', [
//         //
//         require("tailwindcss"),
//     ]);
mix.js('resources/js/index.js', 'public/js')
    .react()
    .js('resources/js/about.js', 'public/js')
    .react()
    .js('resources/js/settings.js', 'public/js')
    .react()
    .js('resources/js/mailbox.js', 'public/js')
    .react()
    .postCss('resources/css/App.css', 'public/css', [
        //
        require("tailwindcss"),
    ]);
