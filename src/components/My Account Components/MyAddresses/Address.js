import React,{Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditAddress from './EditAddress';


class Address extends Component {
    
    state = {
        editAddOpen : false
    }

    onClose = () => {
        this.setState({
            editAddOpen:false
        })
    }   
    
    onOpen = () => {
        this.setState({
            editAddOpen : true
        })
    }

    onDelete = () => {
        this.props.onDeleteAddress(localStorage.getItem('token'),this.props.Address.pk)
        setTimeout(()=>this.props.onGetProfile(localStorage.getItem('token')),1000)
    }
        
    render(){
        
        
        return(
      
        <ListItem  role={undefined} dense button >
          <ListItemText primary={this.props.Address.address} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments" onClick={this.onDelete}>
              <i className="fa fa-trash"></i>
            </IconButton>
            <IconButton onClick={this.onOpen} aria-label="Comments">
              <i className="fa fa-pencil"></i>
            </IconButton>
          </ListItemSecondaryAction>
          <EditAddress 
                open = {this.state.editAddOpen}
                onClose = {this.onClose}
                Address = {this.props.Address}
                {...this.props}
                />
        </ListItem>
      
    )
    }
}

export default Address