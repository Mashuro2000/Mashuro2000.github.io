// volcano api web app
import volcano_web_app_img from "../assets/img/volcano data web app/Volcano.png";

// music recommendation
import logo_music from "../assets/img/music recommendation web app/music-notes.png"
import music_recommendation_image_1 from "../assets/img/music recommendation web app/music2.png";
import music_recommendation_image_2 from "../assets/img/music recommendation web app/music1.png";
import music_recommendation_image_3 from "../assets/img/music recommendation web app/music3.png";
import music_recommendation_image_4 from "../assets/img/music recommendation web app/music4.png";

// luminosity sensor
import luminosity_sensor_image from "../assets/img/luminosity sensor/luminosity_sensor.png"

// twitter/x sentiment analyser 
import logo_x from "../assets/img/twitter_sentiment_analyser/x.png"
import sentiment_analyser_img from "../assets/img/twitter_sentiment_analyser/twitters.png";

export const projects = [
    {
        id: 1,
        title: "Twitter/X Sentiment Analyser",
        description: "This app analyzes user-searched topics to provide overall sentiment insights and displays the data through graphs. It also checks tweet spelling accuracy to enhance analysis reliability, helping users understand public sentiment on various topics. The application was hosted as a Docker image on an EC2 instance on AWS and would scale and create more instaces based off how much traffic the web application was receiving.",
        imgUrl: sentiment_analyser_img,
        logo: logo_x,
        tech_stack: ["React", "JavaScript", "Twitter API", "Node.js", "Amazon Web Services (EC2 instance)", "Python", "HTML/CSS", "Docker", "Bootstrap" ],
        images: []
    },
    {
        id: 2,
        title: "Music Recommendation Web App",
        description: "This mashup service is designed to help users find information about their favorite artists as well as help them find artists similar their search query. The user can search for an artist and the web application will provide them with upcoming events the artists has as well as their most popular music videos. It will do the same thing with artists like the one searched. The application was hosted as a Docker image on an EC2 instance on AWS.",
        imgUrl: music_recommendation_image_4,
        logo: logo_music,
        tech_stack: ["React", "JavaScript", "YouTube API", "TasteDive API", "SeatGeek Platform API", "Node.js", "Amazon Web Services (EC2 instance)", "HTML/CSS", "Docker"],
        images: [music_recommendation_image_1, music_recommendation_image_2, music_recommendation_image_3, music_recommendation_image_4]
    },
    {
        id: 3,
        title: "Luminosity Sensor",
        description: "This prototype functions as a luminosity sensor, measuring brightness in lux and displaying it on an LCD screen. It adjusts an LED's brightness based on light levels. Two switches control data recording and LED functionality, with interrupt-based debouncing to ensure precision. A timer module provides serial output of luminosity data and timestamps.",
        imgUrl: luminosity_sensor_image,
        logo: logo_x,
        tech_stack: ["C", "BH1750 (Luminosity Sensor)", "Arduino", "Nokia 5110 LCD" ],
        learnt: " "
    },
    {
        id: 4,
        title: "Volcano Data Web Application",
        description: "This app provides detailed information on 1,343 volcanoes using data from the Smithsonian Global Volcanism Program. Users can search by country, view volcano locations on a map, and access metrics like elevation and last eruption. Registered users can log in to see additional data, including population density near each volcano.",
        imgUrl: volcano_web_app_img,
        logo: logo_x,
        tech_stack: ["JavaScript", "Node.js", "REST APIs", "Python", "CSS" ],
        learnt: " "
    },
];