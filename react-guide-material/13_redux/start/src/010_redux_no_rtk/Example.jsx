import Counter from "./components/Counter";
import { CounterProvider } from "./context";


const Example = () => {
  return (
    <Provider store> 
      <Counter />
    </Provider>
  );
};

export default Example;
