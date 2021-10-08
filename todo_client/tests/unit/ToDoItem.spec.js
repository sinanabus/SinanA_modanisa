import { shallowMount } from '@vue/test-utils'
import ToDoItem from '@/components/ToDoItem.vue'

const text = "To do item text 1";
const wrapper = shallowMount (ToDoItem , {
    propsData: {
        input: text
    }
});

describe('ToDoItem.vue', () => {
    test('renders a ToDoItem vue component', async () => {
        expect(wrapper.exists()).toBe(true);
    })

    test('ToDoItem component contains expected text', async () => {
        expect(wrapper.text()).toBe(text)
    });
});