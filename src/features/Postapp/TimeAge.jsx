import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAge = ({timeStamp}) => {
    let timeago = '';
    if (timeStamp){
        const date = parseISO(timeStamp);
        const timeperiod = formatDistanceToNow(date);
        timeago = `${timeperiod} ago`
    }
  return (
    <>
    <small>{timeago}</small>
    </>
  )
}

export default TimeAge