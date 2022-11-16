import React from 'react';
import { useTranslation } from 'react-i18next';
import { gql, useQuery } from '@apollo/client';
import { Appearance, CurrentUser } from '../types';

export default function Layout({
  appearance,
  currentUser,
  children
}: {
  appearance: Appearance;
  currentUser: CurrentUser;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-gray-100">
      <div className="h-full bg-white shadow-sm font-primary">
        {/* <Header appearance={appearance} currentUser={currentUser} /> */}
        {children}
        <Footer />
      </div>
    </div>
  );
}

function Header({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  const { t } = useTranslation();
  const dashboard = t('student-dashboard');
  const signIn = t('login');

  return (
    <div className="flex items-center justify-between px-20 py-6 border-b border-gray-200">
      <div>
        {appearance.logoAsset ? (
          <img src={appearance.logoAsset} className="w-[400px]" />
        ) : (
          <img src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_lfill,h_150/v1494856803/krk0kc4dlidrctj7xddh.png" />
        )}
      </div>
      <div className="text-right">
        {currentUser.id ? <a href="/dashboard">{dashboard}</a> : <a href="/sign_in">{signIn}</a>}
        <ul>
          <NavLink href="/catalog">Courses &amp; Training</NavLink>
          <NavLink href="/">Certifications</NavLink>
          <NavLink href="/" isLast>
            About
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

function NavLink({
  href,
  children,
  isLast
}: {
  href: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  const classes = 'inline-block' + (isLast ? ' p-8 pr-0' : ' p-8');

  return (
    <li className={classes}>
      <a href={href} className="font-semibold text-blue-400">
        {children}
      </a>
    </li>
  );
}

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' }
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ]
};

const query = gql`
  query CompanyDetailsQuery {
    CompanyDetails {
      __typename
      name
    }
  }
`;

function Footer() {
  const { t } = useTranslation();
  const { data } = useQuery(query);
  const poweredBy = t('powered-by');

  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Solutions
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Support
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.support.map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map(item => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 mt-12 border-t border-gray-200">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; {new Date().getFullYear()}{' '}
          {data?.CompanyDetails ? data.CompanyDetails.name : 'No Name'}
          <span className="inline-block pl-4 ml-4 text-sm border-l border-gray-200">
            {poweredBy}{' '}
            <a href="https://www.thoughtindustries.com/" target="_blank" rel="noreferrer">
              Thought Industries
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
