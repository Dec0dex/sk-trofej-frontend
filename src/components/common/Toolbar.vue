<template>
  <v-app-bar
      v-scroll="onScroll"
      app
      elevate-on-scroll
      :color="!isScrolling ? 'transparent' : 'primary'"
  >
    <v-img
        v-if="$vuetify.breakpoint.mdAndUp"
        class="shrink"
        max-height="100%"
        max-width="75px"
        src="/static/trofej_logo.png"
    />
    <v-img v-else
           class="shrink"
           max-height="100%"
           max-width="65px"
           src="/static/trofej_logo.png"
    />
    <v-img
        class="shrink ml-4"
        max-height="100%"
        max-width="100%"
        src="/static/sk_trofej_banner.png"
    />
    <v-spacer/>
    <template v-if="$vuetify.breakpoint.lgAndUp">
      <span
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="mx-3 toolbar-link"
      >
        {{item.text}}
      </span>
    </template>
    <v-spacer/>
    <v-btn class="mx-2 toolbar-button" fab color="secondary" small>
      <v-icon color="#878786" class="toolbar-icon">mdi-facebook</v-icon>
    </v-btn>
    <v-btn class="mx-2 toolbar-button" fab color="secondary" small>
      <v-icon color="#878786" class="toolbar-icon">mdi-youtube</v-icon>
    </v-btn>
    <v-btn class="mx-2 toolbar-button" fab color="secondary" small>
      <v-icon color="#878786" class="toolbar-icon">mdi-instagram</v-icon>
    </v-btn>
    <v-menu v-if="!($vuetify.breakpoint.lgAndUp)">
      <template v-slot:activator="{ on }">
        <v-btn
            icon
            v-on="on"
            color="#878786"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card
          color="primary"
          dark
      >
        <v-list color="transparent">
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
          >
            <v-list-item-title v-text="item.text"/>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {mapMutations} from 'vuex';

  export default {
    data: () => ({
      isScrolling: false,
      items: [
        {
          to: '/',
          text: 'POČETNA',
        },
        {
          to: '/klub',
          text: 'KLUB',
        },
        {
          to: '/trofej-commerce',
          text: 'TROFEJ COMMERCE',
        },
        {
          to: '/usluge',
          text: 'USLUGE',
        },
        {
          to: '/galerija',
          text: 'GALERIJA',
        },
        {
          to: '/novosti',
          text: 'NOVOSTI',
        },
        {
          to: '/kontakt',
          text: 'KONTAKT',
        },
      ],
    }),

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll() {
        this.isScrolling = (window.pageYOffset ||
            document.documentElement.scrollTop || 0) > 20;
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    },
  };
</script>

<style scoped lang="scss">
  @import "src/styles/main";

  .toolbar-button {
    transition: .3s;
  }

  .toolbar-icon:before {
    transition: .3s;
  }

  .toolbar-button:hover:before {
    color: $text_primary;
  }

  .toolbar-button:hover .toolbar-icon:hover:before {
    color: $accent;
  }
</style>