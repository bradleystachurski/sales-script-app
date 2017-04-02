import React, {Component, PropTypes} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const ListScripts = () => (
  <div>
    <SelectableList>
      <Subheader>Choose Script</Subheader>
      <ListItem
        value={1}
        primaryText="Getting Past the Gatekeeper"
        />
      <ListItem
        value={2}
        primaryText="Call with Decision Maker"
        />
      <ListItem
        value={3}
        primaryText="Follow-up Call with Decision Maker"
        />
    </SelectableList>
  </div>
);

export default ListScripts;