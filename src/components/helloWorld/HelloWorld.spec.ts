import { shallowMount } from '@vue/test-utils';

// @ts-ignore
// https://github.com/vuejs/vue-cli/issues/1104
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch('just a title click me');
  });
});
