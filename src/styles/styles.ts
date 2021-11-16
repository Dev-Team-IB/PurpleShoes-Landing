import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
    @font-face {
        font-family: "Gmarket-Sans-Light";
        src: url("/fonts/Gmarket-Sans-Light.ttf");
    }

    @font-face {
        font-family: "Gmarket-Sans-Medium";
        src: url("/fonts/Gmarket-Sans-Medium.ttf");
    }

    @font-face {
        font-family: "Gmarket-Sans-Bold";
        src: url("/fonts/Gmarket-Sans-Bold.ttf");
    }

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Gmarket-Sans-Medium', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #451e5d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1 {
        font-family: 'Gmarket-Sans-Bold', serif;
        color: #451e5d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    h2 { 
        font-family: 'Gmarket-Sans-Bold', serif;
        color: #451e5d;
        font-size: 50px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    h3 {
        font-family: 'Gmarket-Sans-Bold', serif;
        color: #451e5d;
        font-size: 44px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    h4 {
        font-family: 'Gmarket-Sans-Bold', serif;
        color: #451e5d;
        font-size: 38px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    h5 {
        font-family: 'Gmarket-Sans-Bold', serif;
        color: #451e5d;
        font-size: 32px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    h6{
        font-family: 'Gmarket-Sans-Bold', serif;
        color: #451e5d;
        font-size: 26px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #451e5d;
        font-size: 21px;        
        line-height: 1.41;
    }


    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
