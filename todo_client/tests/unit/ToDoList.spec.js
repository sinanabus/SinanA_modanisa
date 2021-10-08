import { shallowMount } from '@vue/test-utils'
import ToDoItem from '@/components/ToDoItem.vue'
import ToDoList from '@/components/ToDoList.vue'

const items = ["To do item text 1", "To do item text 2", "To do item text 3"];
const wrapper = shallowMount (ToDoList , {
    propsData: {
        items: items
    }
});

describe("ToDoList.vue", () => {
    test('renders a ToDoList vue component', () => {
        expect(wrapper.find('#ToDoList').exists()).toBe(true);
    }
    );
    
    test('First element should be To do item text 2', async () => {
        expect(wrapper.findAllComponents(ToDoItem).at(0).find('div').text()).toBe('To do item text 2');
    });

    test('renders 3 ToDoItem components', async () => {
        expect(wrapper.findAllComponents(ToDoItem).length).toBe(3);
    });
})