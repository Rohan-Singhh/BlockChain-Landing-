  // App.js
  import React from 'react';
  import LandingPage from './components/Landingpage';
  import Info from './components/Info';
  import Layout from './components/layout';  // Import Layout
  import Info2 from './components/Info2';
  import Info3 from './components/Info3';
  import Info4 from './components/Info4';
  import Info5 from './components/Info5';
  import Info6 from './components/Info6';
  import Info7 from './components/Info7';

  function App() {
    return (
      <Layout>
        <LandingPage />
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info />
        </div>
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info2 />
        </div>
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info3 />   
        </div>
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info4 />
        </div>
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info5 />   
        </div>
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info6 />
        </div>
        <div className="mt-8"> {/* Add margin-top for spacing */}
          <Info7 />
        </div>
      </Layout>
    );
  }

  export default App;
