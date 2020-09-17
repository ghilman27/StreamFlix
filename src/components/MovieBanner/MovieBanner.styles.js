import { makeStyles } from '@material-ui/core/styles';
require('dotenv').config();
const IMAGE_BASE_URL = process.env.REACT_APP_API_IMAGE_BASE_URL;

export default makeStyles((theme) => ({
	root: (props) => ({
		background: `
			linear-gradient(
				to right,
				rgba(0,0,0,.9) 25%, 
				transparent 100%
			),
			url("${IMAGE_BASE_URL}${props.movie.poster_path}")`,
		height: props.height || '100vh',
		width: '100%',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',

	}),
	welcomeSection: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	welcomeHeader: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
	},
	infoSection: {
		padding: theme.spacing(3),
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		backgroundBlendMode: 'multiply',
		background:
			'linear-gradient(to right, rgba(0,0,0,.9) 25%, transparent 100%)',
	},
	movieHeader: {
		position: 'relative',
		padding: theme.spacing(3),
		maxWidth: '60%',
	},
	tag: {
		padding: theme.spacing(0.3, 3),
		marginRight: theme.spacing(1),
		border: '1px solid rgba(255,255,255,0.9)',
		borderRadius: 25,
		fontSize: theme.typography.caption.fontSize
	},
	movieTitle: {
		maxWidth: '60%',
		fontSize: '32px',
		lineHeight: 1.2,
		fontWeight: 400,
		textTransform: 'capitalize',
	},
	voteCount: {
		color: '#9ac7fa',
		fontWeight: '500',
		fontSize: '16px',
		marginTop: theme.spacing(1),
	},
	duration: {
		display: 'inline-block',
		marginTop: theme.spacing(2),
		padding: theme.spacing(1),
		border: '1px solid rgba(255,255,255,0.13)',
	},
	genre: {
		display: 'inline-block',
		color: '#cee4fd',
		marginLeft: theme.spacing(2),
	},
	price: {
		display: 'inline-block',
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(2),
		padding: theme.spacing(1),
		border: '1px solid rgba(255,255,255,0.13)',
	},
	notSaved: {
		marginLeft: theme.spacing(2),
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
		fontWeight: theme.typography.fontWeightBold,
	},
	saved: {
		background: theme.palette.success.main,
	},
	descriptionText: {
		color: '#cfd6e1',
		padding: theme.spacing(2, 0),
		maxWidth: '60%',
	},
	footer: {
		position: 'absolute',
		left: theme.spacing(4),
		bottom: theme.spacing(2),
		zIndex: 2,
	},
	icons: {
		display: 'inline-block',
		cursor: 'pointer',
		color: 'rgba(255, 255, 255, 0.4)',
		margin: theme.spacing(0, 1),
		transition: 'all 0.3s',
		'&:hover': {
			color: 'rgba(255, 255, 255, 0.8)',
			transform: 'scale(1.25)',
			transition: 'all 0.3s',
			transitionDelay: '0.15s',
		},
	},
	movieActions: { position: 'absolute', bottom: 0, right: 0 },
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
		padding: theme.spacing(1),
		border: '1px solid rgba(255,255,255,0.13)',
		width: 200,
		fontWeight: theme.typography.fontWeightBold,
	},
	learnMore: { color: theme.palette.common.white },
	buttonIcon: { marginLeft: theme.spacing(2) },
	[theme.breakpoints.down('sm')]: {
		infoSection: {
			background:
				'linear-gradient(to right, rgba(0,0,0,.9) 70%, transparent 100%)',
		},
		welcomeTitle: {
			fontSize: '24px',
		},
		welcomeSubTitle: {
			fontSize: '16px',
		},
		movieHeader: { maxWidth: '90%' },
		movieTitle: {
			maxWidth: '100%',
			fontSize: '16px',
		},
		descriptionText: {
			maxWidth: '100%',
			fontSize: '12px',
		},
		tag: { padding: theme.spacing(0.3, 1), margin: theme.spacing(1, 1, 1, 0) },
		movieActions: { display: 'flex', width: '100%' },
		button: {
			flex: 1,
			fontSize: 13,
			height: 'auto',
			padding: theme.spacing(2),
		},
		footer: {
			left: theme.spacing(1),
			bottom: theme.spacing(12),
		},
	},
}));
