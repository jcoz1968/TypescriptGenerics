// let junkDrawer: any[] = ['cool string', 452, true];
// let companies: Array<string> = ['Microsoft', 'Google', 'Amazon'];
// let primeNums: Array<number> = [1, 15];
// let lastValue = primeNums.pop();

function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
  return data.splice(amountToShorten, data.length);
}

let stringArray: string[] = ['Visual Basic', 'C#', 'T-SQL', 'JavaScript'];
let fewerLanguages: Array<string> = shortenArray<string>(stringArray, 2);
console.log(fewerLanguages)

