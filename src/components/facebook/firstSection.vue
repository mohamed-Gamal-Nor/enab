<template lang="pug">
.facebook
  .container-fluid
    .posts
      .text 
        h6 {{ $t("facebook.head1") }}
        h1 {{ $t("facebook.head2") }}
      .post
        iframe(
          v-for="(post, i) in faceposts.posts",
          :key="i",
          :src="post.link",
          :height="post.height",
          style="border:none;overflow:hidden",
          scrolling="no",
          frameborder="0",
          allowTransparency="true",
          allow="encrypted-media"
        )
</template>
<script>
import post from "./posts.json";
export default {
  data() {
    return {
      faceposts: post,
    };
  },
};
</script>
<style lang="scss" scoped>
.facebook {
  padding-top: 50px;
  .posts {
    .text {
      text-align: center;
      margin-bottom: 50px;
      h6 {
        font-family: var(--font-title);
        color: var(--seconed-color);
        text-transform: capitalize;
        font-size: 30px;
      }
      h1 {
        font-family: var(--main-font);
        color: #ddd;
        text-transform: capitalize;
        font-size: 30px;
        filter: brightness(90%);
      }
    }
    .post {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      iframe {
        margin: 0px 5px;
        width: 24%;
      }
    }
  }
}

@media (max-width: 991px) {
  .facebook {
    .posts {
      .text {
        margin-bottom: 30px;
        h6 {
          font-size: 25px;
        }
        h1 {
          font-size: 25px;
        }
      }
      .post {
        display: block;
        iframe {
          margin: 5px 0px;
          width: 100%;
        }
      }
    }
  }
}
</style>