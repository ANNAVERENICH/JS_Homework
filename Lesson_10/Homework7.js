//Задание 1

function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + 'кормаю');
};

function Cat(name) {
    this.name = name;
    this._foodAmount = 50;
}


Cat.prototype.constructor = Cat;
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.stroke = function () {

    console.log('Гладим кота');
    return this;
};
Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);

    console.log('Кот доволен ^_^');
    return this;
};
var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik.null;

//Задание 2

function deepClone(obj) {
    if (obj === null) return null;
    var clone = Object.assign({}, obj);

    Object.keys(clone).forEach(function (key) {
        if (typeof obj[key] === "object") {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
        return clone[key];
    });

    return Array.isArray(obj) && obj.length
        ? (clone.length = obj.length) && Array.from(clone)
        : Array.isArray(obj)
            ? Array.from(obj)
            : clone;
}

var initialObj = {
    string: "Vasya",
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: "Petrov",
        object2: {
            array2: [{}, {}],
        },
        object3: {},
    },
    method: function () {
        alert("Hello");
    },
};



var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = "Vasya";
clonedObj.array.push(2);
console.log(clonedObj);
console.log(initialObj);


//Задание 3

function useObject(obj1, obj2) {
    if (typeof obj1 === typeof obj1) {
        if (typeof obj1 === "object" && obj1 != null) {
            var a = true;
            for (var key in obj1) {
                if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
                    if (!useObject(obj1[key], obj2[key])) {
                        a = false;
                    }
                } else {
                    a = false;
                }
                if ((Array.isArray(obj1[key]) && obj1[key].length) && (Array.isArray(obj2[key]) && obj2[key].length)) {
                    for (i = 0; i < obj1[key].length; i++) {
                        for (с = 0; с < obj2[key].length; с++) {
                            if (obj2[key][с] != obj1[key][i]) {
                                return true;
                            }
                        }
                    }
                }
            }
            return a;
        } else {
            return obj1 === obj2;
        }
    } else {
        return false;
    }
}


var obj = {
    these: { name: 'Vasya', boolean: true },
    array: ['Petya', 'Anya', 'Dasha'],
    object: 1
};

console.log(useObject(obj, obj));
console.log(useObject(obj, { 
    these: { name: 'Vasya', boolean: true }, object: 1 }));
console.log(useObject(obj, 
    { these: 1, object: 2, object2: 3 }));





/*
ДОМАШНЕЕ ЗАДАНИЕ
  
  Задание 3:
    Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
    (+ массивы и функции), а также любого уровня вложенности. Для определения длины объектов разрешается использовать
    метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).*/