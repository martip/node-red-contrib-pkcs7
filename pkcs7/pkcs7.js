const path = require('path');
const CMS = require('@lapo/extractcms');

module.exports = function(RED) {

  function PKCS7Node(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    this.on('input', function(msg, send, done) {

      try {
        const content = CMS.extract(msg.payload);
        msg.payload = content;
        msg.filename = path.parse(msg.filename).name;
        node.send(msg);
      } catch (error) {
        node.error(error, msg)
      }

      // Once finished, call 'done'.
      // This call is wrapped in a check that 'done' exists
      // so the node will work in earlier versions of Node-RED (<1.0)
      if (done) {
        done();
      }
    });

  }

  RED.nodes.registerType('pkcs7', PKCS7Node);
}

