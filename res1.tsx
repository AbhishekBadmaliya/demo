"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

interface FreeSaleCertificateData {
  companyName: string;
  companyAddress: string;
  licenseNumber: string;
  stateOrTerritory: string;
  manufacturingPlantAddress: string;
  productList: string[];
  issuingOfficer: string;
  date: string;
  authorityAddress: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Times-Roman",
  } as const,
  title: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    textDecoration: "underline",
  } as const,
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 15,
  } as const,
  text: {
    marginBottom: 5,
  } as const,
  section: {
    marginBottom: 10,
    textAlign: "justify",
  } as const,
  bold: {
    fontWeight: "bold",
  } as const,
  signatureSection: {
    marginTop: 20,
  } as const,
});

const freeSaleData: FreeSaleCertificateData = {
  companyName: "[Name of the company]",
  companyAddress: "[Company Address]",
  licenseNumber: "[License Number]",
  stateOrTerritory: "[State or Union Territory]",
  manufacturingPlantAddress: "[Manufacturing Plant Address]",
  productList: ["[Product 1]", "[Product 2]", "[Product 3]"],
  issuingOfficer: "[Issuing Officer Name]",
  date: "[Date]",
  authorityAddress: "[Licensing Authority Address]",
};

const FreeSaleCertificate = ({ data }: { data: FreeSaleCertificateData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* FORM TITLE */}
      <Text style={styles.title}>FORM 26E2-I</Text>
      <Text style={styles.subtitle}>(See rule 158C)</Text>

      {/* AUTHORITY NAME */}
      <Text style={styles.text}>State Drug Controller or Licensing Authority</Text>
      <Text style={styles.text}>for Ayurveda, Siddha, and Unani Medicines</Text>
      <Text style={styles.text}>Name of the State or Union Territory: <Text style={styles.bold}>{data.stateOrTerritory}</Text></Text>

      {/* FREE SALE CERTIFICATE HEADING */}
      <Text style={styles.title}>Free Sale Certificate</Text>

      {/* COMPANY CERTIFICATION TEXT */}
      <Text style={styles.section}>
        It is certified that M/s. <Text style={styles.bold}>{data.companyName}</Text>, situated at 
        <Text style={styles.bold}> {data.companyAddress}</Text>, is holding a valid Ayurvedic/Siddha/Unani 
        Drug Manufacturing Licence Number <Text style={styles.bold}>{data.licenseNumber}</Text> and 
        a certificate of Good Manufacturing Practices for the State or Union Territory of 
        <Text style={styles.bold}> {data.stateOrTerritory}</Text>.
      </Text>

      {/* MANUFACTURING PLANT DETAILS */}
      <Text style={styles.section}>
        It is also certified that the manufacturing plant situated at <Text style={styles.bold}>{data.manufacturingPlantAddress}</Text>, 
        in which Ayurvedic, Unani, or Siddha products are manufactured, conforms to the requirements of 
        Good Manufacturing Practices and is subjected to inspection as per rules.
      </Text>

      {/* LICENSED PRODUCTS LIST */}
      <Text style={styles.section}>
        The firm has been permitted under Licence Number <Text style={styles.bold}>{data.licenseNumber}</Text> to manufacture 
        and market the following products freely for sale in India under the provisions of the 
        Drugs and Cosmetics Act, 1940, and the rules thereunder:
      </Text>

      {data.productList.map((product, index) => (
        <Text style={{ marginLeft: 20 }} key={index}>
          ({index + 1}) <Text style={styles.bold}>{product}</Text>
        </Text>
      ))}

      {/* DATE AND SIGNATURE SECTION */}
      <Text style={styles.section}>Date: <Text style={styles.bold}>{data.date}</Text></Text>

      <View style={styles.signatureSection}>
        <Text>(Seal of Issuing Officer)</Text>
        <Text>Signature and Name: <Text style={styles.bold}>{data.issuingOfficer}</Text></Text>
        <Text>State Drug Controller/Licensing Authority</Text>
        <Text>Address: <Text style={styles.bold}>{data.authorityAddress}</Text></Text>
      </View>
    </Page>
  </Document>
);

export default FreeSaleCertificate;
