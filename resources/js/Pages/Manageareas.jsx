import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Card, Input } from "antd";
import { Select, Space, Button } from "antd";
import Areatable from "./Tablepages/Areatable";

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

function selectArea() {
    return (
        <>
            <Space wrap>
                <Select
                    defaultValue="--SELECT DISTRICT--"
                    style={{
                        width: "200px",
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: "Srikakulam",
                            label: "Srikakulam",
                        },
                        {
                            value: "Srikakulam",
                            label: "Srikakulam",
                        },
                        {
                            value: "Visakhapatnam",
                            label: "Visakhapatnam",
                        },
                        {
                            value: "Prakasam",
                            label: "Prakasam",
                        },
                        {
                            value: "Nellore",
                            label: "Nellore",
                        },
                        {
                            value: "Kurnool",
                            label: "Kurnool",
                        },
                        {
                            value: "Krishna",
                            label: "Krishna",
                        },
                        {
                            value: "Kadapa",
                            label: "Kadapa",
                        },
                        {
                            value: "Guntur",
                            label: "Guntur",
                        },
                        {
                            value: "East Godavari",
                            label: "East Godavari",
                        },
                        {
                            value: "Chittoor",
                            label: "Chittoor",
                        },
                        {
                            value: "Anantapur",
                            label: "Anantapur",
                        },
                        {
                            value: "West GodavariTirupati",
                            label: "West GodavariTirupati",
                        },
                        {
                            value: "Tirupati",
                            label: "Tirupati",
                        },
                        {
                            value: "Annamayya",
                            label: "Annamayya",
                        },
                        {
                            value: "Sri Sathya Sai",
                            label: "Sri Sathya Sai",
                        },
                        {
                            value: "Nandyal",
                            label: "Nandyal",
                        },
                        {
                            value: "Bapatla",
                            label: "Bapatla",
                        },
                        {
                            value: "Palnadu",
                            label: "Palnadu",
                        },
                        {
                            value: "NTR",
                            label: "NTR",
                        },
                        {
                            value: "Eluru",
                            label: "Eluru",
                        },
                        {
                            value: "Dr. B.R. Ambedkar Konaseema",
                            label: "Dr. B.R. Ambedkar Konaseema",
                        },
                        {
                            value: "Kakinada",
                            label: "Kakinada",
                        },
                        {
                            value: "Anakapalli",
                            label: "Anakapalli",
                        },
                        {
                            value: "Alluri Sitharama Raju",
                            label: "Alluri Sitharama Raju",
                        },
                        {
                            value: "Parvathipuram Manyam",
                            label: "Parvathipuram Manyam",
                        },
                        {
                            value: "Jayashankar",
                            label: "Jayashankar",
                        },
                        {
                            value: "Jangaon",
                            label: "Jangaon",
                        },
                        {
                            value: "Jagtial",
                            label: "Jagtial",
                        },
                        {
                            value: "Hyderabad",
                            label: "Hyderabad",
                        },
                        {
                            value: "Wanaparthy",
                            label: "Wanaparthy",
                        },
                        {
                            value: "Warangal Rural",
                            label: "Warangal Rural",
                        },
                        {
                            value: "Warangal Urban",
                            label: "Warangal Urban",
                        },
                        {
                            value: "Yadadri Bhuvanagiri",
                            label: "Yadadri Bhuvanagiri",
                        },
                        {
                            value: "Vikarabad",
                            label: "Vikarabad",
                        },
                        {
                            value: "Adilabad",
                            label: "Adilabad",
                        },
                        {
                            value: "Kamareddy",
                            label: "Kamareddy",
                        },
                        {
                            value: "Bhadradri Kothagudem",
                            label: "Bhadradri Kothagudem",
                        },
                        {
                            value: "Karimnagar",
                            label: "Karimnagar",
                        },
                        {
                            value: "Nirmal",
                            label: "Nirmal",
                        },
                        {
                            value: "Jogulamba",
                            label: "Jogulamba",
                        },
                        {
                            value: "Nizamabad",
                            label: "Nizamabad",
                        },
                        {
                            value: "Peddapalli",
                            label: "Peddapalli",
                        },
                        {
                            value: "Rajanna Sircilla",
                            label: "Rajanna Sircilla",
                        },
                        {
                            value: "Ranga Reddy",
                            label: "Ranga Reddy",
                        },
                        {
                            value: "Sangareddy",
                            label: "Sangareddy",
                        },
                        {
                            value: "Narayanpet",
                            label: "Narayanpet",
                        },
                        {
                            value: "Suryapet",
                            label: "Suryapet",
                        },
                        {
                            value: "Siddipet",
                            label: "Siddipet",
                        },
                        {
                            value: "Nalgonda",
                            label: "Nalgonda",
                        },
                        {
                            value: "Nagarkurnool",
                            label: "Nagarkurnool",
                        },
                        {
                            value: "Komaram Bheem",
                            label: "Komaram Bheem",
                        },
                        {
                            value: "Mahabubabad",
                            label: "Mahabubabad",
                        },
                        {
                            value: "Mahbubnagar",
                            label: "Mahbubnagar",
                        },
                        {
                            value: "Mancherial",
                            label: "Mancherial",
                        },
                        {
                            value: "Medak",
                            label: "Medak",
                        },
                        {
                            value: "Medchal",
                            label: "Medchal",
                        },
                        {
                            value: "Mulugu",
                            label: "Mulugu",
                        },
                        {
                            value: "Khammam",
                            label: "Khammam",
                        },
                        {
                            value: "Perambalur",
                            label: "Perambalur",
                        },
                        {
                            value: "Karur",
                            label: "Karur",
                        },
                        {
                            value: "Krishnagiri",
                            label: "Krishnagiri",
                        },
                        {
                            value: "Madurai",
                            label: "Madurai",
                        },
                        {
                            value: "Nagapattinam",
                            label: "Nagapattinam",
                        },
                        {
                            value: "Namakkal",
                            label: "Namakkal",
                        },
                        {
                            value: "Kanchipuram",
                            label: "Kanchipuram",
                        },
                        {
                            value: "Kallakurichi",
                            label: "Kallakurichi",
                        },
                        {
                            value: "Ariyalur",
                            label: "Ariyalur",
                        },
                        {
                            value: "Chengalpattu",
                            label: "Chengalpattu",
                        },
                        {
                            value: "Nilgiris",
                            label: "Nilgiris",
                        },
                        {
                            value: "Chennai",
                            label: "Chennai",
                        },
                        {
                            value: "Coimbatore",
                            label: "Coimbatore",
                        },
                        {
                            value: "Dharmapuri",
                            label: "Dharmapuri",
                        },
                        {
                            value: "Dindigul",
                            label: "Dindigul",
                        },
                        {
                            value: "Erode",
                            label: "Erode",
                        },
                        {
                            value: "Pudukkottai",
                            label: "Pudukkottai",
                        },
                        {
                            value: "Ramanathapuram",
                            label: "Ramanathapuram",
                        },
                        {
                            value: "Tiruppur",
                            label: "Tiruppur",
                        },
                        {
                            value: "Tiruppur",
                            label: "Tiruppur",
                        },
                        {
                            value: "Tiruvallur",
                            label: "Tiruvallur",
                        },
                        {
                            value: "Tiruvannamalai",
                            label: "Tiruvannamalai",
                        },
                        {
                            value: "Tiruvarur",
                            label: "Tiruvarur",
                        },
                        {
                            value: "Viluppuram",
                            label: "Viluppuram",
                        },
                        {
                            value: "Virudhunagar",
                            label: "Virudhunagar",
                        },
                        {
                            value: "Vellore",
                            label: "Vellore",
                        },
                        {
                            value: "Cuddalore",
                            label: "Cuddalore",
                        },
                        {
                            value: "Tirupattur",
                            label: "Tirupattur",
                        },
                        {
                            value: "Tirunelveli",
                            label: "Tirunelveli",
                        },
                        {
                            value: "Tiruchirappalli",
                            label: "Tiruchirappalli",
                        },
                        {
                            value: "Ranipet",
                            label: "Ranipet",
                        },
                        {
                            value: "Salem",
                            label: "Salem",
                        },
                        {
                            value: "Sivaganga",
                            label: "Sivaganga",
                        },
                        {
                            value: "Tenkasi ",
                            label: "Tenkasi ",
                        },
                        {
                            value: "Thanjavur",
                            label: "Thanjavur",
                        },
                        {
                            value: "Theni",
                            label: "Theni",
                        },
                        {
                            value: "Kanyakumari",
                            label: "Kanyakumari",
                        },
                        {
                            value: "Thoothukudi",
                            label: "Thoothukudi",
                        },
                        {
                            value: "Yadgir",
                            label: "Yadgir",
                        },
                        {
                            value: "Vijayapura",
                            label: "Vijayapura",
                        },
                        {
                            value: "Uttara Kannada",
                            label: "Uttara Kannada",
                        },
                        {
                            value: "Udupi",
                            label: "Udupi",
                        },
                        {
                            value: "Bellary",
                            label: "Bellary",
                        },
                        {
                            value: "Bidar",
                            label: "Bidar",
                        },
                        {
                            value: "Chamarajanagar",
                            label: "Chamarajanagar",
                        },
                        {
                            value: "Chikkaballapur",
                            label: "Chikkaballapur",
                        },
                        {
                            value: "Chikkamagaluru",
                            label: "Chikkamagaluru",
                        },
                        {
                            value: "Chitradurga",
                            label: "Chitradurga",
                        },
                        {
                            value: "Dakshina Kannada",
                            label: "Dakshina Kannada",
                        },
                        {
                            value: "Davanagere",
                            label: "Davanagere",
                        },
                        {
                            value: "Dharwad",
                            label: "Dharwad",
                        },
                        {
                            value: "Gadag",
                            label: "Gadag",
                        },
                        {
                            value: "Gulbarga",
                            label: "Gulbarga",
                        },
                        {
                            value: "Hassan",
                            label: "Hassan",
                        },
                        {
                            value: "Belgaum",
                            label: "Belgaum",
                        },
                        {
                            value: "Bangalore Urban",
                            label: "Bangalore Urban",
                        },
                        {
                            value: "Shimoga",
                            label: "Shimoga",
                        },
                        {
                            value: "Ramanagara",
                            label: "Ramanagara",
                        },
                        {
                            value: "Raichur",
                            label: "Raichur",
                        },
                        {
                            value: "Mysore",
                            label: "Mysore",
                        },
                        {
                            value: "Mandya",
                            label: "Mandya",
                        },
                        {
                            value: "Koppal",
                            label: "Koppal",
                        },
                        {
                            value: "Kolar",
                            label: "Kolar",
                        },
                        {
                            value: "Kodagu",
                            label: "Kodagu",
                        },
                        {
                            value: "Haveri",
                            label: "Haveri",
                        },
                        {
                            value: "Bagalkot",
                            label: "Bagalkot",
                        },
                        {
                            value: "Bangalore Rural",
                            label: "Bangalore Rural",
                        },
                        {
                            value: "Tumkur",
                            label: "Tumkur",
                        },
                        {
                            value: "Anjaw",
                            label: "Anjaw",
                        },
                        {
                            value: "Central Siang",
                            label: "Central Siang",
                        },
                        {
                            value: "Changlang",
                            label: "Changlang",
                        },
                        {
                            value: "Dibang Valley",
                            label: "Dibang Valley",
                        },
                        {
                            value: "East Kameng",
                            label: "East Kameng",
                        },
                        {
                            value: "East Siang",
                            label: "East Siang",
                        },
                        {
                            value: "Kamle",
                            label: "Kamle",
                        },
                        {
                            value: "Kra Daadi",
                            label: "Kra Daadi",
                        },
                        {
                            value: "Kurung Kumey",
                            label: "Kurung Kumey",
                        },
                        {
                            value: "Lepa Rada",
                            label: "Lepa Rada",
                        },
                        {
                            value: "Lohit",
                            label: "Lohit",
                        },
                        {
                            value: "Longding",
                            label: "Longding",
                        },
                        {
                            value: "Lower Dibang Valley",
                            label: "Lower Dibang Valley",
                        },
                        {
                            value: "Lower Siang",
                            label: "Lower Siang",
                        },
                        {
                            value: "Lower Subansiri",
                            label: "Lower Subansiri",
                        },
                        {
                            value: "Namsai",
                            label: "Namsai",
                        },
                        {
                            value: "Pakke Kessang",
                            label: "Pakke Kessang",
                        },
                        {
                            value: "Papum Pare",
                            label: "Papum Pare",
                        },
                        {
                            value: "Shi Yomi",
                            label: "Shi Yomi",
                        },
                        {
                            value: "Tawang",
                            label: "Tawang",
                        },
                        {
                            value: "Tirap",
                            label: "Tirap",
                        },
                        {
                            value: "Upper Siang",
                            label: "Upper Siang",
                        },
                        {
                            value: "Upper Subansiri",
                            label: "Upper Subansiri",
                        },
                        {
                            value: "West Kameng",
                            label: "West Kameng",
                        },
                        {
                            value: "West Siang",
                            label: "West Siang",
                        },
                        {
                            value: "Baksa",
                            label: "Baksa",
                        },
                        {
                            value: "Barpeta",
                            label: "Barpeta",
                        },
                        {
                            value: "Biswanath",
                            label: "Biswanath",
                        },
                        {
                            value: "Bongaigaon",
                            label: "Bongaigaon",
                        },
                        {
                            value: "Cachar",
                            label: "Cachar",
                        },
                        {
                            value: "Charaideo",
                            label: "Charaideo",
                        },
                        {
                            value: "Chirang",
                            label: "Chirang",
                        },
                        {
                            value: "Darrang",
                            label: "Darrang",
                        },
                        {
                            value: "Dhemaji",
                            label: "Dhemaji",
                        },
                        {
                            value: "Dhubri",
                            label: "Dhubri",
                        },
                        {
                            value: "Dibrugarh",
                            label: "Dibrugarh",
                        },
                        {
                            value: "Dima Hasao",
                            label: "Dima Hasao",
                        },
                        {
                            value: "Goalpara",
                            label: "Goalpara",
                        },
                        {
                            value: "Golaghat",
                            label: "Golaghat",
                        },
                        {
                            value: "Hailakandi",
                            label: "Hailakandi",
                        },
                        {
                            value: "Hojai",
                            label: "Hojai",
                        },
                        {
                            value: "Jorhat",
                            label: "Jorhat",
                        },
                        {
                            value: "Kamrup",
                            label: "Kamrup",
                        },
                        {
                            value: "Kamrup Metropolitan",
                            label: "Kamrup Metropolitan",
                        },
                        {
                            value: "Karbi Anglong",
                            label: "Karbi Anglong",
                        },
                        {
                            value: "Karimganj",
                            label: "Karimganj",
                        },
                        {
                            value: "Kokrajhar",
                            label: "Kokrajhar",
                        },
                        {
                            value: "Lakhimpur",
                            label: "Lakhimpur",
                        },
                        {
                            value: "Majuli",
                            label: "Majuli",
                        },
                        {
                            value: "Morigaon",
                            label: "Morigaon",
                        },
                        {
                            value: "Nagaon",
                            label: "Nagaon",
                        },
                        {
                            value: "Nalbari",
                            label: "Nalbari",
                        },
                        {
                            value: "Sivasagar",
                            label: "Sivasagar",
                        },
                        {
                            value: "Sonitpur",
                            label: "Sonitpur",
                        },
                        {
                            value: "South Salmara-Mankachar",
                            label: "South Salmara-Mankachar",
                        },
                        {
                            value: "Tinsukia",
                            label: "Tinsukia",
                        },
                        {
                            value: "Udalguri",
                            label: "Udalguri",
                        },
                        {
                            value: "West Karbi Anglong",
                            label: "West Karbi Anglong",
                        },
                        {
                            value: "Araria",
                            label: "Araria",
                        },
                        {
                            value: "Arwal",
                            label: "Arwal",
                        },
                        {
                            value: "Aurangabad",
                            label: "Aurangabad",
                        },
                        {
                            value: "Banka",
                            label: "Banka",
                        },
                        {
                            value: "Begusarai",
                            label: "Begusarai",
                        },
                        {
                            value: "Bhagalpur",
                            label: "Bhagalpur",
                        },
                        {
                            value: "Bhojpur",
                            label: "Bhojpur",
                        },
                        {
                            value: "Buxar",
                            label: "Buxar",
                        },
                        {
                            value: "Darbhanga",
                            label: "Darbhanga",
                        },
                        {
                            value: "East Champaran",
                            label: "East Champaran",
                        },
                        {
                            value: "Gaya",
                            label: "Gaya",
                        },
                        {
                            value: "Gopalganj",
                            label: "Gopalganj",
                        },
                        {
                            value: "Jamui",
                            label: "Jamui",
                        },
                        {
                            value: "Jehanabad",
                            label: "Jehanabad",
                        },
                        {
                            value: "Kaimur",
                            label: "Kaimur",
                        },
                        {
                            value: "Katihar",
                            label: "Katihar",
                        },
                        {
                            value: "Khagaria",
                            label: "Khagaria",
                        },
                        {
                            value: "Kishanganj",
                            label: "Kishanganj",
                        },
                        {
                            value: "Lakhisarai",
                            label: "Lakhisarai",
                        },
                        {
                            value: "Madhepura",
                            label: "Madhepura",
                        },
                        {
                            value: "Madhubani",
                            label: "Madhubani",
                        },
                        {
                            value: "Munger",
                            label: "Munger",
                        },
                        {
                            value: "Muzaffarpur",
                            label: "Muzaffarpur",
                        },
                        {
                            value: "Nalanda",
                            label: "Nalanda",
                        },
                        {
                            value: "Nawada",
                            label: "Nawada",
                        },
                        {
                            value: "Patna",
                            label: "Patna",
                        },
                        {
                            value: "Purnia",
                            label: "Purnia",
                        },
                        {
                            value: "Rohtas",
                            label: "Rohtas",
                        },
                        {
                            value: "Saharsa",
                            label: "Saharsa",
                        },
                        {
                            value: "Samastipur",
                            label: "Samastipur",
                        },
                        {
                            value: "Saran",
                            label: "Saran",
                        },
                        {
                            value: "Sheikhpura",
                            label: "Sheikhpura",
                        },
                        {
                            value: "Sheohar",
                            label: "Sheohar",
                        },
                        {
                            value: "Sitamarhi",
                            label: "Sitamarhi",
                        },
                        {
                            value: "Siwan",
                            label: "Siwan",
                        },
                        {
                            value: "Supaul",
                            label: "Supaul",
                        },
                        {
                            value: "Vaishali",
                            label: "Vaishali",
                        },
                        {
                            value: "West Champaran",
                            label: "West Champaran",
                        },
                        {
                            value: "Balod",
                            label: "Balod",
                        },
                        {
                            value: "Baloda Bazar",
                            label: "Baloda Bazar",
                        },
                        {
                            value: "Balrampur",
                            label: "Balrampur",
                        },
                        {
                            value: "Bastar",
                            label: "Bastar",
                        },
                        {
                            value: "Bemetara",
                            label: "Bemetara",
                        },
                        {
                            value: "Bijapur",
                            label: "Bijapur",
                        },
                        {
                            value: "Bilaspur",
                            label: "Bilaspur",
                        },
                        {
                            value: "Dantewada",
                            label: "Dantewada",
                        },
                        {
                            value: "Dhamtari",
                            label: "Dhamtari",
                        },
                        {
                            value: "Durg",
                            label: "Durg",
                        },
                        {
                            value: "Gariaband",
                            label: "Gariaband",
                        },
                        {
                            value: "Gaurela Pendra Marwahi",
                            label: "Gaurela Pendra Marwahi",
                        },
                        {
                            value: "Janjgir Champa",
                            label: "Janjgir Champa",
                        },
                        {
                            value: "Jashpur",
                            label: "Jashpur",
                        },
                        {
                            value: "Kabirdham",
                            label: "Kabirdham",
                        },
                        {
                            value: "Kanker",
                            label: "Kanker",
                        },
                        {
                            value: "Kondagaon",
                            label: "Kondagaon",
                        },
                        {
                            value: "Korba",
                            label: "Korba",
                        },
                        {
                            value: "Koriya",
                            label: "Koriya",
                        },
                        {
                            value: "Mahasamund",
                            label: "Mahasamund",
                        },
                        {
                            value: "Mungeli",
                            label: "Mungeli",
                        },
                        {
                            value: "Narayanpur",
                            label: "Narayanpur",
                        },
                        {
                            value: "Raigarh",
                            label: "Raigarh",
                        },
                        {
                            value: "Raipur",
                            label: "Raipur",
                        },
                        {
                            value: "Rajnandgaon",
                            label: "Rajnandgaon",
                        },
                        {
                            value: "Sukma",
                            label: "Sukma",
                        },
                        {
                            value: "Surajpur",
                            label: "Surajpur",
                        },
                        {
                            value: "Surguja",
                            label: "Surguja",
                        },
                        {
                            value: "North Goa",
                            label: "North Goa",
                        },
                        {
                            value: "South Goa",
                            label: "South Goa",
                        },
                        {
                            value: "Ahmedabad",
                            label: "Ahmedabad",
                        },
                        {
                            value: "Amreli",
                            label: "Amreli",
                        },
                        {
                            value: "Anand",
                            label: "Anand",
                        },
                        {
                            value: "Aravalli",
                            label: "Aravalli",
                        },
                        {
                            value: "Banaskantha",
                            label: "Banaskantha",
                        },
                        {
                            value: "Bharuch",
                            label: "Bharuch",
                        },
                        {
                            value: "Bhavnagar",
                            label: "Bhavnagar",
                        },
                        {
                            value: "Botad",
                            label: "Botad",
                        },
                        {
                            value: "Chhota Udaipur",
                            label: "Chhota Udaipur",
                        },
                        {
                            value: "Dahod",
                            label: "Dahod",
                        },
                        {
                            value: "Dang",
                            label: "Dang",
                        },
                        {
                            value: "Devbhoomi Dwarka",
                            label: "Devbhoomi Dwarka",
                        },
                        {
                            value: "Gandhinagar",
                            label: "Gandhinagar",
                        },
                        {
                            value: "Gir Somnath",
                            label: "Gir Somnath",
                        },
                        {
                            value: "Jamnagar",
                            label: "Jamnagar",
                        },
                        {
                            value: "Junagadh",
                            label: "Junagadh",
                        },
                        {
                            value: "Kheda",
                            label: "Kheda",
                        },
                        {
                            value: "Kutch",
                            label: "Kutch",
                        },
                        {
                            value: "Mahisagar",
                            label: "Mahisagar",
                        },
                        {
                            value: "Mehsana",
                            label: "Mehsana",
                        },
                        {
                            value: "Morbi",
                            label: "Morbi",
                        },
                        {
                            value: "Narmada",
                            label: "Narmada",
                        },
                        {
                            value: "Navsari",
                            label: "Navsari",
                        },
                        {
                            value: "Panchmahal",
                            label: "Panchmahal",
                        },
                        {
                            value: "Patan",
                            label: "Patan",
                        },
                        {
                            value: "Porbandar",
                            label: "Porbandar",
                        },
                        {
                            value: "Rajkot",
                            label: "Rajkot",
                        },
                        {
                            value: "Sabarkantha",
                            label: "Sabarkantha",
                        },
                        {
                            value: "Surat",
                            label: "Surat",
                        },
                        {
                            value: "Surendranagar",
                            label: "Surendranagar",
                        },
                        {
                            value: "Tapi",
                            label: "Tapi",
                        },
                        {
                            value: "Vadodara",
                            label: "Vadodara",
                        },
                        {
                            value: "Valsad",
                            label: "Valsad",
                        },
                        {
                            value: "Ambala",
                            label: "Ambala",
                        },
                        {
                            value: "Bhiwani",
                            label: "Bhiwani",
                        },
                        {
                            value: "Charkhi Dadri",
                            label: "Charkhi Dadri",
                        },
                        {
                            value: "Faridabad",
                            label: "Faridabad",
                        },
                        {
                            value: "Fatehabad",
                            label: "Fatehabad",
                        },
                        {
                            value: "Gurugram",
                            label: "Gurugram",
                        },
                        {
                            value: "Hisar",
                            label: "Hisar",
                        },
                        {
                            value: "Jhajjar",
                            label: "Jhajjar",
                        },
                        {
                            value: "Jind",
                            label: "Jind",
                        },
                        {
                            value: "Kaithal",
                            label: "Kaithal",
                        },
                        {
                            value: "Karnal",
                            label: "Karnal",
                        },
                        {
                            value: "Kurukshetra",
                            label: "Kurukshetra",
                        },
                        {
                            value: "Mahendragarh",
                            label: "Mahendragarh",
                        },
                        {
                            value: "Mewat",
                            label: "Mewat",
                        },
                        {
                            value: "Palwal",
                            label: "Palwal",
                        },
                        {
                            value: "Panchkula",
                            label: "Panchkula",
                        },
                        {
                            value: "Panipat",
                            label: "Panipat",
                        },
                        {
                            value: "Rewari",
                            label: "Rewari",
                        },
                        {
                            value: "Rohtak",
                            label: "Rohtak",
                        },
                        {
                            value: "Sirsa",
                            label: "Sirsa",
                        },
                        {
                            value: "Sonipat",
                            label: "Sonipat",
                        },
                        {
                            value: "Yamunanagar",
                            label: "Yamunanagar",
                        },
                        {
                            value: "Bilaspur",
                            label: "Bilaspur",
                        },
                        {
                            value: "Chamba",
                            label: "Chamba",
                        },
                        {
                            value: "Hamirpur",
                            label: "Hamirpur",
                        },
                        {
                            value: "Kangra",
                            label: "Kangra",
                        },
                        {
                            value: "Kinnaur",
                            label: "Kinnaur",
                        },
                        {
                            value: "Kullu",
                            label: "Kullu",
                        },
                        {
                            value: "Lahaul Spiti",
                            label: "Lahaul Spiti",
                        },
                        {
                            value: "Mandi",
                            label: "Mandi",
                        },
                        {
                            value: "Shimla",
                            label: "Shimla",
                        },
                        {
                            value: "Sirmaur",
                            label: "Sirmaur",
                        },
                        {
                            value: "Solan",
                            label: "Solan",
                        },
                        {
                            value: "Una",
                            label: "Una",
                        },
                        {
                            value: "Bokaro",
                            label: "Bokaro",
                        },
                        {
                            value: "Chatra",
                            label: "Chatra",
                        },
                        {
                            value: "Deoghar",
                            label: "Deoghar",
                        },
                        {
                            value: "Dhanbad",
                            label: "Dhanbad",
                        },
                        {
                            value: "Dumka",
                            label: "Dumka",
                        },
                        {
                            value: "East Singhbhum",
                            label: "East Singhbhum",
                        },
                        {
                            value: "Garhwa",
                            label: "Garhwa",
                        },
                        {
                            value: "Giridih",
                            label: "Giridih",
                        },
                        {
                            value: "Godda",
                            label: "Godda",
                        },
                        {
                            value: "Gumla",
                            label: "Gumla",
                        },
                        {
                            value: "Hazaribagh",
                            label: "Hazaribagh",
                        },
                        {
                            value: "Jamtara",
                            label: "Jamtara",
                        },
                        {
                            value: "Khunti",
                            label: "Khunti",
                        },
                        {
                            value: "Koderma",
                            label: "Koderma",
                        },
                        {
                            value: "Latehar",
                            label: "Latehar",
                        },
                        {
                            value: "Lohardaga",
                            label: "Lohardaga",
                        },
                        {
                            value: "Pakur",
                            label: "Pakur",
                        },
                        {
                            value: "Palamu",
                            label: "Palamu",
                        },
                        {
                            value: "Ramgarh",
                            label: "Ramgarh",
                        },
                        {
                            value: "Ranchi",
                            label: "Ranchi",
                        },
                        {
                            value: "Sahebganj",
                            label: "Sahebganj",
                        },
                        {
                            value: "Seraikela Kharsawan",
                            label: "Seraikela Kharsawan",
                        },
                        {
                            value: "Simdega",
                            label: "Simdega",
                        },
                        {
                            value: "West Singhbhum",
                            label: "West Singhbhum",
                        },
                        {
                            value: "Alappuzha",
                            label: "Alappuzha",
                        },
                        {
                            value: "Ernakulam",
                            label: "Ernakulam",
                        },
                        {
                            value: "Idukki",
                            label: "Idukki",
                        },
                        {
                            value: "Kannur",
                            label: "Kannur",
                        },
                        {
                            value: "Kasaragod",
                            label: "Kasaragod",
                        },
                        {
                            value: "Kollam",
                            label: "Kollam",
                        },
                        {
                            value: "Kottayam",
                            label: "Kottayam",
                        },
                        {
                            value: "Kozhikode",
                            label: "Kozhikode",
                        },
                        {
                            value: "Malappuram",
                            label: "Malappuram",
                        },
                        {
                            value: "Palakkad",
                            label: "Palakkad",
                        },
                        {
                            value: "Pathanamthitta",
                            label: "Pathanamthitta",
                        },
                        {
                            value: "Thiruvananthapuram",
                            label: "Thiruvananthapuram",
                        },
                        {
                            value: "Thrissur",
                            label: "Thrissur",
                        },
                        {
                            value: "Wayanad",
                            label: "Wayanad",
                        },
                        {
                            value: "Agar Malwa",
                            label: "Agar Malwa",
                        },
                        {
                            value: "Alirajpur",
                            label: "Alirajpur",
                        },
                        {
                            value: "Anuppur",
                            label: "Anuppur",
                        },
                        {
                            value: "Ashoknagar",
                            label: "Ashoknagar",
                        },
                        {
                            value: "Balaghat",
                            label: "Balaghat",
                        },
                        {
                            value: "Barwani",
                            label: "Barwani",
                        },
                        {
                            value: "Betul",
                            label: "Betul",
                        },
                        {
                            value: "Bhind",
                            label: "Bhind",
                        },
                        {
                            value: "Bhopal",
                            label: "Bhopal",
                        },
                        {
                            value: "Burhanpur",
                            label: "Burhanpur",
                        },
                        {
                            value: "Chhatarpur",
                            label: "Chhatarpur",
                        },
                        {
                            value: "Chhindwara",
                            label: "Chhindwara",
                        },
                        {
                            value: "Damoh",
                            label: "Damoh",
                        },
                        {
                            value: "Datia",
                            label: "Datia",
                        },
                        {
                            value: "Dewas",
                            label: "Dewas",
                        },
                        {
                            value: "Dhar",
                            label: "Dhar",
                        },
                        {
                            value: "Dhindori",
                            label: "Dhindori",
                        },
                        {
                            value: "Guna",
                            label: "Guna",
                        },
                        {
                            value: "Gwalior",
                            label: "Gwalior",
                        },
                        {
                            value: "Harda",
                            label: "Harda",
                        },
                        {
                            value: "Hoshangabad",
                            label: "Hoshangabad",
                        },
                        {
                            value: "Indore",
                            label: "Indore",
                        },
                        {
                            value: "Jabalpur",
                            label: "Jabalpur",
                        },
                        {
                            value: "Jhabua",
                            label: "Jhabua",
                        },
                        {
                            value: "Katni",
                            label: "Katni",
                        },
                        {
                            value: "Khandwa",
                            label: "Khandwa",
                        },
                        {
                            value: "Khargone",
                            label: "Khargone",
                        },
                        {
                            value: "Mandla",
                            label: "Mandla",
                        },
                        {
                            value: "Mandsaur",
                            label: "Mandsaur",
                        },
                        {
                            value: "Morena",
                            label: "Morena",
                        },
                        {
                            value: "Narsinghpur",
                            label: "Narsinghpur",
                        },
                        {
                            value: "Neemuch",
                            label: "Neemuch",
                        },
                        {
                            value: "Niwari",
                            label: "Niwari",
                        },
                        {
                            value: "Panna",
                            label: "Panna",
                        },
                        {
                            value: "Raisen",
                            label: "Raisen",
                        },
                        {
                            value: "Rajgarh",
                            label: "Rajgarh",
                        },
                        {
                            value: "Ratlam",
                            label: "Ratlam",
                        },
                        {
                            value: "Rewa",
                            label: "Rewa",
                        },
                        {
                            value: "Sagar",
                            label: "Sagar",
                        },
                        {
                            value: "Satna",
                            label: "Satna",
                        },
                        {
                            value: "Sehore",
                            label: "Sehore",
                        },
                        {
                            value: "Seoni",
                            label: "Seoni",
                        },
                        {
                            value: "Shahdol",
                            label: "Shahdol",
                        },
                        {
                            value: "Shajapur",
                            label: "Shajapur",
                        },
                        {
                            value: "Sheopur",
                            label: "Sheopur",
                        },
                        {
                            value: "Shivpuri",
                            label: "Shivpuri",
                        },
                        {
                            value: "Sodjo",
                            label: "Sodjo",
                        },
                        {
                            value: "Sidhi",
                            label: "Sidhi",
                        },
                        {
                            value: "Singrauli",
                            label: "Singrauli",
                        },
                        {
                            value: "Tikamgarh",
                            label: "Tikamgarh",
                        },
                        {
                            value: "Ujjain",
                            label: "Ujjain",
                        },
                        {
                            value: "Umaria",
                            label: "Umaria",
                        },
                        {
                            value: "Vidisha",
                            label: "Vidisha",
                        },
                        {
                            value: "Ahmednagar",
                            label: "Ahmednagar",
                        },
                        {
                            value: "Akola",
                            label: "Akola",
                        },
                        {
                            value: "Amravati",
                            label: "Amravati",
                        },
                        {
                            value: "Aurangabad",
                            label: "Aurangabad",
                        },
                        {
                            value: "Beed",
                            label: "Beed",
                        },
                        {
                            value: "Bhandara",
                            label: "Bhandara",
                        },
                        {
                            value: "Buldhana",
                            label: "Buldhana",
                        },
                        {
                            value: "Chandrapur",
                            label: "Chandrapur",
                        },
                        {
                            value: "Dhule",
                            label: "Dhule",
                        },
                        {
                            value: "Gadchiroli",
                            label: "Gadchiroli",
                        },
                        {
                            value: "Gondia",
                            label: "Gondia",
                        },
                        {
                            value: "Hingoli",
                            label: "Hingoli",
                        },
                        {
                            value: "Jalgaon",
                            label: "Jalgaon",
                        },

                        {
                            value: "Jalna",
                            label: "Jalna",
                        },
                        {
                            value: "Kolhapur",
                            label: "Kolhapur",
                        },
                        {
                            value: "Latur",
                            label: "Latur",
                        },
                        {
                            value: "Mumbai City",
                            label: "Mumbai City",
                        },
                        {
                            value: "Mumbai Suburban",
                            label: "Mumbai Suburban",
                        },
                        {
                            value: "Nagpur",
                            label: "Nagpur",
                        },
                        {
                            value: "Nanded",
                            label: "Nanded",
                        },
                        {
                            value: "Nandurbar",
                            label: "Nandurbar",
                        },
                        {
                            value: "Nashik",
                            label: "Nashik",
                        },
                        {
                            value: "Osmanabad",
                            label: "Osmanabad",
                        },
                        {
                            value: "Palghar",
                            label: "Palghar",
                        },
                        {
                            value: "Parbhani",
                            label: "Parbhani",
                        },
                        {
                            value: "Pune",
                            label: "Pune",
                        },
                        {
                            value: "Raigad",
                            label: "Raigad",
                        },
                        {
                            value: "Ratnagiri",
                            label: "Ratnagiri",
                        },
                        {
                            value: "Sangli",
                            label: "Sangli",
                        },
                        {
                            value: "Satara",
                            label: "Satara",
                        },
                        {
                            value: "Sindhudurg",
                            label: "Sindhudurg",
                        },
                        {
                            value: "Solapur",
                            label: "Solapur",
                        },
                        {
                            value: "Thane",
                            label: "Thane",
                        },
                        {
                            value: "Wardha",
                            label: "Wardha",
                        },
                        {
                            value: "Washim",
                            label: "Washim",
                        },
                        {
                            value: "Yavatmal",
                            label: "Yavatmal",
                        },
                        {
                            value: "Bishanpur",
                            label: "Bishanpur",
                        },
                        {
                            value: "Chandel",
                            label: "Chandel",
                        },
                        {
                            value: "Churachandpur",
                            label: "Churachandpur",
                        },
                        {
                            value: "Omphar East",
                            label: "Omphar East",
                        },
                        {
                            value: "Imphar West",
                            label: "Imphar West",
                        },
                        {
                            value: "Jiribam",
                            label: "Jiribam",
                        },
                        {
                            value: "Kakching",
                            label: "Kakching",
                        },
                        {
                            value: "Kamjong",
                            label: "Kamjong",
                        },
                        {
                            value: "Kangpokpi",
                            label: "Kangpokpi",
                        },
                        {
                            value: "Noney",
                            label: "Noney",
                        },
                        {
                            value: "Pherzawl",
                            label: "Pherzawl",
                        },
                        {
                            value: "Senapati",
                            label: "Senapati",
                        },
                        {
                            value: "Tamenglong",
                            label: "Tamenglong",
                        },
                        {
                            value: "Tengnoupal",
                            label: "Tengnoupal",
                        },
                        {
                            value: "Tengnoupal",
                            label: "Tengnoupal",
                        },
                        {
                            value: "Thoubal",
                            label: "Thoubal",
                        },
                        {
                            value: "Ukhrul",
                            label: "Ukhrul",
                        },
                        {
                            value: "East Garo Hills",
                            label: "East Garo Hills",
                        },
                        {
                            value: "East Jaintia Hills",
                            label: "East Jaintia Hills",
                        },
                        {
                            value: "East Khasi Hills",
                            label: "East Khasi Hills",
                        },
                        {
                            value: "North Garo Hills",
                            label: "North Garo Hills",
                        },
                        {
                            value: "Ri Bhoi",
                            label: "Ri Bhoi",
                        },
                        {
                            value: "South Garo Hills",
                            label: "South Garo Hills",
                        },
                        {
                            value: "South West Garo Hills",
                            label: "South West Garo Hills",
                        },
                        {
                            value: "South West Khasi Hills",
                            label: "South West Khasi Hills",
                        },
                        {
                            value: "West Garo Hills",
                            label: "West Garo Hills",
                        },
                        {
                            value: "West Jaintia Hills",
                            label: "West Jaintia Hills",
                        },
                        {
                            value: "West Khasi Hills",
                            label: "West Khasi Hills",
                        },
                        {
                            value: "Aizawl",
                            label: "Aizawl",
                        },
                        {
                            value: "Champhai",
                            label: "Champhai",
                        },
                        {
                            value: "Kolasib",
                            label: "Kolasib",
                        },
                        {
                            value: "Lawngtlai",
                            label: "Lawngtlai",
                        },
                        {
                            value: "Lunglei",
                            label: "Lunglei",
                        },
                        {
                            value: "Mamit",
                            label: "Mamit",
                        },
                        {
                            value: "Saiha",
                            label: "Saiha",
                        },
                        {
                            value: "Serchhip",
                            label: "Serchhip",
                        },
                        {
                            value: "Mon",
                            label: "Mon",
                        },
                        {
                            value: "Dimapur",
                            label: "Dimapur",
                        },
                        {
                            value: "Kiphire",
                            label: "Kiphire",
                        },
                        {
                            value: "Kohima",
                            label: "Kohima",
                        },
                        {
                            value: "Longleng",
                            label: "Longleng",
                        },
                        {
                            value: "Mokokchung",
                            label: "Mokokchung",
                        },
                        {
                            value: "Noklak",
                            label: "Noklak",
                        },
                        {
                            value: "Peren",
                            label: "Peren",
                        },
                        {
                            value: "Phek",
                            label: "Phek",
                        },
                        {
                            value: "Tuensang",
                            label: "Tuensang",
                        },
                        {
                            value: "Wokha",
                            label: "Wokha",
                        },
                        {
                            value: "Zunheboto",
                            label: "Zunheboto",
                        },
                        {
                            value: "Angul",
                            label: "Angul",
                        },
                        {
                            value: "Balangir",
                            label: "Balangir",
                        },
                        {
                            value: "Balasore",
                            label: "Balasore",
                        },
                        {
                            value: "Bargarh",
                            label: "Bargarh",
                        },
                        {
                            value: "Bhadrak",
                            label: "Bhadrak",
                        },
                        {
                            value: "Boudh",
                            label: "Boudh",
                        },
                        {
                            value: "Cuttack",
                            label: "Cuttack",
                        },
                        {
                            value: "Debagarh",
                            label: "Debagarh",
                        },
                        {
                            value: "Dhenkanal",
                            label: "Dhenkanal",
                        },
                        {
                            value: "Gajapati",
                            label: "Gajapati",
                        },
                        {
                            value: "Ganjam",
                            label: "Ganjam",
                        },
                        {
                            value: "Jagatsinghpur",
                            label: "Jagatsinghpur",
                        },
                        {
                            value: "Jaipur",
                            label: "Jaipur",
                        },
                        {
                            value: "Jharsuguda",
                            label: "Jharsuguda",
                        },
                        {
                            value: "Kalahandi",
                            label: "Kalahandi",
                        },
                        {
                            value: "Kandhamal",
                            label: "Kandhamal",
                        },
                        {
                            value: "Kendrapara",
                            label: "Kendrapara",
                        },
                        {
                            value: "Kendujhar",
                            label: "Kendujhar",
                        },
                        {
                            value: "Khordha",
                            label: "Khordha",
                        },
                        {
                            value: "Koraput",
                            label: "Koraput",
                        },
                        {
                            value: "Koraput",
                            label: "Koraput",
                        },
                        {
                            value: "Malkangiri",
                            label: "Malkangiri",
                        },
                        {
                            value: "Mayurbhanj",
                            label: "Mayurbhanj",
                        },
                        {
                            value: "Nabarangpur",
                            label: "Nabarangpur",
                        },
                        {
                            value: "Nayagarah",
                            label: "Nayagarah",
                        },
                        {
                            value: "Nupada",
                            label: "Nupada",
                        },
                        {
                            value: "Puri",
                            label: "Puri",
                        },
                        {
                            value: "Rayagada",
                            label: "Rayagada",
                        },
                        {
                            value: "Sambalpur",
                            label: "Sambalpur",
                        },
                        {
                            value: "Subarnapur",
                            label: "Subarnapur",
                        },
                        {
                            value: "Sundergarh",
                            label: "Sundergarh",
                        },
                        {
                            value: "Amritsar",
                            label: "Amritsar",
                        },
                        {
                            value: "Barnal",
                            label: "Barnal",
                        },
                        {
                            value: "Bathinda",
                            label: "Bathinda",
                        },
                        {
                            value: "Faridkot",
                            label: "Faridkot",
                        },
                        {
                            value: "Faridkot",
                            label: "Faridkot",
                        },
                        {
                            value: "Fatehgarh Sahib",
                            label: "Fatehgarh Sahib",
                        },
                        {
                            value: "Fazilka",
                            label: "Fazilka",
                        },
                        {
                            value: "Firozpur",
                            label: "Firozpur",
                        },
                        {
                            value: "Gurdaspur",
                            label: "Gurdaspur",
                        },
                        {
                            value: "Hoshiarpur",
                            label: "Hoshiarpur",
                        },
                        {
                            value: "Jalandhar",
                            label: "Jalandhar",
                        },
                        {
                            value: "Kapurthala",
                            label: "Kapurthala",
                        },
                        {
                            value: "Ludhiana",
                            label: "Ludhiana",
                        },
                        {
                            value: "Mansa",
                            label: "Mansa",
                        },
                        {
                            value: "Moga",
                            label: "Moga",
                        },
                        {
                            value: "Mohali",
                            label: "Mohali",
                        },
                        {
                            value: "Muktsar",
                            label: "Muktsar",
                        },
                        {
                            value: "Pathankot",
                            label: "Pathankot",
                        },
                        {
                            value: "Patiala",
                            label: "Patiala",
                        },
                        {
                            value: "Rupanagar",
                            label: "Rupanagar",
                        },
                        {
                            value: "Sangrur",
                            label: "Sangrur",
                        },
                        {
                            value: "Shaheed Bhagat Singh Nagar",
                            label: "Shaheed Bhagat Singh Nagar",
                        },
                        {
                            value: "Tarn Taran",
                            label: "Tarn Taran",
                        },
                        {
                            value: "Ajmer",
                            label: "Ajmer",
                        },
                        {
                            value: "Alwar",
                            label: "Alwar",
                        },
                        {
                            value: "Banswara",
                            label: "Banswara",
                        },
                        {
                            value: "Baran",
                            label: "Baran",
                        },
                        {
                            value: "Baran",
                            label: "Baran",
                        },
                        {
                            value: "Barmer",
                            label: "Barmer",
                        },
                        {
                            value: "Bharatpur",
                            label: "Bharatpur",
                        },
                        {
                            value: "Bhilwara",
                            label: "Bhilwara",
                        },
                        {
                            value: "Bikaner",
                            label: "Bikaner",
                        },
                        {
                            value: "Bundi",
                            label: "Bundi",
                        },
                        {
                            value: "Chittorgarh",
                            label: "Chittorgarh",
                        },
                        {
                            value: "Churu",
                            label: "Churu",
                        },
                        {
                            value: "Dausa",
                            label: "Dausa",
                        },
                        {
                            value: "Dholpur",
                            label: "Dholpur",
                        },
                        {
                            value: "Dungarpur",
                            label: "Dungarpur",
                        },
                        {
                            value: "Hanumangarh",
                            label: "Hanumangarh",
                        },
                        {
                            value: "Jaipur",
                            label: "Jaipur",
                        },
                        {
                            value: "Jaisalmer",
                            label: "Jaisalmer",
                        },
                        {
                            value: "Jalore",
                            label: "Jalore",
                        },
                        {
                            value: "Jhalawar",
                            label: "Jhalawar",
                        },
                        {
                            value: "Jhunjhunu",
                            label: "Jhunjhunu",
                        },
                        {
                            value: "Jpdj[ir",
                            label: "Jpdj[ir",
                        },
                        {
                            value: "Karauli",
                            label: "Karauli",
                        },
                        {
                            value: "Kota",
                            label: "Kota",
                        },
                        {
                            value: "Nagaur",
                            label: "Nagaur",
                        },
                        {
                            value: "Pali",
                            label: "Pali",
                        },
                        {
                            value: "Pratapgarh",
                            label: "Pratapgarh",
                        },
                        {
                            value: "Rajsamand",
                            label: "Rajsamand",
                        },
                        {
                            value: "Sawai Madhopur",
                            label: "Sawai Madhopur",
                        },
                        {
                            value: "Sikar",
                            label: "Sikar",
                        },
                        {
                            value: "Sirohi",
                            label: "Sirohi",
                        },
                        {
                            value: "Sri Ganganagar",
                            label: "Sri Ganganagar",
                        },
                        {
                            value: "Tonk",
                            label: "Tonk",
                        },
                        {
                            value: "Udaipur",
                            label: "Udaipur",
                        },
                        {
                            value: "East Sikkim",
                            label: "East Sikkim",
                        },
                        {
                            value: "North Sikkim",
                            label: "North Sikkim",
                        },
                        {
                            value: "South Sikkim",
                            label: "South Sikkim",
                        },
                        {
                            value: "West Sikkim",
                            label: "West Sikkim",
                        },
                        {
                            value: "Dhalai",
                            label: "Dhalai",
                        },
                        {
                            value: "Gomati",
                            label: "Gomati",
                        },
                        {
                            value: "Khowai",
                            label: "Khowai",
                        },
                        {
                            value: "North Tripura",
                            label: "North Tripura",
                        },
                        {
                            value: "Sepahijala",
                            label: "Sepahijala",
                        },
                        {
                            value: "South Tripura",
                            label: "South Tripura",
                        },
                        {
                            value: "Unakoti",
                            label: "Unakoti",
                        },
                        {
                            value: "West Tripura",
                            label: "West Tripura",
                        },
                        {
                            value: "Agra",
                            label: "Agra",
                        },
                        {
                            value: "Aligarh",
                            label: "Aligarh",
                        },
                        {
                            value: "Ambedkar Nagar",
                            label: "Ambedkar Nagar",
                        },
                        {
                            value: "Amethi",
                            label: "Amethi",
                        },
                        {
                            value: "Amroha",
                            label: "Amroha",
                        },
                        {
                            value: "Auraiya",
                            label: "Auraiya",
                        },
                        {
                            value: "Ayodhya",
                            label: "Ayodhya",
                        },
                        {
                            value: "Azamgarh",
                            label: "Azamgarh",
                        },
                        {
                            value: "Baghpat",
                            label: "Baghpat",
                        },
                        {
                            value: "Bahraich",
                            label: "Bahraich",
                        },
                        {
                            value: "Ballia",
                            label: "Ballia",
                        },
                        {
                            value: "Balrampur",
                            label: "Balrampur",
                        },
                        {
                            value: "Banda",
                            label: "Banda",
                        },
                        {
                            value: "Barabanki",
                            label: "Barabanki",
                        },
                        {
                            value: "Bareilly",
                            label: "Bareilly",
                        },
                        {
                            value: "Basti",
                            label: "Basti",
                        },
                        {
                            value: "Bhadohi",
                            label: "Bhadohi",
                        },
                        {
                            value: "Bijnor",
                            label: "Bijnor",
                        },
                        {
                            value: "Budaun",
                            label: "Budaun",
                        },
                        {
                            value: "Bulandshahr",
                            label: "Bulandshahr",
                        },
                        {
                            value: "Chandauli",
                            label: "Chandauli",
                        },
                        {
                            value: "Chitrakoot",
                            label: "Chitrakoot",
                        },
                        {
                            value: "Deoria",
                            label: "Deoria",
                        },
                        {
                            value: "Etah",
                            label: "Etah",
                        },
                        {
                            value: "Etawah",
                            label: "Etawah",
                        },
                        {
                            value: "Farrukhabad",
                            label: "Farrukhabad",
                        },
                        {
                            value: "Fatehpur",
                            label: "Fatehpur",
                        },
                        {
                            value: "Firozabad",
                            label: "Firozabad",
                        },
                        {
                            value: "Gautam Buddha Nagar",
                            label: "Gautam Buddha Nagar",
                        },
                        {
                            value: "Ghaziabad",
                            label: "Ghaziabad",
                        },
                        {
                            value: "Ghazipur",
                            label: "Ghazipur",
                        },
                        {
                            value: "Gonda",
                            label: "Gonda",
                        },
                        {
                            value: "Gorakhpur",
                            label: "Gorakhpur",
                        },
                        {
                            value: "Hamirpur",
                            label: "Hamirpur",
                        },
                        {
                            value: "Hapur",
                            label: "Hapur",
                        },
                        {
                            value: "Hardoi",
                            label: "Hardoi",
                        },
                        {
                            value: "Hathras",
                            label: "Hathras",
                        },
                        {
                            value: "Jalaun",
                            label: "Jalaun",
                        },
                        {
                            value: "Jaunpur",
                            label: "Jaunpur",
                        },
                        {
                            value: "Jhansi",
                            label: "Jhansi",
                        },
                        {
                            value: "Kannauj",
                            label: "Kannauj",
                        },
                        {
                            value: "Kanpur Dehat",
                            label: "Kanpur Dehat",
                        },
                        {
                            value: "Kanpur Nagar",
                            label: "Kanpur Nagar",
                        },
                        {
                            value: "Kasganj",
                            label: "Kasganj",
                        },
                        {
                            value: "Kaushambi",
                            label: "Kaushambi",
                        },
                        {
                            value: "Kheri",
                            label: "Kheri",
                        },
                        {
                            value: "Kushinagar",
                            label: "Kushinagar",
                        },
                        {
                            value: "Lalitpur",
                            label: "Lalitpur",
                        },
                        {
                            value: "Lucknow",
                            label: "Lucknow",
                        },
                        {
                            value: "Maharajganj",
                            label: "Maharajganj",
                        },
                        {
                            value: "Mahoba",
                            label: "Mahoba",
                        },
                        {
                            value: "Mainpuri",
                            label: "Mainpuri",
                        },
                        {
                            value: "Mathura",
                            label: "Mathura",
                        },
                        {
                            value: "Mau",
                            label: "Mau",
                        },
                        {
                            value: "Meerut",
                            label: "Meerut",
                        },
                        {
                            value: "Mirzapur",
                            label: "Mirzapur",
                        },
                        {
                            value: "Moradabad",
                            label: "Moradabad",
                        },
                        {
                            value: "Muzaffarnagar",
                            label: "Muzaffarnagar",
                        },
                        {
                            value: "Pilibhit",
                            label: "Pilibhit",
                        },
                        {
                            value: "Pratapgarh",
                            label: "Pratapgarh",
                        },
                        {
                            value: "Prayagraj",
                            label: "Prayagraj",
                        },
                        {
                            value: "Raebareli",
                            label: "Raebareli",
                        },
                        {
                            value: "Rampur",
                            label: "Rampur",
                        },
                        {
                            value: "Sharanpur",
                            label: "Sharanpur",
                        },
                        {
                            value: "Sambhal",
                            label: "Sambhal",
                        },
                        {
                            value: "Sant Kabir Nagar",
                            label: "Sant Kabir Nagar",
                        },
                        {
                            value: "Shahjahanpur",
                            label: "Shahjahanpur",
                        },
                        {
                            value: "Shamli",
                            label: "Shamli",
                        },
                        {
                            value: "Shravasti",
                            label: "Shravasti",
                        },
                        {
                            value: "Sidharthnagar",
                            label: "Sidharthnagar",
                        },
                        {
                            value: "Sitapur",
                            label: "Sitapur",
                        },
                        {
                            value: "Sonbhadra",
                            label: "Sonbhadra",
                        },
                        {
                            value: "Sultanpur",
                            label: "Sultanpur",
                        },
                        {
                            value: "Unnao",
                            label: "Unnao",
                        },
                        {
                            value: "Varanasi",
                            label: "Varanasi",
                        },
                        {
                            value: "Almora",
                            label: "Almora",
                        },
                        {
                            value: "Bagesshwar",
                            label: "Bagesshwar",
                        },
                        {
                            value: "Chamoli",
                            label: "Chamoli",
                        },
                        {
                            value: "Champawat",
                            label: "Champawat",
                        },
                        {
                            value: "Dehradun",
                            label: "Dehradun",
                        },
                        {
                            value: "Haridwar",
                            label: "Haridwar",
                        },
                        {
                            value: "Nainital",
                            label: "Nainital",
                        },
                        {
                            value: "Pauri",
                            label: "Pauri",
                        },
                        {
                            value: "Pithoragarh",
                            label: "Pithoragarh",
                        },
                        {
                            value: "Rudraprayag",
                            label: "Rudraprayag",
                        },
                        {
                            value: "Tehri",
                            label: "Tehri",
                        },
                        {
                            value: "Udham Singh Nagar",
                            label: "Udham Singh Nagar",
                        },
                        {
                            value: "Uttarkashi",
                            label: "Uttarkashi",
                        },
                        {
                            value: "Alipurduar",
                            label: "Alipurduar",
                        },
                        {
                            value: "Bankura",
                            label: "Bankura",
                        },
                        {
                            value: "Birbhum",
                            label: "Birbhum",
                        },
                        {
                            value: "Cooch Behar",
                            label: "Cooch Behar",
                        },
                        {
                            value: "Dakshin Dinajpur",
                            label: "Dakshin Dinajpur",
                        },
                        {
                            value: "Darjeeling",
                            label: "Darjeeling",
                        },
                        {
                            value: "Hooghly",
                            label: "Hooghly",
                        },
                        {
                            value: "Howrah",
                            label: "Howrah",
                        },
                        {
                            value: "Jalpaiguri",
                            label: "Jalpaiguri",
                        },
                        {
                            value: "Jhargram",
                            label: "Jhargram",
                        },
                        {
                            value: "Kalimpong",
                            label: "Kalimpong",
                        },
                        {
                            value: "Kolkata",
                            label: "Kolkata",
                        },
                        {
                            value: "Malda",
                            label: "Malda",
                        },
                        {
                            value: "Murshidabad",
                            label: "Murshidabad",
                        },
                        {
                            value: "Nadia",
                            label: "Nadia",
                        },
                        {
                            value: "North 24 Parganas",
                            label: "North 24 Parganas",
                        },
                        {
                            value: "Paschim Bardhaman",
                            label: "Paschim Bardhaman",
                        },
                        {
                            value: "Paschim Medinipur",
                            label: "Paschim Medinipur",
                        },
                        {
                            value: "Purba Bardhaman",
                            label: "Purba Bardhaman",
                        },
                        {
                            value: "Purba Medinipur",
                            label: "Purba Medinipur",
                        },
                        {
                            value: "Purulia",
                            label: "Purulia",
                        },
                        {
                            value: "South 24 Parganas",
                            label: "South 24 Parganas",
                        },
                        {
                            value: "Uttar Dinajpur",
                            label: "Uttar Dinajpur",
                        },
                        {
                            value: "Nicobar",
                            label: "Nicobar",
                        },
                        {
                            value: "North Middle Andaman",
                            label: "North Middle Andaman",
                        },
                        {
                            value: "South Andaman",
                            label: "South Andaman",
                        },
                        {
                            value: "Chandigarh",
                            label: "Chandigarh",
                        },
                        {
                            value: "Dadra Nagar Haveli",
                            label: "Dadra Nagar Haveli",
                        },
                        {
                            value: "Damn",
                            label: "Damn",
                        },
                        {
                            value: "Diu",
                            label: "Diu",
                        },
                        {
                            value: "Central Delhi",
                            label: "Central Delhi",
                        },
                        {
                            value: "East Delhi",
                            label: "East Delhi",
                        },
                        {
                            value: "New Delhi",
                            label: "New Delhi",
                        },
                        {
                            value: "North Delhi",
                            label: "North Delhi",
                        },
                        {
                            value: "Borth East Delhi",
                            label: "Borth East Delhi",
                        },
                        {
                            value: "North West Delhi",
                            label: "North West Delhi",
                        },
                        {
                            value: "Shahdara",
                            label: "Shahdara",
                        },
                        {
                            value: "South Delhi",
                            label: "South Delhi",
                        },
                        {
                            value: "South East Delhi",
                            label: "South East Delhi",
                        },
                        {
                            value: "South East Delhi",
                            label: "South East Delhi",
                        },
                        {
                            value: "South West Delhi",
                            label: "South West Delhi",
                        },
                        {
                            value: "West Delhi",
                            label: "West Delhi",
                        },
                        {
                            value: "Anantnag",
                            label: "Anantnag",
                        },
                        {
                            value: "Bandipora",
                            label: "Bandipora",
                        },
                        {
                            value: "Baramulla",
                            label: "Baramulla",
                        },
                        {
                            value: "Budgam",
                            label: "Budgam",
                        },
                        {
                            value: "Doda",
                            label: "Doda",
                        },
                        {
                            value: "Ganderbal",
                            label: "Ganderbal",
                        },
                        {
                            value: "Jammu",
                            label: "Jammu",
                        },
                        {
                            value: "Kathua",
                            label: "Kathua",
                        },
                        {
                            value: "Kishtwar",
                            label: "Kishtwar",
                        },
                        {
                            value: "Kulgam",
                            label: "Kulgam",
                        },
                        {
                            value: "Kupwara",
                            label: "Kupwara",
                        },
                        {
                            value: "Poonch",
                            label: "Poonch",
                        },
                        {
                            value: "Pulwama",
                            label: "Pulwama",
                        },
                        {
                            value: "Rajouri",
                            label: "Rajouri",
                        },
                        {
                            value: "Ramban",
                            label: "Ramban",
                        },
                        {
                            value: "Reasi",
                            label: "Reasi",
                        },
                        {
                            value: "Samba",
                            label: "Samba",
                        },
                        {
                            value: "Samba",
                            label: "Samba",
                        },
                        {
                            value: "Shopian",
                            label: "Shopian",
                        },
                        {
                            value: "Srinagar",
                            label: "Srinagar",
                        },
                        {
                            value: "Udhampur",
                            label: "Udhampur",
                        },
                        {
                            value: "Kargil",
                            label: "Kargil",
                        },
                        {
                            value: "Leh",
                            label: "Leh",
                        },
                        {
                            value: "Lakshadweep",
                            label: "Lakshadweep",
                        },
                        {
                            value: "Karaikal",
                            label: "Karaikal",
                        },
                        {
                            value: "Mahe",
                            label: "Mahe",
                        },
                        {
                            value: "Puducherry",
                            label: "Puducherry",
                        },
                        {
                            value: "Yanam",
                            label: "Yanam",
                        },
                    ]}
                />
            </Space>
        </>
    );
}

function Manageareas(props) {
    return (
        <>
            <Head title="admin-countries" />

            <Card title={`Manage Areas`}>
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
                        <div style={{ margin: "10px" }}>{selectArea()}</div>
                        <Input style={{ margin: "10px" }} placeholder="Name" />
                        <Input style={{ margin: "10px" }} placeholder="Order" />
                        <div style={{ margin: "10px" }}>{selectItem()}</div>
                        <div style={{ margin: "10px" }}>{stateAddButton()}</div>
                    </form>
                </div>
                <Areatable />
            </Card>
        </>
    );
}

Manageareas.layout = (page) => <AuthenticatedLayout children={page} />;

export default Manageareas;
