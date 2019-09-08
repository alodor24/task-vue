var app = new Vue({
    el: '#app',
    data: {
        tasks: []
    },    
    methods: {
        addTask: function(e) {
            e.preventDefault()
            
            if(this.tasks.title == '') {
                alert('You must enter a task.')
            
            } else {
                this.tasks.push({
                    title: this.tasks.title,
                    done: false,
                    show: true
                })    
                this.tasks.title = ''                
            }
        },
        showDelete: function(task) {
            if(task.done == true) {
               task.show = true
                
            } else {
                task.show = false
            }
        },
        deleteTask: function(task) {            
            if(task.done == true) {                
                if (confirm('Do you want to eliminate this task?'))
                    this.tasks.splice(this.tasks.indexOf(task), 1)
            }
        }
    }
})