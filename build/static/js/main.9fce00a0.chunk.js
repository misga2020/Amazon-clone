(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(46),l=a.n(c),i=(a(59),a(47)),o=a(7),s=a(11),m=a(8),u=(a(60),a(48)),d=a.n(u),p=a(49),E=a.n(p),h=Object(n.createContext)(),g=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(h.Provider,{value:Object(n.useReducer)(t,a)},c)},v=function(){return Object(n.useContext)(h)},f=a(33),b=f.a.initializeApp({apiKey:"AIzaSyAbNtGnABAFYFhWTpT2Tn0X7q4VqfiQ_jo",authDomain:"agust2020.firebaseapp.com",databaseURL:"https://agust2020.firebaseio.com",projectId:"agust2020",storageBucket:"agust2020.appspot.com",messagingSenderId:"1041207617353",appId:"1:1041207617353:web:76f28056e7897a359fdc98",measurementId:"G-E5ET6H0W3G"}).firestore(),_=f.a.auth();var N=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("nav",{className:"header"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"header-logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:""})),r.a.createElement("div",{className:"header_search"},r.a.createElement("input",{type:"text",className:"header_searchInput"}),r.a.createElement(d.a,{className:"header_searchIcon"})),r.a.createElement("div",{className:"header-nav"},r.a.createElement(s.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(){c&&_.signOut()},className:"header_option"},r.a.createElement("span",{className:"header_optionLineOne"},"Hello ",c?c.email:"Guest"),r.a.createElement("span",{className:"header_optionLineTwo"},c?"Sign Out":"Sign In"))),r.a.createElement(s.b,{to:"/orders"},r.a.createElement("div",{className:"header_option"},r.a.createElement("span",{className:"header_optionLineOne"},"Returns"),r.a.createElement("span",{className:"header_optionLineTwo"},"&Orders"))),r.a.createElement(s.b,{to:"/checkout"},r.a.createElement("div",{className:"header_option"},r.a.createElement("span",{className:"header_optionLineOne"},"Yours"),r.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),r.a.createElement(s.b,{to:"/checkout",className:"header_link"},r.a.createElement("div",{className:"header_optionBasket"},r.a.createElement(E.a,null),r.a.createElement("span",{className:"header_optionLineTwo header_basketCount"},n.length)))))};a(70);var k=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,i=v(),s=Object(o.a)(i,2),m=(s[0].basket,s[1]);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product_info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product_price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product_rating"},Array(l).fill().map((function(e){return r.a.createElement("p",null,"*")})))),r.a.createElement("img",{src:n,alt:""}),r.a.createElement("button",{onClick:function(){m({type:"Add to basket",item:{id:t,title:a,price:c,image:n,rating:l}})}},"Add to basket"))};a(71);var S=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),r.a.createElement("div",{className:"home_row"},r.a.createElement(k,{id:"12321341",title:"The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"}),r.a.createElement(k,{id:"4569895",title:"PHISINIC Stand Mixer, 6.5-QT 800W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Power Hub for Attachment (Red)",price:199,rating:3,image:"https://m.media-amazon.com/images/I/71PcRhHJaSL._AC_UL640_FMwebp_QL65_.jpg"})),r.a.createElement("div",{className:"home_row"},r.a.createElement(k,{id:"42175690",title:"Echo Dot (3rd Gen) - Smart speaker with Alexa - Heather Gra",price:39,rating:4,image:"https://m.media-amazon.com/images/I/61V25P7mlyL._AC_UY436_FMwebp_QL65_.jpg"}),r.a.createElement(k,{id:"98456720",title:"New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Model, 8th Generation) ",price:399,rating:5,image:"https://m.media-amazon.com/images/I/71GsWDM8sPL._AC_UY436_FMwebp_QL65_.jpg"}),r.a.createElement(k,{id:"562143",title:"Roll over image to zoom in Samsung Galaxy Watch Active (40mm, GPS, Bluetooth) Smart Watch with Fitness Tracking, and Sleep Analysis - Rose Gold  (US Version)",price:199,rating:4,image:"https://m.media-amazon.com/images/I/61n1c2vnPJL._AC_UY436_FMwebp_QL65_.jpg"})),r.a.createElement("div",{className:"home_row"},r.a.createElement(k,{id:"735626893",title:"SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)",price:497,rating:4,image:"https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY436_FMwebp_QL65_.jpg"})))};a(72);var y=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,i=e.hideButton,s=v(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct_image",src:n,alt:""}),r.a.createElement("div",{className:"checkoutProduct_info"},r.a.createElement("p",{className:"checkoutProduct_title"},a),r.a.createElement("p",{className:"checkoutProduct_price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkoutProduct_rating"},Array(l).fill().map((function(e){return r.a.createElement("p",null,"*")}))),!i&&r.a.createElement("button",{onClick:function(){u({type:"Remove from basket",id:t,title:a,image:n,price:c,rating:l})}}," Remove from basket")))},O=(a(73),a(22)),j=a.n(O),A=a(34),w=a(19),C=function(e){return e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log(t),t.type){case"Add to basket":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[]});case"Remove from basket":var a=Object(A.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?a.splice(n,1):console.warn("cant remove product (id: ".concat(t.id,") as its no in basket")),Object(w.a)(Object(w.a)({},e),{},{basket:a});case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:t.user});default:return e}};var x=function(){var e=Object(m.f)(),t=v(),a=Object(o.a)(t,2),n=a[0].basket;return a[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal (",n.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal_gift"},r.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:C(n),displayType:"text",thousandsSeparator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(t){return e.push("./payment")}},"Proceed to Checkout"))};a(75);var P=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout_left"},r.a.createElement("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg",alt:""}),0===(null===n||void 0===n?void 0:n.length)?r.a.createElement("div",null,r.a.createElement("h2",null,"You Shoping Basket is empty"),r.a.createElement("p",null,'You have no items in your basket. To buy one or more click "Add to basket" next to the item.')):r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",null===c||void 0===c?void 0:c.email),r.a.createElement("h2",{className:"checkout_title"},"Your Shopping Basket"),n.map((function(e){return r.a.createElement(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"checkout_right"},r.a.createElement(x,null)))};a(76);var B=function(){var e=Object(m.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),d=u[0],p=u[1];return r.a.createElement("div",{className:"login"},r.a.createElement(s.b,{to:"/"},r.a.createElement("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),r.a.createElement("div",{className:"login_container"},r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:d,onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(c,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton"},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to The AMAZON FAKE CLONE Conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),r.a.createElement("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(c,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton"},"Create Amazon Account")))},I=a(24),L=a.n(I),M=a(32),G=(a(78),a(21)),U=a(50),R=a.n(U).a.create({baseURL:"https://us-central1-clone-b9d4c.cloudfunctions.net/api"});var z=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],c=a.basket,l=a.user,i=t[1],u=Object(m.f)(),d=Object(G.useStripe)(),p=Object(G.useElements)(),E=Object(n.useState)(!1),h=Object(o.a)(E,2),g=h[0],f=h[1],_=Object(n.useState)(""),N=Object(o.a)(_,2),k=N[0],S=N[1],O=Object(n.useState)(null),A=Object(o.a)(O,2),w=A[0],T=A[1],x=Object(n.useState)(!0),P=Object(o.a)(x,2),B=P[0],I=P[1],U=Object(n.useState)(!0),z=Object(o.a)(U,2),Y=z[0],H=z[1];Object(n.useEffect)((function(){(function(){var e=Object(M.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"post",url:"/payments/create?total=".concat(100*C(c))});case 2:t=e.sent,H(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("The secret is >>>",Y);var D=function(){var e=Object(M.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.prevntDefault(),S(!0),e.next=4,d.confirmCardPayment(Y,{payment_method:{card:p.getElement(G.CardElement)}}).then((function(e){var t=e.paymentIntent;b.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:c,amount:t.amount,created:t.created}),f(!0),T(null),S(!1),i({type:"EMPTY_BASKET"}),u.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment_container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(s.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items"),")"),r.a.createElement("div",{className:"payment_section"},r.a.createElement("div",{className:"payment_title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment_address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"123 React lane"),r.a.createElement("p",null,"Chicago, IL"))),r.a.createElement("div",{className:"payment_section"},r.a.createElement("div",{className:"payment_title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment_items"},c.map((function(e){return r.a.createElement(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment_section"},r.a.createElement("div",{className:"payment_title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment_details"},r.a.createElement("form",{onSubmit:D},r.a.createElement(G.CardElement,{onChange:function(e){I(e.empty),T(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment_priceContainer"},r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",null,"order Total: ",e)},decimalScale:2,value:C(c),displayType:"text",thousandsSeparator:!0,prefix:"$"}),r.a.createElement("button",{disabled:k||B||g},r.a.createElement("span",null,k?r.a.createElement("p",null,"Processing"):"Buy Now"))),w&&r.a.createElement("div",null,w))))))},Y=(a(95),a(51)),H=a.n(Y);a(97);var D=function(e){var t,a=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,H.a.unix(a.data.created).format("MMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order_id"},r.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return r.a.createElement(y,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(j.a,{renderText:function(e){return r.a.createElement("h3",{className:"order_total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var F=function(){var e=v(),t=Object(o.a)(e,2),a=t[0],c=(a.basket,a.user),l=(t[1],Object(n.useState)([])),i=Object(o.a)(l,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){c?b.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created, desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Your Orders"),r.a.createElement("div",{className:"orders_order"},null===s||void 0===s?void 0:s.map((function(e){return r.a.createElement(D,{order:e})}))))},W=(a(98),a(52)),Q=Object(W.a)("pk_test_51HiZGVLq8z5x1xnGKBtHm8BnWKLB6MVtJvWbMPquQffccmQ7GGYCYu2MET9hipux5ra4hBhNAvNgrAuyFmX29ooc00SpyRlgPD");var K=function(){var e=v(),t=Object(o.a)(e,2);Object(i.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("THE USER IS >>>",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/orders"},r.a.createElement(N,null),r.a.createElement(F,null)),r.a.createElement(m.a,{path:"/login"},r.a.createElement(B,null)),r.a.createElement(m.a,{path:"/checkout"},r.a.createElement(N,null),r.a.createElement(P,null)),r.a.createElement(m.a,{path:"/payment"},r.a.createElement(N,null),r.a.createElement(G.Elements,{stripe:Q},r.a.createElement(z,null))),r.a.createElement(m.a,{path:"/"},r.a.createElement(N,null),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{initialState:{basket:[],user:null},reducer:T},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a(100)},59:function(e,t,a){},60:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.9fce00a0.chunk.js.map