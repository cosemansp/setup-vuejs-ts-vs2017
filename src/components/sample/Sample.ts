import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './sample.html';

/*
    To make it possible use the template as an separated
    html file you must add 'the vue-template-compiler-loader'
    to webpack
 */
@Component({
  ...template,
})
export default class Sample extends Vue {
  title = 'Sample component';

  onClick(event: any) {
    console.log('onClick', event);
  }
}
