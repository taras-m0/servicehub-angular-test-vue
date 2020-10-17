const GET_LIST = '/api/list';
const SET_BOOKMARK = '/api/set_bookmark';

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';

export default new class {
  countLoader = 0;
  isLoaded = false;

  /**
   * Получение списка
   * @param {String} searchStr
   * @param {Number} offset
   * @return {Promise<Array>}
   */
  getList(searchStr, offset = 0){
    return this.api(GET_LIST, METHOD_GET, {
      search: searchStr,
      offset
    });
  }

  /**
   * Установка/Сброс закладки
   * @param {Number} id
   * @param {Boolean} set
   * @return {Promise<Boolean>}
   */
  setBookmark(id, set = true){
    return this.api(SET_BOOKMARK, METHOD_GET, {
      id, set: set ? 1 : ''
    }).then((json) => (true));
  }

  /**
   * Запрос к api
   * @param url
   * @param method
   * @param params
   * @return {Promise<any>}
   */
  api(url, method = METHOD_GET, params = {}){
    const self = this;

    const form = new URLSearchParams('');
    Object.keys(params).forEach((key)=>{
      form.append(key, !!params[key] ? params[key] : '');
    });

    const addFetch = { };
    if(method == METHOD_GET){
      url += `?${form.toString()}`;
    }else if(method == METHOD_POST){
      addFetch.body = form.toString();
    }

    this.countLoader++;
    this.isLoaded = true;

    return fetch(url, Object.assign({
      method,
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      credentials: 'same-origin',
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
    }, addFetch))
      .then((response) => (response.json())).then((json) => {
        if (json.error) {
          throw new Error(json.error);
        }

        self.countLoader--;
        if(self.countLoader <= 0){
          self.countLoader = 0;
          self.isLoaded = false;
        }

        return json;
      }).catch((error) => {
        self.countLoader--;
        if(self.countLoader <= 0){
          self.countLoader = 0;
          self.isLoaded = false;
        }
        throw error;
      });
  }
}
