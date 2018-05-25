import { Component, Vue } from 'vue-property-decorator';

// Due to an issue in fork-ts-checker-webpack-plugin (used in vue/webpack integration)
// the TS compiler gives an error here.
// Fix: add @ts-ignore before the import
// https://github.com/vuejs/vue-cli/issues/1104

// @ts-ignore
import HelloWorld from '@/components/helloWorld/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
