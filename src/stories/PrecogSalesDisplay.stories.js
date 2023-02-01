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
  template: '<precog-sales-display :podcasts="podcasts" :insertion-options="insertionOptions" />',
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
  }
  
  return weeks;
};

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const Default = Template.bind({});
Default.args = {
  // podcasts: [
  //   {
  //     id: 1,
  //     title: 'The Daily',
  //     description: 'The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.',
  //     image: 'https://via.placeholder.com/50',
  //     heldOrders: 1,
  //     episodeDrops: 2,
  //     maxImpressions: 172000,
  //     weeks: weeks()
  //   },
  //   {
  //     id: 1,
  //     title: 'Hello World',
  //     description: 'The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.',
  //     image: 'https://via.placeholder.com/50',
  //     heldOrders: 1,
  //     episodeDrops: 2,
  //     maxImpressions: 172000,
  //     weeks: weeks()
  //   }
  // ],
  podcasts: '[{"id":1,"title":"The Daily","description":"The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.","image":"https://via.placeholder.com/50","heldOrders":1,"episodeDrops":2,"maxImpressions":172000,"weeks":[{"week":"Feb 6","impressions":592},{"week":"Feb 13","impressions":80327},{"week":"Feb 20","impressions":23291},{"week":"Feb 27","impressions":85860},{"week":"Mar 6","impressions":8247},{"week":"Mar 13","impressions":21416},{"week":"Mar 20","impressions":24831},{"week":"Mar 27","impressions":27101}]},{"id":1,"title":"Hello World","description":"The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.","image":"https://via.placeholder.com/50","heldOrders":1,"episodeDrops":2,"maxImpressions":172000,"weeks":[{"week":"Feb 6","impressions":23421},{"week":"Feb 13","impressions":3186},{"week":"Feb 20","impressions":78389},{"week":"Feb 27","impressions":40952},{"week":"Mar 6","impressions":62375},{"week":"Mar 13","impressions":91279},{"week":"Mar 20","impressions":25517},{"week":"Mar 27","impressions":20240}]}]',
  insertionOptions: '[{"label":"test","value":"test"}]'
};
