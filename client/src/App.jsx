import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homepage";
import LoginPage from "./scenes/loginpage";
import ProfilePage from "./scenes/profilepage";
import { useMemo } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  // const mode = useSelector((state) => state.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          {" "}
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/profile/:userId" element={<ProfilePage />}></Route>
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
