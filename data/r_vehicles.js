// app/data/vehicles.js
import axios from 'axios';

function getUserAccount() {
    return axios.get('http://localhost:1337/api/pages?populate=Image');
}

export const vehicles = await getUserAccount();
  


// export const vehicles = [
//     {
//         id: 7,
//         documentId: "fdchhoj7v77ejih6fs4w0v1j",
//         Title: "E-Scooter",
//         Description: "An e-scooter or electric kick scooter is an electric motorized scooter – a stand-up scooter powered by an electric hub motor in its front and/or rear wheel. It is generally designed with a large center deck on which the rider stands.\n\nThey are classified as a form of micromobility; e-scooters are included in scooter-sharing systems that use apps to allow users to rent them by the minute. Such systems are now present in major and mid-sized cities all over the world.",
//         Url: "https://en.wikipedia.org/wiki/E-scooter",
//         createdAt: "2025-07-31T06:02:22.588Z",
//         updatedAt: "2025-07-31T06:34:42.517Z",
//         publishedAt: "2025-07-31T06:34:42.526Z",
//         Image: {
//             id: 4,
//             documentId: "yu9fppmc6h09q6hz6ckdocw5",
//             name: "scooter.png",
//             alternativeText: null,
//             caption: null,
//             width: 694,
//             height: 686,
//             formats: {
//                 thumbnail: {
//                     name: "thumbnail_scooter.png",
//                     hash: "thumbnail_scooter_8cb1dfae90",
//                     ext: ".png",
//                     mime: "image/png",
//                     url: "/uploads/thumbnail_scooter_8cb1dfae90.png",
//                     width: 158,
//                     height: 156,
//                 },
//                 small: {
//                     name: "small_scooter.png",
//                     hash: "small_scooter_8cb1dfae90",
//                     ext: ".png",
//                     mime: "image/png",
//                     url: "/uploads/small_scooter_8cb1dfae90.png",
//                     width: 500,
//                     height: 494,
//                 },
//             },
//             hash: "scooter_8cb1dfae90",
//             ext: ".png",
//             mime: "image/png",
//             size: 56.3,
//             url: "/uploads/scooter_8cb1dfae90.png",
//         },
//     },
//     {
//         id: 9,
//         documentId: "ir16fd9e79bfx3ki0x6mmjnt",
//         Title: "Cars",
//         Description: "A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than cargo. There are around one billion cars in use worldwide.",
//         Url: "https://en.wikipedia.org/wiki/Car",
//         createdAt: "2025-07-31T06:01:29.492Z",
//         updatedAt: "2025-07-31T07:04:30.549Z",
//         publishedAt: "2025-07-31T07:04:30.561Z",
//         Image: {
//             id: 2,
//             documentId: "cyaqur66954jts2kg3gbm9yc",
//             name: "cars.png",
//             alternativeText: null,
//             caption: null,
//             width: 1090,
//             height: 628,
//             formats: {
//                 thumbnail: {
//                     name: "thumbnail_cars.png",
//                     hash: "thumbnail_cars_b05b437c5f",
//                     ext: ".png",
//                     mime: "image/png",
//                     url: "/uploads/thumbnail_cars_b05b437c5f.png",
//                     width: 245,
//                     height: 141,
//                 },
//                 small: {
//                     name: "small_cars.png",
//                     hash: "small_cars_b05b437c5f",
//                     ext: ".png",
//                     mime: "image/png",
//                     url: "/uploads/small_cars_b05b437c5f.png",
//                     width: 500,
//                     height: 288,
//                 },
//                 large: {
//                     name: "large_cars.png",
//                     hash: "large_cars_b05b437c5f",
//                     ext: ".png",
//                     mime: "image/png",
//                     url: "/uploads/large_cars_b05b437c5f.png",
//                     width: 1000,
//                     height: 576,
//                 },
//                 medium: {
//                     name: "medium_cars.png",
//                     hash: "medium_cars_b05b437c5f",
//                     ext: ".png",
//                     mime: "image/png",
//                     url: "/uploads/medium_cars_b05b437c5f.png",
//                     width: 750,
//                     height: 432,
//                 },
//             },
//             hash: "cars_b05b437c5f",
//             ext: ".png",
//             mime: "image/png",
//             size: 182.69,
//             url: "/uploads/cars_b05b437c5f.png",
//         },
//     },
// ];