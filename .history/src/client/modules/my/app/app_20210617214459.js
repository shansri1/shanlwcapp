import { LightningElement } from 'lwc';
export default class App extends LightningElement {
  sessionId;

  state = 'list';

  handleNavigate(event) {
    this.state = event.detail.state;
    this.sessionId = event.detail.sessionId;
  }
}