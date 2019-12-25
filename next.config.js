
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
   webpack (config, options) {
       // configuracion para compilar sass y otros archivos fuentes
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       return config;
   }
}));