import React from 'react';

import Layout from './hoc/Layout/Layout';
import Quiz from '../src/containers/Quiz/Quiz';

const App = () => {
  return (
    <Layout>
      <Quiz />
    </Layout>
  )
}
export default App;