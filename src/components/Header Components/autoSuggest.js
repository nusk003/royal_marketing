import React,{Component} from 'react'
import Autosuggest from 'react-autosuggest';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import './autoSuggest.css'

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
    {
      name: 'C',
      year: 1972
    },
    {
      name: 'Elm',
      year: 2012
    },
    {
      name: 'Computer',
      year: 2012
    },
    
  ];
  
  // Teach Autosuggest how to calculate suggestions for any given input value.
 
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.productTitle;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div style={{display:'inline-flex'}}>
      <div style={{padding:10}}>
        <img src={suggestion.Image} width={40}/>
      </div>
      <div style={{padding:10}}>
      {suggestion.productTitle}
      <p className="text-muted">{suggestion.productDesc}</p>
      </div>
    </div>
  );
  
  class Example extends React.Component {
    constructor() {
      super();
  
      // Autosuggest is a controlled component.
      // This means that you need to provide an input value
      // and an onChange handler that updates this value (see below).
      // Suggestions also need to be provided to the Autosuggest,
      // and they are initially empty because the Autosuggest is closed.
      this.state = {
        value: '',
        suggestions: []
      };
    }

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      event.preventDefault()
      const name = suggestion.productTitle.split(' ').join('-').toLowerCase();

        this.props.history.push('/'+name+'/prid/'+suggestion.id)

    }

  
    onChange = (event, { newValue, method }) => {
      event.preventDefault()
      if(method === 'enter'){
        alert("enter pressed")
      }
      this.setState({
        value: newValue
      });
      
    };

   getSuggestions = value => {

      axios.get('http://localhost:8000/api/product/suggestions/?vendorId=1&page=1&page_size=6&search='+value)
      .then((res)=>{
          this.setState({
            suggestions : res.data.results
          })  
          
      })
  
    };
  
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.getSuggestions(value)
      setTimeout(()=>console.log(this.state.suggestions),1000)
    };
  
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    onKeyDown = event => {
      if(event.keyCode === 13 && this.state.value != ""){
        this.props.history.push('/results?search='+event.target.value)
        //alert(event.target.value)
      }
    }
  
    render() {
      const { value, suggestions } = this.state;
  
      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'Type here to Search',
        value,
        onChange: this.onChange,
        onKeyDown : this.onKeyDown,
      };
  
      // Finally, render it!
      return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected = {this.onSuggestionSelected}
          
        />
      );
    }
  }
export default withRouter(Example)