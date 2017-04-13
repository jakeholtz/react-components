


class GroceryListItem extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      done: false
    };
    this.hover = {
      over: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemMouseOver() {
    this.hover.over = true
  }

  onListItemMouseOut() {
    this.hover.over = false
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.hover.over ? 'bold' : 'normal'
    };


    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onListItemMouseOver.bind(this)} onMouseOut={this.onListItemMouseOut.bind(this)}>{this.props.grocery}</li>
    )
  }
}



var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
      )}
    </ul>
  </div>
)


ReactDOM.render(<GroceryList groceries={['cheese', 'pizza']} />, document.getElementById('app'));
