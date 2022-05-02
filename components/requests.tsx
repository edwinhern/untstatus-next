import React from "react";

// function CanvasDataList({canvasStatus}) {
//     console.log(canvasStatus);
//     return (
//         <div className="h-screen-full bg-white text-black">
//             <div>
//                 <h2>{canvasStatus}</h2>
//             </div>
//         </div>
//     )
// }

// const CanvasDataList = props => {
//     console.log(props);
//     if(!props.data) {
//         return <div>Waiting for data...</div>
//     }
//     return <div>dska</div>

// }


// export async function getServerSideProps() {
//     const data = await fetch("https://status.instructure.com/api/v2/status.json")
//     let dataJson = data.json()
//     return {
//         props: {
//             canvasStatus: dataJson,
//         }, // will be passed to page components
//     }
// }

// // export default CanvasDataList