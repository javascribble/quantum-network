import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

document.body.style.visibility = 'visible';

const size = 1024;
const encoding = "utf-8";

const arrayBuffer = new ArrayBuffer(size);
const dataView = new DataView(arrayBuffer);
const writer = new quantum.ByteWriter(dataView, new TextEncoder(encoding));
const reader = new quantum.ByteReader(dataView, new TextDecoder(encoding));

writer.setInt32(7);
writer.setFloat32(1.123124);
writer.setString("Test string");
console.log(reader.getInt32());
console.log(reader.getFloat32());
console.log(reader.getString());