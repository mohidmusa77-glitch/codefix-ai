// आपकी वेबसाइट का फंक्शन जो बटन क्लिक होने पर चलता है
async function sendCodeToAI(userCode, selectedTask) {
    // यहाँ अपने Netlify Function का असली URL डालें
    const netlifyUrl = "/.netlify/functions/fixCode"; 

    try {
        const response = await fetch(netlifyUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: userCode,       // यूजर का इनपुट कोड
                task: selectedTask    // काम का नाम (जैसे: 'debugging', 'optimization')
            })
        });

        const data = await response.json();
        
        if (data.success) {
            // AI का जवाब आपकी वेबसाइट की स्क्रीन पर दिखाने के लिए
            document.getElementById("output-box").innerText = data.output;
        } else {
            alert("Error: " + data.error);
        }
    } catch (error) {
        console.error("Error connecting to backend:", error);
    }
}
