import fs from 'fs'

interface MakeJsonParams {
    object: any;
    path: any
}

const makeJSON = (object: any, path: any) => {
    const jsonFile = JSON.stringify(object);
    fs.writeFile(path, jsonFile, function (err: Error | null) {
        if (err) {
            return console.log(err);
        }
        console.log("The one json file was saved at path : " + path);
    });
}

export default makeJSON;