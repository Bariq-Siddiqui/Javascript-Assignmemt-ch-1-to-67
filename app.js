//    *** *** *** Chapter # 01  (ALERTS ) *** *** *** 

//   Task # 01

alert("JS Alert Box");

//   Task # 02

alert("Error! Please enter a valid password");

//   Task # 03

alert("Welcome to JS land...                                                                        Happy Coding!");

//   Task # 04

alert("Welcome to JS Land...");
alert("Happy Coding                                                                          Prevent this page from creating additinal dialogs.");

//   Task # 05

console.log("Hello... I can run JS through my web browser's console");


//      *** *** *** Chapter # 02 (VARIABLES FOR STRINGS ) *** *** *** 

//   Task # 01

var Username=prompt("Enter Username","Username is");
alert(Username);

//   Task # 02

var myName=prompt("Enter myname","your Full Name");
alert(myName);

//   Task # 03

var js=prompt("Message","Message is");
alert(js);

//   Task # 04

var stName="Jone";
alert(stName);

var age="15 years old" ;
alert(age);

var course="Certified Mobile Application Development";
alert(course);


//   Task # 05
var pizza = ("PIZZA \n PIZZ \n PIZ \n PI \n P");
alert(pizza);

//   Task # 06

var email="My email address is bariqsiddiqui109@gmail.com";
alert(email);

//    Task # 07

var a="I am trying to learn from the Book A Smarter way to learn JavaScript";
alert(a);

//    Task # 08

var a="Yah! i can write HTML content through Javascript";
document.write(a);

//    Task # 09


var a=("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
alert(a);



//        *** *** *** Chapter # 03 (VARIABLES FOR NUMBERS) *** *** *** 

//    Task # 01

var age="I am 15 years old";
alert(age);

//    Task # 02

var a="You have visited this site 14 times";
alert(a);

//     Task # 03

var a="My birth year is 1990";
document.write(a);
var b="Data type of my declared variable is number";
document.write(b);

//     Task # 04

var a="John Doe ordered 5 T-shirt(s) on XYZ Clothing store";
document.write(a);


//         *** *** *** Chapter # 04 (VARIABLE NAMES: LEGAL & ILLEGAL ) *** *** *** 

//     Task # 01

var a="My Name ";
var b="is";
var c="Muhammad Bariq Kamran Siddiqui"
document.write(a + b + "  " + c);

//      Task # 03


//legal
var a
var data
var Data
var a_1
var firstName


//illegal

//  var 1
//  var 1st_name
//  var &name
//  var %age 
//  var *multiply 

//     Task # 03

var a="Variable names can only contain numbers, $ and -.For example $my_1stVariable";
var b="Variables must begin with a letter, $ or -. For example $name, _name or name";
var c="Variable names are case sensitive";
var d="Variable names should not be JS keywords.";
document.write("<h1>Rules for naming JS variables</h1>");
document.write(a + "<br>" + b + "<br>" + c + "<br>" + d);


//      *** *** *** Chapter # 05 (MATH EXPRESSIONS) *** *** *** 

//       Task # 01

var a=3;
var b=5;
var c=a+b;

document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c);

//      Task # 02

var a=3;
var b=5;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;

document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g + "<br>");

//      Task # 03


var a 
document.write("Value after variable declaration is: " +a+ "</br>")
a = 5
document.write("Initial value: " +a+ "</br>")
a++
document.write("Value after increment is: " +a+ "</br>")
a= a+7
document.write("Value after addition is: " +a+ "</br>")
a--
document.write("Value after decrement is: " +a+ "</br>")
a = a%3
document.write("The remainder is: " +a+ "</br>")

//      Task # 04

var cost=600;
var ticket=5;
var total=cost*ticket;
document.write("Total cost to buy        "  ,  + ticket , "  tickets to a movie is  "  ,total + "  PKR   ");    

//      Task # 05

document.write("Table of 4" + "<br>");
document.write("4" + "x" + "1" + "=" + 2 * 1 + "<br>");
document.write("4" + "x" + "2" + "=" + 2 * 2 + "<br>");
document.write("4" + "x" + "3" + "=" + 2 * 3 + "<br>");
document.write("4" + "x" + "4" + "=" + 2 * 4 + "<br>");
document.write("4" + "x" + "5" + "=" + 2 * 5 + "<br>");
document.write("4" + "x" + "6" + "=" + 2 * 6 + "<br>");
document.write("4" + "x" + "7" + "=" + 2 * 7 + "<br>");
document.write("4" + "x" + "8" + "=" + 2 * 8 + "<br>");
document.write("4" + "x" + "9" + "=" + 2 * 9 + "<br>");
document.write("4" + "x" + "10" + "=" + 2 * 10 + "<br>");


//      Task # 06


var c = 25
var f =(c* 9/5)+32
document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ")
var f = 70
var c =(f-32) * 5/9
document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ")


//      Task # 07

var a=+prompt("Enter prize item 1");
var b=+prompt("Enter quantity item 1");
var c=+prompt("Enter prize item 2");
var d=+prompt("Enter quantity item 2");
var e=+prompt("Enter Shipping charges");
var f=a*b;
var g=c*d;
var h=e+f+g;

document.write("Price of item 1 is  " + a + "<br>");
document.write("Quantity of item 1 is  " + b + "<br>" );
document.write("Price of item 2 is  " + c + "<br>" );
document.write("Quantity of item 2 is  " + d + "<br>" );
document.write("Shipping charges  " + e  + "<br>");
document.write("Total cost of your order is  " + h);

//      Task # 08

var a=+prompt("Total marks:");
var b=+prompt("Marks obtained:");
var c=(b/a)*100;
document.write("Total marks:  " + a + "<br>");
document.write("Marks obtained:  " + b + "<br>" );
document.write("Percentage  " + c + "%");

//      Task # 09

var a=10;
var b= 104.80;
var c= 25;
var d=28;
var e=a*b;
var f=c*d;
var g=e+f;
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR   " + g);

//      Task # 10

var a=+prompt("Enter a number");
var b=(a+5)*10/2;
document.write("Result is  " + b);

//      Task # 11

var a=+prompt("Enter Current Year:");
var b=+prompt("Enter Birth Year:");
var c=a-b;
document.write("Current Year:  " + a + "<br>");
document.write("Enter Birth Year:  " + b + "<br>");
document.write("Your Age is:  " + c);

//      Task # 12

var a=20;
var pi=3.142;
var b=2*pi*a;
var c=pi*a*a;
document.write("<h1>The Geometrizer</h1>");
document.write("Radius of a circle is:  " + a + "<br>");
document.write("The circumference is:  " + b + "<br>");
document.write("The area is:  " + c);

//      Task # 13


var snack = "chocolate chip"
var age = 15
var maxAge = 65
var amntPerDay = 3
var total = (maxAge -age)*amntPerDay

document.write(
    "<h1> The Life Time Calculator</h1>" +
    "Favourite Snack : "+snack+
    "<br/> Current age: " +age+
    "<br/> Estimated Maximum Age: "+maxAge+
    "<br/> Amount old snacks Per day: "+amntPerDay+
    "<br/> You will need: "+total+" "+snack+
    "to last you untill the ripe old age of" +maxAge

)


//              *** *** *** Chapter # 6-9 (MATH EXPRESSIONS )*** *** *** 


//      Task # 1


var a = 10;
document.write(
    "Result: <br/> The value of a is:" +a+
    "<br/> ----------------"+

    "<br/><br/> The value of ++ a is:"+(++a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a++ is:"+(a++)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of  --a is:"+(--a)+
         "<br/>  Now The value of a is:"+a+

    "<br/><br/> The value of a-- is:"+(a--)+
         "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
        ) 

//      Task # 02


var a = 2
var b = 1
var result = --a - --b + ++b + b--;

document.write(" a is ="+a)
document.write("<br/> b is = "+b)
document.write("<br/> result is ="+result +"</br> </br>")

//      Task # 03

var userName = prompt("Enter your Name")
alert("Hello" +userName+" have a good day")

//      Task # 5


var table = prompt("Enter a number for Table","5")
var a = Number(table);
var num = 1
document.write(
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"+
    a+" x "+num+" = "+ (a*num++)+"<br/>"

)

//      Task # 6

var s
var sub1 = prompt("Enter First Subject Name")
var sub2 = prompt("Enter Second SUbject Name")
var sub3 = prompt("Enter Third SUbject Name")
var sub1Marks = prompt("Enter First Subject Marks")
var a = Number(sub1Marks)
var sub2Marks = prompt("Enter Second Subject Marks")
var b = Number(sub2Marks)
var sub3Marks = prompt("Enter Third Subject Marks")
var c= Number(sub3Marks)
var totalMarks = 100

document.write(
              "<table>"+
              "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
              "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
              "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
             "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
             "</table>"
             )


//         *** *** *** Chapter # 9-11 (USER INPUT & CONDITIONAL STATEMENT) *** *** ***

//   Task # 01

var a=prompt("Enter a city name");
if(a=="karachi")
{
    document.write("Welcome to city of lights")
}
else
{
    alert("")
}

//      Task # 02

var a=prompt("Enter Gender");
if(a=="male")
{
    document.write(" Good Morning Sir")
}
else
{
    document.write("Good Morning Ma’am.")
}

//      Task # 03

var a="Signal color";
var b="Message";
var a1="Red";
var a2="Yellow";
var a3="Green";
var b1="Must Stop";
var b2="Ready to move";
var b3="Move now";

document.write(a + " " + " " + " " + b + "<br>" + a1 + " " + " " + " " + b1 + "<br>" + a2 + " " + " " + " " + b2 + "<br>" + a3 + " " + " " + " " + b3);


//      Task # 04

var a=+prompt("Enter  fuel in litres");
if(a<0.25)
{
    document.write(" “Please refill the fuel in your car”")
}
else
{
    document.write()
}


//      Task # 05(a)

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//      Task # 05(b)

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//      Task # 05(c)

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//      Task # 05(d)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//      Task # 05(e)

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

//      Task # 05(f)

if("car" < "cat"){
    alert("car is smaller than cat");
    }

//      Task # 06


var totalMarks = 300;
var sub1 = prompt("Enter Your First Subject Marks")
var sub2 = prompt("Enter Your Second Subject Marks")
var sub3 = prompt("Enter Your Third Subject Marks")
var sub1Marks = Number(sub1)
var sub2Marks = Number(sub2)
var sub3Marks = Number(sub3)
var markObtained = sub1Marks+sub2Marks+sub3Marks
var percentage = markObtained/totalMarks*100

if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
}

if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}

if (percentage >= 60){
    grade = "B";
    remarks = "You Need to improve";
}
if (percentage <= 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.write(
    "<h1>Marks sheet</h1>"+
    "<br/>Total Marks :"+totalMarks+
    "<br/>Marks Obtained :"+markObtained+
    "<br/>Percentage :"+percentage+"%"+
    "<br/>Grade :"+grade+
    "<br/>Remarks :"+remarks

)

//      Task # 07


var number = 10
var userInput = +prompt("Enter the number")
if (number==userInput){
    alert("BINGO! Correct Answer")
}

else if (userInput+1==number){
    alert("Close enough to the correct answer")
}

else{
    alert("You lost!")
}




//      Task # 08 

var a=+prompt("Enter a number");
var b=a%3;
if(b==0)
{
    document.write("The number is divisible by 3")
}
else
{
    document.write("The number is not divisible by 3")
}

//      Task # 09

var a=+prompt("Enter a number");
var b=a%2;
if(b==0)
{
    document.write("The number is even")
}
else
{
    document.write("The number is odd")
}

//      Task # 10

var a=+prompt("Enter a Temperature");

if(a>=40)
{
    document.write("It is too hot outside")
}
else if(a>=30)
{
    document.write("The Weather today is Normal")
}
else if(a>=20)
{
    document.write("Today’s Weather is cool")
}
else if(a>=10)
{
    document.write("OMG! Today’s weather is so Cool")
}

//      Task # 11

var a=+prompt("Enter the First number");
var b=+prompt("Enter the Second number");
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
document.write("<h1>Calculator</h1>");
document.write("Sum of         "  ,  + a , "  and  "  ,b + "  is   " ,c + "<br>");      
document.write(" Differnce of         "  ,  + a , "  and  "  ,b + "  is   " ,d + "<br>");
document.write("   Product of         "  ,  + a , "  and  "  ,b + "  is   " ,e + "<br>");
document.write("  Division of         "  ,  + a , "  and  "  ,b + "  is   " ,f + "<br>");
document.write("   modulus of         "  ,  + a , "  and  "  ,b + "  is   " ,g + "<br>");


//           *** *** *** Chapter 12-13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS) *** *** *** 

//      Task # 01

var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90){
    alert("you input a Capital letter")
} else if (ascii >= 97 && ascii <=122){
    alert("you input a Small letter")
}else if (ascii >= 48 && ascii <=57){
    alert("you input a number")
}
 else{
    alert ("you have done something wrong")
}


//      Task # 02

var a=+prompt("Enter a First Integer");
var b=+prompt("Enter a Second Integer");
if(a===b)
{
    document.write("The two integers are equal")
}
else if(a>b)
{
    document.write("The first integer is larger")
}
else
{
    document.write("The Second integer is larger")
}

//      Task # 03


var number = +prompt("Enter a number");

if (number > 0 ) {
    alert("The given number is Positive")

}

 else if (number < 0 ) {
    alert("The given number is Negative")

}

else alert{( "The given number is zero");}


//      Task # 04

var a=prompt("Enter a Character");
if(a==="a")
{
    document.write("It is a vowel")
}
else if(a==="e")
{
    document.write("It is a vowel")
}
else if(a==="i")
{
    document.write("It is a vowel")
}
else if(a==="o")
{
    document.write("It is a vowel")
}
else if(a==="u")
{
    document.write("It is a vowel")
}
else{
    document.write("It is a consonent")
}

//      Task # 05

var a=prompt("Store correct password in a JS variable");
{
    alert("Asks user to enter his/her password")
}
var b=prompt("Please enter your password");
if(b===a){
    alert("“Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}

//      Task # 06

var greeting;
var hour = 13;
if (hour < 18) {
alert("Good day")
}
else
{
alert("Good evening")
}

//      Task # 07


var time = +prompt("what time is it?");
if(time >= 0000 && time <1200){
    alert("good morning");
}
else if(time >= 1200 && time <1700){
    alert("good afternoon");
}
else if(time >= 1700 && time <1100){
    alert("good evening");
}
else if(time >= 2100 && time <2359){
    alert("good night");
}

//          *** *** *** Chapter # 14-16 (ARRAYS)*** *** *** 

//      Task # 01

var literalArray = [];

//      Task # 02

var objectArray = [];

//      Task # 03

var stringArray = ["karachi", "lahore", "islamabad"];

//      Task # 04

var numberArray = [1,2,3,4,5];

//      Task # 05

var booleanArray = [true,false];

//      Task # 06

var mixedArray = ["a",123,"true","karachi"];

//      Task # 07

var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h1>Qualification</h1>")
for (var i = 0; i <=7; i++){
    document.write(i+1+")"+educationArray[i]+"<br/>")
}


//      Task # 08


var studentName = ["Micheal","John", "Tony"]
var score = [320,230,480];
var percentage = [];
for(var i = 0; i <=2; i++){
    percentage[i] =  score[i] / 500 * 100

}

for (var a = 0; a<=2; a++){
document.write("score of "+studentName[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
}

//      Task # 09


var color = ["Red","Yellow","Green"]
document.write(color+"<br/>");
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning)
document.write(color+"<br/>");
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending)
document.write(color+"<br/>");
color.shift()
document.write(color+"<br/>");
color.pop()
document.write(color+"<br/>");
var update =+prompt("At which index do you want to add color?")
var newColor =+prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
document.write(color+"<br/>");
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");


//      Task # 10


var score = [320,230,480,120]
document.write("Score of students :" +score+"<br/>");
score.sort()
document.write(" Ordered Score of students :" +score);

//      Task # 11


var cities = ["karachi","lahore","quetta","peshawar"];
document.write("cities list: <br/>"+cities+"<br/>")
var selectedCities = cities.slice(2,4)
document.write("selected cities list: <br/>"+selectedCities)

//      Task # 12

var arr = ["This","is","my","cat"]
document.write("array/; <br/>"+arr+"<br/>")
var join = arr.join(" ")
document.write("string: <br/>"+join) 

//      Task # 13


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

//      Task # 14


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
document.write("out : <br/>"+fourthDevice+"<br/>")


//      Task # 15

var arr = ["Apple","Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for(var i=0; i<arr.length;i++){
    document.write("<option>" + arr[i] + "</option>");
}

document.write("</select>");


//     *** *** *** Chapter # 17-20 (ARRAYS AND LOOP) *** *** *** 

//      Task # 01
var num = [[],[],[]]


//      Task # 02
var arr=["0 1 2 3"];
var arr1=["1 0 1 2"];
var arr2=["2 1 0 1"];
document.write(arr + "<br>" + arr1 + "<br>" + arr2);


//      Task # 03

for(var a=1; a<=10; a++)
{
    document.write(a +"<br>")
}

//      Task # 04

var a=+prompt("Enter a number to show its multiplication table");
var b=+prompt("Enter lenght multiplication table");
document.write("Multiplication Table of  " + a + "  Lenght  " + b + "<br>");
for(var i=1; i<=b;i++)
{
    document.write(a + "x" + i + "=" + a*i + "<br>")
}

//      Task # 05

var fruits = ["apple", "banana", "mango", "orange","strawberry"];
document.write(fruits[0] + "<br>" + fruits[1] + "<br>" + fruits[2] + "<br>" + fruits[3] + "<br>" + fruits[4] + "<br>" + "<br>");
document.write("Element at index 0 is" + fruits[0] + "<br>");
document.write("Element at index 1 is" + fruits[1] + "<br>");
document.write("Element at index 2 is" + fruits[2] + "<br>");
document.write("Element at index 3 is" + fruits[3] + "<br>");
document.write("Element at index 4 is" + fruits[4] + "<br>");

//      Task # 06

document.write("<h1>Counting:</h1>");
for(var a=1; a<=15; a++)
{
    document.write(a +",")
}
document.write("<h1>Reverse counting: </h1>");
for(var b=10; b>=1; b--)
{
    document.write(b +",")
}

document.write("<h1>Even:</h1>");
for(var c=0; c<=20; c=c+2)
{
    document.write(c +",")
}

document.write("<h1>Odd:</h1>");
for(var d=1; d<=19; d=d+2)
{
    document.write(d +",")
}

document.write("<h1>Series: </h1>");
for(var d=2; d<=20; d=d+2)
{
    document.write(d +"k"+",")
}

//      Task # 07

var items =  ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter Search Items");
var a=items.indexOf(search);
if(items.indexOf(search) !== -1){
    alert(search + "  is available at index  " + a + "  in our bakery");
}
else{
    alert("We are sorry.  " + search + "  is not available  " + "  in our bakery");

}
//      Task # 08

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min
)

//      Task # 09



var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min+"<br/>"
)


//      Task # 10 

for(var d=5; d<=100; d=d+5)
{
    document.write(d +",")
}



//  ***_//^\\_***   Chapter # 21 to 25 (STRING METHODS)    ***_//^\\_***

//      Task # 01
//Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

var firstname = prompt("Enter the first name");
var lastname = prompt("Enter the last name");
var fullname = firstname + "  " + lastname;
alert(fullname);

//      Task # 02

//Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser

var greet = prompt("Enter favorite mobile phone model");
var length = greet.length;
document.write("My favorite phone is:  " + greet + "<br>" + "Length of string:  " + length );

//      Task # 03

//Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

var string = "Pakistani";
var letter = string.indexOf("n");
document.write("String:  " + string + "<br>" + "Index of 'n':  " + letter);

//      Task # 04

//Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

var word = "Hello World";
var last = word.lastIndexOf("l");
document.write("String:  " + word + "<br>" + "Last Index of 'l':  " + last);

//      Task # 05

//Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser


var string = "Pakistani";
var letter = string.charAt(3);
document.write("String:  " + string + "<br>" + "Character at index of 3:  " + letter);

//      Task # 06

//Repeat Q1 using string concat() method.

var firstname = prompt("Enter the first name");
var lastname = prompt("Enter the last name");
var fullname = firstname.concat(" ", lastname);
alert(fullname);

//      Task # 07

//Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var indexnum = city.indexOf("Hyder");
var firsttext = city.slice(0,indexnum);
var replacingtext ="Islam";
var thirdtext = city.slice(indexnum+5);
document.write("City:  " + city + "<br>" + "After replacement:  " + firsttext + replacingtext + thirdtext);

//      Task # 08

//Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;

var  message = "Ali and Sami are best friends. They play cricket and football together.";
var text =  message.replace(/and/g,"&");
document.write("Message:  " + message + "<br>" + "After replacement:  " + text);


//      Task # 09

//Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.

var value = "472";
var number = parseInt(value);
document.write("Value:  " + value + "<br>" + "Type:  " + "String" + "<br>" + "Value:  " + number + "<br>" + "Type:  " + "Number");

//      Task # 10

//Write a program that takes user input. Convert and
//show the input in capital letters.

var input = "peanuts";
var uppercase = input.toUpperCase();
document.write("User input: " + input + "<br>" + "Upper case:  " + uppercase);

//      Task # 11

//Write a program that takes user input. Convert and
//show the input in title case.

var input = "javascript";
var firstchar = input.slice(0,1);
var firstchar = firstchar.toUpperCase();
var otherchar = input.slice(1);
var otherchar = otherchar.toLowerCase();
document.write("User input: " + input + "<br>" + "Title case:  " + firstchar + otherchar);

//      Task # 12

//Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

var num = "35.36";
var string = num.toString();
checkedNew = string.replace('.', "");
document.write("Number:  " + num + "<br>" + "Result:  " + checkedNew);

//      Task # 13

//Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

var userInput = prompt("Enter Username");
var ascii = userInput.charCodeAt(userInput.length);
if (ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){
    alert("Please enter a valid username");
}

//      Task # 14

//You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:

var items = ["cake","apple pie", "cookie", "chips", "patties"];
var search =prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var search = search.toLowerCase();
var a=items.indexOf(search);
if(items.indexOf(search) !== -1){
    alert(search + "  is available at index  " + a + "  in our bakery");
}
else{
    alert("We are sorry.  " + search + "  is not available  " + "  in our bakery");

}

//      Task # 15

//Write a program to take password as an input from
//user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.

var password =prompt("Enter a password","For example: 123cmad");
var length = password.length;
if(length < 6){
    alert("Please enter 6 characters long")
}
var ascii = password.charCodeAt(0);
if (ascii >= 48 && ascii <= 57){
    alert("Your password is stored in database");
}
else{
     alert("Please enter a valid password");
}


var ascii = password.charCodeAt(password.length-1);
if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122){
    alert("Please enter a valid username");
}

//      Task # 16

//Write a program to convert the following string to an
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.

var university = "University of Karachi";
var reset = university.split("");
document.write(reset);

//      Task # 17

//Write a program to display the last character of a user input.

var userinput = prompt("Enter a word");
var last=userinput.charAt(userinput.length-1);
document.write("User input:  " + userinput + "<br>" + "Last character of input:  " + last);


//  ***_//^\\_***   Chapter # 26 to 30 (MATH METHODS)   ***_//^\\_***

//      Task # 1

//. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var num=+prompt("Enter the number");
if(num < 0){
    alert("Please enter a positive integer")
}
var round= Math.round(num);
var floor= Math.floor(num);
var ceil= Math.ceil(num);
document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);

//      Task # 2

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num=+prompt("Enter the number");
if(num > 0){
    alert("Please enter a negative floating point")
}
var round= Math.round(num);
var floor= Math.floor(num);
var ceil= Math.ceil(num);
document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);

//      Task # 3

//Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value =+prompt("Enter a number");
var num = Math.abs(value);
document.write("The absolute value of  " + value + "  is  " + num);


//      Task # 4

//Write a program that simulates a dice using random()
//method of JS Math class. Display the value of dice in your browser.

var random = Math.floor(Math.random() * 4);
var random1 = Math.floor(Math.random() * 6);
document.write("random dice value:  " + random + "<br>" + "random dice value:  " + random1);

//      Task # 5

//Write a program that simulates a coin toss using random()
//method of JS Math class. Display the value of coin in your
//browser

var headuser =prompt("Enter heads username");
var tailuser =prompt("Enter tails username");

var toss = Math.random()*2;
var floor = Math.floor(toss);
if(floor === 0){
    alert(floor+ "\n" + "random coin value:  " + headuser)
}
else{
    alert(floor+ "\n" +"random coin value:  " + tailuser)
}

//      Task # 6

//Write a program that shows a random number between 1
//and 100 in your browser.

var value=Math.floor((Math.random() * 100) + 1);
document.write(" random number between 1 and 100:  " + value);

//      Task # 7

//Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var user=prompt("Enter your weight in kilograms");
document.write("The weight of user is  " + user + "  kilograms");

//      Task # 8

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var user=+prompt("Enter a number between 1 to 10");
var random = Math.random()*10;
if(user === random){
    alert("Congratulate the user");
}else{
    alert("Try again.")
}


//  ***_//^\\_***   Chapter # 31 to 34 (DATE METHODS)   ***_//^\\_***

//      Task # 1

//Write a program that displays current date and time in your browser.

var date = new Date();
document.write(date);


//      Task # 2

// Write a program that alerts the current month in words.
// For example December.

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
document.write("Current month:  " + n);

//      Task # 3

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var d = new Date();
var b = d.toString();
var n = b.slice(0,3);
document.write(n);

//      Task # 4

// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
alert("Today is  " + n);
if(n=== "Saturday" || n=== "Sunday"){
    alert("It’s Fun day")
}else{
alert("Today is  " + n);
}

//      Task # 5

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var d = new Date();
var b = d.toString();
var n = b.slice(8,10);
if( n >=1 && n<=15){
    alert("First fifteen days of the month");
}else{
    alert("Last days of the month");
}

//      Task # 6

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var d = new Date();
var t = d.getTime();
var m = t/(1000*60*60);
document.write("Current Date:  " + d + "<br>" + "Elapsed milliseconds since january 1, 1970:  " + t + "<br>" + "Elapsed minutes since january 1, 1970:  " + m);

//      Task # 7

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var d = new Date();
var n = d.getHours();
if( n >= 0 && n <= 11){
    alert("Its AM");
}
else{
    alert("Its PM")
}

//      Task # 8

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var d = new Date(2020, 11, 31, 00, 00,00);
document.write("Later Date:  " + d);

//      Task # 9

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var dob = new Date(2015, 06, 18);
var dobmili=dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili-dobmili;
var day=(diff/(1000*60*60*24))
var day=Math.floor(day);
document.write(day + "  day have passed since 1st Ramdan, 2015");

//      Task # 10

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var dob = new Date(2015);
var dobmili=dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili-dobmili;
var day=(diff/1000)
var day=Math.floor(day);
document.write("On reference date  " + today + "<br>" + day + "  seconds had passed since begining of 2015");

//      Task # 11

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var d = new Date();
var a = new Date(86400000*18432);
document.write("Current date:  " + d  + "<br>" + "1 hour ago,it was  " + a);

//      Task # 13

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var dob = new Date(prompt("Enter your birthday","jan 1, 1970"));
var dobmili=dob.getTime();
var a = dob.toString();
var d = a.slice(10,15);
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili-dobmili;
var day=(diff/(1000*60*60*24*30*12))
var age=Math.floor(day);
document.write("Your age is  " + age + "<br>" + "Your birth Year is  " + d);

//      Task # 14


// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var cname = prompt("Enter the customer name");
var cmonth = prompt("Enter the current month");
var units = +prompt("Enter the units");
var Charges = 16;
var amount = units*Charges;
var latechrges = 350;
var gamount =latechrges+amount;
document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer Name:  " + cname + "  Customer" + "<br>" + "Month:  " + cmonth + "<br>" + "Number of units:  " + units + "<br>" + "Charges per unit:  " + Charges + "<br>" +"<br>" + "Net Amount Payable (within Due Date):  " + amount + "<br>" + "late payment surcharge:  " + latechrges + "<br>" +"Gross Amount Payable (after Due Date):  " +gamount);


//  ***_//^\\_***   Chapter # 35 to 38 (FUNCTION)   ***_//^\\_***

//      Task # 01

// Write a function that displays current date & time in your browser.

function date(){
    var date = new Date();
    document.write(date);
}
date();

//      Task # 02

// Write a function that takes first & last name and then it
// greets the user using his full name.

function greets(){
    var fname = prompt("Enter the first name");
    var lname = prompt("Enter the last name");
    var fullname = fname.concat(" ", lname);
    document.write(fullname);
}
greets();

//      Task # 03


// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function add(){
    var a=+prompt("Enter a first number");
    var b=+prompt("Enter a second number");
    var z = a + b;
    return z;
}

var g = add()
alert(g);

//      Task # 04


// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calc(){
    var num1 =+prompt("Enter the first number");
    var opr =prompt("Enter the operator");
    var num2 =+prompt("Enter the second number");
    if(opr === "+"){
       return num1 + num2
   }
   else if(opr === "-"){
       return num1 - num2
   }
   else  if(opr === "*"){
       return num1 * num2
   }
   else  if(opr === "/"){
       return num1 / num2
   }
   else  if(opr === "%"){
       return num1 % num2
   }
   else{
       return "Incorrect Operator!"
   }
}
var result=calc();
document.write("<h1>Calculator</h1>" + "<br>"+ result );

//      Task # 05

// Write a function that squares its argument.
function square(){
    var a =prompt("Enter a number")
    var b = a*a;
    return b;  
   }
   var c =square();
   alert(c);

   //      Task # 06

//Write a function that computes factorial of a number.

function factorial(){
    var num = +prompt("Enter the factorial of a number");
    var fact = 1;
    for(var i=num; i>=1;i--){
        fact=fact*i;
    }
    return fact;
}
var result = factorial();
alert(result);

//      Task # 07

//Write a function that take start and end number as inputs
//& display counting in your browser.

function counting(){
    var snum = +prompt("Enter the start number");
    var lnum = +prompt("Enter the end number");
    for(var i=snum; i<=lnum;i++){
        document.write(i+"<br>")
    }
}
var result = counting();

//      Task # 08

// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(){
    function calculateSquare(){  
    var b = +prompt("Enter the base");
    var p = +prompt("Enter the perpendicular");
        var base = b*b;
        var per = p*p;
        var h=base+per;
        var hypotenuse =h*h;
        return hypotenuse; 
       }
       var result=calculateSquare();
       return result;
}
var result1=calculateHypotenuse();
alert(result1);

//      Task # 09

// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function area(){
    var width = 10;
    var height=+prompt("Enter the height");
    a = width * height;
    return a;
}
var result = area();
alert(result);

//      Task # 10

// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam

function palindrome(){
    var name =prompt("Enter the name");
    var split = name.split("").reverse().join("");
    if(name===split){
        alert("It is palindrome");
    }
else{
    alert("It is not palindrome");
}
}
var result = palindrome();

//      Task # 11

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


function uppercase(str) 
{
  var array1 = str.split(' ');
  var newarray1 = [];

  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
alert(uppercase("the quick brown fox"));

//      Task # 12

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert(find_longest_word('Web Development Tutorial'));

//      Task # 13

// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

alert(char_count('JSResourceS.com', 'o'));


//      Task # 14

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function Geometrizer(){
    function calcCircumference(){
        var pi = 3.14;
        var r=prompt("Enter the radius");
        var circum = 2*pi*r;
        document.write("Circumference of circle  " + circum);
    }
    function calcArea(){
        var rr = r*r;
        a=pi*rr;
        document.write("Area of circle  " + a);
    }
    return calcCircumference + calcArea;
    }
    var result=Geometrizer(); 

//       ***__//\\__***  Chapter # 38 to 42  *** __//\\__ ***
//       ***__//\\__***  FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS   *** __//\\__ ***

//      Task No # 01

//  Write a custom function power ( a, b ), to calculate the value of a raised to b.

//      Solution;
function myFunction() {
    var a =+prompt("Enter the base;");
    var b=+prompt("Enter the power");
    value=Math.pow(a, b); 
    document.write("Power is"+" "+a +"<br>");
    document.write("Base is"+" "+b+"<br>");
    document.write("a raised to b :"+" "+value);
}
myFunction();

//      Task No # 02      

//  Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

//      Solution;

var a =+prompt("Enter any year");
    b=a%4;
switch (b){
    
    case 0:
        document.write("This year is a Leap year:")
        break;
    
    default:
        document.write("This year is not a Leap year:")
    
    }

//      Task No # 03      

//  If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
//area = S(S − a)(S − b)(S − c)
//where, S = ( a + b + c ) / 2
//Calculate area of triangle using 2 functions

//      Solution;
function firstFunction(){
    var a =+prompt("Enter the first side of triangle");
    var b =+prompt("Enter the second side of triangle");
    var c =+prompt("Enter the third side of triangle");
    var d = a+b+c;
    var S= d/2;
    var e =S-a;
    var f=S-b;
    var g=S-c;
    
    function secondFunction(){
        var area = S*e*f*g;
    alert("The Area of Triangle is:   "+ area);
    }
    secondFunction();
    }
    firstFunction();
    
//      Task No # 04   

//  Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


//      Solution;
function mainFunction(){
    var marks1 =+prompt("Enter the marks of first student");
    var marks2 =+prompt("Enter the marks of second student");
    var marks3  =+prompt("Enter the marks of third student");
    function average(){
        total=marks1+marks2+marks3;
        avg=total/3;
        document.write("The average of marks  " + avg+"<br>");
    }
    function percentage(){
        per=total/3;
        document.write("The percentage of marks  "+per+"%");
    }
    average();
    percentage();
}
mainFunction();    

//      Task No # 05   

//  You have learned the function indexOf. Code your own custom
//function that will perform the same functionality. You can code
//for single character as of now.


//      Solution;
function myFunction() {
    var str = "Hello world, welcome to the universe.";
    var n = str.indexOf("welcome");
    alert(n);
  }
  myFunction();

//      Task No # 08

//  The distance between two cities (in km.) is input through the
//keyboard. Write four functions to convert and print this
//distance in meters, feet, inches and centimeters.


//      Solution;
function mainFunction() {
    var km =+prompt("Enter distance between two cities in km");
    function meTer(){
       var meter = km *1000;
       document.write("The distance between two cities in meters  :" + meter + "<br>");
    }
    function feEt(){
        var feet = km *3280.8;
        document.write("The distance between two cities in feets  :" + feet +"<br>");
    }
    function incHes(){
        var inche = km *39370;
        document.write("The distance between two cities in inches  :" + inche + "<br>");
    }
    function centiMeter(){
        var centimeter = km /0.00001;
        document.write("The distance between two cities in centimeters  :" + centimeter);
    }
    meTer();
    feEt();
    incHes()
    centiMeter()
  }
  mainFunction();  

//      Task No # 10

//A cashier has currency notes of denominations 10, 50 and
//100. If the amount to be withdrawn is input through the
//keyboard in hundreds, find the total number of currency notes
//of each denomination the cashier will have to give to the withdrawer.

//      Solution;
function currEncy(){
    var a =+prompt("Enter amount to withdraw:");
    var b =Math.floor( a/100);
    var c = b*100;
    var d = a-c;
    var e=Math.floor( d/50);
    var f = e*50;
    var g = c+f;
    var h = a-g;
    var i = Math.floor( h/10);
    document.write("You will have  " + b + "  hundred notes  " + e + "  fifty notes  " + i + "  ten notes")

}
currEncy();



//       ***__//\\__***  Chapter # 43 to 48  *** __//\\__ ***
//       ***__//\\__***    EVENTS    *** __//\\__ ***

//      Task No # 01

//  Show an alert box on click on a link.

//      Solution;
// <a href="#" onclick="alert('Hello world')">Click Me</a>

//      Task No # 02

//  Display some Mobile images in browser. On click on an
//image Show the message in alert to user.


//      Solution;
{/* <div>
<div><img src="https://tse4.mm.bing.net/th?id=OIP.6HNGtNeUyujnn9EACMYwiQHaEK&pid=Api&P=0&w=349&h=197" alt="iphone" width="200" height="200"><button onclick="btn()">Iphone</button></div>
<div><img src="https://tse3.mm.bing.net/th?id=OIP.UIPLNwNzKaUwX8BJgH2yIAHaD4&pid=Api&P=0&w=289&h=152" alt="oppo" width="200" height="200"><button onclick="btn()">Oppo</button></div>
<div><img src="https://tse4.mm.bing.net/th?id=OIP.n0iqAYeUzJyiLOiIKoKN3wHaEK&pid=Api&P=0&w=276&h=156" alt="sumsung" width="200" height="200"><button onclick="btn()">Sumsung</button></div>
<div><img src="https://tse4.mm.bing.net/th?id=OIP.jM8ktumjaLSZ96P4z8a6IgHaD4&pid=Api&P=0&w=295&h=155" alt="infinix" width="200" height="200"><button onclick="btn()">Infinix</button></div>
</div> */}
function btn(){
    alert("Thanks for purchasing a phone from us");
}

//      Task No # 03

//  Display some Mobile images in browser. On click on an
//image Show the message in alert to user.


//      Solution;

/* <table border="1">
<tr>
    <td>First Student</td>
    <td><input type="text"  id="result1"></td>
    <td><button onclick="ddlt1()">Delete</button></td>
</tr>
<tr>
    <td>Second Student</td>
    <td><input type="text"  id="result2"></td>
    <td><button onclick="ddlt2()">Delete</button></td>
</tr>
<tr>
    <td>Third Student</td>
    <td><input type="text"  id="result3"></td>
    <td><button onclick="ddlt3()">Delete</button></td>
</tr>
<tr>
    <td>Fourth Student</td>
    <td><input type="text"  id="result4"></td>
    <td><button onclick="ddlt4()">Delete</button></td>
</tr>
<tr>
    <td>Fifth Student</td>
    <td><input type="text"  id="result5"></td>
    <td><button onclick="ddlt5()">Delete</button></td>
</tr>
<tr>
    <td>Sixth Student</td>
    <td><input type="text"  id="result6"></td>
    <td><button onclick="ddlt6()">Delete</button></td>
</tr>
<tr>
    <td>Seven Student</td>
    <td><input type="text"  id="result7"></td>
    <td><button onclick="ddlt7()">Delete</button></td>
</tr>
<tr>
    <td>Eight Student</td>
    <td><input type="text"  id="result8"></td>
    <td><button onclick="ddlt8()">Delete</button></td>
</tr>
<tr>
    <td>Nine Student</td>
    <td><input type="text"  id="result9"></td>
    <td><button onclick="ddlt9()">Delete</button></td>
</tr>
<tr>
    <td>Ten Student</td>
    <td><input type="text"  id="result10"></td>
    <td><button onclick="ddlt10()">Delete</button></td>
</tr>

</table> */


function ddlt1(){
    var dlt=document.getElementById("result1");
    dlt.value = " ";
}
function ddlt2(){
    var dlt=document.getElementById("result2");
    dlt.value = " ";
}
function ddlt3(){
    var dlt=document.getElementById("result3");
    dlt.value = " ";
}
function ddlt4(){
    var dlt=document.getElementById("result4");
    dlt.value = " ";
}
function ddlt5(){
    var dlt=document.getElementById("result5");
    dlt.value = " ";
}
function ddlt6(){
    var dlt=document.getElementById("result6");
    dlt.value = " ";
}
function ddlt7(){
    var dlt=document.getElementById("result7");
    dlt.value = " ";
}
function ddlt8(){
    var dlt=document.getElementById("result8");
    dlt.value = " ";
}
function ddlt9(){
    var dlt=document.getElementById("result9");
    dlt.value = " ";
}
function ddlt10(){
    var dlt=document.getElementById("result10");
    dlt.value = " ";
}

//      Task No # 04

// Display an image in browser. Change the picture on mouseover and set the
//first picture on mouseout.


//      Solution;

//  <img width="500" onmouseover="changepic()" id="pic" onmouseout="returnpic()" src="https://tse1.mm.bing.net/th?id=OIP.De3hyX3_sLa0lmx6XGvX8AHaDu&pid=Api&P=0&w=322&h=162" alt="car">

function changepic(){
    var pic = document.getElementById("pic");
    pic.src="https://tse3.mm.bing.net/th?id=OIP.n8k5qwwTRyXfRBl9j7OD3QHaEK&pid=Api&P=0&w=274&h=155";
}
function returnpic(){
    var pic = document.getElementById("pic");
    pic.src="https://tse1.mm.bing.net/th?id=OIP.De3hyX3_sLa0lmx6XGvX8AHaDu&pid=Api&P=0&w=322&h=162";
}

//      Task No # 05

//Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


//      Solution;

    // <div>
    // <button onclick="increaseStart()">Increase</button>
    // <button onclick="decreaseStart()">Decrease</button>
    // <h1 id="nmbr">0</h1>
    // </div>

    var nmbr = 0;
    var number = document.getElementById("nmbr");
    function incRease(){
        nmbr++
        number.innerHTML=nmbr;
    }
    function increaseStart(){
        interval= setInterval(incRease,1000) 
    }
    
    var number = document.getElementById("nmbr");
    function decRease(){
        nmbr--
        number.innerHTML=nmbr;
    }
    function decreaseStart(){
        interval= setInterval(decRease,1000) 
    }


//       ***__//\\__***  Chapter # 49 to 52  *** __//\\__ ***
//       ***__//\\__***    EVENTS    *** __//\\__ ***

//      Task No # 01

//Create a signup form and display form data in your web
//page on submission.


//      Solution;


// <table>
// <form action="">
//     <tr>
//         <td>Name</td>
//         <td><input type="text" id="name"></td>
//     </tr>
//     <tr>
//         <td>Gmail</td>
//         <td><input type="email" id="gmail"></td>
//     </tr>
//     <tr>
//         <td>Password</td>
//         <td><input type="password" id="password"></td>
//     </tr>
//     <tr><td><input type="submit" value="Submit" onclick="mainFunction()"></td></tr>
// </form>
// </table>


function mainFunction(){
    function getName(){
        var getname =document.getElementById("name");
        console.log(getname.value);
   
    }
    function getGmail(){
        var getgmail =document.getElementById("gmail");
        console.log(getgmail.value);
   
    }
    function getPassword(){
        var getpassword =document.getElementById("password");
        console.log(getpassword.value);
   
    }
    getName();
    getGmail();
    getPassword();
}
 
//      Task No # 02

// Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

//      Solution;

// <div>
// <div><img src="https://tse2.mm.bing.net/th?id=OIP.bGPOZrUyKBjRYlqYBGqAPwHaEK&pid=Api&P=0&w=268&h=152" alt="infinx"></div>
// <div><p id="para">Infinix Note 7 6GB <a href="javascript:void(0)" onclick="readMore()">Read More</a></p></div>
// </div>

function readMore(){
    var text="Infinix Note 7 6GB Dimensions	173.4 x 79 x 8.8 mm Weight	206 Gram SIM	Dual Sim, Dual Standby (Nano-SIM) Color Shades	Forest Green, Aether Black, Bolivia Blue UI	XOS 6.0 Back Camera (Main)	Quad Camera: 48 MP, f/1.7, 25mm + 2 MP macro lens + 2 MP depth sensor + low light video camera, Quad LED Flash Selfie Camera (Front)	16 MP, LED Flash, Video ([email protected]) Camera Features	Phase Detection, Geo-tagging, Panorama, HDR, Video ([email protected]) Display Size	6.95 Inches Internal	128GB Built-in, 6GB RAM Battery	(Li-Po Non removable), 5000 mAh Prize Rs. 27,999";
    var readmore=document.getElementById("para");
    readmore.innerHTML=text;

}

//        ***__//\\__***  Chapter # 52 to 57  *** __//\\__ ***


// html File

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

// </head>
// <style>
//   .img{
//     width: 300px;
//     height: 200px;
//   }
//   .showimg{
//     width: 450px;
//   }
// </style>
// <body>
//     <div>
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse1.mm.bing.net/th?id=OIP.3d9SOzDjp65mN168xSx3hAAAAA&pid=Api&P=0&w=404&h=171" alt="car1">
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse4.mm.bing.net/th?id=OIP.Q5_dHFzCOUiA0Xon_ta4hQHaEK&pid=Api&P=0&w=307&h=174" alt="car2">
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse1.mm.bing.net/th?id=OIP.jcsueIfIMC-Ct-hD15msQQHaEo&pid=Api&P=0&w=306&h=192" alt="car3">
//         <img class="img" onclick="showImage(this)" data-toggle="modal" data-target="#exampleModal" src="https://tse4.mm.bing.net/th?id=OIP.rEa51vpYwZhfWn39rkdbNgHaDk&pid=Api&P=0&w=356&h=172" alt="car4">
//     </div>
    
//   <!-- Modal -->
//   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLabel">Car Image</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//         <img class="showimg" src="" alt="" id="modalImage">
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>



    
// <script src="app.js"></script>
//     <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
// <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
// </body>
// </html>

function showImage(e){
    console.log(e);
    var modalImage=document.getElementById("modalImage");
    modalImage.src=e.src;
}

//       ***__//\\__***  Chapter # 58 to 67  *** __//\\__ ***
//       ***__//\\__***    DOM    *** __//\\__ ***

// Part (1)i Get element of id “main-content” and assign them in a variable.
var maincontent =document.getElementById("main-content");
console.log(maincontent);
// Part (1)ii Display all child elements of “main-content” element.
console.log(maincontent.childNodes);
// Part (1)iii  Get all elements of class “render” and show their innerHTML in browser.
var render =document.getElementsByClassName ("render");
console.log(render);
// Part (1)iv  Fill input value whose element id first-name using javascript.
var first_name = document.getElementById("first-name");
var fname = document.createTextNode("Muhammad Bariq");
first_name.appendChild(fname);
console.log(first_name);
// Part (1) v Repeat part iv for id ”last-name” and “email”

var last_name = document.getElementById("last-name");
var lname = document.createTextNode("Kamran");
last_name.appendChild(lname);
console.log(last_name);
var email = document.getElementById("email");
var emai = document.createTextNode("bariqsiddiqui109@gmail.com");
email.appendChild(emai);
console.log(email);
// Part (2)i What is node type of element having id “form-content”
var formcontent =document.getElementById("form-content");
console.log(formcontent.nodeType);
// Part (2)ii Show node type of element having id “lastName” and its child node.
var lastname =document.getElementById("last-name");
console.log(lastname.nodeType);
console.log(lastname.childNodes);
// Part (2)iii Update child node of element having id “lastName”.

var laname =document.getElementById("last-name");
console.log(laname);

// Part (2)iv Get First and last child of id “main-content”
var maincontent =document.getElementById("main-content");
console.log(maincontent.firstChild);
console.log(maincontent.lastChild);

// Part (2)v Get next and previous siblings of id “lastName”.
var lastname =document.getElementById("last-name");
console.log(lastname.nextSibling);
console.log(lastname.previousSibling);

// Part (2)vi Get parent node and node type of element having id “email”
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);