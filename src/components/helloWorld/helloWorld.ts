import { Component, Prop, Vue } from 'vue-property-decorator';
import Sample from '@/components/sample/Sample';

@Component({
  components: {
    Sample,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  title = 'just a title';

  onClick(event: any) {
    console.log('onClick', event);
  }
}
