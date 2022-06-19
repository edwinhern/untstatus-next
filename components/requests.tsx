import React from "react";

export async function getServerSideProps() {
    let apiData = await fetch(`https://status.instructure.com/api/v2/status.json`)
    apiData = await apiData.json()
    console.log(apiData)
    return {
      props: {data: apiData},
    }
  }

// This component will be the template for formating 
// and styling the data fetched