import React, { useEffect, useState } from 'react';
import './Detail.css'
import { useParams } from 'react-router';
import background from '../../Photo/bg.jpg';
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youtube from '../../Icon/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
const bodyStyle = {
        height: "200px",
        width: "75%",
        display: 'inline-flex',
        margin: "50px 150px",
        backgroundColor: 'darkslateblue',
        padding: '5px 10px',
        borderRadius: '10px',
       flexDirection:'row'
    }
    const { idTeam } = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}
        `)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
    }, [idTeam])
    return (
        <div className='team-body' >
            <header style={{ backgroundImage: `url(${background})`,width:'100%',height:'300px', backgroundRepeat: "no-repeat",backgroundSize:'cover'}}>
                <img style={{width:'200px',margin:'10px 45%'}}  src={details.strTeamBadge} alt="" srcset="" />
            </header>
            <body>
                <section className= ' d-flex justify-content-between callout' style={bodyStyle}>
                    <div  style={{ marginRight: "50%", color: 'white' }}>
                        <h1>{details.strTeam}</h1>
                        <h6> <FontAwesomeIcon icon={faHistory} /> Founded: {details.intFormedYear}</h6>
                        <h6><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</h6>
                        <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type: {details.strSport}</h6>
                        <h6><FontAwesomeIcon icon={faMars} /> Gender: {details.strGender}</h6>
                    </div>
                    <div >
                        {
                            details.strGender === 'Male' ?
                                <img style={{ height: '100%', width: "350px", flex: 'right' }} src={male}  alt="" srcset="" /> :
                                <img style={{ height: '100%', width: "350px", flex: 'right' }} src={female}  alt="" srcset="" />
                        }
                    </div>
                </section>

                <section>
                    <div style={{ margin: '50px 100px' }}>
                        <p> {details.strDescriptionEN} </p>
                        <p> {details.strStadiumDescription}</p>
                    </div>
                    <div>
                       <footer className='d-flex justify-content-center' style={{ textAlign:'center'}}>
                           <div style={{display:'flex', textAlign:'center', alignItems:'center',margin:'0 auto'}}>
                           <a href={`http://${details.strTwitter}`} target="_blank" rel="noopener noreferrer">
                               <img style={{width:'100px'}} src={twitter} alt="" srcset=""/>
                           </a>
                           <a href={`http://${details.strFacebook}`} target="_blank" rel="noopener noreferrer">
                               <img style={{width:'100px'}} src={facebook} alt="" srcset=""/>
                           </a>
                           <a href={`http://${details.strYoutube}`} target="_blank" rel="noopener noreferrer">
                               <img style={{width:'100px'}} src={youtube} alt="" srcset=""/>
                           </a>
                           </div>
                           </footer> 
                    </div>
                </section>
            </body>
        </div>
    );
};

export default Details;