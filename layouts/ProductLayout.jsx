import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
const ProductLayout = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ProductLayout;
