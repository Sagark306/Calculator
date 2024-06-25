function arithmetic(x) {
  let b = document.querySelector("input");
  if (x.name == "+") {
    let a = "+";
    b.value += "" + a;
  }
  
  if (x.name == "-") {
    let a = "-";
    b.value += "" + a;
  }
  if (x.name == "X") {
    let a = "*";
    b.value += "" + a;
  }
  if (x.name == "div") {
    let a = "/";
    b.value += "" + a;
  }
  if(x.name=="rem"){
    let a="%";
    b.value+=""+a;
  }
  if(x.name=="."){
    b.value+=".";
  }
  if (
    x.name == "1" ||
    x.name == "2" ||
    x.name == "3" ||
    x.name == "4" ||
    x.name == "5" ||
    x.name == "6" ||
    x.name == "7" ||
    x.name == "8" ||
    x.name == "9" ||
    x.name == "0"
  ) {
    let a = x.name;
    b.value += "" + a;
  }
}
function delet(x) {
    
  let a = document.querySelector("input");
  let ex = a.value;
  let e = "";
 
  for (let i = 0; i < ex.length - 1; i++) {
    e += ex[i];
  }
  if(x.name=="haff"){
    if(e.length==""){

        a.value = "1/0";
    }else
    a.value=""+e+"1/"+ex[ex.length-1];
  }
if(x.name=="wrong"){
  a.value = "" + e;
}

  if(x.name=="sqr"){
    let sqr=Math.pow(Number(ex[ex.length-1]),2);
    let val=sqr;
    a.value=""+e+""+val;
  }
}
function add(z) {
  let inpu = document.querySelector("input");
  
  if (z.name == "=") {
    let add = eval(inpu.value);
    if (add == "Infinity"){
       inpu.value = "can not divide by zero";
    }
    else {
      inpu.value = "" + add;
    }
  }
  if (z.name == "C") {
    inpu.value = "";

  }
}

