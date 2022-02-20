import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material';

import useStyles from './styles.js';
import Form from './Form/Form.jsx';
import List from './List/List.jsx';

const Main = () => {
    const classes = useStyles
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                    Try saying: add income in ....
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main;
