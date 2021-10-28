
import './App.css';
import Header from './components/Header/Header';
import useForecast from './useForecast';
import Forecast from './components/Forecast/Forecast';
import Loader from './components/Loader/Loader';
import BienveunMessage from './components/BienveunMessage/BienveunMessage';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

function App() {

  const {submitRequest,forecast,isError,isLoading} = useForecast();

  return (
    <div className="App">

      <Header submitRequest={submitRequest} />
      <div className="content-app">
        <span></span> {/* empty span */}
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
        <Footer/>
      </div>
    </div>
  );
}

export default App;
