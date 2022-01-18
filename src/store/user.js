export default {
    namespaced:true,
    actions:{},
    mutations:{
        SET_HELLO(state,value){
            state.hello=value
        }
    },
    state:{
        userName:'张老师',
        newMessage:true,
        headSculpture:require('../assets/icon/user_example.jpeg'),
        hello:'你好,'
    },
    getters:{}
}
