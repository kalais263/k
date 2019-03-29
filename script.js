function insert(num){
	if(document.getElementById("opp").value==0)
	{
		document.getElementById("opp").value="";
	}
    document.form.textview.value=document.form.textview.value+num;
  }
  
 function equals(){
    var txt=document.form.textview.value;
    if(txt)
    document.form.textview.value=eval(txt);
    else
      document.form.textview.value='ERROR'
  }
  
  function clean(){
    document.form.textview.value="";
  }
  
  function back(){
    var txt=document.form.textview.value;
    document.form.textview.value=txt.substring(0,txt.length-1);
  }
  function opposite()
  {
	  var txt=document.getElementById("opp");
	 var a=txt.value;
	a=a*-1;	 
document.getElementById("opp").value=a;
	   }
	  
