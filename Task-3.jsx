class ColorInfo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "violet" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "gray" });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      document.getElementById(
        "color-div"
      ).innerHTML = `The updated color is ${this.state.color}`;
    }
  }

  render() {
    return (
      <div>
        <h1>Color is {this.state.color}</h1>
        <div id="color-div"></div>
      </div>
    );
  }
}
