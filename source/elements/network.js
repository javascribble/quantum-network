import { Socket } from '../utilities/socket.js';

const { Component, template, define } = quantum;

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