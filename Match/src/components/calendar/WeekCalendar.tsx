import React, {useState, useMemo} from 'react';
import {useSetRecoilState} from 'recoil';
import {startOfWeek, format, addDays, subWeeks, addWeeks} from 'date-fns';
import tw from 'twin.macro';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {SelectedDateState} from '@/recoil/match/States';

const WeekCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const setSelectedDate = useSetRecoilState(SelectedDateState);

  const startDay = useMemo(
    () => startOfWeek(currentDate, {weekStartsOn: 0}),
    [currentDate],
  );

  const days = useMemo(() => {
    return Array.from({length: 7}).map((_, index) => {
      return addDays(startDay, index);
    });
  }, [startDay]);

  const previousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const nextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <div css={tw`text-4xl`}>
      <div css={tw`flex justify-between items-center p-4`}>
        <button
          onClick={previousWeek}
          css={tw`cursor-pointer outline-none focus:outline-none`}
          aria-label='Previous week'
        >
          <FiChevronLeft size={36} />
        </button>
        <div css={tw`text-4xl font-bold`}>
          {format(currentDate, 'MMMM yyyy')}
        </div>
        <button
          onClick={nextWeek}
          css={tw`cursor-pointer outline-none focus:outline-none`}
          aria-label='Next week'
        >
          <FiChevronRight size={36} />
        </button>
      </div>
      <div css={tw`grid grid-cols-7 gap-4 p-4`}>
        {days.map(day => (
          <div
            key={day.toISOString()}
            css={[
              tw`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer`,
              format(day, 'eee') === 'Sun'
                ? tw`text-red-600`
                : format(day, 'eee') === 'Sat'
                  ? tw`text-blue-600`
                  : tw`text-gray-600`,
            ]}
            onClick={() => handleDayClick(day)}
          >
            <div css={tw`font-medium text-3xl uppercase`}>
              {format(day, 'EEE')}
            </div>
            <div css={tw`mt-8 text-3xl`}>{format(day, 'd')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
