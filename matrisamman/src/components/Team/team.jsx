import React from 'react';
import Nav from '../Landing/nav';
import TeamCard from './TeamCard';

function Team() {
  const committee = [
    {
      name: 'Rtn. Sirsanya Bandopadhyay',
      role: 'President',
      image: 'Sirsanya.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Rtn. Arka Kr. Nag',
      role: 'Chairperson',
      image: 'Arka.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Rtn. Subham Das',
      role: 'Convenor',
      image: 'Subham.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Rtn. Supratim Sarkar',
      role: 'Deputy Convenor',
      image: 'Supratim.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Mr. Soumodip Adhikary',
      role: 'Deputy Convenor',
      image: 'Soumodip.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Miss Roshnai Sen',
      role: 'Treasurer',
      image: 'Roshnai.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Mr. Rajdeep Mondal',
      role: 'Accountant',
      image: 'Rajdeep.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    }
  ];

  const teams = [
    {
      title: 'Web Team',
      members: [
        {
          name: 'Stuti Sinha',
          role: 'Lead',
          image: 'Stuti.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Sohom Kumar Sen',
          role: 'Member',
          image: 'Sohom.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        }
      ]
    },
    {
      title: 'Graphics Team',
      members: [
        {
          name: 'Hrishikesh Pan',
          role: 'Lead',
          image: 'Hrishikesh.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Jisita Dhar',
          role: 'Member',
          image: 'Jisita.png',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        }
      ]
    },
    {
      title: 'Social Media & Sponsorship Team',
      members: [
        {
          name: 'Sattwik Singha Roy',
          role: 'Lead',
          image: 'Sattwik.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Arijit Majumder',
          role: 'Deputy Lead',
          image: 'Arijit.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Debjoty Karkun',
          role: 'Member',
          image: 'Debjoty.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Bhavna Barnwal',
          role: 'Member',
          image: 'Bhavna.png',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        }
      ]
    },
    {
      title: 'Content',
      members: [
        {
          name: 'Drisana Bhattacharya',
          role: 'Lead',
          image: 'Drisana.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Medha Banerjee',
          role: 'Member',
          image: 'Medha.png',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Sristi Modak',
          role: 'Member',
          image: 'Sristi.JPG',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        }
      ]
    },
    {
      title: 'Logistics',
      members: [
        {
          name: 'Soumajit Sett',
          role: 'Member',
          image: 'Soumajit.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        },
        {
          name: 'Sreaya Samanta',
          role: 'Member',
          image: 'Sreaya.jpg',
          socials: [
            { type: 'instagram', href: 'https://instagram.com/' },
            { type: 'facebook', href: 'https://facebook.com/' },
            { type: 'linkedin', href: 'https://linkedin.com/' }
          ]
        }
      ]
    }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center font-eagle text-[#5a0404]"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <Nav />
      <div className="px-4 py-12 space-y-12">

        {/* Core Committee Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Matri Samman Core Committee 2025
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {committee.map((member, i) => (
              <TeamCard
                key={i}
                name={member.name}
                role={member.role}
                image={member.image}
                socials={member.socials}
              />
            ))}
          </div>
        </div>

        {/* Other Teams */}
        {teams.map((team, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold mb-6 text-center">{team.title}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {team.members.map((member, i) => (
                <TeamCard
                  key={i}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  socials={member.socials}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
