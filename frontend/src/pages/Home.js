import {Link} from 'react-router-dom'

import "../css/home.css"

const Home = () => {
  return(
    <div className="container">
      <div className="headerDiv">
        <p>Invoice Builder</p>
        <button>
          <Link to="/build" style={{ textDecoration:"none", color:"black" }}>
            <p>Build Invoice</p>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home;