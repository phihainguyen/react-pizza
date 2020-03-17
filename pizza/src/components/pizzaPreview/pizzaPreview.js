import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './pizzaPreview.module.css';

// images
import CheeseBased from '../../images/cheeseBased.png';
import TomatoBased from '../../images/tomatoBased.png';

class Preivew extends React.Component {
	//styling for my pizza to make sure it all fits and placed correctly
	getStyle = (style) => {
		return {
			backgroundImage: `url(${style})`,
			backgroundSize: 'cover',
			width: '600px',
			height: '600px',
			transition: '.9s ease-in'
		};
	};

	getBase = () => this.props.contents.base.map((value) => Object.values(value)[0]);
	getContents = () => this.props.contents.contents.map((value) => Object.values(value)[0]);
	setBase = () => {
		// getBase()[0] ---> tomato base
		// getBase()[1] ---> cheese base
		if (this.getBase()[0] === true) {
			return <div style={this.getStyle(TomatoBased)} />;
		} else {
			return <div style={this.getStyle(CheeseBased)} />;
		}
	};

	//control visibility of toppings when checked, rendering a div with it's class name
	isVisible = () => {
		return this.props.contents.contents.map((value) => {
			// console.log(value)
			// Object.keys(value)[0]
			// console.log(Object.values(value)[0])

			if (Object.keys(value)[0] === 'mushroom') {
				if (Object.values(value)[0] === true) {
					return <div className={classes.Mushroom} />;
				} else {
					return false;
				}
			}
			if (Object.keys(value)[0] === 'olive') {
				if (Object.values(value)[0] === true) {
					return <div className={classes.Olive} />;
				}
			}
			if (Object.keys(value)[0] === 'greenPepper') {
				if (Object.values(value)[0] === true) {
					return <div className={classes.GreenPepper} />;
				}
			}
			if (Object.keys(value)[0] === 'pepperoni') {
				if (Object.values(value)[0] === true) {
					return <div className={classes.Pepperoni} />;
				}
			}
			if (Object.keys(value)[0] === 'tomato') {
				if (Object.values(value)[0] === true) {
					return <div className={classes.Tomato} />;
				}
			}
			if (Object.keys(value)[0] === 'redPepper') {
				if (Object.values(value)[0] === true) {
					return <div className={classes.RedPepper} />;
				}
			}
		});
	};

	render() {
		return (
			<Aux>
				<div className={classes.imageBox}>
					<div className={classes.image}>
						{this.setBase()}
						{/* {console.log(this.props.contents)} */}
						{/*this.isVisible will return => <div className={classes.Mushroom}></div> */}
						{this.isVisible()}
					</div>
				</div>
			</Aux>
		);
	}
}

export default Preivew;
