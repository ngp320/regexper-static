import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';

import Component from './Component';
import RavenBoundary from 'components/RavenBoundary';

import 'site.css';
import 'i18n';
import setupAnalytics from 'setup/analytics';
import setupRaven from 'setup/raven';

setupRaven();

try {
  setupAnalytics();

  ReactDOM.render(
    <RavenBoundary>
      <Component/>
    </RavenBoundary>,
    document.getElementById('root'));
}
catch (e) {
  Raven.captureException(e);
}
