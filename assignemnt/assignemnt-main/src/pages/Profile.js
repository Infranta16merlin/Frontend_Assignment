import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
        <div className='left'>
         
        <Link to={`/users/${profile.id}`} className='left-panel'> Profile </Link>
        <br/>
        <Link to={`/users/${profile.id}/posts`}style={{position:'relative',top:'28%',left:'24%'}}> Posts </Link>
        <br/>
        <Link to={`/users/${profile.id}/gallery`}style={{position:'relative',top:'32%',left:'24%'}}> Gallery </Link>
        <br/>
        <Link to={`/users/${profile.id}/todo`}style={{position:'relative',top:'36%',left:'24%'}}> Todos </Link>
        </div>
        <div>
        <img src={profile.profilepicture} alt={profile.name} className='nrml-img'/>
        <h2 style={{textAlign:'center',paddingRight:'42%'}}>{profile.name}</h2>
        <h2 className='profileData'> Username: {profile.username}</h2>
        <h2 style={{textAlign:'center',paddingRight:'34%'}}> Email: {profile.email}</h2>
        <h2 style={{textAlign:'center',paddingRight:'29%'}}> Phone: {profile.phone}</h2>
        <h2 style={{textAlign:'center',paddingRight:'39%'}}> Website: {profile.website}</h2>
        </div>
        <hr style={{marginLeft:'24%',marginRight:'39%'}}/>

        <div>
          <h2 style={{textAlign:'center',paddingRight:'38%'}}>Company</h2>
        <h2 style={{textAlign:'center',paddingRight:'45%'}}> Name: {profile?.company?.name}</h2>
        <h2 style={{textAlign:'center',paddingRight:'11%'}}> catchphrase: {profile?.company?.catchPhrase}</h2>
        <h2 style={{textAlign:'center',paddingRight:'11%'}}> bs: {profile?.company?.bs}</h2>
        </div>

        <hr className='vertical'/>
        <div className='right'>
          <h2>Address:</h2>
          <h2 style={{marginLeft:'7%',paddingRight:'0%'}}> Street : {profile?.address?.street}</h2>
        <h2 style={{marginLeft: '8%'}}> Suite : {profile?.address?.suite}</h2>
        <h2 style={{marginLeft:'5%'}}> City : {profile?.address?.city}</h2>
        <h2 style={{marginLeft:'0%'}}> Zipcode: {profile?.address?.zipcode}</h2>
        
        <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492134983!2d77.3012646607384!3d12.954459535201728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1687842354734!5m2!1sen!2sin"  style={{border:'0',width:'384px',height:'350px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>



        </div>
        </>
      
       

    )
}

export default Profile;