import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		transition: 'all 0.5s ease-in-out',
	},
	appLogo: {},
	navHidden: {
		background: 'transparent',
		boxShadow: theme.shadows[0],
	},
}));
