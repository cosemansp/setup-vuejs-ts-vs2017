import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
// https://github.com/vuejs/vue-cli/issues/1104
import HelloWorld from '@/components/helloWorld/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
