import { createGlobalStyle } from "styled-components";
import "../assets/style/font.scss";

const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: 100%;
    }


    input::-ms-clear, input::-ms-reveal {
        display: none
    }

    *, *:before, *:after {
        box-sizing: border-box!important;

    }


    body {
        margin: 0
    }

    [tabindex="-1"]:focus {
        outline: none
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: .5em;
        font-weight: 500
    }

    p {
        margin-top: 0;
        margin-bottom: 1em
    }

    abbr[title], abbr[data-original-title] {
        text-decoration: underline dotted;
        border-bottom: 0;
        cursor: help
    }

    ol, ul, dl {
        margin-top: 0;
        margin-bottom: 1em
    }

    ol ol, ul ul, ol ul, ul ol {
        margin-bottom: 0
    }

    dt {
        font-weight: 500
    }

    dd {
        margin-bottom: .5em;
        margin-left: 0
    }

    blockquote {
        margin: 0 0 1em
    }

    dfn {
        font-style: italic
    }

    b, strong {
        font-weight: bolder
    }

    small {
        font-size: 80%
    }

    sub, sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline
    }

    sub {
        bottom: -.25em
    }

    sup {
        top: -.5em
    }

    pre, code, kbd, samp {
        font-size: 1em;
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace
    }

    pre {
        margin-top: 0;
        margin-bottom: 1em;
        overflow: auto
    }

    figure {
        margin: 0 0 1em
    }

    img {
        vertical-align: middle;
        border-style: none
    }

    a, area, button, [role=button], input:not([type="range"]), label, select, summary, textarea {
        touch-action: manipulation
    }

    caption {
        padding-top: .75em;
        padding-bottom: .3em;
        text-align: left;
        caption-side: bottom
    }

    input, button, select, optgroup, textarea {
        margin: 0;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit
    }

    button, input {
        overflow: visible
    }

    button, select {
        text-transform: none
    }

    button, html [type=button], [type=reset], [type=submit] {
        -webkit-appearance: button
    }

    button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {
        padding: 0;
        border-style: none
    }

    output {
        display: inline-block
    }

    summary {
        display: list-item
    }

    template {
        display: none
    }

    [hidden] {
        display: none !important
    }

    mark {
        padding: .2em;
        background-color: #feffe6
    }

    body {
        background-color: #FAFBFC;
        color: #000
    }

    .app-layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh!important;
        
    }
    

    .app-layout .app-container {
        width: 1270px;
        //min-width: 1200px;
    }

    .ant-modal .ant-modal-content {
        padding: 20px 80px 40px
    }

    .ant-modal .ant-modal-close {
        width: 32px;
        height: 32px
    }

    .ant-modal .modal-title {
        text-align: center;
        color: #fff;
        font-family: Aeonik Mono;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal
    }
    @media (max-width: 768px) {
        .app-layout .app-container {
            width: 100vw
        }
    }

    .app-header {
        width: 100%;
        box-sizing: border-box;
        padding: 0 5%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .app-header .mobile-menu {
        display: none
    }

    .app-header .mobile-menu .anticon-menu {
        font-size: 24px
    }

    .app-header .menu {
        flex: 1 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px
    }

    .app-header .menu .menu-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 9px 11px;
        cursor: pointer;
        color: #666;
        font-family: Aeonik;
        font-size: 14px
    }

    .app-header .menu .menu-item.active, .app-header .menu .menu-item:hover {
        color: #000
    }

    .app-header .connect {
        width: 250px;
        text-align: right
    }

    .app-header .connect-button {
        height: 48px;
        padding: 6px 40px;
        border-radius: 12px;
        border: 2px solid #fff;
        color: #fff;
        font-family: Aeonik Mono;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal
    }

    .mobile-popover {
        padding: 5px
    }

    .mobile-popover .mobile-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px
    }

    .mobile-popover .mobile-menu .menu-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 9px 11px;
        cursor: pointer;
        color: #c8c8c8;
        font-family: Aeonik;
        font-size: 16px
    }

    .mobile-popover .mobile-menu .menu-item.active, .mobile-popover .mobile-menu .menu-item:hover {
        color: #fff
    }

    .mobile-popover .connect {
        margin: 10px 0
    }

    .mobile-popover .connect .connect-button {
        height: 48px;
        padding: 6px 20px;
        border-radius: 12px;
        border: 2px solid #fff;
        color: #fff;
        font-family: Aeonik Mono;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal
    }

    .ant-dropdown .ant-dropdown-menu{
        background: #1f1f1f;
        color: #fff;
    }
    .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item {
        margin: 10px;
        border-radius: 12px;
    }

    .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item .header-dropdown-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 34px;
        color: #c8c8c8;
        font-family: Aeonik Mono;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 12px
    }

    .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item:hover {
        background-color: #ffffff1a;
        color: #fff;
    }

    @media (max-width: 768px) {
        .app-header {
            width: 100vw;
            padding-right: 20px
        }

        .app-header .menu, .app-header .connect {
            display: none
        }

        .app-header .mobile-menu {
            display: flex
        }
    }

    .app-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: #f5f5f5;
        margin-top: auto;
        box-sizing: border-box;
        width: 100%;
    }

    .app-footer .medias {
        display: flex;
        align-items: center;
        gap: 38px
    }

    .app-footer .medias .media {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #646464;
        font-size: 40px
    }

    .app-footer .medias .media:hover {
        color: #fff
    }

    .ant-input-affix-wrapper{
        border-color: #424242;
    }


    .page-title {
        margin-top: 10px;
        margin-bottom: 40px;
        color: #fff;
        text-align: right;
        font-feature-settings: "clig" off, "liga" off;
        font-family: Whyte Inktrap;
        font-size: 64px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: capitalize
    }

`;



export default GlobalStyle;
