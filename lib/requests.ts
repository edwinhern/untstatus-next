// Contains API requests and converts into JSON
import customCss from "./cssFunction";

export const getCanvasStatus = async () => {
  return await fetch(`https://status.instructure.com/api/v2/status.json`)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return {
        canvasStatus: json["page"].updated_at,
        canvasIndicator: customCss(json.status["indicator"]),
        canvasDescription: json.status["description"],
      };
    })
    .catch(function (error) {
      console.error("There's an error in Canvas GET request: ");
      throw error;
    });
};

export const getRespondusStatus = async () => {
  return await fetch(`https://status.respondus.com/api/v2/status.json`)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return {
        respondusStatus: json["page"].updated_at,
        respondusIndicator: customCss(json.status["indicator"]),
        respondusDescription: json.status["description"],
      };
    })
    .catch(function (error) {
      console.error("There's an error in Canvas GET request: ");
      throw error;
    });
};

export const getTurnitinStatus = async () => {
  return await fetch(`https://turnitin.statuspage.io/api/v2/status.json`)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return {
        turnitinStatus: json["page"].updated_at,
        turnitinIndicator: customCss(json.status["indicator"]),
        turnitinDescription: json.status["description"],
      };
    })
    .catch(function (error) {
      console.error("There's an error in Canvas GET request: ");
      throw error;
    });
};

export const getZoomStatus = async () => {
  return await fetch(`https://status.zoom.us/api/v2/status.json`)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      return {
        zoomStatus: json["page"].updated_at,
        zoomIndicator: customCss(json.status["indicator"]),
        zoomDescription: json.status["description"],
      };
    })
    .catch(function (error) {
      console.error("There's an error in Canvas GET request: ");
      throw error;
    });
};
