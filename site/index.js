const view = {
  header: {
    title: "Benjamin Coomes",
    location: "Columbia, SC",
    email: "bcoomes96@gmail.com",
  },
  summary: {
    title: "Summary",
    text: "I am a backend-focused developer hoping to make the world a greener and healthier place through the application of technology.",
  },
  edu: {
    title: "Education",
    uni: "Clemson University",
    major: "Computer Science (B.S)",
    minor: "Philosophy Minor",
    location: "Clemson, SC",
    gradDate: "May 2018",
    gpa: "GPA: 4.0"
  },
  work: {
    title: "Work Experience",
    experiences: [
      {
        employer: "Softdocs",
        location: "Columbia, SC",
        roles: [
          {
            title: "Application Architect",
            summary: "Design new features and applications for scalability, cost-effectiveness, and satisfying user-experience. Lead teams in the implementation of new features and applications though example, code review, and coaching.",
            startDate: "Jan 2020",
            endDate: "Present",
            details: [
              { summary: "Assisted department's conversion to CI/CD development model." },
              { summary: "Lead implementation of reporting and auditing applications using message-based communication, document databases and relational databases." }
            ]
          },
          {
            title: "Application Developer",
            summary: "Implemented new features and applications. Worked with product owners to define requirements that would balance user needs and implementation cost/complexity.",
            startDate: "May 2018",
            endDate: "Jan 2020",
            details: [
              { summary: "Implemented real-time integrations with a 3rd party ERP provider using serverless technology to host a multi-tenant application." },
              { summary: "Refactored document storage functionality out of a monolithic application and into a microservice." }
            ]
          }
        ]
      },
      {
        employer: "Watt Family Innovation Center",
        location: "Clemson, SC",
        roles: [
          {
            title: "Database Administrator Intern",
            summary: "Helped implement sustainability projects in the new Watt Family Innovation Center building.",
            startDate: "Aug 2017",
            endDate: "Dec 2018",
            details: [
              { summary: "Designed database to hold information about the building's energy use patterns." },
              { summary: "Developed multiple applications to update an energy usage database automatically." }
            ]
          }
        ]
      },
      {
        employer: "Website Pipeline / CIM Cloud",
        location: "Greenville, SC",
        roles: [
          {
            title: "Web Development Intern",
            summary: "Added features to the web interface for an internal version control system and made the site responsive.",
            startDate: "May 2017",
            endDate: "Aug 2017",
          }
        ]
      },
      {
        employer: "Optum Technology",
        location: "Greenville, SC",
        roles: [
          {
            title: "Software Development Intern",
            summary: "Worked on an application that accessed and displayed data located on a mainframe",
            startDate: "May 2016",
            endDate: "Aug 2016",
          }
        ]
      }
    ]
  },
  techSkills: {
    title: "Technical Skills",
    groups: [
      {
        title: "Languages",
        skills: [
          { name: "C#" },
          { name: "HTML / CSS / JS"},
          { name: "Java" },
          { name: "C" }
        ]
      },
      {
        title: "Frameworks",
        skills: [
          { name: "ASP.NET Core" },
          { name: "Aurelia" },
          { name: "Entity Framework" },
        ]
      },
      {
        title: "Practices",
        skills: [
          { name: "Version Control (Git)"},
          { name: "Test-Driven Development" },
          { name: "Hexagonal Architecture" },
          { name: "CI/CD" },
        ]
      },
      {
        title: "Technologies",
        skills: [
          { name: "Azure Service Bus" },
          { name: "RabbitMQ" },
          { name: "Cosmos DB" },
          { name: "SQL Server" },
          { name: "Docker" },
        ]
      }
    ]
  }
}

let resumeElement = document.getElementById('coomes-resume');
const rendered = Mustache.render(resumeElement.innerHTML, view);
resumeElement.innerHTML = rendered;
resumeElement.style.display = "block"
