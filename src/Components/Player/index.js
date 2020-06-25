/* eslint-disable */
import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
/* Styled Components */
import { Duration, Start, End, Bar, BarProgress, BarKnob } from './styled';

const Player = ({ duration, curTime, onTimeUpdate }) => {
  const curPercentage = (curTime / duration) * 100;

  const formatDuration = duration => {
    return moment.duration(duration, 'seconds').format('mm:ss', { trim: false });
  };

  const calcClickedTime = e => {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('#bar_progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = e => {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = eMove => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  return (
    <>
      <Duration>
        <Start>{formatDuration(curTime)}</Start>
        <End>{formatDuration(duration)}</End>
      </Duration>
      <Bar>
        <BarProgress
          id="bar_progress"
          style={{
            background: `linear-gradient(to right, #7796ff ${curPercentage}%, #cbd9ec 0)`
          }}
          onMouseDown={e => handleTimeDrag(e)}
        >
          <BarKnob style={{ left: `${curPercentage - 2}%` }} />
        </BarProgress>
      </Bar>
    </>
  );
};

export default Player;
