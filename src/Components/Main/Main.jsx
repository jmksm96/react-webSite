import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import LayorIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";


const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56,25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))

const cards = [1, 2, 3, 4, 5, 6]

const Main = () => {
    const classes = useStyles()
    return (
        // <div className={classes.mainContent}>
        <div>
            <Container maxWidth='sm'>
                <Typography variant='h2'
                            align='center'
                            gutterBottom
                            color='textPrimary'> Blog</Typography>

                <Typography variant='h5'
                            align='center'
                            gutterBottom
                            color='textSecondary'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    animi
                    aperiam aut autem commodi, deleniti dolore ducimus et eum facilis, fuga ipsam molestias nemo nobis
                    officia optio pariatur, quam voluptatum.</Typography>
                <div className={classes.Buttons}>
                    <Grid container spacing={2} justify='center'>
                        <Grid item>
                            <Button variant='contained' color='primary'>Start Now</Button>

                        </Grid>
                        <Grid item>
                            <Button variant='outlined' color='primary'>Learn More</Button>

                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                           image='https://source.unsplash.com/random'
                                           title='image title'/>
                                <CardContent>
                                    <Typography variant='h5' gutterBottom>
                                        Blog Post
                                    </Typography>
                                    <Typography>
                                        Blog Post jmksm
                                        Blog Post jmksm
                                        Blog Post jmksm
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>
                                    <LayorIcon/>
                                    <PlayCircleFilledIcon/>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>


        </div>
    )
}

export default Main