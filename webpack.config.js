var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '/public');
var APP_DIR = path.resolve(__dirname, 'src');


function ajustEntryOutputWebpack ( object ) {
    var type = object.type;
    var APP_DIR = path.resolve(__dirname, object.srcFolder);
    if (type === "SPA") {
        return {
            entry : APP_DIR+"/"+object.entry+".js",
            output : {
                path : __dirname,
                filename : "dist/bundle.js"
            },
            add_dir : APP_DIR
        }
    }
    if (type === "classic" || type === "standard") {
        if (Array.isArray(object.entry)) {
            var l = object.entry.length;
            var object_entry_result = {};
            for (var e = 0; e  < l; e++) {
                var entry = object.entry[e];
                object_entry_result[entry] = APP_DIR+"/"+entry+".js";
            }
            return {
                entry : object_entry_result,
                output : {
                    path : __dirname,
                    filename : object.srcFolder+'/dist/[name].js'
                },
                add_dir : APP_DIR
            }
        }
        else {
            throw Error ("Entry Is not an Array Object" );
        }
        
        
    }
}


var ajustSources = ajustEntryOutputWebpack({
    srcFolder : "src",
    entry : "app" ,
    type : "SPA"
    
});

var config = {
  entry:  ajustSources.entry,
  output: ajustSources.output,
  mode :"development",
  /*devServer: {
      proxy: {
          "/api": {
              target: "http://api.population.io/1.0/population/2000/United%20States/?format=json",
              secure: false
          }
      }
  },*/
  module : {
    rules : [
      {
        test : /\.js?/,
        //exclude: /node_modules/,
        //include : ajustSources.add_dir,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }
};

module.exports = config;