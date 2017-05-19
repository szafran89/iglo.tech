<template>
    <section>
        <router-link :to="'/about'">
            About page
        </router-link>
        <ul class="post-list">
            <li class="post-list__item" v-for="post in posts">
                <router-link :to="cutUrl(post.link)">
                    <h2>
                        {{ post.title.rendered }}
                    </h2>
                </router-link>
                <p v-html="post.content.rendered "></p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Posts',
        data() {
            return {
                posts: []
            }
        },
        methods: {
            getPosts() {
                this.$http.get('http://snowdog.dev/wp-json/wp/v2/posts')
                    .then(response => {
                        this.posts = response.body;
                    });
            },
            cutUrl(url) {
                return url.replace('http://snowdog.dev/', '');
            }
        },
        created() {
            this.getPosts()
        }
    }

</script>

<style>
    .post-list {
        list-style: none;
        text-align: left;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .post-list__item {
        width: 20%;
        padding: 20px;
    }
    .post-list__item img {
        max-width: 100%;
        height: auto;
    }
</style>
