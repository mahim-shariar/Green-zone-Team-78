import React from 'react';
import SingleTeamMember from './SingleTeamMember/SingleTeamMember';
import './Team.css'

const teamData = [
    {
        name: "NAFISH AHMED NOBEL",
        image:'https://media.discordapp.net/attachments/926517364588158976/927958805214539866/264928138_1232972807226410_3458363177029919398_n.jpg?width=491&height=492',
        developer:'Frontend Developer',
        role:'Team Captain & UI Designer'
    },
    {
        name: "MD MUSFIQUR ROHOMAN",
        image:'https://media.discordapp.net/attachments/926517364588158976/928407520089899108/profile-pic.png?width=492&height=492',
        developer:'MERN stack Developer',
        role:'Backend Developer'
    },
    {
        name: "MD NURUL AFSAR FAHIM",
        image:'https://media.discordapp.net/attachments/926517364588158976/927915378942803978/IMG_20211211_001051-removebg-preview.png?width=376&height=492',
        developer:'MERN stack Developer',
        role:'Backend Developer'

    },
    {
        name:'MD MAHIM SHARIAR',
        image:'https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/83861169_638300583588632_3798155784487960576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a4a2d7&_nc_eui2=AeEhfv79SC78_VRg8ed9UCd7qJh4Tg5imfmomHhODmKZ-QuOA-7QIVjS1-BxHeDUPf6mnh8XUQmOFmmobtGLe94Y&_nc_ohc=Uh0XoHxlTy4AX9DA6NW&_nc_ht=scontent.fdac99-1.fna&oh=00_AT-XUa2AQRn93N4WfQ_d9rhDC0mlDVFaPzsMQTImUQuMAQ&oe=61FB8248',
        developer:'FrontEnd Developer',
        role:'Frontend & UI Designer'
    }
]


const Team = () => {
    return (
        <div className="team">
            <h1 style={{fontWeight:700}}>OUR DEVELOPERS TEAM </h1>

            <div className="team-row">
                {teamData.map((data) => <SingleTeamMember  data={data}/>)}
            </div>

        </div>
    );
};

export default Team;