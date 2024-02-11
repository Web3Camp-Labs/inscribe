import request from './index';
export const deploy = (data) =>{
    return request.post("/v2/inscribe/order/create/brc20-deploy",data);
}

export const mint = (data) =>{
    return request.post("/v2/inscribe/order/create/brc20-mint",data);
}
export const transfer = (data) =>{
    return request.post("/v2/inscribe/order/create/brc20-transfer",data);
}
