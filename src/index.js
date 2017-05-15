import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App iframe='iframe' src='https://calendar.google.com/calendar/embed?hl=zh&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=160qm8h89ff0l864k5lvna0pqc%40group.calendar.google.com&amp;color=%232F6213&amp;ctz=America%2FLos_Angeles' />,
  document.getElementById('root')
);
