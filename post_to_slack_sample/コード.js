function test() {
  post2slack("ハロー");
}

function post2slack(message){
  var jsonData = {
    "text" : message
  };
  var payload = JSON.stringify(jsonData);
  var options = {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };
  UrlFetchApp.fetch(PropertiesService.getScriptProperties().getProperty("url"), options);
}