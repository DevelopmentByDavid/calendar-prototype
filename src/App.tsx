import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Calendar from './components/Calendar';
import CalendarItem from './components/CalendarItem';

const listOfEvents = [
    {
        key: Math.random().toString(),
        start: new Date().toISOString(),
        end: new Date().toISOString(),
        title: 'hello world',
    },
];

function App() {
    return (
        <Calendar>
            {listOfEvents.map(({ start, end, title, key }) => (
                <CalendarItem key={key} start={start} end={end} title={title} />
            ))}
        </Calendar>
    );
}

export default App;
