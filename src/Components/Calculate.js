import React, { useState } from 'react';
import axios from 'axios';
function Calculate() {
     
    const [amount, setAmount] = useState('');
    const [percentagetip, setPercentagetip] = useState('');
    const [finalanswer, setFinalanswer] = useState({ tip: 0, total: 0 });

    const submit = async() =>{
         const persedAmount = parseFloat(amount)
         const persedPercentageTip=parseFloat(percentagetip)
        
         if(isNaN(persedAmount) || persedAmount <=0 ){
            alert('positive value enter the Amount')
            return
         }
         else if(isNaN(persedPercentageTip) || persedPercentageTip < 0 || persedPercentageTip > 100){
            alert('Percentage tip value Minimum 0 to maxmum 100')
            return
         }
         try{
            const results= await axios.post('http://localhost:5000/',{
                amount: persedAmount,
                percentagetip:persedPercentageTip
            })
            setFinalanswer(results.data)
         }
         catch(error){
             console.log('error')
         }
          
        }

  return (
    <div className='ok'>
          
          <h1>Tips Calculator</h1>
      <div className='main'>
            <input id='look' type="number" placeholder="Bill Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br/><br/>
            <input id='look' type="number" placeholder="Percentage Tip" value={percentagetip} onChange={(e) => setPercentagetip(e.target.value)}/><br/><br/>
            <button onClick={submit}>Calculate Tip</button>
           
            </div>
            <div className='output'>
                <p>Tip: ${finalanswer.tip.toFixed(2)}</p>
                <p>Total Amount: ${finalanswer.total.toFixed(2)}</p>
            </div>
    </div>
  )
}

export default Calculate
