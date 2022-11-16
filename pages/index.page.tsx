import React from 'react';
import { useTranslation } from 'react-i18next'; 
import Layout from '../components/Layout';
import OurHero from '../components/OurHero';
import Stats from '../components/Stats';
import {
  FeaturedContent,
  ContentTileStandardLayout,
  FeaturedContentContentItem
} from '@thoughtindustries/featured-content';
import OurFeaturedContent from '../components/OurFeaturedContent';
import {
  hydrateContent,
  useCatalogQuery,
  useAddResourceToQueueMutation
} from '@thoughtindustries/content';
import { Appearance, CurrentUser } from '../types';
import Testimonial from '../components/Testimonial';
import NewsletterSignup from '../components/NewsletterSignup';
import { Hero } from '@thoughtindustries/hero';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page({ appearance, currentUser }: { appearance: Appearance; currentUser: CurrentUser }) {
  return (
    <Layout appearance={appearance} currentUser={currentUser}>
      <div>
        <OurHero />
        <Stats />
        <FeaturedItems />
        <Testimonial />
        <NewsletterSignup />
      </div>
    </Layout>
  );
}

function FeaturedItems() {
  const { i18n } = useTranslation();
  const [addResourceToQueue] = useAddResourceToQueueMutation();
  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<boolean | void> => {
    if ('displayCourse' in item && item.displayCourse) {
      return addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then();
    }

    return Promise.resolve();
  };

  const { data, loading, error } = useCatalogQuery({
    variables: {
      query: 'becoming a master'
    }
  });

  if (loading || !data) {
    return <p>Loading content</p>;
  }
  if (error) {
    return <p>Error loading content</p>;
  }

  const contentItems = (data.CatalogQuery.contentItems || [])
    .slice(0, 6)
    .map(item => hydrateContent(i18n, item));

  return (
    <div className="grid gap-5 px-10 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
      {contentItems.map((contentItem, index) => (
        <OurFeaturedContent key={`item-${index}`} contentItem={contentItem} />
      ))}
    </div>
  );

  return (
    <div className="px-4">
      <FeaturedContent>
        <ContentTileStandardLayout
          desktopColumnCount={3}
          headerOptions={{
            title: 'Training and Certifications that Develop Your Skillsets and Fuel Your Success'
          }}
          onAddedToQueue={handleAddedToQueue}>
          {contentItems.map((item, index) => (
            <ContentTileStandardLayout.Item key={`item-${index}`} {...item} />
          ))}
        </ContentTileStandardLayout>
      </FeaturedContent>
      <p>&nbsp;</p>
    </div>
  );
}
