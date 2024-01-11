import { useState, useRef } from "react"
import jsPDF from "jspdf"
import html2pdf from "html2pdf.js"
import "../css/build.css"
import logo from "../images/invoicelogo.svg"
import Dropdown from "../components/Dropdown.js"
import Date from "../components/Date.js"
import downloadIcon from "../images/downloadIcon.svg"
import dayjs from 'dayjs';
import { DatePicker } from 'antd';


const Build = ()=>{

  const fileInputRef = useRef(null);

  const [invoiceDate, setInvoiceDate] = useState(dayjs());

  const disabledDate = (todaysDate) => {
    return todaysDate < invoiceDate.subtract(0, 'day');
  };

  const handleInvoiceDateChange = (date) => {
    setInvoiceDate(date);
  };


  

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
            <div className="InvoicePurchaseLogoDiv">
              <div>
                <div>
                  <label>Invoice number</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Purchase order</label>
                  <input type="text"></input>
                </div>
              </div>
              <div className="logoDiv">
                <label>Logo</label>
                <div>
                  <img src={downloadIcon} alt="downloadIcon" />
                  <p>Choose a file or drag & drop it here</p>
                  <p>JPG, JPEG, PNG formats, up to 5MB</p>
                </div>
              </div>
            </div>

            <div className="billToFromDiv">
              <div>
                <label>Your company details</label>
                <textarea rows="5">
                </textarea>
              </div>

              <div>
                <label>Bill to</label>
                <textarea rows="5">
                </textarea>
              </div>

            </div>

            <div className="currencyDateDiv">
              <div className="currencyDiv">
              <label>Currency</label>
              <Dropdown />
              </div>

              <div className="dateDiv">
                <div>
                  <label>Date</label>
                  <DatePicker defaultValue={invoiceDate} onChange={handleInvoiceDateChange} />
                </div>
                <div>
                  <label>Due date</label>
                  <DatePicker disabledDate={disabledDate} />
                </div>
              </div>
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