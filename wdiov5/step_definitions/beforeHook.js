import { Before,After} from 'cucumber';

// module.exports = function() {

//     let count = 1;

//     this.Before(function () {
//         console.log("This is Before =======>>>")
//         // let environment_base = environment_base_url + '/';
//         // browser.url(environment_base).then(function () {
//         //     console.log('Environment Base URL Set---->', environment_base)
//         // })
//     });

// };


Before(function(scenario) {
        console.log("<<<<<====================== This is Before =========================>>>",scenario)
        // let environment_base = environment_base_url + '/';
        // browser.url(environment_base).then(function () {
        //     console.log('Environment Base URL Set---->', environment_base)
        // })
    });



