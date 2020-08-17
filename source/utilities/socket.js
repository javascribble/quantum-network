export class Socket extends WebSocket {
    constructor(uri, size = 1024, encoding = "utf-8") {
        super(uri);

        this.binaryType = 'arraybuffer';

        this.reader = new ByteReader(new ArrayBuffer(size), new TextDecoder(encoding));
        this.writer = new ByteWriter(new ArrayBuffer(size), new TextEncoder(encoding));
    }
}