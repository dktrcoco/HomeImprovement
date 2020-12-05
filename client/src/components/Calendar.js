import React, { Component } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const eventsList = [
  {
    event: 'test',
    date: new Date(2020, 12, 3)
  }
];
const billsList = [
  {
    bill: 'internet',
    value: 45.55,
    date: new Date(2020-12-3)
  }
];
const choresList = [
  {
    chore: 'Mow Lawn',
    owner: 'Dad',
    date: new Date(2020, 12, 3)
  }
];

class MyCalendar extends Component {
  // state = {
  //   eventsList,
  //   billsList,
  //   choresList
  // }

  constructor() {
    super();
    this.state = {
      eventsList: [
        {
          event: 'test',
          date: new Date(2020, 12, 12)
        }
      ],
      billsList: [
        {
          bill: 'internet',
          value: 45.55,
          date: new Date(2020, 12, 12)
        }
      ],
      choresList: [
        {
          chore: 'Mow Lawn',
          owner: 'Dad',
          date: new Date(2020, 12, 12)
        }
      ]
    }
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
    });
  }

  render() {
    return (
      <div>

        <Calendar
          localizer={localizer}
          events={eventsList}
          bills={billsList}
          chores={choresList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    );
  }
}

// const eventsList = [
//   {
//     event: 'test',
//     date: new Date(2020-12-3)
//   }
// ];

// const billsList = [];

// const choresList = [];

// const MyCalendar = props => (


// )


export default MyCalendar;

