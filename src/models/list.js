import Vue from 'vue';
import api from "../api";
import { addBroadcastListener, clearBroadcastListeners, sendBroadcast } from '../broadcast'
import item from "./item";

export default new Vue({
  data(){
    return {
      list: [ ],
      search: ''
    }
  },

  watch: {
    search(search){
      this.startLoad();
    }
  },

  created(){
    const self = this;

    this.startLoad();

    addBroadcastListener('testBookmark', ({id, value}) => {
      const bIndex = self.list.findIndex((item) => (id == item.id));
      if (bIndex >= 0){
        self.list[bIndex].bookmark = value;
      }
    });
  },

  methods: {
    startLoad(){
      api.getList(this.search).then((json) => {
        this.list = json.map((data) => (new item(data)));
      });
    },

    /**
     * подгружаем список
     */
    next(){
      const self = this;
      api.getList(this.search, this.list.length).then((json) => {
        self.list.push( ...json.map((data) => (new item(data))) );
      });
    },

    /**
     * ставим/убираем закладку
     * @param id
     */
    toggleBookmark(id){
      const self = this;
      const value = this.list.find((item) => (item.id == id)).bookmark;
      api.setBookmark(id, !value).then(() => {
        sendBroadcast('testBookmark', { id,  value: !value });
        this.list.find((item) => (item.id == id)).bookmark = !value;
      });
    }
  }
})
