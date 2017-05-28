<template>
    <section class="post">
        <time class="post__date">
            {{ parseDate(post.post_date) }}
        </time>
        <h1 class="post__heading">
            {{ post.post_title }}
        </h1>
        <article v-html="post.post_content" class="post__content"></article>
    </section>
</template>

<script>
    import Backend from '../../config/backend'

    export default {
        data() {
            return {
                post: false
            }
        },
        methods: {
            getPost() {
                this.$http.get(`${Backend()}/wp-json/headless/v1/post-by-url${this.$route.path}`)
                    .then(response => {
                        this.post = response.body;
                    });
            },
            parseDate(date) {
                return new Date(Date.parse(date)).toLocaleString('en-GB', { year: 'numeric', month: 'long', day: '2-digit' })
            }
        },
        created() {
            this.getPost()
        },
        watch: {
            '$route' (to, from) {
                this.getPost()
            }
        }
    }
</script>

<style lang="scss">
    .post {
        padding: 20px 0;
        &__date {
            font-size: 12px;
            text-transform: uppercase;
        }
        &__heading {
            font-weight: bold;
            margin: 0;
        }
        &__content {
            margin: 20px 0;
            line-height: 1.5;
            a {
                color: #3498db;
                font-weight: bold;
                text-decoration: none;
                transition: color 300ms ease-in-out;
                &:hover {
                    color: #2980b9;
                }
                &:visited {
                    color: #9b59b6;
                    &:hover {
                        color: #8e44ad;
                    }
                }
            }
            blockquote {
                position: relative;
                margin: 10px 0;
                padding: 10px 20px;
                &:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 10px;
                    background: #eee;
                }
            }
            pre {
                width: 100%;
                padding: 20px;
                overflow: scroll;
                background: #eee;
            }
        }
    }
</style>
