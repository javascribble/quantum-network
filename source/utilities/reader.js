export class ByteReader {
    #dataView;
    #decoder;
    #offset;

    constructor(dataView, decoder) {
        this.#dataView = dataView;
        this.#decoder = decoder;
        this.#offset = 0;
    }

    get offset() {
        return this.#offset;
    }

    set offset(value) {
        this.#offset = value;
    }

    getInt8() {
        const value = this.#dataView.getInt8(this.#offset);
        this.#offset += 8;
        return value;
    }

    getInt16() {
        const value = this.#dataView.getInt16(this.#offset);
        this.#offset += 16;
        return value;
    }

    getInt32() {
        const value = this.#dataView.getInt32(this.#offset);
        this.#offset += 32;
        return value;
    }

    getBigInt64() {
        const value = this.#dataView.getBigInt64(this.#offset);
        this.#offset += 64;
        return value;
    }

    getUint8() {
        const value = this.#dataView.getUint8(this.#offset);
        this.#offset += 8;
        return value;
    }

    getUint16() {
        const value = this.#dataView.getUint16(this.#offset);
        this.#offset += 16;
        return value;
    }

    getUint32() {
        const value = this.#dataView.getUint32(this.#offset);
        this.#offset += 32;
        return value;
    }

    getBigUint64() {
        const value = this.#dataView.getBigUint64(this.#offset);
        this.#offset += 64;
        return value;
    }

    getFloat32() {
        const value = this.#dataView.getFloat32(this.#offset);
        this.#offset += 32;
        return value;
    }

    getFloat64() {
        const value = this.#dataView.getFloat64(this.#offset);
        this.#offset += 64;
        return value;
    }

    getString() {
        const length = this.getInt32();
        const value = this.#decoder.decode(new Uint8Array(this.#dataView.buffer, this.#offset, length))
        this.#offset += length;
        return value;
    }
}