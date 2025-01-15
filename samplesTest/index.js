function sendEligibilityRequest() {
    const jsonData = {
        ClientID: "ffdd8a44-be31-4185-b226-4ad15f0c6c8f",
        PatientData: {
          PatientNationalID: "1234567890",
          PatientID: "9876543210",
          PatientGender: "Male",
          PatientFirstName: "John",
          PatientParentName: "Michael",
          PatientMiddleName: "A.",
          PatientLastName: "Doe",
          PatientMobileNumber: "5551234567",
          PatientBirthDate: "1990-01-01",
          PatientMaritalStatus: "Single",
          PatientJob: "Engineer",
          IsChild: false,
        },
        BranchId: "001",
        BranchName: "Main Branch",
        TPAInsuranceCompanyCode: "123456",
        InsuranceCompanyCode: "654321",
        InsuranceCompanyName: "Global Insurance",
        CCHINo: "CH123456789",
      };
      fetch("https://localhost:7260/api/v1/CheckElig", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((result) => console.log("Success:", result))
        .catch((error) => console.error("Error:", error));
      
}

function sendServicesApprovalRequest() {
  const jsonData = {
    "ClientID": "631601fd-3516-4113-b778-1d3d9d7a5d93",
    "PatientData": {
      "PatientNationalID": "123456789",
      "PatientID": "P1234",
      "PatientGender": "Male",
      "PatientFirstName": "John",
      "PatientParentName": "Mr. Doe",
      "PatientMiddleName": "A.",
      "PatientLastName": "Smith",
      "PatientMobileNumber": "1234567890",
      "PatientBirthDate": "1990-01-01",
      "PatientMaritalStatus": "Single",
      "PatientJob": "Developer",
      "IsChild": false,
      "patientVitalSigns": {
        "BloodPressureMin": "70",
        "BloodPressureMax": "120",
        "Height": "175",
        "Weight": "70",
        "Pulse": "72",
        "Temperature": "36.6",
        "OxygenSaturation": "98",
        "RespiratoryRate": "16"
      },
      "PatientHistory": "No significant history",
      "PatientSignificantSigns": "None",
      "LengthOfStay": "5",
      "TreatmentPlan": "Follow-up",
      "PhysicalExamination": "Normal",
      "HistoryOfPresentIllness": "Cough",
      "InsuranceCard": "INS-12345",
      "Diagnoses": [
        {
          "ICDCode": "J00"
        }
      ],
      "IsPregnant": false,
      "InsClassCode": "A1",
      "InsClassName": "Class A",
      "Encounter": {
        "VisitDate": "2023-10-01",
        "IsDental": false,
        "IsConsultation": true
      },
      "PolicyName": "12332456456",
      "PolicyNumber": "122344645"
    },
    "BranchId": "branch-123",
    "BranchName": "Main Branch",
    "ReqPreStatus": "Pending",
    "InsuranceCompanyCode": "123456",
    "InsuranceCompanyName": "Health Insurance Co.",
    "DoctorCode": "DOC123",
    "DoctorName": "Dr. Smith",
    "ClinicCode": "CLINIC123",
    "MOHNo": "MOH-456",
    "Attachments": null,
    "RelatedAuthId": "AUTH123",
    "Services": [
      {
        "Name": "Service 1",
        "SpecialName": "Special 1",
        "NaphiesName": "Naphies Service 1",
        "ServiceNaphiesCode": "SN001",
        "ServiceSpecialCode": "SS001",
        "ServiceTypeCode": "ST001",
        "ChapterName": "Chapter 1",
        "BodySiteCode": "Body Site 1",
        "Amount": "100.50",
        "Quantity": "1",
        "PBMDuration": "30"
      },
      {
        "Name": "Service 2",
        "SpecialName": "Special 2",
        "NaphiesName": "Naphies Service 2",
        "ServiceNaphiesCode": "SN002",
        "ServiceSpecialCode": "SS002",
        "ServiceTypeCode": "ST002",
        "ChapterName": "Chapter 2",
        "BodySiteCode": "Body Site 2",
        "Amount": "200.75",
        "Quantity": "2",
        "PBMDuration": "45"
      }
    ]
  };
    fetch("https://localhost:7260/api/v1/ClaimApprovalRequest/service", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}

function sendPharmacyApprovalRequest() {
  const jsonData = {
    "ClientID": "631601fd-3516-4113-b778-1d3d9d7a5d93",
    "PatientData": {
      "PatientNationalID": "987654321",
      "PatientID": "patient-001",
      "PatientGender": "Male",
      "PatientFirstName": "John",
      "PatientParentName": "Jane",
      "PatientMiddleName": "Edward",
      "PatientLastName": "Doe",
      "PatientMobileNumber": "5551234567",
      "PatientBirthDate": "1985-05-15",
      "PatientMaritalStatus": "Single",
      "PatientJob": "Engineer",
      "IsChild": false,
      "IsPregnant": false,
      "PatientHistory": "No known allergies",
      "TreatmentPlan": "Regular check-ups",
      "PhysicalExamination": "Normal",
      "InsuranceCard": "INS-123456",
      "PolicyName": "Health Plan A",
      "PolicyNumber": "POL-789012",
      "Diagnoses": [
        {
          "ICDCode": "J45.909"
        }
      ]
    },
    "BranchId": "branch-001",
    "BranchName": "Main Branch",
    "CCHINo": "CCHI-12345",
    "ReqPreStatus": "Pending",
    "InsuranceCompanyCode": "1001",
    "InsuranceCompanyName": "Best Health Insurance",
    "ClinicCode": "CLN-123",
    "Attachments": null,
    "InsStartDate": "2024-01-01T00:00:00Z",
    "InsExpireDate": "2025-01-01T00:00:00Z",
    "RelatedAuthId": "null",
    "MedicineItems": [
      {
        "Name": "Paracetamol",
        "SpecialName": "Paracetamol Extra",
        "NaphiesName": "Paracetamol Naphies",
        "ServiceNaphiesCode": "SRV-001",
        "ServiceSpecialCode": "SSP-001",
        "ServiceTypeCode": "99",
        "ChapterName": "Pain Relief",
        "BodySiteCode": "BSC-001",
        "Amount": "50.00",
        "Quantity": "2",
        "PBMDuration": "30"
      }
    ]
  };
    fetch("https://localhost:7260/api/v1/ClaimApprovalRequest/pharmacy", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}


function sendClaimCollectionRequest() {
  const jsonData = {
    "ClientId": "164241ab-7b92-42b3-9320-f8bc0b2b6d59",
    "PatientData": {
      "PatientNationalID": "NID123456789",
      "PatientID": "PID987654321",
      "PatientGender": "M",
      "PatientFirstName": "John",
      "PatientParentName": "Doe",
      "PatientMiddleName": "Middle",
      "PatientLastName": "Smith",
      "PatientMobileNumber": "0123456789",
      "PatientBirthDate": "1985-05-15T00:00:00",
      "PatientMaritalStatus": "Single",
      "PatientJob": "Engineer",
      "IsChild": false,
      "PatientHistory": "Patient has a history of hypertension.",
      "InsuranceCardNumber": "ICN123456789",
      "PatientSignificantSigns": "Signs of respiratory distress.",
      "Diagnoses": [
        {
          "ICDCode": "I10"
        }
      ],
      "VitalSigns": {
        "BloodPressureMin": "80",
        "BloodPressureMax": "120",
        "Height": "170",
        "Weight": "70",
        "Pulse": "72",
        "Temperature": "36.5",
        "OxygenSaturation": "98",
        "RespiratoryRate": "16"
      },
      "PolicyName": "policyName",
      "PolicyNumber": "1589456"
    },
    "BillNo": "BILL12345",
    "BillDate": "2023-06-30T11:05:48",
    "ClaimStatus": "Approved",
    "IsDental": false,
    "InsuranceCompanyCode": "123456789",
    "TPAInsuranceCompanyCode": "987654321",
    "InsuranceCompanyName": "Global Health Insurance",
    "ApprovalNo": "APPROVAL123456",
    "ApprovalDateTime": "2023-06-30T11:05:48",
    "IsRelatedClaim": true,
    "RelatedClaimId": "RC123456789",
    "ClaimRequestId": "CR123456789",
    "ClaimBundleId": "CB123456789",
    "ClaimMessageHeaderId": "CMH123456789",
    "BranchId": "101",
    "ClaimNo": "CLAIM98765",
    "DoctorCode": "DOC12345",
    "DoctorMOHNo": "MOH67890",
    "DoctorName": "Dr. Jane Doe",
    "DoctorSpeciality": "Cardiology",
    "ClinicCode": "CL001",
    "BranchName": "Texa",
    "VisitPolicyName": "policyName",
    "ClaimItems": [
      {
        "ServiceAmount": "200.00",
        "ComVatSer": "15.00",
        "ValueAddedTax": "10.00",
        "CompTax": "5.00",
        "NetAmount": "180.00",
        "DiscountAmount": "10.00",
        "GrossAmount": "210.00",
        "Deduction": "5.00",
        "PatientShare": "15.00",
        "Quantity": "2",
        "CodeHyphanated": "CH12345",
        "ChapterName": "General Services",
        "ServiceCode": "SC12345",
        "ServiceName": "Consultation",
        "ServiceNphiesName": "Nphies Consultation Service",
        "BodySiteCode": "BS001",
        "ServiceTypeCode": "99",
        "ServiceNphiesCode": "105"
      }
    ],
    "Attachment": null
  };
    fetch("https://localhost:7260/api/v1/ClaimsCollection/request", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}

function sendClaimCancelRequest() {
  const jsonData = {
    "ClientId": "a8d45943-f996-48ab-b61d-88678037e85e",
    "ClaimId": "CLM12345",
    "RequestType": "claim",
    "PatientId": "PAT56789",
    "PatientInsuranceId": "INS12345",
    "BranchId": "101",
    "BranchName": "MainBranch",
    "TPAInsuranceCompanyCode": "202",
    "InsuranceCompanyCode": "303",
    "InsuranceCompanyName": "ABC Insurance"
  };
    fetch("https://localhost:7260/api/v1/ClaimsCollection/cancel", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}


function sendClaimStatusCheckRequest() {
  const jsonData = {
    "ClientId": "a8d45943-f996-48ab-b61d-88678037e85e",
    "ClaimId": "CLAIM12345",
    "PatientId": "PATIENT123",
    "PatientInsuranceId": "INS12345",
    "BranchId": "BRANCH001",
    "BranchName": "MainBranch",
    "TPAInsuranceCompanyCode": "9876543210",
    "InsuranceCompanyCode": "1234567890",
    "InsuranceCompanyName": "SampleInsurance"
  };
    fetch("https://localhost:7260/api/v1/ClaimsCollection/statusCheck", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}

function sendUnsolicitedCommunicationRequest() {
  const jsonData = {
    "ClientId": "7a9df982-2d9e-4313-ae9d-f207f7e399c7",
    "CommunicationMessage": "Sample communication message",
    "ClaimId": "CLAIM12345",
    "BranchId": "12345",
    "BranchName": "Main Branch",
    "InsuranceCompanyCode": "987654",
    "TPAInsuranceCompanyCode": "123456",
    "InsuranceCompanyName": "Sample Insurance Co.",
    "Attachment": null,
    "PatientData": {
      "InsuranceID": "456789",
      "PatientNationalID": "1234567890",
      "PatientID": "PATIENT123",
      "PatientGender": "Male",
      "PatientFirstName": "John",
      "PatientParentName": "Michael",
      "PatientMiddleName": "David",
      "PatientLastName": "Smith",
      "PatientMobileNumber": "1234567890",
      "PatientBirthDate": "1990-01-01",
      "PatientMaritalStatus": "Single",
      "PatientJob": "Engineer",
      "IsChild": false
    }
  };
    fetch("https://localhost:7260/api/v1/communication/unsolicited", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}

function sendSolicitedCommunicationRequest() {
  const jsonData = {
    "ClientId": "ffdd8a44-be31-4185-b226-4ad15f0c6c8f",
    "CommunicationMessage": "Sample communication message",
    "ClaimId": "CLAIM12345",
    "BranchId": "12345",
    "BranchName": "Main Branch",
    "InsuranceCompanyCode": "987654",
    "TPAInsuranceCompanyCode": "123456",
    "InsuranceCompanyName": "Sample Insurance Co.",
    "Attachment": null,
    "PatientData": {
      "InsuranceID": "456789",
      "PatientNationalID": "1234567890",
      "PatientID": "PATIENT123",
      "PatientGender": "Male",
      "PatientFirstName": "John",
      "PatientParentName": "Michael",
      "PatientMiddleName": "David",
      "PatientLastName": "Smith",
      "PatientMobileNumber": "1234567890",
      "PatientBirthDate": "1990-01-01",
      "PatientMaritalStatus": "Single",
      "PatientJob": "Engineer",
      "IsChild": false
    },
    "CommunicationResponseId": "15456879851313"
  };
    fetch("https://localhost:7260/api/v1/communication/solicited", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}

function sendServicesReferralRequest() {
  const jsonData = {
    "ClientID": "7a9df982-2d9e-4313-ae9d-f207f7e399c7",
    "IsRelatedReferal": true,
    "RelatedAuthorizedId": "REL_AUTH_ID_123",
    "BranchId": "BRANCH_001",
    "BranchName": "MainBranch",
    "InsuranceCompanyCode": "123456",
    "InsuranceCompanyName": "Insurance Co. Ltd.",
    "TPAInsuranceCompanyCode": "789101",
    "DoctorCode": "DOC123",
    "DoctorMOHNo": "MOH456",
    "DoctorName": "Dr. John Doe",
    "DoctorSpecialityCode": "SPEC001",
    "DoctorSpecialityDescription": "Cardiology",
    "ClinicCode": "CLINIC001",
    "ReferalPurposeOfReference": "Medical Consultation",
    "AttachmentFile": null,
    "PatientData": {
      "PatientVitalSigns": {
        "BloodPressureMin": "80",
        "BloodPressureMax": "120",
        "Height": "170",
        "Weight": "70",
        "Pulse": "72",
        "Temperature": "36.5",
        "OxygenSaturation": "98",
        "RespiratoryRate": "16"
      },
      "PatientHistory": "No prior significant medical history",
      "PatientSignificantSigns": "None",
      "LengthOfStay": "2",
      "TreatmentPlan": "Rest and medication",
      "PhysicalExamination": "Normal",
      "HistoryOfPresentIllness": "Occasional headaches",
      "InsuranceCard": "INS1234567890",
      "Diagnoses": [
        {
          "ICDCode": "A123"
        },
        {
          "ICDCode": "B456"
        }
      ],
      "PatientID": "123456789",
      "PatientGender": "Male",
      "PatientLastName": "Osman",
      "PatientFirstName": "Adel",
      "PatientMiddleName": "Rami",
      "PatientNationalID": "3000000000",
      "PatientParentName": "Ali",
      "PatientMobileNumber": "010101010101",
      "PatientBirthDate": "1991-01-01",
      "ClassCode": "0123",
      "ClassName": "Class Re",
      "PolicyName": "Policy asdas",
      "PolicyNumber": "12-34-56"
    },
    "Services": [
      {
        "ServiceCode": "SRV001",
        "Name": "Blood Test",
        "SpecialName": "Complete Blood Count",
        "NaphiesName": "NAPH-BLOOD",
        "ServiceNaphiesCode": "N001",
        "ServiceSpecialCode": "S001",
        "ServiceTypeCode": "T001",
        "ChapterName": "Pathology",
        "BodySiteCode": "RightArm",
        "Amount": "150.00",
        "Quantity": "1",
        "PBMDuration": "30"
      },
      {
        "ServiceCode": "SRV002",
        "Name": "X-Ray",
        "SpecialName": "Chest X-Ray",
        "NaphiesName": "NAPH-XRAY",
        "ServiceNaphiesCode": "N002",
        "ServiceSpecialCode": "S002",
        "ServiceTypeCode": "T002",
        "ChapterName": "Radiology",
        "BodySiteCode": "Chest",
        "Amount": "200.00",
        "Quantity": "1",
        "PBMDuration": "15"
      }
    ]
  };
    fetch("https://localhost:7260/api/v1/TransferRequest/service", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}

function sendPharmacyReferralRequest() {
  const jsonData = {
    "ClientId": "2d34c74e-bbfa-457f-aa98-3e8f1b0fa1fb",
    "IsRelatedReferal": true,
    "RelatedAuthorizedId": "related-authorized-id",
    "BranchId": "branch-id",
    "BranchName": "branch-name",
    "InsuranceCompanyCode": "123456",
    "InsuranceCompanyName": "insurance-company-name",
    "TPAInsuranceCompanyCode": "654321",
    "ClinicCode": "clinic-code",
    "PolicyNumber": "policy-number",
    "PolicyName": "policy-name",
    "AttachmentFile": null,
    "MedicineItems": [
      {
        "Name": "medicine-name-1",
        "SpecialName": "medicine-special-name-1",
        "NaphiesName": "medicine-naphies-name-1",
        "ServiceNaphiesCode": "service-naphies-code-1",
        "ServiceSpecialCode": "service-special-code-1",
        "ServiceTypeCode": "service-type-code-1",
        "ChapterName": "chapter-name-1",
        "BodySiteCode": "body-site-code-1",
        "Amount": "100.50",
        "Quantity": "2",
        "PBMDuration": "30",
        "DaysSupply": "7"
      }
    ],
    "PatientData": {
      "PatientNationalID": "patient-national-id",
      "PatientID": "patient-id",
      "PatientGender": "M",
      "PatientFirstName": "John",
      "PatientParentName": "Michael",
      "PatientMiddleName": "David",
      "PatientLastName": "Doe",
      "PatientMobileNumber": "+1234567890",
      "PatientBirthDate": "1990-01-01",
      "PatientMaritalStatus": "Single",
      "PatientJob": "Engineer",
      "IsChild": false,
      "InsuranceCardNumber": "insurance-card-number",
      "InsStartDate": "2023-01-01",
      "InsExpireDate": "2024-01-01",
      "TreatmentPlan": "Sample Treatment Plan",
      "PhysicalExamination": "Sample Physical Examination",
      "HistoryOfPresentIllness": "Sample History of Present Illness",
      "PatientHistory": "Sample Patient History",
      "IsPregnant": false,
      "Diagnoses": [
        {
          "ICDCode": "icd-code-1",
          "ICDDescription": "icd-description-1"
        }
      ]
    }
  };
    fetch("https://localhost:7260/api/v1/TransferRequest/pharmacy", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((result) => console.log("Success:", JSON.stringify(result)))
      .catch((error) => console.error("Error:", error));
    
}