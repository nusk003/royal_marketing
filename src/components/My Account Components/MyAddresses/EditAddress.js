import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditAddress extends Component{

    state = {
        address : this.props.Address.address
    }

    handleChange = event => {
        this.setState({
            address : event.target.value
        })
        console.log(this.state)
    
    }

    onSave = () => {

        if (localStorage.getItem('token') != undefined ){
            this.props.onEditAddress(localStorage.getItem('token'),this.props.Address.pk,this.state.address)
            setTimeout(() => this.props.onClose(),1000)
            setTimeout(() => this.props.onGetProfile(localStorage.getItem('token')),1000)
        }
    }

    render(){
        return(
            <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-dialog-title" fullWidth= {true}
            maxWidth= 'sm'>
        <DialogTitle id="form-dialog-title">Edit Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit Your Address
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            defaultValue = {this.props.Address.address}
            onChange = {this.handleChange}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
               
        )
    }
}

export default EditAddress