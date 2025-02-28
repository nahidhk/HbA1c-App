   
    
   function generateInvoiceID() {
    const now = new Date();

    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); 
    const yy = String(now.getFullYear()).slice(-2);
    const hh = String(now.getHours()).padStart(2, '0');
    const mi = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    return `${dd}${mm}${yy}${hh}${mi}${ss}`;
}

console.log(generateInvoiceID()); 


   
        function convertMgDlToMmolL(value, factor) {
          return (value / factor).toFixed(2);
        }
        
        function calculateHealthMetrics(glucoseMgDl) {
          const glucoseFactor = 18;
          const creatinineFactor = 88.4;
          const cholesterolFactor = 38.67;
          
          let hbA1c = ((glucoseMgDl + 46.7) / 28.7).toFixed(2);
          let creatinineMgDl = (glucoseMgDl > 160) ? (1.1 + Math.random() * 0.2).toFixed(2) : (0.7 + Math.random() * 0.4).toFixed(2);
          let bunMgDl = (glucoseMgDl > 160) ? (18 + Math.random() * 7).toFixed(2) : (10 + Math.random() * 10).toFixed(2);
          let ldlMgDl = ((glucoseMgDl - 100) * 0.2 + 100).toFixed(2);
          let triglyceridesMgDl = ((glucoseMgDl - 100) * 0.5 + 120).toFixed(2);
          
          return {
            "Blood Glucose": { "mg/dL": glucoseMgDl, "mmol/L": convertMgDlToMmolL(glucoseMgDl, glucoseFactor) },
            "HbA1c (%)": hbA1c,
            "Creatinine": { "mg/dL": creatinineMgDl, "µmol/L": convertMgDlToMmolL(creatinineMgDl, creatinineFactor) },
            "BUN": { "mg/dL": bunMgDl, "mmol/L": convertMgDlToMmolL(bunMgDl, 2.8) },
            "LDL": { "mg/dL": ldlMgDl, "mmol/L": convertMgDlToMmolL(ldlMgDl, cholesterolFactor) },
            "Triglycerides": { "mg/dL": triglyceridesMgDl, "mmol/L": convertMgDlToMmolL(triglyceridesMgDl, cholesterolFactor) }
          };
        }
        
        function tester() {
          let unit = document.getElementById("step1").value;
          let inputValue = parseFloat(document.getElementById("step2").value);
          
          if (isNaN(inputValue) || inputValue <= 0) {
            alert("Please enter a valid glucose value.");
            return;
          }
          
          let glucoseMgDl = unit === "mg/dL" ? inputValue : inputValue * 18;
          let results = calculateHealthMetrics(glucoseMgDl);
          document.getElementById('vcc').style.display='block';
          document.getElementById("mgdl").textContent = results["Blood Glucose"]["mg/dL"];
          document.getElementById("mmoll").textContent = results["Blood Glucose"]["mmol/L"];
          document.getElementById("hba1c").textContent = results["HbA1c (%)"] + " %";
          document.getElementById("creatinine_mgdl").textContent = results["Creatinine"]["mg/dL"];
          document.getElementById("creatinine_umoll").textContent = results["Creatinine"]["µmol/L"];
          document.getElementById("bun_mgdl").textContent = results["BUN"]["mg/dL"];
          document.getElementById("bun_mmoll").textContent = results["BUN"]["mmol/L"];
          document.getElementById("ldl_mgdl").textContent = results["LDL"]["mg/dL"];
          document.getElementById("ldl_mmoll").textContent = results["LDL"]["mmol/L"];
          document.getElementById("triglycerides_mgdl").textContent = results["Triglycerides"]["mg/dL"];
          document.getElementById("triglycerides_mmoll").textContent = results["Triglycerides"]["mmol/L"];
        }
        
        
        
     
     
       function downloadImage() {
            const element = document.getElementById("capture");

            if (!element) {
                console.error("Element not found!");
                return;
            }

            html2canvas(element, { useCORS: true }).then(canvas => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = generateInvoiceID()+".png";
                alert("Download Image File Name:"+generateInvoiceID()+".png")
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }).catch(error => console.error("Error generating image:", error));
        }
   
  
  document.getElementById('invid').innerHTML= generateInvoiceID();
  
  
  function getFormattedDateTime() {
    const now = new Date();

    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); 
    const yy = String(now.getFullYear()).slice(-2); 

    const hh = now.getHours();
    const mi = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');

    
    const ampm = hh >= 12 ? 'PM' : 'AM';
    const hour = hh % 12 || 12; 

    return `${dd}/${mm}/${yy} ${String(hour).padStart(2, '0')}:${mi}:${ss} ${ampm}`;
}

console.log(getFormattedDateTime()); 
document.getElementById('sDate').innerHTML=getFormattedDateTime();