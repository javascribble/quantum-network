import { Socket } from '../utilities/socket.js';

export class Network extends Quantum {
    constructor() {
        super();

        //addEventListener('online', online);
        //addEventListener('offline', offline);
    }

    adapt(api) {
        api.socket = Socket;
    }
}

Network.define('quantum-network', html);