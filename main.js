// let junkDrawer: any[] = ['cool string', 452, true];
// let companies: Array<string> = ['Microsoft', 'Google', 'Amazon'];
// let primeNums: Array<number> = [1, 15];
// let lastValue = primeNums.pop();
function shortenArray(data, amountToShorten) {
    return data.splice(amountToShorten, data.length);
}
var stringArray = ['Visual Basic', 'C#', 'T-SQL', 'JavaScript'];
var fewerLanguages = shortenArray(stringArray, 2);
console.log(fewerLanguages);
