"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conferenceRoom_1 = require("./models/conferenceRoom");
function getBigRooms(rooms, minSize) {
    var bigRooms = [];
    rooms.forEach(function (r) {
        if (r.capacity > minSize) {
            bigRooms.push(r);
        }
    });
    return bigRooms;
}
var getLargeRooms;
getLargeRooms = getBigRooms;
var largeRooms = getLargeRooms(conferenceRoom_1.conferenceRoomData, 30);
console.log(largeRooms);
// let bigRooms: Array<PartyTent> = getBigRooms<PartyTent>(partyTentData, 20);
// console.log(bigRooms);
// let junkDrawer: any[] = ['cool string', 452, true];
// let companies: Array<string> = ['Microsoft', 'Google', 'Amazon'];
// let primeNums: Array<number> = [1, 15];
// let lastValue = primeNums.pop();
// function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
//   return data.splice(amountToShorten, data.length);
// }
// let shrinkArray: <U>(original: Array<U>, units: number) => Array<U>;
// shrinkArray = shortenArray;
// console.log(shrinkArray);
// let stringArray: string[] = ['Visual Basic', 'C#', 'T-SQL', 'JavaScript'];
// let fewerLanguages: Array<string> = shortenArray<string>(stringArray, 2);
// console.log(fewerLanguages)
