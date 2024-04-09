import React from 'react';
import CardCourse from '../Card/CardCourseComponent';

const CourseCard = () => {
  const courses = [
    {
      id: 1,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: 'https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png',
      title: 'DOCKER',
      description: 'Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
  ];

  return (
    <>
      {courses.map(course => (
        <div key={course.id}>
          <CardCourse course={course} />
        </div>
      ))}
    </>
  );
};

export default CourseCard;
