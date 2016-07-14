//  ====================================================================================================
//  Программа считывает двузначное число и выводит через пробел каждую цифру отдельно.
//  ====================================================================================================
//  Входные данные:
//  Натуральное число из промежутка от 10 до 99 включительно.
//  ====================================================================================================
//  Выходные данные:
//  Два одноцифровых числа, разделенных пробелом.
//  ====================================================================================================
//  Ввод: 23
//  Вывод: 2 3
//  ====================================================================================================

class NumberDivider {
  constructor(number) {
    this.number = number;
  }
  separate() {
    if(this.number > 9 && this.number < 100) {
      let number = this.number.toString().split("");
      return `${number[0]} ${number[1]}`;
    } else {
      console.log(`Цыфра ${this.number} не подходит. Нужно ввести цыфру из промежутка от 10 до 99.`);
    }
  }
}
(function() {
  let number = new NumberDivider(parseInt(prompt(`Введите цыфру из промежутка от 10 до 99.`)));
  console.log(number.separate());
})();
