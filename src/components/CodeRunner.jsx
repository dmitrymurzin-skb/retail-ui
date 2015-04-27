var React = require('react');
var reactTools = require('react-tools');

function run(src, mountNode) {
  try {
    evalCode(src, mountNode);
  } catch (ex) {
    let error = ex.toString();
    if ('textContent' in mountNode) {
      mountNode.textContent = error;
    } else {
      mountNode.innerText = error;
    }
  }
}

function evalCode(_src, mountNode) {
  var Autocomplete = require('ui/Autocomplete');
  var Button = require('ui/Button');
  var Checkbox = require('ui/Checkbox');
  var Icon = require('ui/Icon');
  var Input = require('ui/Input');
  var SearchBox = require('ui/SearchBox');
  var Gapped = require('ui/Gapped');
  var Group = require('ui/Group');
  var Radio = require('ui/Radio');

  eval(reactTools.transform(_src, {
    harmony: true
  }));
}

var CodeRunner = React.createClass({
  render() {
    return <div />;
  },

  componentDidMount() {
    run(this.props.src, this.getDOMNode());
  },

  componentWillReceiveProps(props) {
    run(props.src, this.getDOMNode());
  }
});

module.exports = CodeRunner;
