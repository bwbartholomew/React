import { Component } from 'react';

// Класовий компонент зі станом (this.state / this.setState)
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue || 0 };
  }

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  reset = () => {
    this.setState({ count: this.props.initialValue || 0 });
  };

  render() {
    return (
      <section className="card">
        <h2>Класовий компонент: Counter</h2>
        <p className="big-number">{this.state.count}</p>
        <div className="buttons">
          <button onClick={this.decrement}>−</button>
          <button onClick={this.reset}>Скинути</button>
          <button onClick={this.increment}>+</button>
        </div>
      </section>
    );
  }
}

export default Counter;
