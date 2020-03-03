<template>
  <v-footer
      class="justify-space-between footer"
      color="secondary"
      dark
  >
    <v-row
        align="center"
        justify="space-between"
    >
      <v-col
          class="text-center text-md-left"
          cols="12"
          md="4"
      >
        <v-btn
            v-for="(social, i) in socials"
            :key="i"
            class="ma-0 text-capitalize"
            text
            small
        >
          <v-icon
              class="mr-2"
              v-text="social.icon"
          />
          <span
              class="hidden-sm-and-down"
              v-text="social.name"
          />
        </v-btn>
      </v-col>

      <v-col
          class="pb-3 text-center"
          cols="12"
          md="4"
          order="1"
          order-sm="0"
      >
        &copy; {{ (new Date()).getFullYear() }} Streljački klub Trofej :: Trofej Commerce
      </v-col>

      <v-col
          class="text-center text-md-right"
          cols="12"
          md="4"
      >
        <v-btn
            v-for="(link, i) in links"
            :key="i"
            class="text-capitalize text-right"
            small
            text
        >
          <span v-text="link.name"/>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      links: [
        // {name: 'About'},
        // {name: 'Locations'},
        // {name: 'Contact Us'},
      ],
      socials: [
        {
          icon: 'mdi-facebook',
          name: 'Facebook',
        },
        {
          icon: 'mdi-youtube',
          name: 'YouTube',
        },
        {
          icon: 'mdi-instagram',
          name: 'Instagram',
        },
      ],
    }),
  };
</script>

<style scoped>
  .footer {
    width: 100%;
  }
</style>