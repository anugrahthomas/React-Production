import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((meals) => {
        setData(meals.data?.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [index, setIndex] = useState(0);
  const testimonial = [
    { quote: "Hello Science", author: "Anugrah" },
    { quote: "Hello Philosophy", author: "Aungarh" },
    { quote: "Hello Physicology", author: "Anugrah" },
    { quote: "Hello Law", author: "Aungarh" },
    { quote: "Hello Literature", author: "Anugrah" },
    { quote: "Hello Engineering", author: "Aungarh" },
  ];
  const time = 1500;
  const testRef = useRef(null);
  useEffect(() => {
    if (!testRef.current) {
      testRef.current = setInterval(() => {
        setIndex((index) => (index + 1) % testimonial.length);
      }, time);
    }

    return () => {
      clearInterval(testRef.current);
      testRef.current = null;
    };
  }, [testimonial.length]);

  const pauseTimer = () => {
    clearInterval(testRef.current);
    testRef.current = null;
  };
  const resumeTimer = () => {
    if (!testRef.current) {
      testRef.current = setInterval(() => {
        setIndex((index) => (index + 1) % testimonial.length);
      }, time);
    }
  };
  return (
    <div className="p-4 min-h-screen w-screen bg-black text-white flex flex-col items-center">
      <div className="flex items-center gap-10 mb-10">
        <ArrowBigLeft
          onClick={() => {
            pauseTimer();
            setIndex((testimonial.length + index - 1) % testimonial.length);
            console.log(index);
            resumeTimer();
          }}
          className="cursor-pointer"
          size={50}
        />
        <div
          onMouseEnter={pauseTimer}
          onMouseLeave={resumeTimer}
          className="h-40 w-96 border rounded-lg flex flex-col justify-center items-center shadow-md shadow-orange-200 cursor-pointer"
        >
          <p className="text-4xl tracking-wider">{testimonial[index].quote}</p>
          <h3 className="font-semibold">!! {testimonial[index].author} !!</h3>
        </div>
        <ArrowBigRight
          onClick={() => {
            pauseTimer();
            setIndex((index + 1) % testimonial.length);
            resumeTimer();
          }}
          className="cursor-pointer"
          size={50}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        {data.map(({ idMeal, strMeal, strMealThumb }) => {
          return (
            <div key={idMeal} className="flex flex-col gap-2 w-96 border-b-2">
              <div>
                <img
                  className="h-80 w-full object-cover rounded-xl"
                  src={strMealThumb}
                  alt={strMeal}
                />
              </div>
              <div className="flex justify-between gap-10">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
