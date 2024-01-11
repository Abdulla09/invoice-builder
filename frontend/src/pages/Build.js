import { useState, useRef } from "react"
import jsPDF from "jspdf"
import html2pdf from "html2pdf.js"
import "../css/build.css"
import logo from "../images/invoicelogo.svg"
import Dropdown from "../components/Dropdown.js"
const Build = ()=>{

  const fileInputRef = useRef(null);

  const handleFileDivClick = () => {
      fileInputRef.current.click();
  };

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
          <p>Invoicing Made Simple with <span>EasyInvoice</span></p>
          <p>Generate an online bill with our free invoice creator in moments.</p>
      </div>

      <div className="billDiv">
        <div className="billInnerDiv">
          <div className="billDetailsDiv">
            <div>
              <div className="InvoicePurchaseDiv">
                <div>
                  <label>Invoice number</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Purchase order</label>
                  <input type="text"></input>
                </div>
              </div>

              <div className="companyDetailsDiv">
                <label>Your company details</label>
                <textarea rows="6"></textarea>
              </div>

              <div className="currencyDiv">
                <label>Currency</label>
                <Dropdown />
              </div>
            </div>

            <div>
              <div>
                
              </div>

              <div>
                <textarea></textarea>
              </div>

              <div>
                <label for="currency">Currency</label>

                <select name="currency" id="currency">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            

          </div>
          <div>

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