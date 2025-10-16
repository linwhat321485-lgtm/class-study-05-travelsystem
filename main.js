import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.js'
import './node_modules/bootstrap/js/dist/popover.js'
console.log('Hello world');

// //套票資訊
// let data = [
//     {
//       "id": 0,
//       "name": "肥宅心碎賞櫻3日",
//       "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//       "area": "高雄",
//       "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//       "group": 87,
//       "price": 1400,
//       "rate": 10
//     },
//     {
//       "id": 1,
//       "name": "貓空纜車雙程票",
//       "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//       "area": "台北",
//       "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//       "group": 99,
//       "price": 240,
//       "rate": 2
//     },
//     {
//       "id": 2,
//       "name": "台中谷關溫泉會1日",
//       "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//       "area": "台中",
//       "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//       "group": 20,
//       "price": 1765,
//       "rate": 7
//     }
//   ];

//   const tourCard = document.querySelector("#tourCard");
//   let cardContent = "";

//   data.forEach(function(item,index){
//     let content =
//     `<li class="col">
//         <div class="card position-relative">
//             <span class="tourArea badge bg-primary-300 label-md rounded-end-1 position-absolute top-0 start-0 translate-middle-y mt-2">台東</span>
        
//             <img class="tourImg card-img-top" src="../assets/images/traval-card/travel_1.png" alt="">
            
//             <div class="card-body position-relative">
//             <span class="tourRank badge bg-primary-500 fs-6 rounded-end-1 position-absolute top-0 start-0 translate-middle-y">8.6</span>
//             <h2 class="tourName card-title h4 pb-1 border-bottom border-3 border-primary-400">${item.name}</h2>
//             <p class="tourDescri">
//                 嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。
//             </p>
//             </div>
//             <div class="card-footer d-flex justify-content-between align-items-center">
//             <p class="">剩下最後 <span class="tourGroup">8</span> 組</p>
//             <div class="d-flex">
//                 <span class="py-3 me-1">TWD</span>
//                 <span class="tourPrice label-xl ">$1,280</span>
//             </div>
//             </div>
//         </div>
//     </li>
// `
//     cardContent += content;
//   })
//   tourCard.innerHTML = cardContent;

//   const ticketName = document.querySelector("#ticketName");
//   const imgLink = document.querySelector("#imgLink");
//   const areaSelect = document.querySelector("#areaSelect");
//   const ticketCost = document.querySelector("#ticketCost");
//   const ticketNumber = document.querySelector("#ticketNumber");
//   const ticketLv = document.querySelector("#ticketLv");
//   const ticketDescribe = document.querySelector("#ticketDescribe");
//   const formSubmit = document.querySelector("#formSubmit");