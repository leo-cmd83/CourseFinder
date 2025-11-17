import React from "react";
import "../style/Universities.css";

interface University {
    name: string;
    country: string;
    url: string;
}

const universities: University[] = [
    // Australia
    { name: "CQ University", country: "Australia", url: "https://www.cqu.edu.au/" },
    { name: "Curtin University", country: "Australia", url: "https://www.curtin.edu.au/" },
    { name: "RMIT University", country: "Australia", url: "https://www.rmit.edu.au/" },
    { name: "University of New South Wales", country: "Australia", url: "https://www.unsw.edu.au/" },
    { name: "University of South Australia", country: "Australia", url: "https://www.unisa.edu.au/" },
    { name: "Western Sydney University", country: "Australia", url: "https://www.westernsydney.edu.au/" },
    { name: "Swinburne University of Technology", country: "Australia", url: "http://www.swinburne.edu.au/" },
    { name: "University of Wollongong", country: "Australia", url: "https://www.uow.edu.au/index.html" },

    // China
    { name: "Beihang University (Beijing University of Aeronautics and Astronautics)", country: "China", url: "https://www.buaa.edu.cn/" },
    { name: "University of Nottingham Ningbo", country: "China", url: "http://www.nottingham.edu.cn/" },
    { name: "City University of Hong Kong", country: "China", url: "http://www.cityu.edu.hk/" },
    { name: "The University of Hong Kong", country: "China", url: "https://www.hku.hk/" },

    // Ireland
    { name: "National University of Ireland, Galway", country: "Ireland", url: "#" },
    { name: "University College Dublin", country: "Ireland", url: "#" },
    { name: "Maynooth University", country: "Ireland", url: "#" },
    { name: "University College Cork", country: "Ireland", url: "#" },

    // South Korea
    { name: "Hanyang University", country: "South Korea", url: "#" },
    { name: "Sogang University", country: "South Korea", url: "#" },
    { name: "Soongsil University", country: "South Korea", url: "#" },

    // Mexico
    { name: "ITESM", country: "Mexico", url: "http://www.itesm.mx/wps/wcm/connect/Campus/MTY/Monterrey" },
    { name: "Universidad de las Americas Puebla", country: "Mexico", url: "https://www.udlap.mx/international/exchange-students.aspx" },

    // Singapore
    { name: "Nanyang Technological University", country: "Singapore", url: "https://www.ntu.edu.sg/Pages/home.aspx" },
    { name: "National University of Singapore", country: "Singapore", url: "http://www.nus.edu.sg/" },

    // United Kingdom
    { name: "The University of Manchester", country: "United Kingdom", url: "https://www.manchester.ac.uk/" },
    { name: "Kingston University", country: "United Kingdom", url: "#" },
    { name: "University of Warwick", country: "United Kingdom", url: "https://warwick.ac.uk/" },
    { name: "University of Birmingham", country: "United Kingdom", url: "https://www.birmingham.ac.uk/index.aspx" },
    { name: "University of Kent", country: "United Kingdom", url: "https://www.kent.ac.uk/" },
    { name: "Leeds Beckett University", country: "United Kingdom", url: "https://www.leedsbeckett.ac.uk/study-abroad/inbound-exchange/what-can-i-study/" },
    { name: "University of Nottingham", country: "United Kingdom", url: "https://www.nottingham.ac.uk/" },
    { name: "University of Leeds", country: "United Kingdom", url: "#" },
    { name: "Newcastle University", country: "United Kingdom", url: "https://www.ncl.ac.uk/" },
    { name: "Abertay University", country: "United Kingdom", url: "https://www.abertay.ac.uk/" },
    { name: "University of Hertfordshire", country: "United Kingdom", url: "https://www.herts.ac.uk/" },
    { name: "University of Keele", country: "United Kingdom", url: "https://www.keele.ac.uk/" },
    { name: "University of Strathclyde", country: "United Kingdom", url: "https://www.strath.ac.uk/" },
    { name: "Swansea University", country: "United Kingdom", url: "http://www.swansea.ac.uk/" },

    // United States
    { name: "University of New Mexico", country: "United States", url: "http://www.unm.edu/" },
    { name: "University of South Florida", country: "United States", url: "http://www.usf.edu/" },
    { name: "California State University", country: "United States", url: "http://www.calstatela.edu/" },
    { name: "San Francisco State University", country: "United States", url: "http://www.sfsu.edu/" },
    { name: "Embry-Riddle Aeronautical University", country: "United States", url: "https://erau.edu/" },
    { name: "Grand Valley State University", country: "United States", url: "https://www.gvsu.edu/" },
];

const Universities: React.FC = () => {
    return (
        <div className="universities">
            <h2>Partner Universities</h2>
            <table>
                <thead>
                <tr>
                    <th>University</th>
                    <th>Country</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {universities.map((university) => (
                    <tr key={university.name}>
                        <td>{university.name}</td>
                        <td>{university.country}</td>
                        <td>
                            {university.url !== "#" ? (
                                <a href={university.url} target="_blank" rel="noopener noreferrer">
                                    Visit
                                </a>
                            ) : (
                                <span>No link available</span>
                            )}
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export default Universities;
