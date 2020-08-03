import html from '../templates/element.js';

export class Element extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-element', Element);