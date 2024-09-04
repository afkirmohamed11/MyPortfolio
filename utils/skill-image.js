
import docker from '/public/svg/skills/docker.svg';
import java from '/public/svg/skills/java.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import cassandra from '/public/svg/skills/cassandra.png';
import PowerBI from '/public/svg/skills/powerbi.svg';
import sql from '/public/svg/skills/sql.svg';
import oracle from '/public/svg/skills/oracle.svg';
import microsoftsqlserver from '/public/svg/skills/microsoftsqlserver.png';
import git from '/public/svg/skills/git.svg';
import linux from '/public/svg/skills/linux.svg';
import gitlab from '/public/svg/skills/gitlab.svg';
import github from '/public/svg/skills/github.svg';
import airflow from '/public/svg/skills/airflow.svg';
import spark from '/public/svg/skills/spark.png';
import hadoop from '/public/svg/skills/hadoop.svg';
import kafka from '/public/svg/skills/kafka.svg';
import machineLearning from '/public/svg/skills/machinelearning.jpeg';
import deepLearning from '/public/svg/skills/deeplearning.svg';
import nlp from '/public/svg/skills/nlp.jpeg';






export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'python':
      return python;
    case 'java':
      return java;
    case 'sql': 
      return sql;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql
    case 'sqlserver':
      return microsoftsqlserver;
    case 'oracle':
      return oracle;
    case 'hadoop':
      return hadoop;  
    case 'spark':
      return spark;
    case 'kafka':
      return kafka;
    case 'airflow':
      return airflow;
    case 'mongodb':
      return mongoDB;
    case 'cassandra':
      return cassandra;
    case 'powerbi':
      return PowerBI;
    case 'docker':
      return docker;
    case 'machinelearning':
      return machineLearning;
    case 'deeplearning':
      return deepLearning;  
    case 'nlp':
      return nlp;
    case 'git':;
    return git;
    case 'linux':
      return linux;
    case 'gitlab':
      return gitlab;
    case 'github':
      return github;
    default:
      return null; 
  }
};