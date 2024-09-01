import React,{Component} from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import { Modal,ModalBody,ModalHeader,ModalFooter,Button } from "reactstrap";
import Summary from "./Summary/Summary";
import { Navigate } from "react-router-dom";
import Review from '../About/Review';
import ItemDetail from "./itemDetail";


import { connect } from "react-redux";
import {addIngredient,removeIngredient,updatePurchasable} from '../../redux/actionCreators';


const mapStateToProps = state =>{
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    putchasable: state.putchasable,
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    addIngredient: (igtype) => dispatch(addIngredient(igtype)),
    removeIngredient: (igtype) => dispatch(removeIngredient(igtype)),
    updatePurchasable: ()=>dispatch(updatePurchasable()),
  }
}


class BurgerBuilder extends Component {
  state ={   
    modalOpen: false,
    onClickCheckout: false,
  }

  addIngredientHandle = type =>{
    this.props.addIngredient(type);
    this.props.updatePurchasable();
  }
  removeIngredientHandel =type=>{
      this.props.removeIngredient(type);
      this.props.updatePurchasable();
  }

  toggleModal =()=>{
    this.setState({
      modalOpen: !this.state.modalOpen
    })

  }

  handleCheckout =()=>{
    this.setState({
      onClickCheckout: true,
    })
  }


  render() {
    return (
      <div style={{ backgroundColor: "rgb(234, 234, 234,0.4)" }}>
        <div className="d-flex mt-2 flex-md-row flex-column">
          <Burger ingredients = {this.props.ingredients}/>
          <Controls ingredientAdded ={this.addIngredientHandle} ingredientRemoved ={this.removeIngredientHandel} price={this.props.totalPrice} toggleModal={this.toggleModal} putchasable={this.props.putchasable} />
        </div>
        <ItemDetail/>
        <Review/>
         <Modal isOpen={this.state.modalOpen}>
           <ModalHeader>Your order Summary</ModalHeader>
           <ModalBody>
            <h5>Total Price: {this.props.totalPrice} BDT</h5>
            <Summary ingredients={this.props.ingredients} />
            </ModalBody>
            <ModalFooter>
              <Button style={{backgroundColor:"#ff2b85"}} onClick={this.handleCheckout}>Continue to Checkout</Button>
              <Button color="secondary" onClick={this.toggleModal}>close</Button>
            </ModalFooter>
              {this.state.onClickCheckout && <Navigate to='/checkout'replace={true} />}
         </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder)
