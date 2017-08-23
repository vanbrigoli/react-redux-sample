import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';
import Tray from './Tray';
import './Buyer.css';

class Buyer extends Component {
    render() {
        var listgroupitems = this;
        if (listgroupitems.props.lists.length !== 0) {   
            var itemlist = listgroupitems.props.lists.map(item => (<ListItem item={item} key={item.id}/>));
        } else {
            itemlist = "Please order some food from the Food Menu on the left.";
        }
        return (
            <div>
                <div className="Buyer-container">
                    <div className="row">
                        <div className="ItemCol col-sm-6">
                            <fieldset className="tray">
                                <legend>Food Menu</legend>
                                <AddItem/>
                            </fieldset>
                        </div> 
                        <div className="TrayCol col-sm-6">
                            <legend>Tray</legend>
                            <Tray/>
                        </div>
                    </div>
                </div>
            </div>
        );        
    }
}

const mapStateToProps = state => {
  return {
      lists: state.todos
  }
};

export default connect(mapStateToProps)(Buyer);