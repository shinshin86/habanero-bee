const PageTopButton = (): JSX.Element => {
  const showAnimJson: string = JSON.stringify({
    duration: '200ms',
    fill: 'both',
    iterations: '1',
    direction: 'alternate',
    animations: [
      {
        selector: '#scrollToTopButton',
        keyframes: [
          {
            opacity: '1',
            visibility: 'visible',
          },
        ],
      },
    ],
  });

  const hdieAnimJson: string = JSON.stringify({
    duration: '200ms',
    fill: 'both',
    iterations: '1',
    direction: 'alternate',
    animations: [
      {
        selector: '#scrollToTopButton',
        keyframes: [
          {
            opacity: '0',
            visibility: 'hidden',
          },
        ],
      },
    ],
  });

  return (
    <>
      <amp-animation id="showAnim" layout="nodisplay">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: showAnimJson }}
        ></script>
      </amp-animation>
      <amp-animation id="hideAnim" layout="nodisplay">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: hdieAnimJson }}
        />
      </amp-animation>
      <button
        id="scrollToTopButton"
        // @ts-ignore
        on="tap:top.scrollTo(duration=200)"
        className="scrollToTop"
      >
        ⌃
      </button>
    </>
  );
};

export default PageTopButton;
