import React, { useState } from 'react';
import './Skills.css' 

const userSkills = [
    {
        image: "https://t4.ftcdn.net/jpg/02/92/83/57/360_F_292835773_oImixQGFKLpOPnjfsbesHyqdjOk5hsxL.jpg",
        name: "Java",
        desc: "Java This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration"
    },

    {
        image: "https://img-c.udemycdn.com/course/480x270/6369575_2f5c_2.jpg",
        name: "AEM",
        desc: "AEM This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration"
    },

    {
        image: "https://www.excellencetechnology.in/wp-content/uploads/2024/01/CSS-Tutorial.webp",
        name: "CSS",
        desc: "CSS This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration"
    },
    {
        image: "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
        name: "JavaScript",
        desc: "Java Script This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration"
    },

    {
        image: "https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg",
        name: "React",
        desc: "React JS This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration React JS This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration"
    },

    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlol1IHybu271ojgYBSR49jeb7Z3u_tFQhkw&s",
        name: "HTML",
        desc: "HTML This plugin helps to generate dummy text like Full name, Mobile number, Aadhar number, Debit card etc to your text layer to save the time at your end. In upcoming updates, it will also allow users to get contextual data to help more with the copy using chatgpt integration"
    }];
    
function Skills() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <h1 className='main-heading'>Skills</h1>
      <div className='main-conatiner'>
        {userSkills.map((skill, index) => {
          const isExpanded = expandedCards[index];
          const shouldTruncate = skill.desc.length > 150;

          return (
            <div key={index} className={`skill-card ${isExpanded ? 'expanded' : ''}`}>
              <img src={skill.image} alt='Skill' className='skill-card-img' />
              <div className='skill-card-content'>
                <p className='skill-card-title'>{skill.name}</p>
                <p className='skill-card-desc'>
                  {isExpanded || !shouldTruncate
                    ? skill.desc
                    : `${skill.desc.slice(0, 150)}...`}
                </p>
                {shouldTruncate && (
                  <button className='learn-more-btn' onClick={() => toggleExpand(index)}>
                    {isExpanded ? 'Show less' : 'Learn more'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
