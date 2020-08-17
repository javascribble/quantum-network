import * as networkUtilities from './utilities/network.js';
import * as readerUtilities from './utilities/reader.js';
import * as socketUtilities from './utilities/socket.js';
import * as writerUtilities from './utilities/writer.js';

window.quantum = Object.assign(window.quantum || {}, {
    ...networkUtilities,
    ...readerUtilities,
    ...socketUtilities,
    ...writerUtilities
});

export * from './utilities/network.js';
export * from './utilities/reader.js';
export * from './utilities/socket.js';
export * from './utilities/writer.js';