import errorIcon from './assets/error.svg';
import successIcon from './assets/success.svg';
import loadingIcon from './assets/loading.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { status } from './services/api';

function App() {
  const [httpOk, setHttpOk] = useState(false);
  const [databaseOk, setDatabaseOk] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      setLoading(true);

      try {
        const response = await status();
        setHttpOk(response.data.http === 'ok');
        setDatabaseOk(response.data.database === 'ok');
      } catch (e) {
        console.error(e);

        setHttpOk(false);
        setDatabaseOk(false);
      } finally {
        setLoading(false);
      }
    };

    request();
  }, []);

  const renderSuccess = () => {
    return <img src={successIcon} className="icon success" alt="success" />;
  };

  const renderError = () => {
    return <img src={errorIcon} className="icon error" alt="error" />;
  };

  const renderLoading = () => {
    return <img src={loadingIcon} className="icon loading" alt="loading" />;
  };

  return (
    <div className="app">
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>HTTP Status</td>
              <td>{loading ? renderLoading() : httpOk ? renderSuccess() : renderError()}</td>
            </tr>
            <tr>
              <td>Database Status</td>
              <td>{loading ? renderLoading() : databaseOk ? renderSuccess() : renderError()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
