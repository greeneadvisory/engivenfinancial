"use client"
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment, useEffect, useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import SimpleBar from "simplebar-react";
import listPlugin from "@fullcalendar/list";
import SpkButton from "@/shared/@spk-reusable-components/uielements/spk-button";
import SpkBadge from "@/shared/@spk-reusable-components/uielements/spk-badge";

interface FullCalendarProps {}

const FullCalender : FC<FullCalendarProps>  = () => {
  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "Calendar Events",
        id: "1",
        bg: "primary/10",
        textcolor: "primary",
      },
      {
        title: "Birthday Events",
        id: "2",
        bg: "primarytint1color/10",
        textcolor: "primarytint1color",
      },
      {
        title: "Holiday Calendar",
        id: "3",
        bg: "primarytint2color/10",
        textcolor: "primarytint2color",
      },
      {
        title: "Office Events",
        id: "4",
        bg: "primarytint3color/10",
        border: "border-info-transparent",
        textcolor: "primarytint3color",
      },
      {
        title: "Other Events",
        id: "5",
        bg: "secondary/10",
        textcolor: "secondary",
      },
      {
        title: "Festival Events",
        id: "6",
        bg: "danger/10",
        textcolor: "danger",
      },
      {
        title: "Timeline Events",
        id: "7",
        bg: "success/10",
        textcolor: "success",
      },
      {
        title: "Other Events",
        id: "8",
        bg: "info/10",
        textcolor: "info",
      },
    ],
  };
  const [state] = useState(initialstate1);

  const externalEventsRef = useRef(null); // Creating a reference for the external events container

  useEffect(() => {
    if (externalEventsRef.current) {
      new Draggable(externalEventsRef.current, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          const title = eventEl.getAttribute("title");
          const id = eventEl.getAttribute("data");
          const classValue = eventEl.getAttribute("class");
          return {
            title: title,
            id: id,
            className: classValue,
          };
        },
      });
    }
  }, []); // E

  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = () => { };

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
return (
<Fragment>
      {/* <!-- Page Header --> */}
        <Seo title="Full-Calendar" />
        <Pageheader title="Apps" currentpage="Full Calendar" activepage="Full Calendar" />

      {/* <!-- Page Header Close --> */}
      {/* <!-- Start::row-1 --> */}
        <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-9 col-span-12">
                <div className="box">
                  <div className="box-header">
                      <div className="box-title">Full Calendar</div>
                  </div>
                  <div className="box-body">
                      <div id='calendar2'>
                          <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                            headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                            initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                            initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                            eventsSet={handleEvents}
                          />
                      </div>
                  </div>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">All Events</div>
                  <SpkButton customClass="ti-btn bg-primary text-white btn-wave"><i className="ri-add-line align-middle me-1 font-medium inline-block"></i>Create New Event</SpkButton>
                </div>
                <div className="box-body p-0">
                    <ul id="external-events" className="mb-0 p-4 list-none" ref={externalEventsRef}>
                    {state.events.map((event) => (
                        <li
                          className={`fc-event fc-h-event fc-daygrid-event  fc-daygriblock-event mb-1 !bg-${event.bg} bg-${event.textcolor} border-${event.bg}`}
                          title={event.title}  key={event.id}>
                          <div className={`fc-event-main !text-${event.textcolor}`}>{event.title}</div>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
              <div className="box">
                  <div className="box-header justify-between pb-1">
                      <div className="box-title">
                        Activity :
                      </div>
                      <SpkButton variant="soft-primary" Size="sm" customClass="ti-btn  btn-wave">View All</SpkButton>
                  </div>
                <div className="box-body p-0">
                  <div className="p-4" id="full-calendar-activity">
                    <ul className="list-none mb-0 fullcalendar-events-activity">
                      <li>
                        <div className="flex items-center justify-between flex-wrap">
                          <p className="mb-1 font-medium">Tuesday, Feb 5, 2024</p>
                          <SpkBadge variant="light" customClass="text-defaulttextcolor mb-1">10:00AM - 11:00AM</SpkBadge>
                        </div>
                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Discussion with team on project updates.</p>
                      </li>
                      <li>
                        <div className="flex items-center justify-between flex-wrap">
                          <p className="mb-1 font-medium">Monday, Jan 2, 2023</p>
                          <SpkBadge variant="success" customClass="mb-1">Completed</SpkBadge>
                        </div>
                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Review and finalize budget proposal.</p>
                      </li>
                      <li>
                        <div className="flex items-center justify-between flex-wrap">
                          <p className="mb-1 font-medium">Thursday, Mar 8, 2024</p>
                          <SpkBadge variant="warning/10" customClass="text-warning mb-1">Reminder</SpkBadge>
                        </div>
                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Prepare presentation slides for client meeting.</p>
                      </li>
                      <li>
                        <div className="flex items-center justify-between flex-wrap">
                          <p className="mb-1 font-medium">Friday, Apr 12, 2024</p>
                          <SpkBadge variant="light" customClass="text-defaulttextcolor mb-1">2:00PM - 4:00PM</SpkBadge>
                        </div>
                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Training session on new software tools.</p>
                      </li>
                      <li>
                        <div className="flex items-center justify-between flex-wrap">
                          <p className="mb-1 font-medium">Saturday, Mar 16, 2024</p>
                          <SpkBadge variant="danger/10" customClass="text-danger mb-1">Due Date</SpkBadge>
                        </div>
                        <p className="mb-0 text-textmuted dark:text-textmuted/50 text-xs">Submit quarterly report to management.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      {/* <!--End::row-1 --> */}
</Fragment>
);
};

export default FullCalender;