import type { AppType } from "next/app";
import App from "next/app";

type MyInitialProps = {
  foo: string;
};

const MyApp: AppType<MyInitialProps> = (props) => {
  return (
    <div>
      <props.Component {...props.pageProps} />
      <hr />
      <p>{`props.foo: ${props.foo}`}</p>
      <p>{`props.pageProps.foo: ${props.pageProps.foo}`}</p>
    </div>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const props = await App.getInitialProps(ctx); // <--another separate issue
  return {
    ...props,
    foo: "bar" // TS complains MyApp type is wrong if this line is excluded
  };
};

export default MyApp;
