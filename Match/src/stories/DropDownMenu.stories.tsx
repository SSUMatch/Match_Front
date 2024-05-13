import {Meta, StoryObj} from '@storybook/react';
import DropdownMenu from '@/components/dropdown/matchdata/MatchData.tsx';

// Storybook 메타 설정
const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu', // Storybook에서 보여질 경로와 이름
  component: DropdownMenu, // 스토리의 대상이 되는 컴포넌트
  argTypes: {
    // 스토리북에서 조정할 수 있는 프롭스 타입을 정의
    expect: {
      control: 'text',
      description: '예상 평균 레벨',
      defaultValue: '중급', // 기본값 설정
    },
  },
};

export default meta;

// 기본 스토리
export const Default: StoryObj<typeof DropdownMenu> = {
  args: {
    // 스토리에서 사용할 초기 args
    expect: '중급',
  },
};
