import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'



describe('Header.vue', () => {
  test('is a Vue instance', () => {
    const title = 'To Do App'
    const wrapper = shallowMount(Header, {
      props: { title }
    });
    expect(wrapper).toBeTruthy();
    }
  );

  test('renders props.title when passed', () => {
    const title = 'To Do App'
    const wrapper = shallowMount(Header, {
      props: { title }
    });
    expect(wrapper.text()).toBe(title);
  })
})
