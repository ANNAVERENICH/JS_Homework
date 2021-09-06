
//Задание 1

function filterNumbersArr(numbers) {
    var newArr = [];
    var el = numbers;

    var newArr = el.filter(function (numbers) {
        return numbers >= 0;
    });

    return newArr;
}

filterNumbersArr([-1, 0, 2, 34, -2, 7, 3, 5]);

//Задание 2 

function getFirst(number) {
    var arrNew = [];
    var numbers = number;

    var arrNew = numbers.find(function (number) {
        return number >= 0;
    });

    return arrNew;
}

getFirst([-1, 2, 34, -2, 7, 3, 5]);


//Задание 3
function isPalindrome(word) {
    return word.split('').reverse().join('').toLowerCase() == word.toLowerCase();
}

isPalindrome('шалаш');
isPalindrome('шалаШ');
isPalindrome('привет');

//Задание 4

function areAnagrams(w1, w2) {
    return w1.toLowerCase().split('').sort().join('') === w2.toLowerCase().split('').sort().join('');
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