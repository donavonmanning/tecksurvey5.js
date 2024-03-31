const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
guests.unshift("BRUTUS");
guests.indexOf{0} = "BRUTUS";
guests.push("AUGUSTUS", "LUCIA");
guests.indexOf
const spartacusIndex = guests.indexOf("SPARTACUS") =-1;
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);
const specialGuests = guests.slice(0, 3);
const honoredGuests = guests.slice(0, 2); // 
const otherGuests = guests.slice(2); // 
otherGuests.sort(); // 
const sortedGuests = honoredGuests.concat(otherGuests); // 



