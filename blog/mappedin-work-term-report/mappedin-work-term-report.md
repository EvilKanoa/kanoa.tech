---
date: Jan 7, 2019
title: "Mappedin: Work Term 1 & 2"
author: Kanoa Haley
---

![Mappedin banner image](mappedin_banner.jpg "Mappedin: We're making the indoors discoverable by building the word processor for indoor mapping.")

# Working at Mappedin
I recently completed a two term co-op at [Mappedin](https://mappedin.com/), an indoor wayfinding startup located in KW. I worked as a full-stack software developer on their enterprise team. This was my second job as a full-stack dev, but my first time working on a team with many moving parts and my first co-op work term. A bit about me before we start, I'm a third-year student studying at the University of Guelph and I'm working towards a Bachelors of Computing in Computer Science with a minor in Mathematics. I've been interested in computer science, and software development in particular, since I was 10 years old. In this post, I will dive into my wonderful experience while working at Mappedin. I hope you'll enjoy my journey and learn a bit about me and Mappedin.

### Contents
- [Who is Mappedin?](#who-is-mappedin): An introduction to the company I worked on during my co-op terms.
- [My Goals](#my-goals): Personal learning goals I worked towards throughout my co-op terms.
- [The Job](#the-job): An in-depth summary of my role at Mappedin.
- [Academic Relation](#academic-relation): How my co-op terms at Mappedin connected to my studies at the University of Guelph.
- [Conclusion](#conclusion): What are the take-aways for both myself from my co-op terms and from this post?
- [Shoutouts](#shoutouts): Some final acknowledgements for all the people who helped and guided me during my terms.

## Who is Mappedin?
Have you ever been shopping at a mall and used one of those digital maps? Then there's a good chance you've used some of Mappedin's software!  

> We’re making the indoors discoverable by building the word processor for indoor mapping.

Mappedin is a relatively young company based out of Waterloo (and previously Kitchener) that primarily develops indoor wayfinding experiences as well as enterprise grade maintenance and mapping tools. Our wayfinding software is currently used by nine out of ten of the largest malls in Canada, the two largest malls in the US, and many other malls world-wide. Mappedin's goal is to make the indoors more discoverable in retail outlets, stores, malls, campuses, airports, and more all around the world!

![Mappedin company photo with employees](company_photo.jpg "Company photo (excluding co-ops)")

Mappedin is currently made up of about 60 employees working in all sorts of departments. Currently, our biggest department is software development, with about 30 people split into individual teams. During my time at Mappedin, I worked on the enterprise team within the software development department.

Mappedin was started in 2011 by a few students at the University of Waterloo. Now, seven years later, it has grown into an international company that impacts millions of people every single day. To summarize, I'll let Mappedin's own [FAQ](https://mappedin.com/faq) do the talking:

> Mappedin is an indoor GIS (geographical information system). In more general terms, we’re a management and productivity tool that delivers a dataset of what’s indoors. This dataset allows property owners and operators to do their jobs better, be more productive and provide better digital experiences to their visitors.

## My Goals
Near the start of my first term at Mappedin, I had to set some learning goals for myself. I created three seperate goals that I worked towards during both my terms at Mappedin. As more time passed, I fleshed out exactly what I wanted for each goal, as well as continuously working on my plan to achieve it. I'd like to dive into those three goals and elaborate on the details and how I went about achieving them.

### 1. Understanding Software Architecture
At the start of my terms, I quickly realized that I didn't have a strong grasp on the software architecture that I was expected to develope for. Because of this, the first goal I developed was simply to gain an understanding of the architecture we used at Mappedin.

> I would like to learn how a microservice software architecture is designed, laid out, and implemented in full.

This was my leading goal throughout the terms, and I think I found it so useful since I was able to understand how many different skills I needed to learn before I could complete it. It was not as simple as learning about one specific thing since I wanted to gain the ability to implement an entire architecture myself. It required learning multiple programming languages, technologies, and dev ops (developer operations) basics. To really explain it, I would like to talk about each of these different "branches" that I had to learn.

#### Programming Languages
Since I was basing my target goal on Mappedin's own architecture, the main language to learn was `JavaScript`. Since I'd already used it before, and during my terms, it seemed like a non-issue. But when it comes to full-stack architecture, I learned that I needed to dive into the different types and versions of `JavaScript` as well as the different intrepreters for it. Luckily, since I had been using the language so much, I didn't have to spend too much time on this. The big take away for me was learning about `JavaScript` versioning, and how [`ECMAScript`](https://en.wikipedia.org/wiki/ECMAScript) defined the different versions of `JavaScript`. Once I was able to do that, I was fairly set for the type of architecture I was trying to learn.

#### Technologies
This was defintely where things started to get interesting. Since "software architecture" is such a broad statement, what I learned here could be vastly different for somebody else, and yet it could achieve the same end result. The big step for me was learning how different types of database (`relational` and `document`) could be leveraged for data stores and caches as well as how to actually use them. Thanks to some of my co-workers, I was able to understand this to a very basic level, which was enough for me to keep pushing forward! Beyond that, there was a lot to be learned about networking and internet protocols. I started by finally learning exactly what `REST` is, a type of "protocol" to talk with data servers. As well, I spent a while learning about `GraphQL`, which can be used in similar places to `REST` but has a lot of different specifics that end up becoming important. Using this knowledge (in addition to an uncountable number of little things I learned along the way), I was able to contribute to our architecture for my second term at Mappedin.

#### Dev Ops
Learning the basics of dev ops is something that I can't honestly say I've done. This was by far the hardest part of my goal for me, and one which I will have to continue pursuing. But I was able to get so much closer than I had planned or hoped so I believe I'll be able to get to the level of understanding that I'd like before too long. 

I think the reason this was the hardest was simply because it was so foriegn to me. Since I've done software development before, learning new programming languages was an old trick. Even learning about databases and communication protocols felt familar. But once I had to start learning about deployments, instance scalling, and cloud architecture configuration, I was totally drowning in new things. I hope that the uniqueness of this will just make it more satisfying to learn about. For now though, I was able to make progress, and I know what I'll be learning for the next little while.

### 2. Developing Technical Writing Skills
For my next goal, I actually used some previous goals of mine to define it. Since I had already worked in the industry previously, I knew how important technical writing skills are. I need to be able to communicate effectively with co-workers to help each other solve problems, I need to be able to write understandable and comprehensive documentation for software that I write or that others have wrote, and I need to be able to document bugs and features as well as action plans for them. These requirements lead me to my second goal, which was just a single facet of technical writing that I thought I needed to improve the most.

> I would like to be able to fully document any bugs and/or features I find during my time on a project. This will be a critical skill no matter the workplace, and especially useful for any development role.

For me, this was a simple contination of skills I've worked on in the past, but with a hard set goal. I had to spend a lot of time getting others to comment on my writing which could result in taking a fair amount of critism. But as I had to write more and more documentation and reports throughout the term, I got much better at communicating my ideas in an efficient manner. For me, to see people use my own documentation and finding it complete and useful was a strong indicator that I was making progress towards my goal. I don't have all that many details about my work for this goal since I believe it's as simple as 123.

1. Write something
2. Recieve feedback
3. Repeat

After enough iterations, you'll start to see improvement. For me, I was able to see my improvements when others had to use my documentation or commented on my reports. This was a good metric to follow my progress and I think I reached a decently efficient level by the end of my terms. This is a goal I think you can work on without ever stopping, but it doesn't hurt to set attainable goals so you can understand your own progress.

### 3. Learning To Teach Others
For my final primary goal, I decided I should focus on an incredibly important professional skill: leadership and teaching. No matter where I've worked, whether in the software industry or part-time retail jobs from high-school, I've always found that the ability to teach others or take a leadership role when required to be a fundemental skill to succeeding at the job for both me personally, and the company professionally. I choose a more generalized goal for this one, since I believe that it's a skill you can always improve and should never stop working towards.

> I want to be a positive help to my co-workers as well as a teacher to anybody who I could potentially help.


## The Job
For my term at Mappedin, I was very lucky to end up in a role that I absolutely loved. I worked as a full-stack software developer on a `React + Express + Mongo` technology stack for the majority of the time I was there. Since I worked on the Enterprise Team, I spent most of my days working on our CMS (__C__ontent __M__angement __S__ystem) which included a 2D and 3D vector-like editor in conjunction with a front- and back-end data management system. I worked on a medium sized team with about five developers, one to two testers, a designer, a manager, and a product owner. Some of which ended up in our team's Christmas photo!

![Enterprise team photo with me and the rest of the team](team_photo.jpg "Most of the enterprise team posing for christmas photos")

My responsibilities at Mappedin changed throughout my first few months there. When you start as a co-op, you're only given what you ask for, and this allows for faster on-boarding as well as a better experience for new co-ops. But since I was able to get through the on-boarding process quickly, I was able to slowly take on more responsibilities including back-end and database focused work. By the end of my term, I was given the lead for a large feature that some of our biggest clients were going to use! I found this progression of increasing responsibility great and it gave me the ability to work at my fullest potential while also providing a wonderful and stress free environment when I was starting.

I now believe that Mappedin's definition of their culture is spot on with my experiences.

> There’s a lot of trust here at Mappedin. We offer a flexible working environment, have a generous vacation policy, and we all work together to help you produce your best work. We stay curious, challenge opinions, take risks, and learn from mistakes. We’re competitive and we like to win together.

Throughout my time working at Mappedin, I had to use a large variety of different skills and technologies. I had a solid foundation of underlying knowledge, both from school and past experiences. I ended up writing code mostly in `JavaScript` with bits of `PostgreSQL` thrown in to the mix. Thanks to my time at [Zeitspace](https://zeitspace.com/) the previous summer, I had lots of experience with `JavaScript` which was refreshed before my terms at Mappedin during __CIS*2750__ at school, where we built a web app in `JavaScript`. I had not used `PostgreSQL` seriously before my terms, but I had used `MySQL` for past personal projects and during `CIS*2750`, so I was able to transfer most of my knowledge and pick it up pretty quickly. Beyond that, I also had to learn a lot more about [`React`](https://reactjs.org/), which I had used before, but never to the extent that I used it at Mappedin. Thanks to past courses on data structures and object-oriented programming, I was able to work my way up to an extensive understanding of `React`. Hopefully it'll be just as easy and fun to learn the technologies for my next job! All in all, I think that most of my hard skills came from past experiences and projects, but those experiences ended up being so useful thanks to the conceptual skills I was able to practice during my studies.

The most interesting thing about my job was simply how rewarding the work was, which was a happy surprise! I think my job was  fairly unique among co-op placements thanks to how quickly my own work was visible out in the world. I remember back to some time in the middle of my first term, when I had contributed and finished my first major addition to our platform. My roommate came back from shopping in a Toronto mall and mentioned a change he had noticed on the digital maps. It was my work! After that, I had all the passion in the world for my work. The ability to create something new, and then end up using it the next week at a mall was incredibly empowering. It was also the final push that made me realize my co-op terms are not just another part of my studies, but that they are a complete introduction to the work-place before I even finish school.

## Academic Relation
// TODO: Write this section

## Conclusion
// TODO: Write this section

## Shoutouts
During my terms at Mappedin, there were so very many people who helped and guided me along the way. I would like to give them all a shout out, but that would take up way too much space. Instead, I would like to acknowledge the people who were pivotal to my work term, my professionally development, and/or contributed to my work towards my goals during the term.

To start, I owe much thanks to my supervisor/manager [Kyle Lewis](https://www.linkedin.com/in/spectacledbear/), who made my entire time at Mappedin wonderful and seamless. In my mind, he has captured exactly what it is to be an amazing leader and manager. He works tirelessly to ensure his whole team is happy and productive, and he does it so well that you may not even notice how great everybody works together. Plus, if you ever have a concern, or a worry, you would never be hesitant to head to Kyle to get it resolved, and you could expect that he will understand and take action. Thank you Kyle, for never settling, never giving up, and always being available and encouraging.

Beyond my manager, I worked closely with [Brad Harris](https://www.linkedin.com/in/brad-harris-20943a17/), my team's technical lead. He was the person who got stuck answering all my questions and helping with all my problems when I started. Despite that, he was always excited to help and would push you into the correct solution in no time. In my mind, Brad is definitely some sort of genius programming machine, his ability to create efficient and intuitive designs was incredibly impressive. But at the same time, Brad was always a cheerful guy and easy to get along with. During my terms, Mappedin had a goal to build their own rock climbing wall. With Brad's help, him and I were able to finish it before I had to leave, mostly thanks to his tireless effort and contagious passion. So, thank you Brad, for teaching me so much more about software development, and most importantly, being a great pal!

Finally, I would like to give a shoutout to [Amaris Gerson](https://www.linkedin.com/in/amarisgerson/), a recruiter at [Square](https://squareup.com/ca). Without her help, I would never have been able to get this job and experience. Before I interviewed at Mappedin, back in February of 2018, I was actually looking into working at Square, but sadly I was unable to get an offer for the position I was working towards. Instead of giving up on me, Amaris sent an absolutely glowing referral to [Joanna Woo](https://www.linkedin.com/in/joannawoo/) (who deserves a whole shoutout of her own), a recruiter at Mappedin, which ended up in an interview there. Thanks to her, I was able to work at Mappedin!
