// // import {a, b, ab} from "./Second-File.js";

// import { userName, userCountry, getMessage } from "./Second-File.js";
// import { cityName } from "./Third-File.js";

// console.log("Hello ", userName, userCountry, cityName);

// console.log(getMessage("Roopesh"));
// console.log(getMessage("Roopesh 1"));
// console.log(getMessage("Roopesh 2"));
// console.log(getMessage("Roopesh 3"));

import { userName, userCountry, getMessage } from "./b.js";
import { cityName } from "./c.js";

import { userName as meraCustomName } from "./c.js";

console.log("Hello ", userName, userCountry, cityName, meraCustomName);

console.log(getMessage("Roopesh"));
console.log(getMessage("Roopesh 1"));
console.log(getMessage("Roopesh 2"));
console.log(getMessage("Roopesh 3"));
console.log(getMessage("Roopesh 4"));