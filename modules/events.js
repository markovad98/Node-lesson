// Получаем класс
const EventEmmiter = require('events');

// получаем методы on и emit
class Logger extends EventEmmiter {
    log(msg) {
        // Вызываем событие msg и вторым параметром передаем данные
        this.emit('msg', `${msg}, ${Date.now()}`)
    }
}

const logger = new Logger();

// Подписываемся на событие msg, вторым параметром принимаем коллбек в который прокинутся переданные данные
logger.on('msg', data => {
    console.log(data);
});

logger.log('Hello, from Events');