declare namespace JSX {
  interface AmpAnalytics {
    children: Element;
    type: string;
    'data-credentials': string;
  }

  interface AmpImg {
    src: string;
    alt: string;
    width: string;
    height: string;
    style?: {
      borderRadius: string;
    };
  }

  interface AmpAnimation {
    children: Element;
    id: string;
    layout: string;
  }

  interface AmpPositionObserver {
    on: string;
    layout: string;
  }

  interface AmpAccordion {
    children: JSX.Element | JSX.Element[];
    'disable-session-states': string;
    animate: string;
  }

  interface AmpAutoAds {
    type: string;
    'data-ad-client': string;
  }

  interface IntrinsicElements {
    'amp-analytics': AmpAnalytics;
    'amp-img': AmpImg;
    'amp-animation': AmpAnimation;
    'amp-position-observer': AmpPositionObserver;
    'amp-accordion': AmpAccordion;
    'amp-auto-ads': AmpAutoAds;
  }
}
