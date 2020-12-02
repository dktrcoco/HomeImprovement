import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
 
const localizer = momentLocalizer(moment)

const myEventsList = [1,2,3,4];
 
const MyCalendar = props => (
  
  <div>
    
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)


export default MyCalendar;

