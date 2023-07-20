import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Input } from "antd";
import { Select, Space, Button } from "antd";
import Statestable from "./Tablepages/Statestable";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

function stateAddButton() {
    return (
        <>
            <Button type="primary">Add</Button>
        </>
    );
}

function selectItem() {
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="--SELECT STATUS--"
                    style={{
                        width: "200px",
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "ACTIVE",
                            label: "ACTIVE",
                        },
                        {
                            value: "INACTIVE",
                            label: "INACTIVE",
                        },
                    ]}
                />
            </Space>
        </>
    );
}

function selectCountry() {
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="--SELECT COUNTRY--"
                    style={{
                        width: "200px",
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "INDIA",
                            label: "INDIA",
                        },
                        {
                            value: "UAE",
                            label: "UAE",
                        },
                        {
                            value: "USA",
                            label: "USA",
                        },
                        {
                            value: "UK",
                            label: "UK",
                        },
                        {
                            value: "Afghanistan",
                            label: "Afghanistan",
                        },
                        {
                            value: "Aland Islands",
                            label: "Aland Islands",
                        },
                        {
                            value: "Albania",
                            label: "Albania",
                        },
                        {
                            value: "Algeria",
                            label: "Algeria",
                        },
                        {
                            value: "AmericanSamoa",
                            label: "AmericanSamoa",
                        },
                        {
                            value: "Andorra",
                            label: "Andorra",
                        },
                        {
                            value: "Angola",
                            label: "Angola",
                        },
                        {
                            value: "Anguilla",
                            label: "Anguilla",
                        },
                        {
                            value: "Antarctica",
                            label: "Antarctica",
                        },
                        {
                            value: "Antigua And Barbuda",
                            label: "Antigua And Barbuda",
                        },
                        {
                            value: "Argentina",
                            label: "Argentina",
                        },
                        {
                            value: "Armenia",
                            label: "Armenia",
                        },
                        {
                            value: "Aruba",
                            label: "Aruba",
                        },
                        {
                            value: "Australia",
                            label: "Australia",
                        },
                        {
                            value: "Austria",
                            label: "Austria",
                        },
                        {
                            value: "Azerbaijan",
                            label: "Azerbaijan",
                        },
                        {
                            value: "Bangladesh",
                            label: "Bangladesh",
                        },
                        {
                            value: "Bahrain",
                            label: "Bahrain",
                        },
                        {
                            value: "Bahamas",
                            label: "Bahamas",
                        },
                        {
                            value: "Barbados",
                            label: "Barbados",
                        },
                        {
                            value: "Belarus",
                            label: "Belarus",
                        },
                        {
                            value: "Belgium",
                            label: "Belgium",
                        },
                        {
                            value: "Belize",
                            label: "Belize",
                        },
                        {
                            value: "Benin",
                            label: "Benin",
                        },
                        {
                            value: "Bermuda",
                            label: "Bermuda",
                        },
                        {
                            value: "Bhutan",
                            label: "Bhutan",
                        },
                        {
                            value: "Bolivia",
                            label: "Bolivia",
                        },
                        {
                            value: "Bosnia and Herzegovina",
                            label: "Bosnia and Herzegovina",
                        },
                        {
                            value: "Bouvet Island",
                            label: "Bouvet Island",
                        },
                        {
                            value: "Brazil",
                            label: "Brazil",
                        },
                        {
                            value: "British Indian Ocean Territory",
                            label: "British Indian Ocean Territory",
                        },
                        {
                            value: "Brunei",
                            label: "Brunei",
                        },
                        {
                            value: "Bulgaria",
                            label: "Bulgaria",
                        },
                        {
                            value: "Burkina Faso",
                            label: "Burkina Faso",
                        },
                        {
                            value: "Burundi",
                            label: "Burundi",
                        },
                        {
                            value: "Cambodia",
                            label: "Cambodia",
                        },
                        {
                            value: "Cameroon",
                            label: "Cameroon",
                        },
                        {
                            value: "Canada",
                            label: "Canada",
                        },
                        {
                            value: "Cape Verde",
                            label: "Cape Verde",
                        },
                        {
                            value: "Cayman Islands",
                            label: "Cayman Islands",
                        },
                        {
                            value: "Central African Republic",
                            label: "Central African Republic",
                        },
                        {
                            value: "Chad",
                            label: "Chad",
                        },
                        {
                            value: "Chile",
                            label: "Chile",
                        },
                        {
                            value: "China",
                            label: "China",
                        },
                        {
                            value: "Christmas Island",
                            label: "Christmas Island",
                        },
                        {
                            value: "Cocos Keeling Islands",
                            label: "Cocos Keeling Islands",
                        },
                        {
                            value: "Colombia",
                            label: "Colombia",
                        },
                        {
                            value: "Comoros",
                            label: "Comoros",
                        },
                        {
                            value: "Congo",
                            label: "Congo",
                        },
                        {
                            value: "Congo, the Democratic Republic of the Congo",
                            label: "Congo, the Democratic Republic of the Congo",
                        },
                        {
                            value: "Cook Islands",
                            label: "Cook Islands",
                        },
                        {
                            value: "Costa Rica",
                            label: "Costa Rica",
                        },
                        {
                            value: "CÃ´te D'Ivoire",
                            label: "CÃ´te D'Ivoire",
                        },
                        {
                            value: "Croatia Hrvatska",
                            label: "Croatia Hrvatska",
                        },
                        {
                            value: "Cuba",
                            label: "Cyprus",
                        },
                        {
                            value: "Cyprus",
                            label: "Cyprus",
                        },
                        {
                            value: "Denmark",
                            label: "Denmark",
                        },
                        {
                            value: "Djibouti",
                            label: "Djibouti",
                        },
                        {
                            value: "Dominica",
                            label: "Dominica",
                        },
                        {
                            value: "Dominican Republic",
                            label: "Dominican Republic",
                        },
                        {
                            value: "East Timor",
                            label: "East Timor",
                        },
                        {
                            value: "Ecuador",
                            label: "Ecuador",
                        },
                        {
                            value: "Egypt",
                            label: "Egypt",
                        },
                        {
                            value: "El Salvador",
                            label: "El Salvador",
                        },
                        {
                            value: "Equatorial Guinea",
                            label: "Equatorial Guinea",
                        },
                        {
                            value: "Eritrea",
                            label: "Eritrea",
                        },
                        {
                            value: "Estonia",
                            label: "Estonia",
                        },
                        {
                            value: "Ethiopia",
                            label: "Ethiopia",
                        },
                        {
                            value: "Falkland Islands",
                            label: "Falkland Islands",
                        },
                        {
                            value: "Faroe Islands",
                            label: "Faroe Islands",
                        },
                        {
                            value: "Fiji Islands",
                            label: "Fiji Islands",
                        },
                        {
                            value: "Finland",
                            label: "Finland",
                        },
                        {
                            value: "France",
                            label: "France",
                        },
                        {
                            value: "French Guiana",
                            label: "French Guiana",
                        },
                        {
                            value: "French Polynesia",
                            label: "French Polynesia",
                        },
                        {
                            value: "French Southern Territories",
                            label: "French Southern Territories",
                        },
                        {
                            value: "Gabon",
                            label: "Gabon",
                        },
                        {
                            value: "Gambia, The",
                            label: "Gambia, The",
                        },
                        {
                            value: "Georgia",
                            label: "Georgia",
                        },
                        {
                            value: "Germany",
                            label: "Germany",
                        },
                        {
                            value: "Ghana",
                            label: "Ghana",
                        },
                        {
                            value: "Gibraltar",
                            label: "Gibraltar",
                        },
                        {
                            value: "Greece",
                            label: "Greece",
                        },
                        {
                            value: "Greenland",
                            label: "Greenland",
                        },
                        {
                            value: "Grenada",
                            label: "Grenada",
                        },
                        {
                            value: "Guadeloupe",
                            label: "Guadeloupe",
                        },
                        {
                            value: "Guam",
                            label: "Guam",
                        },
                        {
                            value: "Guatemala",
                            label: "Guatemala",
                        },
                        {
                            value: "Guernsey",
                            label: "Guernsey",
                        },
                        {
                            value: "Guinea",
                            label: "Guinea",
                        },
                        {
                            value: "Guinea-Bissau",
                            label: "Guinea-Bissau",
                        },
                        {
                            value: "Guyana",
                            label: "Guyana",
                        },
                        {
                            value: "Haiti",
                            label: "Haiti",
                        },
                        {
                            value: "Heard and McDonald Islands",
                            label: "Heard and McDonald Islands",
                        },
                        {
                            value: "Holy See (Vatican City State)",
                            label: "Holy See (Vatican City State)",
                        },
                        {
                            value: "Honduras",
                            label: "Honduras",
                        },
                        {
                            value: "Hong Kong S.A.R.",
                            label: "Hong Kong S.A.R.",
                        },
                        {
                            value: "Hungary",
                            label: "Hungary",
                        },
                        {
                            value: "Iceland",
                            label: "Iceland",
                        },
                        {
                            value: "Indonesia",
                            label: "Indonesia",
                        },
                        {
                            value: "Iran",
                            label: "Iran",
                        },
                        {
                            value: "Iraq",
                            label: "Iraq",
                        },
                        {
                            value: "Ireland",
                            label: "Ireland",
                        },
                        {
                            value: "Isle of Man",
                            label: "Isle of Man",
                        },
                        {
                            value: "Israel",
                            label: "Israel",
                        },
                        {
                            value: "Italy",
                            label: "Italy",
                        },
                        {
                            value: "Japan",
                            label: "Japan",
                        },
                        {
                            value: "Jersey",
                            label: "Jersey",
                        },
                        {
                            value: "Jordan",
                            label: "Jordan",
                        },
                        {
                            value: "Kazakhstan",
                            label: "Kazakhstan",
                        },
                        {
                            value: "Kenya",
                            label: "Kenya",
                        },
                        {
                            value: "Kiribati",
                            label: "Kiribati",
                        },
                        {
                            value: "Korea, North",
                            label: "Korea, North",
                        },
                        {
                            value: "Korea",
                            label: "Korea",
                        },
                        {
                            value: "Kuwait",
                            label: "Kuwait",
                        },
                        {
                            value: "Kyrgyzstan",
                            label: "Kyrgyzstan",
                        },
                        {
                            value: "Laos",
                            label: "Laos",
                        },
                        {
                            value: "Latvia",
                            label: "Latvia",
                        },
                        {
                            value: "Lebanon",
                            label: "Lebanon",
                        },
                        {
                            value: "Lesotho",
                            label: "Lesotho",
                        },
                        {
                            value: "Liberia",
                            label: "Liberia",
                        },
                        {
                            value: "Libya",
                            label: "Libya",
                        },
                        {
                            value: "Liechtenstein",
                            label: "Liechtenstein",
                        },
                        {
                            value: "Lithuania",
                            label: "Lithuania",
                        },
                        {
                            value: "Luxembourg",
                            label: "Luxembourg",
                        },
                        {
                            value: "Macau S.A.R.",
                            label: "Macau S.A.R.",
                        },
                        {
                            value: "Macedonia",
                            label: "Macedonia",
                        },
                        {
                            value: "Madagascar",
                            label: "Madagascar",
                        },
                        {
                            value: "Malawi",
                            label: "Malawi",
                        },
                        {
                            value: "Malaysia",
                            label: "Malaysia",
                        },
                        {
                            value: "Maldives",
                            label: "Maldives",
                        },
                        {
                            value: "Mali",
                            label: "Mali",
                        },
                        {
                            value: "Malta",
                            label: "Malta",
                        },
                        {
                            value: "Marshall Islands",
                            label: "Marshall Islands",
                        },
                        {
                            value: "Martinique",
                            label: "Martinique",
                        },
                        {
                            value: "Mauritania",
                            label: "Mauritania",
                        },
                        {
                            value: "Mauritius",
                            label: "Mauritius",
                        },
                        {
                            value: "Mayotte",
                            label: "Mayotte",
                        },
                        {
                            value: "Mexico",
                            label: "Mexico",
                        },
                        {
                            value: "Micronesia",
                            label: "Micronesia",
                        },
                        {
                            value: "Moldova",
                            label: "Moldova",
                        },
                        {
                            value: "Monaco",
                            label: "Monaco",
                        },
                        {
                            value: "Mongolia",
                            label: "Mongolia",
                        },
                        {
                            value: "Montenegro",
                            label: "Montenegro",
                        },
                        {
                            value: "Montserrat",
                            label: "Montserrat",
                        },
                        {
                            value: "Morocco",
                            label: "Morocco",
                        },
                        {
                            value: "Mozambique",
                            label: "Mozambique",
                        },
                        {
                            value: "Myanmar",
                            label: "Myanmar",
                        },
                        {
                            value: "Namibia",
                            label: "Namibia",
                        },
                        {
                            value: "Nauru",
                            label: "Nauru",
                        },
                        {
                            value: "Nepal",
                            label: "Nepal",
                        },
                        {
                            value: "Netherlands Antilles",
                            label: "Netherlands Antilles",
                        },
                        {
                            value: "Netherlands, The",
                            label: "Netherlands, The",
                        },
                        {
                            value: "New Caledonia",
                            label: "New Caledonia",
                        },
                        {
                            value: "Nicaragua",
                            label: "Nicaragua",
                        },
                        {
                            value: "Niger",
                            label: "Niger",
                        },
                        {
                            value: "Nigeria",
                            label: "Nigeria",
                        },
                        {
                            value: "Niue",
                            label: "Niue",
                        },
                        {
                            value: "Norfolk Island",
                            label: "Norfolk Island",
                        },
                        {
                            value: "Northern Mariana Islands",
                            label: "Northern Mariana Islands",
                        },
                        {
                            value: "Norway",
                            label: "Norway",
                        },
                        {
                            value: "Oman",
                            label: "Oman",
                        },
                        {
                            value: "Pakistan",
                            label: "Pakistan",
                        },
                        {
                            value: "Palau",
                            label: "Palau",
                        },
                        {
                            value: "Palestinian Territory, Occupied",
                            label: "Palestinian Territory, Occupied",
                        },
                        {
                            value: "Panama",
                            label: "Panama",
                        },
                        {
                            value: "Papua new Guinea",
                            label: "Papua new Guinea",
                        },
                        {
                            value: "Paraguay",
                            label: "Paraguay",
                        },
                        {
                            value: "Peru",
                            label: "Peru",
                        },
                        {
                            value: "Philippines",
                            label: "Philippines",
                        },
                        {
                            value: "Pitcairn Island",
                            label: "Pitcairn Island",
                        },
                        {
                            value: "Poland",
                            label: "Poland",
                        },
                        {
                            value: "Portugal",
                            label: "Portugal",
                        },
                        {
                            value: "Puerto Rico",
                            label: "Puerto Rico",
                        },
                        {
                            value: "Qatar",
                            label: "Qatar",
                        },
                        {
                            value: "Reunion",
                            label: "Reunion",
                        },
                        {
                            value: "Romania",
                            label: "Romania",
                        },
                        {
                            value: "Russia",
                            label: "Russia",
                        },
                        {
                            value: "Rwanda",
                            label: "Rwanda",
                        },
                        {
                            value: "Saint Barthelemy",
                            label: "Saint Barthelemy",
                        },
                        {
                            value: "Saint Helena",
                            label: "Saint Helena",
                        },
                        {
                            value: "Saint Kitts And Nevis",
                            label: "Saint Kitts And Nevis",
                        },
                        {
                            value: "Saint Lucia",
                            label: "Saint Lucia",
                        },
                        {
                            value: "Saint Martin",
                            label: "Saint Martin",
                        },
                        {
                            value: "Saint Pierre and Miquelon",
                            label: "Saint Pierre and Miquelon",
                        },
                        {
                            value: "Saint Vincent And The Grenadines",
                            label: "Saint Vincent And The Grenadines",
                        },
                        {
                            value: "Samoa",
                            label: "Samoa",
                        },
                        {
                            value: "San Marino",
                            label: "San Marino",
                        },
                        {
                            value: "Sao Tome and Principe",
                            label: "Sao Tome and Principe",
                        },
                        {
                            value: "Saudi Arabia",
                            label: "Saudi Arabia",
                        },
                        {
                            value: "Senegal",
                            label: "Senegal",
                        },
                        {
                            value: "Serbia",
                            label: "Serbia",
                        },
                        {
                            value: "Seychelles",
                            label: "Seychelles",
                        },
                        {
                            value: "Sierra Leone",
                            label: "Sierra Leone",
                        },
                        {
                            value: "Singapore",
                            label: "Singapore",
                        },
                        {
                            value: "Slovakia",
                            label: "Slovakia",
                        },
                        {
                            value: "Slovenia",
                            label: "Slovenia",
                        },
                        {
                            value: "Solomon Islands",
                            label: "Solomon Islands",
                        },
                        {
                            value: "Somalia",
                            label: "Somalia",
                        },
                        {
                            value: "South Africa",
                            label: "South Africa",
                        },
                        {
                            value: "South Georgia",
                            label: "South Georgia",
                        },
                        {
                            value: "Spain",
                            label: "Spain",
                        },
                        {
                            value: "Sri Lanka",
                            label: "Sri Lanka",
                        },
                        {
                            value: "Sudan",
                            label: "Sudan",
                        },
                        {
                            value: "Suriname",
                            label: "Suriname",
                        },
                        {
                            value: "Svalbard And Jan Mayen Islands",
                            label: "Svalbard And Jan Mayen Islands",
                        },
                        {
                            value: "Swaziland",
                            label: "Swaziland",
                        },
                        {
                            value: "Sweden",
                            label: "Sweden",
                        },
                        {
                            value: "Switzerland",
                            label: "Switzerland",
                        },
                        {
                            value: "Syria",
                            label: "Syria",
                        },
                        {
                            value: "Taiwan",
                            label: "Taiwan",
                        },
                        {
                            value: "Tajikistan",
                            label: "Tajikistan",
                        },
                        {
                            value: "Tanzania",
                            label: "Tanzania",
                        },
                        {
                            value: "Thailand",
                            label: "Thailand",
                        },
                        {
                            value: "Timor-Leste",
                            label: "Timor-Leste",
                        },
                        {
                            value: "Togo",
                            label: "Togo",
                        },
                        {
                            value: "Tokelau",
                            label: "Tokelau",
                        },
                        {
                            value: "Tonga",
                            label: "Tonga",
                        },
                        {
                            value: "Trinidad And Tobago",
                            label: "Trinidad And Tobago",
                        },
                        {
                            value: "Tunisia",
                            label: "Tunisia",
                        },
                        {
                            value: "Turkey",
                            label: "Turkey",
                        },
                        {
                            value: "Turkmenistan",
                            label: "Turkmenistan",
                        },
                        {
                            value: "Turks And Caicos Islands",
                            label: "Turks And Caicos Islands",
                        },
                        {
                            value: "Tuvalu",
                            label: "Tuvalu",
                        },
                        {
                            value: "Uganda",
                            label: "Uganda",
                        },
                        {
                            value: "Ukraine",
                            label: "Ukraine",
                        },
                        {
                            value: "United States Minor Outlying Islands",
                            label: "United States Minor Outlying Islands",
                        },
                        {
                            value: "Uruguay",
                            label: "Uruguay",
                        },
                        {
                            value: "Uzbekistan",
                            label: "Uzbekistan",
                        },
                        {
                            value: "Vanuatu",
                            label: "Vanuatu",
                        },
                        {
                            value: "Vatican City State (Holy See)",
                            label: "Vatican City State (Holy See)",
                        },
                        {
                            value: "Venezuela",
                            label: "Venezuela",
                        },
                        {
                            value: "Vietnam",
                            label: "Vietnam",
                        },
                        {
                            value: "Virgin Islands (British)",
                            label: "Virgin Islands (British)",
                        },
                        {
                            value: "Virgin Islands (US)",
                            label: "Virgin Islands (US)",
                        },
                        {
                            value: "Wallis And Futuna Islands",
                            label: "Wallis And Futuna Islands",
                        },
                        {
                            value: "Western Sahara",
                            label: "Western Sahara",
                        },
                        {
                            value: "Yemen",
                            label: "Yemen",
                        },
                        {
                            value: "Yugoslavia",
                            label: "Yugoslavia",
                        },
                        {
                            value: "Zambia",
                            label: "Zambia",
                        },
                        {
                            value: "Zimbabwe",
                            label: "Zimbabwe",
                        },
                    ]}
                />
            </Space>
        </>
    );
}

function Managestates(props) {
    return (
        <>
            <Head title="admin-countries" />

            <Card title={`Manage States`}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: "25px",
                        }}
                    >
                        <div style={{ margin: "10px" }}>{selectCountry()}</div>
                        <Input style={{ margin: "10px" }} placeholder="Name" />
                        <Input style={{ margin: "10px" }} placeholder="Order" />
                        <div style={{ margin: "10px" }}>{selectItem()}</div>
                        <div style={{ margin: "10px" }}>{stateAddButton()}</div>
                    </form>
                </div>
                <Statestable />
            </Card>
        </>
    );
}

Managestates.layout = (page) => <AuthenticatedLayout children={page} />;

export default Managestates;
