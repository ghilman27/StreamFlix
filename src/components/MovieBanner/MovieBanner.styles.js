import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: props => ({
		background: `
			linear-gradient(
				to right,
				rgba(0,0,0,.9) 25%, 
				transparent 100%
			),
			url("${props.backgroundImage}")`,
		height: props.height,
		width: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	}),
}));
