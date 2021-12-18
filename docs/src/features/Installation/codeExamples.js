export const installationCommand = `
-- Using NPM --
npm install friendly-components
-- Using Yarn --
yarn add friendly-components`;

export const addingThemeProvider = `
import { ThemeProvider } from "friendly-components";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        // app content
      </div>
    </ThemeProvider>
  );
}

export default App;

`;
