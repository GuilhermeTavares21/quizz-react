 "use client"

import { questions } from '@/data/questions'
import { Question } from "@/components/quizz";
import { useState } from 'react';

 const Page = () => {

const answerClick = (id: number, isCorrect: boolean) => {
  if(selectedAnswer === null) {
  setSelectedAnswer(id);
}

}

const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
return(
  <>
  <div className= "w-full h-screen bg-blue-400 flex justify-center items-center text-black">
    <div className= "w-[95%] md:w-[60%] lg:w-[40%] h-auto bg-white rounded-xl shadow-xl shadow-gray-400/90 flex flex-col">
      <p className= "text-center my-4 text-2xl font-bold border-b">Quiz de Javascript</p>
      <p className= "mt-1 mb-3 mx-3 text-lg md:text-2xl font-bold ">1. Qual a forma correta de declarar uma variável?</p>
      {questions.map (item => (
        <Question
        key={item.id}
        answer={item.question}
        isCorrect={item.correct}
        onClick={() => answerClick(item.id, item.correct)}
        className={selectedAnswer === item.id ? (item.correct ? 'bg-green-400/50' : 'bg-red-400/50') : ''}
        />
      ))}
      
      {selectedAnswer !== null ? <div><p onClick={() => setSelectedAnswer(null)} className="text-center mt-3 p-3 font-bold text-3xl cursor-pointer">↻ </p> 
      <p onClick={() => alert('Ainda não implementado')} className="text-center mt-3 p-3 font-bold text-3xl cursor-pointer"> ▶ </p>
      </div>: <p className="text-center">Escolha uma alternativa</p>}
      <p className ="text-center p-6 mt-6 border-t-2">{`1 de 1 perguntas`}</p>
    </div>
  </div>
  </>
)
 }

 export default Page;