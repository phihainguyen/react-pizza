import React from 'react';
import classes from './main.module.css';
import Radio from '@material-ui/core/Radio';

import Checkbox from '@material-ui/core/Checkbox';
import Preview from './preview/preview';
import Buttons from './buttons/button';
import { connect } from 'react-redux';
import { updateRadio } from '../../actions/radio';

class Main extends React.Component {
	//state created for each topping to set initial state of checkboxes and radio boxes
	state = {
		base: [ { tomato: true }, { cheese: false } ],
		contents: [
			{ mushroom: false },
			{ olive: false },
			{ greenPepper: false },
			{ pepperoni: false },
			{ tomato: false },
			{ redPepper: false }
		],
		selectBase: 'cheese'
	};
	//handles the radio boxes for pizza base to verify/update the state if checked or not
	handleBaseChange = (event) => {
		console.log(this.state.base);
		this.setState({
			selectBase: event.target.value
		});
		var myBase = this.state.base.map((value) => Object.values(value)[0]);
		if (this.state.selectBase === 'tomato') {
			this.setState({ base: [ { tomato: true }, { cheese: false } ] });
		}
		if (this.state.selectBase === 'cheese') {
			this.setState({ base: [ { tomato: false }, { cheese: true } ] });
		}
		console.log(this.state.selectBase);
	};
	//handles checkboxes for pizza toppings to verify/update state of toppings
	handleChanges = (name) => (event) => {
		this.setState({
			...this.state,
			contents: this.state.contents.map((obj) => (name in obj ? { [name]: event.target.checked } : obj))
		});
		console.log('hello');
		console.log(this.state);
	};

	render() {
		return (
			<div className={classes.Main}>
				<Preview contents={this.state} />
				<div className={classes.OptionsBox}>
					<div className={classes.Options}>
						<h1>PLACE YOUR PIZZA ORDER</h1>
						<br />

						<div>
							<h4 className={classes.Title}>Pizza Base</h4>
							<div className={classes.BaseBox} onChange={this.handleBaseChange}>
								<label className={classes.Label1}>
									<Radio
										checked={this.state.selectBase === 'tomato'}
										value="tomato"
										color="default"
										name="pizzaBase"
									/>
									Cheese
								</label>
								<label className={classes.Label2}>
									<Radio
										checked={this.state.selectBase === 'cheese'}
										color="default"
										value="cheese"
										name="pizzaBase"
									/>
									Tomato
								</label>
							</div>
						</div>

						<h4 className={classes.Title}>Pizza Toppings</h4>
						<div className={classes.Labels}>
							<div className={classes.LeftLabel}>
								<label>
									<Checkbox
										checked={this.state.contents.mushroom}
										onChange={this.handleChanges('mushroom')}
										color="default"
										value="mushroom"
									/>Mushroom
								</label>
								<label>
									<Checkbox
										checked={this.state.contents.olive}
										onChange={this.handleChanges('olive')}
										color="default"
										value="olive"
									/>Olive
								</label>
								<label>
									<Checkbox
										checked={this.state.contents.greenPepper}
										onChange={this.handleChanges('greenPepper')}
										color="default"
										value="greenPepper"
									/>Green Pepper
								</label>
							</div>
							<div className={classes.RightLabel}>
								<label>
									<Checkbox
										checked={this.state.contents.pepperoni}
										onChange={this.handleChanges('pepperoni')}
										color="default"
										value="pepperoni"
									/>Pepperoni
								</label>
								<label>
									<Checkbox
										checked={this.state.contents.tomato}
										onChange={this.handleChanges('tomato')}
										color="default"
										value="tomato"
									/>Tomato
								</label>
								<label>
									<Checkbox
										checked={this.state.contents.redPapper}
										onChange={this.handleChanges('redPepper')}
										color="default"
										value="redPepper"
									/>Red Pepper
								</label>
							</div>
						</div>
						<Buttons mount={this.state} />
					</div>
				</div>
			</div>
		);
	}
}

// export default connect(null, {updateRadio})(Main);
export default Main;
