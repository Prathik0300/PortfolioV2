import { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import {
  documentGetInitialProps,
  DocumentHeadTags,
} from "@mui/material-nextjs/v14-pagesRouter";

export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (context: DocumentContext) => {
  const finalProps = await documentGetInitialProps(context);
  return finalProps;
};
