import { Socket } from '../utilities/socket.js';

export class Network extends quantum.Component {
    constructor() {
        super();

        //addEventListener('online', online);
        //addEventListener('offline', offline);
    }

    integrate(api) {
        api.socket = Socket;
    }
}

quantum.define('quantum-network', Network);