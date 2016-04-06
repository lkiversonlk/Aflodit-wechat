#browserify -t [ babelify --presets [ react ] ] public/js/index.js | uglifyjs -c > public/dist/index.js
#browserify -t [ babelify --presets [ react ] ] public/js/admin.js | uglifyjs -c > public/dist/admin.js
#browserify -t [ babelify --presets [ react ] ] public/js/admin-audit.js | uglifyjs -c > public/dist/admin-audit.js


browserify -t [ babelify --presets [ react ] ] public/js/index.js -o public/dist/index.js
browserify -t [ babelify --presets [ react ] ] public/js/admin.js -o public/dist/admin.js
browserify -t [ babelify --presets [ react ] ] public/js/admin-audit.js -o public/dist/admin-audit.js