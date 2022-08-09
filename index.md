# Journeys

You've come to the fun part! Tap ANY name below to see their coding journey and get inspired!!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/collab-community/journey-book)


<ul class="user-list">
  <li class="user-card" v-for="user in users" :key="user.username">
    <a :href="'#/journeys/' + user.username">
      <img
        class="user-card__image"
        :src="user.avatar"
        :alt="user.name + ' Profile Picture'"
      />
      <div class="user-card__info">
        <h3>{{ user.name }}</h3>
        <p>@{{ user.username }}</p>
      </div>
    </a>
  </li>
</ul>
