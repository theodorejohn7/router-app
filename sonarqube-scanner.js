const scanner = require("sonarqube-scanner");
scanner(
{
serverUrl: "http://localhost:9000",
token : "86d0eba7324431779a3bd8dbb228ef5794c87439",
login: "admin",
password: "admin",
options: {

"sonar.sources": "./src",
},
},
() => process.exit()
); 


// const scanner = require("sonarqube-scanner");

// scanner(
//   {
//     serverUrl : 'http://localhost:9000',
//     token : "6cf44498ec7cd3d7210521dfb7e33fffc58fe5f2",
//     options: {
//       'sonar.projectName': 'React form',
//       'sonar.projectDescription': 'Description for "My App" project...',
//       'sonar.sources': 'src',
//       'sonar.tests': 'src'
//     }
//   },
//   () => process.exit()
// )