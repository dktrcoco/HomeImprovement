
import '../App.css'
import React,{Practice} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class EventCalendar extends Practice{
    render(){
        return(
            <FullCalendar 
            defaultView="dayGridMonth"plugins={[ dayGridPlugin ]}
            />
        )
    }

}


