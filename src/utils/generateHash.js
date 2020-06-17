// Aside from preventing syntax error, "edtr" is also a signature
// indicating it was created on the desktop editor
export default () =>
  "edtr" +
  Math.floor(Math.random() * 1000000).toString(16) +
  Math.floor(Math.random() * 1000000).toString(16) +
  Math.floor(Math.random() * 1000000).toString(16);
