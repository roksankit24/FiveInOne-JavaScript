/*********No. 1*************************************************************
 JAVASCRIPT CODE FOR 
 GRADE CALCULATOR  (index.html) 
 FUNCTION NAME => calcy()
***************************************************************************/
const calcy = () =>{
	let core1 = document.getElementById('core1').value;
	let core2 = document.getElementById('core2').value;
	let ge = document.getElementById('ge').value;
	let sec = document.getElementById('sec').value;
	let grades = "";
  
  
	let totalGrades = parseFloat(core1) + parseFloat(core2) + parseFloat(ge) + parseFloat(sec);
  
  
	let perc = (totalGrades/400) * 100;
  
  
	debugger;
  
	if(perc <= 100  && perc >= 80){
	  grades = 'A';
	}else if(perc <= 79  && perc >= 60){
	   grades = 'B';
	}else if(perc <= 59  && perc >= 40){
	   grades = 'C';
	}else{
	   grades = 'F';
	}
  
	if(perc >= 39.5){
	  document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
	}
	else{
	  document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
	}
  
	
  }

/************************************************************************************************************************************/
/************************************************************************************************************************************/

/***********************************************************************************
 No 2
 JavaScript Code for
 Body Mass Index (bmi.html)
 ***********************************************************************************/
const bmi=()=>{
	let mname = document.getElementById('name').value;
	let feet = document.getElementById('feet').value;
	let inch = document.getElementById('inch').value;
	let wt = document.getElementById('wt').value;
   
	// Merge Feet and Inches Values in one
	let merge = parseFloat(feet) + "." + parseFloat(inch);
	
	// Convert Height into Metres.
	let height= merge/3.2808;
	
	// Calculating BMI     
	let index= parseFloat(wt) / (height*height);
	
   
	debugger;
	 
   if(index < 18.50){
	  
	  document.getElementById('showData').innerHTML = " Hi "+(mname)+", Your Body Mass Index (BMI) is "+ (index.toFixed(2)) +"<br>Your Value is Under Weight. "
	}
	else if ((index >= 18.50) && (index <=24.90)){
	 
	  document.getElementById('showData').innerHTML = " Hi "+(mname)+", Your Body Mass Index (BMI) is "+ (index.toFixed(2)) +"<br>Your Value is Normal Weight. "
	}
	else if ((index >= 25.00) && (index <=29.90)){
   
	  document.getElementById('showData').innerHTML = " Hi "+(mname)+", Your Body Mass Index (BMI) is "+ (index.toFixed(2)) +"<br>Your Value is Over Weight. "
	}
	else if (index >= 30.00){
	  
	  document.getElementById('showData').innerHTML = " Hi "+(mname)+", Your Body Mass Index (BMI) is "+ (index.toFixed(2)) +"<br>Your Value is Obesity . "
	}   
  }

/************************************************************************************************/
/************************************************************************************************/

/***********************************************************************************
 No 3
 JavaScript Code for
 BULB (bulb.html)
 ***********************************************************************************/
function light(){

	var bid = document.getElementById('bulb');
	 if (bid.src.match("On.png")){
	   bid.src="Off.png";
	 }
	 else{
	   bid.src="On.png";
	 }

  }

/************************************************************************************************/
/************************************************************************************************/

/***********************************************************************************
 No 4
 JavaScript Code for
 Calculator (calculator.html)
 ***********************************************************************************/


function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}

/**********************************************************************************************************/
/**********************************************************************************************************/

/***********************************************************************************
 No 5
 JavaScript Code for
 Analog Clock (clock.html)
 ***********************************************************************************/
const deg=6;
const hr=document.querySelector("#hr");
const mn=document.querySelector("#mn");
const sec=document.querySelector("#sec");

setInterval(()=>{
  let day= new Date();
 //  alert(day);
  var hh = day.getHours()*30;
 //  alert(hh);
  let mm = day.getMinutes()*deg;
   // alert(mm);
	let ss = day.getSeconds()*deg;
	hr.style.transform = `rotateZ(${(hh+(mm/12))}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
});
 
