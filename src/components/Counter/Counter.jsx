import React from 'react';
// import { List } from 'components/List/List';

export class Counter extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.good = this.good.bind(this);
    this.neutral = this.neutral.bind(this);
    this.bad = this.bad.bind(this);
  }

  state = {
    // counter: 0,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrement = allBtn =>
  //   onClick = { handleClick } -> onClick={ () => handleClick(option) }

  handleIncrement = evt => {
    const allButtons = evt.target.innerHTML;
    this.setState(state => ({
      [allButtons]: state[allButtons] + 1,
    }));
  };

  good() {
    this.setState(prevStateGood => ({ good: prevStateGood.good + 1 }));
  }
  neutral() {
    this.setState(prevStateNeutral => ({
      neutral: prevStateNeutral.neutral + 1,
    }));
  }
  bad() {
    this.setState(prevStateBad => ({ bad: prevStateBad.bad + 1 }));
  }
  total() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  percent() {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(0);
  }

  render() {
    return (
      <>
        <h2>
          Please leave feedback
          {/* {this.state.counter} */}
        </h2>
        {/* <List contents={['good', 'neutral', 'bad']} /> */}
        <button onClick={this.handleIncrement}>good</button>
        <button onClick={this.handleIncrement}>neutral</button>
        <button onClick={this.handleIncrement}>bad</button>

        {this.total() > 0 ? (
          <>
            <h2>Statisctic</h2>

            <ul>
              <li>good {this.state.good}</li>
              <li>neutral {this.state.neutral}</li>
              <li>bad {this.state.bad}</li>
              <li>total {this.total()}</li>
              <li>percent {this.percent()}%</li>
            </ul>
          </>
        ) : (
          <p>There is no feedback.</p>
        )}
      </>
    );
  }
}
