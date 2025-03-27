"use client";

import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

interface FormData {
  applicantName: string;
  premises: string;
  district: string;
  state: string;
  drugs: string;
  technicalStaff: string;
  fee: string;
  date: string;
  signature: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontSize: 12,
  } as const,
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  } as const,
  section: {
    marginBottom: 10,
  } as const,
  bold: {
    fontWeight: "bold",
  } as const,
  note: {
    marginTop: 20,
    fontStyle: "italic",
  } as const,
});

const formData: FormData = {
  applicantName: "[Name of Applicant]",
  premises: "[Premises Address]",
  district: "[District Name]",
  state: "Uttar Pradesh",
  drugs: "[Names of drugs categorized according to Schedule T]",
  technicalStaff: "[Names, qualifications and experience of technical staff]",
  fee: "[Amount]",
  date: "[Date]",
  signature: "(Applicant)",
};

const Form24DDocument = ({ data }: { data: FormData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Form-24-D</Text>
      <Text style={styles.section}>
        Application for the grant of a licence to manufacture for Sale of
        Ayurvedic Drugs.
      </Text>

      <Text style={styles.section}>
        1- I/We <Text style={styles.bold}>{data.applicantName}</Text> of a
        licence to manufacture Ayurvedic Drugs on the premises situated at-
      </Text>
      <Text style={styles.section}>
        <Text style={styles.bold}>{data.premises}</Text>
      </Text>
      <Text style={styles.section}>
        District <Text style={styles.bold}>{data.district}</Text>, State-
        <Text style={styles.bold}>{data.state}</Text>.
      </Text>

      <Text style={styles.section}>
        2- Names of drugs categorized according to Schedule T to be manufactured
        (with details).
      </Text>
      <Text style={styles.section}>
        <Text style={styles.bold}>{data.drugs}</Text>
      </Text>

      <Text style={styles.section}>
        3- Names, qualifications and experience of technical staff employed for
        manufacture and testing of Ayurvedic drugs :
      </Text>
      <Text style={styles.section}>
        <Text style={styles.bold}>{data.technicalStaff}</Text>
      </Text>

      <Text style={styles.section}>
        4- A fee of Rs.<Text style={styles.bold}>{data.fee}</Text>/- (Rupees
        head of Account (0210-विकिसा तथा लोक स्वास्थ्य-01-शहसे स्वास्थ्य शाप्त
        होने वाली फीस) and the relevant Treasury Challan/online transaction slip
        is enclosed herewith.
      </Text>

      <Text style={styles.section}>
        Dated : <Text style={styles.bold}>{data.date}</Text>
      </Text>
      <Text style={styles.section}>Signature</Text>
      <Text style={styles.section}>
        (<Text style={styles.bold}>{data.signature}</Text>).
      </Text>

      <Text style={styles.note}>
        Note : The application should be accompanied by a plan of the premises.
      </Text>
    </Page>
  </Document>
);

export default Form24DDocument;
