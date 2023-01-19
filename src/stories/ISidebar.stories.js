import ISidebar from '../components/ISidebar.ce.vue';

export default {
  title: 'ISidebar',
  component: ISidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ISidebar },

  // Here we define the `template`
  template: '<i-sidebar />',
});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const Default = Template.bind({});
Default.args = {};
