import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const CardDiv = styled.div`
width: 100%;

`;

 const Friend = (props) => {
     console.log (props)

    return (

        
        <CardDiv>
            <Card.Group>
                <Card color = 'black' 
                header ={props.name}
                description = {`Age: ${props.age}`}
                meta = {`email: ${props.email}`}
                  />       
            </Card.Group>
        </CardDiv>
        
        
    )

}

export default Friend;