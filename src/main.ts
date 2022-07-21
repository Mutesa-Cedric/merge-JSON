
// // object paths
import { objectPaths } from "./data/paths";

// utility functions
import { addValues, combineObjects, makeJSON, readFile } from "./utils/utils";

// //getting json data
const rawData1 = readFile(objectPaths[0].path);
const rawData2 = readFile(objectPaths[1].path);
const rawData3 = readFile(objectPaths[2].path);

//converting to object
const object1 = JSON.parse(rawData1)
const object2 = JSON.parse(rawData2)
const object3 = JSON.parse(rawData3)
// console.log(typeof object1);

// adding values of object
const valueOfObject1 = addValues(object1);
const valueOfObject2 = addValues(object2);
const valueOfObject3 = addValues(object3);

// making tatal value for each object
object1.value = valueOfObject1;
object2.value = valueOfObject2;
object3.value = valueOfObject3;

//making single object
const finalObject = combineObjects([object1, object2, object3]);
console.log(finalObject)
//making a json file for final objects
makeJSON(finalObject, objectPaths[3].path);




