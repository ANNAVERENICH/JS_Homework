//Задание 1
/^[a-z]{3,10}\_[a-z]{3,10}(\-\d{4})@[a-z]{2,20}\.com$/i.test('name_surname-1234@gmail.com')

//Задание 2
function reg(a) {
    return /^(\+)([375]|[80])[25]|[29]|[33]|[44]|[17][1-9]{7}/.test(a);

};
reg('8033-777-77-77');
reg('+375-25-777-77-77');

//Задание 3 

//1
function countVowelLetters(text) {
    var a = text.match(/[аяыиоёуюэеaeiouy]/ig);
    return a === null ? 0 : a.length;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('аяыиоёую');

//2
function countVowelLetters(text) {
    return text.replace(/[аяыиоёуюэеaeiouy]/ig, " ").length;
};

countVowelLetters('Шла Саша по шоссе И сосала сУшку');
countVowelLetters('аяыиоёую');