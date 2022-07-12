//DOM MANUPULATION !!!
// var  input= document.getElementById("userinput");
// var button = document.getElementById("enter");
// var ul =document.querySelector("ul");

// function 
// button.addEventListener("click",function(){
// 	//console.log(input.value);
// 	if(input.value.length>0){ 
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
//  	input.value = "";}

// })
// input.addEventListener("keypress",function(event){
// 	if(input.value.length>0 && event.keyCode===13){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));

// 		ul.appendChild(li);
// 		input.value="";
// 	}

// })

//code for background page !!
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


color1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," +color2.value + ")";
	css.textContent= body.style.background + ";"})
color2.addEventListener("input",function(){
	
	body.style.background = "linear-gradient(to right," + color1.value + "," +color2.value + ")";

	css.textContent= body.style.background + ";"})

//time pass code 1;

// var database = [{username:"ravi",
// 				password:"supersecret"}
// 				,
// 				{username:"pappu",
// 				password:"123"
// 			}
// ];

// var newsfeed = [{
// 	username:"shally",
// 	timeline:"javascript is so cool!!!"

// }
// ];

// var usernamePrompt = prompt("whats your user name?");
// var passwordprompt = prompt("whats your password?");

// function uservalid(user,pass){
// 	for (var i=0; i< database.length; i++){
// 		if(database[i].username=== user&&
// 			database[i].password=== pass){
// 			return true;
// 		}

// 	}
// 	return false;
// }

// function signin(user,pass){
// 	if(uservalid(user,pass)){
// 		console.log(newsfeed)

// 	}
// 	else{
// 		console.log("wrong user name and password!!!")
// 	}
// }
// signin(usernamePrompt,passwordprompt);

// //TIME PASS CODE 2
// var list = ["ravi", "papu" , "eret", "sorry"];
// var newlist =[];
// for (var i=0;i<list.length;i++){
// 	//newlist.push(list[i] + "!");
// 	list[i] = list[i] + "!";
// }
// time pass code 3
// const player = "ravi";
// let experiance = 100;
// let wizardlevel = false;
// //when ever curly bracket is used new scope is created
// //for let ||| and for var since its not a new function 
// //wizard level will get ovverwrite and we will get wizard level as true 
// //in both cases..
// if(experiance>90){
// 	let wizardlevel =true;
// 	console.log("inside" , wizardlevel);
// }
// console.log	("outside", wizardlevel);

//time pass code 4

// const objd={
// 	player:"ravi",
// 	experaince:100,
// 	wizardlevel:false,
// }
//can't assign value to constant but can change the object property(keys in python) inside the 
//object even if it is a constant
// var objd1={
// 	player:"ravi",
// 	experaince:100,
// 	wizardlevel:false,
// }

// const player = objd.player;
// const experaince = objd.experaince;
// let wizardlevel = objd.wizardlevel;
// both of this code does exactly same work but second one is much clear
// const {player ,experaince} = objd;
// let{wizardlevel} = objd;

// //timepass code 5
// //opbject properties
// const name = "ravi shirsat";
// // new way of declearing properties vary vary usefull
// const obj ={
// 	[name]:"hello",
// 	[2+5]:"heheeh!"
// }
//TIME PASS CODE 6(doubt)
// const a = "ravi";
// const b = 35;
// const c = true;
// const obj={
// 	a:a,
// 	b:b,
// 	c:c,
// }
//this will be help full in react scetion okkok.
// const obj = {
// 	a
// 	b
// 	c
// }
//time passs code 7
//tamplate strings (cool)
// const name = "ravi";
// const age = 34;
// const pet = "horse";

// const greting = "hellow " + name +"you seem to be" + age +".what a nice" + pet +"you have!";
// const greting1 =`hellow ${name} you seem to be ${age}. what a nice ${pet} you have`;
// #deafault arguments#
// here browser have to idea what age, name and pet is
// function greeting(name = "ravi", age =34,pet ="cat"){
// 	return `hellow ${name} you seem to be ${age}. what a nice ${pet} you have`;

// }
//#symbols#
// let sym = Symbol();
// let sym1 =Symbol('ravi');
// let sym2 = Symbol('ravi');
// even though sym1 is equal to sym2 . sym1=== sym2 is false.so,we can know that there will be no conflict.
//this symbols can be used for object properties so that they don't collide and be one.
//TIME PASS CODE 9
//#ARRROW FUNCTION#//
function add(a,b){
	return a+b;
}
const add1 = (a,b)=>a +b ;