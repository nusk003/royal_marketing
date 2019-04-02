import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';



class SelectOptions extends Component {
  
render(){

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      fullWidth
      aria-labelledby="confirmation-dialog-title"
      open = {this.props.open}
      onClose = {this.props.onClose}
     
    >
      <DialogTitle id="confirmation-dialog-title">Select a Address</DialogTitle>
      <DialogContent>
        <RadioGroup
            

          aria-label="Ringtone"
          name="ringtone"
          value={this.props.value}
          onChange = {(event,newValue)=>this.props.changeHandler(event,newValue)}
          
        >
          {this.props.options.map(option => (
            <FormControlLabel value={option.address} key={option.pk} control={<Radio />} label={option.address} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={this.props.onClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );}
}





class SelectAddress extends Component {
  
    state = {
        openOptions : false
    }

    handleClose = () => {
      this.setState({
          openOptions : false
      })
    }

    onOpen = () => {
        this.setState({
            openOptions : true
        })
    }

    render(){
      return (
        <div >
          <List>

            <ListItem
              button
              divider
              aria-haspopup = "true"
              aria-controls = "ringtone-menu"
              aria-label = "Phone ringtone"
              onClick = {this.onOpen}

            >
              <ListItemText primary="Select a Address" secondary={this.props.value} />
            </ListItem>
            {!this.props.getProfile.loading ?
                <SelectOptions
                options = {this.props.getProfile.profile.Address}
              open={this.state.openOptions}
              onClose={this.handleClose}
              value={this.props.value}
              changeHandler = {(event,newValue) => this.props.changeHandler(event,newValue)}

            />
            :

            null

            }
            
          </List>
        </div>
      );
    }
}

export default SelectAddress;