import request from './index';
export const getAssets = (address) =>{
    return request.get(`/v1/indexer/address/${address}/brc20/summary?start=0&limit=10000`);
}

