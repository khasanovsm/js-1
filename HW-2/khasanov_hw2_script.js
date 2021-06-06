// Khasanov Shamil (Хасанов Шамиль)

// 1. Дан код. Почему код даёт именно такие результаты?

console.log("Задание 1");

var a = 1,
  b = 1,
  c,
  d;
c = ++a;
//alert(c); // 2 - потому что использованая префиксная форма оператора инкремента
d = b++;
//alert(d);    // 1 - потому что использованая постфиксная форма оператора инкремента
c = 2 + ++a;
//alert(c); // 5 - потому что использованая префиксная форма оператора инкремента
d = 2 + b++;
//alert(d); // 4 - потому что использованая постфиксная форма оператора инкремента
//alert(a); // 3
//alert(b); // 3

//2. Чему будет равен x в примере ниже? x  = 5

console.log("Задание 2");

var a = 2;
var x = 1 + (a *= 2);
//console.log(`x = ${x}`);
/* 
    a *= 2  ~ a = a * 2
    По правилу ассоциативности внутри скобки сначала рассчитается значение a * 2, далее новое значение будет передано в а. После выполнения этой операции а = 4. 

    Таким образом, конечное значение х = 1 + 4 = 5
 */

/* 
    3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
    Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */

console.log("Задание 3");

var a = 2,
  b = 5;

calculate(a, b);

function calculate(a, b) {
  if ((a >= 0) & (b >= 0)) {
    console.log(`|a - b| = ${Math.abs(a - b)}`);
  } else if ((a < 0) & (b < 0)) {
    console.log(`a * b = ${a * b}`);
  } else {
    console.log(`a + b = ${a + b}`);
  }
}

/* 
    4. Присвоить переменной а значение в промежутке [0..15]. 
    С помощью оператора switch организовать вывод чисел от a до 15. 
    Дополнительное задание. Сделайте решение вторым способом, используя рекурсию.
*/
console.log("Задание 4");
// 4.1  Через switch
console.log(`Методом switch`);
var min = 0,
  max = 15,
  x = Math.round(Math.random() * (max - min) + min);
// console.log(x);
switch (x) {
  case 0: {
    console.log(`0`);
  }
  case 1: {
    console.log(`1`);
  }
  case 2: {
    console.log(`2`);
  }
  case 3: {
    console.log(`3`);
  }
  case 4: {
    console.log(`4`);
  }
  case 5: {
    console.log(`5`);
  }
  case 6: {
    console.log(`6`);
  }
  case 7: {
    console.log(`7`);
  }
  case 8: {
    console.log(`8`);
  }
  case 9: {
    console.log(`9`);
  }
  case 10: {
    console.log(`10`);
  }
  case 11: {
    console.log(`11`);
  }
  case 12: {
    console.log(`12`);
  }
  case 13: {
    console.log(`13`);
  }
  case 14: {
    console.log(`14`);
  }
  case 15: {
    console.log(`15`);
  }
  default: {
    break;
  }
}

//4.2   Через рекурсию

function showInterval(x) {
  console.log(x);
  if (x >= max) {
    return x;
  }
  showInterval(++x);
}

console.log(`Методом рекурсии`);
showInterval(x);

/*
    5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
    Обязательно использовать оператор return.
*/
console.log("Задание 5");

function sum(a, b) {
  return a + b;
}

function extract(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

/* 
    6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
    где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
    В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
    и вернуть полученное значение (использовать switch).
*/

console.log("Задание 6");

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+": {
      return sum(arg1, arg2);
    }
    case "-": {
      return extract(arg1, arg2);
    }
    case "*": {
      return mult(arg1, arg2);
    }
    case "/": {
      return devide(arg1, arg2);
    }
    default: {
      return "Error";
    }
  }
}

console.log(mathOperation(5, 5, "+")); //  10
console.log(mathOperation(5, 5, "-")); //  0
console.log(mathOperation(5, 5, "*")); //  25
console.log(mathOperation(5, 5, "/")); //  1
console.log(mathOperation(5, 6, "=")); //  Error expected

/* 
    7) *Сравнить null и 0. Попробуйте объяснить результат.
*/

console.log("Задание 7");

null > 0; // false
null < 0; // тоже false

// оператор сравнения неявно вызывает метод toPrimitive(). В результате null становится +0. +0 и 0 равны.

null == 0; //   false в соответствии со спецификацей == в JS

null >= 0; //   true
null <= 0; //   false

// Все верно с точки зрения математики, если у нас есть два числа, x и y, и если x не меньше, чем y, тогда x должно быть больше чем y или равно ему.

/* 
    8) С помощью рекурсии организовать функцию возведения числа в степень. 
    Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

console.log("Задание 8");

function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

console.log(power(2, 5));
