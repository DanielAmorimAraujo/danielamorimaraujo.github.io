import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import ResumePDF from "assets/resume.pdf";

const Resume = (): React.ReactElement => (
  <Document file={ResumePDF}>
    <Page pageNumber={1} />
  </Document>
);

export default Resume;
