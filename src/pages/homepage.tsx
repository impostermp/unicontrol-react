import React from 'react'

const HomePage = ({user}) => {

     return(
          <div style={{color: 'white'}}>
               Your name is: {user.username}
               <br/>
               and your password is: {user.password}
          </div>
     )
};

export default HomePage;