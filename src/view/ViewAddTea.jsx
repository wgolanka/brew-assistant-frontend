import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
    menu: {
        width: 400,
    },
    button: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));

export const ViewAddTea = (props) => {
    const classes = useStyles();

    const { handleChange, data, handleClose, handleSubmit } = props;

    return (
        <form
            className={classes.container}
            onSubmit={handleSubmit}
        >
            <TextField
                id="name"
                label="How do you name your brew?"
                className={classes.textField}
                value={data.name}
                onChange={handleChange}
                margin="normal"
                name={'name'}
            />

            <TextField
                id="originCountry"
                label="What is your brew origin country?"
                className={classes.textField}
                value={data.originCountry}
                onChange={handleChange}
                margin="normal"
                name={'originCountry'}
            />

            <FormGroup>
                <TextField
                    id="caffeineContent"
                    label="How much caffeine milligrams your brew has?"
                    className={classes.textField}
                    value={data.caffeineContent}
                    onChange={handleChange}
                    margin="normal"
                    name={'caffeineContent'}
                />
            </FormGroup>

            <FormGroup>
                <TextField
                    id="description"
                    label="Any additional description?"
                    className={classes.textField}
                    value={data.description}
                    onChange={handleChange}
                    margin="normal"
                    name={'description'}
                />
            </FormGroup>

            <FormGroup>
                <TextField
                    id="imageLink"
                    label="What does it look like?"
                    className={classes.textField}
                    value={data.imageLink}
                    onChange={handleChange}
                    margin="normal"
                    name={'imageLink'}
                />
            </FormGroup>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type={'submit'}
            >
                Add
            </Button>

            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={handleClose}
            >
                Close
            </Button>
        </form>
    )
};
