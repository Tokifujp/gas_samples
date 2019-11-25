function timtreeTest(){
  Logger.log(timetreeGetUser());
}

function timetreeGetUser(){
  var url = 'https://timetreeapis.com/user';
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeGetCalendars(){
  var url = 'https://timetreeapis.com/calendars';
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeGetCalendarById(id){
  if (!id) { return null; }
  var url = 'https://timetreeapis.com/calendars/'+id;
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeGetLabels(id){
  if (!id) { return null; }
  var url = 'https://timetreeapis.com/calendars/'+id+'/labels';
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeGetMembers(id){
  if (!id) { return null; }
  var url = 'https://timetreeapis.com/calendars/'+id+'/members';
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeGetEvents(id){
  if (!id) { return null; }
  var url = 'https://timetreeapis.com/calendars/'+id+'/events';
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeGetEventById(calId, eventId){
  if ((!calId) || (!eventId)) { return null; }
  var url = 'https://timetreeapis.com/calendars/'+calId+'/events/'+eventId;
  var method = 'GET';
  var payload = '';
  return timetreeAPI(url, method, payload);
}

function timetreeAPI(url, method, payload) {
  var accessToken = PropertiesService.getScriptProperties().getProperty('timetree_personal_access_token');
  var headers = {
    'Authorization': 'Bearer '+ accessToken
  };
  var options = {
    'method': method,
    'headers': headers,
    'payload': payload
  };
  
  var response = UrlFetchApp.fetch(url, options);
  return response;
}
