export class ByteWriter {
    #arrayBuffer;
    #dataView;
    #encoder;
    #offset;

    constructor(encoder) {
        this.#encoder = encoder;
    }

    bind(arrayBuffer) {
        this.#arrayBuffer = arrayBuffer;
        this.#dataView = new DataView(this.#arrayBuffer);
        this.#offset = 0;
    }

    writeInt8(value) {
        this.#dataView.setInt8(this.#offset, value);
        this.#offset += 1;
    }

    writeInt16(value) {
        this.#dataView.setInt16(this.#offset, value);
        this.#offset += 2;
    }

    writeInt32(value) {
        this.#dataView.setInt32(this.#offset, value);
        this.#offset += 4;
    }

    writeBigInt64(value) {
        this.#dataView.setBigInt64(this.#offset, value);
        this.#offset += 8;
    }

    setUint8(value) {
        this.#dataView.setUint8(this.#offset, value);
        this.#offset += 1;
    }

    writeUint16(value) {
        this.#dataView.setUint16(this.#offset, value);
        this.#offset += 2;
    }

    writeUint32(value) {
        this.#dataView.setUint32(this.#offset, value);
        this.#offset += 4;
    }

    writeBigUint64(value) {
        this.#dataView.setBigUint64(this.#offset, value);
        this.#offset += 8;
    }

    writeFloat32(value) {
        this.#dataView.setFloat32(this.#offset, value);
        this.#offset += 4;
    }

    writeFloat64(value) {
        this.#dataView.setFloat64(this.#offset, value);
        this.#offset += 8;
    }

    writeString(value) {
        const length = value.length;
        this.writeInt32(length);

        // TODO: Use encodeInto once it gains browser support.
        this.#encoder.encode(value).set(new Uint8Array(this.#arrayBuffer, this.#offset, length));
        this.#offset += length;
    }

    flush() {
        const dataView = new DataView(this.#arrayBuffer, 0, this.#offset);
        this.#offset = 0;
        return dataView;
    }
}