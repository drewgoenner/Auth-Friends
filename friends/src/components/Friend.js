import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';




const CardDiv = styled.div`
width: 40%;

`;

 const Friend = (props) => {
     console.log (props)

    return (

        
        <CardDiv>
            <Card.Group>
                <Card fluid color = 'blue' 
                header ={props.name}
                description = {`Age: ${props.age}`}
                meta = {`email: ${props.email}`}
                // extra = {`ID: ${props.id}`}
                  />    
                
            </Card.Group>
        </CardDiv>
        
        
    )

}

export default Friend;