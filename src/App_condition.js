import Cart from "./Cart";

const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>InValid Password</h1>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }

  return <InValidPassword />;
};

function App() {
  return (
    <>
      <Password isValid={true} />
      <Cart />
    </>
  );
}

export default App;
