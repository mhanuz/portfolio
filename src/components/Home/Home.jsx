import React from 'react'
import './Home.css'
import myimage from '../../images/Md.Hasanuzzaman.jpg'


const Home = () => {


function DownloadFile(fileName) {
    
    var url = "data/" + fileName;
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
        var blob = new Blob([req.response], { type: "application/octetstream" });
        var isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob, fileName);
        } else {
            var url = window.URL || window.webkitURL;
            var link = url.createObjectURL(blob);
            var a = document.createElement("a");
            a.setAttribute("download", fileName);
            a.setAttribute("href", link);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    req.send();
};

  return (
    <div className='container'>
        <div className='home-content'>
                <p className='name'>Hi, I am Hasanuzzaman <span>Anuz&nbsp;&nbsp;</span> </p>
                <p className='dialogue'>A  Student at Web Programming</p>
                  <button type='button' className='button' onClick={()=>DownloadFile("Hasanuzzaman_Anuz_CV.pdf")}></button>
        </div>
        <div className='image-panel fade-in-image'>
                    <img src={myimage} alt="myge" />  
        </div>
    </div>
  )
}

export default Home