let message: string = "Hi, How are you?";
let numString = "5";
let numNumber = 5;
// numNumber.toLowerCase();
numString.toLowerCase();
message.toLowerCase();
console.log(message);
console.log(numNumber + numString);

//number
let rollNo:number=21418;
let mark=99.23
console.log(typeof(mark));

//boolean
let pass:boolean=true;


//any
let heroAny;
let heroString:string

function getHero(){
    return "IronMan"
}
function getHeroNumber(){
    return 56
}

heroAny = getHero();
heroString=getHero();

heroAny=getHeroNumber();
// heroString=getHeroNumber(); 


export {};
