let result;
//take the var data and its
let data = [
	{
		"state": "Alabama",
		"population": 353913,
		"bll": "2%",
		"law": "Alabama offers a Lead hazard Reduction Contractor Certification prgram for  all persons engaged in lead-based paint activities. It's $300 for each child occupied facility plus 2% of the contract."
  },
	{
		"state": "Alaska",
		"population": 64894,
		"bll": "No available data",
		"law": "State of Alaska received $355,958 in 2018 for childhood lead poisoning prevention programmatic activities from the Centers for Disease Control and Prevention."
  },
	{
		"state": "Arizona",
		"population": 526368,
		"bll": "1%",
		"law": "Arizona requires reporting by physicians of blood lead above 25 μg/dL."
  },
	{
		"state": "Arkansas",
		"population": 231143,
		"bll": "No available data",
		"law": "Arkansas has a  screening program to identify children under 6 years with lead poisoning or potential lead poisoning; poisoned children are to be tested within 3 months."
  },
	{
		"state": "California",
		"population": 3007336,
		"bll": "No available data",
		"law": "California requires reporting by medical laboratories of EBL( elevated blood lead) over 25 μg/dL (may be lowered to 15 μg/dL)."
  },
	{
		"state": "Colorado",
		"population": 406560,
		"bll": "3%",
		"law": "Colorado guidelines currently recommend that all low-income children in Colorado should be tested for lead at 12 months and 24 months of age."
  },
	{
		"state": "Connecticut",
		"population": 230924,
		"bll": "5%",
		"law": "All clinical laboratories must report blood lead levels of equal to or greater than 10 µg/dl of blood within forty-eight hours of analysis."
  },
	{
		"state": "Delaware",
		"population": 66924,
		"bll": "2%",
		"law": "Schools are obligated by statute to require students entering pre-schools, kindergartens and day care centers to show proof of a blood lead test."
  },
	{
		"state": "District of Columbia",
		"population": 48440,
		"bll": "1%",
		"law": "District law requires ALL children to be tested twice by two – once between 6-14 months and again between 22 and 26 months. But there are also other specific circumstances that can trigger screening requirements."
  },
	{
		"state": "Florida",
		"population": 1317573,
		"bll": "No available data",
		"law": "All laboratories in Florida must report all blood lead test results by the close of the next business day following laboratory findings."
  },
	{
		"state": "Georgia",
		"population": 801479,
		"bll": "2%",
		"law": "The government database consists of  lead screening data for 1998 through 2003 for children less than 16 years of age. A child can only be screened once initially, all other tests are confirmatory tests."
  },
	{
		"state": "Hawaii",
		"population": 108613,
		"bll": "No available data",
		"law": "Hawaii’s updated guidelines are based on Medicaid which requires testing of all children with Medicaid coverage."
  },
	{
		"state": "Idaho",
		"population": 138582,
		"bll": "No available data",
		"law": "Blood lead tests are available by request for any person residing in Idaho, however the focus of testing are Idaho Medicaid eligible children."
  },
	{
		"state": "Illinois",
		"population": 956100,
		"bll": "5%",
		"law": "Health care providers are required to perform an annual testing of children from 6 months of age through 6 years of age DETERMINED to be at high risk for lead exposure."
  },
	{
		"state": "Indiana",
		"population": 508625,
		"bll": "5%",
		"law": "Indiana law does not require universal testing of all children under age 7; only children covered by Medicaid are required by federal law."
  },
	{
		"state": "Iowa",
		"population": 237837,
		"bll": "No available data",
		"law": "On July 1, 2008, Iowa required all children entering kindergarten to have at least one lead test."
  },
	{
		"state": "Kansas",
		"population": 239482,
		"bll": "No available data",
		"law": "Not all families in Kansas are required  to have an in-home investigations to identify lead and other healthy homes hazards in the child’s environment."
  },
	{
		"state": "Kentucky",
		"population": 330743,
		"bll": "6%",
		"law": "In Kentucky a child is considered to be lead poisoned at a blood lead level of 20ug/dL or greater, while CDC has determined that a blood lead result of 10ug/dL or greater to be a level of concern."
  },
	{
		"state": "Louisiana",
		"population": 371818,
		"bll": "6%",
		"law": "State of Louisiana received $600,750 in 2018 for childhood lead poisoning prevention programmatic activities from the Centers for Disease Control and Prevention."
  },
	{
		"state": "Maine",
		"population": 79708,
		"bll": "No available data",
		"law": "Maine and federal laws require tests at 1 and 2 years for children covered by MaineCare."
  },
	{
		"state": "Maryland",
		"population": 442431,
		"bll": "2%",
		"law": "A bill passed in Maryland (House Bill 1253) lowered the actionable amount of lead levels in school drinking water from 20 parts per billion to no more than 5 parts per billion."
  },
	{
		"state": "Massachussetts",
		"population": 438438,
		"bll": "3%",
		"law": "Every child must have a lead test before they begin daycare, Kindergarten, or preschool."
  },
	{
		"state": "Michigan",
		"population": 695457,
		"bll": "4%",
		"law": "Under the new standards, employees cannot return to work in Michigan until their blood lead level is below 15 ug/dL"
  },
	{
		"state": "Minnesota",
		"population": 421361,
		"bll": "2%",
		"law": "Lead testing is not universal in Minnesota i.e not all children are tested."
  },
	{
		"state": "Mississippi",
		"population": 233970,
		"bll": "3%",
		"law": "To be added"
  },
	{
		"state": "Missouri",
		"population": 451997,
		"bll": "5%",
		"law": "To be added"
  },
	{
		"state": "Montana",
		"population": 74000,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Nebraska",
		"population": 157168,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Nevada",
		"population": 218224,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "New Hampshire",
		"population": 79493,
		"bll": "6%",
		"law": "To be added"
  },
	{
		"state": "New Jersey",
		"population": 638634,
		"bll": "3%",
		"law": "To be added"
  },
	{
		"state": "New Mexico",
		"population": 162309,
		"bll": "2%",
		"law": "To be added"
  },
	{
		"state": "New York State",
		"population": 1400567,
		"bll": "6%",
		"law": "To be added"
  },
	{
		"state": "North Carolina",
		"population": 734828,
		"bll": "3%",
		"law": "To be added"
  },
	{
		"state": "North Dakota",
		"population": 61031,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Ohio",
		"population": 841179,
		"bll": "5%",
		"law": "To be added"
  },
	{
		"state": "Oklahoma",
		"population": 319550,
		"bll": "3%",
		"law": "To be added"
  },
	{
		"state": "Oregon",
		"population": 280492,
		"bll": "2%",
		"law": "To be added"
  },
	{
		"state": "Pennsylvania",
		"population": 863465,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Rhode Island",
		"population": 66089,
		"bll": "5%",
		"law": "To be added"
  },
	{
		"state": "South Carolina",
		"population": 353117,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "South Dakota",
		"population": 72148,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Tennesse",
		"population": 485409,
		"bll": "2%",
		"law": "To be added"
  },
	{
		"state": "Texas",
		"population": 2373167,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Utah",
		"population": 305875,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Vermont",
		"population": 37040,
		"bll": "8%",
		"law": "To be added"
  },
	{
		"state": "Virginia",
		"population": 614931,
		"bll": "No available data",
		"law": "To be added"
  },
	{
		"state": "Washington",
		"population": 536873,
		"bll": "2%",
		"law": "To be added"
  },
	{
		"state": "West Virginia",
		"population": 122930,
		"bll": "2%",
		"law": "To be added"
  },
	{
		"state": "Wisconsin",
		"population": 413384,
		"bll": "6%",
		"law": "To be added"
  },
	{
		"state": "Wyoming",
		"population": 46017,
		"bll": "No available data",
		"law": "To be added"
  }
];