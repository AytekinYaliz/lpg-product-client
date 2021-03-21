import { fetch } from '../../utils/fetch';

const url = process.env.REACT_APP_PRODUCT_SERVICE_URL;

export const searchProducts = (params = {}) => {

    console.log(params);
    if(params.sortOrder) {
        params.sortOrder = params.sortOrder === 'ascend' ? 'asc' : 'desc';
    }

    params.pageIndex = params.current-1;
    delete params.current;
    delete params.total;

    return fetch(url + '/api/v1/products/search', params);
}