const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const main = require('./WordRelay');

const Hot = hot(WordRelay); // hoc

ReactDom.render(<Hot />, document.querySelector('#root'));
