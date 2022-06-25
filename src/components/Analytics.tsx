type TrackingId = string;

interface AnalyticsSetData {
  vars: {
    gtag_id: string;
    config?: {
      // A dynamic key will be inserted here
      trackingIdKey?: {
        groups: string;
      };
      [key: TrackingId]: {
        groups: string;
      };
    };
  };
}

const Analytics: React.FC<{ trackingId: string }> = ({
  trackingId,
}): JSX.Element => {
  const data: AnalyticsSetData = {
    vars: {
      gtag_id: trackingId,
      config: {},
    },
  };

  data.vars.config[trackingId] = { groups: 'default' };

  const json: string = JSON.stringify(data);

  return (
    <amp-analytics type="gtag" data-credentials="include">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
    </amp-analytics>
  );
};

export default Analytics;
