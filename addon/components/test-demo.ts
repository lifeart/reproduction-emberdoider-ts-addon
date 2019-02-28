import Component from '@ember/component';
// @ts-ignore
import layout from '../templates/components/demo';
import { attribute, classNames } from '@ember-decorators/component';

@classNames('foo', 'bar')
export default class MyDemo extends Component {
  layout: any = layout;
  tagName: string = 'button';
  
  @attribute('name')
  item: string = 'name';
}
