export default {
    namespaced:true,
    actions:{},
    mutations:{
        SET_HELLO(state,value){
            state.hello=value
        }
    },
    state:{
        userName:'张老师',  //用户名
        newMessage:true,    //有无新消息
        headSculpture:require('../assets/icon/user_example.jpeg'),  //头像
        course:[
            {
                name:'',
                studentCount: 0
            }
        ],   //开设课程数目

        questionCount:302,
        examCount:3,
        hello:'你好,'
    },
    getters:{
        //学生人数
        studentCount(){
            let count = 0;
            for (let i = 0; i < this.state.course.length; i++) {
                count += this.state.course[i].studentCount;
            }
            return count;
        },
    }
}
