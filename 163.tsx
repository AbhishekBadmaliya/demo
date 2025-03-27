"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Times-Roman",
  } as const,
  title: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 5,
    textDecoration: "underline",
    fontWeight: "bold",
  } as const,
  subtitle: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
    fontStyle: "italic",
  } as const,
  heading: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  } as const,
  section: {
    marginBottom: 10,
    textAlign: "justify",
  } as const,
  text: {
    marginBottom: 5,
  } as const,
  bold: {
    fontWeight: "bold",
  } as const,
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    width: "100%",
  } as const,
  signatureSection: {
    marginTop: 20,
    textAlign: "right",
  } as const,
  note: {
    marginTop: 10,
    fontSize: 10,
    fontStyle: "italic",
    fontWeight: "bold",
  } as const,
});

const Form24E1 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* FORM TITLE */}
      <Text style={styles.title}>FORM 24E-1</Text>
      <Text style={styles.subtitle}>(See rule 153B)</Text>

      {/* FORM HEADING */}
      <Text style={styles.heading}>
        APPLICATION FOR THE CERTIFICATE OF GOOD MANUFACTURING PRACTICES FOR AYURVEDIC, SIDDHA OR UNANI DRUGS MANUFACTURING UNITS.
      </Text>

      {/* FORM BODY */}
      <Text style={styles.section}>
        1. I/We <Text style={styles.line}> </Text> of <Text style={styles.line}> </Text> hereby apply for the 
        grant of a Certificate of Good Manufacturing Practices for Ayurvedic, Siddha or Unani drugs manufacturing 
        on the premises situated at <Text style={styles.line}> </Text>.
      </Text>

      <Text style={styles.section}>
        2. A fee of rupees <Text style={styles.line}> </Text> has been credited to the Government under the 
        head of account <Text style={styles.line}> </Text> and the relevant Treasury Challan/online transaction slip 
        is enclosed herewith.
      </Text>

      {/* DATE AND SIGNATURE */}
      <Text style={styles.section}>Date: <Text style={styles.line}> </Text></Text>

      <View style={styles.signatureSection}>
        <Text>Signature <Text style={styles.line}> </Text></Text>
        <Text>(applicant)</Text>
      </View>

      {/* NOTE SECTION */}
      <Text style={styles.note}>Note.— The application should be accompanied by a Plan of the premises.</Text>
    </Page>
  </Document>
);

export default Form24E1;
