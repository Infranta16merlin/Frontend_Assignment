import { useParams, Link } from "react-router-dom";

const NavBar = () =>{
    const {id} = useParams();
    return (
        <div>
              <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to={`/users/${id}`}>Profile</Link>
          </li>
        </ul>
        </div>
    )

}

export default NavBar;
