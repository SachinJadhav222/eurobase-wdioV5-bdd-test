import { Before, After } from "cucumber";
// module.exports = function() {

//     let count = 1;

//     After(function () {
//         console.log("This is After in module export=======>>>")
//         // let environment_base = environment_base_url + '/';
//         // browser.url(environment_base).then(function () {
//         //     console.log('Environment Base URL Set---->', environment_base)
//         // })
//     });

// };

After(function (scenario) {
  console.log("<<<..After Hook..>> ");
});
