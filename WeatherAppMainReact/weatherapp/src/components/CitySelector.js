import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
//import {API_KEY, API_BASE_URL} from '../apis/config';


const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');

  return (
    <div className="body">
      <Row>
        <Col>
          <h1>Search your city!</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>

      <Row>
        <Col>
         {/* don't forget to edit our function  */}
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CitySelector;