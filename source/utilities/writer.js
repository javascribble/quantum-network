export class ByteWriter {
    #dataView;
    #encoder;
    #offset;

    constructor(dataView, encoder) {
        this.#dataView = dataView;
        this.#encoder = encoder;
        this.#offset = 0;
    }

    get offset() {
        return this.#offset;
    }

    set offset(value) {
        this.#offset = value;
    }

    setInt8(value) {
        this.#dataView.setInt8(this.#offset, value);
        this.#offset += 8;
    }

    setInt16(value) {
        this.#dataView.setInt16(this.#offset, value);
        this.#offset += 16;
    }

    setInt32(value) {
        this.#dataView.setInt32(this.#offset, value);
        this.#offset += 32;
    }

    setBigInt64(value) {
        this.#dataView.setBigInt64(this.#offset, value);
        this.#offset += 64;
    }

    setUint8(value) {
        this.#dataView.setUint8(this.#offset, value);
        this.#offset += 8;
    }

    setUint16(value) {
        this.#dataView.setUint16(this.#offset, value);
        this.#offset += 16;
    }

    setUint32(value) {
        this.#dataView.setUint32(this.#offset, value);
        this.#offset += 32;
    }

    setBigUint64(value) {
        this.#dataView.setBigUint64(this.#offset, value);
        this.#offset += 64;
    }

    setFloat32(value) {
        this.#dataView.setFloat32(this.#offset, value);
        this.#offset += 32;
    }

    setFloat64(value) {
        this.#dataView.setFloat64(this.#offset, value);
        this.#offset += 64;
    }

    setString(value) {
        const length = value.length;
        this.setInt32(length);
        this.#encoder.encodeInto(value, new Uint8Array(this.#dataView.buffer, this.#offset, length));
        this.#offset += length;
    }
}