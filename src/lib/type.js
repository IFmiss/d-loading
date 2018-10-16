/**
 * Loading 的类型
 */

 /**
 * 默认loading
 * @param {mainColor}         // svg loading的主色
 * @param {auxiliaryColor}    // svg loading 的辅助色
 * 
 * @return {function}         // 返回一个dom文本
 */
function defaultLoadingEle (mainColor, auxiliaryColor) {
  return `
    <svg class="lds-spinner default" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="20 20 60 60" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(30 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(60 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(90 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(120 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(150 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(210 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(240 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(270 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(300 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(330 50 50)">
      <rect x="48.5" y="25" rx="4.8500000000000005" ry="2.5" width="3" height="14" fill=${mainColor}>
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
  </g></svg>
  `
}

/**
 * 圆形loading
 * @param {mainColor}             // svg loading的主色
 * @param {auxiliaryColor}        // svg loading 的辅助色
 * @param {otherAuxiliaryColor}   // svg loading 的其他辅助色
 * @return {function}             // 返回一个dom文本
 */

// 橙黄色 mainColor:#f32424;  auxiliaryColor: #f97b11;  otherAuxiliaryColor:#ffc600;
// 粉色 mainColor:#ff5591;  auxiliaryColor: #ffa6c7;  otherAuxiliaryColor:#ffedf7;
function circleLoadingEle (mainColor, auxiliaryColor, otherAuxiliaryColor) {
  return `<svg class="circle" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="200px" height="200px"  viewBox="0 0 200 200"
          xml:space="preserve">
          <!--#4886CD为深色值   #9DBFE4为中间值 可以随意修改-->  
          <style type="text/css">
          .left{fill:url(#left);}
          .right{fill:url(#right);}
          .top{fill:${otherAuxiliaryColor};}
          @keyframes load{
          0%{transform:rotate(0)}
          100%{transform:rotate(-360deg)}
          }
          #load{animation:load 1s  linear infinite; transform-origin:center center; } 
          </style>
          <g id="load">
          <linearGradient id="right" gradientUnits="userSpaceOnUse" x1="150" y1="20" x2="150" y2="180">
          <stop  offset="0" style="stop-color:${otherAuxiliaryColor}"/>
          <stop  offset="1" style="stop-color:${auxiliaryColor}"/><!--蓝到浅蓝渐变-->
          </linearGradient>
          <path class="right" d="M100,0v20c44.1,0,80,35.9,80,80c0,44.1-35.9,80-80,80v20c55.2,0,100-44.8,100-100S155.2,0,100,0z"/><!--右半圆环-->
          <linearGradient id="left" gradientUnits="userSpaceOnUse" x1="50" y1="0" x2="50" y2="180">
          <stop  offset="0" style="stop-color:${otherAuxiliaryColor}"/>
          <stop  offset="1" style="stop-color:${mainColor} "/><!--浅蓝到白色渐变-->
          </linearGradient>
          <path class="left" d="M20,100c0-44.1,35.9-80,80-80V0C44.8,0,0,44.8,0,100s44.8,100,100,100v-20C55.9,180,20,144.1,20,100z"/><!--左半圆环-->
          <circle class="top" cx="100" cy="10" r="10"/>
          </g>
        </svg>`
}

/**
 * @param {type}                  // svg loading的类型
 * @param {mainColor}             // svg loading的主色
 * @param {auxiliaryColor}        // svg loading 的辅助色
 * @param {otherAuxiliaryColor}   // svg loading 的其他辅助色  有些svg可能会用到
 * 
 * @return {function}             // 返回一个方法执行返回的一个dom文本
 */
export const type = (type, mainColor, auxiliaryColor, otherAuxiliaryColor) => {
  switch (type) {
    case 'circle':
      return circleLoadingEle(mainColor, auxiliaryColor, otherAuxiliaryColor)
    default:
      return defaultLoadingEle(mainColor, auxiliaryColor)
  }
}