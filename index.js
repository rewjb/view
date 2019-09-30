const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Main = require('/src/v1/container/Main');

const Hot = hot(Main); // hoc

ReactDom.render(<Hot />, document.querySelector('#root'));
