/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import fuguBanner from "../assets/blog/fugu_banner.png";
import fuguMiddle from "../assets/blog/fugu_middle.jpg";
import fuguBottom1 from "../assets/blog/fugu_bottom1.png";
import fuguBottom2 from "../assets/blog/fugu.png";
import Digibanner from "../assets/blog/digibanner.jpg";
import Digibannermobile from "../assets/blog/digibannermobile.png";
import Mtn from "../assets/blog/mtn.png";
import Mtn1 from "../assets/blog/mtn1.png";
import Mtn2 from "../assets/blog/mtnbanner.png";
import Picbanner from "../assets/blog/picbanner.png";
import scefbanner from "../assets/blog/job_banner.jpg";
import scefbanner1 from "../assets/blog/scefbanner.jpg";
import scefbannermobile1 from "../assets/blog/scefbanner.jpg";
import socialbanner from "../assets/blog/social_media.png";
import pitchers from "../assets/blog/pitchers_banner.png";
import ninani from "../assets/blog/winner.jpeg";
import Pic1 from "../assets/blog/Picture 1.jpg"
import Pic2 from "../assets/blog/Picture 2.jpg"
import Profile1 from "../assets/blog/profile1.jpg";
import Profile2 from "../assets/blog/profile2.jpg";
import Profile3 from "../assets/blog/profile3.jpg";
import Valbanner from "../assets/blog/valbannermain.png";
import Val1 from "../assets/blog/v2.png";
import Valbannermobile from "../assets/blog/val.jpeg";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import CommentForm from "./CommentForm";


const blogPosts = [

  

    {
        id: 1,
        category: "Insight",
        title: "The Audience Most Marketing Teams Forget to Woo on Valentine's Day.",
        excerpt: `As soon as the January "dryness" starts to fade, the month of February swoops in, bringing with it a season of love. Walk through Makola or scroll through social media, and you’ll see a relentless wave of red and white.`,
        image: Valbanner,
        imagemobile: Valbannermobile,
        photo1: Val1,
        author: "Philomina Akekudaga",
        date: "February 14, 2026",
        profile: Profile3,
        content: `As soon as the January "dryness" starts to fade, the month of February swoops in, bringing with it a season of love. Walk through Makola or scroll through social media, and you’ll see a relentless wave of red and white. Teddy bears and heart-shaped chocolates take over the market, and it gets some people wondering:`,
        content1: `Is Valentine’s Day in Ghana strictly for couples? Are businesses doing too much for couples and not enough for the rest in a market full of dedicated family-oriented people, active friend groups, and hardworking singles? Here's why it seems like businesses are trapped in a romantic cycle and how things are gradually changing.`,
        header1: `The "Couple-Centric" Obsession`,
        content2: `Traditionally, Valentine’s Day in Ghana has been marketed as a high-stakes performance of romantic love, which is evident in most brand advertisements during the period. We see ads where hotels are offering "Romantic Candlelit Dinners for Two" and perfume stores telling customers to "Get her the scent that says I love you."There’s generally a heavy focus on the significant other, inadvertently ignoring the reality of the modern Ghanaian demographic and a massive population of people who may not have a "Val" but definitely have money to spend.`,
        content3: `When a brand's entire marketing strategy for February focuses solely on 'Love and Romance,' it misses revenue opportunities by neglecting themes of friendship, self-love, and various celebratory occasions throughout the month.Perhaps the biggest oversight in these campaigns is the disconnect from Ghanaian culture itself. In Ghana, love is communal. It is the solidarity we show our neighbours, the deep respect for our elders, and the bond we share as family. Framing Valentine’s Day solely through a Western lens of dating and relationships ignores the very communal fabric that defines us.`,
        header2: `The Shift: Is the Tide Turning?`,
        content7: `Fortunately, the approach is gradually shifting. Valentine’s campaigns are gradually moving away from the traditional romantic clichés seen around the world. Several Ghanaian brands have begun to embrace love as a concept that extends beyond romance, allowing for diverse expressions and inclusivity. A clear indication of this shift is observed on National Chocolate Day, organized by the Ghana Tourism Authority, which has increasingly broadened its emphasis beyond couples and romantic ties. Brands like Kingsbite and Golden Tree are now marketing chocolate as a gift to be shared among parents, teachers, coworkers, and children.`,
        content8: `There is also a growing recognition of Galentine's Day, which celebrates female friendship and sisterhood. Brunches, dinners, spa packages, and networking events targeted at women are becoming increasingly popular in Accra and other urban centers.This signals a clear opportunity for brands to target organized friend groups, young professional women, and community-based networks who are willing to spend on shared experiences.`,
        content9: `Such a shift is not only timely but also evidence-based, as research shows that campaigns rooted in community and family values drive stronger engagement and long-term loyalty (Takyi et al., 2025). Brands that align with this cultural reality stand to capture wider audiences and build deeper connections that unlock greater revenue opportunities. Ultimately, everyone appreciates a good deal, regardless of their relationship status. `


    },
    {
        id: 2,
        category: "Award",
        title: "Interactive Digital Celebrates MTN Ghana’s Historic Achievement",
        excerpt: "It’s a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications.",
        image: Mtn,
        imagemobile: Mtn,
        photo1: Mtn1,
        photo2: Mtn2,
        author: "Philomina Akekudaga",
        date: "January 09, 2025",
        profile: Profile3,
        content: `It’s a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications. This remarkable achievement is a testament to their commitment to excellence and innovation in the telecommunications industry.`,
        content1: `As MTN Ghana's dedicated digital marketing agency for the past five years, Interactive Digital has played a pivotal role in this success story. Our comprehensive suite of marketing services has been instrumental in driving MTN Ghana's digital presence and market leadership. We've utilized consistent social media management, strategic digital marketing for brand visibility and customer engagement, as well as high-quality content marketing to achieve the results we celebrate today.`,
        content2: `“In celebrating MTN Ghana's remarkable achievements, I reflect on the inspiring 6-year journey we have embarked on together. It has been a privilege to have contributed to driving the attainment of a modern connected life for all and sundry, and we are excited to continue pioneering innovative solutions for all our clients,"  commented Interactive Digital's Chief Operating Officer, Ekow Thompson.`,
        content3: `“He added that this milestone fuels the commitment of Interactive Digital to pushing creative boundaries and enhancing the digital experience for all. We extend our heartfelt congratulations to MTN Ghana as we look back fondly on the incredible work we’ve created together. A truly rewarding experience. We are inspired to push ourselves to new heights of innovation and excellence in digital marketing. Here's to celebrating this milestone and looking forward to many more achievements together as we continue to evolve our services and stay at the forefront of advertising.`,


    },
    {
        id: 3,
        category: "Insight",
        title: "Why Digital Storytelling Matters and How Interactive Digital Is Making It Count.",
        excerpt: "You’re scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it.",
        image: Digibanner,
        imagemobile: Digibannermobile,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        profile: Profile1,
        content: `You’re scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it. This is the power of Storytelling and how it has evolved gradually over the period. Forward thinking brands are now moving beyond conventional storytelling to a more creative form that emotionally resonates with their target audience. `,
        content1: `To help young creatives have a grasp on telling engaging stories, Interactive Digital’s IDEA BOOTCAMP initiative held a lecture at the University of Ghana on 27th May 2024 with the Communications class on Digital Storytelling/Reputation Building in digital spaces. The lecture was facilitated by two (2) seasoned professional creatives from Interactive Digital, Whitney Thompson and Afia Kwakyewaa Nyantakyi. They delved into the essential components of storytelling, creating a Content Calendar and Managing Digital Reputation.`,
        content2: `Afia commenced the lecture highlighting how fundamental storytelling is to our culture and its evolution over time from Folklore, Scrolls, Books, Radio/Tv to Digital Platforms. She elaborated that, regardless of how and the medium through which stories are told, the ability to captivate and engage people through interesting narratives that ignite emotions lies at the core. She further explained how digital storytelling has transformed the way stories are told by blending traditional storytelling techniques with digital forms. “Unlike the traditional forms of storytelling, digital platforms make way for interaction, visuals and sound that enriches the narrative experience.”`,
        content3: `Drawing from case studies, they reiterated how big brands like Nike use storytelling to create advertising campaigns that resonate well with people. Nike’s “Believe in Something” campaign typifies this strategy by highlighting themes of perseverance, determination and real emotional testimonies from athletes that are thought provoking. During the session, Whitney also delved into Creating Content Calendars and why it is essential in Content Creation. She highlighted the fundamental purpose of content calendars as a blueprint for “organising and scheduling content for consistent posting on digital platforms.”`,
        content4: `She stressed that “any content marketing strategy must include a content calendar to help make sure that content is organised, timely, and successfully in line with the overall marketing objectives” of the brand. Moving to a pivotal topic that some brands mostly take for granted, Afia Kwakyewaa Nyantakyi took the students through the nuances of Digital Reputation Management which is essential for brands in today’s global community. She pointed out that managing a brand’s reputation effectively is the main key to success for every organisation or business. Particularly, it demands “staying ahead of the curve with a strategic approach and being deliberate about whatever you say” in the digital space.`,
        content5: `Afia reaffirmed by this using The Arab Spring and Palestine’s genocide as a practical illustration of how these events rapidly spread online and how different narratives influenced global opinions and actions. Throughout the lecture, the students actively participated in the discussions and shared their insights on Storytelling, Content Calendars and Digital Reputation Management. At the end, they expressed deep gratitude for the enlightening experience shared by Whitey and Afia. This lecture served as a testament to Interactive Digital’s commitment to bringing valuable industry insights into the classroom to bridge the gap between academia and industry.`,


    },
    {
        id: 4,
        category: "News",
        title: "Interactive Digital and Street Children Empowerment Foundation (SCEF) Host Successful ‘Sound of Freedom’ Movie Screening to Raise Funds for Street-Connected Children Initiatives.",
        excerpt: "It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film “Sound of Freedom” at the AMA Omanye Aba Hall in Accra.",
        image: scefbanner1,
        imagemobile: scefbannermobile1,
        author: "Judith Abani",
        date: "October 18, 2024",
        profile: Profile2,
        content: `It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film “Sound of Freedom” at the AMA Omanye Aba Hall in Accra. The event, organized to raise funds to support SCEF’s initiatives in creating awareness about child exploitation and trafficking, was a resounding success. The event brought together civil society advocates, supporters, and corporate partners, all united in their commitment to making a positive difference in the lives of street-connected children. `,
        content1: `Following the screening, Apiorkor Seyiram Ashong-Abbey moderated an insightful panel discussion on the devastating impact of child exploitation and trafficking to our future generations and the critical role individuals can play in combating this growing menace. She was joined by Paul Semeh, Founder & Executive Director, Street Children Empowerment Foundation (SCEF). “The abuse these trafficked children are subjected to is what drives me to go out and find street-connected children and try to put them into schools. The fight against this issue is bigger than any one organization. We need everyone to unite in combating this crisis that’s stealing the future of innocent children,” he commented.`,
        content2: `The event was the culmination of months of hard work and collaboration between SCEF and Interactive Digital (!D). Our agency was at the helm of a creative strategic and digital campaign aimed at amplifying SCEF’s cause. Our team, led by Mr. Ekow Thompson, Chief Operations Officer, graced the occasion to show our support for this significant event. “Our support for SCEF’s initiatives is a testament to our belief in driving purpose beyond profits. At !D, we are committed to leveraging our creative and technological expertise to make a meaningful impact on society. Supporting street-connected children is not just a cause; it aligns with our core values of integrity, teamwork, and empathy. We believe that by working together, we can create lasting change and inspire others to join us in this mission. We extend our heartfelt appreciation to the Ninani Group, CRENSHAW and to all the partners who lent us resources in cash and in kind to make this a success.”, Mr. Ekow Thompson said. Join us in supporting SCEF’s mission to empower street-connected children. Together, we can make a difference.`,
    },
    {
        id: 5,
        category: "Insight",
        title: "Leveraging Platform Specific Features For Digital Communication",
        excerpt: "Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding",
        image: Picbanner,
        imagemobile: Picbanner,
        photo1: Pic1,
        photo2: Pic2,
        author: "Philomina Akekudaga",
        date: "June 07, 2024",
        profile: Profile3,
        content: `Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding. But by fully grasping how these features work, we can enhance the effectiveness of digital communication strategies. As part of efforts to equip students with practical knowledge and skills to harness the features of digital platforms in their academic and professional endeavors, Interactive Digital’s IDea Bootcamp in partnership with University of Ghana held a lecture at the University of Ghana on 7th June 2024. Two seasoned professionals from Interactive Digital; Fredrick Tackie-Yarboi and Jade Appiah-Lartey tutored on ways in which the Features of Digital Platforms can be leveraged for optimum Digital Communications. `,
        content1: `The facilitators began the session amidst an atmosphere of curiosity, asking the students about the various digital platforms they are familiar with, their features and how they utilize them to connect with each other.  Most of the students shared their first- hand experience with some features of the most popular digital platforms. The prevailing notion throughout the interactive session was that most of the students are familiar with the features of the predominant digital platforms but do not fully understand their potential. To better understand the topic at hand, Fred provided a comprehensive overview of the intricacies of digital platform features spanning Multimedia sharing, Messaging and chats, Content creation tools, Interactive features of tools, Analytics and metrics, Community Building, Advertising and promotion, Event Management, Collaborative Events and Customized profiles pages.`,
        content2: `Towards the end, the facilitators had an engagement session where they answered a range of questions from the students. Overall, the students gathered a deep understanding of platform – specific features and how they can harness them in their future career in Digital Communications. Interactive Digital’s IDea Bootcamp initiative is committed to sharing practical knowledge and industry expertise. Idea Bootcamp is not merely a trend, but a deliberate effort towards impacting knowledge to create a more robust and agile workforce for the future.`,
    },
    {
        id: 6,
        category: "News",
        title: "Going Beyond the Digital Canvas: Interactive Digital paints smiles on the faces of street-connected children for Christmas.",
        excerpt: "Christmas was a little different this time here at ID. We partnered with the Street Children Empowerment Foundation (SCEF) to share the joy of Christmas with street-connected children and children in vulnerable situations.",
        image: scefbanner,
        imagemobile: scefbanner,
        author: "Philomina Akekudaga",
        date: "December 29, 2023",
        profile: Profile3,
        content: `Christmas was a little different this time here at ID. We partnered with the Street Children Empowerment Foundation (SCEF) to share the joy of Christmas with street-connected children and children in vulnerable situations.`,
        content1: `The heartwarming event unfolded at the Accra Rehabilitation Center, where we played Santa through donations in cash and kind gestures, spreading Christmas cheer with over 100 street-connected children and children in vulnerable situations all over Accra.`,
        content2: `Our commitment to making a positive social impact was evident during the event that took place on the 29th of December, 2023 as employees volunteered time off to spread the joy of the season with the children at SCEF. In a true display of the Christmas spirit, we demonstrated the agency's ongoing commitment to give back to the local community, leaving a lasting impression on the most vulnerable members of our society.`,
        content3: `From dancing competitions to face painting, bouncy castles, and drama, the children enjoyed a range of engaging activities. Each child left not just with a full belly, but also with some new clothes.`,
        header1: "Transforming Lives Through Collective Action",
        content7: `"We believe not only in the transformative power of collective action especially during a season like this but more importantly, in ensuring that the smiles on these little faces never stop beaming. Our collaboration with SCEF allows us to contribute to the well-being of these beautiful children and we are humbled to have been allowed to contribute to transforming their lives." Oluwatoyin Opeodu, Senior Account Manager, highlighted during the event.`,
        header2: "Compassion Beyond Profits",
        content8: `Speaking in an interview after the event, Ekow Thompson, Chief Operating Officer, emphasized on the need for Corporate Social Investment. “As a company, we firmly believe that success should not only be measured in profits but also in the positive change we bring to the communities we serve. Investing in social impact programs, such as supporting these beautiful little souls is not just a one-off activity; it is an opportunity to make a real difference in their future lives. This partnership is a testament to the power of compassion, reminding us that every act of kindness, no matter how small, has the potential to light up and transform lives.”`
    },
    {
        id: 7,
        category: "Insight",
        title: "Before Social Media Was A Thing, Humans Ran The Algorithm.",
        excerpt: "Today is World Social Media Day, and chale, we’ve come a long way. It feels like just yesterday we were meticulously crafting our Facebook profiles and sending slightly awkward messages from a busy internet café computer.",
        image: socialbanner,
        imagemobile: socialbanner,
        author: "Philomina Akekudaga",
        date: "June 30, 2025",
        profile: Profile3,
        content: `Today is World Social Media Day, and chale, we’ve come a long way. It feels like just yesterday we were meticulously crafting our Facebook profiles and sending slightly awkward messages from a busy internet café computer, wondering if we would ever catch on. But before the endless scrolls and viral dances, how did we scratch that deep human itch to connect, share, and simply be social?`,
        header1: "When Social Was Physical",
        content1: `In Ghana, our earliest form of social media wasn’t digital; it was deeply communal. We’ve always been storytellers, news carriers and connection seekers.
        Before the internet, messengers relayed official news from chiefs and kings. Travelers and traders became our informal feed, spreading updates across towns and villages.`,
        content2: `The village notice board? That was our community homepage. And the market? Our original trending hub, where buying met gossip, conversation, and real-time banter. Fireside stories were the first group chats, preserving history and values through oral tradition. Folklore was our version of content creation.`,
        content3: `With rising literacy and the establishment of formal postal systems, letters became a popular means of connecting and sharing information with people across distances. In all this, our impulse to announce, debate, and connect has been the foundational building block on which all the traditional and social media platforms we use today are built.`,
        header2: "Dial-Up to Digital",
        content7: `Thanks to social media, our local village squares have gone global. For us in Ghana, this digital shift truly picked up in the 2000s. It started with email services like Yahoo Mail and Hotmail, then early chat apps like Yahoo Messenger and MSN (popular from 2003). Next came Skype (2003), Hi5 (2006), and Facebook (popular in Ghana by 2009–2011), followed by Twitter, which gained traction in 2009.`,
        content8: `BBM was the big flex from 2009 to 2011 on BlackBerry phones in Ghana and Nigeria—until WhatsApp (founded in 2009) and Viber (2010) took over and BlackBerry lost its grip. Around that time, 2go (2009) also became the go-to teen chatroom on low-data feature phones. By 2010–2011, Instagram turned us into curators, carefully choosing what to show the world. Snapchat brought the filters by 2015, and TikTok (launched in 2016, global by 2020) has made us all content creators and storytellers.`,
        content9: `Now we connect, share, and vibe differently—and we’re loving it. This is because social media has grown from a fun distraction for sharing into a powerful space for storytelling, business, advocacy and sometimes, pure vawulence. However, navigating this space isn’t always straightforward. Sometimes, it’s hard to tell what we’re real and what’s just hype. The pressure to keep up, misinformation and the slow loss of personal privacy are all part of the experience now. As users, we’re constantly balancing between staying connected and staying mindful.`,
        header2_extra: "A Toast to the Digital Journey", // Using existing fields creatively
        content4: `Today, on World Social Media Day, we acknowledge it all—the cringey throwbacks, the TikTok stars, the influencers, the keyboard warriors, the quiet lurkers, and everyone who’s ever typed “Lemme just post small” and ended up going viral. We’ve come significantly further, but the journey is still unfolding. The platforms may change. The algorithms will shift. But the “social” in social media? That’ll always be us.`,
        content5: `Happy World Social Media Day! May your captions be sharp, your followers be loyal, and your mum never find your X handle.`
    },
    {
        id: 8,
        category: "Award",
        title: "𝐈𝐧𝐭𝐞𝐫𝐚𝐜𝐭𝐢𝐯𝐞 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐒𝐡𝐢𝐧𝐞𝐬 𝐚𝐭 𝟐𝟎𝟐𝟓 𝐏𝐢𝐭𝐜𝐡𝐞𝐫𝐬 𝐀𝐰𝐚𝐫𝐝𝐬 𝐚𝐧𝐝 𝐖𝐞’𝐫𝐞 𝐉𝐮𝐬𝐭 𝐆𝐞𝐭𝐭𝐢𝐧𝐠 𝐒𝐭𝐚𝐫𝐭𝐞𝐝!",
        excerpt: "Interactive Digital is proud to have earned a Silver Award at the 2025 Pitchers Festival of Creativity for our Use of Influencers in the Stanbic Bank Youth Banking campaign, Your Plug.",
        image: pitchers,
        imagemobile: pitchers,
        author: "Philomina Akekudaga",
        date: "May 17, 2025",
        profile: Profile3,
        content: `Interactive Digital is proud to have earned a Silver Award at the 2025 Pitchers Festival of Creativity for our Use of Influencers in the Stanbic Bank Youth Banking campaign, Your Plug. We were shortlisted in four standout categories: SCEF Free the Children Campaign (Design Craft), Stanbic Bank This Is It Campaign (Design Craft), Stanbic Bank Youth Banking (Use of Influencers) and Malta Guinness Sleek Can (Business Impact). Securing the Silver win for our work on the Stanbic Bank Youth Banking–Use of Influencers category is rewarding for our team.`,
        content1: `This recognition isn’t just a nod to our team, it’s a moment to reflect on the journey, the bold creative risks, and the cultural intuition that shaped this campaign from the ground up. Influencer marketing has evolved beyond a trend and has become a powerful and nuanced way to connect with Gen Z and Millennial audiences. But for us, impact has never been about just following the wave. It’s about showing up with authenticity, cultural fluency, and a willingness to listen, learn, and create work that resonates.`,
        content2: `That’s the standard we held ourselves to with the Stanbic Youth Banking campaign. We leaned in to what young Ghanaians were saying, their frustrations, dreams, and desire for a relatable, human financial partner. Instead of walking the traditional path, we built relationships with creators who didn’t just represent the audience; they were part of it.`,
        content3: `Together, we sparked real conversations about money, goals, and everyday challenges, because when the message is real, the impact is deeper. This Silver win is a milestone we’re proud of, and it reminds us what’s possible when we meet the culture where it lives. But we’re not slowing down. Excellence is the compass, and we’re still chasing the gold.`,
        content4: `Huge thanks to Stanbic Bank for believing in this vision, to our creative collaborators, and to the young people who made this campaign truly come alive. You’re the reason we keep striving. Here’s to what we’ve built and what we’re building next.`,
    },
    {
        id: 9,
        category: "News",
        title: "Interactive Digital Wins the 2025 NINANI Premier League.",
        excerpt: "They say, “All work and no play makes Jack a dull boy.\" Stepping away from the daily office routine for sports and recreation gives teams a chance to recharge, bond, and return with renewed energy.",
        image: ninani,
        imagemobile: ninani,
        author: "Philomina Akekudaga",
        date: "December 20, 2025",
        profile: Profile3,
        content: `They say, “All work and no play makes Jack a dull boy.\" Stepping away from the daily office routine for sports and recreation gives teams a chance to recharge, bond, and return with renewed energy. This spirit of balance and teamwork was on full display at the 2025 edition of the NINANI Premier League, which added another proud milestone to Interactive Digital’s (!D) record of excellence and collaboration. The event, held at the AIS Sports Complex on the 19th of September 2025, brought together all six (6) agencies under the NINANI Group for a day of competition, camaraderie and celebration.`,
        content1: `Interactive Digital delivered a strong performance across multiple activities, demonstrating both skill and determination. Our team secured three gold medals in the male push-ups, 100-metre race, and football categories, as well as two silver medals in the tug of peace and penalty shootout. We triumphed over Innova-P2P to win the football tournament, the highlight of the day, which earned us the overall champion’s trophy and a cash prize of GH¢5,000.`,
        header1: "Focus on Well-being and Team Spirit",
        content2: `Human Resources Manager Mrs Akosua Apau Aworae highlighted the importance of the event for staff well-being and team spirit. “As a business, we see our staff as our biggest asset. We spend a lot of our time in the workspace. So there is always the opportunity to come out, relax, have fun, and bond.”`,
        content3: `In the same spirit, our Chief Operating Officer, Mr Ekow Thompson, remarked on the success and the spirit of teamwork that led to the victory. \"We are incredibly grateful to God for today, when we get to celebrate our collective teamwork and the excellent work of the planning committee for injecting much-needed fun into our corporate lives. Our victory truly exemplifies teamwork, making the dream work. Despite various attempts to create winning formulae by combining star team members from different companies, we proudly brought the trophy home. We pray for continued strength and courage to pursue excellence. Congratulations to all participating team members.\"`,
        header2: "A Culture of Excellence",
        content7: `The 2025 NINANI Games gave us a chance to celebrate our people, embrace healthy competition and reaffirm a winning culture that extends beyond the field. The energy and unity displayed on the pitch are the same qualities that continue to drive Interactive Digital toward future success.`,
    },

      {
        id: 10,
        category: "Insight",
        title: "The Accidental Brand Campaign of the Year.",
        excerpt: "Let's be honest: if you've ever attended a Ghanaian funeral, wedding, naming ceremony or even just a random Sunday church service, you already know that Ghanaians do not play when it comes to dressing up.",
        image: fuguBanner,
        imagemobile: fuguBanner,
        middleImage: fuguMiddle,
        photo1: fuguBottom1,
        photo2: fuguBottom2,
        author: "Philomina Akekudaga",
        date: "May 4, 2026",
        profile: Profile3,
        content: `Let's be honest: if you've ever attended a Ghanaian funeral, wedding, naming ceremony or even just a random Sunday church service, you already know that Ghanaians do not play when it comes to dressing up. Our fashion has a history of colorful, proudly handwoven roots that stretch across every region of the country.`,
        content1: `This month, we celebrate the Fugu, tracing its origins and craft, following its style evolution from a regional garment to a national symbol, breaking down the viral Ghana-Zambia brouhaha that took it global; and drawing out the marketing lessons that make it a case study every brand strategist should pay attention to.`,
        header1: "Origins and Craft",
        content2: `The Fugu or Batakari, as it is also widely known, is a smock garment handwoven on narrow strip looms, found predominantly in Northern Ghana's three northern regions. It is made from locally grown cotton that is spun, dyed and woven entirely by hand, a process that can take days for a single garment.`,
        content3: `This weaving process reflects a long-standing craft tradition with skills passed from one generation to the next within families and communities. The Dagomba, Gonja, Frafra and Kasem people all have weaving traditions, each with subtle differences in pattern, weight and colour palette. In many of these communities, the loom is a family's economic and cultural lifeline.`,
        content3b: `Traditionally, the Fugu was a man's garment, worn by elders, chiefs and warriors. The heavyweight version, almost armour-like in its density, was believed to provide spiritual protection. And frankly, wearing one does make you feel like you could handle anything.`,
        header2: "The Style Evolution",
        content7: `For much of the 20th century, the Fugu was viewed through a narrow lens and sometimes even dismissed as old-fashioned by urban southerners (a conversation Ghana has been slowly but surely correcting). That began to change as Ghanaian cultural pride deepened and as northern intellectuals, politicians and artists proudly wore their heritage into mainstream spaces.`,
        content8: `Contemporary Ghanaian fashion designers have also taken the Fugu and run with it by designing Fugu blazers, Fugu-print accessories, Fugu-inspired womenswear, and even Fugu streetwear. Fashion weeks in Accra regularly feature these creations. Instagram is full of young Ghanaians rocking Fugu with sneakers, which is, objectively, one of the coolest looks on earth.`,
        header3: "The Viral Online Brouhaha That Changed Everything",
        content9: `No conversation about the Fugu's recent rise to international prominence would be complete without addressing the unlikely cultural flashpoint that accelerated it. The Ghana-Zambia Fugu debate swept across African social media and sparked a global conversation about textile identity, cultural ownership and cross-border fashion solidarity.`,
        content9b: `It all began when Zambians mocked the traditional Ghanaian attire on social media, comparing it to a "blouse" and questioning whether the Ghanaian President, John Dramani Mahama, borrowed it from his wife, Lordina Mahama. Ghanaians quickly jumped to his defense, educating Zambians about the cultural significance of the Fugu, a traditional smock from northern Ghana. The clapback snowballed into something neither side expected, drawing in historians, fashion designers, weavers, and everyday citizens from both countries.`,
        content9c: `The Fugu is now officially recognised in Ghana as Wednesday Wear, encouraging people across sectors to wear the Fugu or other northern traditional attire every Wednesday. The conversation ended with a positive cultural outcome, making more people appreciate the attire and the tradition behind it.`,
        header4: "Duty-Free Access For Fugu Into Zambia",
        content10: `On the Zambian side, the debate sparked a renewed appreciation for the shared textile heritage of the African continent. Zambian President Hakainde Hichilema expressed admiration for the Fugu and announced he would be ordering some for himself.`,
        content10b: `As demand for the Fugu grew in Zambia, both among tourists attending the exhibitions and among ordinary Zambians who had caught Fugu fever through social media, questions arose about the cost and legality of importing the garment. The Zambia Revenue Authority (ZRA) moved swiftly to address the uncertainty by announcing that the Fugu could be imported from Ghana for personal use without attracting duty or taxes.`,
        content10c: `The announcement was significant on several fronts. For individual buyers, it removed a financial barrier that might have otherwise made the attire prohibitively expensive. Subsequently, GEPA, in collaboration with Zambia's tourism authorities, officially opened the Ghana-Zambia Fugu and Kente Exhibition at the Lusaka Showgrounds to promote cultural diplomacy and create new business opportunities within Africa's growing creative economy.`,
        header5: "The Challenge: Fakes and Fast Fashion",
        content11: `Not everything sold as Fugu is authentic. As demand has grown, so have machine-made imitations designed to look like the real smock but produced without the traditional weaving process. These cheaper versions reduce the income of genuine weavers and weaken the cultural value of the garment.`,
        content11b: `This is a common issue with traditional textiles. Fabrics such as Kente also face mass-produced copies. Many people believe the way forward is clearer certification, better public awareness and a willingness to pay fair prices for authentic craft. The duty-free clarification from the Zambia Revenue Authority makes it easier to import Fugu for personal use, but it also means buyers need to be careful about where they purchase it. Customs rules cannot tell the difference between a handwoven smock from Bolgatanga and a factory-made imitation. That responsibility rests with the buyer.`,
        header6: "Marketing Lessons for Brands",
        content12: `The layers of meaning attached to a product increase its emotional value, moving it from a functional item to a cultural symbol. That is a significant shift in branding terms.`,
        content12b: `There is also a straightforward but often overlooked marketing lesson here: you do not always need a big campaign. Sometimes you just need the right person wearing the right thing in the right room. Visibility from credible figures reframes a product and widens its audience.`,
        content12c: `Underlying all of this is the fact that cultural authenticity is increasingly rare and therefore exceptionally valuable. Consumers are drawn to products with a real story behind them. The Fugu has that story. The challenge and the opportunity are to protect and communicate it clearly so that the authenticity driving its value is never lost to imitation or dilution.`,
    },
];

const BlogDetail = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        website: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.fullName &&
            formData.email &&
            formData.website &&
            formData.message
        ) {
            setComments([...comments, formData]);
            setFormData({ fullName: "", email: "", website: "", message: "" });
        } else {
            alert("Please fill in all required fields.");
        }
    };



    const { id } = useParams();
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        navigate(`/blog${category !== "All" ? `?category=${category}` : ""}`);
    };
    const blogPost = blogPosts.find((post) => post.id === parseInt(id));

    if (!blogPost) return <div className="mt-[100px] flex items-center justify-center h-[500px] ">Blog post not found!</div>;

    return (
        <div className="bg-[#F7F8F9] min-h-screen mt-[100px] overflow-hidden">
            {/* Categories / Tags Navigation */}
            <div className="w-full overflow-x-auto no-scrollbar pt-8">
                <div className="w-max mx-auto px-4 flex justify-center items-center gap-6 md:gap-10 text-[13px] font-semibold text-[#A32626]">
                    <span onClick={() => handleCategorySelect("All")} className="cursor-pointer hover:text-black transition-colors">All</span>
                    <span onClick={() => handleCategorySelect("Insight")} className="cursor-pointer hover:text-black transition-colors">Insights</span>
                    <span onClick={() => handleCategorySelect("News")} className="cursor-pointer hover:text-black transition-colors">News</span>
                    <span onClick={() => handleCategorySelect("Award")} className="cursor-pointer hover:text-black transition-colors">Awards</span>
                </div>
            </div>

            <div className="max-w-[1125px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <main className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden">
                    {/* Hero image — full-width cover, no whitespace */}
                    <div className="w-full overflow-hidden">
                        <img
                            src={blogPost.image}
                            alt={blogPost.title}
                            className="w-full h-[300px] md:h-[460px] object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Title + author row */}
                        <span className="text-[#B3261E] font-bold text-[11px] tracking-wider uppercase block mb-3">
                            {blogPost.category}
                        </span>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            {blogPost.title}
                        </h1>
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                            <img
                                src={blogPost.profile}
                                alt="Author"
                                className="w-10 h-10 object-cover rounded-full flex-shrink-0"
                                loading="lazy"
                            />
                            <div className="flex-1 flex flex-wrap justify-between items-center gap-2">
                                <span className="text-sm font-semibold text-gray-800">{blogPost.author}</span>
                                <span className="text-sm text-gray-400">{blogPost.date}</span>
                            </div>
                        </div>

                        {/* Content blocks */}
                        <div className="prose-base text-gray-700 leading-[1.85] space-y-5">
                            {blogPost.content && <p>{blogPost.content}</p>}
                            {blogPost.content1 && <p>{blogPost.content1}</p>}

                            {blogPost.header1 && (
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 !mt-8 !mb-3">
                                    {blogPost.header1}
                                </h2>
                            )}
                            {blogPost.content2 && <p>{blogPost.content2}</p>}
                            {blogPost.content3 && <p>{blogPost.content3}</p>}
                            {blogPost.content3b && <p>{blogPost.content3b}</p>}

                            {/* Middle image */}
                            {blogPost.middleImage && (
                                <div className="!my-8 overflow-hidden rounded-xl">
                                    <img
                                        src={blogPost.middleImage}
                                        alt="Blog illustration"
                                        className="w-full h-[280px] md:h-[420px] object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            {blogPost.header2 && (
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 !mt-8 !mb-3">
                                    {blogPost.header2}
                                </h2>
                            )}
                            {blogPost.content7 && <p>{blogPost.content7}</p>}
                            {blogPost.content8 && <p>{blogPost.content8}</p>}

                            {blogPost.header3 && (
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 !mt-8 !mb-3">
                                    {blogPost.header3}
                                </h2>
                            )}
                            {blogPost.content9 && <p>{blogPost.content9}</p>}
                            {blogPost.content9b && <p>{blogPost.content9b}</p>}
                            {blogPost.content9c && <p>{blogPost.content9c}</p>}

                            {blogPost.header4 && (
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 !mt-8 !mb-3">
                                    {blogPost.header4}
                                </h2>
                            )}
                            {blogPost.content10 && <p>{blogPost.content10}</p>}
                            {blogPost.content10b && <p>{blogPost.content10b}</p>}
                            {blogPost.content10c && <p>{blogPost.content10c}</p>}

                            {blogPost.header5 && (
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 !mt-8 !mb-3">
                                    {blogPost.header5}
                                </h2>
                            )}
                            {blogPost.content11 && <p>{blogPost.content11}</p>}
                            {blogPost.content11b && <p>{blogPost.content11b}</p>}

                            {blogPost.header6 && (
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 !mt-8 !mb-3">
                                    {blogPost.header6}
                                </h2>
                            )}
                            {blogPost.content12 && <p>{blogPost.content12}</p>}
                            {blogPost.content12b && <p>{blogPost.content12b}</p>}
                            {blogPost.content12c && <p>{blogPost.content12c}</p>}

                            {/* Bottom photo gallery */}
                            {(blogPost.photo1 || blogPost.photo2) && (
                                <div className={`!my-8 grid gap-4 ${blogPost.photo1 && blogPost.photo2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                                    {blogPost.photo1 && (
                                        <div className="overflow-hidden rounded-xl">
                                            <img
                                                src={blogPost.photo1}
                                                alt="Blog detail"
                                                className="w-full h-[280px] md:h-[340px] object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                    {blogPost.photo2 && (
                                        <div className="overflow-hidden rounded-xl">
                                            <img
                                                src={blogPost.photo2}
                                                alt="Blog detail"
                                                className="w-full h-[280px] md:h-[340px] object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}

                            {blogPost.content4 && <p>{blogPost.content4}</p>}
                            {blogPost.content5 && <p>{blogPost.content5}</p>}
                        </div>

                        {/* Share row */}
                        <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                            <span className="font-semibold text-gray-700">Share</span>
                            <div className="flex gap-4 text-gray-500 text-lg">
                                <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-[#FF0226] transition-colors" /></a>
                                <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-[#FF0226] transition-colors" /></a>
                                <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-[#FF0226] transition-colors" /></a>
                                <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-[#FF0226] transition-colors" /></a>
                            </div>
                        </div>

                        {/* Comments Section */}
                        <CommentForm />
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="space-y-6">
                    {/* Search */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                        />
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                        <div className="space-y-3">
                            {[...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3).map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    className="flex gap-3 hover:bg-gray-50 p-2 rounded-xl transition"
                                >
                                    <div className="flex-shrink-0 overflow-hidden rounded-lg">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-gray-800 text-sm font-semibold line-clamp-2 leading-snug">
                                            {post.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex justify-between hover:text-gray-900 transition cursor-pointer">
                                <span>Design News</span><span className="text-gray-400">(1)</span>
                            </li>
                            <li className="flex justify-between hover:text-gray-900 transition cursor-pointer">
                                <span>Information Technology</span><span className="text-gray-400">(2)</span>
                            </li>
                            <li className="flex justify-between hover:text-gray-900 transition cursor-pointer">
                                <span>New Concepts News</span><span className="text-gray-400">(1)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="bg-white p-5 rounded-2xl shadow-md">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Design", "Development", "AI", "HTML", "CSS", "Media"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-700 rounded-full text-xs font-medium transition cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetail;
