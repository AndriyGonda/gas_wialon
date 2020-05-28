/**
 * @class
 * @classdesc 
 */
class WialonSDKService extends FetchAppService {
    /**
     * 
     * @param {string} host - Wialon SDK host URL 
     * @param {string} token - token string with length 72 characters
     */
    constructor(host, token) {
        super();
        this.host = host;
        this.token = token;
        this.sid = null;
    }

    /**
     * @description Request to Wialon SDK
     * @param {string} svc - Wialon service name
     * @param {object} params - Request parameters
     * @returns {object} json response
     */
    request(svc, params) {
        if (!this.sid) {
            const queryParameters = {
                svc: svc,
                params: JSON.stringify(params)
            }
            return this.post(`${this.host}/wialon/ajax.html${this.buildQueryString(queryParameters)}`);
        }

        const queryParameters = {
            svc: svc,
            sid: this.sid,
            params: params
        }
        return this.post(`${this.host}/wialon/ajax.html${this.buildQueryString(queryParameters)}`);
    }

    /**
     * @description Login to Wialon account
     */
    login() {
        return this.request('token/login', {
            token: this.token
        });
    }

    /**
     * @description Logout from account
     */
    logout() {
        return this.request('core/logout', {});
    }

}
