import {Link} from 'react-router-dom'

import "../home.css"

const Home = () => {
  return(
    <div className="container">
      <div className="headerDiv">
        <p>Invoice Builder</p>
        <button>
          <Link to="/builder" style={{ textDecoration:"none", color:"black" }}>
            <p>Build Invoice</p>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home;