<template lang="pug">
    #TalionNav
        header.TalionNav
            .TalionNav-primary
                nav
                    ul
                        li
                            a(
                                href="#/movies",
                                style="color: #2384E8"
                            ) 电影
                    span.searchs
        .search 
            input.search-input(
                type="text",
                v-model.trim="query",
                @keyup.enter="search",
                name="search",
                placeholder="请输入搜索内容"
            )
            img.search-btn(
                src="../assets/search-btn.png",
                @click.stop="search"
            )
</template>

<script>
export default {
    data() {
        return {
            query: '',
            path: 'search-movie'
        }
    },
    mounted () {
        if(this.$route.path === 'index' || this.$route.path.indexOf('movie')) {
            this.path = '/movie/search';
        } else if( this.$route.path.indexOf('book')) {
            this.path = '/book/search'
        }
    },
    methods: {
        search() {
            this.$router.push(
                {
                    path: this.path,
                    query: {
                        query: this.query
                    }
                }
            );
            this.query = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.search {
    background: #fff;
    margin-top: 47px;
    position: relative;
    .search-input {
        -webkit-appearance: none;
        border: 0;
        outline: 0;
        background: #f5f5f5;
        padding: 10px 5px;
        width: 100%;
    }
    .search-btn {
      width: 20px;
      position: absolute;
      right: 5px;
      top: 9px;
    }
}

.TalionNav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background: #fff;
    a {
        text-decoration: none;
    }
    .TalionNav-primary {
        border-bottom: 1px solid #f3f3f3;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding: 0 18px;
        background: #fff;
        height: 47px;
        box-sizing: border-box;
        display: -webkit-box;
        display: flex;
        & > a {
            font-size: 0
        }
        & > * {
            white-space: nowrap;
        }
        & > *, nav li {
            display: inline-block;
        }
        nav li {
            font-size: 15px;
            margin-right: 19px;
        }
        nav > * {
            vertical-align: middle;
        }
        h1 {
            margin: 0;
            padding: 0;
            color: #00b600;
            font-size: 0;
            /*background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAsCAYAAADozd+ZAAAAAXNSR…bfC9mLcKhyrd5v2oiOlp3PeCjib0ewACPwUuWm6XCO+xem/pR3YB/U6QAAAABJRU5ErkJggg==) no-repeat;*/
            background-size: cover;
            height: 22px;
            width: 46px;
            display: inline-block;
        }
        .search {
            font-size: 0;
            /*background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABACAYAAACA2YBxAAAABGdBT…XvcVx7Yax17qAtAbaASIkFK+izhKM7aHf30Oo+Tn923T/4y2eW0vj+TQAAAABJRU5ErkJggg==) no-repeat;*/
            background-size: cover;
            width: 24.57143px;
            height: 18.28571px;
            margin-top: 4px;
            position: relative;
        }
    }
    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
}
</style>
