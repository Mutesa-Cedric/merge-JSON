import addValues from "./addValues";

const combineObjects = ([object1, object2, object3]: any) => {
    const finalObject: any = {};
    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            finalObject[key] = object1[key];
        }
    }
    for (const key in object2) {
        if (object2.hasOwnProperty(key)) {
            finalObject[key] = object2[key];
        }
    }
    for (const key in object3) {
        if (object3.hasOwnProperty(key)) {
            finalObject[key] = object3[key];
        }
    }

    finalObject.value = addValues([object1, object2, object3]);
    return finalObject;
}

export default combineObjects;

