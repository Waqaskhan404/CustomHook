import useFetch from "./assets/components/CustomHook/useFetch";
import useRef from "./assets/components/CustomHook/useRef"
function App() {
  const url="https://fakestoreapi.com/products";

  const [users]=useRef();
  const [data]=useFetch(url);
  return (
    <>
    <ul>
    {
      users.map((item)=>{
        return (
          <li key={item.id}>{item.title}</li>
        )
      })
      
    }
    </ul>
    </>
  )
}

export default App
