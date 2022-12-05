import {HOST_API} from "./../src/configuration/AppConfiguration";
import axios from 'axios';


export const getDane = (id: number) => {
    return axios.request({
        method: 'get',
        url: `${HOST_API}${id}`,
    })
};

export const getImage = () => {
    return axios.request({
        method: 'get',
        url: `https://picsum.photos/534/383.jpg`,
    })
};

export const wyslijFormularz = (dane: any) => {
    alert(JSON.stringify(dane))
    return axios.request({
        method: 'post',
        url: `https://example/`,
        data: dane
    })
};



