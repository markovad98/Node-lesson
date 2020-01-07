const fs = require('fs');
const path = require('path');

// Создание директорий
fs.mkdir(path.join(__dirname, '..', 'notes'), err => {
    if (err) {
        throw new Error(err);
    } else {
        console.log('Папка была создана');
    }
});

// Создание файлов с опциональным контентом
fs.writeFile(
    path.join(__dirname, '..', 'notes', 'notes.txt'),
    'Hello, Node.js',
    err => {
        if (err) throw new Error(err);

        // запись в файл
        fs.appendFile(
            path.join(__dirname, '..', 'notes', 'notes.txt'),
            ' from appendFile',
            (err) => {
                if (err) throw new Error(err);
            }
        )
    }
);

//Чтение файла
fs.readFile(
    path.join(__dirname, '..', 'notes', 'notes.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw new Error(err);

        console.log(data);
    }
);

// Переименование файла
fs.rename(
    path.join(__dirname, '..', 'notes', 'notes.txt'),
    path.join(__dirname, '..', 'notes', 'renamedNotes.txt'),
    err => {
        if (err) throw new Error(err);

        console.log('Файл был переименован');
    }
)