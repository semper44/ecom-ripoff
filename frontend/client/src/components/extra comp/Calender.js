import React, { useState, useEffect } from 'react'
import styles from "./calendar.module.css"
import FullCalendar,{formatDate} from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"

function Calender() {
    const[currentEvents, setCurrentEvents]= useState([])
    console.log(currentEvents)
    useEffect(()=>{
        window.localStorage.setItem("title", JSON.stringify(currentEvents))
    }, [currentEvents])
    const handleDataClick=((selected)=>{
        const title= prompt("enter")
        const calendarApi= selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id:`${selected.dateStr}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay: selected.allDay
            });
        }
    });
    function handleEventClick(selected){
        if(window.confirm("are you sure")){
            selected.event.remove();
        }
    }
  return (
    <div className={styles["calendar-parent"]}>
        <div className={styles["calendar-child"]}>
            <h1>Events</h1>
            <ul>
            {currentEvents.map((event)=>(
                <li className={styles["events-chosen"]} key={event.id}>
                    <h3>{event.title}</h3>
                    <p>{formatDate(event.start,{
                        year:"numeric",
                        month:"short",
                        day:"numeric"})}
                    </p>
                </li>
                
            ))}
            </ul>
        </div>
        <div className={styles["calendar-grand-child"]}>
            {console.log(Event)}
            <FullCalendar
                height="75vh"
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                ]}
                headerToolbar={{
                    left:"prev,next today",
                    center:"title",
                    right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDataClick}
                eventClick={handleEventClick}
                eventsSet={(events)=> setCurrentEvents(events)}
                initialEvents={[
                    {id:"1234", title:"All-day event", date:"2022-09-14"},
                    {id:"4321", title:"Timed events", date:"2022-09-28"},
                ]}
                />
        </div>
    </div>
   
  )
}

export default Calender