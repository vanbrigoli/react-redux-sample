import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';
import listStore from './../store/ListStore';
import { getLists } from './../actions/TodoActions';

class List extends Component {
    componentWillMount(){
        listStore.dispatch(getLists());
    }
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