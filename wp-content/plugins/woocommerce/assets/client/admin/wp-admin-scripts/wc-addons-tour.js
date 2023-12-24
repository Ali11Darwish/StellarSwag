(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const o=window.wp.element,t=window.wc.components,n=window.wc.tracks,r=window.wp.data,a=window.wc.data,c=e=>{var o;const t=((null===(o=document.getElementById("wpadminbar"))||void 0===o?void 0:o.offsetHeight)||0)+8;e.top<t?window.scrollBy(0,e.top-t):e.bottom>window.innerHeight&&window.scrollBy(0,e.bottom-window.innerHeight)},l=window.wp.i18n,s=document.createElement("div");s.setAttribute("id","wc-addons-tour-root"),(0,o.render)((0,o.createElement)((()=>{const[e,s]=(0,o.useState)(!0),{updateOptions:i}=(0,r.useDispatch)(a.OPTIONS_STORE_NAME),m=(()=>{const e=(0,o.createElement)("br");return[{referenceElements:{desktop:'#adminmenu a[href="admin.php?page=wc-admin&path=%2Fextensions"]'},focusElement:{desktop:'#adminmenu a[href="admin.php?page=wc-admin&path=%2Fextensions"]'},meta:{name:"wc-extensions-menu-item",heading:(0,l.__)("Welcome to the WooCommerce Marketplace","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Power up your store by adding extra functionality with extensions or integrate your store with other software and services.<br/><br/>Here you'll find hundreds of trusted solutions for your store — all reviewed and approved by the Woo team.<br/><br/>You can also browse the Woo Marketplace at Woo.com.","woocommerce"),{br:e})}}},{referenceElements:{desktop:".woocommerce-marketplace__search"},focusElement:{desktop:".woocommerce-marketplace__search"},meta:{name:"wc-extensions-search",heading:(0,l.__)("Find exactly what you need","woocommerce"),descriptions:{desktop:(0,l.__)("Use the search box to find specific extensions or solutions.","woocommerce")}}},{referenceElements:{desktop:".woocommerce-marketplace__tab-browse"},focusElement:{desktop:".woocommerce-marketplace__tab-browse"},meta:{name:"wc-addons-categories",heading:(0,l.__)("Browse for new ideas","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Or if you're not sure exactly what you need, you can browse all available extensions by category.","woocommerce"),{br:e})}}},{referenceElements:{desktop:".woocommerce-marketplace__discover:first-child"},focusElement:{desktop:".woocommerce-marketplace__discover:first-child"},meta:{name:"wc-addons-featured",heading:(0,l.__)("Learn more about each product","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("Scroll down to see all of the relevant extensions and solutions.<br/><br/>Click on any solution to learn more about its features, any installation requirements, and available documentation.","woocommerce"),{br:e})}}},{referenceElements:{desktop:".woocommerce-marketplace__header-meta"},focusElement:{desktop:".woocommerce-marketplace__header-meta"},meta:{name:"wc-addons-my-subscriptions",heading:(0,l.__)("Manage your purchases","woocommerce"),descriptions:{desktop:(0,o.createInterpolateElement)((0,l.__)("All of your Woo Marketplace purchases can be found here, or on Woo.com.<br/><br/>Every purchase is backed by our <a1>30-day money-back guarantee</a1>, and includes <a2>email and live chat support</a2>.<br/><br/>That's it! You're now ready to power up your store.","woocommerce"),{a1:(0,o.createElement)("a",{href:"https://woo.com/refund-policy/","aria-label":(0,l.__)("Refund policy","woocommerce")},(0,l.__)("30-day money-back guarantee","woocommerce")),a2:(0,o.createElement)("a",{href:"https://woo.com/my-account/create-a-ticket/","aria-label":(0,l.__)("Contact support","woocommerce")},(0,l.__)("email and live chat support","woocommerce")),br:e})}}}]})();if((0,o.useEffect)((()=>{if("true"===new URLSearchParams(location.search).get("tutorial")){var e;const o=((e,o,t)=>{const r=document.querySelector(e);let a=null==r?void 0:r.getBoundingClientRect().top;const c=setInterval((()=>{const e=null==r?void 0:r.getBoundingClientRect().top;a===e&&((()=>{var e,o;const t=null===(e=m[0])||void 0===e||null===(o=e.meta)||void 0===o?void 0:o.name;s(!0),(0,n.recordEvent)("in_app_marketplace_tour_started",{step:t})})(),clearInterval(c)),a=e}),500);return c})((null===(e=m[0].referenceElements)||void 0===e?void 0:e.desktop)||"");return()=>clearInterval(o)}}),[]),(0,o.useEffect)((()=>{if(e){function e(){const e=document.querySelector(".tour-kit-frame__container");e&&c(e.getBoundingClientRect())}const o=setTimeout(e,500),t=((e,o,t)=>{const n=document.querySelector(".woocommerce-marketplace");let r=null==n?void 0:n.offsetTop;return setInterval((()=>{const e=null==n?void 0:n.offsetTop;r!==e&&o(),r=e}),150)})(0,e);return()=>{clearTimeout(o),clearInterval(t)}}}),[e]),!e)return null;const d=(e=>{let{closeHandler:o,onNextStepHandler:t,autoScrollBlock:n,steps:r}=e,a=null,l=null;const s="top-start";return{placement:s,options:{effects:{spotlight:{interactivity:{enabled:!0,rootElementSelector:".woocommerce-marketplace"}},autoScroll:{behavior:"auto",block:n}},popperModifiers:[{name:"offset",options:{offset:[20,20]}},{name:"flip",options:{allowedAutoPlacements:["right","bottom","top"],fallbackPlacements:["bottom-start","right"],flipVariations:!1,boundry:"clippingParents"}},{name:"inAppTourPopperModifications",enabled:!0,phase:"read",fn(e){var o;let{state:t,instance:n}=e;if(l!==t.elements.reference){const e=t.elements.reference.closest("#adminmenu")?"right":s;t.placement!==e&&n.setOptions({placement:e})}const r=t.elements.popper.getBoundingClientRect(),i=null===(o=t.elements.arrow)||void 0===o?void 0:o.getBoundingClientRect(),m=(null==i?void 0:i.height)||0;l!==t.elements.reference&&0!==m&&a!==r.top&&(c(r),a=r.top,l=t.elements.reference)}}],callbacks:{onNextStep:t}},steps:r,closeHandler:o}})({closeHandler:(e,o)=>{s(!1),i({woocommerce_admin_dismissed_in_app_marketplace_tour:"yes"});const t=new URL(window.location.href);if(t.searchParams.delete("tutorial"),window.history.replaceState(null,"",t),m.length-1===o)(0,n.recordEvent)("in_app_marketplace_tour_completed");else{var r,a;const t=null===(r=e[o])||void 0===r||null===(a=r.meta)||void 0===a?void 0:a.name;(0,n.recordEvent)("in_app_marketplace_tour_dismissed",{step:t})}},onNextStepHandler:e=>{var o,t;const r=(null===(o=m[e+1])||void 0===o||null===(t=o.meta)||void 0===t?void 0:t.name)||"";(0,n.recordEvent)("in_app_marketplace_tour_step_viewed",{step:r})},autoScrollBlock:"center",steps:m});return(0,o.createElement)(t.TourKit,{config:d})}),null),document.body.appendChild(s)),(window.wc=window.wc||{}).wcAddonsTour=e})();