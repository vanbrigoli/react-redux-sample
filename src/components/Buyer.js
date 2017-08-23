import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';
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
                        <div className="ItemCol col-sm-8">
                            <fieldset className="tray">
                                <legend>Food Menu</legend>
                                <AddItem/>
                            </fieldset>                            
                        </div> 
                        <div className="TrayCol col-sm-4">
                            <fieldset className="tray">
                                <legend>Tray</legend>
                                {itemlist}
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="alert alert-success">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">
                        ×</button>
                    <span className="glyphicon glyphicon-info-sign"></span> <strong>Info Message</strong>
                    <hr className="message-inner-separator"/>
                        <p>
                            Your order ID: <strong>00001</strong> has been placed.<br/>Please wait for your queue.
                        </p>
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