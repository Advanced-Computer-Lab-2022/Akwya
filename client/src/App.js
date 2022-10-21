import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './App.css';
import './components/Posts/Post/Post.css';
import './components/Posts/Posts.css';
import './components/Form/Form.css';

//hey

import photo from './images/photo.jpeg';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);



    return (


        <Container maxwidth="lg">
            <AppBar className="appBar" position="static" color="inherit">
                <Typography className="headings" variant="h2" align="left" >Online Learning System</Typography>
                <img classname="img" src={photo} alt="A Photo" height="60" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>


        </Container>
    );
}

export default App;
