export class ByteWriter {
    #arrayBuffer;
    #dataView;
    #encoder;
    #offset;

    constructor(encoder) {
        this.#encoder = encoder;

        this.writeBoolArray = value => this.writeArray(value, this.writeBool.bind(this));
        this.writeInt8Array = value => this.writeArray(value, this.writeInt8.bind(this));
        this.writeInt16Array = value => this.writeArray(value, this.writeInt16.bind(this));
        this.writeInt32Array = value => this.writeArray(value, this.writeInt32.bind(this));
        this.writeBigInt64Array = value => this.writeArray(value, this.writeBigInt64.bind(this));
        this.writeUint8Array = value => this.writeArray(value, this.writeUint8.bind(this));
        this.writeUint16Array = value => this.writeArray(value, this.writeUint16.bind(this));
        this.writeUint32Array = value => this.writeArray(value, this.writeUint32.bind(this));
        this.writeBigUint64Array = value => this.writeArray(value, this.writeBigUint64.bind(this));
        this.writeFloat32Array = value => this.writeArray(value, this.writeFloat32.bind(this));
        this.writeFloat64Array = value => this.writeArray(value, this.writeFloat64.bind(this));
        this.writeStringArray = value => this.writeArray(value, this.writeString.bind(this));
    }

    bind(arrayBuffer) {
        this.#arrayBuffer = arrayBuffer;
        this.#dataView = new DataView(this.#arrayBuffer);
        this.#offset = 0;
    }

    writeBool(value) {
        this.#dataView.setInt8(this.#offset, value ? 1 : 0);
        this.#offset += 1;
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

    writeUint8(value) {
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
        new Uint8Array(this.#arrayBuffer, this.#offset, length).set(this.#encoder.encode(value));
        this.#offset += length;
    }

    writeArray(value, delegate) {
        const length = value.length;
        this.writeInt32(length);
        for (let i = 0; i < length; i++) {
            delegate(value[i]);
        }
    }

    flush() {
        const dataView = new DataView(this.#arrayBuffer, 0, this.#offset);
        this.#offset = 0;
        return dataView;
    }
}