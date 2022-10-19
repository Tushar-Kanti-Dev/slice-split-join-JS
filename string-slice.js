const anthem = 'Amar sonar Banla ami tomay valobasi';
const split = anthem.split(' ');
const split2 = anthem.split('a');
console.log(split2);

// slice - jekhan theke dorkar sekhan theke nite para jabe ei properti er maddhome
const sliceString = anthem.slice(5, 10);
console.log(sliceString);

// substr 
const subString = anthem.substr(27, 35);
console.log(subString);

const joinString = ['John', 'Deo', 'Maik', 'Jornet'];
const joining = joinString.join('   ');
console.log(joining);