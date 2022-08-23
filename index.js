const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
 "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//set password length
let passLeng = 15;

//get elements in the DOM
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");



//generate two random passwords
function generateTwo(){

    function generate(){
    //set password variable to empty string
    let password = "";
    //generate the password
for(let passwordChar = 0; passwordChar < passLeng; passwordChar++){
    password += characters[Math.floor(Math.random()*characters.length)]
}

return password;
}

//assign function to variables
let passToRender = generate();
let passToRenderTwo = generate();

//log passwords to console
console.log("pass made with generate: "+passToRender);
console.log("pass made with generate: "+passToRenderTwo);

//render passwords to the DOM
pass1.textContent = passToRender;
pass2.textContent = passToRenderTwo;

}








