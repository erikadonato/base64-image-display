// Base64 encoded data
var encodedData = '';

// Decode the base64 data
var decodedData = atob(encodedData);

// Convert the decoded data to a Uint8Array
var uint8Array = new Uint8Array(decodedData.length);
for (var i = 0; i < decodedData.length; i++) {
  uint8Array[i] = decodedData.charCodeAt(i);
}

// Create a blob from the Uint8Array
var blob = new Blob([uint8Array], { type: 'image/png' });

// Create an object URL from the blob
var objectURL = URL.createObjectURL(blob);

// Create an image element and set its source to the object URL
var img = document.createElement('img');
img.src = objectURL;

// Append the image to the image container
document.getElementById('imageContainer').appendChild(img);
