class ByteReader extends DataView {
    #decoder;
    #offset;

    constructor(arrayBuffer, decoder) {
        super(arrayBuffer);

        this.#decoder = decoder;
        this.#offset = 0;
    }

    getInt8() {
        const value = super.getInt8(this.#offset);
        this.#offset += 8;
        return value;
    }

    getInt16() {
        const value = super.getInt16(this.#offset);
        this.#offset += 16;
        return value;
    }

    getInt32() {
        const value = super.getInt32(this.#offset);
        this.#offset += 32;
        return value;
    }

    getBigInt64() {
        const value = super.getBigInt64(this.#offset);
        this.#offset += 64;
        return value;
    }

    getUint8() {
        const value = super.getUint8(this.#offset);
        this.#offset += 8;
        return value;
    }

    getUint16() {
        const value = super.getUint16(this.#offset);
        this.#offset += 16;
        return value;
    }

    getUint32() {
        const value = super.getUint32(this.#offset);
        this.#offset += 32;
        return value;
    }

    getBigUint64() {
        const value = super.getBigUint64(this.#offset);
        this.#offset += 64;
        return value;
    }

    getFloat32() {
        const value = super.getFloat32(this.#offset);
        this.#offset += 32;
        return value;
    }

    getFloat64() {
        const value = super.getFloat64(this.#offset);
        this.#offset += 64;
        return value;
    }

    getString() {
        const length = this.getInt32();
        const value = this.#decoder.decode(new Uint8Array(super.buffer, this.#offset, length))
        this.#offset += length;
        return value;
    }
}

class ByteWriter extends DataView {
    #encoder;
    #offset;

    constructor(arrayBuffer, encoder) {
        super(arrayBuffer);

        this.#encoder = encoder;
        this.#offset = 0;
    }

    setInt8(value) {
        super.setInt8(this.#offset, value);
        this.#offset += 8;
    }

    setInt16(value) {
        super.setInt16(this.#offset, value);
        this.#offset += 16;
    }

    setInt32(value) {
        super.setInt32(this.#offset, value);
        this.#offset += 32;
    }

    setBigInt64(value) {
        super.setBigInt64(this.#offset, value);
        this.#offset += 64;
    }

    setUint8(value) {
        super.setUint8(this.#offset, value);
        this.#offset += 8;
    }

    setUint16(value) {
        super.setUint16(this.#offset, value);
        this.#offset += 16;
    }

    setUint32(value) {
        super.setUint32(this.#offset, value);
        this.#offset += 32;
    }

    setBigUint64(value) {
        super.setBigUint64(this.#offset, value);
        this.#offset += 64;
    }

    setFloat32(value) {
        super.setFloat32(this.#offset, value);
        this.#offset += 32;
    }

    setFloat64(value) {
        super.setFloat64(this.#offset, value);
        this.#offset += 64;
    }

    setString(value) {
        const length = value.length;
        this.#encoder.encodeInto(value, new Uint8Array(this.buffer, this.#offset, length));
        this.#offset += length;
    }

    flush() {
        const dataView = new DataView(this.buffer, 0, this.#offset);
        this.#offset = 0;
        return dataView;
    }
}

class Socket extends WebSocket {
    constructor(uri, size = 1024, encoding = "utf-8") {
        super(uri);

        this.binaryType = 'arraybuffer';

        this.reader = new ByteReader(new ArrayBuffer(size), new TextDecoder(encoding));
        this.writer = new ByteWriter(new ArrayBuffer(size), new TextEncoder(encoding));
    }
}