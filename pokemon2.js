class Pokemon { 
	constructor(name,level) { 
	this.name = name; 
	this.level = level; 
} 

show() { 
	console.log("ÈÌß ÏÎÊÅÌÎÍÀ: "+this.name+"\nËÅÂÅË: "+this.level); 
} 
} 

class PokemonList { 
	constructor(...params) { 
	this.myList = params.map(i => i); 
} 
push (...pokemons) { 
	this.myList.push(pokemons.map(i => i)); 
} 
shift() { 
	var x = this.myList.shift(); 
	return x; 
} 
pop () { 
	return this.myList.pop(); 
} 
add(name,level){ 
	var newPokemon = new Pokemon(name,level); 
	this.myList.push(newPokemon); 
} 
slice(position, ...count) { 
	console.log(position); 
	var x = count.map(i => i); 
	console.log(x.length); 
	if (x.length==0) { // âçÿòü âñå ýëåìåíòû, íà÷èíàÿ ñ íîìåðà position 
	console.log(this.myList); 


	} 
	else { 

	} 
} 
show(){ 
	console.log(this.myList); 
} 
} 
const pokenons = [{'name':'Pikachu','level':'0'}, {'name':'Sloupok','level':'1'}, {'name':'Lolka','level':'2'}]; 
const objects = pokenons.map( 
obj => new Pokemon(obj.name, obj.level) 
); 
//objects[1].show(); 

//console.log(objects); 


var pokList = new PokemonList(objects);
let lost = [{'name': 'Ivizavr', 'level': 15};
			{'name': 'Venuzavr', 'level': 55};
			{'name':'Charmander', 'level': 12};
			{'name':'Charmeleon', 'level': 31};
			{'name':'Charmeleon', 'level': 31};

]

let  found [{'name': 'Charizard', 'level': 33};
			{'name': 'Squirtle', 'level': 25};
			{'name':'Wartortle', 'level': 14};
			{'name':'Blastoise', 'level': 31};
			{'name':'Charmeleon', 'level': 31};

]