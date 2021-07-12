module.exports = ({ name, price1, price2, receiptId }) => {
   const today = new Date();

   return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
          
             .invoice-box {
             max-width: 90%;
             margin:auto;
             padding: 30px;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height:44px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: blue;
             
             
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }

             .invoice-box table.first td{
               padding: 15px;
               vertical-align: top;
               border: 2px solid;
               width:500px;   
               border-collapse: collapse;
               height:30px;
               }


            .invoice-box table.first tr td:nth-child(2){
               text-align:center;
               font-size:30px;
              
            }

            .invoice-box table.first tr td:nth-child(3){
               line-height:1.8;
            }

            .invoice-box table.second td{
               padding: 10px;
               vertical-align: top;
               border: 2px solid;
               line-height:1.4;
               width:500px;
         
            }

            .invoice-box table.second tr td:nth-child(2){
               padding: 10px;
               vertical-align: top;
               border: 2px solid;
               line-height:1.8;
               width:500px;
            }



            .invoice-box table.third td{
             padding: 10px;
             vertical-align: top;
             border: 2px solid;
             line-height:1.6;
            
            }

            .invoice-box table.third {
             width:99.7%;
            
              
              }
           

               
            .invoice-box table.fourth {
               border:2px solid;
               width:99.5%;
               padding-left:10px;
               
               
         }

           
           
            

            .invoice-box table.fifth {
               border-collapse:collapse;
               width:99.5%;
               margin-top:30;            
               
               height:120px;
               
               
         }
            
         
         .invoice-box table.fifth td{
            line-height:30px;
           
            border: 2px solid;
            
           }

          


           .invoice-box table.fifth tr td:nth-child(1) {
           
            width:90px;
            }

            .invoice-box table.fifth tr td:nth-child(2) {
               
               width:350px;
               }
   
               .invoice-box table.fifth tr td:nth-child(3) {
                  
                  width:100px;
                  }

                  .invoice-box table.fifth tr td:nth-child(4) {
                     
                     width:250px;
                     }

                
                  
                   

                    .invoice-box table.seventh {
                     width: 400px;
                     border: 2px solid black;
                     padding: 50px;
                     margin: 40px;  
                     height:20px; 
                    }


                    .bigtext {
                       
                       line-height:1.7;
                    }





                    .smollbox {
                       margin-top:70px;
                    }
         
                  
             
             
          </style>
       </head>
         <body>
                  <div class="invoice-box">
                     <table class="first">
                           <tr>
                              <td xclass="eleone"><img  src="https://entema-sa.com/images/logo.png"
                                 style="width:100%; max-width:600px;"></td>
                              <td xclass="eletwo">
                                <text> QUOTATION</text>
                              </td>
                              <td xclass="eletwo">
                              <text>Date :   </text></br>
                              <text>Quot# :   <text></br>
                              
                              
                              </td>
                           </tr>
                     </table>   
                     <text style="font-weight:bolder;"
                     >EQUIPMENT</text>
                     <table class="second">
                           <tr>
                              <td xclass="eleone">
                              
                              <text style="font-size:20px;font-weight:bolder;"
                              >Entema Al Shamal Gen.cont.Est</text></br>

                              <text>Al-Jubail St P.O Box 2816,Jubail 31951,Saudi Arabia</text></br>
                              <text>PHONE : 013 363 1210</text></br>
                              <text>Eamil : info@entema-sa.com<text></br>
                              <text> VAT No : 310005823700003 </text></br>
                                </td>
                              <td xclass="eletwo">
                                <text style="font-weight:bolder;"
                                > WORK SCHEDULE</text></br>
                                <text> Valid :</text></br>
                                <text> From :</text></br>
                                <text> User Mobile No :</text></br>
                               

                               
                              </td>                     
                           </tr>
                     </table>
                     <table class="third">
                          
                             
                                 
                                    <tr>
                                       <td xclass="nostyle">
                                          <text style="font-weight:bolder;"
                                          >CLIENT</text></br>
                                          <text> Name :</text></br>
                                          <text>Mobile No :</text>
                                          <text style="margin-left:250px;"
                                          >Company :</text>
                                          <text style="margin-left:350px;"
                                          >Email  :</text>
                                         
                                       </td>
                                     
                                    </tr>
                                   
                             
                                                    
                           
                     </table>               

                     <table class="fourth">
                           <tr>
                              <td xclass="eletwo">
                                  <text>With reference to the above subject we are very much intrested to supply and hereby quote our 
                                  best reasonable price for the same</text>
                               </td>   
                             
                           </tr>     
                           
                        </table>          
                        
                        <table class="fifth">
                        <tr>
                           <td xclass="elethree">
                               <text style="font-weight:bolder; margin-left:10px;"
                               >Serial No. </text>
                            </td>   
                            <td xclass="elethree">
                               <text style="font-weight:bolder; margin-left:10px;"
                               >Description</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="font-weight:bolder; margin-left:10px;"
                               >Quantity</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="font-weight:bolder; margin-left:10px;"
                               >Price</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="font-weight:bolder;  margin-left:10px;"
                               >Mobilization & Demobilization</text>
                            </td>  
                           
                          
                        </tr>    
                        
                        <script>
                        var i=0;
                        for(i=0;i<10;i++){
                           document.write("<tr>
                           <td xclass="elethree">
                               <text  style="margin-left:10px";
                               >1 </text>
                            </td>   
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >coaster with driver</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >1</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >8000.00/month</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >N/A</text>

                               
                            </td>  
                           
                          
                           
                            
                        </tr>");   
                        }

                        </script>
                        <tr>
                           <td xclass="elethree">
                               <text  style="margin-left:10px";
                               >1 </text>
                            </td>   
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >coaster with driver</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >1</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >8000.00/month</text>
                            </td>  
                            <td xclass="elethree">
                               <text style="margin-left:10px";
                               >N/A</text>

                               
                            </td>  
                           
                          
                           
                            
                        </tr>   
                       </table>

                       <text
                       style="font-size 22; font-weight:bolder;"
                       >TERMS AND CONDITIONS </text>
                      <div class="bigtext">
                      <text >1. Above rate is applicable for 10 hours per day, 260 hours per month.</br>
                       2. Working less than 10 hours day will be considered as full working day.</br>
                      3. Supply Food, accommodation & site transportation Scope of Client.</br>
                       4. In case of non-availability of work or inadequate weather conditions, normal daily rate will be charged.</br>
                        5. Payment terms will be 30 days after receipt of the Entema al-shamal invoice.</br>
                         6. Above Rate is Exclusive of VAT .</br>
                          7. Mobilization will be done immediately after receiving the P.O.</br>
                           8. Our quotation valid for ten days from the date of this offers and is subject to the availability of manpower & equipment, until receipt of the P.O.</br>
                            9. All above mentioned conditions must be mentioned in your purchase order. Hope above quotation is made good and looking forward to get your valuable purchase order at the earliest.</br>
                             Your usual Cooperation would be highly appreciated.  </br>
                             
                             </text>
                        </div>

                        <div>
                           <text>Client has to return the same Quotation to Entema Al-Shamal by Fax or Email after Confirmation Signature</text></br>

                           <text 
                           style="font-size:20px;font-weight:bolder;"
                           >CLIENT ACCEPTANCE </br>
                            </text>
                           <text>(Fareed)</text>
                           </div>

                     
                    
                       



                   <table class="first">
                   <tr>
                      <td xclass="eleone">
                      <text> Name:</text></br>
                      <text> Title :</text></br>
                      <text> Date :</text></br>
                      <text> Signature  : </text></br>
                     
                       </td>
                     
                      <td xclass="eleone">
                      <text style="font-size:18px; margin-left:200px; "
                      > For Entema Al Shamal Gen. cont. Est</text></br>
                      <div class="smollbox">
                     <text 
                     style="font-size:18px;  margin-left:300px;"
                     >Entemasw , Manager</text></br>
                    
                     </div>

                     
                  
                    
                      
                      </td>
                   </tr>
             </table>  
                   
                   

          </div>
      </body>
    </html>
    `;
};