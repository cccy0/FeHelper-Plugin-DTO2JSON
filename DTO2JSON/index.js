var button = document.getElementById("button");
button.onclick=function(){
  var body = document.getElementById("body").value;
  var list = body.split(/\n/);
  var result = "{\n";
  //console.log(list);
  for (var i=0;i<list.length ;i++) {
    var trim = list[i].trim();
    if (trim == "") {
      continue;
    }
   if(trim.indexOf("serialVersionUID") !== -1){
	   continue;
    }
    if (trim.startsWith("private") || trim.startsWith("protected") || trim.startsWith("public")) {
      if(trim[trim.length - 1] == ";") {
        var split = trim.split(" ");
        var p = split[split.length - 1];
        var p2 = p.slice(0, p.length-1);
        result += '    "' + p2 + '": ""';
        if (i != list.length - 1) {
          result += ",\n";
        }
      }
    }
    
  }
  if(result[result.length - 1] == "\n" && result[result.length - 2] == ",") {
    result = result.slice(0, result.length-2) + "\n}";
  } else{
  result += "}";
  }
  document.getElementById("toBody").value = result;
}