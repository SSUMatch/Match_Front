import MatchInfo from '@/components/dropdown/matchinfo/MatchInfo';
import {
  GridContainer,
  IconItem,
  IconLabel,
} from '@/components/dropdown/matchinfo/Styles';

// Mock Styles component to avoid errors if Styles is not defined
const S = {GridContainer, IconItem, IconLabel};

export default {
  title: 'Components/MatchInfo',
  component: MatchInfo,
};

const Template = args => <MatchInfo {...args} />;

export const Default = Template.bind({});

Default.args = {
  // You can add props here if needed
};
