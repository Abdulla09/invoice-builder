import { useState } from "react"
import jsPDF from "jspdf"
import html2pdf from "html2pdf.js"
const Build = ()=>{

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const createPdf = ()=>{
    var doc = new jsPDF()

    var source = document.querySelector(".buildDiv")

    html2pdf(source, {
      margin: 10,
      filename: 'my_document.pdf',
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  }

  return(
    <div>

    <div className="invoiceDiv">
      <nav>
      </nav>
      <div className="header">
      <p>Invoice Builder</p> 
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

    <div className="buildDiv">
      <p>{name}</p>
      <p>{email}</p>
    </div>

    </div>
  )
}

export default Build