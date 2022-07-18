# Journeys

You've come to the fun part! Tap ANY name below to see their coding journey and get inspired!!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/neontuts/docsify-test)

<div id="usersList">
  <li v-for="user in users" :key="user.username">
    <img :src="user.avatar" width="40px" height="40px" />
    <a :href="'#/journeys/' + user.username">{{ user.name }}</a>
  </li>
</div>
