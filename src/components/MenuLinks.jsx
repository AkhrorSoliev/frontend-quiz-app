import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://json-api.uz/api/project/quizzApp/quizzes");

  console.log(isPending, error);
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                key={item.title}
                to={`/quiz/${item.title}`}
                className="menu-item header-logo"
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt="" />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
