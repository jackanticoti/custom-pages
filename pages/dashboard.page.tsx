import React from 'react';
import Layout from '../components/Layout';
import { Appearance, CurrentUser } from '../types';
import Dashboard from '../components/Dashboard';

export { Page };
export { documentProps }; 

const documentProps = {
  title: 'Dashboard',
  description: 'The Dashboard'
};

function Page({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  return (
    <Layout appearance={appearance} currentUser={currentUser}>
      <div>
        <Dashboard />
      </div>
    </Layout>
  );
}
