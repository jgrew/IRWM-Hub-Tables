export enum OPTIONS {
  SWRP_URL = 'https://www.ocgis.com/arcpub/rest/services/Environmental_Resources/SWRP_Projects_Public/FeatureServer/0',
  SIRWM_URL = 'https://www.ocgis.com/arcpub/rest/services/Environmental_Resources/SOC_IRWM_Projects_Public/FeatureServer/0',
  NCIRWM_URL = 'https://www.ocgis.com/arcpub/rest/services/Environmental_Resources/NC_IRWM_Projects_Public/FeatureServer/0',
  SWRP = 'SWRP',
  IRWM = 'IRWM'
}

export const SWRP_FIELDS = {
  "OBJECTID": "ID",
  "ProjectName": "Project Name",
  "SWRPProjectScore": "Prioritization Score",
  "ProjectStatus": "Project Status",
  "EstimatedTotalProjectCost": "Project Cost ($)",
  "ExpectedCompletionDate": "Expected Completion Date",
  "PrimaryBenefit": "Primary Benefit",
  "PrimaryBenefitQuantity": "Value",
  "PrimaryBenefitUnits": "Units for Primary Benefit",
  "SecondaryBenefit": "Secondary Benefit",
  "SecondaryBenefitQuantity": "Value",
  "SecondaryBenefitUnits": "Units for Secondary Benefit",
  "AdditionalBenefit": "Other Benefit",
  "AdditionalBenefitQuantity": "Value",
  "AdditionalBenefitUnits": "Units for Other Benefit",
  "UseOfPublicLands": "Use of Public Lands"
}

export const IRWM_FIELDS = {
  "OBJECTID": "ID",
  "ProjectName": "Project Name",
  "IRWMProjectRankingScore": 'Prioritization Score',
  "ProjectStatus": "Project Status",
  "EstimatedTotalProjectCost": "Project Cost ($)",
  "ExpectedCompletionDate": "Expected Completion Date",
  "PrimaryProjectIRWMGoal": "Primary IRWM Goal",
  "ProjectDescription": "Description",
  "AgencyName": "Agency"
}

export const SWRP_IDS = {
  OBJECTID: 'UpdatingExistingProject',
  ProjectName: 'SWRPComponents',
  SWRPProjectScore: 'AgencyName',
  ProjectStatus: 'ProjectName',
  EstimatedTotalProjectCost: 'ContactName',
  ExpectedCompletionDate: 'SWRPProjectScore',
  PrimaryBenefit: 'ContactEmailAddress',
  PrimaryBenefitQuantity: 'ContactPhoneNumber',
  PrimaryBenefitUnits: 'ProjectDescription',
  SecondaryBenefit: 'ExpectedCompletionDate',
  SecondaryBenefitQuantity: 'ProjectStatus',
  SecondaryBenefitUnits: 'PrimaryProjectIRWMGoal',
  AdditionalBenefit: 'EstimatedTotalProjectCost',
  AdditionalBenefitQuantity: 'PotentialRegionalProject',
  AdditionalBenefitUnits: 'PrimaryBenefit',
  UseOfPublicLands: 'PrimaryBenefitUnits',
}

export const CSS = {
  calciteStyles: {
    right: "right",
    left: "left",
    fontSize2: "font-size--2",
    paddingTrailer: "padding-right-1",
    panel: "panel",
    panelNoPadding: "panel-no-padding",
    btn: "btn",
    btnFill: "btn-fill",
    btnTransparent: "btn-transparent",
    phoneHide: "phone-hide",
    padLeft: "padding-left-1",
    padLeader: "padding-leader-1",
    padLeaderHalf: "padding-leader-half",
    padRight: "padding-right-1",
    padRightHalf: "padding-right-half",
    grid: "grid-container",
    column12: "column-12",
    column8: "column-8",
    column6: "column-6",
    column4: "column-4",
    close: "close",
    success: 'input-success',
    error: 'input-error'
  },
  tablePanel: 'tablePanel'
};

export const ANIM = {
    fadeIn: 'animate-fade-in'
}

export const ProjectStatus = {
  'Select...': '',
  'Completed': 'Completed',
  'In Design': 'In Design',
  'Planning': 'Planning',
  'Previous Project': 'Previous Project',
  'Shovel Ready': 'Shovel Ready'
};

export const nIRWM_goals = {
  'Select...': '',
  'Water Supply': 'Water Supply',
  'Water Quality': 'Water Quality',
  'Ecosystems and Native Habitat': 'Ecosystems and Native Habitat',
  'Flood Management': 'Flood Management',
  'Quality of Life in Orange County': 'Quality of Life in Orange County',
  'Climate Change': 'Climate Change'
};

export const sIRWM_goals = {
  'Select...': '',
  'Improve Water Quality': 'Improve Water Quality',
  'Increase Water Supply, Reliability and Efficiency': 'Increase Water Supply, Reliability and Efficiency',
  'Protect and Enhance Natural Resources': 'Protect and Enhance Natural Resources',
  'Integrate Flood Management': 'Integrate Flood Management'
};

export const BENEFITS = {
  'Select...': '',
  'Increased filtration and/or treatment of runoff': 'Increased filtration and/or treatment of runoff',
  'Water supply reliability': 'Water supply reliability',
  'Conjunctive use': 'Conjunctive use',
  'Decreased flood risk by reducing runoff rate and/or volume': 'Decreased flood risk by reducing runoff rate and/or volume',
  'Environmental habitat protection and improvement': 'Environmental habitat protection and improvement',
  'Increased water conservation': 'Increased water conservation',
  'Increased urban green space': 'Increased urban green space',
  'Employment Opportunities provided': 'Employment opportunities provided',
  'Public education': 'Public education',
  'Nonpoint source pollution control': 'Nonpoint source pollution control',
  'Reestablished natural water drainage and treatment': 'Reestablished natural water drainage and treatment',
  'Water conservation': 'Water conservation',
  'Reduced sanitary sewer overflows': 'Reduced sanitary sewer overflows',
  'Reduced energy use, greenhouse gas emissions or provides a carbon sink':'Reduced energy use, greenhouse gas emissions or provides a carbon sink',
  'Reestablishment of the natural hydrograph': 'Reestablishment of the natural hydrograph',
  'Water temperature improvements': 'Water temperature improvements',
  'Community Involvement': 'Community Involvement',
  'Enhance and/or create recreational and public use areas': 'Enhance and/or create recreational and public use areas'
};

export const UNITS = {
  "Select...": "",
  "TBD": "TBD", 
  "lbs/day": "lbs/day", 
  "kg/day": "kg/day", 
  "mg/L": "mg/L", 
  "ug/L": "ug/L", 
  "mpn/100mL": "mpn/100mL", 
  "million gallons per day (mgd)": "million gallons per day (mgd)", 
  "acre-feet per year (afy)": "acre-feet per year (afy)", 
  "dollars per volume per year (of augmented water supply)": "dollars per volume per year (of augmented water supply)", 
  "cubic feet per second (cfs)": "cubic feet per second (cfs)", 
  "acre-feet (af)": "acre-feet (af)", 
  "cubic feet (cf)": "cubic feet (cf)", 
  "acres": "acres", 
  "linear feet": "linear feet", 
  "carbon sequestration (megagrams of carbon per area)": "carbon sequestration (megagrams of carbon per area)", 
  "area units of landscape and buffer measure of improved hydrology number of biotic structure": "area units of landscape and buffer measure of improved hydrology number of biotic structure", 
  "number of physical structures": "number of physical structures", 
  "reduced temperature (degrees)": "reduced temperature (degrees)",
  "size of population served": "size of population served", 
  "number of people": "number of people", 
  "number of jobs": "number of jobs"
};

export const IDS = {
  UpdatingExistingProject: 'UpdatingExistingProject',
  SWRPComponents: 'SWRPComponents',
  AgencyName: 'AgencyName',
  ProjectName: 'ProjectName',
  ContactName: 'ContactName',
  SWRPProjectScore: 'SWRPProjectScore',
  ContactEmailAddress: 'ContactEmailAddress',
  ContactPhoneNumber: 'ContactPhoneNumber',
  ProjectDescription: 'ProjectDescription',
  ExpectedCompletionDate: 'ExpectedCompletionDate',
  ProjectStatus: 'ProjectStatus',
  PrimaryProjectIRWMGoal: 'PrimaryProjectIRWMGoal',
  EstimatedTotalProjectCost: 'EstimatedTotalProjectCost',
  PotentialRegionalProject: 'PotentialRegionalProject',
  PrimaryBenefit: 'PrimaryBenefit',
  PrimaryBenefitUnits: 'PrimaryBenefitUnits',
  PrimaryBenefitQuantity: 'PrimaryBenefitQuantity',
  SecondaryBenefit: 'SecondaryBenefit',
  SecondaryBenefitUnits: 'SecondaryBenefitUnits',
  SecondaryBenefitQuantity: 'SecondaryBenefitQuantity',
  AdditionalBenefit: 'AdditionalBenefit',
  AdditionalBenefitUnits: 'AdditionalBenefitUnits',
  AdditionalBenefitQuantity: 'AdditionalBenefitQuantity',
  irwmUpload: 'irwmUpload',
  swrpUpload: 'swrpUpload',
  atlasUpload: 'atlasUpload',
  IRWMProjectRankingScore: 'IRWMProjectRankingScore',
  // IRWMRegion: 'IRWMRegion',
  UseOfPublicLands: 'UseOfPublicLands',
}

export const SCORESHEETS = {
  south: 'https://ocgov.box.com/shared/static/dmot03j2gencx2o7illvk9g4j4mbykum.xlsx',
  north: 'https://ocgov.box.com/shared/static/vfe4idona5vt2nhjmmojyxkf0k28dc2o.xlsx',
  swrp: 'https://ocgov.box.com/shared/static/uqrgiair6x60i2zm1x8d0n6eiwj5efbg.xlsx',
  atlas: ''
}