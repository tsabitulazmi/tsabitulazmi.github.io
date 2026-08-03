import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Airflow } from "@/components/ui/svgs/airflow";
import { MySQL } from "@/components/ui/svgs/mysql";
import { BigQuery } from "@/components/ui/svgs/bigquery";
import { GoogleCloud } from "@/components/ui/svgs/gcp";
import { Excel } from "@/components/ui/svgs/Excel";

export const DATA = {
  name: "Muhammad Tsabitul Azmi",
  initials: "MTA",
  url: "https://tsabitulazmi.github.io",
  location: "Bandung, Indonesia",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "Data Engineer building pipelines that make data usable.",
  summary:
    "I studied Aerospace Engineering at ITB, then moved into data engineering — currently building and maintaining pipelines for regulatory reporting across 9 Indonesian banks, covering daily to yearly submission cycles. Most of my work is in SQL and ETL: PostgreSQL, Pentaho, Airflow, Docker, and Python, processing hundreds of thousands of records a day where a broken pipeline means a missed regulatory deadline. I build pipelines to not fail — and when they do, to fail in a way that's easy to trace.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Postgres", icon: Postgresql },
    { name: "MySql", icon: MySQL },
    { name: "Python", icon: Python },
    { name: "Airflow", icon: Airflow },
    { name: "Docker", icon: Docker },
    { name: "GoogleCloud", icon: GoogleCloud },
    { name: "BigQuery", icon: BigQuery },
    { name: "Spreadsheets", icon: Excel }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "muh.tsabitulazmi@gmail.com",
    tel: "+6285920692813",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tsabitulazmi",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mtsabitulazmi",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "muh.tsabitulazmi@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Asta Protek Jiarsi",
      href: "https://astaprotek.com",
      badges: [],
      location: "South Jakarta",
      title: "Data Engineer",
      logoUrl: "/asta_protek_jiarsi.jpg",
      start: "November 2023",
      end: "Now",
      description: [
        "Designed and maintained data transformation and ETL/ELT pipelines using Python and Pentaho, orchestrated with Apache Airflow and containerized using Docker, ensuring reliable and scalable processing for daily to yearly regulatory reporting workflows.",
        "Designed and implemented the migration of production ETL pipelines from Pentaho to Python and Apache Airflow, standardizing workflow orchestration and simplifying maintenance across multiple reporting processes.",
        "Collaborated with Business Analysts to translate complex client requirements into regulatory-compliant data solutions.",
        "Successfully implemented reporting systems for 9 banks within 2.5 years, managing the full technical life-cycle from initial setup to production.",
        "Developed a validation system to pre-screen data against regulator specifications, significantly cutting down report rejection rates.",
      ],
    },
    {
      company: "PT Geocipta Bangun Optima",
      badges: [],
      href: "https://shopify.com",
      location: "Bandung",
      title: "Research and Development",
      logoUrl: "/gbo.jpg",
      start: "January 2022",
      end: "December 2022",
      description: [
        "Developed research tools for company needs.",
        "Improved the efficiency of Traffic Counting project work by developed an object detection and classification system using Python and OpenCV.",
       ],
    },
    {
      company: "PT Dirgantara Indonesia",
      href: "https://github.com/tsabitulazmi/tsabitulazmi.github.io",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Internship - Flight Data Analyst",
      logoUrl: "/ptdi.jpg",
      start: "January 2020",
      end: "April 2020",
      description: [
        "Analyzed the take-off performance of an aircraft type using Excel.",
        "Predicted the effect of variable changes on the required take-off distance based on applicable regulations."
        ],
    }
  ],
  education: [
    {
      school: "Institut Teknologi Bandung",
      href: "https://ftmd.itb.ac.id/",
      degree: "Bachelor of Science in Aerospace Engineering",
      logoUrl: "/itb.png",
      start: "2017",
      end: "2021",
    },
    {
      school: "SMA Negeri 15 Bandung",
      href: "https://sman15bdg.sch.id/",
      degree: "Science",
      logoUrl: "/sman15.webp",
      start: "2014",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "E-Commerce data pipeline",
      href: "https://github.com/tsabitulazmi/ecommerce-data-pipeline",
      dates: "2026",
      active: true,
      description:
        "This project is an end-to-end data pipeline built to extract, load, and transform (ELT) e-commerce data into a cloud data warehouse. It is designed to be fully containerized and easily orchestratable, answering the need for scalable data architecture.",
      technologies: [
        "Python",
        "SQL",
        "Docker",
        "BigQuery",
        "Google Cloud Platform",
        "Google Cloud Storage",
        "REST API"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tsabitulazmi/ecommerce-data-pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ecommerce.png",
      video: "",
    },
    {
      title: "Enterprise Data Pipeline",
      href: "https://github.com/tsabitulazmi/enterprise-data-pipeline",
      dates: "2026",
      active: true,
      description:
        "This project is an automated, production-ready data pipeline that transforms and tracks customer subscription data. It leverages Apache Airflow for orchestration, dbt (Data Build Tool) for data transformation and quality testing, and Google BigQuery as the cloud data warehouse.",
      technologies: [
        "Python",
        "SQL",
        "Airflow",
        "Docker",
        "dbt",
        "BigQuery",
        "Google Cloud Platform",
        "Google Cloud Storage",
        "Looker Studio"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tsabitulazmi/enterprise-data-pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/enterprise.png",
      video: "",
    },
    {
      title: "Liga 1 Indonesia Football Player Data Exploration",
      href: "https://github.com/tsabitulazmi/Liga1PlayerDataExploration",
      dates: "2023",
      active: true,
      description:
        "I worked on this project based on my passion for data analysis and my hobbies and interest in football.",
      technologies: [
        "Python",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Jupyter Notebook",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tsabitulazmi/Liga1PlayerDataExploration",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "bri_liga1.webp",
      video: "",
    },
    {
      title: "IDCamp - Data Analysis Project",
      href: "https://github.com/tsabitulazmi/IDCamp_DataAnalysisProject",
      dates: "2023",
      active: true,
      description:
        "This project goal is to do Data Exploration Analysis of E-Commerce Public Sales dataset and get some insight from the sales in this E-Commerce that can help to create company decision.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Numpy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tsabitulazmi/IDCamp_DataAnalysisProject",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/idcamp.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
