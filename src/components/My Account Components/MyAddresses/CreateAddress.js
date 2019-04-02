import React,{Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CreateAddress extends Component{

    state = {
        address : ""
    }

    handleChange = event => {
        this.setState({
            address : event.target.value
        })
       // console.log(this.state)
    
    }

    onSave = event => {

        event.preventDefault()

        if (localStorage.getItem('token') != undefined ){
            this.props.onCreateAddress(localStorage.getItem('token'),this.state.address)
             
            setTimeout(() => this.props.onGetProfile(localStorage.getItem('token')),500)
            setTimeout(() => this.props.onClose(),1000)
        }
    }

    render(){
        return(
            <Dialog open={this.props.open} onClose={this.props.onClose}  aria-labelledby="form-dialog-title" fullWidth= {true}
            maxWidth= 'sm'>
        <DialogTitle id="form-dialog-title">Create Address</DialogTitle>
        <form onSubmit={this.onSave}>
        <DialogContent>
          <DialogContentText>
            Enter your New Address
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            onChange = {this.handleChange}
            required
          />
          {!this.props.createAddress.loading && this.props.createAddress.error != null ?
        
            <p className="text-muted">{this.props.createAddress.error}</p>
            
          :

          null

        }

        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button  type="submit"   color="primary">
            Create
          </Button>
        </DialogActions>
        </form>
      </Dialog>
               
        )
    }
}

export default CreateAddress