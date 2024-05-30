import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const { data, isPending, error } = useFetch("http://localhost:3000/quizzes");
  console.log(data);
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="menu-list">
        {data &&
          data.map((item) => {
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
