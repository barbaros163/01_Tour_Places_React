import "./Main.scss";

import { data } from "../../helper/data";

const Main = () => {
  return (
    <div className="card-container">
      <h1>{data[0].title}</h1>
      <h1>{data[1].title}</h1>
      <h1>{data[2].title}</h1>
      <h1>{data[3].title}</h1>
      <h1>{data[4].title}</h1>
    </div>
  );
};

export default Main;
