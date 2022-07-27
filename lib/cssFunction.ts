// Based on the status indicator of the tool, change the animation color
const customCss = function(statusIndicator) {
    if(statusIndicator == "none") {
        return "green"
    }
    else if(statusIndicator == "minor") {
        return "orange"
    }
    else if(statusIndicator == "danger") {
        return "red"
    }
    return "purple"
};

export default customCss;