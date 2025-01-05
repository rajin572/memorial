import React, { useState, useEffect } from 'react';

import translateText from '../../translateText';

const LanguageSelector = ({ SVquestions, currentQuestion, language, setLanguage }) => {

const [translatedQuestion, setTranslatedQuestion] = useState("");

useEffect(() => {

const fetchTranslation = async () => {

const questionText = SVquestions[currentQuestion]?.question_en || "";

const translated = await translateText(

questionText,

language,

import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY

);

setTranslatedQuestion(translated || questionText);

};

fetchTranslation();

}, [currentQuestion, language, SVquestions]);

const handleLanguageChange = (value) => {

localStorage.setItem("language", value);

setLanguage(value);

};

return (

<div>

<select onChange={(e) => handleLanguageChange(e.target.value)}>


</select>


<div>

<p className='text-center mt-8 px-5'>{translatedQuestion}</p>

</div>

</div>

);

};

export default LanguageSelector;