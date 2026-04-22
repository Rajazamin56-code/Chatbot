import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";
export const Message=async(req,res)=>{
    try{
   const {text}=req.body;
   console.log(text)
   if(!text?.trim()){
    return res.status(400).json({error:"Text cannot be empty"});
   }

const user = await User.create({
    sender:"user",
    text
})

//Data   
const botResponses={
  "hello": "Hi! How can I help you today?",
  "hi": "Hello! I'm here to chat and answer your questions.",
  "good morning": "Good morning! Hope you have a productive day ahead.",
  "good night": "Good night! Sleep well and wake up refreshed.",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "can we become friends": "Yes! I would love to chat and be your virtual friend.",
  "what is your name?": "I’m ChatBot, your friendly virtual assistant.",
  "who made you": "I was created by developers to assist and provide information.",
  "tell me a joke": "Why don’t programmers like nature? It has too many bugs!",
  "what is the time": "I can’t see a clock, but your device should show the current time.",
  "bye": "Goodbye! Have a wonderful day ahead.",
  "thank you": "You’re welcome! Happy to help.",
  "i love you": "That's very sweet! I’m always here to help and chat with you.",
  "where are you from": "I live in the cloud, always online and ready to assist!",
  "what can you do": "I can chat, explain concepts, answer questions, and keep you company.",
  
  "what is python": "Python is a high-level, interpreted programming language.\n• Known for its clean syntax and readability\n• Supports multiple paradigms: OOP, procedural, and functional\n• Used for web development, data science, AI, automation\n• Example: Python is used by Google, Instagram, YouTube, and many AI projects.",
  
  "what is java": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' using JVM\n• Used in Android apps, web applications, and enterprise software\n• Features strong memory management, security, and multi-threading.",
  
  "what is html": "HTML (HyperText Markup Language) is used to structure web pages.\n• Uses tags like <h1>, <p>, <div>\n• Works with CSS (design) and JavaScript (interactivity)\n• Example: <h1>Hello World!</h1>",
  
  "what is css": "CSS (Cascading Style Sheets) is used to style HTML pages.\n• Controls colors, fonts, layout, and animations\n• Makes web pages responsive and visually appealing",
  
  "what is javascript": "JavaScript is a programming language used for web interactivity.\n• Runs in browsers to make dynamic content\n• Examples: form validation, interactive maps, games",
  
  "what is oop": "Object-Oriented Programming (OOP) uses objects to model real-world entities.\n• Main concepts: Class, Object, Inheritance, Polymorphism, Abstraction, Encapsulation\n• Improves code organization and reuse",
  
  "what is sql": "SQL (Structured Query Language) is used to manage databases.\n• Commands include SELECT, INSERT, UPDATE, DELETE\n• Example: SELECT * FROM Students WHERE Grade='A';",
  
  "what is recursion": "Recursion is a function calling itself to solve a problem.\n• Requires a base condition to prevent infinite calls\n• Common in factorial, Fibonacci, and tree traversals",
  
  "what is machine learning": "Machine Learning is a subset of AI where systems learn from data.\n• Types: Supervised, Unsupervised, Reinforcement Learning\n• Applications: recommendation systems, image recognition, spam filtering",
  
  "what is data science": "Data Science combines statistics, programming, and domain knowledge to extract insights from data.\n• Steps: data collection, cleaning, analysis, visualization, and modeling\n• Tools: Python, R, SQL, Power BI",
  
  "what is ai": "Artificial Intelligence (AI) enables machines to mimic human intelligence.\n• Tasks include learning, reasoning, and decision-making\n• Used in robotics, virtual assistants, and smart systems",
  
  "what is deep learning": "Deep Learning is a branch of Machine Learning using neural networks.\n• Models like CNNs and RNNs process images, text, and speech\n• Powers applications like self-driving cars and voice assistants",
  
  "what is github": "GitHub is a platform for version control using Git.\n• Developers store code, collaborate, and track changes\n• Supports open-source contributions and team projects",
  
  "what is git": "Git is a distributed version control system.\n• Tracks changes in source code\n• Enables collaboration across teams\n• Commands: git commit, git push, git pull",
  
  "what is api": "API (Application Programming Interface) allows software systems to communicate.\n• Example: A weather app calling an API to get current data\n• Types: REST, SOAP, GraphQL",
  
  "what is cloud computing": "Cloud computing delivers computing resources over the internet.\n• Types: IaaS, PaaS, SaaS\n• Examples: Google Drive, AWS, Microsoft Azure",
  
  "what is debugging": "Debugging is finding and fixing errors in code.\n• Tools: IDE debuggers, print statements, logging\n• Example: Fixing a syntax error in Python",
  
  "what is algorithm": "An algorithm is a step-by-step procedure to solve a problem.\n• Example: Sorting numbers using bubble sort\n• Algorithms are fundamental in programming and software development",
  
  "what is data structure": "Data structures organize data for efficient use.\n• Examples: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs\n• Crucial for optimizing algorithms",
  
  "what is api testing": "API testing checks the functionality, reliability, and performance of APIs.\n• Ensures endpoints respond correctly\n• Tools: Postman, SoapUI, JMeter",
  
  "what is oop concept": "OOP concepts include:\n1. Class & Object\n2. Inheritance\n3. Polymorphism\n4. Abstraction\n5. Encapsulation\n• Helps in building modular and reusable code",
  
  "what is inheritance": "Inheritance allows a class to inherit properties and methods from another class.\n• Promotes code reuse\n• Example: class Car extends Vehicle {}",
  
  "what is polymorphism": "Polymorphism allows methods to perform differently based on context.\n• Types: Compile-time (overloading) & Run-time (overriding)\n• Example: print() in Python prints different types",
  
  "what is abstraction": "Abstraction hides complex details and shows only essential features.\n• Example: Using a remote control without knowing internal circuits",
  
  "what is encapsulation": "Encapsulation restricts direct access to some object components.\n• Example: Private variables in a class with public getter/setter methods",
  
  "what is functional programming": "Functional programming treats computation as evaluation of mathematical functions.\n• Avoids changing state and mutable data\n• Examples: Python, Haskell, Scala",
  
  "what is procedural programming": "Procedural programming organizes code into procedures or functions.\n• Focuses on sequential execution\n• Examples: C, Pascal",
  
  "what is cybersecurity": "Cybersecurity protects systems and networks from digital attacks.\n• Includes encryption, firewalls, anti-virus, intrusion detection",
  
  "what is ethical hacking": "Ethical hacking is legally testing systems to find vulnerabilities.\n• Helps organizations strengthen security",
  
  "what is blockchain": "Blockchain is a distributed ledger technology.\n• Records transactions in blocks linked in a chain\n• Used in cryptocurrencies and secure data systems",
  
  "what is cryptocurrency": "Cryptocurrency is digital money based on blockchain technology.\n• Examples: Bitcoin, Ethereum, Ripple\n• Uses encryption for secure transactions",
  
  "what is interview": "An interview is a formal meeting to assess skills and suitability for a role.\n• Types: Technical, HR, Behavioral\n• Prepare by practicing questions and research",
  
  "how to prepare for an interview": "Steps:\n1. Research company and role\n2. Revise technical concepts\n3. Practice mock interviews\n4. Prepare your introduction\n5. Dress professionally and stay confident",
  
  "what is resume": "A resume is a document summarizing education, skills, and experience.\n• Should be clear, concise, and tailored to the job",
  
  "what is cv": "CV (Curriculum Vitae) is a detailed document of your academic and professional history.\n• Usually longer than a resume and includes publications, achievements",
  
  "what is behavioral question": "Behavioral questions ask about past experiences to predict future behavior.\n• Example: 'Tell me about a time you faced a challenge at work.'",
  
  "what is situational question": "Situational questions present hypothetical scenarios to assess decision-making.\n• Example: 'What would you do if your project deadline was moved up suddenly?'",
  
  "what is hr question": "HR questions assess personality, fit, and soft skills.\n• Examples: strengths, weaknesses, goals, teamwork, and motivation",
  
  "what is technical question": "Technical questions test your knowledge of domain-specific skills.\n• Examples: Coding, algorithms, databases, networking, programming concepts",
  
  "what is leadership": "Leadership is guiding and inspiring a team to achieve goals.\n• Key traits: communication, vision, decision-making, empathy",
  
  "what are soft skills": "Soft skills are interpersonal abilities like communication, teamwork, adaptability, problem-solving, and time management",
  
  "what is teamwork": "Teamwork means collaborating effectively to achieve a shared goal.\n• Example: Completing a group project efficiently",
  
  "what is motivation": "Motivation drives people to achieve goals.\n• Can be internal (self-driven) or external (rewards, recognition)",
  
  "what are your strengths": "Strengths may include problem-solving, adaptability, communication, leadership, learning quickly\n• Example: 'I stay calm under pressure and meet deadlines efficiently.'",
  
  "what are your weaknesses": "Mention real but improvable weaknesses.\n• Example: 'I used to struggle with public speaking, but I’m improving through practice.'",
  
  "how to answer tell me about yourself": "Give a brief intro, highlight skills and achievements, and end with why you're excited about the role.\n• Example: 'I am a CS graduate skilled in Python, worked on a data automation project, and passionate about problem-solving.'",
  
  "who is babar azam": "Babar Azam is the captain and star batsman of the Pakistan cricket team.\n• Known for elegant cover drives and consistent performances\n• Ranked among top batsmen in all formats\n• First Pakistani to score 1000+ T20I runs in a calendar year",
  
  "who is shadab khan": "Shadab Khan is a Pakistani all-rounder.\n• Right-arm leg-spin bowler and aggressive middle-order batsman\n• Plays for Islamabad United in PSL\n• Known for quick fielding and crucial wickets",
  
  "who is shaheen afridi": "Shaheen Afridi is a left-arm fast bowler for Pakistan.\n• Known for swing and pace, especially in early overs\n• Key bowler in Tests, ODIs, and T20Is\n• Plays for Lahore Qalandars in PSL",
  
  "who is hassan ali": "Hassan Ali is a Pakistani fast bowler.\n• Known for death-over bowling and yorkers\n• Played crucial role in Pakistan's 2017 Champions Trophy win",
  
  "who is imam ul haq": "Imam-ul-Haq is a Pakistani top-order batsman.\n• Nephew of former Pakistani cricketer Inzamam-ul-Haq\n• Consistent performer in Tests and ODIs",
  
  "who is fakhar zaman": "Fakhar Zaman is a left-handed opening batsman for Pakistan.\n• Holds record for fastest century by a Pakistani in ODIs\n• Known for aggressive batting at the top",
  
  "who is wahab riaz": "Wahab Riaz is a left-arm fast bowler for Pakistan.\n• Famous for fiery spells in ICC tournaments\n• Played a crucial role in Pakistan reaching the 2011 World Cup semis",
  
  "who is sarfraz ahmed": "Sarfraz Ahmed is a wicketkeeper-batsman and former captain of Pakistan.\n• Led Pakistan to 2017 ICC Champions Trophy victory\n• Known for aggressive leadership and quick glovework",
  
  "when pakistan won world cup": "Pakistan won the ICC Cricket World Cup in 1992 under captain Imran Khan.\n• Beat England in the final at Melbourne Cricket Ground\n• Famous comeback known as 'Cornered Tigers'",
  
  "who is imran khan": "Imran Khan is a legendary Pakistani cricketer and former Prime Minister.\n• Led Pakistan to 1992 World Cup victory\n• Known for all-round skills: batting, bowling, and leadership\n• Played from 1971 to 1992",
  
  "who is wasim akram": "Wasim Akram is a legendary left-arm fast bowler of Pakistan.\n• Known as 'Sultan of Swing'\n• Part of 1992 World Cup-winning team\n• One of the greatest ODI and Test bowlers in cricket history",
  
  "who is waqar younis": "Waqar Younis is a former Pakistani fast bowler.\n• Famous for toe-crushing yorkers and reverse swing\n• Formed deadly bowling duo with Wasim Akram",
  
  "who is shahid afridi": "Shahid Afridi, aka 'Boom Boom Afridi', is a former Pakistani all-rounder.\n• Known for explosive batting and leg-spin bowling\n• Scored the fastest ODI century (37 balls) in 1996",
  
  "who is mohammad hafeez": "Mohammad Hafeez is an all-rounder for Pakistan.\n• Right-handed batsman and off-spin bowler\n• Nicknamed 'The Professor' for his cricketing knowledge and technique",
  
  "who is yasir shah": "Yasir Shah is a leg-spin bowler for Pakistan.\n• Key performer in Test cricket\n• Fastest Pakistani bowler to reach 200 Test wickets",
  
  "what is psl": "Pakistan Super League (PSL) is Pakistan's professional T20 cricket league.\n• Started in 2016\n• Teams include Karachi Kings, Lahore Qalandars, Islamabad United, Peshawar Zalmi, Quetta Gladiators, Multan Sultans\n• Promotes local talent and international stars",
  
  "when psl started": "PSL started in 2016 with five teams.\n• Expanded over the years to include six teams\n• Matches played in Pakistan and UAE",
  
  "who won psl 2023": "Lahore Qalandars won PSL 2023.\n• Led by Shaheen Afridi\n• Defeated Multan Sultans in the final",
  
  "who is sarfaraz ahmed": "Sarfraz Ahmed is a Pakistani wicketkeeper-batsman and former captain.\n• Led Pakistan to 2017 ICC Champions Trophy victory\n• Known for leadership and wicketkeeping skills",
  
  "who is hanif mohammad": "Hanif Mohammad, aka 'Little Master', was a legendary Pakistani batsman.\n• Known for defensive technique and patience\n• Played from 1952 to 1969",
  
  "who is zaheer abbas": "Zaheer Abbas, aka 'Asian Bradman', is a former Pakistani batsman.\n• Famous for stylish batting and high scoring\n• Played from 1967 to 1985",
  
  "who is javed miandad": "Javed Miandad is a legendary Pakistani batsman.\n• Known for finishing matches under pressure\n• Famous for last-ball six against India in 1986",
  
  "who is inzamam ul haq": "Inzamam-ul-Haq is a former Pakistani batsman and captain.\n• Known for calm temperament and big-match performances\n• Played from 1991 to 2007",
  
  "who is misbah ul haq": "Misbah-ul-Haq is a former Pakistani captain and batsman.\n• Known for calm leadership and Test performances\n• Led Pakistan to number one Test ranking in 2016",
  
  "who is wahab riaz": "Wahab Riaz is a Pakistani fast bowler.\n• Famous for fiery spells, especially in ICC tournaments\n• Key player in World Cup matches",
  
  "who is fakhar zaman": "Fakhar Zaman is a left-handed batsman.\n• Holds record for fastest century by a Pakistani in ODIs\n• Known for aggressive batting at the top order",
  
  "who is imam ul haq": "Imam-ul-Haq is a top-order batsman.\n• Nephew of Inzamam-ul-Haq\n• Consistent performer in ODIs and Tests",
  
  "who is shaheen afridi": "Shaheen Afridi is a left-arm fast bowler.\n• Known for swing and pace\n• Key bowler in all formats for Pakistan",
  
  "who is shadab khan": "Shadab Khan is an all-rounder.\n• Leg-spin bowler and middle-order batsman\n• Plays for Islamabad United in PSL",
  
  "who is mohammad rizwan": "Mohammad Rizwan is a wicketkeeper-batsman.\n• Known for aggressive batting and consistency\n• Plays for Multan Sultans in PSL",
  
  "who is faf du plessis": "Faf du Plessis is a South African cricketer.\n• Not Pakistani but often plays against Pakistan\n• Former captain of South Africa",
  
  "who is kl rahul": "KL Rahul is an Indian top-order batsman.\n• Known for elegant strokes\n• Plays in IPL and against Pakistan in international matches",
  
  "who is rashid khan": "Rashid Khan is an Afghan leg-spinner.\n• Plays in T20 leagues including PSL\n• Known for economical bowling and wicket-taking ability",
  
  "who is ben stokes": "Ben Stokes is an English all-rounder.\n• Famous for heroics in World Cups\n• Plays in Test, ODI, and T20 formats",
  
  "who is steve smith": "Steve Smith is an Australian batsman.\n• Known for unconventional batting style and consistency\n• Plays in Test and limited-overs cricket",
  
  "who is virat kohli": "Virat Kohli is a former captain of India.\n• Known as 'Chase Master'\n• Famous for aggressive play and fitness",
  
  "who is ms dhoni": "MS Dhoni is former Indian captain and wicketkeeper.\n• Won 2007 T20 World Cup and 2011 ODI World Cup\n• Famous for calm finish in pressure situations",
  
  "who is sachin tendulkar": "Sachin Tendulkar, 'Little Master', is a former Indian batsman.\n• Highest run-scorer in international cricket\n• Played from 1989 to 2013",
  
  "who is younis khan": "Younis Khan is a former Pakistani batsman.\n• Known for long innings and resilience\n• Highest run-scorer for Pakistan in Test cricket",
  
  "who is misbah ul haq": "Misbah-ul-Haq is a former captain.\n• Known for calm leadership and consistency\n• Led Pakistan to number one Test ranking",
  
  "who is wasim akram": "Wasim Akram is a legendary left-arm fast bowler.\n• Master of swing bowling\n• Part of 1992 World Cup-winning team",
  
  "who is waqar younis": "Waqar Younis is a former Pakistani fast bowler.\n• Known for reverse swing\n• Played deadly bowling duo with Wasim Akram",
  
  "who is shahid afridi": "Shahid Afridi is a former all-rounder.\n• Famous for explosive batting and leg-spin bowling\n• Nicknamed 'Boom Boom Afridi'",
  
  "who is mohammad hafeez": "Mohammad Hafeez is an all-rounder.\n• Right-hand batsman and off-spin bowler\n• Nicknamed 'The Professor' for his cricketing skills",
  
  "who is yasir shah": "Yasir Shah is a leg-spin bowler.\n• Key performer in Tests\n• Fastest Pakistani bowler to 200 Test wickets",
  
  "what is odi": "ODI (One Day International) is a cricket format.\n• Each team plays 50 overs\n• Popular format for ICC tournaments",
  
  "what is t20": "T20 cricket is a short format.\n• Each team plays 20 overs\n• Known for fast scoring and entertainment",
  
  "what is test cricket": "Test cricket is the traditional format.\n• Played over 5 days\n• Tests patience, skill, and strategy",
  
  "what is champions trophy": "ICC Champions Trophy is a limited-overs tournament.\n• Held every 4 years\n• Pakistan won in 2017 under Sarfraz Ahmed",
  
  "who won champions trophy 2017": "Pakistan won ICC Champions Trophy 2017.\n• Defeated India in the final\n• Led by Sarfraz Ahmed",
  
  "what is cricket world cup": "The Cricket World Cup is the biggest ODI tournament.\n• Held every 4 years\n• Teams compete for the championship title",
  
  "who won world cup 1992": "Pakistan won the 1992 Cricket World Cup.\n• Led by Imran Khan\n• Famous victory against England in final",
  
  "who is qasim akram": "Qasim Akram is a young Pakistani all-rounder.\n• Plays for Pakistan U19 and PSL\n• Known for bowling and middle-order batting",
  
  "who is shoaib akhtar": "Shoaib Akhtar, 'Rawalpindi Express', is a former Pakistani fast bowler.\n• Known for extreme pace and fiery spells\n• Played from 1997 to 2011",
  
  "who is misbah ul haq": "Misbah-ul-Haq is a former captain and batsman.\n• Known for calm leadership and finishing games in Tests",
  
  "when did pakistan gain independence": "Pakistan gained independence on 14th August 1947.\n• Created as a homeland for Muslims of British India\n• Founder: Quaid-e-Azam Muhammad Ali Jinnah",
  
  "who is quaid e azam": "Quaid-e-Azam Muhammad Ali Jinnah was the founder of Pakistan.\n• Born on 25th December 1876 in Karachi\n• Led the All India Muslim League\n• Passed away on 11th September 1948",
  
  "who is allama iqbal": "Allama Iqbal was a philosopher, poet, and thinker.\n• Born on 9th November 1877 in Sialkot\n• Proposed the idea of a separate Muslim state\n• Died on 21st April 1938",
  
  "who was liaquat ali khan": "Liaquat Ali Khan was the first Prime Minister of Pakistan.\n• Close aide of Quaid-e-Azam\n• Introduced Objectives Resolution in 1949\n• Assassinated in 1951",
  
  "what is lahore resolution": "The Lahore Resolution was passed on 23rd March 1940 at Minto Park.\n• Demanded separate states for Muslims of British India\n• Presented by A.K. Fazlul Haq\n• Became the foundation for Pakistan",
  
  "what is two nation theory": "The Two-Nation Theory stated that Muslims and Hindus are two separate nations.\n• Muslims needed a separate homeland to practice Islam freely\n• Provided the ideological basis for Pakistan",
  
  "who is fatima jinnah": "Fatima Jinnah was the sister of Quaid-e-Azam.\n• Played a vital role in Pakistan Movement\n• Known as 'Mother of the Nation'\n• Contested presidential elections in 1965",
  
  "what is objective resolution": "The Objectives Resolution was adopted in 1949.\n• Laid down the guiding principles for Pakistan’s constitution\n• Emphasized sovereignty of Allah and democratic rights",
  
  "who was zulfiqar ali bhutto": "Zulfiqar Ali Bhutto was the founder of Pakistan Peoples Party (PPP).\n• Served as President (1971–1973) and Prime Minister (1973–1977)\n• Executed in 1979",
  
  "who was benazir bhutto": "Benazir Bhutto was the first female Prime Minister of Pakistan.\n• Served two terms: 1988–1990 and 1993–1996\n• Daughter of Zulfiqar Ali Bhutto\n• Assassinated in 2007",
  
  "who is imran khan": "Imran Khan is a former cricket star and Prime Minister of Pakistan.\n• Founded Pakistan Tehreek-e-Insaf (PTI)\n• Served as Prime Minister from 2018 to 2022",
  
  "who was ayub khan": "Ayub Khan was Pakistan’s President from 1958 to 1969.\n• Introduced Basic Democracies system\n• Initiated industrial and infrastructure projects",
  
  "who was zia ul haq": "Muhammad Zia-ul-Haq was a military ruler of Pakistan (1977–1988).\n• Imposed martial law and Islamization policies\n• Died in a plane crash in 1988",
  
  "who was pervez musharraf": "Pervez Musharraf was a military ruler of Pakistan (1999–2008).\n• Took power via a coup\n• Introduced economic reforms and education initiatives",
  
  "what is pakistan day": "Pakistan Day is celebrated on 23rd March.\n• Commemorates the Lahore Resolution of 1940\n• Marks Pakistan’s transition toward independence",
  
  "what is independence day": "Pakistan celebrates Independence Day on 14th August.\n• Marks freedom from British rule in 1947\n• Celebrated with flag hoisting, parades, and national events",
  
  "who was sir syed ahmed khan": "Sir Syed Ahmed Khan was an educationist and reformer.\n• Founded Aligarh Muslim University\n• Promoted modern education among Muslims",
  
  "who was allama iqbal": "Allama Iqbal was a philosopher and poet.\n• Proposed the idea of a separate Muslim state\n• Known as 'Poet of the East'",
  
  "what is partition": "Partition refers to the division of British India in 1947.\n• Created India and Pakistan\n• Led to mass migrations and communal violence",
  
  "who was m.a jinnah": "Muhammad Ali Jinnah, Quaid-e-Azam, led Muslims to independence.\n• First Governor-General of Pakistan\n• Advocated constitutional and political solutions",
  
  "who was fatima jinnah": "Fatima Jinnah supported the Pakistan Movement.\n• Played role in women’s political rights\n• Contested 1965 Presidential elections",
  
  "what is pakistani constitution": "Pakistan’s Constitution provides the legal framework.\n• First adopted in 1956, then 1962, and 1973\n• Establishes government structure, rights, and laws",
  
  "who was malik ghaffar khan": "Khan Abdul Ghaffar Khan, 'Frontier Gandhi', promoted non-violence.\n• Worked for Pashtun rights and independence\n• Close ally of Gandhi",
  
  "what is civil war 1971": "Civil War in 1971 led to the creation of Bangladesh.\n• Pakistan lost East Pakistan\n• War involved political conflicts and military action",
  
  "who was zulfiqar ali bhutto": "Zulfiqar Ali Bhutto established Pakistan Peoples Party (PPP).\n• Served as President and Prime Minister\n• Executed in 1979",
  
  "who was benazir bhutto": "Benazir Bhutto was Pakistan’s first female Prime Minister.\n• Served two terms\n• Advocated democracy and social reforms",
  
  "who is asif ali zardari": "Asif Ali Zardari, ex-President of Pakistan (2008–2013).\n• Co-chairman of PPP\n• Husband of Benazir Bhutto",
  
  "who is nawaz sharif": "Nawaz Sharif served as Prime Minister three times.\n• Founded Pakistan Muslim League-Nawaz (PML-N)\n• Focused on infrastructure and economic projects",
  
  "who is pervez musharraf": "Pervez Musharraf was military ruler of Pakistan.\n• Took power in 1999 coup\n• Served as President till 2008",
  
  "who was quaid e azam": "Muhammad Ali Jinnah, the founder of Pakistan.\n• First Governor-General\n• Led Muslim League for independence",
  
  "who was allama iqbal": "Allama Iqbal was a philosopher-poet.\n• Proposed idea of separate Muslim homeland\n• Influenced Pakistan Movement",
  
  "who was sir syed ahmed khan": "Sir Syed Ahmed Khan promoted modern education.\n• Founded Aligarh Muslim University\n• Encouraged Muslims to learn Western sciences",
  
  "who was general ayub khan": "Ayub Khan was military ruler of Pakistan.\n• Introduced Basic Democracies\n• Promoted industrial growth",
  
  "who was general zia ul haq": "Muhammad Zia-ul-Haq ruled Pakistan (1977–1988).\n• Implemented Islamization policies\n• Died in plane crash in 1988",
  
  "who was zulfiqar ali bhutto": "Zulfiqar Ali Bhutto founded PPP and served as PM.\n• Known for socialist policies and nuclear program",
  
  "who was benazir bhutto": "Benazir Bhutto served two terms as Pakistan's PM.\n• Advocated democracy and women's rights",
  
  "who was imran khan": "Imran Khan is former PM and cricket star.\n• Founded PTI\n• Led Pakistan 2018–2022",
  
  "who was pervez musharraf": "Pervez Musharraf was President of Pakistan.\n• Took power in 1999\n• Initiated economic and educational reforms",
  
  "what is pakistan day": "Pakistan Day is celebrated on 23rd March.\n• Marks Lahore Resolution 1940\n• Showcases national pride and military parades",
  
  "what is independence day": "Independence Day is on 14th August.\n• Commemorates freedom from British rule\n• Celebrated nationwide with ceremonies and flag hoisting",
  
  "what is lahore resolution": "The Lahore Resolution demanded independent Muslim states.\n• Passed on 23rd March 1940\n• Also called Pakistan Resolution",
  
  "what is objectives resolution": "Objectives Resolution guides Pakistan's constitution.\n• Adopted in 1949\n• Emphasizes Islamic principles in governance",
  
  "what is partition": "Partition was the division of British India in 1947.\n• Created India and Pakistan\n• Led to migration, riots, and new boundaries",
  
  "who was m.a jinnah": "Quaid-e-Azam Muhammad Ali Jinnah led Muslims to independence.\n• First Governor-General\n• Advocated constitutional solutions",
  
  "who was fatima jinnah": "Fatima Jinnah, sister of Quaid-e-Azam.\n• Supported Pakistan Movement\n• Known as Mother of the Nation",
  
  "who was malik ghaffar khan": "Khan Abdul Ghaffar Khan promoted non-violence.\n• Worked for Pashtun rights\n• Ally of Gandhi",
  
  "what is civil war 1971": "1971 Civil War resulted in Bangladesh.\n• Political conflicts escalated into military action\n• Pakistan lost East Pakistan",
  
  "who was ayub khan": "Ayub Khan ruled 1958–1969.\n• Introduced Basic Democracies\n• Promoted industrialization",
  
  "who was zia ul haq": "Muhammad Zia-ul-Haq ruled 1977–1988.\n• Islamized laws\n• Died in plane crash",
  
  "who was pervez musharraf": "Pervez Musharraf ruled 1999–2008.\n• Introduced reforms in economy and education",
  
  "who was zulfiqar ali bhutto": "Zulfiqar Ali Bhutto was PPP founder and PM.\n• Focused on nuclear program and social reforms",
  
  "who was benazir bhutto": "Benazir Bhutto was first female PM.\n• Advocated democracy and women's rights",
  
  "who is asif ali zardari": "Asif Ali Zardari, ex-President 2008–2013.\n• Husband of Benazir Bhutto\n• PPP leader",
  
  "who is nawaz sharif": "Nawaz Sharif served three terms as PM.\n• Focused on infrastructure and economy\n• Leader of PML-N",
  
  "who is prophet muhammad": "Prophet Muhammad (PBUH) is the final messenger of Allah in Islam.\n• Born in 570 CE in Mecca\n• Received the Quran over 23 years\n• United Arabian tribes under Islam\n• Died in 632 CE in Medina",
  
  "who is abu bakr": "Abu Bakr (RA) was the first Caliph of Islam after Prophet Muhammad (PBUH).\n• Close companion and father-in-law of the Prophet\n• Led Muslims during Ridda Wars\n• Died in 634 CE",
  
  "who is umar ibn al khattab": "Umar ibn al-Khattab (RA) was the second Caliph.\n• Known for justice and strong governance\n• Expanded the Islamic empire significantly\n• Assassinated in 644 CE",
  
  "who is uthman ibn affan": "Uthman ibn Affan (RA) was the third Caliph of Islam.\n• Compiled the Quran into a single book\n• Known for generosity\n• Assassinated in 656 CE",
  
  "who is ali ibn abi talib": "Ali ibn Abi Talib (RA) was the fourth Caliph.\n• Cousin and son-in-law of Prophet Muhammad (PBUH)\n• Known for knowledge, bravery, and justice\n• Assassinated in 661 CE",
  
  "who is khadijah": "Khadijah bint Khuwaylid (RA) was the first wife of Prophet Muhammad (PBUH).\n• First person to accept Islam\n• Known for support and wealth\n• Died before Hijrah",
  
  "who is aisha": "Aisha bint Abu Bakr (RA) was a wife of Prophet Muhammad (PBUH).\n• Known for intelligence and narration of Hadiths\n• Played key role in early Islamic history",
  
  "who is fatima": "Fatima (RA) was the daughter of Prophet Muhammad (PBUH).\n• Married to Ali ibn Abi Talib (RA)\n• Mother of Hasan and Husayn\n• Known for piety and devotion",
  
  "what is hijrah": "Hijrah refers to Prophet Muhammad's (PBUH) migration from Mecca to Medina in 622 CE.\n• Marks the beginning of Islamic calendar\n• Led to establishment of the first Islamic state",
  
  "what is quran": "The Quran is the holy book of Islam.\n• Revealed to Prophet Muhammad (PBUH) over 23 years\n• Written in Arabic\n• Contains guidance for personal, social, and spiritual life",
  
  "what is hadith": "Hadiths are sayings, actions, and approvals of Prophet Muhammad (PBUH).\n• Serve as guidance alongside the Quran\n• Collected by scholars in books like Sahih Bukhari and Sahih Muslim",
  
  "what is mecca": "Mecca is the holiest city in Islam.\n• Birthplace of Prophet Muhammad (PBUH)\n• Location of Kaaba, destination of Hajj pilgrimage",
  
  "what is medina": "Medina is the second holiest city in Islam.\n• Prophet Muhammad (PBUH) migrated here in Hijrah\n• Location of Prophet’s Mosque",
  
  "what is kaaba": "Kaaba is the sacred cube-shaped structure in Mecca.\n• Center of Islamic worship\n• Muslims face Kaaba during prayers (Qibla)",
  
  "what is hajj": "Hajj is the annual Islamic pilgrimage to Mecca.\n• Obligatory once in a lifetime for Muslims who are able\n• Includes rituals like Tawaf, Sa’i, and standing at Arafat",
  
  "what is ramadan": "Ramadan is the ninth month of Islamic calendar.\n• Muslims fast from dawn to sunset\n• Time for self-discipline, prayer, and charity",
  
  "what is eid ul fitr": "Eid ul-Fitr marks the end of Ramadan.\n• Celebrated with prayers, feasts, and charity (Zakat al-Fitr)\n• Day of gratitude and joy",
  
  "what is eid ul adha": "Eid ul-Adha commemorates Prophet Ibrahim’s (AS) willingness to sacrifice his son.\n• Involves Qurbani (sacrificial animal)\n• Coincides with Hajj pilgrimage",
  
  "who is abu bakr as siddiq": "Abu Bakr (RA) was first Caliph and close companion of Prophet (PBUH).\n• Known for honesty and leadership\n• Led early Muslim community after Prophet's demise",
  
  "who is umar farooq": "Umar ibn al-Khattab (RA) was the second Caliph.\n• Implemented administrative reforms\n• Expanded Islamic territory to Egypt, Syria, and Iraq",
  
  "who is uthman r.a": "Uthman ibn Affan (RA) was the third Caliph.\n• Standardized the Quran\n• Promoted naval expansion",
  
  "who is ali r.a": "Ali ibn Abi Talib (RA) was the fourth Caliph.\n• Known for justice, bravery, and deep knowledge\n• Fought in major early battles of Islam",
  
  "what is battle of badr": "Battle of Badr (624 CE) was the first major battle of Islam.\n• Muslims, though outnumbered, defeated Quraysh\n• Seen as a sign of divine support",
  
  "what is battle of uhud": "Battle of Uhud (625 CE) was fought near Mount Uhud.\n• Muslims initially gained advantage but faced setbacks\n• Prophet Muhammad (PBUH) was injured",
  
  "what is battle of khandaq": "Battle of Khandaq (Battle of the Trench, 627 CE)\n• Muslims defended Medina by digging a trench\n• Quraysh forces failed to breach defense",
  
  "what is treaty of hudaybiyyah": "Treaty of Hudaybiyyah (628 CE) was a peace treaty between Muslims and Quraysh.\n• Allowed Muslims to perform pilgrimage the following year\n• Strengthened Islam's position in Arabia",
  
  "what is conquest of mecca": "Conquest of Mecca (630 CE) marked Muslims' peaceful takeover of Mecca.\n• Prophet Muhammad (PBUH) granted amnesty to Quraysh\n• Kaaba cleansed of idols",
  
  "who is bilal ibn rabah": "Bilal ibn Rabah (RA) was the first muezzin (caller to prayer).\n• Freed slave and close companion of Prophet Muhammad (PBUH)\n• Known for beautiful voice and devotion",
  
  "who is hamza ibn abdul muttalib": "Hamza ibn Abdul Muttalib (RA) was Prophet Muhammad’s uncle.\n• Known as 'Lion of Allah'\n• Martyred in Battle of Uhud",
  
  "who is khalid ibn walid": "Khalid ibn Walid (RA) was a Muslim general.\n• Known as 'Sword of Allah'\n• Led victories in early Islamic conquests",
  
  "who is sa'd ibn abi waqqas": "Sa'd ibn Abi Waqqas (RA) was a companion of Prophet Muhammad.\n• Led Muslim armies in Battle of Qadisiyyah\n• Instrumental in Islamic expansion to Persia",
  
  "who is umar ibn abdul aziz": "Umar ibn Abdul Aziz was the 8th Umayyad Caliph.\n• Known for justice and piety\n• Implemented reforms favoring common people",
  
  "who is imam abu hanifa": "Imam Abu Hanifa was the founder of Hanafi school of Islamic jurisprudence.\n• Lived 699–767 CE\n• Known for rational and flexible legal opinions",
  
  "who is imam malik": "Imam Malik ibn Anas founded Maliki school of thought.\n• Known for compilation of Hadiths in 'Al-Muwatta'\n• Lived 711–795 CE",
  
  "who is imam shafi": "Imam al-Shafi'i founded Shafi'i school of jurisprudence.\n• Developed principles of Islamic legal reasoning\n• Lived 767–820 CE",
  
  "who is imam ahmad ibn hanbal": "Imam Ahmad ibn Hanbal founded Hanbali school.\n• Known for strict adherence to Hadith\n• Lived 780–855 CE",
  
  "who is imam ghazali": "Imam Al-Ghazali was a renowned Islamic scholar.\n• Lived 1058–1111 CE\n• Wrote 'Ihya Ulum al-Din' emphasizing ethics and spirituality",
  
  "what is hijri calendar": "Hijri calendar is the Islamic lunar calendar.\n• Begins from Hijrah (622 CE)\n• Months include Ramadan, Muharram, Dhul-Hijjah",
  
  "what is aqeedah": "Aqeedah refers to Islamic creed or belief.\n• Core beliefs include Tawheed (Oneness of Allah), Prophethood, Day of Judgment",
  
  "what is shariah": "Shariah is Islamic law derived from Quran and Hadith.\n• Governs moral, social, and personal conduct of Muslims",
  
  "what is tawheed": "Tawheed is belief in the Oneness of Allah.\n• Central concept in Islam\n• Denies any partners or equals to Allah",
  
  "what is salah": "Salah is the Islamic ritual prayer.\n• Performed five times a day\n• Obligatory for every adult Muslim",
  
  "what is zakat": "Zakat is compulsory charity in Islam.\n• Helps the poor and needy\n• One of the Five Pillars of Islam",
  
  "what is sawm": "Sawm is fasting during Ramadan.\n• From dawn to sunset\n• Increases self-discipline and empathy for the poor",
  
  "what is hajj": "Hajj is pilgrimage to Mecca.\n• Obligatory once for capable Muslims\n• Involves rituals like Tawaf, Sa’i, and standing at Arafat",
  
  "what is jihad": "Jihad literally means 'struggle'.\n• Includes personal struggle for righteousness\n• Can also mean defending Islam under ethical rules",
  
  "who is imam ali": "Ali ibn Abi Talib (RA) was the fourth Caliph.\n• Known for knowledge, bravery, and justice\n• Son-in-law of Prophet Muhammad (PBUH)",
  
  "who is imam husayn": "Husayn ibn Ali (RA) was the grandson of Prophet Muhammad (PBUH).\n• Martyred in Karbala in 680 CE\n• Symbol of standing against oppression",
  
  "who is imam hasan": "Hasan ibn Ali (RA) was the elder grandson of Prophet Muhammad.\n• Known for making peace treaty with Muawiya\n• Revered for patience and wisdom",
  
  "who is umm salama": "Umm Salama (RA) was a wife of Prophet Muhammad (PBUH).\n• Known for intelligence and wisdom\n• Narrated many Hadiths",
  
  "who is aisha": "Aisha bint Abu Bakr (RA) was wife of Prophet (PBUH).\n• Played role in early Islamic history\n• Narrated numerous Hadiths."


}
const normalizedText=text.toLowerCase().trim();

const botReply = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot=await Bot.create({
    text:botReply
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
 
    } catch (error){
        console.log("Error in Message Controller:",error);
        return res.status(500).json({error:"Internal server error"});
       
    }
}