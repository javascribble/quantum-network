import { ByteReader } from '../utilities/reader.js';
import { ByteWriter } from '../utilities/writer.js';

export class Socket extends WebSocket {
    #reader;
    #writer;

    constructor(uri, bufferSize = 1024, textEncoding = "utf-8") {
        super(uri);

        this.#reader = new ByteReader(new TextDecoder(textEncoding));
        this.#writer = new ByteWriter(new TextEncoder(textEncoding));
        this.#writer.bind(new ArrayBuffer(bufferSize));

        this.binaryType = 'arraybuffer';
        this.onmessage = event => {
            this.#reader.bind(event.data);
            this.onread(this.#reader);
        };
    }

    write(action) {
        action(this.#writer);
        this.send(this.#writer.flush());
    }
}