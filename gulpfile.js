const gulp = require('gulp');
const cucumber = require('gulp-cucumber');



const plugins = {
    gulpWebDriver: require('gulp-webdriver'),
    path: require('path'),
    glob: require('glob'),
    fs: require('fs'),
    merge: require('deepmerge'),
    wdio: cucumber,
};


gulp.task('wdio', function () {
let wdio="wdio";
     return gulp.src('wdiov5/config/test.conf.js')
     
        .pipe(plugins.wdio({
            wdioBin: plugins.path.join(__dirname, 'node_modules', '.bin', wdio)
        }));
});
 
gulp.task('test', function() {
    console.log('This is gulp')
    // return gulp.src('wdiov5/features/*')
    //         .pipe(cucumber({
    //             'steps': 'step_definitions/*.js',
    //             'format': 'pretty'
    //         }));
});


// gulp.task('findDuplicates', function (cb) {

//     //var gruntFile = require('grunt/lib/grunt/file');


//     //Load all the Yaml files available inside pom folder
//     // return plugins.glob("tests/locators/colleague/*.yml", function (er, files) {
//     return plugins.glob("wdiov5/locators/*.js", function (er, files) {
//         var isUnique = true;

//         files.forEach(function (filePath) {
//             //if (gruntFile.exists(filePath)) {

//             try {

//                 var objYaml = yaml.load(fs.readFileSync(filePath));


//                 //console.log(objYaml);
//                 for (var p in objYaml) {

//                     if (mergedArray.indexOf(p) > -1) {
//                         isUnique = false;
//                         console.log('<<<<<< ' + p + ' is a DUPLICATE ENTRY >>>>>>');
//                         isUnique = false;

//                     }
//                     else {
//                         mergedArray.push(p);
//                     }
//                 }

//             }
//             catch (err) {
//                 console.log('<<<<<<' + err + '>>>>>>');
//             }
//             //}
//         });

//         if (isUnique) {
//             console.log('<<<<<<< I am Unique :) >>>>>>>');
//         }
//         else {
//             console.log('<<<<<<< I am NOT Unique :( >>>>>>>');
//         }
//         //console.log(mergedArray[0]);
//         cb();
//     })