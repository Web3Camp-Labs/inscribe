import Header from "./header.jsx";
import LogoImg from "../assets/images/logo.png";
import styled from "styled-components";

const Dbox = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0;
    width: 1210px;
 
`
const ImgBox = styled.div`
    width: 96px;
    height: 96px;
    padding: 13px;
    margin-right: 16px;
    background: #fff;
    border: 1px solid rgb(237, 239, 240);
    border-radius: 20px;
    img{
        width: 100%;
        height: 100%;
    }
`

const Desc = styled.div`
    .title{
        font-size: 18px;
        line-height: 22px;
    }
    .desc{
        font-size: 16px;
    }
`


export default function Layout({children}){
    return <div className="app-layout">
        <Header />
        <Dbox>
            <ImgBox>
                <img src={LogoImg} alt=""/>
            </ImgBox>

            <Desc>
                <div className="title">Inscribe</div>
                <div className="desc">Quickly generate BRC20 inscription.</div>
            </Desc>

        </Dbox>
            <div className="app-container">{children}</div>
    </div>
}
