import sentiment_analyser_img from "../assets/img/twitter_sentiment_analyser/twitters.png";
import volcano_web_app_img from "../assets/img/Volcano.png";
import music_recommendation_image from "../assets/img/music.png";
import luminosity_sensor_image from "../assets/img/luminosity_sensor.png"
import logo_x from "../assets/img/x.png"
import logo_music from "../assets/img/music-notes.png"

export const projects = [
    {
        id: 1,
        title: "Twitter/X Sentiment Analyser",
        description: "This app analyzes user-searched topics to provide overall sentiment insights and displays the data through graphs. It also checks tweet spelling accuracy to enhance analysis reliability, helping users understand public sentiment on various topics.",
        imgUrl: sentiment_analyser_img,
        logo: logo_x,
        tech_stack: ["React", "JavaScript", "Twitter API", "Node.js", "Amazon Web Services (EC2 instance)", "Python", "HTML/CSS", "Docker" ],
        learnt: "I how to fuck bitches and get money"
    },
    {
        id: 2,
        title: "Music Recommendation Web App",
        description: "This mashup service is designed to help users find information about their favorite artists as well as help them find artists similar their search query. The user can search for an artist and the web application will provide them with upcoming events the artists has as well as their most popular music videos. It will do the same thing with artists like the one searched.",
        imgUrl: music_recommendation_image,
        logo: logo_music,
        tech_stack: ["React", "JavaScript", "YouTube API", "TasteDive API", "SeatGeek Platform API", "Node.js", "Amazon Web Services (EC2 instance)", "HTML/CSS", "Docker"],
        learnt: "I how to fuck bitches and get money"
    },
    {
        id: 3,
        title: "Luminosity Sensor",
        description: "This prototype functions as a luminosity sensor, measuring brightness in lux and displaying it on an LCD screen. It adjusts an LED's brightness based on light levels. Two switches control data recording and LED functionality, with interrupt-based debouncing to ensure precision. A timer module provides serial output of luminosity data and timestamps.",
        imgUrl: luminosity_sensor_image,
        logo: logo_x,
        tech_stack: ["JavaScript", "Node.js", "Amazon Web Services (EC2 instance)", "Python", "CSS" ],
        learnt: "I how to fuck bitches and get money"
    },
    {
        id: 4,
        title: "Volcano Data Web App",
        description: "This app provides detailed information on 1,343 volcanoes using data from the Smithsonian Global Volcanism Program. Users can search by country, view volcano locations on a map, and access metrics like elevation and last eruption. Registered users can log in to see additional data, including population density near each volcano",
        imgUrl: volcano_web_app_img,
        logo: logo_x,
        tech_stack: ["JavaScript", "Node.js", "Amazon Web Services (EC2 instance)", "Python", "CSS" ],
        learnt: "I how to fuck bitches and get money"
    },
];