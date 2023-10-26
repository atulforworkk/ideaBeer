import React from "react";
import images from "../../../assets/images/imageData/ImageData";
function About() {
  return (
    <div className="">
      <div className="flex flex-row flex-1">
        <div className="image w-1/2">
          <img
            src={images.AboutPageStudentImage}
            alt=""
            className=" h-[600px]"
          />
        </div>
        <div className="content flex-1">
          <h4 className="font-normal opacity-50 pt-40">Who are we</h4>
          <h1 className="text-2xl font-normal">
            A OpenSource Community Helping International and Domestic Student
            ,Get Knowledge ,Share Knowledge
          </h1>
          <p className="pt-2">
            A platform to connect with Student ,Ask your Doubts ,Get
            Answered,Help other, Get Help.Work Together ,So that the whole
            community Grows
          </p>
          <p className="pt-2">
            In the Betterment of student ,
            <br />
            For the student
            <br />
            By the student ,
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p>
            Stack Overflow helps people find the answers they need, when they
            need them. We're best known for our public Q&A platform that
            millions of people visit every month to ask questions, learn, and
            share technical knowledge.
          </p>
        </div>
        <div>
          <p>
            Our products and tools empower people to find what they need to
            develop technology at work or at home. These products include, Stack
            Overflow for Teams, Stack Overflow Advertising, Collectives™ on
            Stack Overflow, and Stack Overflow Talent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
