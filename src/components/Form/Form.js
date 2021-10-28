import React, { useState, useEffect } from 'react'
import {Form,FormControl,Button} from 'react-bootstrap';
import {Search} from '@material-ui/icons';

const SearchForm = ({submitSearch}) => {

    const [location, setLocation] = useState('');

    const handleSubmit = (e) =>  {
        e.preventDefault();
        if(!location || location === '') return;
        submitSearch(location);
    } 
    const lastLocation = localStorage.getItem('lastLocation');
    
    useEffect(()=>{
      if( lastLocation) {
        submitSearch(lastLocation);
      }
    },[]);

    return (
        <Form className="d-flex " onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Ville..."
          name="searchCountry"
          className="me-2"
          aria-label="Search"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <Button type="submit" variant="outline-secondary"><Search/></Button>
      </Form>
    )
}

export default SearchForm
