import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FolderIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))

const Footer = () => {
    const classes = useStyles()
    const [value, setValue] = useState('recents')

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Typography variant='h6' align='center'>
                Footer
            </Typography>
            <BottomNavigation value={value}
                              onChange={handleChange}
                              className={classes.root}>

                <BottomNavigationAction
                    label='Recents'
                    value='recents'
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label='Favorites'
                    value='favorites'
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label='Nearby'
                    value='nearby'
                    icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                    label='Folder'
                    value='folder'
                    icon={<FolderIcon/>}
                />
            </BottomNavigation>
            <Typography color='textSecondary'
                        component='p'
                        align='center'
                        variant='subtitle1'>
                React Web-Site with MaterialUI
            </Typography>
        </div>
    )
}

export default Footer