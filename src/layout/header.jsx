import { Button } from 'antd';
import Logo from "../assets/images/web3camp.png";
import {SearchOutlined, CloseOutlined,WalletOutlined} from "@ant-design/icons";
import InscribeImg from "../assets/images/inscribe.svg";
import MarketImg from "../assets/images/market.svg";
import store from "../store";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {saveAccount, saveNetwork} from "../store/reducer.js";
import {useSelector} from "react-redux";
import Loading from "../components/loading.jsx";

const OuterBox = styled.div`
    background: #fff;
`

const Box = styled.div`
    a{
      text-decoration: none;
    }
 
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    font-family: Aeonik Mono;
  }
  span{
    font-size: 48px;
    color: #fff;
    line-height: 60px;
    text-decoration: none;
  }
  img{
    height:45px;
    //background: #000;
  }
`
const RhtBox = styled.div`
    .launch-btn .address{
        font-size:16px!important;
        i{
            margin-left: 10px;
        }
    }
`

export default function Header() {
    const {unisat} = window;
    const loading = useSelector((state) => state.loading);
    const account = useSelector(store => store.account);
    const selfRef = useRef ({
        accounts: [],
    });
    const self = selfRef.current;

    useEffect(() => {
        const   checkUnisat = async() => {
            if (!unisat) return;
            unisat.on("accountsChanged", handleAccountsChanged);
            // unisat.on("networkChanged", handleNetworkChanged);
            return () => {
                unisat.removeListener("accountsChanged", handleAccountsChanged);
                // unisat.removeListener("networkChanged", handleNetworkChanged);
            };
        }
        checkUnisat().then();
        getUnisatNet();
    }, []);

    const getUnisatNet = async() =>{
        try {
            let res = await unisat.getNetwork();
            store.dispatch(saveNetwork(res))
        } catch (e) {
            console.log("network",e);
        }
    }

    const connect = async() =>{
        const result = await unisat.requestAccounts();
        self.accounts = result;

        if (result.length > 0) {
            store.dispatch(saveAccount(result[0]));

        }

        // handleAccountsChanged(result);
    }

    const handleAccountsChanged = () => {

        disconnect()
        // self.accounts = _accounts;
        // if (_accounts.length > 0) {
        //     store.dispatch(saveAccount(_accounts[0]));
        // }
    };

  const shortAddress = (addr) => {
        const address  = addr.trim().toString();
        const frontStr = address.substring(0, 5);

        const afterStr = address.substring(address.length - 4, address.length);

        return `${frontStr}...${afterStr}`;
    };

    const disconnect = () =>{
        store.dispatch(saveAccount(null));
    }


    return <OuterBox className="app-header">
        {
            loading &&   <Loading />
        }
        <LogoBox>
            <a href="https://web3camp.us/" rel="noreferrer"><img src={Logo} alt=""/></a>
        </LogoBox>
        <Box className="menu">
            {/*<NavLink  to="/explorer" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item false'}>*/}
            {/*    <SearchOutlined />*/}
            {/*    <span className="label">Explorer</span>*/}
            {/*</NavLink>*/}
            {/*<NavLink  to="/marketplace" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item false'}>*/}
            {/*    <img src={MarketImg} alt=""/>*/}
            {/*    <span className="label">Marketplace</span>*/}
            {/*</NavLink>*/}
            <NavLink to="/inscribe"  className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item false'}>
                <img src={InscribeImg} alt=""/>
                <span className="label">Inscribe</span>
            </NavLink>

            {
                !!account&& <NavLink to="/my-assets"  className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item false'}>
                    <WalletOutlined />
                    <span className="label">My Assets</span>
                </NavLink>
            }

        </Box>
        <RhtBox className="connect">
            {
                !account && <Button  type="primary"  className="launch-btn"  onClick={() => connect()}><span className="label">Connect</span></Button>
            }
            {
                !!account && <Button  className="launch-btn"><span className="label address" onClick={() => disconnect()}>{shortAddress(account)} <i><CloseOutlined /></i></span></Button>
            }
        </RhtBox>

    </OuterBox>
}
