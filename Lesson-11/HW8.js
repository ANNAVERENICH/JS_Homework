
//Задание 1
function filterNumbersArr(numbers) {
    var newArr = [];
    var el = numbers;

    var newArr = el.map(function (numbers) {
        return numbers.length;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2, 7, 3, 5]);

//Задание 2 

function getFirst(number) {
    var arrNew = [];
    var numbers = number;

    var arrNew = numbers.filter(function (number) {
        return number >= 0;
    });

    return arrNew;
}

getFirst([-1, 0, 2, 34, -2, 7, 3, 5]);


//Задание 3
function isPalindrome(word) {
    var word = word.toLowerCase();
    return word == word.split('').reverse().join('');
}

isPalindrome('шалаш');
isPalindrome('шалаШ');
isPalindrome('привет');

//Задание 4

function areAnagrams(w1, w2) {
    var w1 = w1.toLowerCase();
    var w2 = w2.toLowerCase();

    return w1.split('').sort().join('') === w2.split('').sort().join('');
}

areAnagrams('кот', 'отк');
areAnagrams('коТ', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

//Задание 5

function divideArr(arr, n) {
    var a = 0;
    var arrLenght = arr.length;
    var c = [];
    for (var a = 0; a < arrLenght; a += n) {
        newArr = arr.slice(a, a + n);
        c.push(newArr);
    }
    return c;
}
divideArr([1, 2, 3, 4], 2); 
divideArr([1, 2, 3, 4, 5], 3);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); 