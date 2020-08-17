export class ByteWriter extends DataView {
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