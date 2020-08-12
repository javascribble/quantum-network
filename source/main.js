import * as networkUtilities from './utilities/network.js';
import * as socketUtilities from './utilities/socket.js';

window.quantum = Object.assign(window.quantum || {}, {
    ...networkUtilities,
    ...socketUtilities
});

export * from './utilities/network.js';
export * from './utilities/socket.js';