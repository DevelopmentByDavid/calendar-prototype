import React from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
    onClickDay?: () => void;
    // internals?: {
    //     daysGenerator?: () => void
    // }

    // days: 'MTWRF';
}

function groupByDay() {
    console.log('TODO');
}

export default function Calendar({ children }: Props) {
    return (
        <div>
            {React.Children.map(children, (child) => {
                console.log(child.props);
                return child;
            })}
        </div>
    );
}
