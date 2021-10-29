import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle `

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button {
    width: 3px;
    height: 3px;
  }
  // button scroll bar
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.ButtonScrollBg};
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.ButtonScrollBgHoverActive};
  }
  ::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.ButtonScrollBgHoverActive};
  }
  // tracker scroll Bar
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.mainScrollBg};
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-track:hover {
    background: ${({ theme }) => theme.mainScrollBg};
  }
  ::-webkit-scrollbar-track:active {
    background: ${({ theme }) => theme.mainScrollBg};
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .App {
      position: sticky;
      height: 100vh;
      overflow-y: overlay;
      text-align: center;
      display: flex;
      min-height: 100vh;
      justify-content: start;
      justify-items: center;
      flex-direction: column;
      background-image : ${({ theme }) => theme.contentBg};
      // background: ${({ theme }) => theme.body};
      color:${({ theme }) => theme.firstFontColor} !important;
      background-size: cover;
      transition: all .5s linear;
  }


  .App-logo {
      height: 40vmin;
      pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
      .App-logo {
      animation: App-logo-spin infinite 20s linear;
      }
  }


  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  nav{
    background : ${({ theme }) => theme.navColor};
    transition: all .5s linear;
  }
  .navbar-brand{
    color : ${({ theme }) => theme.firstFontColor} !important;
    transition: all .5s linear;
    
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .content-forecast{
    position :relative;
  }
  .toggle-container{
    position: absolute;
    right: 0;
    cursor: pointer;
    padding: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.navColor};
    color: ${({ theme }) => theme.firstFontColor};
    transition: all .5s linear;
  }
  .toggle-container:hover{
    background: ${({ theme }) => theme.firstFontColor};
    color: ${({ theme }) => theme.navColor};
  }

  .wolf-list-group-item{
    color: ${({ theme }) => theme.firstFontColor};
    border : none !important;
    transition: all .5s linear;
  }

  .btn-round{
    border-radius: 50px;
  }
  .font-size-1{
    font-size: .84em;
  }
  .alert-custom{
    color: #22bcdf;
      background-color: #02020205;
      border-color: #22bcdf;
  }
  .form-control{
    background-color: ${({ theme }) => theme.body}!important;
    transition: all .5s linear;
    border: 1px solid #6c757d !important;
    color: #6c757d;
  }
  .form-control:focus {
    color: #6c757d !important;
  }
  .footer{
    color : ${({ theme }) => theme.firstFontColor} !important;
    background : ${({ theme }) => theme.navColor};
    transition: all .5s linear;
  }
  .footer-icon{
    color : ${({ theme }) => theme.secondFontColor};
    transition: all .5s linear;
  }
  .footer-icon:hover{
    color : ${({ theme }) => theme.linkHoverColor};
  }

  .content-app{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 56px);
    transition: all .5s linear;
    background-size: cover;
  }
  .weather-icon{
    filter: drop-shadow(3px 3px 2px rgb(0 0 0 / 0.4));
  }
  .link{
    color: ${({ theme }) => theme.secondFontColor} !important;
    transition: all .5s linear;
  }
  .link:hover {
    color: ${({ theme }) => theme.linkHoverColor} !important;
    
  }
  
  /* hourly CSS */
  .hourly-list{
    padding-left : 0 !important;
  }

  .hourly-hour{
    font-size: 9px !important;
  }
  .hourly-item{
    background : ${({ theme }) => theme.blueOpacityBackground};
    color : ${({ theme }) => theme.hourlyTextColor};
    transition: all .5s linear;
    position: relative;
  }
  .hourly-item > img{
    border-radius: 25px;
    background: ${({ theme }) => theme.hourlyImgBgColor};
    transition: all .5s linear;
  }
  .hourly-item:hover,
  .hourly-item:first-child:hover{
    background: ${({ theme }) => theme.hourlyHover};
    cursor: pointer !important;
    
  }
  .hourly-item:first-child{
    background: ${({ theme }) => theme.hourlyHover};
    transition: all .5s linear;
  }
  .hourly-item:first-child:before {
    content: "";
    position: absolute;
    height: 5px;
    width: 100%;
    top: 0;
    background: ${({ theme }) => theme.secondFontColor};
    transition: all .5s linear;
  }
  
  .descriprion{
    font-size: 0.8em;
  }
 
  /* Current CSS */
  .currentContent{
    margin-bottom : 35px;
    transition: all .3s linear;
    border-radius: 25px 25px 0 0;
    padding: 32px 0;
  }
  .temp > span {
    font-weight: 700;
    font-size: 6em;
    line-height: normal;
  }
  
  .country-name-content > span {
    font-size: 2.5em;
    font-weight: 200;
  }
  .day-name{
    font-weight: 200;
  }
  .max-min-temp{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding-left: 13px;
    color: ${({ theme }) => theme.secondFontColor};
    transition: all .5s linear;
  }
  
  /* dayly CSS */
  .dayly-list > li:first-child{
    padding-left: 0 !important;
  }
  .dayly-title > span{
    font-size: 13px;
    font-weight: 400;
    color: #747474;
  }
  .list-group-item{
    color: ${({ theme }) => theme.firstFontColor} !important;
    transition: all .5s linear;
  }
  .dayly-card{
    background : ${({ theme }) => theme.daylyBackground};
    color :${({ theme }) => theme.firstFontColor};
    transition: all .5s linear;
  }
  .dayly-card:hover  .list-group-item{
    color: ${({ theme }) => theme.firstFontColor}!important;
    transition: all .5s linear;
  }
  .dayly-card:hover{
    background: ${({ theme }) => theme.hourlyHover};   
    transition: all .5s linear;
    cursor: pointer !important;
  
  }
  .temp-icon > img{
    width: 75%;
  }
  .temp-text > span{
    font-size: 3em;
    font-weight: 800;
  }
  .small-text{
    font-size: 0.9em;
  }

  /* detailCurrent CSS */
  .svg {
    display: block;
    margin: 20px auto;
    max-width: 100%;
  }
  
  .svg-circle-bg {
    fill: none;
  }
  
  .svg-circle {
    fill: none;
  }
  .svg-circle{
   font-size: 2rem;
    text-anchor: middle;
    
    font-weight: bold;
  }
  
  .svg-content{
    position: relative;
  }
  .moon-phase-content{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .left-block > div {
  
    padding: 15px;
    border: 1px solid #363c44;
    border-radius: 5px;
    margin-bottom: 5px;
  
  }
  
  .right-block-item{
    background: ${({ theme }) => theme.navColor};
    transition: all .5s linear;
    padding: 10px;
    margin-bottom: 10px;
  }
  

  .navbar-collapse {
    margin-top: 20px;
    padding-bottom: 20px;
  }
  .navbar-toggler{
    border-color: rgb(108 117 125);
  }
//   @media(min-width: 986px){
//     .navbar-collapse {
//       margin-top: 0px;
//       padding-bottom: 0px;
//     }
//  }
 @media(min-width: 992px){
  .right-block-item{
      background:none;
      padding: 0px;
      margin-bottom: 0px;
  }
  .navbar-collapse {
    margin-top: 0px;
    padding-bottom: 0px;
  }
  .wolf-list-group-item{
    border-bottom: 1px solid ${({ theme }) => theme.secondFontColor} !important;
  }
}
  /* Loader CSS */
  .box {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box svg path,
  .box svg rect {
    fill: #65b6ee;
  }
  .Current-detail-content{
    background : ${({ theme }) => theme.blueOpacityBackground};
    padding 15px;
    border-radius:  0 0 25px 25px;
  }

.navbar-toggler-icon{
  background-image : ${({ theme }) => theme.menuIcon};
}


`;

export const lightTheme = { 
    body : "#e3e3e3",
    navColor : "#d1d1d1",
    firstFontColor : "#212529",
    secondFontColor : "#89898b",
    blueOpacityBackground : "transparent",
    hourlyTextColor : "#212529",
    hourlyHover : "#d1d1d1",
    daylyBackground : "rgb(209 209 209 / 48%);",
    linkHoverColor : "#0767bb",
    hourlyImgBgColor : "#d1d1d1",
    contentBg : `url('${process.env.PUBLIC_URL}/bg_light.png')`,
    ButtonScrollBg : "#a1a1a1",
    ButtonScrollBgHoverActive : "#878686",
    mainScrollBg : "#c1c1c1", 
    menuIcon : `url('${process.env.PUBLIC_URL}/menu_light.svg') !important`,
};
export const darkTheme = {
    body : "#181f28",
    navColor : "#02080e",
    firstFontColor : "#f5f5f5",
    secondFontColor : "#89898b",
    blueOpacityBackground : "rgb(3 13 24 / 68%)",
    hourlyTextColor : "#f5f5f5",
    hourlyHover : "#02080e",
    daylyBackground : "rgb(3 13 24 / 68%)",
    linkHoverColor : "#00c3ff",
    hourlyImgBgColor : "#a7a6a6",
    contentBg : `url('${process.env.PUBLIC_URL}/bg_dark.png')`,
    ButtonScrollBg : "#222f3e",
    ButtonScrollBgHoverActive : "#576574",
    mainScrollBg : "rgb(3 13 24)",
    menuIcon : `url('${process.env.PUBLIC_URL}/menu_dark.svg') !important`,
};