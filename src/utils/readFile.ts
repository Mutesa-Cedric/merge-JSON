import fs from 'fs';

// reading a file
const readFile = (path: string) => {
    let data = fs.readFileSync(path, 'utf-8')
    return data;
}

export default readFile;