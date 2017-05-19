<template>
    <section>
        <h1>Page</h1>
        <article v-if="page" v-html="page.post_content"></article>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                page: false
            }
        },
        methods: {
            getPage() {
                this.$http.get(`http://snowdog.dev/wp-json/snowdog/post-by-url${this.$route.path}`)
                    .then(response => {
                        this.page = response.body;
                    });
            }
        },
        created() {
            this.getPage()
        }
    }
</script>
