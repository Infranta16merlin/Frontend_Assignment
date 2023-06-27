import { useParams, Link } from "react-router-dom";
import './Profile.css'
import { useGlobalContext } from "../context/context";

const Posts = () =>{

    const { id } = useParams();
    const { users } = useGlobalContext();
    console.log(users[id]?.name);
    console.log(id);
    return (
        <>
        <div className='profile' style={{paddingLeft:'32%',paddingTop:'3%'}}> 
         <img src={users[id]?.image} alt={users[id]?.name} className='image' style={{width:'7%',marginLeft:'79%'}}/>
         <br style={{clear:'both'}} />
         <h4>{users[id]?.name}</h4>
         
         </div>
        <h2 style={{textAlign:'center',marginTop:'-5%'}}>Posts</h2>
        <hr/>
        <div className='left'>
         
         <Link to={`/users/${id}`} className='left-panel'> Profile </Link>
         <br/>
         <Link to={`/users/${id}/posts`}style={{position:'relative',top:'28%',left:'24%'}}> Posts </Link>
         <br/>
         <Link to={`/users/${id}/gallery`}style={{position:'relative',top:'32%',left:'24%'}}> Gallery </Link>
         <br/>
         <Link to={`/users/${id}/todo`}style={{position:'relative',top:'36%',left:'24%'}}> Todos </Link>
         </div>
         <div>
        <h2 style={{textAlign:'center',marginTop:'19%'}}>Coming Soon</h2>
        </div>
        </>
        
    )

}

export default  Posts;