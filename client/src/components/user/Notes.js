import React, { useState } from "react";
import Swal from "sweetalert2";



const Notes = () => { 

    const [sidebarOpen, setSideBarOpen] = useState(false);

    var textarea = ''

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

    const SideBar = props => {
        const sidebarClass = props.isOpen ? "0" : "-20vw";
        return (
            
          <div style={{"position": "fixed", "top": "160px", "right":sidebarClass, "height": "100%","width": "20vw",
          "transition": "right 0.3s ease-in-out", "background-color": "lightgray","border-radius":"20px"}}>
            <div style={{ "text-align" : 'center' }}>
            <form onSubmit={(e)=>{
              e.preventDefault();downloadTxtFile()}}>
              <textarea rows="26" cols="32" onChange={(e) => {textarea = e.target.value}} style={{"font-size":"12pt",
              "border-radius":"20px 0px 0px 0px","padding": "10px"}}></textarea>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <button class="btn" id="downloadbtn"  style={{"marginTop":"13px","background-color": "#1976d2",
               "border": "none", "color": "white", "padding": "12px", "cursor": "pointer", "font-size": "20px",  "border-radius":"5px"}}>
                <i class="fa fa-download"></i> Download</button>
                </form>
            </div>
            <button onClick={props.toggleSidebar} className="sidebar-toggle" style={{"position": "absolute",  "top": "20%", 
            "left":" -80px", "height":"60px", "width": "80px", "z-index": "1", "background-color": "#1976d2",
            "border": "none", "color": "white", "padding": "12px", "cursor": "pointer", "font-size": "20px", "border-radius":"20px 0px 0px 20px"}}>
            Notes
            </button>
          </div>
        );
      };
      
      function Bar() {
        const [sidebarOpen, setSideBarOpen] = useState(false);
        const handleViewSidebar = () => {
          setSideBarOpen(!sidebarOpen);
        };
        return (
          <span>
            <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
          </span>
        );
      }
    
      function downloadTxtFile() {
        if(textarea==''){
            Swal.fire({
                title: 'Your Notes Are Empty',
                icon: 'info',
                confirmButtonColor: '#1976d2',
                confirmButtonText: 'OK',
                confirmButtonColor: '#1976d2'
    
                
              })
            return
        }
        const element = document.createElement("a");
        const file = new Blob([textarea],    
                    {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myNotes.txt";
        document.body.appendChild(element);
        element.click();
      }


    return(
        <div>
        <Bar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
       </div>
    )



}
export default Notes




  