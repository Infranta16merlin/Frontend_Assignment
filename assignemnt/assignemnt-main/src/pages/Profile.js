import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import './Profile.css'



const Profile = () =>{
    
    const {users} = useGlobalContext();
    const { id } = useParams();
    console.log(users,id);
    const [loading, setLoading] = React.useState(false)
    const [profile, setProfile] = React.useState({})
  
    React.useEffect(() => {
      setLoading(true)
      async function getProfile() {
        try {
          const response = await fetch(
            `https://panorbit.in/api/users.json?i=${id}`
          )
          const data = await response.json();
          const respId =  parseInt(id, 10);
          console.log(respId);
          const newResponse = data.users[respId-1];
          console.log(newResponse);
          if (newResponse) {
           setProfile(newResponse)
         }
        } catch (error) {
        }
        setLoading(false)
      }
      getProfile()
    }, [id])


    return (
        <>
        <div className='header'>
         <h2 className="heading">Profile</h2>
         <div className='profile'> 
         <img src={profile.profilepicture} alt={profile.name} className='image'/>
         <br style={{clear:'both'}} />
         <h4>{profile.name}</h4>
         
         </div>
            
        </div>
        <hr></hr>
        <img src={profile.profilepicture} alt={profile.name} className='nrml-img'/>
        <h2 style={{textAlign:'center',paddingRight:'21%'}}>{profile.name}</h2>
        <h2 className='profileData'> Username: {profile.username}</h2>
        <h2 className='profileData'> Email: {profile.email}</h2>
        </>
      
       

    )
}

export default Profile;