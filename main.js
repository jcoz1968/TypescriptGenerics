"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var partyTent_1 = require("./models/partyTent");
function getBigRooms(rooms, minSize) {
    var bigRooms = [];
    rooms.forEach(function (r) {
        if (r.capacity > minSize) {
            bigRooms.push(r);
        }
    });
    return bigRooms;
}
var bigRooms = getBigRooms(partyTent_1.partyTentData, 20);
console.log(bigRooms);
// let junkDrawer: any[] = ['cool string', 452, true];
// let companies: Array<string> = ['Microsoft', 'Google', 'Amazon'];
// let primeNums: Array<number> = [1, 15];
// let lastValue = primeNums.pop();
// function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
//   return data.splice(amountToShorten, data.length);
// }
// let stringArray: string[] = ['Visual Basic', 'C#', 'T-SQL', 'JavaScript'];
// let fewerLanguages: Array<string> = shortenArray<string>(stringArray, 2);
// console.log(fewerLanguages)
