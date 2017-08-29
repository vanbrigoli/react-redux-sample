import React, {Component} from 'react';
import{connect} from 'react-redux';
import OrderList from './OrderList';

class AllOrdersList extends Component {
    renderAllOderList(){
        if (this.props.allOrderList.length === 0){
            return <h3>No Orders Yet</h3>;
        }
        return this.props.allOrderList.map((order=>{
            return (
                <OrderList activeOrder={order} isVendorView key={order.orderNumber}/>
            );
        }));
    }

    render(){
        return (
            <div>
                {this.renderAllOderList()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return{
        allOrderList: state.orderList
    };
}

export default connect(mapStateToProps)(AllOrdersList)
