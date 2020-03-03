<template>
  <div>
    <ken-burns-carousel class="slider" :images="imageList"></ken-burns-carousel>
    <div class="slider shadow_overlay"></div>
    <div id="banner-content-container" v-if="$vuetify.breakpoint.mdAndUp">
      <v-container fluid style="width: 55%;" fill-height>
        <v-row>
          <v-img src="/static/streljana_trofej.png"/>
        </v-row>
        <v-row align-center align="center" justify="center">
          <v-card color="transparent" flat class="mt-8">
            <div class="headline" id="banner-content-text">
              SK ”TROFEJ” se nalazi na Novom Beogradu, pored Auto puta Beograd-Zagreb, u objektu sportsko poslovnog
              centra “11.April” iznad Studentskog grada, sa odličnim saobraćajnim vezama i obezbedjenim velikim
              parking
              prostorom.
            </div>
          </v-card>
        </v-row>
      </v-container>
    </div>
    <v-container fluid id="featuring-bar">
      <v-layout wrap child-flex justify-center>
        <v-flex md8 xs12 lg3 class="mx-4">
          <v-card flat height="100%">
            <v-img src="/static/action_1_bg.jpg" height="100%">
              <h1 class="action-title mx-4 my-4">REKREATIVNO GAĐANJE</h1>
              <p class="mx-4 mt-8 mb-4 action-text">Streljčki Klub Trofej Vam nudi uslugu korišćenja streljane kako bi
                ste proverili oružje koje kupite u
                našim radnjama Trofej Commerce.
                Ukoliko imate svoje oružje slobodno dođite kod nas da pucate , smatramo da nudimo povoljne cene municije
                i strelišta.</p>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex md8 xs12 lg3 class="mx-4">
          <v-card flat height="100%">
            <v-img src="/static/action_2_bg.jpg" height="100%">
              <h1 class="action-title mx-4 my-4">OBUKA RUKOVANJEM ORUŽJEM</h1>
              <p class="mx-4 mt-8 mb-4 action-text">Obuka i provera znanja izvodi se u redovnim terminima
                Obuka i provera znanja se uspešno može završiti za 2 dana, pod uslovom da kandidat prethodno prouči naš
                materijal u rukovanju vatrenim oružjem.</p>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex md8 xs12 lg3 class="mx-4">
          <v-card flat height="100%">
            <v-img src="/static/action_3_bg.jpg" height="100%">
              <h1 class="action-title mx-4 my-4">PRODAJA ORUŽJA I MUNICIJE</h1>
              <p class="mx-4 mt-8 mb-4 action-text">Veliki izbor pištolja, pušaka i municije po povoljnim cenama.
                Uz oružiije i municiju imamo i veliki izbor prateće opreme.<br/>

                Streljčki Klub Trofej Vam nudi uslugu korišćenja streljane kako bi ste proverili oružje koje kupite u
                našim radnjama Trofej Commerce.</p>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="mb-4" fluid>
      <v-layout row child-flex justify-center align-center wrap fill-height="">
        <v-flex md7 xs8 lg5>
          <v-card flat>
            <v-img src="/static/beretta_92.jpg" class="shrink"></v-img>
          </v-card>
        </v-flex>
        <v-flex md3>
          <v-card align="left" flat>
            <h1>STRELJAČKI KLUB TROFEJ</h1>
            <v-icon color="accent" style="transform: rotate(90deg);" size="60" align="left">mdi-bullet</v-icon>
            <p align="left" class="mt-4 mb-10">
              SK”TROFEJ” poseduje strelište zatvorenog tipa sa dve pucaone sa ukupno devet streljačkih mesta:
              1. pucaona dužine 25 metara sa 4 streljačka mesta i
              2. pucaona dužine 15 metara sa 5 streljačkih mesta.
              Obe pucaone su uredjene u skladu sa svim zakonskim propisima i odgovaraju standardima propisanim za
              obavljanje
              ove vrste delatnosti.
              Pored standardnih meta-kružnih i grudnih koje se koriste za kondiciono gadjanje posedujemo i frontalno-
              pokretnu metu koja se koristi za gadjanje ciljeva u pokretu, do daljine od 15 metara, zatim IPSC i
              padajuće
              mete za praktično gadjanje.

              Streljački klub daje kompletnu obuku u rukovanju oružijem svojim članovima ali i zaintereovanim
              kompanijama
              obezbeđenja ili onih kojim je ova usluga potrebna.
            </p>
            <v-btn color="accent" x-large>VIŠE O KLUBU</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-img src="/static/banner_classes.jpg" width="100%" :height="$vuetify.breakpoint.smAndDown? '650px' : '550px'">
      <v-container>
        <v-layout row child-flex wrap fill-height="">
          <v-flex lg7 xl5 md10 xs12>
            <v-card align="left" flat color="transparent">
              <h1 style="color: white">OBUKA O RUKOVANJU</h1>
              <v-icon color="accent" style="transform: rotate(90deg);" size="60" align="left">mdi-bullet</v-icon>
              <p style="color: white">
                Streljački klub Trofej je ponosan to što može da Vam ponudi kompletnu obuku za rukovanjem svih vrsta
                oružja neophodnu za dobijanje nabavne dozvole. Obuka se izvodi u redovnim terminima:<br/><br/>
                <b>Utorkom od 9:00 do 12:00 časova<br/>
                  Sredom od 12:00 do 16:00 časova</b>
              </p>
              <v-row>
                <v-col style="max-width: 50px">
                  <v-icon x-large color="accent">mdi-target</v-icon>
                </v-col>
                <v-col style="padding-top: 20px"><span><b>Obuka za pištolj - revolver</b></span></v-col>
              </v-row>
              <v-row>
                <v-col style="max-width: 50px">
                  <v-icon x-large color="accent">mdi-target</v-icon>
                </v-col>
                <v-col style="padding-top: 20px"><span><b>Obuka za MK pušku</b></span></v-col>
              </v-row>
              <v-row>
                <v-col style="max-width: 50px">
                  <v-icon x-large color="accent">mdi-target</v-icon>
                </v-col>
                <v-col style="padding-top: 20px"><span><b>Obuka za lovačku pušku</b></span></v-col>
              </v-row>
              <v-row>
                <v-col style="max-width: 50px">
                  <v-icon x-large color="accent">mdi-target</v-icon>
                </v-col>
                <v-col style="padding-top: 20px"><span><b>Obuka za lovački karabin</b></span></v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-container fluid class="my-12">
      <v-layout wrap child-flex justify-center>
        <v-flex lg4>
          <v-card height="100%" color="transparent" align="start" class="px-8 py-6">
            <h1 class="action-title text--primary">PRAVILA STRELIŠTA</h1>
            <v-icon color="accent" style="transform: rotate(90deg);" size="60" align="left">mdi-bullet</v-icon>
            <p>Deci ispod 18 godina pristup ZABRANJEN. Uz svako maloletno dete treba da bude bar 1 roditielj ili staratelj.</p>
            <ol>
              <li>Svako oružje treba da se tretira kao da je napunjeno</li>
              <li>Ukoliko oružje izvučete iz torbe - holstera, cev uvek držite uperenu ka bezbednom pravcu</li>
              <li>Prst uvek držite van obarača sve dok niste spremni da pucate na vatrenoj liniji</li>
              <li>Budite pažljivi i pratite svaki pokret kada radite sa oružjem (Greške koje narušavaju bezbednost se ne tolerišu)</li>
              <li>Ukoliko primetite bilo kakvu opasnu situaciju odmah to prijavite nadležnom licu ili instruktoru</li>
              <li>Ne konzumiraj drogu i alkohol pre nego što izađeš na vatrenu liniju</li>
              <li>Svo oružje mora biti ispražnjeno i bezbedno odloženo pre nego što se napusti vatrena linija</li>
            </ol>
          </v-card>
        </v-flex>
        <v-flex lg4>
        <v-card flat height="100%" color="transparent"  align="start" class="px-8 py-6">
          <h1 class="action-title  text--primary">IPSC</h1>
          <v-icon color="accent" style="transform: rotate(90deg);" size="60" align="left">mdi-bullet</v-icon>
          <youtube video-id="hms6ZWdqHrI"></youtube>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid id="trofej-commerce-bar">
      <v-layout wrap child-flex justify-center>
        <v-flex lg5>
          <v-card flat height="100%" color="transparent">
            <h1 class="action-title">TROFEJ COMMERCE</h1>
            <v-icon color="accent" style="transform: rotate(90deg);" size="60" align="left">mdi-bullet</v-icon>
            <p class="mb-4 action-text">Firma je počela sa radom 1989 god.
              Kao prva privatna mašinsko puškarska radnja u beogradu tada pod nazivom STRELAC, a sada nosi naziv Trofej
              Commerce.<br/> <br/>

              Je privredno društvo za proizvodnju promet i usluge. Osnovna delatnost društva je promet oružija,
              municije, lovne opreme, organizacija lova i usluge servisiranja.<br/><br/>

              U okviru svog asortimana nudi veliki izbor ruskog oružija, ceškog oružija, italijanskog oruzija i
              ostalih prozivođača.
              Takođe vršimo komisionu prodaje oružija građana, svi zainteresovani mogu doneti svoje oružije na procenu i
              prodaju.<br/><br/>

              Zastupnici smo, za našu zemlju, firme Ceske Zbrojavke.</p>
            <v-btn color="accent" x-large>VIŠE O TROFEJ COMMERCE</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <GmapMap
        :center="{lat:44.825743, lng:20.394176}"
        :zoom="16"
        map-type-id="terrain"
        style="width: 100%; height: 600px"
    >
      <GmapMarker
          :position="{lat:44.825743, lng:20.394176}"

      />
    </GmapMap>
  </div>
</template>

<script>
  import 'ken-burns-carousel';

  export default {
    name: 'HomeComponent',
    data() {
      return {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        images: [
          '/static/home_banner_1.png',
          '/static/home_banner_2.jpg',
          '/static/home_banner_3.jpg',
        ],
      };
    },
    computed: {
      imageList() {
        return this.images.join(' ');
      },
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize);
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize);
    },
    onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    },
  };
</script>

<style lang="scss" scoped>
  @import "src/styles/main";

  ol {
    color: black;
  }

  p, li {
    color: $text_secondary;
  }

  span {
    color: $text_primary;
  }

  .slider {
    width: 100%;
    height: 69vh;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
  }

  .shadow_overlay {
    -webkit-box-shadow: inset 0px 0px 300px 100px $primary;
    -moz-box-shadow: inset 0px 0px 300px 100px $primary;
    box-shadow: inset 0px 0px 300px 100px $primary;
  }

  #featuring-bar {
    width: 100vw;
    background-color: $primary;
    margin-top: 68vh;
  }

  #trofej-commerce-bar {
    width: 100vw;
    background-image: url("/static/banner_trofej_commerce.jpg");
    background-size: cover;
    background-position: left;
  }

  #banner-content-container {
    position: absolute;
    top: 22vh;
    z-index: 1;
    transition: none !important;
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
  }

  .action-title {
    color: $text_primary;
    size: 20px;
  }

  .action-text {
    color: $text_teritary;
    size: 14px;
  }

  #banner-content-text {
    color: $text_primary;
  }
</style>
