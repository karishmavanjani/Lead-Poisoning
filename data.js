let result;
//take the var data and its
let data = [
	{
		"state": "Alabama",
		"population": 353913,
		"bll": "2%",
		"law": "Alabama requires the state Health Department to test all children between the ages 1 and 2 for lead presence in blood"
    },
	{
		"state": "Alaska",
		"population": 64894,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Arizona",
		"population": 526368,
		"bll": "1%",
		"law": "To be added"
    },
	{
		"state": "Arkansas",
		"population": 231143,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "California",
		"population": 3007336,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Colorado",
		"population": 406560,
		"bll": "3%",
		"law": "To be added"
    },
	{
		"state": "Connecticut",
		"population": 230924,
		"bll": "5%",
		"law": "To be added"
    },
	{
		"state": "Delaware",
		"population": 66924,
		"bll": "2%",
		"law": "To be added"
    },
	{
		"state": "District of Columbia",
		"population": 48440,
		"bll": "1%",
		"law": "To be added"
    },
	{
		"state": "Florida",
		"population": 1317573,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Georgia",
		"population": 801479,
		"bll": "2%",
		"law": "To be added"
    },
	{
		"state": "Hawaii",
		"population": 108613,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Idaho",
		"population": 138582,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Illinois",
		"population": 956100,
		"bll": "5%",
		"law": "To be added"
    },
	{
		"state": "Indiana",
		"population": 508625,
		"bll": "5%",
		"law": "To be added"
    },
	{
		"state": "Iowa",
		"population": 237837,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Kansas",
		"population": 239482,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Kentucky",
		"population": 330743,
		"bll": "6%",
		"law": "To be added"
    },
	{
		"state": "Louisiana",
		"population": 371818,
		"bll": "6%",
		"law": "To be added"
    },
	{
		"state": "Maine",
		"population": 79708,
		"bll": "No available data",
		"law": "To be added"
    },
	{
		"state": "Maryland",
		"population": 442431,
		"bll": "2%",
		"law": "To be added"
    },
	{
		"state": "Massachussetts",
		"population": 438438,
		"bll": "3%",
		"law": "To be added"
    },
	{
		"state": "Michigan",
		"population": 695457,
		"bll": "4%",
		"law": "To be added"
    },
	{
		"state": "Minnesota",
		"population": 421361,
		"bll": "2%",
		"law": "To be added"
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