import React from 'react';
import {startOfWeek, format, addDays} from 'date-fns';
import tw from 'twin.macro';

const WeekCalendar: React.FC = () => {
  const today = new Date();
  const startDay = startOfWeek(today, {weekStartsOn: 1});

  const days = Array.from({length: 7}).map((_, index) => {
    return addDays(startDay, index);
  });

  return (
    <div css={tw`flex justify-center`}>
      {days.map(day => (
        <div
          key={day.toISOString()}
          css={[
            tw`flex flex-col items-center justify-center p-4 border m-1 rounded shadow-lg border-blue-400`,
            format(day, 'EE') === 'SUN'
              ? tw`bg-red-100 text-red-600`
              : format(day, 'EE') === 'SAT'
                ? tw`bg-blue-100 text-blue-600`
                : tw`bg-white text-black`,
          ]}
        >
          <div css={tw`font-medium text-lg`}>{format(day, 'EE')}</div>
          <div css={[tw`text-sm`, format(day, 'd') === '1' && tw`font-bold`]}>
            {format(day, 'd')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekCalendar;
