db.Students.insertMany(
[{
    "first_name": "Kirill",
    "middle_name": "Sergeevich",
    "last_name": "Mazunin",
    "birth_year": 2002,
    "course": 2,
    "specialisation": "PI",
    "group": "PI-221",
    "foreignLang": [
         "chineese",
         "german"    
    ],
    "Learned_discipline": [
        {"name": "Programming",
        "semester": 1,
        "mark": 3},
        {"name": "Managment",
        "semester": 2,
        "mark": 4},
        {"name": "Math",
        "semester": 1,
        "mark": 3}
    ]    
},
{
    "first_name": "Michail",
    "middle_name": "Urievich",
    "last_name": "Manov",
    "birth_year": 2004,
    "course": 1,
    "specialisation": "MOAm",
    "group": "MOAm-231",
    "foreignLang": [
         "english",
         "chineese"    
    ],
    "Learned_discipline": [
        {"name": "Mobile development",
        "semester": 1,
        "mark": 3},
        {"name": "Operation system",
        "semester": 2,
        "mark": 5},
        {"name": "Informatics",
        "semester": 1,
        "mark": 3}
    ]    
},
{
    "first_name": "Ivan",
    "middle_name": "Petrovich",
    "last_name": "Gudkov",
    "birth_year": 2000,
    "course": 3,
    "specialisation": "FIT",
    "group": "FIT-211",
    "foreignLang": [
         "chineese",
         "english",
         "german"    
    ],
    "Learned_discipline": [
        {"name": "Philosophy",
        "semester": 3,
        "mark": 5},
        {"name": "Statistics",
        "semester": 3,
        "mark": 3},
        {"name": "Math",
        "semester": 1,
        "mark": 3}
    ]    
},
{
    "first_name": "Vasily",
    "middle_name": "Victorovich",
    "last_name": "Pupkin",
    "birth_year": 1999,
    "course": 4,
    "specialisation": "PI",
    "group": "PI-191",
    "foreignLang": [
         "english",
         "german"    
    ],
    "Learned_discipline": [
        {"name": "Programming",
        "semester": 2,
        "mark": 5},
        {"name": "Managment",
        "semester": 2,
        "mark": 5},
        {"name": "Math",
        "semester": 1,
        "mark": 5}
    ]    
}
 ])