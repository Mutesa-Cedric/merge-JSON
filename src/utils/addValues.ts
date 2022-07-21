
const addValues = (object: any) => {
    let sum: number = 0;
    for (let i = 0; i < object.length; i++) {
        sum += parseInt(object[i].value);
    }
    return sum;
}

export default addValues;