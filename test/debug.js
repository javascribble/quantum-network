import '/node_modules/@javascribble/quantum/source/main.js';
import { ByteWriter, ByteReader } from '/source/main.js';

document.body.style.visibility = 'visible';

const size = 1024;
const encoding = "utf-8";

const writer = new ByteWriter(new TextEncoder(encoding));
const reader = new ByteReader(new TextDecoder(encoding));

const arrayBuffer = new ArrayBuffer(size);
writer.bind(arrayBuffer);
reader.bind(arrayBuffer);

writer.writeInt32(7);
writer.writeFloat32(1.123124);
writer.writeString("Test string");
console.log(reader.readInt32());
console.log(reader.readFloat32());
console.log(reader.readString());