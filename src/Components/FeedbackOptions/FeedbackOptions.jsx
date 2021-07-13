import PropTypes from 'prop-types';
import { Container, Button } from './FeedBackOptions.styled'


function FeedbackOptions({ options, onLeaveFeedback }) {
	return (
		<Container>
			{options.map(option => (
				<Button
					type="button"
					key={option}
					name={option}
					onClick={() =>onLeaveFeedback(option)}>
						{option}
				</Button>
			))}
		</Container>
	)
}


FeedbackOptions.propTypes = {
	option: PropTypes.arrayOf(PropTypes.string),
	onLeaveFeedback: PropTypes.func.isRequired

}

export default FeedbackOptions;

