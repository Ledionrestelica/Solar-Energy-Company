import * as React from "react";

interface EmailTemplateProps {
  formData: Record<string, string>;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ formData }) => (
  <div>
    <h1>New Form Submission</h1>
    <pre>{JSON.stringify(formData, null, 2)}</pre>
  </div>
);
