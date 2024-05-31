// react router dom import
import { useParams } from "react-router-dom";

// components
import Test from "../components/Test";

// hooks
import { useFetch } from "../hooks/useFetch";

function Quiz() {
  const { title } = useParams();
  const { data, pending, error } = useFetch(
    `http://localhost:3000/quizzes?title=${title}`
  );

  return (
    <div className="quiz-container container">
      {pending && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data && <Test questions={data[0]} />}
    </div>
  );
}

export default Quiz;
