//@ts-check
// Aside from preventing syntax error, "edtr" is also a signature
// indicating it was created on the desktop editor
export default () =>
  "edtr" +
  Math.floor(Math.random() * 1000000).toString(16) +
  Math.floor(Math.random() * 1000000).toString(16) +
  Math.floor(Math.random() * 1000000).toString(16);


//git clone https://github.com/justadudewhohacks/face-api.js.git
// cd face-api.js/examples/examples-nodes # node environment
// cd face-api.js/examples/examples-browser # in the browser
// yarn i
// yarn start # browser
// ts-node faceDetection.ts # run while compiling
// tsc faceDetection # compile
// node faceDetection # run