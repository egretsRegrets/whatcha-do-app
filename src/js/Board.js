import React, { Component } from 'react';
import { v1 } from 'uuid';
import Stage from './Stage';

class Board extends Component {
  state = {
    whatchaDo: {
      lists: [
        {
          id: v1(),
          title: "Here I can put one kind of thing I'm doing stuff for",
          items: [
            {
              id: v1(),
              title: "And here's a thing I did",
              description: 'I can say more about it here'
            }
          ]
        }
      ]
    },
    whatchaGonnaDo: {
      lists: [
        {
          id: v1(),
          title: "Here I can put add a kind of thing I'm going to do stuff for",
          items: [
            {
              id: v1(),
              title: "And here's a thing I'm gonna do",
              description: 'I can say more about it here'
            }
          ]
        }
      ]
    }
  };
  render() {
    return (
      <main>
        <Stage stage={this.state.whatchaDo} />
        <Stage stage={this.state.whatchaGonnaDo} />
      </main>
    );
  }
}

export default Board;
