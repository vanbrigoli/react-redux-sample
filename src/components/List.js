import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';

class List extends Component {
    render() {
        if (this.props.lists.length !== 0) {
            return (
                <div>
                    <AddItem/>
                    <hr/>
                    <div className="list-group">
                        {this.props.lists.map(item => (<ListItem item={item} key={item.id}/>))}
                    </div>
                </div>

            )
        }
        return (<div>
                    <AddItem/>
                    <hr/>
                    <div>No todo lists.</div>
                </div>)
    }
}

const mapStateToProps = state => {
  return {
      lists: state.todos
  }
};

export default connect(mapStateToProps)(List);