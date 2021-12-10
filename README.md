# node-red-contrib-pkcs7

A [Node-RED](http://nodered.org/) that parses a PKCS #7 (envelope) file and extracts the underlying file.  
It supports DER, PEM and bare Base64 input.

This node is based on the <b>a href="https://www.npmjs.com/package/@lapo/extractcms">extractCMS</a></b> package, by Lapo Luchini.

## Install

Either use the `Node-RED Menu - Manage Palette - Install`, or run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-pkcs7

## Usage

You pass the content of a PKCS #7 envelope, as a buffer, in the `msg.payload`.

After processing, the file extracted from the envelope is loaded into `msg.payload`; the name of the extracted file (which is the name of the PKCS #7 file, without the `p7m` or similar extension) is returned in `msg.filename`.
