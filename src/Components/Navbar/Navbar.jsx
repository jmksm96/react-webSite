import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}))

const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <IconButton edge='start'
                                color='inherit'
                                arealabel='menu'
                                className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}> Web-Site by jmksm96</Typography>
                    <Box mr={3}>
                        <Button color='inherit' variant='outlined'>Log in</Button>
                    </Box>
                    <Button color='secondary' variant='contained'>Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>

    )

}

export default Navbar;
