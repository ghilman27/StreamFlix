import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: theme.spacing(16),
        background: theme.palette.primary.main
    },
}));