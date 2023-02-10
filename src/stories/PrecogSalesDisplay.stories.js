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

// const weeks = () => {
//   const weeks = [];

//   let startingPoint = nextMonday(new Date());
//   const diff = 8;

//   while (weeks.length < diff) {
//     weeks.push({
//       week: format(startingPoint, 'MMM d'),
//       impressions: Math.ceil(Math.random() * 100000),
//     });
//     startingPoint = addDays(startingPoint, 7);
//   }
  
//   return weeks;
// };

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const Default = Template.bind({});
Default.args = {
  podcasts: '[]',
  insertionOptions: '[{"label":"test","value":"test"}]'
};

export const WithPodcasts = Template.bind({});
WithPodcasts.args = {
  podcasts: '[ { "id": 1, "title": "The Daily", "description": "The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.", "image": "https://via.placeholder.com/50", "heldOrders": 1, "episodeDrops": 2, "maxImpressions": 172000, "weeks": [ { "week": "2023-02-07T04:18:43.518Z", "impressions": 592 }, { "week": "2023-02-14T04:19:38.779Z", "impressions": 80327 }, { "week": "2023-02-21T04:19:51.574Z", "impressions": 23291 }, { "week": "2023-02-28T04:20:04.556Z", "impressions": 85860 }, { "week": "2023-03-07T04:20:18.897Z", "impressions": 8247 }, { "week": "2023-03-14T03:20:27.910Z", "impressions": 21416 }, { "week": "2023-03-21T03:20:36.534Z", "impressions": 24831 }, { "week": "2023-03-28T03:20:45.616Z", "impressions": 27101 } ] }, { "id": 1, "title": "Hello World", "description": "The Daily is produced by The New York Times and hosted by Michael Barbaro. It’s a weekday podcast that helps you understand the news and more.", "image": "https://via.placeholder.com/50", "heldOrders": 1, "episodeDrops": 2, "maxImpressions": 172000, "weeks": [ { "week": "2023-02-07T04:18:43.518Z", "impressions": 592 }, { "week": "2023-02-14T04:19:38.779Z", "impressions": 80327 }, { "week": "2023-02-21T04:19:51.574Z", "impressions": 23291 }, { "week": "2023-02-28T04:20:04.556Z", "impressions": 85860 }, { "week": "2023-03-07T04:20:18.897Z", "impressions": 8247 }, { "week": "2023-03-14T03:20:27.910Z", "impressions": 21416 }, { "week": "2023-03-21T03:20:36.534Z", "impressions": 24831 }, { "week": "2023-03-28T03:20:45.616Z", "impressions": 27101 } ] } ]',
  insertionOptions: '[{"label":"test","value":"test"}]'
};
