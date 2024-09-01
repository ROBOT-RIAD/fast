import React, { Component } from 'react';
import { Formik } from 'formik';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { auth } from '../../redux/authActionCreators';
import  Spinner  from '../Spinner/Spinner';
import log from '../../assets/image/6333040.jpg'


const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, mode) => dispatch(auth(email, password, mode))
    }
}

const mapStateToProps = state =>{
    return {
        authLoading: state.authLoading,
        authFailedMsg: state.authFailedMsg,
    }
}
class Auth extends Component {
    state = {
        mode: "Sign Up"
    }

    switchModeHandler = () => {
        this.setState({ mode: this.state.mode === "Sign Up" ? "Login" : "Sign Up" })
    }

    render() {
        let err =null;
        if(this.props.authFailedMsg !== null)
        {
            err= <Alert style={{color:"red"}}>{this.props.authFailedMsg}</Alert>
        }

        let form = null;
        if(this.props.authLoading)
        {
            form = <Spinner/>
        }
        else
        {
            form =(
                <Formik
                initialValues={
                    {
                        email: "",
                        password: "",
                        passwordConfirm: "",
                    }
                }

                onSubmit={
                    (values) => {
                        this.props.auth(values.email, values.password, this.state.mode);
                    }
                }

                validate={(values) => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 4) {
                        errors.password = 'Must be atleast 4 characters!';
                    }

                    if (this.state.mode === "Sign Up") {
                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = 'Required';
                        } else if (values.password !== values.passwordConfirm) {
                            errors.passwordConfirm = 'Password field does no match!';
                        }
                    }
                    //console.log("Errors:", errors)
                    return errors;
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        borderRadius: "7px",
                    }}>
                        <button style={{
                            width: "100%",
                            backgroundColor: "#ff2b85",
                            color: "white",
                        }} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode === "Sign Up" ? "Login" : "Sign Up"}</button>
                        <br /><br />
                        <form onSubmit={handleSubmit}>
                            <input
                                name="email"
                                placeholder="Enter Your Email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>{errors.email}</span>
                            <br />
                            <input
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>{errors.password}</span>
                            <br />

                            {this.state.mode === "Sign Up" ? <div>
                                <input
                                    name="passwordConfirm"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                />
                                <span style={{ color: "red" }}>{errors.passwordConfirm}</span>
                                <br />
                            </div> : null}

                            <button type="submit" style={{backgroundColor:"#ff2b85",color:"white"}} className="btn">{this.state.mode === "Sign Up" ? "Sign Up" : "Login"}</button>
                        </form>
                    </div>)}
            </Formik>
            )

        }
        return (
                <div className="d-flex flex-wrap justify-content-center align-items-center" style={{  backgroundColor:"rgb(234, 234, 234,0.4)" }}>
                    <div className=" container row w-100 mx-0">
                        <div className="col-lg-6 col-md-8 mb-5 col-12 d-flex justify-content-center align-items-center mb-5 mb-lg-0">
                            <img 
                                src={log} 
                                alt='Brand Logo' 
                                style={{ width: '100%', maxWidth: '450px', height: 'auto',marginBottom:'30px',marginTop:"20px" }}
                            />
                        </div>
                        <div  className="col-lg-6 mb-4 col-md-8 col-12 d-flex justify-content-center align-items-center">
                            <div style={{ width: '100%', maxWidth: '400px' }}>
                                {err}
                                {form}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);