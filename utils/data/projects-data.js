export const projectsData = [
    {
        id: 1,
        name: 'Kafka Rental Data Pipeline',
        description: "I built a real-time data pipeline for processing and analyzing Moroccan rental data. This pipeline extracts data from a PostgreSQL database, streams it through Apache Kafka, stores it in Amazon S3, and then makes it available for SQL-based analysis using Amazon Athena.",
        tools: ['Python', 'Kafka', 'PostgreSQL', 'Amazon EC2', 'Amazon S3', 'AWS Glue Data Catalog', 'Amazon Athena'],
        role: 'Data Engineer',
        code: '',
        demo: '',
        github_link: 'https://github.com/afkirmohamed11/Kafka_Rental_Data_Project.git'
    },
    {
        id: 2,
        name: 'Agricultural Patent Analysis Data Pipeline',
        description: "My team and I built a comprehensive patent data processing pipeline. We extracted patent data from multiple sources, including Google Patents and CIPO, and stored it in MongoDB, serving as a data lake solution. We transformed the data using Spark and loaded it into a PostgreSQL data warehouse. The data was then visualized and analyzed using Power BI. We also built a user interface using Flask, JavaScript, CSS, and HTML.",
        tools: ['Python', 'MongoDB', 'Power BI', 'Spark', 'PostgreSQL', 'Flask', 'JavaScript', 'CSS', 'HTML'],
        role: 'Data Engineer',
        code: '',
        demo: '',
        github_link: ''
    },
    {
        id: 3,
        name: 'ETL pipeline automated with Airflow',
        description: "I developed an Airflow pipeline for data warehousing. I created a pipeline that periodically extracts data from a MySQL staging area, transforms it with timestamps, and loads it into a PostgreSQL data warehouse.",
        tools: ['Python', 'Airflow', 'MySQL', 'PostgreSQL'],
        role: 'Data Engineer',
        code: '',
        demo: '',
        github_link: 'https://github.com/afkirmohamed11/Airflow_ETL.git'
    },
    {
        id: 4,
        name: 'Property Rental Price Prediction App',
        description: "My team and I built a comprehensive system for predicting apartment prices in Morocco. I performed web scraping from a Moroccan website and preprocessed the data using Python. I developed a hybrid regression model using Gradient Boosting, Random Forest, and Lasso algorithms to predict apartment prices across ten Moroccan cities. Additionally, I built a personalized recommendation system and created a user interface using Flask, HTML, CSS, and JavaScript.",
        tools: ['Python', 'Gradient Boosting', 'Random Forest', 'Lasso', 'Web Scraping', 'Flask', 'HTML', 'CSS', 'JavaScript'],
        role: 'Data Engineer, Data Scientist',
        code: '',
        demo: '',
        github_link: 'https://github.com/afkirmohamed11/RentalHousingPricePrediction.git'
    },
    {
        id: 5,
        name: 'Heart Disease Prediction App',
        description: "I developed a heart disease prediction model using machine learning techniques in Python. I deployed the model with Streamlit and Docker to ensure user-friendly access.",
        tools: ['Python', 'Machine Learning', 'Streamlit', 'Docker'],
        role: 'Data Engineer',
        code: '',
        demo: '',
        github_link: 'https://github.com/afkirmohamed11/HeartDiseacePredictionApp.git'
    },
    {
        id: 6,
        name: 'Exam Management Application',
        description: "My classmate and I developed an exam management web application using Spring Boot, Spring Security, and Spring Data JPA with a JSP frontend and MySQL database. The application facilitated exam management, optimized administration and teacher management, and organized pedagogical elements. We implemented a three-layered architecture with distinct Presentation, Business Services, and Data Access layers, adhering to the MVC model.",
        tools: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'JSP'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        github_link: 'https://github.com/afkirmohamed11/SpringBootExamManagamentApp.git'
    },
    {
        id: 7,
        name: 'Student Desktop Management Application',
        description: "I developed a Python application, implementing the user interface with the Tkinter library and utilizing MySQL for data storage.",
        tools: ['Python', 'Tkinter', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        github_link: 'https://github.com/afkirmohamed11/SchoolStudentManagementApp.git'
    }
];
