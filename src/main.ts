// utility function for reading files with fs
import readFile from "./utils/readFile";
// object paths
import { objectPaths } from "./data/paths";
import addValues from "./utils/addValues";
import combineObjects from "./utils/combineObjects";
import makeJSON from "./utils/makeJSON";

//getting json data
const rawData1 = readFile(objectPaths[0].path);
const rawData2 = readFile(objectPaths[1].path);
const rawData3 = readFile(objectPaths[2].path);

//converting to object
const object1 = JSON.parse(rawData1)
const object2 = JSON.parse(rawData2)
const object3 = JSON.parse(rawData3)

// adding values of object
const valueOfObject1 = addValues(object1);
const valueOfObject2 = addValues(object2);
const valueOfObject3 = addValues(object3);

//making single object
const finalObject=combineObjects([object1,object2,object3]);

//making a json file for final objects
makeJSON(finalObject,'');





