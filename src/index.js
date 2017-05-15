import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var query = window.location.search.substring(1);
var calendarId = '';
var timezone = 'America%2FLos_Angeles';
var language = 'en';
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
  var pair = vars[i].split("=");
  if (pair[0] == 'calendar') {
    calendarId = pair[1];
  } else if (pair[0] == 'timezone') {
    timezone = pair[1];
  } else if (pair[0] == 'language') {
    language = pair[1];
  }
}
var url = 'https://calendar.google.com/calendar/embed?hl=' + language + '&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=400&awkst=1&bgcolor=%23FFFFFF&src=' + calendarId + '&color=%232F6213&ctz=' + timezone;
ReactDOM.render(
  <App iframe='iframe' src={url} />,
  document.getElementById('root')
);
