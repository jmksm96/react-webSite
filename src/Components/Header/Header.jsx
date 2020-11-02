import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    overlay: {
        position:'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)'
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component='h1'
                                        variant = 'h3'
                                        color='inherit'
                                        gutterBottom>
                                        React-App by jmksm
                                    </Typography>
                                    <Typography
                                        component='h1'
                                        variant = 'h5'
                                        color='inherit'
                                        gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                                        aut nobis quam ratione ut? Cupiditate dignissimos dolorem eaque enim est fuga
                                        laboriosam temporibus unde vero.
                                    </Typography>
                                    <Button variant='contained' color='secondary'>
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>

        </>
    )


}

export default Header