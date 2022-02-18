Vue.component('todos', {
    template:
    `    
<div class= center-content>
    <div class="todos">
        <form class="todos-input" @submit.prevent="onSubmit">
            <h2>{{todaysDate}}</h2>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">What do you have to do today?</label>
                <div id=flex-todo-imput>
                    <textarea v-model="todo" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <input class= submit-button type="submit" value="submit">
                </div>
           </div>
        </form>
        <ul>
        <li class="singular-todo" v-for="display_todo in display_todos">
            <p class= "todo-singular-content">{{ display_todo }}</p>
            <button class="delete-todo"><i class="fa-solid fa-circle-check"></i></button>
        </li>
        </ul>
    </div>
</div>
  `,
    
data() {
  return {
    todo: null,
    display_todos:[],
    todaysDate:"", 
    todaysTime:"",
  }
},

mounted() {
    let today= new Date();
    this.todaysDate= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.todaysTime= today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
},

methods:{
    onSubmit(){
        this.display_todos.push(this.todo);
        this.todo= null
    }
}

})