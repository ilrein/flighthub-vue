import PrecogSalesDisplay from '../components/PrecogSalesDisplay.ce.vue';

export default {
  title: 'PrecogSalesDisplay',
  component: PrecogSalesDisplay,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PrecogSalesDisplay },

  // Here we define the `template`
  template: '<precog-sales-display />',
});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const Default = Template.bind({});
Default.args = {};
