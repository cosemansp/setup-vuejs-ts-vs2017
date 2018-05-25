import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './sample.html';

/*
    To make it possible use the template as an separated
    html file you must add 'the vue-template-compiler-loader'
    to webpack

    REMARK: component unit testing is not working with this approche
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
