import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Movies from '@/views/movie/Movies'
import MoviesList from '@/views/movie/movie-list'
import MoviesDetail from '@/views/movie/movie-detail'
import SearchList from '@/views/movie/search-list'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: Movies
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/movie/list',
            name: 'movie-list',
            component: MoviesList
        },
        {
            path: '/movie/subject/:id',
            name: 'movie-detail',
            component: MoviesDetail
        },
        {
            path: '/movie/search',
            name: 'movie-search',
            component: SearchList
        }
    ]
})