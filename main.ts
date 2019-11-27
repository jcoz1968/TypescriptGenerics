import { PartyTent , partyTentData} from './models/partyTent';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { MeetingResource } from './models/meetingResource';
import { Building, buildingData } from './models/building';



function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array <T> {
  let bigRooms: Array<T> = [];
  rooms.forEach(r => { 
    if (r.capacity > minSize) {
      bigRooms.push(r);
    }
  });
  return bigRooms;
}

let bigRooms: Array<PartyTent> = getBigRooms<PartyTent>(partyTentData, 20);
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

