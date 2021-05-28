import React from 'react'
import {Grid,} from "@material-ui/core";
import Card1 from './Cards/Card1';

const HomePage = () => {
    return (
        <>
        <Grid container justify = "center" alignItems="center">
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
      </>
    )
}

export default HomePage;
