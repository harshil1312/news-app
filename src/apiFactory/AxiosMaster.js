import axios from 'axios';
import {API_KEY, BASE_NEWS_URL} from "../constants/defaultValues";

export class AxiosMaster {
  constructor({token, base}) {
    this.base = BASE_NEWS_URL;
    this.instance = axios.create({
      baseURL: this.base,
      timeout: 30000,
      headers: {}
    });
  }

  appendApiKey(url = '') {
    if (url.includes('?')) {
      return `${url}&apiKey=${API_KEY}`;
    }
    return `${url}?apiKey=${API_KEY}`;
  }

  get(url) {
    url = this.appendApiKey(url);
    return this.instance.get(url)
  };

  post(url, params) {
    return params ? this.instance.post(url, params) : this.instance.post(url)
  };

}
