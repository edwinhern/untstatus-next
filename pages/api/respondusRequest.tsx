import React from "react";
import customCss from "../api/cssFunction";

export default async (req, res) => {
    // Calls the http request (GET Request)
    let apiData = await fetch(`https://status.respondus.com/api/v2/status.json`);
    //  Converts the request to a JSON format
    apiData = await apiData.json();
    
    // Notifies if request is complete
    res.status(200).json({ 
        status: 'OK',
        pageUpdated: apiData["page"].updated_at,
        statusDescription: apiData.status["description"],
        colorIndicator: customCss(apiData.status["indicator"]),
    });
};