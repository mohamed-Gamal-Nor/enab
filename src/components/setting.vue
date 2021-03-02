<template lang="pug">
    .setting-bar.active
        .container
            .icon(@click="openSetting()")
                font-awesome-icon(icon="cog" spin )
            .logo
                img(src="https://i.ibb.co/8B58bPB/logo.png")
            audio(ref="audio" preload="auto" volume="0.1" loop id="music")
                source(:src="music")
            .setting-item
                h1 {{$t("settings.music")}}
                .button
                    span(@click="playAudio()" :class="notActive") {{$t("settings.on")}}
                    span(:class="active" @click="PauseAudio()") {{$t("settings.off")}}
            .setting-item
                h1 {{$t("settings.language")}}
                .lang(v-if="$i18n.locale == 'en'")
                    button(@click="setLocale('ar')")
                        country-flag(country="eg")
                .lang(v-else="$i18n.locale == 'ar'")
                    button(@click="setLocale('en')")
                        country-flag(country="us")
</template>
<script>
import CountryFlag from "vue-country-flag";
export default {
     components: {
        CountryFlag,
    },
    data(){
        return{
            active:"active",
            notActive:"",
            music:require("@/assets/media/music.mp3")
        }
    },
    methods:{
        setLocale(locale) {
            this.$i18n.locale = locale;
            this.$router.push({
                params: { lang: locale },
            });
        },
        openSetting(){
            document.querySelector(".setting-bar").classList.toggle("active");
        },
        playAudio(){
            document.getElementById("music").play();
            this.notActive="active";
            this.active="null";
        },
        PauseAudio(){
            document.getElementById("music").pause();
            this.notActive="null";
            this.active="active";
        }
    }
}
</script>

<style lang="scss" scoped>
.setting-bar{
    position: fixed;
    top: 0;
    right: 0px;
    height: 100%;
    z-index: 1000;
    width: 220px;
    background-image: linear-gradient(rgba(#eee3c7, 0.9), rgba(#455c56, 0.9));
    transition: 0.3s;
    &.active{
        transition: 0.3s;
        right: -220px;
    }
    .icon{
        background-color: var(--main-color);
        padding: 5px 10px;
        position: absolute;
        top: 20%;
        left: -35px;
        border-radius:10px 0px 0px 10px ;
        cursor: pointer;
        
        svg{
            color:var(--seconed-color) ;
        }
    }
    .logo{
        text-align: center;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--seconed-color);
    }
    .setting-item{
        text-align: center;
        margin: 5px 0px;
        border-bottom: 1px solid var(--seconed-color);
        h1{
            font-family: var(--font-title);
            color: var(--seconed-color);
            margin: 0;
            text-transform: capitalize;
            font-size: 25px;
        }
        .button{
            margin: 5px 0;
            display: flex;
            justify-content: center;
            span{
                display: block;
                width: 30%;
                color: var(--main-color);
                text-transform: uppercase;
                font-family: var(--main-font);
                font-size: 13px;
                background-color: var(--seconed-color);
                margin: 5px;
                padding: 0px 5px;
                cursor: pointer;
                opacity: 0.5;
                transition: 0.3s;
                &.active{
                    opacity: 1;
                }
            }
        }
        .lang{
            button{
                outline: none;
                border: none;
                background-color: transparent;
                span{
                    line-height: 1px;
                }
            }
        }
    }
}
</style>