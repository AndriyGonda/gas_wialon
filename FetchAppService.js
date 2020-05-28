/**@description Inplementation class for making requests from Google Apps Scripts
 * @class
 * @classdesc
 */
class FetchAppService {

     /**
     * @description Fetch Interpretation for GAS
     * @param {string} url  -  API URL
     * @param {object} headers - Headers for API Request
     * @param {object} options - Options (Can be contain the next keys: method, payload)
     * @returns {object}  - returns a json response
     */
    
    fetch(url, headers={}, options={}) {
        headers['Accept'] = 'application/json';
        options['headers'] = headers;
        options['ContentType'] = 'application/json';
        const response = UrlFetchApp.fetch(url, options);
        return JSON.parse(response.getContentText());
    }
    
    /**
     * @description GET Request method
     * @param {string} url - API URL 
     * @param {object} headers - Request headers
     * @returns {object}
     */
    get(url, headers={}) {
        let options = { method: 'GET' };
        return this.fetch(url, headers, options);
    }

    /**
     * @description POST Request method
     * @param {string} url 
     * @param {object} headers 
     * @param {object} options 
     * @returns {object}
     */
    post(url, headers={}, options={}) {
        options['method'] = 'POST';
        return this.fetch(url, headers, options);
    }

    /**
     * @description PUT Request method
     * @param {string} url 
     * @param {object} headers 
     * @param {object} options 
     * @returns {object}
     */
    put(url, headers={}, options={}) {
        options['method'] = 'PUT';
        return this.fetch(url, headers, options);
    }

    /**
     * @description DELETE Request method
     * @param {string} url 
     * @param {object} headers 
     * @param {object} options
     * @returns {object} 
     */
    delete(url, headers={}, options={}) {
        options['method'] = 'DELETE';
        return this.fetch(url, headers, options);
    }

    /**
     * @description QueryString Builder
     * @param {object} queryObject -  Object that contain query-params for URL
     * @returns {string}
     */
    buildQueryString(queryObject) {
        return '?'+Object.keys(queryObject).reduce(function(a,k){a.push(k+'='+encodeURIComponent(queryObject[k]));return a},[]).join('&')
    }
}