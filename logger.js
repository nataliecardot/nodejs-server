const EventEmitter = require('events');
const uuid = require('uuid'); // uuid creates random ID

class Logger extends EventEmitter {
  // Every time we cal log, should show a new ID with the message that's sent
  log(msg) {
    // Call/raise an event (msg is destructuring, same as msg: msg)
    this.emit('message', { id: uuid.v4(), msg });
  }
}

const logger = new Logger();

logger.on('message', data => console.log('Called listener', data));

logger.log('Hello world');
logger.log('Hello universe');

// module.exports = Logger;