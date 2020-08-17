import { ByteReader } from '../utilities/reader.js';
import { ByteWriter } from '../utilities/writer.js';

export class Socket extends WebSocket {
    #readBuffer;
    #writeBuffer;

    constructor(uri, bufferSize = 1024, textEncoding = "utf-8") {
        super(uri);

        this.binaryType = 'arraybuffer';
        this.#readBuffer = new ArrayBuffer(bufferSize);
        this.#writeBuffer = new ArrayBuffer(bufferSize);
        this.reader = new ByteReader(new DataView(this.#readBuffer), new TextDecoder(textEncoding));
        this.writer = new ByteWriter(new DataView(this.#writeBuffer), new TextEncoder(textEncoding));
    }

    send() {
        super.send(new DataView(this.#writeBuffer, 0, this.#writeBuffer.offset));
        this.#writeBuffer.offset = 0;
    }
}