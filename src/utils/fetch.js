import axios from 'axios';

export const fetch = (url, params, data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(axios.get(url, { params, data }));
        }, 500);
    });
}
