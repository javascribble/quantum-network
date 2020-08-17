export class ByteReader extends DataView {
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