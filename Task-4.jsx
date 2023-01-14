class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: false });
  }

  render() {
    let childComponent = null;

    if (this.state.show) {
      childComponent = <Child />;
    }

    return (
      <>
        {childComponent}
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component Child is unmounted.");
  }

  render() {
    return <h1>Children!</h1>;
  }
}
