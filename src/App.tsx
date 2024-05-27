import "./App.css";
import { QueryClient, QueryClientProvider } from "reactjrx";
import { ChakraProvider } from "@chakra-ui/react";
import { Board } from "./board/posts/Board";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <Board />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
