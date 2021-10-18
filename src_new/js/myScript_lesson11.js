"use strict"
// let age = 100;
// let name = `string: ${age}`;

// let book = {
//     name: "Web 2.0",
//     author: "Roman",

// }

// let book;

// book = true && false || !(true && true);


// console.log(typeof book);
// console.log(book);

// book  = Boolean(4);

// console.log(typeof book);
// console.log(book);

//--------------------------------


// do{
//     console.log(count);
//     count++;

// }
// while (count < 5)

// console.log("finsh");

//for(начало, условие, шаг цикла)

// for (let count_2 = 0; count_2 < 3; count_2++) {

//     for (let count = 0; count < 5; count++) {
//         console.log(count);
//         if (count == 2) continue forOne;
//     }
// }
// console.log("finsh");

//---------------------------------------------------------

// function LocationOne(age, bolee, menee) {

//     if(age > 18){
//         bolee();
//     }
//     else {
//         menee();
//     }
//     console.log(age);  
// }
// function less() {
//     console.log("Менее 18");  

// }

// function more() {
//     console.log("Более 18");  
// }

// LocationOne(5, more, less);       

//------------------------------------------------------------

// function locationOne(numberOne, numberTwo) {
//     let temp = numberOne * numberTwo;
//     return temp;
// }



// console.log(locationOne(5, 4));

//================================================================

// function getCube(numberOne, numberTwo) {
//     let result = 1;

//     for (let i = 0; i < numberTwo; i++){
//         result*= numberOne;
//     }

//     return result;
// }

// console.log(getCube(2, 8));

//===========================================

// function getCube(numberOne, numberTwo) {                                                    // первая итерация это 3                                            // снова проверяем по второму кругу                 // на третьем круге срабатывает наш "numberTwo === 1" 
//     if (numberTwo === 1){                                      // если numberTwo это 1      // 3 != 1, поэтому выполняется второй return                        // numberTwo = 2 != 1                               // и с помощью return вытаскивается наше число 2
//         return numberOne;                                      // мы возвращаем numberOne   
//     }
//     else{
//         return numberOne * getCube(numberOne, numberTwo - 1)                                //а он говорит, что нам нужно numberOne(пока ещё двойка) умножить   //нам нужно numberOne(пока ещё двойка) умножить         
//     }                                                                                       //на эту же функцию, только с параметрами (2 и 3-1)                 //на эту же функцию, только с параметрами (2 и 2-1)     
// }

// console.log(getCube(2, 8));


//=====================================================================================================

// let someFunction;

// if (true){
//     someFunction = function(){
//     console.log("its work")
//     return 13;
// }  
// }

// console.log(someFunction());

// function getCube(numberOne, numberTwo) {  
//     if (numberTwo === 1){                    
//         return numberOne; 
//     }
//     else{
//         return numberOne * getCube(numberOne, numberTwo - 1)   
//     }                                               
// }

//==================================================================

// let getCube = (numberOne, numberTwo) => {

//     console.log("arrows")
//     return numberOne * numberTwo;
// } 

// console.log(getCube(1,6));

//===========================================

// Планирование функций

// let getCube = (numberOne, numberTwo) => {

//     console.log("arrows")
//     return numberOne * numberTwo;
// }

// let count = 0;

// let int = setInterval(function () {
//     console.log("hi");
//     count++;
//     if (count === 5)
//         clearInterval(int);
// }, 1000);

// setTimeout(function () {
//     console.log("hi");
// }, 2000);

//======================================

// function createMessage(text, name){
//     return name + ", " + text + "!";
// }

// function showMessage(message){
//     console.log(message);
// }

// function iniMessage(text, name){
//     showMessage(createMessage(text, name));
// }

// iniMessage("у вас одно новое сообщение", "Роман")

//======================================================

// let part = "book";

// function createBook(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let book = {
//     name: "JS",
//     age: 3,
//     [part]: "Описание:",
//     author: {
//         name: "Roman",
//         surname: "Marfin",
//     }
// };

// let bookTwo = {
//     name: "Yeahnot",
// }
// bookTwo.age = 10;
// bookTwo["new character"] = true;
// bookTwo.author = {
//         name: "Roman",
//         surname: "Marfin",    
// }

// console.log(book.author.name);

// console.log(createBook("Roman", "30"));
// console.log(createBook("Roma", "22"));

// console.log(bookTwo);

// delete bookTwo.author;

// console.log(bookTwo);

//=============================================

// let part = "book";


// let book = {
//     name: "JS",
//     age: 3,
//     [part]: "Описание:",
//     author: {
//         name: "Roman",
//         surname: "Marfin",
//     }
// };
// // console.log(book);

// // Object.assign(book, {name: "Roman", age: 50});

// // console.log(book);

// // if ("name" in book){
// //     console.log(book.name);
// // }

// for (let key in book){
//     console.log(key);
//     console.log(book[key]);
//     console.log(book.author[key]);
// }

//-----------------------------------------------------

// let part = "book";


// let book = {
//     name: "JS",
//     age: 3,
//     [part]: "Описание:",
//     author: {
//         name: "Roman",
//         surname: "Marfin",
//     },
//     showName(){
//         console.log(this.name);
//     }
// };

// let bookTwo = book;
// book = null;
// bookTwo.showName();

//====================================

// let part = "book";


// let book = {
//     name: "JS",
//     age: 3,
//     [part]: "Описание:",
//     author: {
//         name: "Roman",
//         surname: "Marfin",
//     },
// };

// function Book (name, age){

//     this.name = name;
//     this.age = age;
// }

// console.log(new Book ("Andrew", 25));
// let newBook = new Book ("Andriiew", 24);

// console.log(newBook);

//==============================================

// Массивы

// let arr = [
//     "One",
//     "Two",
//     15,
//     true,
//     function(){
//         console.log("its work");
//     }
// ];

// let matrix = [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
// ]

// let arr2 = arr;

// arr[0] = "Три";
// arr[5] = false;

// // console.log(arr[4]); 
// // console.log(matrix[0][1], matrix[2][2]);
// // console.log(arr.length);
// // console.log(arr2);
// // console.log(arr);

// // arr.unshift("newVal"); // добавляет элемент в конец
// // arr.push("newVal"); // добавляет элемент в начало
// // arr.pop(); // вытаскивает из начала элемент
// // arr.shift(); // вытаскивает из конца элемент

// // arr.splice(1,2);

// if(Array.isArray(arr)){
//     console.log(arr);   
// }

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);

// }

// for (let i = 0; i < matrix.length; i++){
//     for(let j = 0; j < matrix[i].length; j++)
//     console.log(matrix[i][j]);
// }

// for (let arrItem of arr){
//     console.log(arrItem);
// }

// arr.forEach(function(item, index, array){
//     console.log("item: " + item + ", index: " + index + ", array: " + array)
// })

//================================================================================

//Алерты

// alert("Hi!");
// console.log("text");

// if(confirm("Hi?")){
//     console.log("Hi!");
// }else{
//     console.log("Ну и до свидания)");
// }

// let age = prompt("How old are you?", 21);

// console.log(age);
$(document).ready(function () {
    // $('#hello').text("Hi, bro");
    $('.footer').css("border", '2px solid red');

    //$('.footer').parent().css("border", '2px solid red');

    $('.footer').children().css("border", '2px solid red');

    // $('.container').find('p').css("border", '2px solid red');
    
    $('li:eq(5)').css("border", '2px solid red');

    // $('.row:has(.col-10)').css("border", '2px solid red');

    $('.mail:empty').css("border", '2px solid red');

    $('a[href="http://google.ru"]').css("border", '2px solid red');
    $('a[href$="ru"]').css("border", '2px solid red');
})

// Events

// $(document).ready(function (){
//      $('h1').mouseenter(function(){
//         alert("Hi!");
//         $(this).toggleClass("green");
//     })
// });

// $(document).ready(function (){
//      $('input').focus(function(){
//         console.log("focus");
//     })
// });

// $(document).ready(function(){

//     $('p').click(function(){
//     $(this).delay(1000).hide(1000).delay(1000).show(2000);    
//     })
    
// })

// $(document).ready(function(){

//     $('p').click(function(){
//     $(this).animate({opacity: 0.25}, 2000);    
//     })
    
// })

// $(document).ready(function(){

//     $('p').click(function(){
//     $(this).slideUp(2000).slideDown(1000);    
//     })
    
// })

// $(document).ready(function(){

//     $('img').click(function(){
//         $(this).fadeOut(500, function(){
//             $(this).attr("src","img/1.jpg").fadeIn(500);
//         });
//     });
    
// })

// $(document).ready(function(){

//     $('#bigP').click(function(){
//         $(this).html("<span>Новое содержимое</span>!");
//         });
    
// });

// $(document).ready(function(){

//     $('#bigP').click(function(){
//         $(this).prepend("<span>Новое содержимое</span>!");
//         });
// });

// $(document).ready(function(){

//     $('#bigP').click(function(){
//         $(this).after("<span>Новое содержимое</span>!");
//         });
    
// });

// $(document).ready(function(){

//     $('#bigP').click(function(){
//         $(this).wrap("<div class = 'wrapper'></div>");
//         });
    
// });

// $(document).ready(function(){

//     $('#bigP').click(function(){
//         $(this).remove("");
//         });
    
// });