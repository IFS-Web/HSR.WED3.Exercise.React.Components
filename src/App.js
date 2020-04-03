import React from "react";
import logo from "./logo.svg";
import "./App.css";

function AppLink({ to, text }) {
  return (
    <a className="App-link" href={to} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

const Logo = ({ image, circulationTime }) => (
  <img
    style={{
      animationDuration: `${circulationTime}s`
    }}
    src={image}
    className="App-logo"
    alt="logo"
  />
);

class Header extends React.Component {
  state = {
    circulationTime: 10
  };

  goFaster = () => {
    this.setState(state => ({ circulationTime: state.circulationTime * 0.9 }));
  };

  goSlower = () => {
    this.setState(state => ({ circulationTime: state.circulationTime * 1.1 }));
  };

  render() {
    return (
      <header className="App-header">
        <Logo circulationTime={this.state.circulationTime} image={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={this.goFaster}>Faster!</button>
          <button onClick={this.goSlower}>Slower...</button>
        </div>
        <AppLink to="https://reactjs.org" text="Learn React" />
      </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
