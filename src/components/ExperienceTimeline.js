import React from "react";

export const ExperienceTimeline = ({ experience }) => {
    return (
        <div>
            {experience.map(({ title, tenure, company, jobDescription, image }, index) => (
                <div className="experience">
                    <div className="experience-title-logo">
                        <h3>{title}</h3>
                        <img src={image} />
                    </div>
                    <h4>{company} | {tenure}</h4>
                    <ul>
                        {jobDescription.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                    <br />
                </div>
            ))}
        </div>
    );
}
