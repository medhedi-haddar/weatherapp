
import useForecast from './useForecast';
import Forecast from './components/Forecast/Forecast';
import Header from './components/Header/Header';
import BienveunMessage from './components/BienveunMessage/BienveunMessage';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import { GlobalStyles, lightTheme, darkTheme } from './components/Theme/Styles/GlobalStyles';
import { ToggleTheme } from './components/Theme/ToggleTheme';
import { useDarkMode } from './components/Theme/Styles/useDarkMode';
import { ThemeProvider } from 'styled-components';
import { Container } from 'react-bootstrap';

function App() {

  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const {submitRequest,forecast,isError,isLoading} = useForecast();

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <div className="App">
        <Header submitRequest={submitRequest} />
          
        <div className="content-app">
        
          <Container className="content-forecast pt-5 pb-5">
            <div style={{position : 'relative'}}>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
            </div>
            {!forecast && (
                  <div>
                    {!isLoading && !isError && <BienveunMessage/>}
                    {isError && <Error/> }
                    {isLoading && <Loader/> }
                  </div>
              )
            }
            { forecast && (
              <>
              {!isLoading && !isError && forecast && 
                <> <Forecast forecast={forecast}/> </>
              }
              { (isLoading || isError) &&
                  <>
                      {isError && <Error/> }
                      {isLoading && <Loader/> }
                  </>
              }
              </>
            )}
          </Container>
          
          <Footer/>
        </div>
      </div>
      </ThemeProvider>
  );
}

export default App;
