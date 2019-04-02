import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Address from './Address';
import { List, Button } from '@material-ui/core';
import CreateAddress from './CreateAddress';


class MyAddresses extends Component{

  state = {
      createModelOpen : false
  }

  onClose = () => {
      this.setState({
          createModelOpen : false
      })
  }

  onOpen = () => {
      this.setState({
          createModelOpen :true
      })
  }



    render(){

        

        return(

            <div className="col-lg-8">
                <div className="padding-top-2x mt-2 hidden-lg-up"></div>
                <h4>Contact Address</h4>
                <hr className="padding-bottom-1x" />
                {!this.props.getProfile.loading ? 
                    <List>
                        {this.props.getProfile.profile.Address.length == 0 ?
                        
                        <p className="text-muted" >Your Address list is Empty to Add New Addres Press Add New Addres Buttom</p>

                        :

                        this.props.getProfile.profile.Address.map((addr,i) => 
                        <Address
                            key = {i}
                            Address={addr} 
                            {...this.props}
                        /> 
                        )

                    }
                        
                    </List>
                :
                    null
                }
                <Button color="primary" onClick={this.onOpen}>+ New Address </Button>
                <CreateAddress {...this.props} open={this.state.createModelOpen} onOpen = {this.onOpen} onClose={this.onClose}/>
            </div>

        );
    }
}

export default MyAddresses;