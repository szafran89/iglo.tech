<template>
    <section>
        <h1>Post</h1>
        <article v-if="post" v-html="post.post_content"></article>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                post: false
            }
        },
        methods: {
            getPost() {
                this.$http.get(`http://snowdog.dev/wp-json/snowdog/post-by-url${this.$route.path}`)
                    .then(response => {
                        this.post = response.body;
                    });
            }
        },
        created() {
            this.getPost()
        }
    }
</script>
