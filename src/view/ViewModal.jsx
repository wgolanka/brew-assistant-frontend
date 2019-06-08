import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

export const ViewModal = (props) => {
    const { open, close, children } = props;
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={close}
        >
            <div className={classes.paper} style={getModalStyle()}>
                {children}
            </div>
        </Modal>
    )
};
