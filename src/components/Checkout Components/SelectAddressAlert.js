import React,{Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends Component {
  

  render(){
      const vertical = this.props.vertical
      const horizontal = this.props.horizontal  
  return (
    <div>
      
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={this.props.open}
        onClose={this.props.close}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{this.props.message}</span>}
        
      />
    </div>
  );
}
}

export default PositionedSnackbar;