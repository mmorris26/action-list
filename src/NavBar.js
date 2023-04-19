import { Link } from "react-router-dom";



export default function NavBar(){
    return(
        // <div className='navigation-bar'>
        //   <h1 id="actions-tab">Actions</h1>
        //   <h1 id="weather-tab">Weather</h1>
        // </div>

        <nav>
            
            <Link to="/weather">Weather</Link>
        </nav>
    )
}