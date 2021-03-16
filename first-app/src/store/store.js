import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        names:[
            {name:"Sheikh El Moctar", age:16, department:"vuejs"},
            {name:"Bouna", age:18, department:"nodejs"},
            {name:"Jidou Muhammed Lemine", age:18, department:"vuejs"},
            {name:"MAlee", age:16, department:"vuejs"},
            {name:"Ahmedou Muhammed Lemine", age:19, department:"nodejs"},
        ]
    },
    getters:{
        mydata:state =>{
            let person = state.names.map(x =>{
                return{
                    name: 'my name is '+x.name,
                    age: 'age is '+x.age,
                    department: 'department is '+x.department
                }
            })
            return person
        }
    }
})