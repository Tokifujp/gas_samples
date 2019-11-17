var destinationConsumerKey = PropertiesService.getScriptProperties().getProperty("spDestinationConsumerKey");
var destinationConsumerSecret = PropertiesService.getScriptProperties().getProperty("spDestinationConsumerSecret");

function echoScriptProperties() {
  Logger.log("destinationConsumerKey:"+destinationConsumerKey);
  Logger.log("destinationConsumerSecret:"+destinationConsumerSecret);
}
