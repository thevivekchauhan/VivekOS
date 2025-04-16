import ResumePDF from "./Vivek-Resume.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/bitbeast.jpg";
import Freelance from ".././../assets/images/data/Freelance2.png";
import PayPal from ".././../assets/images/data/icoderz.webp";

const user = {
	firstName: "Vivek",
	lastName: "Chauhan",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "thechauhanvivek@gmail.com",
	linkedIn: "in/thevivekchauhan",
	gitHub: "thevivekchauhan",
	twitter: "vivekchauhan005",
	aboutMe: {
		intro: " I'm a Front-end Developer from India.",
		description:
			"I am a highly motivated and hardworking individual seeking a challenging role in a reputable organization where I can apply my skills and continue to grow. Although I am new to ReactJS, I have a strong foundation of knowledge and expertise in web development, and I am confident in my ability to learn quickly and adapt to new technologies.",
		outro: "My goal is to leverage my expertise in front-end development, video editing, and storytelling as a travel vlogger to create impactful experiences and drive innovation.",
	},
	experiences: [
		{
			organization: "Iconderz",
			organizationPicture: PayPal,
			isCurrent: true,
			startDate: "April 2025",
			endDate: null,
			positions: [
				{
					positionName: "Laravel Developer",
					startDate: <span style={{ color: 'white' }}>April 2025</span>,
					endDate: <span style={{ color: 'white' }}> Present</span>,
					isPresent: true,
					description:<span style={{ color: 'white' }}>
						Working as part of the Team, responsible for the development experiences.</span>
				},
			],
		},
		{
			organization: "Bitbeast",
			organizationPicture: KloudGin,
			isCurrent: false,
			startDate: <span style={{ color: 'white' }}>"Oct 2023"</span>,
			endDate: <span style={{ color: 'white' }}>"Sep 2024"</span>,
			positions: [
				{
					positionName: "Web Developer",
					startDate: <span style={{ color: 'white' }}>Oct 2023</span>,
			endDate: <span style={{ color: 'white' }}> Sep 2024</span>,
					isPresent: true,
					description:<span style={{ color: 'white' }}>
						Working on live projects has honed my problem-solving abilities and deepened my understanding of real-world application development . Guidance from senior team members has allowed me to refine my skills and adopt best practices in frontend development . I continuously strive to enhance my skill set by staying updated with emerging frontend technologies and industry trends . In addition to my frontend development skills, I create engaging vlogs that provide insights into company projects and team achievements.</span>
				},
			],
		},
		{
			organization: "Freelancer",
			startDate: "2023",
			endDate: "Present",
			organizationPicture: Freelance,
			isCurrent: false,
			positions: [
				{
					positionName: "Web Developer, Video Editor, and Graphic Designer",
					startDate: <span style={{ color: 'white' }}>2024</span>,
					endDate: <span style={{ color: 'white' }}>Present</span>,
					isPresent: false,
					description:<span style={{ color: 'white' }}>
						I am a freelance developer where I develop personalized websites with a responsive layout for desktops, tablets, and smartphones. My expertise includes designing eye-catching banners, logos, and cartoon images. I also take on video editing projects, enhancing visuals with a professional touch. I am proficient in using tools like Adobe Photoshop, Adobe Illustrator, and Adobe Premiere Pro to create stunning graphics and videos. My goal is to deliver high-quality work that meets my clients' needs and exceeds their expectations. I am dedicated to providing exceptional service and building long-lasting relationships with my clients. I am always open to new opportunities and challenges, and I look forward to collaborating with you on your next project.</span>
				},
			],
		},
	],
	education: [
		{
			instituteName: "K.S.V Gandhinagar",
			degree: <span style={{ color: 'white' }}>Bachelor's of Computer Application (BCA). Focused on fundamental computer science subjects including programming, database management, and networking. In addition, I have gained practical experience in web development and design.</span>,
			year: <span style={{ color: 'white' }}>2019 - 2022</span>,
			id: 2,
		},
		{
			instituteName: "G.L.S Ahmedabad",
			degree: <span style={{ color: 'white' }}>Master of Science in Information Technology (M.Sc IT). Currently pursuing advanced topics such as machine learning, and full-stack development. I am also gaining hands-on experience in web development and design.</span>,
			year: <span style={{ color: 'white' }}>2024 - 2026</span>,

			id: 3,
		},
	],
	
	projects: [
		{
			projectName: "Find government job",
			description: <span style={{ color: 'white' }}>
                The purpose of this website is to serve as a centralized platform for individuals seeking employment opportunities within government agencies at various levels, including local, state, and federal.
            </span>,
			madeWith: ["HTML", "CSS"],
			link: "https://thevivekchauhan.github.io/GovHub/index.html",
			openInNewTab: true
		},
		{
			projectName: "Jewellery Website",
			description: <span style={{ color: 'white' }}>
                I've designed my portfolio to present my expertise, past projects, and experiences in an attractive format, offering potential employers and clients a detailed look at my capabilities and accomplishments.
            </span>,
			madeWith: ["HTML", "CSS"],
			link: "https://thevivekchauhan.github.io/sonu/index.html",
			openInNewTab: true
		},
		{
			projectName: "vivekpassx",
			description: <span style={{ color: 'white' }}>
                I have developed this website to help how strong your password is. It is a password strength checker tool that helps you to create a strong password. It is a free online tool that helps you to create a strong password.
            </span>,
			madeWith: ["React", "HTML", "CSS", "JavaScript"],
			link: "https://vivekpassx.netlify.app/",
			openInNewTab: true
		},
		{
			projectName: "vivekcodex",
			description: <span style={{ color: 'white' }}>
                I have developed this website to help you send secret messages securely. Whether it's for your friends, partner (GF, BF), or siblings, you can share coded messages that only those who know this website can understand, so share the link. Keep your conversations private and secure.
            </span>,
			madeWith: [
				"HTML",
				"CSS",
				"JavaScript",
				"React"
			],
			link: "https://vivekcodex.netlify.app/",
			openInNewTab: true
		},
		{
			projectName: "vivekportfoliox",
			description: <span style={{ color: 'white' }}>
                You can create your portfolio using this website in just four simple steps. Follow the process & your beautiful portfolio!
            </span>,
			madeWith: ["HTML", "CSS", "JavaScript"],
			link: "https://vivekportfoliox.netlify.app/",
			openInNewTab: true
		}
	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"React JS",
				"HTML",
				"JavaScript",
				"CSS",
				"PHP",
				"Laravel",
			],
		},
		{
			name: "Tools/IDE",
			values: ["VSCode","Git","Postman"],
		},
		{
			name: "Database",
			values: ["MySQL", "Laravel" ],
		},
		{
			name: "Games",
			values: ["Chess", "Carrom" ],
		},
		{
			name: "Graphic Design",
			values: ["Logo", "Banner","Portfolio" ],
		},
	],
};

export default user;