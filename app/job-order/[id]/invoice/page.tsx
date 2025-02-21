"use client";
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  HStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import logoBlue from "../../../assets/logoWhite.webp";
import Sidebar from "../../../components/major/Sidebar";
import Header from "../../../components/minor/Header";
import { withAuth } from "@/app/utils/services/hoc";

const FormContainer = styled(Box)`
  background: white;
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
`;

// interface InvoiceItem {
//   description: string;
//   qty: number;
//   discountPercentage?: number;
//   unitPrice: number;
//   amount: number;
// }

function InvoicePage({}: { params: { id: string } }) {
  const invoiceData = {
    customerName: "MR. TONY",
    date: "07/01/25",
    contactPerson: "070 84142179",
    location: "OWERRI, IMO STATE",
    staff: "Akachi Nwekwo",
    vehicleDetails: {
      modelMake: "LEXUS GX 460",
      modelCode: "",
      chassisNo: "JTJBM7FX3A5003292",
      mileage: "",
      color: "",
      plateNo: "ABU 315 AG",
      year: "2010",
    },
    items: [
      {
        description: "FRONT SEAT BELTS LH & RH",
        qty: 1,
        unitPrice: 45000,
        amount: 45000,
      },
      {
        description: "BACK SEAT BELTS LH & RH",
        qty: 1,
        unitPrice: 45000,
        amount: 45000,
      },
      {
        description: "STEP BOARD SET",
        qty: 1,
        unitPrice: 280000,
        amount: 280000,
      },
      {
        description: "CURTAIN AIRBAGS LH & RH",
        qty: 1,
        unitPrice: 900000,
        amount: 900000,
      },
      {
        description: "SPARE TYRE 265/60 R18",
        qty: 1,
        unitPrice: 140000,
        amount: 140000,
      },
      {
        description: "LOWER ARM RH",
        qty: 1,
        unitPrice: 190000,
        amount: 190000,
      },
      {
        description: "SUSPENSION ALIGNMENT",
        qty: 1,
        unitPrice: 30000,
        amount: 30000,
      },
      { description: "BALL JOINTS", qty: 2, unitPrice: 45000, amount: 90000 },
      { description: "FIXING OF TYRES", qty: 1, unitPrice: 3000, amount: 3000 },
      {
        description: "PANEL BEAT WORK, SPRAYING OF -",
        qty: 0,
        unitPrice: 0,
        amount: 0,
      },
      {
        description: "FRONT BUMPER & COMPLETE RIGHT SIDE",
        qty: 1,
        unitPrice: 480000,
        amount: 480000,
      },
      { description: "SUNDRIES", qty: 1, unitPrice: 45000, amount: 45000 },
    ],
    totalExclVAT: 2248000,
    vat: 3375,
    totalInclVAT: 2251375,
  };

  const disclaimers = [
    "1. Estimates must be customer-approved within seven (7) days, else they will be removed from the company premises.",
    "2. Upon estimate approval, make an 80% down payment, or incure daily ₦1,000 demurrage charges after seven (7)days.",
    "3. Vehicles left unclaimed for six (6) months will be auctioned without further notice.",
    "4. If additional spares are required during repairs, a separate estimate will be generated.",
    "5. We have a non-refund policy which states that unused funds may only be applied to subsequent repairs.",
    "6. Accepting our estimate gives us permission to utilize your car in promotional digital and social media content.",
  ];

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p={{ base: 4, md: 8 }}>
        <Header />
        <FormContainer>
          <VStack align="stretch" spacing={6}>
            {/* Header */}
            <Flex justifyContent="center" alignContent="center">
              <Image src={logoBlue} alt="logo" />
            </Flex>
            <Box my={6}>
              <Heading fontSize="xl" fontWeight="bold">
                INVOICE
              </Heading>
            </Box>

            {/* Customer Info */}
            <Box border="1px" borderColor="gray.200">
              <Table variant="simple" size="sm">
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold" width="200px">
                      Staff Name:
                    </Td>
                    <Td>{invoiceData.staff}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold" width="200px">
                      Customer Name:
                    </Td>
                    <Td>{invoiceData.customerName}</Td>
                    <Td rowSpan={2} textAlign="right">
                      {invoiceData.location}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Date:</Td>
                    <Td>{invoiceData.date}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Contact Person:</Td>
                    <Td>{invoiceData.contactPerson}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

            {/* Vehicle Details */}
            <Box border="1px" borderColor="gray.200">
              <Text p={2} fontWeight="bold" bg="gray.50">
                VEHICLE DETAILS
              </Text>
              <Table variant="simple" size="sm">
                <Tbody>
                  <Tr>
                    <Td fontWeight="bold">Model Make:</Td>
                    <Td>{invoiceData.vehicleDetails.modelMake}</Td>
                    <Td fontWeight="bold">Mileage:</Td>
                    <Td>{invoiceData.vehicleDetails.mileage}</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="bold">Chassis No:</Td>
                    <Td>{invoiceData.vehicleDetails.chassisNo}</Td>
                    <Td fontWeight="bold">Plate. No:</Td>
                    <Td>{invoiceData.vehicleDetails.plateNo}</Td>
                    <Td fontWeight="bold">YEAR</Td>
                    <Td>{invoiceData.vehicleDetails.year}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

            {/* Items Table */}
            <Table
              variant="simple"
              size="sm"
              border="1px"
              borderColor="gray.200">
              <Thead bg="gray.50">
                <Tr>
                  <Th>Description</Th>
                  <Th isNumeric>Qty</Th>
                  <Th isNumeric>Disc %</Th>
                  <Th isNumeric>Unit Price (₦)</Th>
                  <Th isNumeric>Amount (₦)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {invoiceData.items.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.description}</Td>
                    <Td isNumeric>{item.qty}</Td>
                    <Td isNumeric></Td>
                    <Td isNumeric>{item.unitPrice.toLocaleString()}</Td>
                    <Td isNumeric>{item.amount.toLocaleString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Totals */}
            <Box alignSelf="flex-end">
              <HStack spacing={8} justify="flex-end">
                <Text fontWeight="bold">Total Excl. VAT</Text>
                <Text>₦{invoiceData.totalExclVAT.toLocaleString()}</Text>
              </HStack>
              <HStack spacing={8} justify="flex-end">
                <Text fontWeight="bold">VAT (7.5%)</Text>
                <Text>₦{invoiceData.vat.toLocaleString()}</Text>
              </HStack>
              <HStack spacing={8} justify="flex-end">
                <Text fontWeight="bold">Total Incl. VAT</Text>
                <Text>₦{invoiceData.totalInclVAT.toLocaleString()}</Text>
              </HStack>
            </Box>

            {/* Disclaimers */}
            <Box>
              <Text fontWeight="bold" mb={2}>
                DISCLAIMER:
              </Text>
              {disclaimers.map((disclaimer, index) => (
                <Text key={index} fontSize="sm">
                  {disclaimer}
                </Text>
              ))}
            </Box>

            {/* Footer */}
            <Box textAlign="center" mt={4}>
              <Text fontWeight="bold">FOR YOUR NEXT SERVICE APPOINTMENT</Text>
              <Text>
                PLEASE CALL: 08115004000 or send a message to @pamtechgroup on
                social media
              </Text>
              <Text fontWeight="bold" mt={4}>
                Extra Care for your car
              </Text>
              <Text fontWeight="bold">Extra Mile for you</Text>
            </Box>
          </VStack>
        </FormContainer>
      </Box>
    </Flex>
  );
}
export default withAuth(InvoicePage);
