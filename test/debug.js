import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

document.body.style.visibility = 'visible';

let connection = new HubConnection(new HttpConnection("/chat", {}), new JsonHubProtocol(), this.reconnectPolicy);

connection.on("test", console.log);
connection.start().then(() => connection.invoke("test", "test"));