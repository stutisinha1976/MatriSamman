import React from 'react';
import Nav from '../Landing/nav';
import TeamCard from './TeamCard';

function Team() {
  const committee = [
    {
      name: 'Rtn. Sirsanya Bandopadhyay',
      role: 'President',
      image: 'sirsanya.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Rtn. Arka Kr. Nag',
      role: 'Chairperson',
      image: 'arka.jpg',
      socials: [
        { type: 'instagram', href: 'https://instagram.com/' },
        { type: 'facebook', href: 'https://facebook.com/' },
        { type: 'linkedin', href: 'https://linkedin.com/' }
      ]
    },
    {
      name: 'Rtn. Subham Das',
      role: 'Convenor',
      image: 'shubham.jpg',
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
      image: 'soumodip.jpg',
      socials: [
        { type: 'instagram', href: 'https://www.instagram.com/_rogue_vagabond_?igsh=ZHI4YnFneHRveTB5' },
        { type: 'facebook', href: 'https://www.facebook.com/share/16UPRKyjVp/' },
        { type: 'linkedin', href: 'https://www.linkedin.com/in/soumodip-adhikary-a432a722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
      ]
    },
    {
      name: 'Miss Roshnai Sen',
      role: 'Treasurer',
      image: 'Roshnai.jpg',
      socials: [
        { type: 'instagram', href: 'https://www.instagram.com/roshnai_sen?igsh=dmRlbXhka25uYzR5' },
        { type: 'facebook', href: 'https://www.facebook.com/share/1CbHEGLheS/' },
        { type: 'linkedin', href: 'https://www.linkedin.com/in/roshnai-sen-453368286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
      ]
    },
    {
      name: 'Mr. Rajdeep Mondal',
      role: 'Accountant',
      image: 'Rajdeep.jpg',
      socials: [
        { type: 'instagram', href: 'rajdeep__mondal' },
        { type: 'linkedin', href: 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav' }
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
            { type: 'instagram', href: 'https://www.instagram.com/sohom_sen1?igsh=MTBlcDNpanpndXplaA==' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/sohom-kumar-sen-4a4068218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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
            { type: 'instagram', href: 'https://www.instagram.com/its_hrishi_17?igsh=c3FkM2N6ODBlM2Ey' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/hrisikesh-pan-5560a1288/' }
          ]
        },
        {
          name: 'Jisita Dhar',
          role: 'Member',
          image: 'Jisita.png',
          socials: [
            { type: 'instagram', href: 'https://www.instagram.com/ur.jisita.23?igsh=MThuNXJsem5ubXNiMA==' },
            { type: 'facebook', href: 'https://www.facebook.com/share/17FtrMYLPZ/' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/jisita-dhar-052208330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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
            { type: 'instagram', href: 'https://www.instagram.com/skillupwithsattwik?igsh=YmRjbTF3emhoajZm' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/sattwik-singha-roy-0a6333245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
          ]
        },
        {
          name: 'Snigdha Singha',
          role: 'Member',
          image: 'Snigdha.jpg',
          socials: [
            { type: 'instagram', href: 'https://www.instagram.com/yours_mee.mee?igsh=MTFxcjJ4NnR4bXpnNA==' }
          ]
        },
        {
          name: 'Arijit Majumder',
          role: 'Deputy Lead',
          image: 'Arijit.jpg',
          socials: [
            { type: 'instagram', href: 'https://www.instagram.com/arijitxd?igsh=MTFwb2ozMWNya3lnZA==' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/arijit-majumder-615b35269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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
        },
        {
          name: 'Anitej Mukhopadhyay ',
          role: 'Member',
          image: 'Anitej.jpg',
          socials: [
            { type: 'instagram', href: 'https://www.instagram.com/anitej.mukhopadhyay?igsh=NnRrYjU1NGprMG9p' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/anitej-mukhopadhyay-43b144304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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
            { type: 'instagram', href: 'https://www.instagram.com/drisana_bh_?igsh=MXdvMmh2MWRyaWhiNw==' },
            { type: 'facebook', href: 'https://www.facebook.com/profile.php?id=100088959632482&mibextid=ZbWKwL' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/drisana-bhattacharyya-00a122268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
          ]
        },
        {
          name: 'Medha Banerjee',
          role: 'Member',
          image: 'Medha.png',
          socials: [
            { type: 'instagram', href: 'https://www.instagram.com/c.a.r.e.l.e.s.s_w.h.i.s.p.e.r/profilecard/?igsh=MWgzeXlpaHJuYjNkZQ==' }
          ]
        },
        {
          name: 'Sristi Modak',
          role: 'Member',
          image: 'Sristi.JPG',
          socials: [
            { type: 'instagram', href: 'iti_raai' }
          ]
        }
      ]
    },
    {
      title: 'Logistics',
      members: [
        {
          name: 'Soumajit Sett',
          role: 'Lead',
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
    },
    {
      title: 'Photography',
      members: [
        {
          name: 'Sunniddh Mukherjee',
          role: 'Lead',
          image: 'Sunniddh.jpg',
          socials: [
            { type: 'instagram', href: 'https://www.instagram.com/sanniddhcaptures?igsh=MTdwN3Nwb2RnbWN4Nw==' },
            { type: 'facebook', href: 'https://www.facebook.com/share/1PQuYFUW1R/' },
            { type: 'linkedin', href: 'https://www.linkedin.com/in/sanniddh-mukherjee-428016341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }
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