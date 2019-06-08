import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";

export const ViewDetails = (props) => {
    const { id, name, description } = props.tea;

    return (
        <React.Fragment>
            <Typography variant="h6" id="modal-title">
                Details:
            </Typography>

            <Typography variant="subtitle1" noWrap={true}>
                ID: {id}
            </Typography>

            <Typography variant="subtitle2">
                Name: {name}
            </Typography>

            <Typography variant="inherit">
                Description: {description}
            </Typography>

            <Button
                variant="contained"
                color="secondary"
                onClick={props.close}
            >
                Close
            </Button>
        </React.Fragment>
    )
};
