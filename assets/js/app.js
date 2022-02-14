var app= new Vue({
    el:'#app',
    data:{
        isActive: true,
        todaysDate:"", 
        todaysTime:"",
    },
    mounted() {
        let today= new Date();
        this.todaysDate= today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        this.todaysTime= today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    },
})