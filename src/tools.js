
 const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; //рандомное значение в указынных границах

 const upperone = (text) => text.charAt(0).toUpperCase() + text.slice(1); //Изменение регистра первой буквы^

 const pickRandom = (list) => list[getRandom(0, list.length - 1)]; //возращение случайного элемента массива

 const range = (count) => Array.from(Array(count).keys());

 const fileDict = (Id) => "dictionary" + Id + ".txt"; //название файла

 const fileProcent = (Id) => "info" + Id + ".txt"; //название файла

 exports.getRandom = getRandom;
 exports.upperone = upperone;
 exports.pickRandom = pickRandom;
 exports.range = range;
 exports.fileDict = fileDict;
 exports.fileProcent = fileProcent;