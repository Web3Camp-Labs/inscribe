import Layout from "../layout/layout.jsx";
import "../assets/style/assets.scss";
import {useEffect, useState} from "react";
import store from "../store/index.js";
import {saveLoading} from "../store/reducer.js";
import {notification} from "antd";
import {mint} from "../api/deploy.js";
import {useSelector} from "react-redux";
import {getAssets} from "../api/assets.js";
export default function MyAssets(){
    const account = useSelector(store => store.account);
    const network = useSelector(store => store.network);

    const [list,setList] = useState([])

    useEffect(() => {
        if(!network || !account)return;
        getMy()
    }, [network,account]);

    const getMy = async() =>{
        store.dispatch(saveLoading(true));
        try{

            let rt = await getAssets(account);
            console.log(rt)
            setList(rt.data.detail)

        }catch (e) {
            console.error(e)
            notification.error({
                message: `Load Failed`,
                description: JSON.stringify(e),
                placement:"topRight",
            });

        }finally {
            store.dispatch(saveLoading(null));
        }
    }

    return  <Layout>
        <div className="assets-page">
            <div className="list-content">
                <div className="orders-table">
                    <div className="card-container">
                        {
                            list.map((item,index)=>(<div className="asset-card-new" key={index}>
                                    <div className="timo">{item.ticker}</div>
                                    <div className="count-info">
                                    </div>
                                    <div className="card-bottom">
                                        <div className="total">
                                                <span className="token">
                                                    Transferable
                                                </span>
                                            <span className="total-price">{item.transferableBalance}</span>
                                        </div>
                                        <div className="total">
                                                <span className="token">
                                                    Available
                                                </span>
                                            <span className="total-price">{item.availableBalance}</span>
                                        </div>
                                        <div className="total">
                                                <span className="token">
                                                    Balance
                                                </span>
                                            <span className="total-price">{item.overallBalance}</span>
                                        </div>
                                    </div>


                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
