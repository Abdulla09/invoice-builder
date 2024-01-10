import { useState } from "react"
import jsPDF from "jspdf"
import html2pdf from "html2pdf.js"
import "../css/build.css"
import logo from "../images/invoicelogo.svg"
const Build = ()=>{

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const createPdf = ()=>{

    var source = document.querySelector(".buildDiv")

    html2pdf(source, {
      margin: 10,
      filename: 'my_document.pdf',
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  }

  return(
    <main>

    <div className="invoiceDiv">
      <nav>
        <img src={logo} alt="logo" />
      </nav>
    
    <div className="buildDiv">
      <div className="header">
        <div>
          <p>Build Invoice</p>
        </div>
      </div>

      <div className="billDiv">
        <div className="billHeader">
          <p>BILL FROM</p>
        </div>
        <div className="billInnerDiv">
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Address" rows="4" />
          </div>
          <div>
          <input type="text" placeholder="Date" onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} />
          <input type="text" placeholder="Due Date" onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")} />          <div>

          </div>
          <div className="fileDiv">
            <p>Browse for Logo</p>
            <p>JPEG, PNG, SVG formats, up to 5MB</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    <form onSubmit={handleSubmit}>
    <label name="fname">Name</label>
    <input type="text" id="fname" name="fname" onChange={(e)=>setName(e.target.value)} />

    <label name="email">Email</label>
    <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} />

    <input type="submit" value="submit" />
    </form>

    <button onClick={createPdf}>invoice</button>
    
    </div>

    <div className="buildDi">
      <p>{name}</p>
      <p>{email}</p>
    </div>

    </main>
  )
}

export default Build