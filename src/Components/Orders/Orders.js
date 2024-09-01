import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actionCreators';
import Order from './order/order';
import Allitem from '../BurgerBuilder/Allitem';
import Spinner from '../Spinner/Spinner';

const mapStateToProps = state => ({
    orders: state.orders,
    orderLoading: state.orderLoading,
    orderErr: state.orderErr,
    token: state.token,
    userId: state.userId,
});

const mapDispatchToProps = dispatch => ({
    fetchOrders: (token,userId) => dispatch(fetchOrders(token,userId)),
});

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders(this.props.token,this.props.userId);
    }

    render() {
        const { orders, orderLoading, orderErr } = this.props;

        let content;
        let value;

        if (orderErr) {
            content = <p style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
                height:"100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize:"100px",
                color:"#ee4e3b",
            }}>Sorry, Failed to Load Orders!</p>;
        } else if (Array.isArray(orders)) {
            value = orders.length === 0
                ? <Allitem val={0} />
                : <Allitem val={orders.length} />;
            content = orders.length === 0
                ? <p style={{textAlign: "center",height:"100vh",display: "flex", justifyContent: "center", alignItems: "center" ,fontSize:"100px",color:"#ee4e3b"}}>You have no Orders!</p>
                : orders.map(order => <Order order={order} key={order.id} />);
        } else {
            content = <p style={{
                border: "1px solid grey",
                borderRadius: "5px",
                padding: "5px",
                marginRight: "10px",
                height:"100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize:"100px",
                color:"#ee4e3b",
            }}>Orders data is not in a valid format.</p>;
        }

        return (
            <div>
                {/* {orderLoading ? <Spinner /> : content}
                {orderLoading ? <Spinner /> : value} */}
                {orderLoading ? <Spinner /> : <>{value} {content}</>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
