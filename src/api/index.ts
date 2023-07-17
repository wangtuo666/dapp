import request from '../utils/request';

export const readallhappyletter = (data:any) => {
    return request({
        url: '/readallhappyletter',
        method: 'post',
        data,
    });
};
export const confirmhappyletter = (data:any) => {
    return request({
        url: '/confirmhappyletter',
        method: 'post',
        data,
    });
};
