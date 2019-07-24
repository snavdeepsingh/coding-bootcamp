import React, { Component } from 'react';

export default class SubComponent extends Component {
  render() {
    return (
      <div className="subcomponent">
        { this.props.children }
      </div>
    )
  }
}
