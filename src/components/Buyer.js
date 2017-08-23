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
                                <div className="card" >
                                    <table className="table table-responsive">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <img className="card-img-top" src="https://a8g4i9g5y.ssl.hwcdn.net/files/styles/food_image/public/image/7b/94/107805-filipino-pork-adobo.png" alt="Card image cap"></img>
                                            </td>
                                            <td>
                                                <div className="card-block">
                                                    <td>
                                                    <h4 className="card-title"><strong>Adobong Kesarapsarap</strong></h4>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">Add</a>
                                                    </td>
                                                    <h3>Php 90.00</h3>
                                                    <p className="card-text">Better than any adobo in world, Rovelle's adobo will surely make you go loko!</p>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>   
                                <div className="card" >
                                    <table className="table table-responsive">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <img className="card-img-top" src="https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/77d08f50-3ccc-4432-a86d-4dcfdd3d7cd4.jpg" alt="Card image cap"></img>
                                            </td>
                                            <td>
                                                <div className="card-block">
                                                    <td>
                                                    <h4 className="card-title"><strong>Sinigang Na Keasimsim</strong></h4>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="btn btn-primary">Add</a>
                                                    </td>
                                                    <h3>Php 120.00</h3>
                                                    <p className="card-text">Rovelle's Sinigang, will make you go tigang with its sour taste and distinct flavor.</p>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>                                                              
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