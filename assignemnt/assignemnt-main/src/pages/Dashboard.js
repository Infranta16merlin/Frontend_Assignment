import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import './Dashboard.css'

const Dashboard = () => {

  const {loading,users} = useGlobalContext();
  console.log(loading,users);

  


  return (
    <main>
          <h2 className='heading'>Select an account</h2>
          { users?.map((user) =>{
            return (
              <section key={user.id} className='section'>
                  <img src={user.image} alt={user.name} className='image'/>
                  <br style={{clear:'both'}} />
                  <p className='name'>{user.name}</p>
                  <Link to={`/users/${user.id}`} className='btn btn-primary btn-details'> Details </Link>
              </section>
            )
          })
            
          }
    
    </main>
  );
};

export default Dashboard;
