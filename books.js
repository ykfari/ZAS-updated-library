// Sample book data - Harry Potter series
// Book Collection Data
const books = [
    // Harry Potter Series (7 books)
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "Eleven-year-old Harry Potter discovers he's a wizard and begins an adventure at Hogwarts School of Witchcraft and Wizardry, learning about his magical heritage and facing dangerous secrets.",
        coverImage: "images/stone.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1FjXJTzRrvNsNiP0dA8WE2S_-mbYjSGxr"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "In his second year at Hogwarts, Harry investigates a mysterious message about the Chamber of Secrets being opened, endangering students with a hidden monster inside the school.",
        coverImage: "images/chamber.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets#:~:text=The%20plot%20follows%20Harry's,come%20from%20all%2Dmagical%20families.",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1o9BQx53WemT1DKW1WFo7JREHtEXpKxc5"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "Harry's third year at Hogwarts is threatened by escaped murderer Sirius Black. As sinister prison guards patrol the school, Harry uncovers shocking truths about his past.",
        coverImage: "images/prison.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KIAMZQ8eklLjalukZ13p-Nz2Y8OVvSHg"
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "Harry mysteriously enters the dangerous Triwizard Tournament meant for older students. Facing dragons and dark wizards, he discovers a plot threatening his life and the wizarding world.",
        coverImage: "images/goblet.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1tAD0k_S7lwdJhLx6snnano0yQezBTI6u"
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "As Voldemort returns, Harry joins a secret order fighting dark forces. With the Ministry denying danger and Hogwarts under siege, Harry must learn to protect his mind.",
        coverImage: "images/pheonix.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ebc-aWPZHZZoBV1ddSLgx-bKUr4H0mXY"
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "Harry works with Dumbledore to uncover Voldemort's secrets while suspecting Malfoy of sinister activities. A mysterious potions book and revelations about the past prepare Harry for his destiny.",
        coverImage: "images/prince.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uygxyeEHrB7zuGo9d9FmoG-FFMCyOauN"
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        genre: "Novel, Fantasy Fiction, Adventure",
        description: "In the final battle against Voldemort, Harry must find and destroy the remaining Horcruxes. The quest for three legendary objects—the Deathly Hallows—becomes crucial to defeating his enemy.",
        coverImage: "images/deathly.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uJWQ3ssj_wQQjSSRrT6fi5oalr91VD7s"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian, Fiction, Classic",
        description: "In a totalitarian future society, a man struggles to maintain his identity under an oppressive regime that controls information and manipulates truth.",
        coverImage: "images/1984.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1NqRcHcEJI3ukmZq3nzEmVkOHeoMiCqcP"
    },
    {
        title: "A History of American Literature",
        author: "Richard Gray",
        genre: "Literary Criticism, Reference, Academic",
        description: "Comprehensive overview of American literary traditions from colonial times to the present, examining diverse voices and cultural movements.",
        coverImage: "images/american.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_History_of_American_Literature",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1dtLeFij3RhpgEpVTZhWq4xp4AeJSbktW"
    },
    {
        title: "A Tree Grows In Brooklyn",
        author: "Betty Smith",
        genre: "Historical Fiction, Classic, Drama",
        description: "Young Francie Nolan grows up amid poverty in early 1900s Brooklyn, finding strength in family, education, and her own resilience.",
        coverImage: "images/tree.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Tree_Grows_in_Brooklyn",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1XV4m21ds5eMCxcRoYA8zy-X3He3KWT1B"
    },
    {
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        genre: "Classic, Adventure, Fiction",
        description: "Huck Finn and runaway slave Jim journey down the Mississippi River, encountering adventure, danger, and moral dilemmas in pre-Civil War America.",
        coverImage: "images/finn.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1d2tR-RmfUir94T2Mzc1EDvU247pYX1_u"
    },
    {
        title: "American Fairy Tales",
        author: "L. Frank Baum",
        genre: "Fantasy, Children's, Short Stories",
        description: "Collection of whimsical fairy tales set in America, combining magic with modern settings by the author of The Wonderful Wizard of Oz.",
        coverImage: "images/fairy.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/American_Fairy_Tales",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1-s7z-xtJPge0OBs_JPYK0rIiA0ByPJ45"
    },
    {
        title: "American Literature",
        author: "Various",
        genre: "Anthology, Reference, Academic",
        description: "Anthology of American literature spanning multiple periods and styles, featuring influential works from diverse authors throughout American history.",
        coverImage: "images/literature.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/American_literature",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1dtLeFij3RhpgEpVTZhWq4xp4AeJSbktW"
    },
    {
        title: "Angels & Demons",
        author: "Dan Brown",
        genre: "Mystery, Thriller, Fiction",
        description: "Robert Langdon races to solve an ancient vendetta in Vatican City, uncovering a conspiracy involving science, religion, and a secret brotherhood.",
        coverImage: "images/angelsdemons.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Angels_%26_Demons",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1mifDj_xm_iUBa3-JhdZ0qr-__cYMhARl"
    },
    {
        title: "Anne of Green Gables",
        author: "L.M. Montgomery",
        genre: "Children's, Classic, Fiction",
        description: "Spirited orphan Anne Shirley finds a home with elderly siblings on Prince Edward Island, transforming their lives with her imagination and charm.",
        coverImage: "images/anne.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Anne_of_Green_Gables",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1aB47IKwF43i3HPSeK8BscLZeVw4veZtw"
    },
    {
        title: "Around the World in 80 Days",
        author: "Jules Verne",
        genre: "Adventure, Classic, Fiction",
        description: "Eccentric Phileas Fogg wagers he can circumnavigate the globe in eighty days, embarking on an extraordinary journey across continents and cultures.",
        coverImage: "images/80days.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Around_the_World_in_Eighty_Days",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10mhvO9yFQImIqI3AKpFpYlQ0k0tl-GmO"
    },
    {
        title: "Black Beauty",
        author: "Anna Sewell",
        genre: "Children's, Classic, Fiction",
        description: "A horse narrates his life story, revealing experiences with both kindness and cruelty, advocating for compassionate treatment of animals.",
        coverImage: "images/blackbeauty.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Black_Beauty",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1GVbAwh8G6teu0tbj5uQA4b6UIz1Hfrlo"
    },
    {
        title: "Catch-22",
        author: "Joseph Heller",
        genre: "Satire, Classic, Fiction",
        description: "Bombardier Yossarian confronts the absurdity of war and bureaucracy while attempting to survive WWII amid circular military logic.",
        coverImage: "images/catch22.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Catch-22",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1nRXXfmEYBgDaeWQCXSLPqITHsgouoMR1"
    },
    {
        title: "Creating Characters",
        author: "Dwight V. Swain",
        genre: "Reference, Writing, Educational",
        description: "Practical guide for writers on developing memorable fictional characters with authentic motivations, conflicts, and personal histories.",
        coverImage: "images/creatingcharacters.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Creating_Characters",
        downloadUrl: ""
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        genre: "Horror, Classic, Fiction",
        description: "Epistolary novel chronicling Count Dracula's attempt to move from Transylvania to England and the battle between him and vampire hunters.",
        coverImage: "images/dracula.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Dracula",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1aiavoMV3Jn1WUunxjiROU2eUhuu1n_Ct"
    },
    {
        title: "Eat, Pray, Love",
        author: "Elizabeth Gilbert",
        genre: "Memoir, Travel, Spiritual",
        description: "One woman's journey across Italy, India, and Indonesia seeking pleasure, devotion, and balance after a difficult divorce.",
        coverImage: "images/eatpray.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Eat,_Pray,_Love",
        downloadUrl: "https://drive.google.com/uc?export=download&id=15SKqyBmlprYzXPYZWrhotDrj2Xc7TJiC"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        genre: "Horror, Classic, Fiction",
        description: "Scientist Victor Frankenstein creates a sentient creature who, rejected by society, seeks vengeance against his creator.",
        coverImage: "images/frankestein.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Frankenstein",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1d8fkP5NvPEjS3gyhSjPm_5oTeKDEZSr8"
    },
    {
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        genre: "Historical Fiction, Romance, Classic",
        description: "Scarlett O'Hara navigates love, loss, and survival during the American Civil War and Reconstruction era in the Southern United States.",
        coverImage: "images/gonewith.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Gone_with_the_Wind_(novel)",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ES2hw7vGTN2Yi5x8pY8ZA0uJDHXzkTw0"
    },
    {
        title: "Gulliver's Travels",
        author: "Jonathan Swift",
        genre: "Satire, Adventure, Classic",
        description: "Lemuel Gulliver's fantastical voyages to strange lands inhabited by tiny people, giants, intellectuals, and horses, satirizing human nature.",
        coverImage: "images/gulliver.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1CnLETjrUB9-j7VyRoUlgzDST9RMOiF-t"
    },
    {
        title: "Heart of Darkness",
        author: "Joseph Conrad",
        genre: "Fiction, Classic, Drama",
        description: "Marlow recounts his journey up the Congo River into the African interior, where he encounters the enigmatic Kurtz.",
        coverImage: "images/heartof.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Heart_of_Darkness",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1HscI7RL_6pRRzDx4F9T_bUs8guLcSmJM"
    },
    {
        title: "How to Write Effective Business English",
        author: "Fiona Talbot",
        genre: "Business, Reference, Educational",
        description: "Practical guide for improving business communication, covering emails, reports, and international correspondence with clarity and precision.",
        coverImage: "images/businessenglish.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Write_Effective_Business_English",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1rqK-otj_7s2uMiaKHY_pl_rFjOx1U6IH"
    },
    {
        title: "Journey to the Center of the Earth",
        author: "Jules Verne",
        genre: "Adventure, Classic, Fiction",
        description: "Professor Lidenbrock and his nephew discover an ancient manuscript detailing a path to Earth's center, leading to extraordinary underground adventures.",
        coverImage: "images/journey.webp",
        detailsUrl: "https://en.wikipedia.org/wiki/Journey_to_the_Center_of_the_Earth",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1hXxm0ArDL2d15pwnUKp7zIICnK4-fmLg"
    },
    {
        title: "Life of Pi",
        author: "Yann Martel",
        genre: "Adventure, Fiction, Philosophical",
        description: "Teenage Pi Patel survives a shipwreck and spends 227 days on a lifeboat with a Bengal tiger, exploring faith and survival.",
        coverImage: "images/pi.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Life_of_Pi",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1NvBri3gZ3ruOIt2zvM3g0M3DuvaldwzV"
    },
    {
        title: "Little Women",
        author: "Louisa May Alcott",
        genre: "Classic, Fiction, Drama",
        description: "Four sisters navigate poverty, love, and personal growth during the American Civil War, led by the ambitious writer Jo March.",
        coverImage: "images/littlewomen.jpeg",
        detailsUrl: "https://en.wikipedia.org/wiki/Little_Women",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1fCzeHX3J764wm1UxHzBAejGxNFilft-8"
    },
    {
        title: "McDougal Littell Literature: American Literature",
        author: "McDougal Littell",
        genre: "Textbook, Reference, Academic",
        description: "Comprehensive high school textbook presenting American literary works from various periods with historical context and analytical guidance.",
        coverImage: "images/mcdougal.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/McDougal_Littell_Literature:_American_Literature",
        downloadUrl: ""
    },
    {
        title: "Metamorphosis",
        author: "Franz Kafka",
        genre: "Fiction, Classic, Philosophical",
        description: "Gregor Samsa awakens transformed into a giant insect, exploring themes of alienation as his family reacts with disgust.",
        coverImage: "images/metamorph.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Metamorphosis",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1T2bJvMARk4E-_2lhxVl0PCvfyfyE_q6y"
    },
    {
        title: "Narrative of the Life of Frederick Douglass",
        author: "Frederick Douglass",
        genre: "Autobiography, Memoir, Historical",
        description: "Former slave's powerful memoir recounting his journey from bondage to freedom, exposing the brutal reality of American slavery.",
        coverImage: "images/douglass.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Narrative_of_the_Life_of_Frederick_Douglass,_an_American_Slave",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10m5_JnceCJoYmYXBXRQzcD6WR8LObrXE"
    },
    {
        title: "Poetry For Dummies",
        author: "The Poetry Center, John Timpane",
        genre: "Reference, Educational, Writing",
        description: "Accessible guide to reading, writing, and appreciating poetry, covering forms, techniques, and poetic traditions for beginners.",
        coverImage: "images/poetryfor.jfif",
        detailsUrl: "https://en.wikipedia.org/wiki/Poetry_For_Dummies",
        downloadUrl: ""
    },
    {
        title: "Poetry for Students",
        author: "Gale Research Company",
        genre: "Reference, Educational, Academic",
        description: "Collection of critical analyses of frequently studied poems, providing historical context, themes, and interpretations for students.",
        coverImage: "images/poetryforstudents.webp",
        detailsUrl: "https://en.wikipedia.org/wiki/Poetry_for_Students",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1VmlONygb_gb-UAIADVMRnbAoUzeHBMEl"
    },
    {
        title: "PS I Still Love You",
        author: "Jenny Han",
        genre: "Young Adult, Romance, Fiction",
        description: "In this sequel, Lara Jean navigates complex relationships as past and present love interests compete for her affection.",
        coverImage: "images/ps.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/P.S._I_Still_Love_You",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1go2I7HtzV34FKshn2X-JHVBrsfYYildI"
    },
    {
        title: "P.S. I Love You",
        author: "Cecelia Ahern",
        genre: "Romance, Fiction, Drama",
        description: "Holly receives letters from her deceased husband guiding her through grief toward a new beginning.",
        coverImage: "images/psilove.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/P.S._I_Love_You_(novel)",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1JUjVYUSHtA1lqAbdEyP4Y2uaLC8sToF_"
    },
    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        genre: "Adventure, Classic, Fiction",
        description: "Shipwrecked sailor survives alone on a deserted island for years, creating civilization from nothing while confronting nature and solitude.",
        coverImage: "images/robinson.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Robinson_Crusoe",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uHBBqfdgtSduv0_SWl9j3r5x8OkLeHdN"
    },
    {
        title: "Secret Letters of the Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        genre: "Self-Help, Spiritual, Fiction",
        description: "Jonathan embarks on an international adventure discovering ancient wisdom from letters left by Julian Mantle, unlocking secrets to transformation.",
        coverImage: "images/secretletters.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Secret_Letters_of_the_Monk_Who_Sold_His_Ferrari",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1PufOWSk7v6n4y64BM4pPVSmAmlyJfner"
    },
    {
        title: "The Best American Short Stories of the Century",
        author: "John Updike (Editor)",
        genre: "Short Stories, Anthology, Fiction",
        description: "Collection of outstanding American short fiction from the twentieth century, selected by John Updike, showcasing diverse voices and styles.",
        coverImage: "images/americanshort.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Best_American_Short_Stories_of_the_Century",
        downloadUrl: ""
    },
    {
        title: "The Call of the Wild",
        author: "Jack London",
        genre: "Adventure, Classic, Fiction",
        description: "Domesticated dog Buck is stolen and sold into harsh service during the Klondike Gold Rush, awakening his primitive instincts.",
        coverImage: "images/callofthe.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Call_of_the_Wild",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1AoSRoWGGVrggcHQWS20laYJqIH4J__kg"
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "Mystery, Thriller, Fiction",
        description: "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate a wealthy family's dark past and a decades-old disappearance.",
        coverImage: "images/dragontattoo.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Girl_with_the_Dragon_Tattoo",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1AOPDcI31OrdDUWeJCWzCXIb-9edfYCC0"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "Historical Fiction, Drama, Cultural",
        description: "Affluent Afghan boy betrays his loyal friend, then seeks redemption across continents and decades amid Afghanistan's turbulent history.",
        coverImage: "images/kiterunner.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Kite_Runner",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1eJodsd5jsPlB3ExSdEDVhUX4IcZhPJeE"
    },
    {
        title: "The Last of the Mohicans",
        author: "James Fenimore Cooper",
        genre: "Historical Fiction, Adventure, Classic",
        description: "Set during French and Indian War, frontiersman Hawkeye and his Mohican companions protect British sisters through dangerous wilderness.",
        coverImage: "images/mohicans.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Last_of_the_Mohicans",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1GFqdeOMV0PLr5K65ChK_wck_6uDXzIX_"
    },
    {
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        genre: "Self-Help, Spiritual, Fiction",
        description: "Successful lawyer Julian Mantle transforms after a heart attack, sharing wisdom learned from Himalayan monks about fulfillment and purpose.",
        coverImage: "images/monk.png",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Monk_Who_Sold_His_Ferrari",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1PufOWSk7v6n4y64BM4pPVSmAmlyJfner"
    },
    {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        genre: "Fiction, Classic, Adventure",
        description: "Aging Cuban fisherman Santiago battles a giant marlin and sharks in the Gulf Stream, testing his strength, skill, and resolve.",
        coverImage: "images/oldman.jfif",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1jIpOfRIwl1azlmBPtW4enWllX2vO6_Aj"
    },
    {
        title: "The Perks of Being a Wallflower",
        author: "Stephen Chbosky",
        genre: "Young Adult, Fiction, Coming-of-Age",
        description: "Freshman Charlie navigates high school through letters detailing friendships, first love, family trauma, and mental health struggles.",
        coverImage: "images/wallflower.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Perks_of_Being_a_Wallflower",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1TvlnbMKPjTJk0rA0lm0_HbAvOxHL_Ujc"
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        genre: "Fiction, Classic, Horror",
        description: "Handsome Dorian Gray remains eternally young while his portrait ages, revealing his moral corruption and hedonistic lifestyle.",
        coverImage: "images/dorian.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1HoV5kg_mP2lkHB2T-49yBdH78eBlZFJX"
    },
    {
        title: "The Raven",
        author: "Edgar Allan Poe",
        genre: "Poetry, Gothic, Classic",
        description: "Narrative poem depicting a man's descent into madness as a talking raven intensifies his grief over lost love.",
        coverImage: "images/theraven.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Raven",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KgcRdNSuuxv5y_iNXGx-3QOWyrVwKJzi"
    },
    {
        title: "The Red Badge of Courage",
        author: "Stephen Crane",
        genre: "Historical Fiction, Classic, Drama",
        description: "Young Union soldier Henry Fleming confronts his fears during Civil War battle, exploring themes of courage, maturity, and heroism.",
        coverImage: "images/redbadge.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Red_Badge_of_Courage",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1lXi6x1EHrOIcSHxP3u6gvUvz2e4f1eM1"
    },
    {
        title: "The Scarlet Letter",
        author: "Nathaniel Hawthorne",
        genre: "Historical Fiction, Classic, Drama",
        description: "In Puritan New England, Hester Prynne bears public shame for adultery while her partner remains secret, exploring sin and redemption.",
        coverImage: "images/scarlet.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Scarlet_Letter",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1H8cVem5JVepEtDKUKbpg33pKs74u461D"
    },
    {
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        genre: "Children's, Classic, Fiction",
        description: "Orphaned Mary discovers an abandoned garden on her uncle's estate, bringing healing and transformation to herself and others.",
        coverImage: "images/secretgarden.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Secret_Garden",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1LQG8SYWyJ98W1O644fy3KApGVvgl7fWS"
    },
    {
        title: "The Story of the Other Wise Man",
        author: "Henry van Dyke",
        genre: "Religious, Fiction, Short Story",
        description: "Fourth Magi Artaban spends his life seeking the Messiah, unknowingly fulfilling his mission through acts of compassion along the way.",
        coverImage: "images/wiseman.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Story_of_the_Other_Wise_Man",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1BS0pBCFnr-MfYvSq_gJXxc6luvTlSFeh"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic, Fiction, Drama",
        description: "Mysterious millionaire Jay Gatsby pursues lost love Daisy Buchanan amid the decadence of 1920s Long Island high society.",
        coverImage: "images/gatsby.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Great_Gatsby",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1pVfXG4r0AvIrLRQsYWIRJkLKyx6WhCkO"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic, Fiction, Drama",
        description: "Young Scout observes racial injustice when her lawyer father defends a Black man unjustly accused in 1930s Alabama.",
        coverImage: "images/mockingbird.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1w1hyKdX3qr_KlrzLy8xHvSAUNmHaKXmZ"
    },
    {
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        description: "Noble families battle for control of the Iron Throne while an ancient threat rises beyond the Wall.",
        coverImage: "images/game1.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Game_of_Thrones",
        downloadUrl: "https://drive.google.com/uc?export=download&id=130hCi-W96boFn7i1QS4rLSSCMhsyyNQh"
    },
    {
        title: "A Clash of Kings",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        description: "The Seven Kingdoms erupt into war as rival kings vie for power while dark forces stir beyond the Wall.",
        coverImage: "images/game2.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Clash_of_Kings",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10Mlxnb5nvVJHUKJUcY-NcPg2r71juCOK"
    },
    {
        title: "A Storm of Swords",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        description: "Betrayals, alliances, and brutal conflicts shape the battle for Westeros as winter draws near.",
        coverImage: "images/game3.jpeg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Storm_of_Swords",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10nE2Hs8A9NQgsvAJF3eMej9bKI3-wP51"
    },
    {
        title: "A Feast for Crows",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        description: "With the war’s chaos settling, political schemes and dangerous ambitions rise across the Seven Kingdoms.",
        coverImage: "images/game4.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Feast_for_Crows",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1vz6jWyNBs61kt_mtFssn3UDg3zvGWo-L"
    },
    {
        title: "A Dance With Dragons",
        author: "George R.R. Martin",
        genre: "Fantasy, Adventure, Drama",
        description: "Dragons rise, rulers fall, and dangers grow in Westeros and beyond as war and magic collide.",
        coverImage: "images/game5.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/A_Dance_with_Dragons",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18ovACtss9HIIF-4E2-58o5BKZ8vnPXvb"
    },
    {
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg Heffley navigates middle school with hilarious mishaps and a unique outlook on growing up.",
        coverImage: "images/wimpy1.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid",
        downloadUrl: ""
    },
    {
        title: "Diary of a Wimpy Kid: Rodrick Rules",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg faces new challenges, including dealing with his embarrassing and mischievous older brother, Rodrick.",
        coverImage: "images/wimpy2.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Rodrick_Rules",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1O8SFAIKiCuKjZen6fOhxkz8IwWTdI4M7"
    },
    {
        title: "Diary of a Wimpy Kid: The Last Straw",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg’s dad wants him to toughen up, but Greg just wants to survive middle school his way.",
        coverImage: "images/wimpy3.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Last_Straw",
        downloadUrl: ""
    },
    {
        title: "Diary of a Wimpy Kid: Dog Days",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg plans a relaxing summer, but his family’s ideas—including a disastrous vacation—ruin everything.",
        coverImage: "images/wimpy4.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Dog_Days",
        downloadUrl: ""
    },
    {
        title: "Diary of a Wimpy Kid: The Ugly Truth",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg faces awkward changes, friendship drama, and middle school chaos in his journey to grow up.",
        coverImage: "images/wimpy5.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Ugly_Truth",
        downloadUrl: ""
    },
    {
        title: "Diary of a Wimpy Kid: Cabin Fever",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg gets snowed in with his family while also being blamed for a vandalism incident at school.",
        coverImage: "images/wimpy6.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_Cabin_Fever",
        downloadUrl: ""
    },
    {
        title: "Diary of a Wimpy Kid: The Third Wheel",
        author: "Jeff Kinney",
        genre: "Comedy, Children, Fiction",
        description: "Greg struggles to find a date for the school dance while dealing with his unlucky best friend, Rowley.",
        coverImage: "images/wimpy7.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Diary_of_a_Wimpy_Kid:_The_Third_Wheel",
        downloadUrl: ""
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        description: "Katniss Everdeen volunteers to take her sister's place in a deadly televised battle for survival.",
        coverImage: "images/hunger1.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Hunger_Games",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1W9ggSGp15EJnAGJn5r_vZeOyzRcKgJl4"
    },
    {
        title: "Catching Fire",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        description: "Katniss and Peeta’s victory sparks rebellion, forcing them into a new, even deadlier Hunger Games.",
        coverImage: "images/hunger2.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Catching_Fire",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18Gply_0SJv1D6marYrrPsd86ZEMJH6_R"
    },
    {
        title: "Mockingjay",
        author: "Suzanne Collins",
        genre: "Dystopian, Fiction, Adventure",
        description: "Katniss becomes the symbol of rebellion as war erupts between the Capitol and the districts.",
        coverImage: "images/hunger3.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Mockingjay",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1iW5etjFyCS0zjnfPHpufSwz34v697Nsp"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        description: "Bilbo Baggins embarks on an epic journey with dwarves to reclaim their homeland from a dragon.",
        coverImage: "images/lord1.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Hobbit",
        downloadUrl: ""
    },
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        description: "Frodo Baggins sets out to destroy the One Ring and save Middle-earth from darkness.",
        coverImage: "images/lord2.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring",
        downloadUrl: ""
    },
    {
        title: "The Two Towers",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        description: "The Fellowship is broken as war looms, while Frodo and Sam journey to Mordor alone.",
        coverImage: "images/lord3.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Two_Towers",
        downloadUrl: ""
    },
    {
        title: "The Return of the King",
        author: "J.R.R. Tolkien",
        genre: "Fantasy, Adventure, Fiction",
        description: "The final battle for Middle-earth begins as Frodo nears Mount Doom to destroy the One Ring.",
        coverImage: "images/lord4.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Return_of_the_King",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1E49wp03UX8f32mjSL7wn2DnOuUGl26bH"
    },
    {
        title: "100 Ways to Motivate Yourself",
        author: "Steve Chandler",
        genre: "Self-Help, Motivation",
        description: "A collection of strategies to inspire action and boost motivation in daily life.",
        coverImage: "images/100.jpg",
        detailsUrl: "https://www.amazon.com/100-Ways-Motivate-Yourself-Forever/dp/1564147754",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1qkgZG8MpC5YAqQsPfFrTQ8sK8Cpmp8XY"
    },
    {
        title: "365 Steps to Self Confidence",
        author: "David Lawrence Preston",
        genre: "Self-Help, Personal Development",
        description: "Daily exercises and insights to build confidence and improve self-esteem.",
        coverImage: "images/365.jpg",
        detailsUrl: "https://www.amazon.com/365-Steps-Self-confidence-Programme-Transformation/dp/1845282485",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1bQcEsOQj7fMrZ2RqwnLkmh4V0JQlNfWH"
    },
    {
        title: "A Profound Mind",
        author: "Dalai Lama",
        genre: "Philosophy, Self-Help",
        description: "Insights into cultivating wisdom and mindfulness in everyday life.",
        coverImage: "images/profound.jpg",
        detailsUrl: "https://www.amazon.com/Profound-Mind-Cultivating-Wisdom-Everyday/dp/0385514689",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1uIjfD7YxJYb88CSYl_XAxqQvKimAsABO"
    },
    {
        title: "Anxiety & Depression Workbook",
        author: "Aaron T. Beck",
        genre: "Psychology, Self-Help",
        description: "Exercises and strategies to manage anxiety and depression effectively.",
        coverImage: "images/anxiety.jpg",
        detailsUrl: "https://www.amazon.com/Anxiety-Depression-Workbook-Effective-Techniques/dp/1684036143",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1EcVSkmEHROi4aBP_VLxnTW-QT1RmcNaG"
    },
    {
        title: "Chicken Soup for the Teenage Soul IV",
        author: "Jack Canfield, Mark Victor Hansen",
        genre: "Self-Help, Inspirational",
        description: "Stories of love, learning, and personal growth for teens.",
        coverImage: "images/chickensoup.jpg",
        detailsUrl: "https://www.amazon.com/Chicken-Soup-Teenage-Soul-IV/dp/1623610230",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1pZE32pkfswPlBs6lAgZH3Jx0AC9Z6SS8"
    },
    {
        title: "Confidence: How to Sell Yourself",
        author: "David Craig",
        genre: "Self-Help, Business",
        description: "Techniques for effective self-presentation and communication skills.",
        coverImage: "images/sell.jfif",
        detailsUrl: "https://www.amazon.com/How-Sell-Yourself-Joe-Girard/dp/0446385018",
        downloadUrl: "https://drive.google.com/uc?export=download&id=15_C_6CN5lT-PN64CznVDGX6czmpFIF5u"
    },
    {
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
        genre: "Psychology, Self-Help",
        description: "Explores the impact of emotional intelligence on success and relationships.",
        coverImage: "images/eq.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Emotional_Intelligence",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10roXinr4FXHa_UTAe1cBVJKcwUf6hUm5"
    },
    {
        title: "From Failure to Success",
        author: "Martin Meadows",
        genre: "Self-Help, Motivation",
        description: "Guidance on building resilience and turning failures into stepping stones.",
        coverImage: "images/fts.jpg",
        detailsUrl: "https://www.amazon.com/Failure-Success-Exercises-Resilience-Successes/dp/1976283310",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1OsvIq5v_MOqmNhwQLfUrA-auRKmNMuwC"
    },
    {
        title: "How Successful People Think: Change Your Thinking, Change Your Life",
        author: "John C. Maxwell",
        genre: "Self-Help, Business, Psychology",
        description: "Explores mental habits and strategies that drive success in personal and professional life.",
        coverImage: "images/peoplethink.jpg",
        detailsUrl: "https://www.amazon.com/How-Successful-People-Think-Your/dp/1599951681",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1bNS36tnfU7gRjcohTX1QtZHODPF58jRb"
    },
    {
        title: "How to Develop Self-confidence and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Personal Development",
        description: "A guide to building self-confidence and influencing others effectively in various aspects of life.",
        coverImage: "images/develop.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Develop_Self-Confidence_and_Influence_People_by_Public_Speaking",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1gbMA3mwZyOD7zexlVePPh9To8QCJ_f55"
    },
    {
        title: "How to Have a Beautiful Mind",
        author: "Edward de Bono",
        genre: "Self-Help, Psychology, Creativity",
        description: "Offers techniques to cultivate creative thinking and develop a balanced, insightful mind.",
        coverImage: "images/beautifulmind.jpg",
        detailsUrl: "https://www.amazon.com/How-Have-Beautiful-Mind-Edward/dp/0091894603",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1v5lms15KEoN_t_Fnl0gyya0ZvQMytI9p"
    },
    {
        title: "How to Read a Person Like a Book",
        author: "Gerard I. Nierenberg & Henry H. Calero",
        genre: "Psychology, Communication, Self-Help",
        description: "A guide to interpreting body language for improved interpersonal communication.",
        coverImage: "images/book.jpg",
        detailsUrl: "https://www.amazon.com/How-Read-Person-Like-Book/dp/0671735578",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1RzmPkHYtoHgcoR13V-YKhHTpXpuB-UUp"
    },
    {
        title: "How to Stop Worrying & Start Living",
        author: "Dale Carnegie",
        genre: "Self-Help, Psychology, Personal Development",
        description: "Practical advice for reducing worry and leading a more fulfilling, stress-free life.",
        coverImage: "images/worrying.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Stop_Worrying_and_Start_Living",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1sLCHTo_M1FFFo8boD_2yCf-hzcMHrgFZ"
    },
    {
        title: "How to Use Your Mind by Harry D. Kitson",
        author: "Harry D. Kitson",
        genre: "Self-Help, Personal Development, Motivation",
        description: "Focuses on harnessing mental power to achieve personal growth and success.",
        coverImage: "images/useyourmind.webp",
        detailsUrl: "https://www.amazon.com/How-Use-Your-Mind-Administration/dp/1977531369",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1TthIsrular6TFWyq-VTToI3HIQwbW8AU"
    },
    {
        title: "How to Win Every Argument",
        author: "Madsen Pirie",
        genre: "Self-Help, Communication, Debate",
        description: "Provides techniques and logical approaches to counter any argument effectively.",
        coverImage: "images/argument.jpg",
        detailsUrl: "https://www.amazon.com/How-Win-Every-Argument-Abuse/dp/0826498949",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1I8FmPMkXrEmQ3TX1xzS0D5W_mcq_ij82"
    },
    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Personal Development",
        description: "Timeless advice on building relationships and mastering interpersonal communication.",
        coverImage: "images/win.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/How_to_Win_Friends_and_Influence_People",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1grmOLokW3ZNesLn0kYzi7L0CPM1HD1KO"
    },
    {
        title: "Hypnosis: A Power Program for Self-Improvement, Changing Your Life and Helping Others",
        author: "Unknown",
        genre: "Self-Help, Psychology, Alternative",
        description: "Explores hypnosis as a tool for personal transformation and self-improvement.",
        coverImage: "images/hypnosis.webp",
        detailsUrl: "https://www.amazon.com/Hypnosis-Program-Self-Improvement-Changing-Self-Improvement/dp/156718359X",
        downloadUrl: ""
    },
    {
        title: "Life is What You Make It: A Story of Love, Hope, and How Determination Can Overcome Even Destiny",
        author: "Preeti Shenoy",
        genre: "Memoir, Inspirational, Romance",
        description: "An inspiring story emphasizing determination and self-belief in shaping one’s destiny.",
        coverImage: "images/life.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Life_Is_What_You_Make_It",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1MCTLUVVWCxain6Sq-S1k1UjUqUrlwkdx"
    },
    {
        title: "Man’s Search for Meaning",
        author: "Viktor E. Frankl",
        genre: "Philosophy, Psychology, Memoir",
        description: "A Holocaust survivor’s reflections on finding purpose and meaning amid suffering.",
        coverImage: "images/mans.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
        downloadUrl: "https://drive.google.com/uc?export=download&id=11nN3YKk1PJAhODhwEMYPkfb4ynPASfj7"
    },
    {
        title: "Meditation for Dummies",
        author: "Stephan Bodian",
        genre: "Self-Help, Health, Spirituality",
        description: "A beginner's guide to meditation techniques for improved mental and physical well-being.",
        coverImage: "images/meditation.jpg",
        detailsUrl: "https://www.amazon.com/Meditation-Dummies-Stephan-Bodian/dp/1119251168",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KwCu1nD8G646ICVgyOK2A8DO98TVJJyy"
    },
    {
        title: "Power of The Subconscious Mind",
        author: "Joseph Murphy",
        genre: "Self-Help, Psychology, Spirituality",
        description: "Explores how harnessing the subconscious mind can unlock hidden potential and transform life.",
        coverImage: "images/sub.webp",
        detailsUrl: "https://en.wikipedia.org/wiki/The_Power_of_Your_Subconscious_Mind",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1liCqvaVeIOeWrdrJAXroQHJMcNIIAyfx"
    },
    {
        title: "Power Up Your Mind: Learn Faster",
        author: "Tony Buzan",
        genre: "Self-Help, Education, Psychology",
        description: "Provides techniques to enhance learning speed and improve overall mental performance.",
        coverImage: "images/powerup.jpg",
        detailsUrl: "https://www.amazon.com/Power-Your-Mind-Faster-Smarter/dp/185788275X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1KN89QvYHsLJBrqwf7VYWg8YTr7XP_j8w"
    },
    {
        title: "See You at the Top (Formerly Entitled Biscuits, Fleas, and Pump Handles)",
        author: "Zig Ziglar",
        genre: "Self-Help, Motivation, Personal Development",
        description: "A motivational guide encouraging personal growth and the pursuit of success.",
        coverImage: "images/top.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/See_You_at_the_Top",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1YETL9-bUOO-WkdcgIXP-zRThMtHZnfzv"
    },
    {
        title: "Self-Improvement: The Top 101 Experts That Help Us Improve Our Lives",
        author: "Various Authors",
        genre: "Self-Help, Personal Development, Biography",
        description: "Profiles of top experts offering insights and advice for personal growth.",
        coverImage: "images/101.jpg",
        detailsUrl: "https://www.amazon.com/Self-Improvement-Experts-Improve-Their-Lives/dp/097456723X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1Uki0QvlmxknprkG60r78jJKeiow__-s5"
    },
    {
        title: "Start Where You Are: A Guide to Compassionate Living",
        author: "Pema Chödrön",
        genre: "Self-Help, Spirituality, Psychology",
        description: "Offers guidance on mindfulness and compassion to overcome life’s challenges.",
        coverImage: "images/start.jpg",
        detailsUrl: "https://www.amazon.com/Start-Where-You-Are-Compassionate/dp/1590301420",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1SRCRqVirr7YmW2cILqHbtlG0_I-VB8KX"
    },
    {
        title: "Staying Strong: 365 Days a Year",
        author: "John Doe",
        genre: "Self-Help, Motivation, Daily Inspiration",
        description: "A daily guide offering inspiration and strength for overcoming life’s obstacles.",
        coverImage: "images/staying.jpg",
        detailsUrl: "https://www.amazon.com/Staying-Strong-365-Days-Year/dp/1250051444",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1RXK3R2mZawH6c7R0ZDDFRvh02OOMn65Y"
    },
    {
        title: "The 7 Habits of Highly Effective Teens",
        author: "Sean Covey",
        genre: "Self-Help, Young Adult, Personal Development",
        description: "A practical guide for teens to develop habits for success and personal growth.",
        coverImage: "images/7.jpg",
        detailsUrl: "https://www.amazon.com/Habits-Highly-Effective-Teens/dp/1476764662",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1OIY-zcajcNtvkLET8QKk6IgqKwn1-Gju"
    },
    {
        title: "The Anxiety Workbook: A 7-Week Plan to Overcome Anxiety, Stop Worrying, and End Panic",
        author: "Arlene Schuster",
        genre: "Self-Help, Psychology, Health",
        description: "A step-by-step workbook offering techniques to manage anxiety and panic symptoms.",
        coverImage: "images/workbook.jpg",
        detailsUrl: "https://www.amazon.com/Anxiety-Workbook-7-Week-Overcome-Worrying/dp/1623159733",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1FOEC31PDr-uV8eB_F014qRl3rwovRL85"
    },
    {
        title: "The Art of Thinking Clearly",
        author: "Rolf Dobelli",
        genre: "Self-Help, Psychology, Business",
        description: "Identifies common cognitive biases and offers strategies to improve decision-making.",
        coverImage: "images/thinking.jpg",
        detailsUrl: "https://www.amazon.com/Art-Thinking-Clearly-Better-Decisions/dp/0062219693",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1IytT5CcfDJJybQ_Vu6oHUzkvR5O9q5cU"
    },
    {
        title: "The Book of Joy: Lasting Happiness in a Changing World",
        author: "Dalai Lama, Desmond Tutu, Douglas Abrams",
        genre: "Self-Help, Spirituality, Philosophy",
        description: "Conversations on finding joy and meaning despite life’s inevitable challenges.",
        coverImage: "images/joy.jpg",
        detailsUrl: "https://www.amazon.com/Book-Joy-Lasting-Happiness-Changing/dp/0399185046",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1YMzRRoeEvUlkleRUWhR5heX8dQxsvr4n"
    },
    {
        title: "The Definitive Book of Body Language",
        author: "Allan and Barbara Pease",
        genre: "Self-Help, Communication, Psychology",
        description: "Explains non-verbal cues and body language to improve everyday communication.",
        coverImage: "images/thedefin.jpg",
        detailsUrl: "https://www.amazon.com/Definitive-Book-Body-Language/dp/0553804723",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1bI5jU0ZMDAecILyCFkaNl1MnXOVLq41n"
    },
    {
        title: "The Gifts of Imperfection: Embrace Who You Are",
        author: "Brené Brown",
        genre: "Self-Help, Psychology, Inspirational",
        description: "Encourages embracing imperfections to foster self-worth and authentic living.",
        coverImage: "images/imperfect.jpg",
        detailsUrl: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/159285849X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1vbgXINeSYQasybvJ22ZDkM_qs_Qu0n0C"
    },
    {
        title: "The Happiness of Pursuit: Finding the Quest That Will Bring Purpose to Your Life",
        author: "Chris Guillebeau",
        genre: "Self-Help, Adventure, Inspirational",
        description: "Inspires readers to pursue meaningful quests that lead to a fulfilling life.",
        coverImage: "images/happiness.jpg",
        detailsUrl: "https://www.amazon.com/Happiness-Pursuit-Finding-Quest-Purpose/dp/0385348843",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1wHvwGpM2mOgyc9EuGSJAwF1n8qT1KmOg"
    },
    {
        title: "The Little Big Book of Life: Lessons, Wisdom, Humor, Instruction, Inspiration & Advice",
        author: "Various Authors",
        genre: "Self-Help, Inspirational, Humor",
        description: "A compendium of life lessons and advice blending humor with practical wisdom.",
        coverImage: "images/bigbook.jpg",
        detailsUrl: "https://www.goodreads.com/book/show/8857375-the-little-big-book-of-life-revised-edition",
        downloadUrl: ""
    },
    {
        title: "The Magic in Your Mind",
        author: "John Doe",
        genre: "Self-Help, Psychology, Inspirational",
        description: "Explores techniques to unlock mental potential and foster creative thinking.",
        coverImage: "images/magic.jpg",
        detailsUrl: "https://www.goodreads.com/book/show/2761177-the-magic-in-your-mind",
        downloadUrl: "https://drive.google.com/uc?export=download&id=18OKAKkxsoHJAaSrGVxQPDfn0-Yu5iwo_"
    },
    {
        title: "The Nature Fix: Why Nature Makes Us Happier, Healthier, and More Creative",
        author: "Florence Williams",
        genre: "Self-Help, Health, Science",
        description: "Examines how time in nature boosts well-being, creativity, and overall health.",
        coverImage: "images/nature.jpg",
        detailsUrl: "https://www.amazon.com/Nature-Fix-Happier-Healthier-Creative/dp/0393242714",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1SqA1yhGl_hH08b8hHy5ZAZiw6827VYRD"
    },
    {
        title: "The Power of Creativity: Learning How to Build Lasting Habits, Face Your Fears, and Change Your Life",
        author: "Susan Adams",
        genre: "Self-Help, Creativity, Personal Development",
        description: "Encourages developing creative habits to overcome fears and inspire transformation.",
        coverImage: "images/powerof.jpg",
        detailsUrl: "https://www.goodreads.com/book/show/32615400-the-power-of-creativity",
        downloadUrl: "https://drive.google.com/uc?export=download&id=15Xni3FPJbGZcr6MPZKIgfmZnOXjPB1IY"
    },
    {
        title: "The Power of Habit by Charles Duhigg",
        author: "Charles Duhigg",
        genre: "Self-Help, Psychology, Business",
        description: "Explores the science behind habit formation and strategies to change them.",
        coverImage: "images/habit.jpg",
        detailsUrl: "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1EIltQyJx-2WCRuV2z6K5qN9pYsjmFAtd"
    },
    {
        title: "The Power of Now: A Guide to Spiritual Enlightenment",
        author: "Eckhart Tolle",
        genre: "Spirituality, Self-Help, Philosophy",
        description: "Guides readers to live in the present moment and achieve spiritual clarity.",
        coverImage: "images/powerofnow.webp",
        detailsUrl: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1BC-mGLMHh6zso03S9XoxRaOCOZ8LFMZ7"
    },
    {
        title: "The Power of Self-Esteem",
        author: "Nathaniel Branden",
        genre: "Self-Help, Psychology, Personal Development",
        description: "Discusses the vital role of self-esteem in achieving success and personal fulfillment.",
        coverImage: "images/selfesteem.jpg",
        detailsUrl: "https://www.amazon.com/Power-Self-Esteem-Inspiring-Important-Psychological/dp/1558742131",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1sY1b2DhOeQGzncDVVLK7Hir1tysIRDTy"
    },
    {
        title: "The Quick and Easy Way to Effective Speaking",
        author: "Dale Carnegie",
        genre: "Self-Help, Communication, Business",
        description: "Provides simple techniques for improving public speaking and persuasive communication.",
        coverImage: "images/quick.jpg",
        detailsUrl: "https://www.amazon.com/Quick-Easy-Way-Effective-Speaking/dp/0671724002",
        downloadUrl: "https://drive.google.com/uc?export=download&id=10pTlDudAFBFmQdelni4CRuXPM6zLlQaq"
    },
    {
        title: "The Road Less Traveled, 25th Anniversary Edition: A New Psychology of Love, Traditional Values, and Spiritual Growth",
        author: "M. Scott Peck",
        genre: "Self-Help, Psychology, Spirituality",
        description: "Combines psychological insights with spiritual wisdom to encourage personal growth.",
        coverImage: "images/road.jpg",
        detailsUrl: "https://www.amazon.com/Road-Less-Traveled-Timeless-Traditional/dp/0743243153",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1U-J0BYreewHvys8zqDrvK9glXLOPgoLp"
    },
    {
        title: "Think and Grow Rich by Napoleon Hill",
        author: "Napoleon Hill",
        genre: "Self-Help, Business, Personal Development",
        description: "A classic guide to achieving wealth and success through the power of positive thinking.",
        coverImage: "images/rich.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Think_and_Grow_Rich?utm_source=chatgpt.com",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1RElPziqlqqGE3tScqVnBCS9CxQPkHE3U"
    },
    {
        title: "Think! Before It's Too Late",
        author: "Unknown",
        genre: "Self-Help, Motivation, Personal Development",
        description: "A motivational call to action encouraging proactive thinking and life changes.",
        coverImage: "images/think.jpg",
        detailsUrl: "https://www.amazon.com/Think-Before-Its-Too-Late/dp/009192409X?utm_source=chatgpt.com",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1buQhAsSY6tGWVnKIHig7wyYHrumBxgjD"
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genre: "Psychology, Business, Non-Fiction",
        description: "Delves into the dual systems of thought and their impact on decision-making.",
        coverImage: "images/thinkingfas.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1wXExoVzc1eJhg3HsXJNx59jJtJyRquJo"
    },
    {
        title: "When I Say No, I Feel Guilty",
        author: "Cheryl Richardson",
        genre: "Self-Help, Psychology, Personal Development",
        description: "Addresses overcoming guilt and setting healthy boundaries in personal relationships.",
        coverImage: "images/guilty.jpg",
        detailsUrl: "https://www.amazon.com/When-Say-No-Feel-Guilty/dp/0553263900",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1epw5M83gqcrddtak9VC8BpHeN36_KRa3"
    },
    {
        title: "Who Do You Think You Are?",
        author: "Unknown",
        genre: "Self-Help, Psychology, Personal Development",
        description: "Encourages self-reflection to understand and redefine one’s identity and purpose.",
        coverImage: "images/who.jpg",
        detailsUrl: "https://www.amazon.com/s?k=Who+Do+You+Think+You+Are",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1ZciXFCyzl5OCKDb80u7LvJqyO_uy5kJn"
    },
    {
        title: "Who Moved My Cheese?",
        author: "Spencer Johnson",
        genre: "Self-Help, Business, Motivation",
        description: "A simple parable revealing profound truths about change in work and life.",
        coverImage: "images/cheese.jpg",
        detailsUrl: "https://en.wikipedia.org/wiki/Who_Moved_My_Cheese%3F",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1GAmFTlDujgplFw90l2EK6aOX5dp_9aGh"
    },
    {
        title: "You Are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life",
        author: "Jen Sincero",
        genre: "Self-Help, Personal Development, Motivation",
        description: "A blunt, humorous guide to overcoming self-doubt and achieving personal success.",
        coverImage: "images/badass.jpg",
        detailsUrl: "https://www.amazon.com/You-Are-Badass-Doubting-Greatness/dp/0762447699",
        downloadUrl: "https://drive.google.com/uc?export=download&id=1osXVs73-ixGkzeNzaWPpuf8uZtQ4VDaa"
    },
];
