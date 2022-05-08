import { Typography } from '@material-ui/core';
import React from 'react'
import { StyledButton } from '../styled/Button';
import useStylesPlans from '../styles/components/StylePlans';

const Plans = ({cost,children, color,wide}) => {
    const classes = useStylesPlans();
  return (
    <div className={classes.root}>
        <Typography variant='h5' className={classes.standard}>
        {children}
        </Typography>
        <StyledButton color={color} wide={wide}>Subscribe</StyledButton>
       </div>
  )
}


export default Plans