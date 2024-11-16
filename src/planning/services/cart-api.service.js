import http from "../../shared/http-common.js";


export class cartApiService {
    _resourceEndpoint = '/carts';
    getAll(){
        return http.get(`${this._resourceEndpoint}`);
    }
    getById(cartId) {
        return http.get(`${this._resourceEndpoint}/${cartId}`);
    }
    createCart(cart){
        return http.post(`${this._resourceEndpoint}`, cart);
    }
    deleteCart(cartId){
        return http.delete(`${this._resourceEndpoint}/${cartId}`);
    }
}