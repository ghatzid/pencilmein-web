import React, { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Notification,
} from 'react-admin';



const styles = theme => ({

    root: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
    },
    appFrame: {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'auto',
        paddingLeft: 15,
        zIndex: 0,
        
    },
    contentWithSidebar: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 2,
        padding: theme.spacing.unit * 3,
        marginTop: '4em',
        paddingLeft: 5,
    },

});

class MyLayout extends Component {
    // componentDidMount() {
    //     this.props.setSidebarVisibility(false);
    // }

    render() {
        const {
            children,
            classes,
            logout,
        } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar logout={logout}/>
                    {/* <main className={classes.contentWithSidebar}> */}
                        <div className={classes.content}>
                            {children}
                        </div>
                    {/* </main> */}
                    <Notification />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MyLayout)