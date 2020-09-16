import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		transition: 'all 0.5s ease-in-out',
	},
	appLogo: {
		flexGrow: 1,
	},
	navHidden: {
		background: 'transparent',
		boxShadow: theme.shadows[0],
	},
	icon: {
		width: '2rem',
		height: '2rem',
	},
	balance: {
		marginRight: theme.spacing(2)
	}
}));
