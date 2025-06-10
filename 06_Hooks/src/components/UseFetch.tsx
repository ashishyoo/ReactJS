import { useFetch } from "../hooks/useFetch";
type Item = {
  id: number;
  title: string;
  images: string[];
};

const UseFetch = () => {
  const [data] = useFetch("https://api.escuelajs.co/api/v1/products");
  //   console.log(data);
  return (
    <div>
      <h1>Custom hook useFetch</h1>
      <h3>Data</h3>
      <ul>
        {data.length > 0 ? (
          data.map((item: Item) => (
            <li key={item.id}>
              {<img src={item.images[0]} height={100} />} {item.title}
            </li>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </ul>
    </div>
  );
};

export default UseFetch;
