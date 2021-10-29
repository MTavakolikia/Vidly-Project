import React from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import { removeTypeDuplicates } from '@babel/types';

class LoginForm extends React.Component {
    state={
        account:{
            username:"",
            password:""
        },
        errors:{
            username:"",
            password:""
        }
    }
    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password'),
    }
    validate =() =>{
        const options= {abortEarly:false}
        const {error}=Joi.validate(this.state.account,this.schema,options);
        if(!error) return null;
        const errors={};
        for(let item of error.details)
        errors[item.path[0]]=item.message;
        return errors;
       
    }
    handleSubmit = e =>{
        e.preventDefault();
        const errors=this.validate();
        this.setState({errors: errors || {} })
        if(errors) return;
    }
    validateProperty = ({name,value}) =>{
        const obj = {[name]:value};
        const schema={[name]: this.schema[name]};
        const {error}=Joi.validate(obj,schema);
        return error ? error.details[0].message : null;
    }
    handleChange =({currentTarget:input}) =>{
        const errors={...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account= {...this.state.account};
        account[input.name]=input.value;
        this.setState({account});
    }
    render() { 
        const {account,errors}=this.state;
        return (
            <React.Fragment>
            <h1>LoginForm</h1>
            <form>
                <div className="form-group">
                    <Input
                    name="username"
                    value={account.username}
                    lable="UserName:"
                    onChange={this.handleChange}
                    error={errors.username}
                    />
                </div>
                <div className="form-group">
                <Input
                    name="password"
                    value={account.password}
                    lable="Password:"
                    onChange={this.handleChange}
                    error={errors.password}
                    />
                    </div>
                <button disabled={this.validate()} className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
            </form>
            </React.Fragment>
        );
    }
}
 
export default LoginForm;