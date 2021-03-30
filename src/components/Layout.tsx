/* @ts-ignore  */
/* eslint-disable @typescript-eslint/no-explicit-any */
const Layout: React.FC<{
  children: any;
  backgroundColorCode: string;
  pageTopButtonColorCode: string;
}> = ({
  children,
  backgroundColorCode,
  pageTopButtonColorCode,
}): JSX.Element => {
  return (
    <>
      {children}
      <style jsx global>{`
        /*
          Identity by HTML5 UP
          html5up.net | @ajlkn
          Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
        */

        /* Icon (alt) */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }

        body {
          line-height: 1;
        }

        ol,
        ul {
          list-style: none;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        body {
          -webkit-text-size-adjust: none;
        }

        mark {
          background-color: transparent;
          color: inherit;
        }

        input::-moz-focus-inner {
          border: 0;
          padding: 0;
        }

        input,
        select,
        textarea {
          -moz-appearance: none;
          -webkit-appearance: none;
          -ms-appearance: none;
          appearance: none;
        }

        /* Basic */

        @media screen and (max-width: 480px) {
          html,
          body {
            min-width: 320px;
          }
        }

        html {
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html {
          height: 100%;
        }

        body {
          height: 100%;
          background-color: ${backgroundColorCode || '#202338'};
          background-repeat: repeat, no-repeat, no-repeat;
          background-size: 100px 100px, cover, cover;
          background-position: top left, center center, bottom center;
          background-attachment: fixed, fixed, fixed;
        }

        /* Type */

        body,
        input,
        select,
        textarea {
          color: #414f57;
          font-family: 'Source Sans Pro', Helvetica, sans-serif;
          font-size: 14pt;
          font-weight: 300;
          line-height: 2;
          letter-spacing: 0.2em;
        }

        @media screen and (max-width: 1680px) {
          body,
          input,
          select,
          textarea {
            font-size: 11pt;
          }
        }

        @media screen and (max-width: 480px) {
          body,
          input,
          select,
          textarea {
            font-size: 10pt;
            line-height: 1.75;
          }
        }

        a {
          -moz-transition: color 0.2s ease, border-color 0.2s ease;
          -webkit-transition: color 0.2s ease, border-color 0.2s ease;
          -ms-transition: color 0.2s ease, border-color 0.2s ease;
          transition: color 0.2s ease, border-color 0.2s ease;
          color: inherit;
          text-decoration: none;
        }

        p a {
          color: #0814a9;
          text-decoration: underline;
        }

        a:before {
          -moz-transition: color 0.2s ease, text-shadow 0.2s ease;
          -webkit-transition: color 0.2s ease, text-shadow 0.2s ease;
          -ms-transition: color 0.2s ease, text-shadow 0.2s ease;
          transition: color 0.2s ease, text-shadow 0.2s ease;
        }

        a:hover {
          color: #ff7496;
        }

        strong,
        b {
          font-weight: bold;
          color: #191919;
        }

        em,
        i {
          font-style: italic;
        }

        p {
          margin: 0 0 1.5em 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #313f47;
          line-height: 1.5;
          margin: 0.75em 0;
        }

        h1 a,
        h2 a,
        h3 a,
        h4 a,
        h5 a,
        h6 a {
          color: inherit;
          text-decoration: none;
        }

        h1 {
          font-size: 2.5em;
          letter-spacing: 0.22em;
          margin: 0 0 0.525em 0;
        }

        h2 {
          font-size: 2em;
          margin-top: 8px;
        }

        h3 {
          font-size: 1.5em;
        }

        h4 {
          font-size: 1em;
        }

        h5 {
          font-size: 1em;
        }

        h6 {
          font-size: 1em;
        }

        @media screen and (max-width: 480px) {
          h1 {
            font-size: 1.65em;
          }
        }

        sub {
          font-size: 0.8em;
          position: relative;
          top: 0.5em;
        }

        sup {
          font-size: 0.8em;
          position: relative;
          top: -0.5em;
        }

        hr {
          border: 0;
          border-bottom: solid 1px #c8cccf;
          margin: 3em 0;
        }

        /* Icon */

        .icon {
          text-decoration: none;
          position: relative;
          border-bottom: none;
        }

        .icon:before {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          font-family: 'Font Awesome 5 Free';
          font-weight: 400;
        }

        .icon > .label {
          display: none;
        }

        .icon:before {
          line-height: inherit;
        }

        .icon.solid:before {
          font-weight: 900;
        }

        .icon.brands:before {
          font-family: 'Font Awesome 5 Brands';
        }

        /* Icons */

        ul.icons {
          cursor: default;
          list-style: none;
          padding-left: 0;
          margin-top: -0.675em;
        }

        ul.icons li {
          display: inline-block;
          padding: 0.675em 0.5em;
        }

        ul.icons li a {
          text-decoration: none;
          position: relative;
          display: block;
          width: 3.75em;
          height: 3.75em;
          border-radius: 100%;
          border: solid 1px #c8cccf;
          line-height: 3.75em;
          overflow: hidden;
          text-align: center;
          text-indent: 3.75em;
          white-space: nowrap;
        }

        ul.icons li a:before {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          font-family: 'Font Awesome 5 Free';
          font-weight: 400;
        }

        ul.icons li a:before {
          color: #ffffff;
          text-shadow: 1.25px 0px 0px #c8cccf, -1.25px 0px 0px #c8cccf,
            0px 1.25px 0px #c8cccf, 0px -1.25px 0px #c8cccf;
        }

        ul.icons li a:hover:before {
          text-shadow: 1.25px 0px 0px #ff7496, -1.25px 0px 0px #ff7496,
            0px 1.25px 0px #ff7496, 0px -1.25px 0px #ff7496;
        }

        ul.icons li a:before {
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          font-size: 1.85rem;
          line-height: inherit;
          text-align: center;
          text-indent: 0;
        }

        ul.icons li a:hover {
          border-color: #ff7496;
        }

        @media screen and (max-width: 480px) {
          ul.icons li a:before {
            font-size: 1.5rem;
          }
        }

        /* Main */

        #main {
          -moz-transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%;
          -ms-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          -moz-transform: rotateX(0deg);
          -webkit-transform: rotateX(0deg);
          -ms-transform: rotateX(0deg);
          transform: rotateX(0deg);
          -moz-transition: opacity 1s ease, -moz-transform 1s ease;
          -webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
          -ms-transition: opacity 1s ease, -ms-transform 1s ease;
          transition: opacity 1s ease, transform 1s ease;
          padding: 4.5em 2em 3em;
          background: #ffffff;
          border-radius: 4px;
          cursor: default;
          max-width: 100%;
          opacity: 0.95;
          position: relative;
          text-align: center;
          width: 27em;
        }

        #main .avatar {
          position: relative;
          display: block;
          margin-bottom: 1.5em;
        }

        #main .avatar img {
          display: block;
          margin: 0 auto;
          border-radius: 100%;
          box-shadow: 0 0 0 1.5em #ffffff;
        }

        #main .avatar:before {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: -2em;
          width: calc(100% + 4em);
          height: 1px;
          z-index: -1;
          background: #c8cccf;
        }

        @media screen and (max-width: 480px) {
          #main {
            padding: 4em 2em 2.5em 2em;
            width: 100%;
          }

          #main .avatar:before {
            left: -2em;
            width: calc(100% + 4em);
          }
        }

        /* Footer */

        #footer {
          -moz-align-self: -moz-flex-end;
          -webkit-align-self: -webkit-flex-end;
          -ms-align-self: -ms-flex-end;
          align-self: flex-end;
          width: 100%;
          padding: 1.5em 0 0 0;
          color: rgba(255, 255, 255, 0.75);
          cursor: default;
          text-align: center;
        }

        #footer .copyright {
          margin: 0;
          padding: 0;
          font-size: 0.9em;
          list-style: none;
        }

        #footer .copyright li {
          display: inline-block;
          margin: 0 0 0 0.45em;
          padding: 0 0 0 0.85em;
          border-left: solid 1px rgba(255, 255, 255, 0.5);
          line-height: 1;
        }

        #footer .copyright li:first-child {
          border-left: 0;
        }

        /* Wrapper */

        #wrapper {
          display: -moz-flex;
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          -moz-align-items: center;
          -webkit-align-items: center;
          -ms-align-items: center;
          align-items: center;
          -moz-justify-content: space-between;
          -webkit-justify-content: space-between;
          -ms-justify-content: space-between;
          justify-content: space-between;
          -moz-flex-direction: column;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -moz-perspective: 1000px;
          -webkit-perspective: 1000px;
          -ms-perspective: 1000px;
          perspective: 1000px;
          position: relative;
          min-height: 100%;
          padding: 1.5em;
          z-index: 2;
        }

        #wrapper > * {
          z-index: 1;
        }

        #wrapper:before {
          content: '';
          display: block;
        }

        @media screen and (max-width: 360px) {
          #wrapper {
            padding: 0.75em;
          }
        }

        body.is-ie #wrapper {
          height: 100%;
        }

        .external-link-button {
          background: #f2f2f7;
          border-radius: 40px;
          padding: 10px 16px;
        }

        .external-link-button:hover {
          background: #faf2f7;
        }

        .disable-external-link-button {
          background: #a9a9ab;
          border-radius: 40px;
          padding: 10px 16px;
        }

        .link-card-list {
          list-style: none;
          padding-top: 8px;
          margin-top: 16px;
          border-top: 1px solid #eee;
        }

        .description-text {
          background: #f2f2f7;
          border-radius: 6px;
          padding: 8px;
          margin-top: 16px;
        }

        .external-link-container {
          list-style: none;
          padding: 0;
          margin-top: 8px;
        }

        .external-link {
          margin-top: 24px;
        }

        .tag-link-list-container {
          margin: 32px 0px;
          list-style: none;
          padding-left: 0;
        }

        .multiple-tags {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .tag-list {
          padding-left: 0;
          margin: 16px;
        }

        ul.content-list {
          list-style: revert;
          text-align: left;
        }

        ul.content-list > li {
          margin: 8px 8px 8px 24px;
          word-wrap: break-word;
        }

        /* scrollToTopButton */
        .scrollToTop {
          color: #fff;
          font-size: 1.4em;
          box-shadow: 1rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          outline: none;
          background: ${pageTopButtonColorCode || '#a8b313'};
          z-index: 9999;
          bottom: 1rem;
          right: 1rem;
          position: fixed;
          opacity: 0;
          visibility: hidden;
        }
        /* scrollToTopButton - anchor */
        .target {
          position: relative;
        }
        .target-anchor {
          position: absolute;
          top: -72px;
          left: 0;
        }
        /* prev next links */
        .prev-next-links {
          display: flex;
          justify-content: space-between;
        }
        /* pre */
        pre {
          background-color: #eee;
          padding: 8px;
          margin: 8px 0;
          border-radius: 4px;
        }
        /* code */
        code {
          background-color: #eee;
          padding: 4px;
        }
      `}</style>
    </>
  );
};

export default Layout;
