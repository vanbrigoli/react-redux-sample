import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
                <div className="container">
                    <div className="header">
                        <div className="table">
                            <ul>
                                Goto:
                                <li><Link to="/" className="btn btn-success">Home</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="PanelCol col-sm-6">
                            <fieldset className="tray">
                                <legend>Food Menu</legend>
                                {/*Hardcoded mockups | Placeholders*/}
                                <table className="table table-bordered table-responsive">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> item 1 </td>
                                            <td> 500 </td>
                                            <td> 
                                                <button className="btn btn-success"> Add to Tray </button> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td> item 2 </td>
                                            <td> 500 </td>
                                            <td> 
                                                <button className="btn btn-success"> Add to Tray </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </fieldset>
                        </div> 
                        <div className="PanelCol col-sm-6">
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