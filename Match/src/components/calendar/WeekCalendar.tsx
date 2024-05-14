import React, {useState, useMemo} from 'react';
import {startOfWeek, format, addDays, subWeeks, addWeeks} from 'date-fns';
import tw from 'twin.macro';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

const WeekCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  return (
    <div css={tw`text-4xl`}>
      {' '}
      {/* 전체 글씨 크기를 조정하는 스타일 */}
      <div css={tw`flex justify-between items-center p-4`}>
        <button
          onClick={previousWeek}
          css={tw`cursor-pointer`}
          aria-label='Previous week'
        >
          <FiChevronLeft size={36} /> {/* 아이콘 크기 조정 */}
        </button>
        <div css={tw`text-4xl font-bold`}>
          {' '}
          {/* 월, 년 표시 글씨 크기 조정 */}
          {format(currentDate, 'MMMM yyyy')}
        </div>
        <button
          onClick={nextWeek}
          css={tw`cursor-pointer`}
          aria-label='Next week'
        >
          <FiChevronRight size={36} /> {/* 아이콘 크기 조정 */}
        </button>
      </div>
      <div css={tw`grid grid-cols-7 gap-4 p-4`}>
        {days.map(day => (
          <div
            key={day.toISOString()}
            css={[
              tw`flex flex-col items-center justify-center p-4 rounded-lg`,
              format(day, 'eee') === 'Sun'
                ? tw`text-red-600`
                : format(day, 'eee') === 'Sat'
                  ? tw`text-blue-600`
                  : tw`text-gray-600`,
            ]}
          >
            <div css={tw`font-medium text-3xl uppercase`}>
              {' '}
              {/* 요일 글씨 크기 조정 */}
              {format(day, 'EEE')}
            </div>
            <div css={tw`mt-8 text-3xl`}>
              {' '}
              {/* 날짜 글씨 크기 조정 */}
              {format(day, 'd')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
