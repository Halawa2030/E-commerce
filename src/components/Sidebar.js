import { Link } from "react-router-dom"

function Sidebar() {
    return(
        <>
        <ul className="halawa"> 
            <li>
                <Link to="/Products" >get All Productes</Link>
            </li>
            <li>
                <a href="/#" >get All Cateogries</a>
            </li>
        </ul>
        </>
    )
}
export default Sidebar