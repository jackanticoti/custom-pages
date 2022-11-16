import React from 'react';
import { gql, useQuery } from '@apollo/client';
import DashboardHeader from '../components/DashboardHeader';
import ContentItems from '../components/ContentItems';

const GET_DASHBOARD = gql`
  query DashboardQuery {
    CurrentUser {
      __typename
      asset
      firstName
      lastName
      zipCode
    }
    UserContentItems {
      id
      title
      asset
      description
      availabilityStatus
    }
    UserCertificates {
      id
    }
  }
`;

type Certificate = {
  id: string;
};

import type { GlobalTypes } from '@thoughtindustries/content';
import type { CurrentUser } from '../types';

export default function DashboardLoader() {
  const { loading, error, data } = useQuery<{
    CurrentUser: CurrentUser;
    UserContentItems: GlobalTypes.Content[];
    UserCertificates: Certificate[];
  }>(GET_DASHBOARD);

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <DashboardHeader
        currentUser={data.CurrentUser}
        items={data.UserContentItems}
        hasCertification={data.UserCertificates?.length > 0}
      />
      <div className="relative border-b border-blue-500 ">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <h2 className="py-8 text-3xl leading-7 text-gray-900 sm:truncate">My Courses</h2>
        </div>
      </div>

      <ContentItems items={data.UserContentItems} />
    </>
  );
}
