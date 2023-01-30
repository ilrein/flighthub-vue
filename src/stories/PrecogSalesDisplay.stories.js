import {
  addDays,
  nextMonday,
  format
} from 'date-fns';

import PrecogSalesDisplay from '../features/PrecogSalesDisplay.ce.vue';

export default {
  title: 'PrecogSalesDisplay',
  component: PrecogSalesDisplay,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PrecogSalesDisplay },

  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },

  // Here we define the `template`
  template: '<precog-sales-display :podcasts="podcasts" />',
});

const weeks = () => {
  const weeks = [];

  let startingPoint = nextMonday(new Date());
  const diff = 8;

  while (weeks.length < diff) {
    weeks.push({
      week: format(startingPoint, 'MMM d'),
      impressions: Math.ceil(Math.random() * 100000),
    });
    startingPoint = addDays(startingPoint, 7);
    console.log(startingPoint);
  }
  
  return weeks;
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const Default = Template.bind({});
Default.args = {
  podcasts: [
    {
      id: 1,
      title: 'The Daily',
      description: 'The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.',
      image: 'https://via.placeholder.com/50',
      heldOrders: 1,
      episodeDrops: 2,
      maxImpressions: 172000,
      weeks: weeks()
    },
    {
      id: 1,
      title: 'Hello World',
      description: 'The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.',
      image: 'https://via.placeholder.com/50',
      heldOrders: 1,
      episodeDrops: 2,
      maxImpressions: 172000,
      weeks: weeks()
    }
  ]
};
