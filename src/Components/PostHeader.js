import React, { Component } from 'react';

export default class PostHeader extends Component {
  render() {
    return (
      <div className="posts__post__header">
        <img
          className="posts__post__header__avatar"
          src={this.props.avatar + this.props.name + '@adorable.io.png'}
          height="32px"
          alt={this.props.name}
        />
        <p className="posts__post__header__name">{this.props.name}</p>
      </div>
    );
  }
}
