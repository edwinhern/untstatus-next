import React from "react";


export default async (req, res) => {
    // Calls the http request (GET Request)
    let apiData = await fetch(`https://status.respondus.com/api/v2/status.json`);
    //  Converts the request to a JSON format
    apiData = await apiData.json();
    
    // Notifies if request is complete
    res.status(200).json({ 
        status: 'OK',
        pageUpdated: apiData["page"].updated_at,
        statusIndicator: apiData.status["indicator"],
        statusDescription: apiData.status["description"],
    });
};