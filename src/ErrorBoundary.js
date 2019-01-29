import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }
  refresh() {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      if (this.props.render) return this.props.render;
      return (
        <div className="error-boundary">
          <h2>Error in the app.</h2>
          <button onClick={this.refresh}>Refresh</button>

          <h3>
            If you know what you are looking for, you can check out what went
            wrong.
          </h3>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
