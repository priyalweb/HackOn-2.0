import React from 'react'
import {Grid,Container} from "@material-ui/core";
import Card1 from './Cards/Card1';

const HomePage = () => {
    return (
        <>
        <Container>
        <Grid container justify = "center" alignItems="center" style={{marginTop: 40}}>
            <Grid item  xs={12} md={4} style={{marginBottom: 30}}>
                <Card1/>
            </Grid>
            <Grid item  xs={12} md={4} style={{marginBottom: 30}}>
                <Card1/>
            </Grid>
            <Grid item  xs={12} md={4} style={{marginBottom: 30}}>
                <Card1/>
            </Grid>
        </Grid>
        </Container>
      </>
    )
}

export default HomePage;
