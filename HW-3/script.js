// Khasanov Shamil

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var num = 3;
var primes = [2];
var flag = false;

while (num <= 100) {
  flag = false;
  if (num > 10 && num % 10 == 5) {
    num = num + 2;
    continue;
  }
  for (primitive of primes) {
    if (primitive * primitive - 1 > num) {
      primes.push(num);
      flag = true;
      break;
    }
    if (num % primitive == 0) break;
  }
  if (!flag) primes.push(num);
  num = num + 2;
}

console.log(primes);

/* 
    2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть  сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от   находящихся в ней товаров.

    3. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function Product(title, price) {
  this.title = title;
  this.price = price;
}

function Item(product, num) {
  this.product = product;
  this.amount = num;
  this.total = product.price * num;
}

var basket = {
  itemList: [],
  total: 0,
  addItem: function (item) {
    this.itemList.push(item);
    this.countBasketPrice(item.total);
  },
  countBasketPrice: function (itemTotal) {
    this.total += itemTotal;
  },
};

var nikeTshirt = new Product("Nike T-Shirt", 250);
var nikeSocks = new Product("Nike Socks", 25);

basket.addItem(new Item(nikeTshirt, 2));
basket.addItem(new Item(nikeSocks, 20));

console.log(`Basket total = ${basket.total}`);

/* 
    4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто}
*/

for (var i = 0; i < 10; console.log(i), i++);

/* 
    4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей  пирамиды должно быть 20 рядов, а не 5:
    x
    xx
    xxx
    xxxx
    xxxxx
*/

for (var i = 1; i < 21; i++) {
  console.log("*".repeat(i));
}
