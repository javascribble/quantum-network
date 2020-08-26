export class ByteReader {
    #arrayBuffer;
    #dataView;
    #decoder;
    #offset;

    constructor(decoder) {
        this.#decoder = decoder;

        this.readBoolArray = () => this.readArray(this.readBool.bind(this));
        this.readInt8Array = () => this.readArray(this.readInt8.bind(this));
        this.readInt16Array = () => this.readArray(this.readInt16.bind(this));
        this.readInt32Array = () => this.readArray(this.readInt32.bind(this));
        this.readBigInt64Array = () => this.readArray(this.readBigInt64.bind(this));
        this.readUint8Array = () => this.readArray(this.readUint8.bind(this));
        this.readUint16Array = () => this.readArray(this.readUint16.bind(this));
        this.readUint32Array = () => this.readArray(this.readUint32.bind(this));
        this.readBigUint64Array = () => this.readArray(this.readBigUint64.bind(this));
        this.readFloat32Array = () => this.readArray(this.readFloat32.bind(this));
        this.readFloat64Array = () => this.readArray(this.readFloat64.bind(this));
        this.readStringArray = () => this.readArray(this.readString.bind(this));
    }

    bind(arrayBuffer) {
        this.#arrayBuffer = arrayBuffer;
        this.#dataView = new DataView(this.#arrayBuffer);
        this.#offset = 0;
    }

    readBool() {
        const value = this.#dataView.getInt8(this.#offset);
        this.#offset += 1;
        return value === 1;
    }

    readInt8() {
        const value = this.#dataView.getInt8(this.#offset);
        this.#offset += 1;
        return value;
    }

    readInt16() {
        const value = this.#dataView.getInt16(this.#offset);
        this.#offset += 2;
        return value;
    }

    readInt32() {
        const value = this.#dataView.getInt32(this.#offset);
        this.#offset += 4;
        return value;
    }

    readBigInt64() {
        const value = this.#dataView.getBigInt64(this.#offset);
        this.#offset += 8;
        return value;
    }

    readUint8() {
        const value = this.#dataView.getUint8(this.#offset);
        this.#offset += 1;
        return value;
    }

    readUint16() {
        const value = this.#dataView.getUint16(this.#offset);
        this.#offset += 2;
        return value;
    }

    readUint32() {
        const value = this.#dataView.getUint32(this.#offset);
        this.#offset += 4;
        return value;
    }

    readBigUint64() {
        const value = this.#dataView.getBigUint64(this.#offset);
        this.#offset += 8;
        return value;
    }

    readFloat32() {
        const value = this.#dataView.getFloat32(this.#offset);
        this.#offset += 4;
        return value;
    }

    readFloat64() {
        const value = this.#dataView.getFloat64(this.#offset);
        this.#offset += 8;
        return value;
    }

    readString() {
        const length = this.readInt32();

        // TODO: Use decodeFrom once someone figures it out.
        const value = this.#decoder.decode(new Uint8Array(this.#arrayBuffer, this.#offset, length))
        this.#offset += length;
        return value;
    }

    readArray(delegate) {
        const array = [];
        const length = this.readInt32();
        for (let i = 0; i < length; i++) {
            array.push(delegate());
        }

        return array;
    }
}