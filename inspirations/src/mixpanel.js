import mixpanel from 'mixpanel-browser';

// The token is hardcoded here to ensure Mixpanel initializes correctly.
const mixpanelToken = "8d58acb93898c6f31a46ec95b9bf38d3";

mixpanel.init(mixpanelToken, {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage'
});

// DO NOT track 'Session Start' here.
// This file runs on app load, before a user session begins.
// This logic belongs in the ActivityTracker component.

export default mixpanel;
