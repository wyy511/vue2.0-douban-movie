<template lang="pug">
.movie-detail
    .detail-card(v-if="movie.title")
        .title {{movie.title}}&nbsp;{{getOrginalTitle}}
        .div
            img(:src="movie.images.large", style="width: 100%")
        section.subject-info {{getMeta}}
        section.subject-mark
            .mark-item
                a
                    span 想看({{movie.wish_count}})
                a
                    span 看过
        section.subject-intro
            h2 {{movie.title的剧情介绍}}
            .bd
                p {{movie.summary}}
    spinner(:show="loading")

</template>

<script>
import Spinner from '@/components/spinner'
import * as types from '@/store/types';
import {fetchMovieById} from '@/store/api';
export default {
  data () {
    return {
      id: '',
      movie: {},
      loading: true
    }
  },
  components: {
    Spinner
  },
  computed: {
    getOrginalTitle() {
      return new RegExp(/([A-Za-z])/g).test(this.movie.orginal_title) ? this.movie.original_title : '';
    },
    getMeta() {
      var cast = this.movie.casts.reduce((name, value) => {
        return name ? name + ' / ' + value.name : value.name;
      }, '')
      return this.movie.countries.join(' / ') + ' / ' + 
        this.movie.genres.join(' / ') + ' / ' + this.movie.directors[0].name 
        + '（导演）/ ' + cast;
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    fetchMovieById(this.id)
      .then(data => {
        this.movie = data;
        this.loading = false
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .detail-card {
    background: #fff;
    border-radius: 10px;
    padding: 10px 15px;;
    -webkit-text-size-adjust: 100%;
    .title {
      font-size: 16px;
      line-height: 32px;
      word-break: break-all;
    }
    section {
      margin-bottom: 30px;
      p {
        font-size: 15px;
        color: #494949;
        line-height: 1.5;
      }
    }
    .subject-info {
      position: relative;
      overflow: hidden;
      margin-top: 10px;
      line-height: 1.5;
    }
    .subject-mark{
      .mark-item{
        margin-bottom: 30px;
        display: -webkit-box;
        display: -moz-box;
        display: box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -moz-box-align: center;
        box-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        align-items: center;
        -ms-flex-align: center;
        a{
          height: 30px;
          line-height: 30px;
          display: block;
          border: 1px solid #ffb712;
          border-radius: 3px;
          margin-right: 10px;
          color: #ffb712;
          font-size: 15px;
          text-align: center;
          -webkit-box-flex: 1;
          -moz-box-flex: 1;
          box-flex: 1;
          -webkit-flex: 1;
          -moz-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
      }
    }
    .subject-intro {

      h2 {
        color: #aaa;
        margin: 0 0 15px;
        font-size: 15px;
      }
    }
  }
</style>
