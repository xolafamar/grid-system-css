// section five part 63

// we must define object by function first example
/*
var PersonProto = {
  calcuateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var johan = Object.create(PersonProto);
// old way  to add method in object

johan.name = "johan";
johan.yearOfBirth = 1990;
johan.job = "teacher";

// difrent way to creat object

var jane = Object.create(PersonProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 19980 },
  job: { value: "designer" }
});
console.log(johan);
console.log(jane);
*/
//طريقه ان اعمل اوبجيت بالشكل ده مفيده جدا جدا ف نظام التوريث وذلك عن طريق ال prototaype

// section 5 part 64
// primitiveis vs object
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
//a هتتغير ل 46 و لكن ال بي هتفضل 23
var obj1 = {
  name: "jone",
  age: "26"
};

var obj2 = obj1;

// muted obj1 age
obj1.age = "30";
console.log(obj1.age);
console.log(obj2.age);
// الهيحصل هنا ان العمر هيتغير في الاتنين و ده يفيد ان لو عامل اوبجيت رئيسي و عاوز اعدل على كل الاوبجيت هيكون بالطريقه دي

// functions
var age = 24;
var obj = {
  name: "jonas",
  city: "lisbon"
};
// انا عامل فنكشن بتاخد اتنين براميدز الاول رقم و تاني عنصر من اوبجيت
function change(a, b) {
  (a = 30), (b.city = "franksoko");
}

change(age, obj);
console.log(age);
console.log(obj.city);


*/
// ايه هيحصل هنا الفنكشن دي هتغير العمر و المدينه و ده يوضح الفرق بين اوبجيت
/*
1- function is a object type
2- function behave like other object
3- we can store function in variable
4- w can pass function as an argument to another function
5- we can returen a function from function



*/

// 65
/*
var year = [1990, 1965, 1937, 2005, 1998, 2016];
// عندك سنين 
function arryCalc(arr, fn) {
  var arrRes = [];

  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcuateAge(el) {
  return 2016 - el;
}
function isFullAge(el) {
  return el >= 18;
}
var ages = arryCalc(year, calcuateAge);
var fullAge = arryCalc(ages, isFullAge);
console.log(ages);
console.log(fullAge);
// انا هنا عملت فنكشن و كول باك فنكشن انها تجيب ال ااري و تنقصه من 2016
*/

//67
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/
/*
// infoke function 
(function(){
  var score = Math.random() * 10;
  console.log(score >= 5);
})() ;
*/
// 68 Closures-en
/*
هنا انا بتعلم حاجه اسمها كلوشر فيمامعناه ان فانكشن هترجع فانكشن تاني 
بتحسب حاجه اسمها العمر الباقي
العمر الباقي ده متوسط عمر انسان ف دوله معينه

*/
function retirement(retirementAge) {
  var a = "years left until retirement";
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;

    console.log(retirementAge - age + a);
  };
}
/*
دلوقتي انا عملت ايه انا عندي فنكشن بترجعع فنشنكشن تانييه 
كل واحده فيهم بتحتاج ل براميدز يمر بيها
فانا بعمل متغير و يكن بسميه اسم محمود المتغير ده = الفنكشن الرئيسية
و بكتب براميد العاوز امرره بداخلها .

2- بعد كدا الفنكشن الجواها ليها براميدز عشان امرره باخد اسمه متغير و بكتب براميدز العاوزه
يمر بداخلها مثال مشروح


3- الفنكشن الداخلية قادره على استدعاء المتغيرات الموجوده ف الفنكشن الأم و هذا ما يسمي clousre


*/
/*
let usa = retirement(60);
usa(1990);
console.log(usa);
// other way to put two parmites

let egyptRetirment = retirement(50)(1995);
console.log(egyptRetirment);

// exam 2 to power of clouser

function askMyWork(job) {
  return function(nameOfJob) {
    if (job === "designer") {
      console.log("this is a good job" + nameOfJob);
    } else if (job === "هناء") {
      console.log("this is a cute girl" + nameOfJob);
    } else {
      console.log("i dont know whhat kind of your work");
    }
  };
}

let ask1 = askMyWork("designer")("ahmed");
let ask2 = askMyWork("هناء")("nurse");
let ask3 = askMyWork("prof")("yasser");

*/
// this a better way to make a cleaner code

//69 bind apply call

var john = {
  name: "johan",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(`hello ${style} and ${timeOfDay} 
      ${name}`);
    } else if (style === "friendly") {
      console.log(`this.name
      hello from js
      ${timeOfDay}`);
    }
  }
};

// other object
var emily = {
  name: "teacher",
  age: 35,
  job: "designer"
};
john.presentation.call(emily, "friendly", "5pm");

/*
1- انا هنا اقدر استخدم method الموجوده ف جون ال اسمها بريسنتيشن ف 
متغير التاني عن طريق call
2- apply
الاختلاف بين الاتنين دول accpet arguments as an arry
3- bind
*/
var johnFriendly = john.presentation.bind(emily, "friendly", "10pm");
//john.presentation.apply(emily, ["friendly", "10pm"]);
// it not work cus the old oject not use arr

//           bulid queiz game

/* 
1- make function have three pramides it will be like object bulid
object by function
2- this function constructor pattern works
3- after that i can bulid quest use this function and var
*/






/*

function Question(question, answer, correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}

// slove invoke function

(function() {
  // go see line 267 now i need put one prototype in all question so iam going to make this way
  //ككدا انا حطيت خاصيه جديده اسمها display بتساوي فنكشن بتعمل الكلام ده
  Question.prototype.displayQuestion = function() {
    // هيختار سؤال عشوائي عشان يطبعه و ده من خلال math.random
    console.log(this.question);

    // ههنا انا قولتها يا جافا اسكريبت فكري معايه  واعملي لوب ل براميدز ال اسمه answer واطبعيه

    for (var i = 0; i < this.answer.length; i++) {
      console.log(i + ": " + this.answer[i]);
    }
  };

  // other protype to check answerrrrrrrr

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    // what i do here ? i will make a comprae it look like valideate
    if (ans === this.correct) {
      console.log("wow this is a right answer");
      sc = callback(true);
    } else {
      alert("srry it worng");
      sc = callback(false);
    }
    // this a method in object i created it befor
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("your score is " + score);
  };
  // bulid couple of question
  /*
in the second parmides iam going to use arry cus
it good to put differnt thing in one parimides
and in this game i have two answer just choise yes or no.

2- the last parimides will be zero 
based on yes and
1 based on No
index start from  0 1 2 3 4 
ف اخر براميدز انا بقول ل اللغه فيما معناه
ان الانديكس الرقمه زيرو ده الاجابه الصحيحة 
و سؤال التاني عاوز الانديكس الاخير يكون الاجابه صحيحه
*/
  var q1 = new Question(
    "is java script the oolest programming language in the world?",
    ["yes", "no"],
    0
  );

  var q2 = new Question(
    `what is the name of this coure's teacher?
`,
    ["johan", "smith", "Jasser"],
    2
  );

  var q3 = new Question(
    "what does best describe coding",
    ["broing", "hard", "fun", "good"],
    1
  );
  // select one random question
  /* ده ف حاله عاوز سؤال واحد بس يظهر لو عاوز اعمل سؤال صح ينتهي ويتنقل للبعده هستخد الأسلوب ده
  var question = [q1, q2, q3];
  // حالا انا هعمل ايه هعمل اختيار رقم عشوائي من الاسئله دي بحيث تظهر للمستخدم عن طريق randm
  // reember why i use math.floor cus if number be  1.8 go to be 1
  var n = Math.floor(Math.random() * question.length);

  // هنا عشان يتم اختيار عشوائي
  question[n].displayQuestion();

  // استخدمت paresint لان المستخدم الرقم هيكتبه هيقرأ استرنج و دي بتحول الاسترنج ل رقم و الاجابه الصحيحه مكتوبه رقم ف براميدز التالت
  var answer = parseInt(prompt("please select the correct answer"));

  question[n].checkAnswer();
*/
  var question = [q1, q2, q3];

  // هنا هعمل فنكشن تحفظ الناتج الهيطلع من اليوزر بمعني الاجابه صحيحه كام مره الغ
  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }
  var keepScroe = score();
  function goToNext() {
    // حالا انا هعمل ايه هعمل اختيار رقم عشوائي من الاسئله دي بحيث تظهر للمستخدم عن طريق randm
    // reember why i use math.floor cus if number be  1.8 go to be 1
    var n = Math.floor(Math.random() * question.length);

    // هنا عشان يتم اختيار عشوائي
    question[n].displayQuestion();

    // استخدمت paresint لان المستخدم الرقم هيكتبه هيقرأ استرنج و دي بتحول الاسترنج ل رقم و الاجابه الصحيحه مكتوبه رقم ف براميدز التالت
    var answer = prompt("please select the correct answer");

    //way to stop a game
    /*  بقول هنا ل جافا اسكريبت لو يوزر مكتبش كلمه اكسيت 
      افضل كملي و هاتي سؤال البعده و لو كتبها هتنهي اللعبه
    */
    if (answer !== "exit") {
      question[n].checkAnswer(parseInt(answer), keepScroe);

      goToNext();
    }
  }
  // iam call this
  goToNext();
})();

*/