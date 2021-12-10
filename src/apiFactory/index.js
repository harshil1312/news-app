import {AxiosMaster} from './AxiosMaster';

export class API {
  constructor(base) {
    this.axiosMaster = new AxiosMaster({token: localStorage.getItem('token'), base});
  }

  getNewsList(type) {
    return this.axiosMaster.get(`/${type}`);
  };

}
