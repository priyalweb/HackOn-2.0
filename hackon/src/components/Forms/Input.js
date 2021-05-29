import { Button, Card, Grid, TextField, Typography, makeStyles, Container } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  query: ""
};



const useStyles = makeStyles ({
  outer:{
    backgroundColor: 'white',
    backgroundSize: '100vw 100vh',
  },
  root: {
      textAlign: "center",
      paddingTop: "4%",
  },
  btnRoot:{
      backgroundColor: '#ffd54f;',
      fontSize: "large",    
  },
  btnLabel:{
      color: 'white',
      padding: "2px",
  },
  dbox: {
    width: "100%",
    marginBottom: "25px",
    padding: "0px 20px",
  },
  icon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%;",
    margin: "0 auto",
    marginBottom: "20px",
  },
  text: {
    textDecoration: "none",
    color: "blue",
    "& text:visited": {
      textDecoration: "none",
    },
  },
  card:{
    background: "#e8edf0",
    // padding: "5%",
    margin: "5%",
    '& .MuiGrid-item':{
      padding: '2%',
    },
    '& .MuiGrid-item-12':{
      padding: '1%',
    }
    
  },
  textfile:{
    backgroundColor: "white",
    border: "0px",
    margin:"4%",
  },
  sendbtn: {
    backgroundColor: 'rgb(250, 248, 186)',
    color: "white",
  }
})


const Input = () => {

  const classes = useStyles();
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={classes.outer}>
    <Container>
      <div className={classes.root}>
        <Grid container justify="center"> 
          <Grid item xs={1} md={3}></Grid> 
          <Grid item xs={10} md={6}>    
            <Card elevation={5} justify="center" className={classes.card}>
              <Grid container >
                <Grid item xs={12} sm={12}>
                  <Typography variant="h3" style={{fontFamily: "MainFont, cursive", margin: "20px"}} >
                    Enter Details
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}> 
                  <TextField className={classes.textfile}
                    value={formValues.name || ""}
                    onChange={handleChange}
                    required
                    label="Name"
                    type="text"
                    name="name"
                    variant="outlined"
                    style={{margin: "2px 2px 20px", width: "100%"}}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} md={12}> 
                  <TextField className={classes.textfile}
                    value={formValues.email || ""}
                    onChange={handleChange}
                    required
                    label="Email"
                    type="text"
                    name="email"
                    variant="outlined"
                    style={{margin: "2px 2px 20px  ", width: "100%"}}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12} md={12}> 
                  <TextField className={classes.textfile} 
                    value={formValues.phone || ""}
                    onChange={handleChange}
                    required
                    name="phone"
                    label="Mobile Number"
                    type="text"
                    variant="outlined"
                    style={{margin: "2px 2px 20px", width: "100%"}}
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField className={classes.textfile}
                    value={formValues.query}
                    onChange={handleChange || ""}
                    required
                    multiline
                    rows={3}
                    label="Query"
                    type="text"
                    name="query"
                    variant="outlined"
                    style={{margin: "2px 2px 20px", width: "100%"}}
                    color="secondary"
                  />
                  <Button className={classes.sendbtn}
                    color="rgb(250, 248, 186)"
                    size="large"
                    variant="outlined"
                    endIcon={<SendIcon />}
                    style={{ margin: "10px", color: 'black' }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
      </div>
    </Container>   
    </div>
  );
};

export default Input;
