import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    const teamStyle = {
        height: '400px',
        width: '300px',                            
        margin: "50px 100px",
        border: "1px solid gray",
        textAlign: "center",
        padding: "30px",
        backgroundColor: 'white'
    }
    const imageStyle = { height: "200px", width: "200px" }
    return (

        <div  style={{ display: 'inline-flex' }}>
            <div style={teamStyle}  >
                <img style={imageStyle} src={strTeamBadge} alt="" />
                <h2> {strTeam}</h2>
                <p>Sport Type: {strSport}</p>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/details/${idTeam}`}>
                    <Button variant="success">
                        Explore  <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </Button>
                </Link>
            </div>
        </div>


    );
};

export default Team;