import {Button, Input,Slider,InputNumber,notification} from "antd";
import styled from "styled-components";
import axios from 'axios';
import store from "../store/index.js";
import {saveLoading} from "../store/reducer.js";
import {useSelector} from "react-redux";
import {mint, transfer} from "../api/deploy.js";
import { useForm,Controller } from "react-hook-form";
import {useEffect, useState} from "react";
import {Params} from "../utils/constant.js";

const { TextArea } = Input;

const Box = styled.div`
    .bt20{
        margin-bottom: 30px;
        span{
            white-space: nowrap;
            min-width: 160px;
        }
    }
`

const FlexLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .sliderLft{
        flex-grow: 1;
    }
`

const UlBox = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-bottom: 30px;
    li{
        width: 32%;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 2px;

        cursor: pointer;
        background: #f8f8f8;
        height: 100px;
        .bg{
            background: #fff;
            padding: 20px;
            width: 100%;
            height: 96px;
            box-sizing: border-box;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &.active{
            background-image: linear-gradient(90deg, #ff0000, #bdff00, #00ff66, #00b2ff, #2400ff, #ff00d6)
        }
    }
    .ls{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
    .sym{
        opacity: 0.5;
    }
    .num{
        font-size: 28px;
        margin-right: 10px;

        font-weight: bold;
        background-image: linear-gradient(to right, #ff779b, #4d86fa);
        background-clip: text;
        font-family: Aeonik Mono;
        -webkit-background-clip: text;
        color: transparent;
    }
`

const LineBox = styled.div`
    width: 100%;
    dl{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        
        dt{
            opacity: 0.6;
        }
        dd{
            font-size: 18px;
        }
        &:last-child{
            border-top: 1px solid #ccc;
            padding-top: 30px;
        }
    }
    
`

const HashBox = styled.div`
    background: #f8f8f8;
    padding: 20px;
    margin-bottom: 40px;
    gap: 17px;
    display: flex;
    align-items: center;
`

export default function Transfer(){

    const account = useSelector(store => store.account);
    const network = useSelector(store => store.network);
    const [inscription,setInscription] = useState({"p":"brc-20","op":"transfer","tick":"","amt":1000})
    const [inputValue, setInputValue] = useState(0);
    const [type, setType] = useState(0);
    const [fee,setFee] = useState({});
    const [currentFee,setCurrentFee] = useState(0)
    const [step,setStep] = useState(0)
    const [result,setResult] = useState({});
    const [hash,setHash] = useState('');


    const [list,setList] = useState([
        {
            name:"Economy",
            value:0
        },
        {
            name:"Normal",
            value:0
        },
        {
            name:"Custom",
            value:0
        }
    ])

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        setValue('receive', account);
    }, [account]);

    useEffect(()=>{
        getRate()
    },[])

    const getRate = async() =>{
        try{
            let rt = await axios.get('https://mempool.space/api/v1/fees/recommended');
            const {economyFee,halfHourFee,fastestFee} = rt.data;
            let arr = [...list];
            arr[0].value = economyFee;
            arr[1].value = halfHourFee;
            arr[2].value = fastestFee;
            setInputValue(fastestFee)
            setCurrentFee(economyFee)
            setList(arr);
            setFee(rt.data)
        }catch (e) {
            console.error("https://mempool.space/api/v1/fees/recommended",e)
        }


    }

    const onSubmit = (data) =>{
        setHash('')
        const {tick,amount} = data;
        let str = {"p":"brc-20","op":"transfer","tick":tick,"amt":amount}
        setInscription(str)

        handleDeploy(data)

    }

    const handleConfirm = () =>{
        handleSubmit(onSubmit)();
    }

    const handleInputChange = (event) => {
        setValue('receive', event.target.value);
    };


    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const handleDeploy = async (data) =>{
        store.dispatch(saveLoading(true));
        const {unisat} = window;
        const {tick,amount,receive} = data;
        try{
            let rt = await unisat.inscribeTransfer(tick,amount);
            const {inscriptionId} = rt;
            await delay(5000);
            let txid = await unisat.sendInscription(receive, inscriptionId);

            setHash(txid)
            notification.success({
                message: `Transfer Success`,
                placement:"topRight",
            });

        }catch (e) {
                console.error(e)
                notification.error({
                    message: `Transfer Failed`,
                    description: JSON.stringify(e),
                    placement:"topRight",
                });
        } finally {
            store.dispatch(saveLoading(null));
        }

    }



    return <Box>
        <div className="flex items-center justify-between gap-2 bt20">
            <span>Tick:</span>
            <Controller name="tick" control={control} rules={{required: true,minLength:4,maxLength:4}}
                        render={({field}) => (
                            <>
                                <Input
                                    placeholder="Tick,4 characters like &quot;abcd&quot;..."
                                    className="h-10 w-[600px]"
                                    status={errors.tick ? "error" : ""}
                                    {...field}
                                />
                            </>

                        )}
            />
        </div>

        <div className="flex items-center justify-between gap-2 bt20">
            <span>Amount:</span>
            <Controller name="amount" control={control} rules={{required: true}}

                        render={({field}) => (
                            <>
                                <Input
                                    placeholder="amount"
                                    className="h-10 w-[600px]"
                                    status={errors.amount ? "error" : ""}
                                    {...field}
                                />
                            </>

                        )}
            />
        </div>
        <div className="flex items-center justify-between gap-2 bt20">
            <span>Receive Address:</span>
            <Controller name="receive" control={control} rules={{required: true}}

                        value={watch('receive')}
                        render={({field}) => (
                            <>
                                <Input
                                    placeholder="Receive Address"
                                    className="h-10 w-[600px]"
                                    status={errors.receive ? "error" : ""}
                                    {...field}
                                    onChange={handleInputChange}
                                />
                            </>

                        )}
            />
        </div>

        {
            hash && <HashBox>
                <span>txHash</span>
                <a href={`${Params[network].scanUrl}tx/${hash}`} rel="noreferrer" target="_blank">{hash}</a>

            </HashBox>
        }


        <div className=" flex items-center justify-center gap-5">
        <Button type="primary" className=" h-10 w-[200px] launch-btn " onClick={() => handleConfirm()}><span
                    className="label">Transfer</span></Button>


        </div>


    </Box>
}
