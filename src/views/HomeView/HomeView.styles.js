import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	movieList: {
		marginTop: -theme.spacing(30),
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		background: theme.palette.background.paper,
	},
	title: {
		fontSize: '3rem',
		lineHeight: '3rem',
		textAlign: 'center',
		textTransform: 'capitalize',
		marginBottom: theme.spacing(3)
	  },
	[theme.breakpoints.down('sm')]: {
		fullWidth: { width: '100%' }
	}
}));