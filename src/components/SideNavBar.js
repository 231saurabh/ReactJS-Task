import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline,Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },

    drawer: {
        width: 200
    }
}));

const SideNavBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div>
            <CssBaseline />
            <Drawer open={open} onClose={() => setOpen(false)} >
                <Box marginTop="80px" marginLeft="15px">
                    <List disablePadding className={classes.drawer} >
                        <ListItem button>
                            <ListItemText primary="Add Patient" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Edit Patient" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default SideNavBar;
