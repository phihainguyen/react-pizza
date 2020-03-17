import React from 'react';
import classes from './button.module.css';
import ModalBox from '../modal/modal';
import Aux from '../../hoc/Aux';

class Buttons extends React.Component {
	//setting the price for each topping in state as well as the initial visibility of modal
	state = {
		prices: [
			{ mushroom: 0.8 },
			{ olive: 0.7 },
			{ greenPepper: 0.5 },
			{ pepperoni: 2.0 },
			{ tomato: 0.9 },
			{ redPepper: 0.5 }
		],
		isVisible: false
	};
	//price calculator for order
	totalPriceResult = () => {
		let totalPrice = 15.0;
		this.props.mount.contents.map((arr) => {
			if (Object.values(arr)[0] === false) {
				this.state.prices.map((val) => {
					if (Object.keys(val)[0] === Object.keys(arr)[0]) {
						totalPrice -= Object.values(val)[0];
					}
				});
			} else if (Object.values(arr)[0] === true) {
				this.state.prices.map((val) => {
					if (Object.keys(val)[0] === Object.keys(arr)[0]) {
						totalPrice += Object.values(val)[0];
					}
				});
			}
		});
		return totalPrice.toFixed(2);
	};
	//control the visibility of the modal
	isVisibleModalBox = () => {
		this.setState({
			isVisible: !this.state.isVisible
		});
	};

	render() {
		return (
			<Aux>
				<div className={classes.Buttons}>
					<h3 className={classes.Price}>Total Price: {this.totalPriceResult()}$</h3>
					<button
						className={classes.Button}
						onClick={this.isVisibleModalBox}
						style={{ marginLeft: '20px', outline: 'none' }}
					>
						ORDER
					</button>
				</div>
				{this.state.isVisible ? (
					<ModalBox
						totalPrice={this.totalPriceResult()}
						base={this.props.mount.base}
						clicked={this.isVisibleModalBox}
					/>
				) : null}
			</Aux>
		);
	}
}

export default Buttons;
