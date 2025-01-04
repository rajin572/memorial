export const imageGenerate = (url) => {
  let formattedUrl = url.replace(/\\/g, "/");

  // Remove "/public" from the URL if it exists
  // formattedUrl = formattedUrl.replace("public", "");
  // console.log(formattedUrl)

  // Add the "http://192.168.10.205:8000/" prefix to the URL

  // Return the URL with the desired format including the double slashes
  return `https://memorial.resid-plus.com/${formattedUrl}`;
};

export const audioUrlGenerate = (url) => {
    if (!url) {
        console.warn("Provided URL is undefined or null");
        return ""; // Return a default value if url is not provided
    }

    console.log("Original URL:", url);
    
    // Normalize the URL by replacing backslashes with forward slashes
    let formattedUrl = url.replace(/\\/g, "/");

    // Remove "/public" from the URL if it exists
    formattedUrl = formattedUrl.replace("public", "");

    // Return the URL with the desired format
    return `https://memorial.resid-plus.com/${formattedUrl}`;
};
