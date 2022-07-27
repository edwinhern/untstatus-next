import React from "react";
<<<<<<< HEAD:pages/api/canvasRequest.ts
import customCss from "../../lib/cssFunction";
=======
import customCss from "./cssFunction";
>>>>>>> origin/main:pages/api/turnitinRequest.tsx

// Example Will not use
export default async (req, res) => {
    // Calls the http request (GET Request)
    let apiData = await fetch(`https://status.instructure.com/api/v2/status.json`);
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