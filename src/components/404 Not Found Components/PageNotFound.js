import React,{Component} from 'react'
import PageNotFoundContent from './PageNotFoundContent';
import loadScript from '../loadScripts';

class PageNotFound extends Component{

    componentWillMount() {
        
        const ls = new loadScript();
        ls.linkScripts();

      document.title = "Online Electrical Store "
    }
    render(){

        return(
            <div>    
            
            <PageNotFoundContent/>
            
            </div>

        )

    }

}

export default PageNotFound;