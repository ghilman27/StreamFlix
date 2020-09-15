import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#141414',
		},
		secondary: {
			main: '#ffbf00',
		},
		background: {
			paper: '#000000',
			default: '#000000',
		},
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'Quicksand',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
});
