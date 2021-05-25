import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styled from "styled-components";

import Frame from "components/frame/frame";
import ResumePDF from "assets/resume.pdf";

const PdfWrapper = styled.div`
  canvas {
    width: auto !important;
    height: auto !important;
    max-width: 90vw;
    max-height: 90vh;
  }
`;

const Resume = (): React.ReactElement => (
  <Frame angle={3}>
    <PdfWrapper>
      <Document file={ResumePDF}>
        <Page pageNumber={1} />
      </Document>
    </PdfWrapper>
  </Frame>
);

export default Resume;
