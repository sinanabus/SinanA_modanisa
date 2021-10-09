import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Header from '@/components/Header.vue'
import ToDoList from '@/components/ToDoList.vue'
import AddToDoItem from '@/components/AddToDoItem.vue'

const items = ["To do item text 1", "To do item text 2", "To do item text 3"];
const wrapper = shallowMount (App , {
    propsData: {
        items: items
    }
});


describe('App.vue', () => {
    test('App renders Header, AddToDoItem, ToDoList', () => {
        const HeaderComponent = wrapper.findComponent(Header);
        const AddComponent = wrapper.findComponent(AddToDoItem);
        const ToDoListComponent = wrapper.findComponent(ToDoList);

        expect(HeaderComponent.exists()).toBe(true);
        expect(AddComponent.exists()).toBe(true);
        expect(ToDoListComponent.exists()).toBe(true);
    });

    test('calls POSTtodos when button is clicked', () => {
        const MethodisCalled = jest.spyOn(wrapper.methods, 'POSTtodos');
        const AddComponent = wrapper.findComponent(AddToDoItem);
        AddComponent.find("#AddButton").trigger('click');
        expect(MethodisCalled).toBeCalled()
    });

});