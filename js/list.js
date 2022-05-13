Vue.component('todo-item', {
    template: '\
          <li>\
              {{ title }}\
              <button v-on:click="$emit(\'remove\')">Remove</button>\
              </li>\
          ',
    props: ['title']
  })
  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Passport',
        },
        {
          id: 2,
          title: 'Cash',
        },
        {
          id: 3,
          title: 'Credit Cards',
        },
        {
          id: 4,
          title: 'Cell Phone',
        },
        {
          id: 5,
          title: 'Sunscreen',
        },
        {
          id: 6,
          title: 'Camera',
        },
        {
          id: 7,
          title: 'Laptop',
        },
        {
          id: 8,
          title: 'Sandals',
        },
        {
          id: 9,
          title: 'Toiletries',
        }
      ],
      nextTodoId: 10
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })