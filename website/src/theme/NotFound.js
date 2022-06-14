import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Link from "@docusaurus/core/lib/client/exports/Link";
import useBaseUrl from "@docusaurus/core/lib/client/exports/useBaseUrl";

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page">
                  (╯°□°）╯︵ 404
                </Translate>
              </h1>
              <p style={{fontSize:"large"}}>
                Seems your search engine has not yet indexed our shiny new website.
              </p>
              <Link className="button button--lg button--secondary button--outline"
                    to="https://github.com/nuke-build/nuke/issues/941"
              style={{marginRight:"20px"}}>
                <Translate>Report Broken Link</Translate>
              </Link>
              <Link className="button button--lg button--secondary button--outline" to={useBaseUrl('/search')}>
                <Translate>Use Local Search</Translate>
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
