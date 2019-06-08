import React from "react";
import Grid from "@material-ui/core/Grid";
import { CardTea } from "./CardTea";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cardContent: {
        height: '100%',
        cursor: 'pointer',
    },
    centerPlus: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    icon: {
        fontSize: 170,
        color: '#3f51b5',
    }
}));

export const ViewCards = (props) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.cardGrid}>
            <Grid container spacing={4}>
                {props.teas.map(tea => (
                    <CardTea
                        key={tea.id}
                        tea={tea}
                        setShowTeaDetailsId={props.setShowTeaDetailsId}
                    />
                ))}

                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        className={classes.cardContent}
                        onClick={props.openModalAddTea}
                    >
                        <CardContent className={classes.cardContent}>
                            <Typography align={'center'} className={classes.centerPlus}>
                                <Icon
                                    className={classes.icon}
                                >add</Icon>
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
};
