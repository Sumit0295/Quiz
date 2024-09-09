import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Loading from "./Loading";
import '../App.css'

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStartQuiz = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/quiz");
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="banner pb-2">
      <section className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto mt-12 flex flex-col md:flex-row-reverse justify-between items-center" id="rulesContainer">
      {loading && <Loading />}

      <div className="md:w-1/2 w-full">
        <img src="/images/banner.png" alt="banner" className="w-full mx-auto" />
      </div>

      <div className="md:w-1/2 w-full">
      <h1 className="my-8 lg:text-4xl text-3xl md:w-4/6 font-medium text-[#333] lg:leading-normal leading-normal mb-3 slide-in-left">
  Learn new concepts for each question
</h1>
<p className="border-l-4 pl-2 py-2 mb-6 text-gray-500 slide-in-left">
  We help you prepare for exams and quizzes
</p>

        <div className="flex items-center">
          <button
            onClick={handleStartQuiz}
            className={`bg-[#FCC822] px-6 py-2 text-white rounded  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            id="startQuiz"
            type="button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Start Quiz"}
          </button>

          <button
            className="px-6 py-2 know text-[#FCC822] hover:bg-[#FCC822] hover:text-white rounded inline-flex ml-3 transition-all duration-300 border-2 font-bold"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            know more
          </button>
        </div>
      </div>
      </section>
      </div>

      <div className=" p-8 bg-slate-800 pt-10">
      <div className="first">
    <p className="font-bold t1 text-center md:text-3xl fade-in">
      Professional and Dedicated
    </p>
    <p className="font-bold text-white text-center py-2 md:text-2xl md:py-4 fade-in line">
  Consulting Solution
</p>

  </div>
        <div className="sec py-8">
  <div className="flex flex-col md:flex-row md:items-center md:gap-4 container justify-center mx-auto">
    <div className="md:w-1/3 w-full h-32 md:h-48 lg:h-64 border-2 perspective">
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/i5.jpg" alt="banner" className="w-full h-full object-cover" />
            </div>
            <div className="flip-card-back">
              <p className="font-bold">Happiness Depends Upon Ourselves</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="md:w-1/3 w-full h-32 md:h-48 lg:h-64 border-2 perspective">
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/i4.png" alt="banner" className="w-full h-full object-cover" />
            </div>
            <div className="flip-card-back">
              <p>Believe in Yourself</p> {/* Example text */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="md:w-1/3 w-full h-32 md:h-48 lg:h-64 border-2 perspective">
      <div className="flip-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/i3.jpg" alt="banner" className="w-full h-full object-cover" />
            </div>
            <div className="flip-card-back">
              <p>Keep True to The Dreams of thy youth</p> {/* Example text */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    

      </div>
    </>
    

  
  );
};

export default Home;