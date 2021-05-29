import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#16005c'
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#faf8ba' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Web App
                    </Typography>
                    <Typography variant="h6" style={{ color: '#eea96a' }}>
                        About
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;