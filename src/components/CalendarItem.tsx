import React from 'react';

type Meta = Record<string, unknown>;

interface Props {
    start: string;
    end: string;
    title: string;
    meta?: Meta;
    onClick?: (arg: Meta) => void;
    // NOTE: figure out how to allow for className
}

export default function CalendarItem(props: Props) {
    return <h1>TODO</h1>;
}
