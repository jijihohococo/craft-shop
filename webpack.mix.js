const mix = require('laravel-mix');
const path = require('path');
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

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);
mix.webpackConfig({
    resolve: {
        alias: {
            'Admin/Views': path.resolve(__dirname, 'resources/js/admin/views/'),
            'User/Views' : path.resolve(__dirname, 'resources/js/user/views/')
        }
    },
    // output: {
    //     chunkFilename: mix.inProduction() ? "js/prod/chunks/[name]?id=[chunkhash].js" : "js/dev/chunks/[name].js"
    // }
});
mix.js('resources/js/main.js','public/js').vue()
