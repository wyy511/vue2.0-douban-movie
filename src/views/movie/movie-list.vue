<template lang="pug">
    section.grid.has-search-bar(
        v-infinite-scroll="loadMore",
        finite-scroll-disable="busy",
        infinite-scroll-distance="10"
    )
        h2 {{movieList.title}}
        .card(v-if="movieList.subjects.length > 0")
            router-link.item(:to="{name: 'movie-detail', params: {id: item.id}}",
                v-for="(item, index) in movieList.subjects",
                :key="index"
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
import InfiniteScroll from 'vue-infinite-scroll'
import {API_TYPE, fetchMoviesByType} from'@/store/api'
export default {
  directives: {InfiniteScroll},
  data () {
    return {
        busy: false,
        isScroll: false,
        loading: true,
        movieList: {
            subjects: []
        },
        type: ''
    }
  },
  components: {
      Spinner
  },
  mounted() {
      this.type = this.$route.query.type;
  },
  methods: {
        loadMore() {
            let start = this.movieList.subjects.length;
            this.busy = true;
            this.isScroll = true;
            
            fetchMoviesByType(this.type, start)
                .then(data => {
                    this.movieList.title = data.title;
                    this.movieList.total = data.total;
                    this.movieList.subjects = this.movieList.subjects.concat(data.subjects);
                    
                    if(this.movieList.subjects.length < this.movieList.total) {
                        this.busy = false;
                    }
                    this.loading = false;
                    this.isScroll = false;
                })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
