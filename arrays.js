//1:
var instructor = ["maha",20,"student","female",true];
console.log(instructor);
console.log(instructor[0], instructor[2]);
console.log(instructor.length);
for(var i = 0; i < 5; i++){ //for(var i = 0; i < instructor.length; i++)
    console.log(instructor[i]);
}

//2:
var rules = ["stop", "slow", "go"];
var colors = ["red", "yellow", "green"];
function traffic_signal(){
    for(var i = 0; i < rules.length; i++){
        console.log(rules[i] + "-" +colors[i]);
    }
}
traffic_signal();

//3:
var fruits = ["apple","mango","orange","grapes","banana"];
console.log(typeof[]);
console.log(typeof(fruits));
console.log(typeof{});
console.log(typeof[fruits]);
console.log(typeof{fruits});

//4:
var a = 10;
var b = 19;
var c = 0;
console.log(a/b);
console.log(b/a);
console.log(b/c);
console.log(c/b);
console.log(a/c);
console.log(c/a);

//5:(anonymous function):
//i)
var maha = function(){
    console.log("student");
}
maha();

//ii)
var maha = function(){
    console.log(maha);
}
maha();
