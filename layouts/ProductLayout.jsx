import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
const ProductLayout = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ProductsContainer></ProductsContainer> */}
    </QueryClientProvider>
  );
};

export default ProductLayout;
