import VueRouter from "vue-router";
import Course from "../pages/MainPage/Course";
import Exam from "../pages/MainPage/Exam";
import Main from "../pages/MainPage/Main";
import Questions from "../pages/MainPage/Questions";

export default new VueRouter({
    routes: [
        {
            name: 'Main',
            path: '/',
            component: Main
        },
        {
            name: 'Course',
            path: '/course',
            component: Course
        },
        {
            name: 'Exam',
            path: '/exam',
            component: Exam
        },
        {
            name:'Questions',
            path:'/questions',
            component:Questions
        }


    ]
})
