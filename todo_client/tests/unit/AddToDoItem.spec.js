import { shallowMount } from '@vue/test-utils'
import AddToDoItem from '@/components/AddToDoItem.vue'

const wrapper = shallowMount (AddToDoItem);

describe('AddToDoItem.vue', () =>  {
    test('renders an input box', () => {
    expect(wrapper.exists()).toBe(true);
    });

    test('renders an input box', () => {
    expect(wrapper.find('#ToDoInput').exists()).toBe(true);
    });
    
    test('input placeholder should be Create a new todo', () => {
        expect(wrapper.find('#ToDoInput').attributes()['placeholder']).toBe("Create a new todo");
    });
    
    test("renders an button." , () => {
        expect(wrapper.find('#AddButton').exists()).toBe(true);
    });
    
    test("button text should be Add", () => {
        expect(wrapper.find("#AddButton").text()).toBe(true);
    })
});