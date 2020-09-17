import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		paddingBottom: theme.spacing(24),
	},
	movieList: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		background: theme.palette.background.paper,
	},
	title: {
		fontSize: '2rem',
		lineHeight: '3rem',
		textAlign: 'center',
		textTransform: 'capitalize',
		marginBottom: theme.spacing(3)
	  },
	pagination: {
		display:'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	fullWidth: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	[theme.breakpoints.down('sm')]: {
		fullWidth: { width: '100%' }
	}
}));
