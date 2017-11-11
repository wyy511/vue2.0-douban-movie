<template lang="pug">
    .movies
        section.grid.has-search-bar
            .div(v-if="inTheater.title")
                h2 {{inTheater.title}}
                    router-link.more(
                        tag="span",
                        :to="{name: 'movie-list', query: {type: inTheater.type}}"
                    ) 更多
                .card
                    router-link.item(
                        :to="{name: 'movie-detail', params: { id: item.id}}",
                        :key="index",
                        v-for="(item, index) in inTheater.subjects"
                    )
                        .cover
                            .wp
                                img.img-show(:src="item.images.medium")
                        .info
                            h3 {{item.title}}
            .div(v-if="comingSoon.title")
                h2 {{comingSoon.title}}
                    router-link.more(
                        tag="span",
                        :to="{name: 'movie-list', query: {type: comingSoon.type}}"
                    ) 更多
                .cart
                    router-link.item(tag="span",
                        v-for="(item, index) in comingSoon.subjects",
                        :to="{name: 'movie-list', params: {id: item.id}}",
                        :key="index",
                    )
                        .cover
                            .wp
                                img.img-show(:src="item.images.medium")
                        .info
                            h3 {{item.title}}
        spinner(:show="loading")
</template>

<script>
import Spinner from '@/components/spinner'
import {API_TYPE, fetchMoviesByType} from '../../store/api'
import {mapState} from 'vuex'
import * as types from '../../store/types'
export default {
  data () {
    return {
        loading: true,
        comingSoon: {
            type: ''
        },
        inTheater: {
            type: ''
        }
    }
  },
  components: {
      Spinner
  },
  mounted() {
      var start = 0, count = 9;
        fetchMoviesByType(API_TYPE.movie.in_theaters, start, count)
            .then((data) => {
                this.inTheater = data;
                this.inTheater.type = API_TYPE.movie.in_theaters;
                this.loading = false;
            });
        fetchMoviesByType(API_TYPE.movie.coming_soon, start, count)
            .then((data) => {
                this.comingSoon = data;
                this.comingSoon.type = API_TYPE.movie.coming_soon;
                this.loading = false;
            })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
