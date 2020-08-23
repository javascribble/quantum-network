export class Network extends quantum.Component {
    constructor() {
        super();

        // addEventListener('online', online);
        // addEventListener('offline', offline);
    }

    integrate(api) {
        const { options } = api;
    }
}

quantum.define('quantum-network', Network);