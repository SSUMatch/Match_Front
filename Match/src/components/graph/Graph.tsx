import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart, ChartOptions, CategoryScale, registerables} from 'chart.js';
import {Select} from 'antd';
import * as S from './Styles';

Chart.register(CategoryScale);
Chart.register(...registerables);

const {Option} = Select;

interface PointResponseDto {
  point: number;
  date: string;
}

const PointGraph: React.FC = () => {
  const [pointData, setPointData] = useState<PointResponseDto[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number>(2);

  useEffect(() => {
    const fetchPointData = async () => {
      try {
        const response = await fetch(
          `https://kusitms28.store/api/record/point?userId=${selectedUserId}`,
        );
        const data = await response.json();
        const formattedData = Array.from({length: 10}, (_, i) => {
          const item = data.data[i] || {point: 0, date: `2023-06-0${i + 1}`};
          return item;
        });
        setPointData(formattedData);
      } catch (error) {
        console.error('Error fetching point data:', error);
      }
    };

    fetchPointData();
  }, [selectedUserId]);

  const chartData = {
    labels: pointData.map(item => item.date),
    datasets: [
      {
        label: 'MMR',
        data: pointData.map(item => item.point),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'SSU MATCH',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: '날짜',
        },
      },
      y: {
        title: {
          display: true,
          text: 'MMR',
        },
        beginAtZero: true,
        max: 2400,
      },
    },
  };

  const handleUserIdChange = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <S.GraphContainer>
      <S.GraphWrap>
        <Select
          value={selectedUserId}
          onChange={handleUserIdChange}
          style={{width: '200px', marginBottom: '40px'}}
        >
          <Option value={1}>User 1</Option>
          <Option value={2}>User 2</Option>
          <Option value={3}>User 3</Option>
          <Option value={4}>User 4</Option>
          <Option value={5}>User 5</Option>
          <Option value={6}>User 6</Option>
        </Select>
        <Line data={chartData} options={chartOptions} />
      </S.GraphWrap>
    </S.GraphContainer>
  );
};

export default PointGraph;
