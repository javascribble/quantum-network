import { Component, define } from '../import.js';
import { Socket } from '../utilities/socket.js';

export class Network extends Component {
    constructor() {
        super();

        //addEventListener('online', online);
        //addEventListener('offline', offline);
    }

    adapt(api) {
        api.socket = Socket;
    }
}

define('quantum-network', Network);