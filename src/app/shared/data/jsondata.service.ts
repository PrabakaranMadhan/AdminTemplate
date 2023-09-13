import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class JsondataService {
  public districts: any = [
    {
      id: "1",
      district_code: "3303",
      district_name: "KANCHEEPURAM",
    },
    {
      id: "2",
      district_code: "3301",
      district_name: "TIRUVALLUR",
    },
    {
      id: "3",
      district_code: "3318",
      district_name: "CUDDALORE",
    },
    {
      id: "4",
      district_code: "3307",
      district_name: "VILLUPURAM",
    },
    {
      id: "5",
      district_code: "3304",
      district_name: "VELLORE",
    },
    {
      id: "6",
      district_code: "3306",
      district_name: "TIRUVANNAMALAI",
    },
    {
      id: "7",
      district_code: "3308",
      district_name: "SALEM",
    },
    {
      id: "8",
      district_code: "3309",
      district_name: "NAMAKKAL",
    },
    {
      id: "9",
      district_code: "3305",
      district_name: "DHARMAPURI",
    },
    {
      id: "10",
      district_code: "3310",
      district_name: "ERODE",
    },
    {
      id: "11",
      district_code: "3312",
      district_name: "COIMBATORE",
    },
    {
      id: "12",
      district_code: "3311",
      district_name: "THE NILGIRIS",
    },
    {
      id: "13",
      district_code: "3321",
      district_name: "THANJAVUR",
    },
    {
      id: "14",
      district_code: "3319",
      district_name: "NAGAPATTINAM",
    },
    {
      id: "15",
      district_code: "3320",
      district_name: "TIRUVARUR",
    },
    {
      id: "16",
      district_code: "3315",
      district_name: "TIRUCHIRAPPALLI",
    },
    {
      id: "17",
      district_code: "3314",
      district_name: "KARUR",
    },
    {
      id: "18",
      district_code: "3316",
      district_name: "PERAMBALUR",
    },
    {
      id: "19",
      district_code: "3322",
      district_name: "PUDUKKOTTAI",
    },
    {
      id: "20",
      district_code: "3324",
      district_name: "MADURAI",
    },
    {
      id: "21",
      district_code: "3325",
      district_name: "THENI",
    },
    {
      id: "22",
      district_code: "3313",
      district_name: "DINDIGUL",
    },
    {
      id: "23",
      district_code: "3327",
      district_name: "RAMANATHAPURAM",
    },
    {
      id: "24",
      district_code: "3326",
      district_name: "VIRUDHUNAGAR",
    },
    {
      id: "25",
      district_code: "3323",
      district_name: "SIVAGANGAI",
    },
    {
      id: "26",
      district_code: "3329",
      district_name: "TIRUNELVELI",
    },
    {
      id: "27",
      district_code: "3328",
      district_name: "THOOTHUKKUDI",
    },
    {
      id: "28",
      district_code: "3330",
      district_name: "KANNIYAKUMARI",
    },
    {
      id: "29",
      district_code: "3302",
      district_name: "CHENNAI",
    },
    {
      id: "30",
      district_code: "3331",
      district_name: "KRISHNAGIRI",
    },
    {
      id: "31",
      district_code: "3332",
      district_name: "ARIYALUR",
    },
    {
      id: "32",
      district_code: "3333",
      district_name: "TIRUPPUR",
    },
    {
      id: "33",
      district_code: "3336",
      district_name: "CHENGALPATTU",
    },
    {
      id: "34",
      district_code: "3337",
      district_name: "TIRUPATHUR",
    },
    {
      id: "35",
      district_code: "3338",
      district_name: "RANIPET",
    },
    {
      id: "36",
      district_code: "3335",
      district_name: "TENKASI",
    },
    {
      id: "37",
      district_code: "3334",
      district_name: "KALLAKURICHI",
    },
    {
      id: "38",
      district_code: "3339",
      district_name: "MAYILADUTHURAI",
    },
  ];
 
  public states: any = [
    {
      abbreviation: "AN",
      name: "Andaman and Nicobar Islands",
    },
    {
      abbreviation: "AP",
      name: "Andhra Pradesh",
    },
    {
      abbreviation: "AR",
      name: "Arunachal Pradesh",
    },
    {
      abbreviation: "AS",
      name: "Assam",
    },
    {
      abbreviation: "BR",
      name: "Bihar",
    },
    {
      abbreviation: "CG",
      name: "Chandigarh",
    },
    {
      abbreviation: "CH",
      name: "Chhattisgarh",
    },
    {
      abbreviation: "DH",
      name: "Dadra and Nagar Haveli",
    },
    {
      abbreviation: "DD",
      name: "Daman and Diu",
    },
    {
      abbreviation: "DL",
      name: "Delhi",
    },
    {
      abbreviation: "GA",
      name: "Goa",
    },
    {
      abbreviation: "GJ",
      name: "Gujarat",
    },
    {
      abbreviation: "HR",
      name: "Haryana",
    },
    {
      abbreviation: "HP",
      name: "Himachal Pradesh",
    },
    {
      abbreviation: "JK",
      name: "Jammu and Kashmir",
    },
    {
      abbreviation: "JH",
      name: "Jharkhand",
    },
    {
      abbreviation: "KA",
      name: "Karnataka",
    },
    {
      abbreviation: "KL",
      name: "Kerala",
    },
    {
      abbreviation: "LD",
      name: "Lakshadweep",
    },
    {
      abbreviation: "MP",
      name: "Madhya Pradesh",
    },
    {
      abbreviation: "MH",
      name: "Maharashtra",
    },
    {
      abbreviation: "MN",
      name: "Manipur",
    },
    {
      abbreviation: "ML",
      name: "Meghalaya",
    },
    {
      abbreviation: "MZ",
      name: "Mizoram",
    },
    {
      abbreviation: "NL",
      name: "Nagaland",
    },
    {
      abbreviation: "OR",
      name: "Odisha",
    },
    {
      abbreviation: "PY",
      name: "Puducherry",
    },
    {
      abbreviation: "PB",
      name: "Punjab",
    },
    {
      abbreviation: "RJ",
      name: "Rajasthan",
    },
    {
      abbreviation: "SK",
      name: "Sikkim",
    },
    {
      abbreviation: "TN",
      name: "Tamil Nadu",
    },
    {
      abbreviation: "TS",
      name: "Telangana",
    },
    {
      abbreviation: "TR",
      name: "Tripura",
    },
    {
      abbreviation: "UP",
      name: "Uttar Pradesh",
    },
    {
      abbreviation: "UK",
      name: "Uttarakhand",
    },
    {
      abbreviation: "WB",
      name: "West Bengal",
    },
  ];

  public country: any = [
    { name: "Afghanistan", code: "AF" },
    { name: "Åland Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, The Democratic Republic of the", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Cote D'Ivoire", code: "CI" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands (Malvinas)", code: "FK" },
    { name: "Faroe Islands", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard Island and Mcdonald Islands", code: "HM" },
    { name: "Holy See (Vatican City State)", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran, Islamic Republic Of", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, Democratic People'S Republic of", code: "KP" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Lao People'S Democratic Republic", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia, Federated States of", code: "FM" },
    { name: "Moldova, Republic of", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Netherlands Antilles", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "RWANDA", code: "RW" },
    { name: "Saint Helena", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia and Montenegro", code: "CS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Swaziland", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "United States Minor Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ];
}
