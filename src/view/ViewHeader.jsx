import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    }
}));

export const ViewHeader = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon className={classes.icon} />

                <Typography variant="h6" color="inherit" noWrap>
                    Brew Assistant
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
