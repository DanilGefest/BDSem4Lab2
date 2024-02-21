db.Students.insertOne(
    {
        "first_name": "Danil",
        "middle_name": "Evgenyevich",
        "last_name": "Zemtsev",
        "birth_year": 2002,
        "course": 2,
        "specialisation": "PI",
        "group": "PI-221",
        "foreignLang": [
            "chineese",
            "english",
            "german"    
    ]
    }
)


db.Students.insertOne(
    {
        "first_name": "Roman",
        "middle_name": "Romanovich",
        "last_name": "Imamov",
        "birth_year": 2003,
        "course": 2,
        "specialisation": "PI",
        "group": "PI-221",
        "foreignLang": [
            "chineese",
            "german"    
    ]
    }
)


db.Students.insertMany(
    [{
        "first_name": "Semen",
        "middle_name": "Dmitrievich",
        "last_name": "Bogulanov",
        "age": 19,
        "yearOfAdmission": 2022,
        "course": 2,
        "group": "PI-221",
        "hobbies": [
            "bilyard",
            "hobbyhorsing",
            "running"    
        ],
        "foreignLang": [
            "english",
            "chineese",
            "german"    
        ]
    }
,
{
    "first_name": "Sergey",
    "middle_name": "Alexeevich",
    "last_name": "Usikov",
    "age": 24,
    "yearOfAdmission": 2022,
    "course": 2,
    "group": "PI-221",
    "hobbies": [
        "Yoga",
        "Bycycle",
        "cooking"    
    ],
    "foreignLang": [
        "english",
        "chineese",
        "french"    
    ]
} ])

db.Students.find({first_name: "Semen",  course: 2})


db.Students.find({foreignLang: ["chineese", "german"]}).pretty()