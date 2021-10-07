import { shallowMount } from '@vue/test-utils'
import AddToDoItem from '@/components/AddToDoItem.vue'

describe('AddToDoItem.vue', () =>  {
    test('renders an input box', () => {
        const empty = '';
        const wrapper = shallowMount (AddToDoItem, {
            props : {empty}
         });
    expect(wrapper.exists()).toBe(true);
    });
    
    test('renders an input box', () => {
        const empty = '';
        const wrapper = shallowMount (AddToDoItem, {
            props : {empty}
    });
    expect(wrapper.find('#ToDoInput').exists()).toBe(true);
    });
    
    test('input placeholder should be Create a new todo', () => {
        const empty = '';
        const wrapper = shallowMount (AddToDoItem, {
            props : {empty}
        });
        expect(wrapper.find('#ToDoInput').attributes()['placeholder']).toBe("Create a new todo");
    });
});