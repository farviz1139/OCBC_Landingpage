import { useState } from "react";

function GeminiChat() {
    const [input, setInput] = useState("");   // User input state
    const [response, setResponse] = useState("");  // API response state
    const [loading, setLoading] = useState(false); // Loading state

    const apiKey = "AIzaSyBQ69OBKWvAxt7Y_cR0ddWl3YUaKUOFWOU"; // Replace with your actual API key

    const fetchResponse = async () => {
        if (!input.trim()) {
            alert("Please enter a message.");
            return;
        }

        setLoading(true);  // Start loading

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const requestBody = {
            contents: [
                {
                    parts: [{ text: input }]
                }
            ]
        };
        
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const data = await res.json();
            setResponse(data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.");
        } catch (error) {
            console.error("Error:", error);
            setResponse("Error fetching response.");
        }

        setLoading(false);  // Stop loading
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Ask Gemini</h1>
            <input
                className="p-2 border rounded w-full"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
            />
            <button
                className="mt-3 p-2 bg-blue-500 text-white rounded"
                onClick={fetchResponse}
                disabled={loading}
            >
                {loading ? "Loading..." : "Ask Gemini"}
            </button>
            <div className="mt-4 p-4 border rounded bg-gray-100">
                <strong>Response:</strong> {response}
            </div>
        </div>
    );
}

export default GeminiChat;
