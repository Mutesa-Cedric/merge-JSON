import fs from 'fs'

interface MakeJsonParams {
    object: any;
    path: any
}

const makeJSON = (object: any, path: any) => {
    const jsonFile = JSON.stringify(object);
    fs.write(path, jsonFile);
}

export default makeJSON;