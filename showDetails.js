function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function displayItemDetails() {
    const qrData = getQueryParam("data");
    if (!qrData) {
        document.getElementById("detailsContainer").innerHTML = "<p class='text-red-500'>No details found!</p>";
        return;
    }

    try {
        const parsedData = JSON.parse(decodeURIComponent(qrData));

        document.getElementById("fullName").innerText = `Name: ${parsedData.fullName || "N/A"}`;
        document.getElementById("phoneNumber").innerText = `Phone: ${parsedData.phoneNumber || "N/A"}`;
        document.getElementById("itemName").innerText = `Item: ${parsedData.itemName || "N/A"} (${parsedData.itemColor || "N/A"})`;
        document.getElementById("markIdentification").innerText = `Mark: ${parsedData.markIdentification || "N/A"}`;
        document.getElementById("timestamp").innerText = `Generated on: ${parsedData.timestamp || "N/A"}`;
    } catch (error) {
        document.getElementById("detailsContainer").innerHTML = "<p class='text-red-500'>Error loading details.</p>";
        console.error("Error parsing QR data:", error);
    }
}

window.onload = displayItemDetails;