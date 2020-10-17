import api from "../api";
import {sendBroadcast} from "../broadcast";

export default class {
  id;
  title;
  date;
  bookmark = false;

  constructor(data){
    Object.assign(this, data);
  }

  toggleBookmark(){
      api.setBookmark(this.id, !this.bookmark).then(() => {
        sendBroadcast('testBookmark', { id: this.id,  value: !this.bookmark });
        this.bookmark = !this.bookmark;
      });
    }
}
