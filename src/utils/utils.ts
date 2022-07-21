import fs from 'fs';

// reading a file
export const readFile = (path: string) => {
    let data = fs.readFileSync(path, 'utf-8')
    return data;
}


//adding values in an object
export const addValues = (object: any) => {
    let sum: number = 0;
    for (let i = 0; i < object.length; i++) {
        sum += parseInt(object[i].value);
    }
    return sum;
}

//combine objects into one object
export const combineObjects = ([object1, object2, object3]: any) => {
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

//making final json file from resultant object
export const makeJSON = (object: any, path: any) => {
    const jsonFile = JSON.stringify(object);
    fs.writeFile(path, jsonFile, function (err: Error | null) {
        if (err) {
            return console.log(err);
        }
        console.log("The one json file was saved at path : " + path);
    });
}
