import React, { useEffect, useState } from "react";
import GetServerSideProps from 'next'
import axios from "axios";

// const canvasEndpoint = 'https://status.instructure.com/api/v2/status.json'

// // type apiData = {
// //     page: {
// //         id: string;
// //         updated_at: string;
// //     }
// //     status: {
// //         indicator: string;
// //         description: string;
// //     }
// // }

// // export default function SSRPage({ dateTime }: SSRPageProps) {
// //     return (
// //       <main>
// //         <h2 className="text-white">{dateTime}</h2>
// //       </main>
// //     );
// //   }

// // export const getServerSideProps: GetServerSideProps = async () => {
// //     const res = await fetch('https://worldtimeapi.org/api/ip')
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log(data)
// //       })
// //     return {
// //         props: {dateTime: res.data.datetime}
// //     }
// // }


// const Server = () => {
//     const [showData, setShowData] = useState()
//     const apiUrl = 'https://status.instructure.com/api/v2/status.json'
//     let displayData

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(res => {
//             displayData = [res].map(function(data:any) {
//                console.log(data)
//                 return( 
//                 data
//                )
//             })
//         })
//     return 
//     function pullJson(){
//         fetch(test)
//         .then(response => response.json())
//         .then(res => {
//             displayData = [res.page.id].map(function(data:any) {
//                 console.log(data)
//                 return (
//                     <>
//                         <div className="text-4xl text-white bg-red-300">
//                             {data}
//                         </div>
//                     </>
//                 );
//             })
//             // console.log(res)
//         })
//     }
//     useEffect(() => {
//         pullJson()
//     })

// }

// export default Server

