var bio=
{
	"name":"Ehtisham",
	"role":"Machine",
	"contact":
	{
		"mobile":"0923455650843",
		"email":"ehtisham.haq@evampsaanga.com",
		"github":"https://github.com/EhtishamShami/",
		"twitter":"I got no twitter",
		"location":"Apartement No:202 B Royal Apartements E-11/2,Islamabad, Pakistan",
	},
	"welcomeMessage":"Welcome to ma protofilio which is boring",
	"skills":["DM","Late Commer","Last Bench Student since birth","Garaj Baras","I think thats enough"],
	"biopic":"images/fry.jpg",
	"display":function()
	{
	console.log(bio.contact.mobile);
	}
};
bio.display();

var education={
	"school":[
	{
		"name":"APS",
		"location":"Jhelum Cantt",
		"degree":"Matric",
		"majors":"Math,Bio,Physic,Chem",
		"dates":2010,
		"url":"i dont know nig"
	},
	{
		"name":"Bahria",
		"location":"Islamabad E-8",
		"degree":"Graduation in Software Engineering",
		"majors":"CP,OOP,DSA,DBMS,VP",
		"dates":2016,
		"url":"www.bahria.edu.pk"
	}
	]
	,
	"onlineCourses":[
	{
		"title":"Android Basic: A Nano Degree Program by Google",
		"school":"www.udacity.com",
		"date":2016,
		"url":"www.udacity.com"
	},
		
		{
		"title":"Android Fundamentals: A Nano Degree Program by Google",
		"school":"www.udacity.com",
		"date":2016,
		"url":"www.udacity.com"
		},
		{
		"title":"Android Basic: A Nano Degree Program by Google",
		"school":"oReilly Meida",
		"date":2016,
		"url":"www.udacity.com"
		},
		{
		"title":"Intro to Kotlin Programming, BY Haddi Harriri",
		"school":"oReilly Meida",
		"date":2017,
		"url":"www.oReilly.com"
		},
		{
		"title":"Advance Kotlin Programming, BY Haddi Harriri",
		"school":"www.oReilly.com",
		"date":2017,
		"url":"www.oReilly.com"
		},
		{
		
		"title":"Front-End Web Developer Nanodegree,Co Created by AT& T, Google, GitHub, Hack Reactor",
		"school":"www.udacity.com",
		"date":2017,
		"url":"www.udacity.com"
		}
	],
	"display":function()
	{
		console.log(education.onlineCourses[0].title);
	}
	
	
};

education.display();

var work=
		{"jobs":
		[
		{
			"employer":"Evamp and Saanga",
			"Title":"Software-Engineer",
			"location":"F-8/3 Islamabad, Pakistan",
			"dates":2016,
			"description":"Saanga is love, infact love is in Saanga"
		}
		],
		"display":function()
		{
			console.log(work.jobs[0].description);
		}
			
		};
work.display();


var projects=
		{
			"projects":
			[
			{
				"title":"Sunshine <3",
				"dates":"2016-2016",
				"description":"Sunshine is awesome thats all i want to say <3",
				"images":["images/fry.jpg","images/fry.jpg","images/fry.jpg"],
			},
			{
				"title":"Zain SA B2C APP",
				"dates":"2016-2016",
				"description":"Borring useless atleast i cant use it",
				"images":["images/fry.jpg","images/fry.jpg","images/fry.jpg"],
			},
			{
				"title":"AUDI PK",
				"dates":"2016-2016",
				"description":"I cant even afford to use it :(",
				"images":["images/fry.jpg","images/fry.jpg","images/fry.jpg"],
			},
			{
				"title":"STC B2B",
				"dates":"2016-2016",
				"description":"Lets see what kinda app it will",
				"images":["images/fry.jpg","images/fry.jpg","images/fry.jpg"],
			}
			]
			,
			"display":function()
			{
				console.log(projects.projects[0].description);
			}
			
		};
projects.display();