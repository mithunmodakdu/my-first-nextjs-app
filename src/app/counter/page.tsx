import Counter from "@/src/components/Counter";

const CounterPage = () => {
  console.log("CounterPage")
  return (
    <div className="w-2xl mx-auto mt-20">
      <h1 className="5xl">CounterPage</h1>
      <Counter/>
    </div>
  );
};

export default CounterPage;
