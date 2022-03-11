export{}

type Product = {
    id: number;
    name: string
}

const a: number = 10;
const b: number = 20;
const name: string | number = 10;
const age: number = 19;
const status: boolean= true;
const info: object = {};
const stringArr: string[] = ["a","b","c"];
const numberArr: number[] = [1,2,3,4];
const objectArr: object[] = [{id:1}, {id:2}] 

function sum(numA: number,numB: number): number{
    return numA + numB;
}

sum(a,b);
//tsc --watch ten_file