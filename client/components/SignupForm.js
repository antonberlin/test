import React, { Component } from 'react'
class SignupForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			login : '',
			password: '',
			errors: {}
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);		

	}
	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault();
		this.props.userSignupRequest(this.state);
	}
	render(){
		const {errors} = this.state;
		return(
				<form onSubmit={this.onSubmit}>
					<h1> Join our community</h1>
					<div className='form-group'>
						<label className='control-label'>Login</label>
						<input
							onChange={this.onChange}
							value={this.state.login}
							type='text'
							name='login'
							className='form-control'
							/>
							{errors.username && <span className='help-block'>{errors.username}</span>}
					</div>
					<div className='form-group'>
						<label className='control-label'>Password</label>
						<input
							onChange={this.onChange}
							value={this.state.password}
							type='password'
							name='password'
							className='form-control'
							/>
					</div>
					<div className='form-group'>
						<button className='btn btn-primary btn-lg'>
							sign up
						</button>
					</div>
				</form>
				)
	}
}
SignupForm.propTypes= {
	userSignupRequest: React.PropTypes.func.isRequired
}
export default SignupForm
