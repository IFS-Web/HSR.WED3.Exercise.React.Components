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

const Logo = ({ image }) => <img src={image} className="App-logo" alt="logo" />;

class Content extends React.Component {
  render() {
    return <p> {this.props.children}</p>;
  }
}

function Header() {
  return (
    <header className="App-header">
      <Logo image={logo} />
      <Content>
        Edit <code>src/App.js</code> and save to reload.
      </Content>
      <AppLink to="https://reactjs.org" text="Learn React" />
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
