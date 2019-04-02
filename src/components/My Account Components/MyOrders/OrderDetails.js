
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { DialogTitle, DialogContent } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  right:{
      textAlign : 'right'
  }
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
<List className={classes.root}>
   { props.details.map((detail,i)=>
    <ListItem key={i} alignItems="flex-start">
   
    
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src={detail.image} />
    </ListItemAvatar>
    <ListItemText
      primary={detail.title}
      secondary={
          detail.selectedVariants.map((variant,j)=>
          <React.Fragment key={j}>
          <Typography component="span" className={classes.inline} color="textPrimary">
            {variant.variant}
          </Typography>
          {variant.value}
        </React.Fragment>
          )
        
      }
    />
    <ListItemText
      
      secondary={
        <React.Fragment>
          
          {"x"+detail.qty}
          
        </React.Fragment>
      }
    />
    <ListItemText
      className = {classes.right}
      secondary={
        <React.Fragment>
          
          {"Rs."+detail.price}
          
        </React.Fragment>
      }
    />
    <ListItemText
      className = {classes.right}
      secondary={
        <React.Fragment>
          
          
          {detail.discount == null ? 
            "Rs."+(detail.price*detail.qty)
            :
            <span>
            <del>{"Rs."+(detail.price*detail.qty)}</del><br/>
            {"Rs."+(detail.discount*detail.qty)}
            </span>
            }
          
        </React.Fragment>
      }
    />
  </ListItem>
    )}
    
      

    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
