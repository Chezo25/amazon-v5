import withAxios from "react-axios/lib/components/withAxios";

const instance = withAxios.create({
  baseUrl: "...",
});

export default instance;
