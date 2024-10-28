type GreetingProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetingProps) => {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      <h2>
        Greet {name} {messageCount}
      </h2>
      <h2>
        {isLoggedIn ? "Welcome To New World" : "Please login to see new world"}
      </h2>
    </div>
  );
};

export default Greet;
