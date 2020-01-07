const path = require('path');
// Абсолютный путь до файла
console.log(__filename);
// Абсолютный путь до директории
console.log(__dirname);
// имя файла
console.log(path.basename(__filename));
// Абсолютный путь до директории файла
console.log(path.dirname(__filename));
// Расширение файла
console.log(path.extname(__filename));
// Объект содержащий root, dir, base, ext, name файла
console.log(path.parse(__filename));
// Соединяет строки
console.log(path.join(__dirname, 'test', 'second.html'));
// Генерирует абсолютный или относительный путь
console.log(path.resolve(__dirname, 'test', 'second.html'));
