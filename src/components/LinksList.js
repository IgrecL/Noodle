import React, { useState, useEffect } from "react";
import '../styles/LinksList.css'
import pdfImage from '../assets/pdf.png';

const LinksList = ({ links }) => {
    console.log(links);
	return (
		<>
            {links[0] ? (
                <div>
                    <h2>Cours disponibles :</h2>
                    {links
                        .map((linkItem, index) => (
                            <div className="linkItem" >
                                <a className="linkLink" href={linkItem.link}>
                                    <img src={pdfImage} alt="logo pdf" style={{ height: '18px'}} />
                                    <span classname='linkName'>{linkItem.name}</span>
                                </a>
                            </div>
                        ))}
                </div>
            ) : ("")}
		</>
	);
};
	
export default LinksList;