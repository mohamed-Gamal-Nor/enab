<div class="navbar-all">
    <div
      v-bind:class="{
        navbar: navbarStauts,
        'navbar-fixed': getMainNavClasses,
      }"
    >
      <div class="container-fluid">
        <div class="menu-icon">
          <font-awesome-icon icon="bars" @click="openMenu()" />
        </div>
        <div class="logo">
          <router-link :to="`/${$i18n.locale}`">
            <img src="../assets/logo.png" />
          </router-link>
        </div>
        <div class="pages-link one">
          <router-link :to="`/${$i18n.locale}`">{{
            $t("menuLinks.home")
          }}</router-link>
          <router-link :to="`/${$i18n.locale}/about`">{{
            $t("menuLinks.about")
          }}</router-link>
          <router-link :to="`/${$i18n.locale}/gallery`">{{
            $t("menuLinks.gallery")
          }}</router-link>
          <router-link :to="`/${$i18n.locale}/menu`">{{
            $t("menuLinks.MenuBook")
          }}</router-link>
        </div>

        <div class="pages-link two">
          <router-link to="/">{{ $t("menuLinks.contact") }}</router-link>
          <router-link :to="{ name: 'About' }">{{
            $t("menuLinks.stores")
          }}</router-link>
          <router-link :to="{ name: 'About' }">{{
            $t("menuLinks.map")
          }}</router-link>
        </div>
        <b-dropdown
          id="dropdown-right"
          right
          :text="`${$i18n.locale}`"
          variant="primary"
          class="m-2"
        >
          <b-dropdown-item @click="setLocale('en')">
            <country-flag country="us" />
            <a>Engilsh</a>
          </b-dropdown-item>
          <b-dropdown-item @click="setLocale('ar')">
            <country-flag country="eg" />
            <a>Arabic</a>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </div>




  b-dropdown#dropdown-right.m-2(, right, :text="`${$i18n.locale}`")
        b-dropdown-item(@click="setLocale('en')")
          country-flag(country="us")
          span Engilsh
        b-dropdown-item(@click="setLocale('ar')")
          country-flag(country="eg")
          span Arabic