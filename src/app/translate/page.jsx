"use client";
import translateText from "@/translateText";
import { useState } from "react";


const TranslateComponent = () => {
const [text, setText] = useState("");
const [translatedText, setTranslatedText] = useState("");
const [targetLanguage, setTargetLanguage] = useState("de"); 
// const apiKey = import.meta.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

// const apiKey = process.env.VITE_GOOGLE_TRANSLATE_API_KEY;
console.log("first apiKey",apiKey)
const handleTranslate = async () => {
    if (!text.trim()) return;
    console.log({text})
    console.log({translatedText})
    console.log({targetLanguage})

try {

const translation = await translateText(text, targetLanguage, apiKey);

setTranslatedText(translation);
console.log({translation})
console.log({translatedText})

} catch (error) {

console.error("Error translating text:", error);

setTranslatedText("Translation failed. Please try again");

}

};

return (

<div className="max-w-md mx-auto p-4 mt-8 bg-white shadow-lg rounded-lg">
<h1 className="text-2xl font-bold text-center mb-4">Language Translator</h1><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text to translate" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea><div className="mt-4"><label className="block mb-2 font-medium">Select Target Language:</label><select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} className=" w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
<option value="af">Afrikaans</option>
<option value="sq">Albanian</option>
<option value="am">Amharic</option>
<option value="ar">Arabic</option></select></div><button onClick={handleTranslate} className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition-colors">Translate</button><div className="mt-6"><h2 className="text-xl font-semibold">Translated Text:</h2><p className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded-md">{translatedText || "Your translated text will appear here."}</p></div></div>);};


export default TranslateComponent;

