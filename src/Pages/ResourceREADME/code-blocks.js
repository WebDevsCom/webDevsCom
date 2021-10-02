import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/lib';
import 'highlight.js/styles/dracula.css';

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(el) {
    this.codeEl = el;
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    if (this.props.language === null) return;
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    return (
      <pre>
        <code className={`language-${this.props.language}`} ref={this.setRef}>
          {this.props.value}
        </code>
      </pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: '',
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
