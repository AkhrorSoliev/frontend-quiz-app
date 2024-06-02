// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

// hooks
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    pending,
    error,
  } = useFetch(
    `https://online-json-server-api.up.railway.app/project/66589e8316aab5687eae3b28/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <div className="quiz-container container">
      {pending && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {quizzes && <Test questions={quizzes.data[0]} />}
    </div>
  );
}

export default Quiz;
