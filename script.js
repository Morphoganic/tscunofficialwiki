// Database Karakter
const charactersData = [
    {
        id: "atis",
        name: "Atis",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Youth coach for the International Beach Volleyball Federation. His intimidating height and fierce expression make him seem unapproachable, but he genuinely cares for children with a warm heart. Former teammate of Oasis who starred together at Sun Volleyball Team. Later transferred to Palm Spikes, becoming Oasis's rival. The transition reportedly involved considerable friction between them.",
        image: "../tsc_web/img/atis.webp",
        baseStats: {
            attack: { base: 115, maxLimit: 185, growth: [0, 0, 0, 3, 5, 7] },
            defense: { base: 90, maxLimit: 135, growth: [0, 0, 0, 0, 0, 0] },
            speed: { base: 80, maxLimit: 115, growth: [0, 0, 0, 0, 0, 0] },
            jump: { base: 125, maxLimit: 165, growth: [0, 0, 0, 1, 2, 3] }
        },
        recommended: {
            attack: { base: 185, growthText: "+7 (Max BT)", total: 192 },
            defense: { base: 120, growthText: "+0 (Max BT)", total: 120 },
            speed: { base: 115, growthText: "+0 (Max BT)", total: 115 },
            jump: { base: 160, growthText: "+3 (Max BT)", total: 163 }
        },
        skills: [
            { name: "Rip Current", desc: "Slow to recover after Sliding, but boasts exceptional physical stats." },
            { name: "Power Back Attack", desc: "Power Back Attack Increases Power by 5.5 when performing a Spike from behind the Attack Line." },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            { name: "Light Movement", desc: "Performs a Quick Attack after a light Approach." },
            { name: "Height", desc: "Added Height: <strong class='text-warning'>+ATIS_HGT cm</strong>" }
        ],
        skillStats: {
            height: [0, 1, 3, 4, 5, 7] 
        },
        synergies: [
            { name: "Indifferent", desc: "<span class='text-info'>Atis + Muyeong</span> : Defense +10" },
            { name: "Glory of the Past", desc: "<span class='text-info'>Atis + Lucas</span> : Increases speed after Atis Slides and stands up" },
            { name: "Wave Riding", desc: "<span class='text-info'>Atis + Oasis + Lisia</span> : Attack +7,Defense +5, Speed +5, Jump +5" }
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "ahyeon",
        name: "Ahyeon",
        role: "SE",
        position: "Setter (SE)",
        desc: "Starting setter for Chemistry High. A skilled player who led the previously weak Chemistry High volleyball team to national tournament preliminaries. Her eyesight deteriorated from nightly reading, so she wears thick glasses. Chemistry High's volleyball fan club members reportedly go crazy for her with glasses on, though they admire her quietly from a distance to avoid making her uncomfortable. Ayeon has no idea the fan club exists and thinks people avoid her.",
        image: "../tsc_web/img/ahyeon.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 150, growth: [0, 2, 5, 7, 8, 8] },
            defense: { base: 100, maxLimit: 160, growth: [0, 5, 10, 14, 18, 20] },
            speed: { base: 100, maxLimit: 160, growth: [0, 0, 0, 5, 8, 10] },
            jump: { base: 100, maxLimit: 150, growth: [0, 1, 1, 1, 1, 1] }
        },
        recommended: {
            attack: { base: 115, growthText: "+8 (Max BT)", total: 123 },
            defense: { base: 160, growthText: "+20 (Max BT)", total: 180 },
            speed: { base: 160, growthText: "+10 (Max BT)", total: 170 },
            jump: { base: 150, growthText: "+1 (Max BT)", total: 151 }
        },
        skills: [
            { name: "Chemical Reaction", desc: "Triggers Chemical Reaction if a Ball Bumped by this Player is Set by your Team. When Attacked, the Ball's Power and Spin increase. Any opponent attempting to Defense it will fail and their Team loses 100 Stamina. <span class='text-warning'>+CR_VAL% Power and +25% Spin</span>" },
        ],
        skillStats: {
            chemicalreact: [25, 26.2, 27.5, 28.7, 28.7, 30]
        },
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-warning'>Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "claire",
        name: "Claire",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "A genius middle blocker who's every bit as arrogant as he is skilled. His striking looks and dominating playstyle make him impossible to ignore, drawing crowds wherever he plays. Though he's known for his terrible fan service, he insists he's being as polite as he can be in his own way. Cursed with bad luck when it comes to rivals, he's always been stuck in second place, first behind Lucas, now behind Raul. Enraged by his failure to win MVP, he's grown to despise the two who took the title. Determined to defeat Raul, he even switched his position to middle blocker. This season, he's ready to claim the MVP crown, no matter what it takes.",
        image: "../tsc_web/img/claire.webp",
        isDave: true,
        baseStats: {
            attack: { base: 100, maxLimit: 165, growth: [0, 3, 4, 5, 5, 5] },
            defense: { base: 100, maxLimit: 150, growth: [0, 3, 3, 5, 8, 12] },
            speed: { base: 100, maxLimit: 150, growth: [0, 3, 3, 5, 8, 12] },
            jump: { base: 100, maxLimit: 170, growth: [0, 0, 0, 0, 0, 1] }
        },
        recommended: {
            attack: { base: 165, growthText: "+5 (Max BT)", total: 170 },
            defense: { base: 100, growthText: "+12 (Max BT)", total: 112 },
            speed: { base: 150, growthText: "+12 (Max BT)", total: 162 },
            jump: { base: 170, growthText: "+1 (Max BT)", total: 171 }
        },
        skills: [
            { name: "Overdrive", desc: "Overdrive Gauge fills by 10% at the end of each Rally. During Skill Activation, all Team Player stats are increased. Stat bonuses for Attack and Jump scale with the Charged Gauge level, and Skill Duration is extended (<strong class='text-warning'>+CLAIRE_DUR sec</strong>). The Skill Activation fails during a Serve; however, the Skill Duration will not deplete while the ball is being served." },
            { name: "The Perfect Out-of-System Set", desc: "Performs a Out-of-System Set near the Net, delivering an ideal set for the Wing Spiker to Spike."},
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            { name: "Line Shot", desc: "Performs a Spike aiming for the End Line." },
        ],
        skillStats: {
            overdrive: [188, 197, 206, 216, 225, 225],        
            overdriveJmp: [13, 14, 15, 15, 16, 16],           
            overdriveDur: [13, 13.65, 14.3, 14.95, 15.6, 15.6] 
        },
        daveGrowth: {
            0:   { atk: 0,  def: 0, jmp: 0, dur: 3 },
            10:  { atk: 24,  def: 0, jmp: 4, dur: 4 },
            20:  { atk: 44,  def: 0, jmp: 6, dur: 5 },
            30:  { atk: 63,  def: 0, jmp: 7, dur: 6 },
            40:  { atk: 82,  def: 0, jmp: 8, dur: 7 },
            50:  { atk: 101,  def: 0, jmp: 9, dur: 8 },
            60:  { atk: 118,  def: 0, jmp: 10, dur: 9 },
            70:  { atk: 136,  def: 0, jmp: 11, dur: 10 },
            80:  { atk: 153,  def: 0, jmp: 12, dur: 11 },
            90:  { atk: 171,  def: 0, jmp: 13, dur: 12 },
            100: { atk: 188,  def: 0, jmp: 13, dur: 13 }
        },
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-danger'>Very High</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ]
    },
    {
        id: "clyde",
        name: "Clyde",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Starting middle blocker for Rockwell Youth Volleyball Team. Not as rich as Tania, but still from a quite well-off family. Has an extremely laid-back personality - when he disappears for stretches, he's usually playing with cats."+
                " As a child, he'd often vanish chasing cats, causing small panics, and it was always Tania who had to track him down and bring him back. Even now, Tania remains his only real friend, and the two still bicker whenever they meet.",
        image: "../tsc_web/img/clyde.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 165, growth: [0, 0, 3, 6, 8, 9] },
            defense: { base: 100, maxLimit: 160, growth: [0, 2, 2, 5, 5, 8] },
            speed: { base: 100, maxLimit: 160, growth: [0, 2, 2, 5, 5, 8] },
            jump: { base: 100, maxLimit: 160, growth: [0, 2, 3, 4, 4, 4] }
        },
        recommended: {
            attack: { base: 165, growthText: "+9 (Max BT)", total: 174 },
            defense: { base: 100, growthText: "+8 (Max BT)", total: 108 },
            speed: { base: 150, growthText: "+8 (Max BT)", total: 108 },
            jump: { base: 160, growthText: "+4 (Max BT)", total: 159 }
        },
        skills: [
            { name: "Navi", desc: "Clyde's beloved cat appears alongside him. The cat roams the Court and changes any Teammate from Discouraged state to Engaged state. <span class='text-warning'>Increases Ally Team Max Stamina by 15%.</span>" },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ]
    },
    {
        id: "crow",
        name: "Crow",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Middle blocker who partnered with Isabel as a duo. Though they were recognized as top Colosseum players together, he's actually neurotic and obsessive by nature. Despite his high-strung personality,"+
                " he carefully looks after Isabel with deep camaraderie.",
        image: "../tsc_web/img/crow.webp",
        baseStats: {
            attack: { base: 120, maxLimit: 150, growth: [0, 0, 3, 6, 8, 9] },
            defense: { base: 105, maxLimit: 160, growth: [0, 2, 2, 5, 5, 8] },
            speed: { base: 110, maxLimit: 160, growth: [0, 2, 2, 5, 5, 8] },
            jump: { base: 115, maxLimit: 145, growth: [0, 2, 3, 4, 4, 4] }
        },
        recommended: {
            attack: { base: 150, growthText: "+9 (Max BT)", total: 159 },
            defense: { base: 115, growthText: "+8 (Max BT)", total: 123 },
            speed: { base: 160, growthText: "+8 (Max BT)", total: 168 },
            jump: { base: 145, growthText: "+4 (Max BT)", total: 149 }
        },
        skillStats: {
            drkcrow: [40, 44.4, 49.5, 51.7, 53.7, 55.6]
        },
        skills: [
            { name: "Dark Crow", desc: "Performs a Spike that temporarily decreases the Opponent Player's Defense <span class='text-warning'>darkcrow_VAL%.</span>" },
            { name: "Quick Recovery", desc: "<span class='text-warning'>Increases Stamina recovery from Scoring and Conceding by 25%.</span>" },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ]
    },
    {
        id: "dave",
        name: "Dave",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "Owner of the lodge where Rockwell Camp is held. Former volleyball player, though he was more famous for his magnificent mustache and muscular build than his skills. His solid physique and carefully maintained silky hair are points of pride. A true gentleman and genuinely good person."+
                " When Rockwell Camp starts, he and his older twin brother Mike voluntarily help care for the children, which he takes great pride in. However, his excessive concern for the kids sometimes leads to over-the-top moments.",
        image: "../tsc_web/img/dave.webp",
        isDave: true,
        baseStats: {
            attack: { base: 120, maxLimit: 160, growth: [0, 3, 5, 8, 12, 12] },
            defense: { base: 100, maxLimit: 160, growth: [0, 5, 10, 10, 13, 15] },
            speed: { base: 140, maxLimit: 160, growth: [0, 5, 5, 7, 7, 9] },
            jump: { base: 120, maxLimit: 160, growth: [0, 0, 2, 2, 5, 5] }
        },
        recommended: {
            attack: { base: 160, growthText: "+12 (Max BT)", total: 172 },
            defense: { base: 105, growthText: "+15 (Max BT)", total: 120 },
            speed: { base: 160, growthText: "+9 (Max BT)", total: 169 },
            jump: { base: 160, growthText: "+5 (Max BT)", total: 165 }
        },
        daveGrowth: {
            0:   { atk: 0,  def: 0,    spd: 0,    jmp: 0 },
            50:  { atk: 15, def: 6.25, spd: 6.25, jmp: 4 },
            100: { atk: 31, def: 12.5, spd: 12.5, jmp: 6 },
            150: { atk: 46, def: 18.75, spd: 18.75, jmp: 7 },
            200: { atk: 61, def: 25,   spd: 25,   jmp: 8 },
            250: { atk: 77, def: 31.25, spd: 31.25, jmp: 9 },
            300: { atk: 92, def: 37.5,  spd: 37.5,  jmp: 10 }
        },
        daveSkillStats: {
            height: [0, 10, 20, 30, 40, 50, 60] 
        },
        skills: [
            { name: "Warm-Up", desc: "Performs push-ups while idle. Each repetition increases Attack and Height (<strong class='text-warning'>+DAVE_HGT cm</strong>), stacking up to 300 times." },
            { name: "Power Back Attack", desc: "Power Back Attack Increases Power by 5.5 when performing a Spike from behind the Attack Line." },
        ],
        synergies: [
            { name: "Brotherly Respect", desc: "<span class='text-info'>Dave + Mike</span> : Dave's push-up speed increases by 20%" },
            { name: "Beauty & the Beast", desc: "<span class='text-info'>Dave + Sara(SE)</span> : Dave's push-up speed increases by 20%" },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
    },
    {
        id: "ellio",
        name: "Ellio",
        role: "SE",
        position: "Setter (SE)",
        desc: "Once played for a prestigious team but was released for unknown reasons and drifted to Phantom League. Now he teammates with Jenny, gaining popularity through excellent fan service and showmanship."+
                " He feels sorry watching Jenny gradually break down in Phantom League and secretly looks after her, making him one of the few people she truly opens up to. He calls himself 'materialistic,' but everyone unanimously considers him a 'good person.' Though he acts selfish and calculating on the outside, he's always carefully supporting those around him behind the scenes.",
        image: "../tsc_web/img/ellio.webp",
        baseStats: {
            attack: { base: 120, maxLimit: 165, growth: [0, 2, 5, 5, 7, 10] },
            defense: { base: 95, maxLimit: 165, growth: [0, 3, 5, 10, 15, 15] },
            speed: { base: 115, maxLimit: 165, growth: [0, 3, 5, 6, 8, 10] },
            jump: { base: 110, maxLimit: 155, growth: [0, 2, 4, 5, 5, 5] }
        },
        recommended: {
            attack: { base: 165, growthText: "+10 (Max BT)", total: 175 },
            defense: { base: 95, growthText: "+15 (Max BT)", total: 110 },
            speed: { base: 145, growthText: "+10 (Max BT)", total: 155 },
            jump: { base: 155, growthText: "+5 (Max BT)", total: 160 }
        },
        skillStats: {
            abysSet: [24, 25.2, 26.4, 27.6, 30, 30]
        },
        skills: [
            { name: "Abyss Toss", desc: "The steeper the Spike trajectory from the Player's Set, the more the Ball's Power increases. <span class='text-warning'>abysSet_VAL%.</span>" },
            { name: "Hybrid Floater Serve", desc: "Fakes a Spike Serve to perform an unexpected Float Serve. <span class='text-warning'>If a Player with less than 150 Defense defends the Serve while Sliding, the Ball is deflected far out of bounds.</span>" },
        ],
        synergies: [
            { name: "Abyssal Amber", desc: "<span class='text-info'>Ellio + Hari + Jenny</span> : Attack +4, Defense +10, Speed +2, Jump +5" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ]
    },
    {
        id: "haeun",
        name: "Haeun",
        role: "SE",
        position: "Setter (SE)",
        desc: "Haeun is the vice captain of Jisan High and also Dahee's friend. They both played on the same volleyball team during middle school and even after joining different teams and knowing about Dahee's situation,"+
                " Haeun still tries to persuade her to join Jisan High.",
        image: "../tsc_web/img/haeun.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 100, growth: [0, 0, 0, 0, 0, 0] },
            defense: { base: 100, maxLimit: 100, growth: [0, 0, 0, 0, 0, 0] },
            speed: { base: 100, maxLimit: 100, growth: [0, 0, 0, 0, 0, 0] },
            jump: { base: 100, maxLimit: 100, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 100, growthText: "+0 (Max BT)", total: 100 },
            defense: { base: 100, growthText: "+0 (Max BT)", total: 100 },
            speed: { base: 100, growthText: "+0 (Max BT)", total: 100 },
            jump: { base: 100, growthText: "+0 (Max BT)", total: 100 }
        },
        skillStats: {
        },
        skills: [
            { name: "Null", desc: "Null" },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Null</span>",
            "Careless: <span class='text-success-custom'>Null</span>",
            "Engaged: <span class='text-success-custom'>Null</span>",
            "Discourage: <span class='text-success-custom'>Null</span>",
        ]
    },
    {
        id: "hanra",
        name: "Hanra",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "One of Seonrim High's four most skilled martial artists, and surprisingly, her martial arts abilities surpass even Ryuhyeon's. However, she acknowledges Ryuhyeon as Seonrim's grand disciple and focuses on supporting him."+
        " She essentially serves as the disciplinary committee head, and Hanra handles most campus disturbances. Despite her cold, stoic exterior, she absolutely loves cute things. Thinking this hobby doesn't suit her image, she tries to hide it from others.",
        image: "../tsc_web/img/hanra.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 170, growth: [0, 4, 7, 7, 7, 7] },
            defense: { base: 115, maxLimit: 155, growth: [0, 0, 0, 0, 8, 10] },
            speed: { base: 115, maxLimit: 155, growth: [0, 0, 0, 5, 8, 10] },
            jump: { base: 110, maxLimit: 165, growth: [0, 3, 5, 8, 8, 8] }
        },
        recommended: {
            attack: { base: 170, growthText: "+7 (Max BT)", total: 177},
            defense: { base: 115, growthText: "+10 (Max BT)", total: 125 },
            speed: { base: 120, growthText: "+10 (Max BT)", total: 130 },
            jump: { base: 165, growthText: "+8 (Max BT)", total: 173 }
        },
        skillStats: {
        },
        skills: [
            { name: "Heart of the Sun", desc: "<span class='text-warning'>Reduces the chance of Team Players becoming Discouraged by 70%.</span>" },
            { name: "Sun Bump", desc: "During Bump,<span class='text-warning'> Defense Range increases by 33%, Defense by 70, and Speed by 18.</span>"},
            { name: "Topspin Feint", desc: "The Feint has added spin, causing the Ball to drop faster. <span class='text-warning'>Ball's spin 260%</span>" },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            { name: "Sharp Spike", desc: "Reduces the Ball's Spin to perform a sharply angled Spike." }
        ],
        synergies: [
            { name: "None", desc: "<span class='text-info'>Hanra + Oasis</span> : Oasis High Noon activates at 9 points" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-warning'>Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "hari",
        name: "Hari",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Former Queen of the Colosseum and member of Phantom League's 15-person committee. Isabel only claimed the queen's throne after Hari vanished from the Colosseum. She executes any order Carla gives without question - except one. She refuses to throw away the old,"+
                " worn wrist guard on her left wrist, defying even Carla's commands on this matter. Only Carla and Hari know why. Her specialty is thoroughly analyzing opponents to completely dominate matches. Enemy players become paralyzed, unable to execute even their most confident plays.",
        image: "../tsc_web/img/hari.webp",
        isDave: true,
        baseStats: {
            attack: { base: 115, maxLimit: 170, growth: [0, 5, 8, 12, 15, 15] },
            defense: { base: 115, maxLimit: 160, growth: [0, 3, 5, 5, 5, 10] },
            speed: { base: 110, maxLimit: 160, growth: [0, 0, 0, 0, 0, 5] },
            jump: { base: 120, maxLimit: 160, growth: [0, 3, 5, 6, 7, 8] }
        },
        recommended: {
            attack: { base: 115, growthText: "+14 (Max BT)", total: 129 },
            defense: { base: 160, growthText: "+10 (Max BT)", total: 170 },
            speed: { base: 160, growthText: "+5 (Max BT)", total: 165 },
            jump: { base: 150, growthText: "+8 (Max BT)", total: 158 }
        },
        skillStats: {
            bloomatk: [146, 160, 168, 175, 190, 219],
            bloomdef: [135, 148.5, 155.25, 162, 175.5, 202.5],
            bloomspd: [135, 148.5, 155.25, 162, 175.5, 202.5],
            bloomjmp: [65, 72, 75, 79, 85, 98],
            flowerDef: [33, 33, 36, 39, 42, 45],
            flowerSpd: [8, 8.8, 9.6, 10.4, 11.2, 12.0],
        },
        skills: [
            { name: "Death Bloom", desc: "When Bumping, leaves a mark on the Opponent Player who last Touched the Ball. Upon Skill Activation, the Status of all marked Opponent Players decreases for a certain period of time."+
                    " A Opponent Player with two or more marks has their movement sealed briefly immediately after Skill Activation. <br>Attack: <span class='text-warning'>bloomAtk_VAL%</span> | Defense: <span class='text-warning'>bloomDef_VAL%</span> | Speed: <span class='text-warning'>bloomSpd_VAL%</span> | Jump: <span class='text-warning'>bloomJmp_VAL%</span>" },
            { name: "Flower Receive", desc: "<span class='text-warning'>The Defense Range of Bump is increased by 33%</span>. Defense and Speed are also boosted.<br> <span class='text-warning'>Defense +Flwr_VAL%, Speed +FlwrSpd_VAL%</span>" },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            { name: "Light Movement", desc: "Performs a Quick Attack after a light Approach." },
        ],
        synergies: [
            { name: "Double Queen", desc: "<span class='text-info'>Hari + Isabel</span> : Increase allies' max HP by 10" },
            { name: "Abyssal Amber", desc: "<span class='text-info'>Hari + Ellio + Jenny</span> : Attack +4, Defense +10, Speed +2, Jump +5" },
            { name: "Lily of the Valley", desc: "<span class='text-info'>Hari + Iris</span> : Defense +10, Speed +5" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>High</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom fw-bolder'>Impossible</span>",
        ]
    },
    {
        id: "heeseong",
        name: "Heeseong",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Captain of Hanbit High and arguably the best high school middle blocker. Though only a first-year, he earned the nickname 'Invulnerable' by perfectly shutting down last year's 'Best Player' award winner's quick attacks."+
                " His trademark 90-degree bow when greeting reflects his upright, sincere personality. Despite his usually gentle demeanor, his competitive fire explodes on court, making him quite intimidating to face.",
        image: "../tsc_web/img/heeseong.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 170, growth: [0, 0, 2, 2, 4, 7] },
            defense: { base: 105, maxLimit: 155, growth: [0, 2, 2, 8, 8, 8] },
            speed: { base: 105, maxLimit: 155, growth: [0, 2, 2, 8, 8, 8] },
            jump: { base: 115, maxLimit: 165, growth: [0, 0, 2, 2, 3, 3] }
        },
        recommended: {
            attack: { base: 130, growthText: "+7 (Max BT)", total: 137 },
            defense: { base: 105, growthText: "+8 (Max BT)", total: 113 },
            speed: { base: 155, growthText: "+8 (Max BT)", total: 163 },
            jump: { base: 165, growthText: "+3 (Max BT)", total: 168 }
        },
        skillStats: {
            absltblckdur: [6, 6, 7, 7, 7, 7],
            absltblckcldwn: [10, 10, 10, 10, 10, 10],
        },
        skills: [
            { name: "Absolute Block", desc: "During Skill Activation, always triggers a Kill Block against any Attack that hits the Block. <br><span class='text-warning'>Duration absltblckdur_VALs , Cooldown absltblckcldwn_VALs</span>" },
            { name: "Power Back Attack", desc: "Increases Power by 5.5 when performing a Spike from behind the Attack Line." },
            { name: "Quick Preparation", desc: "Block preparation is performed 70% faster." },
            { name: "Quick Recovery", desc: "Increases Stamina recovery from Scoring and Conceding by 25%." },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            ],
        synergies: [
            { name: "All-star", desc: "<span class='text-info'>Heeseong + Yongsup + Seolhwa</span> : Attack +4, Jump +4" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "hongshi",
        name: "Hongshi",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "One of Seonrim High's top martial artists. Full of curiosity, she often ditches school to explore the world. She and Ryuhyeon share the same mental age, so they constantly bicker and fight. When she's in a good mood, she lets out spirited shouts while serving."+
                "She thinks everyone gets intimidated when she raises her voice, but in reality, everyone finds her so adorable that their concentration wavers.",
        image: "../tsc_web/img/hongshi.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 165, growth: [0, 4, 8, 10, 12, 12] },
            defense: { base: 100, maxLimit: 170, growth: [0, 0, 5, 5, 10, 15] },
            speed: { base: 100, maxLimit: 170, growth: [0, 2, 2, 5, 8, 10] },
            jump: { base: 100, maxLimit: 160, growth: [0, 2, 5, 8, 8, 9] }
        },
        recommended: {
            attack: { base: 165, growthText: "+12 (Max BT)", total: 177 },
            defense: { base: 100, growthText: "+15 (Max BT)", total: 115 },
            speed: { base: 145, growthText: "+10 (Max BT)", total: 155 },
            jump: { base: 160, growthText: "+9 (Max BT)", total: 169 }
        },
        skillStats: {
            firtigeratk: [8, 12, 12, 15, 15, 18],
            firtigerjmp: [1, 2, 2, 4, 4, 4]
        },
        skills: [
            { name: "Fierce Tiger", desc: "When the Opponent Player with the lowest defense in the Back Court, is marked with Tiger Claw, Attack and Jump increase. <br><span class='text-warning'>Attack +tigeratk_VAL , Jump +tigerjmp_VAL</span>" },
            { name: "RAWR!", desc: "One the first Serve of the Match, there is a very high chance to inflict Discouraged on all Opponent Players." },
            { name: "Tiger Claw", desc: "Applies a mark to any Opponent Player who Defenses the Attack. <span class='text-warning'>Marked Players lose 9 Jump. When the mark stacks, they automatically fail Defense and the mark is removed."+
                    " Opponent Players who fail Defense have a low chance to become Discouraged.</span>" },
            { name: "Hunt", desc: "Highlights the Opponent Player with the lowest Defense in the Back Court. (Tip: Set 'Camera Movement' to 'Focus on Opponent Team' in Settings for a better view of the highlighted Opponent Player)" },
            ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ]
    },
    {
        id: "iris",
        name: "Iris",
        role: "SE",
        position: "Setter (SE)",
        desc: "The captain of the Asheville Weasels. She took over the captain's armband and has led the team since the retirement of Kelly, one of the World's Big Five Spikers. Although she feels a deep sense of responsibility and a desire to lead the team well,"+
                " her naturally timid personality leaves her constantly struggling between the front office and the players.",
        image: "../tsc_web/img/iris.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 170, growth: [0, 0, 0, 0, 0, 0] },
            defense: { base: 100, maxLimit: 175, growth: [0, 5, 10, 10, 20, 25] },
            speed: { base: 90, maxLimit: 180, growth: [0, 5, 10, 10, 15, 20] },
            jump: { base: 100, maxLimit: 170, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 100, growthText: "+0 (Max BT)", total: 100 },
            defense: { base: 135, growthText: "+25 (Max BT)", total: 160 },
            speed: { base: 180, growthText: "+20 (Max BT)", total: 200 },
            jump: { base: 170, growthText: "+0 (Max BT)", total: 170 }
        },
        skillStats: {
            imprlordrdur: [5, 5, 5, 6, 6, 6],
            imprlordrcldwn: [14, 11, 10, 9, 8, 8]
        },
        skills: [
            { name: "Imperial Order", desc: "During the Skill Activation, three Compasses on the Court are generated. The compasses rotate at different speeds, but there is always a moment when they overlap toward the Opponent Team Court. The Power increase of each compass is applied independently." },
            { name: "Kind Tyrant", desc: "During a High Set, delivers a Set that falls rapidly. The Ball falls 0.7 seconds slower at the Wing Spiker's peak contact point." },
            { name: "Compass on the Court", desc: "Upon Set, a rotating compass is generated on the Ball. The compass points toward the Opponent Team Court at the Wing Spiker's peak Contact Point. The closer the angle of the Spike matches the compass's direction, the more Accuracy increases. Depending on Accuracy,"+
            " the Ball's Power and Spin will increase or decrease. Performing a Spike with PERFECT Accuracy increases the compass's rotation speed for the duration of the Match. <br><span class='text-warning'>Duration: imperialdur_VALs , Cooldown: imperialcldwn_VALs</span>" }
            ],
        synergies: [
            { name: "Ultramarine", desc: "<span class='text-info'>Iris + Ryuhyeon</span> : Attack +7, Defense +5" },
            { name: "Lily of the Valley", desc: "<span class='text-info'>Iris + Hari</span> : Defense +10, Speed +5" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>High</span>",
            "Careless: <span class='text-danger'>High</span>",
            "Engaged: <span class='text-success-custom'>High</span>",
            "Discourage: <span class='text-danger'>High</span>",
        ]
    },
    {
        id: "isabel",
        name: "Isabel",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Queen of the Colosseum. She wandered searching for strong attackers before settling in the Colosseum League, where she's now considered one of the strongest players. Her ideal type is reportedly an attacker who can deliver serves so powerful she can't even touch them."+
                " She excels at defensive balance and loves receiving opponents' attacks then immediately counterattacking. She plays volleyball for the thrill of shutting down enemy attacks and paying them back with points.",
        image: "../tsc_web/img/isabel.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 130, growth: [0, 0, 5, 5, 7, 10] },
            defense: { base: 120, maxLimit: 200, growth: [0, 0, 10, 20, 25, 25] },
            speed: { base: 125, maxLimit: 155, growth: [0, 0, 2, 7, 7, 7] },
            jump: { base: 120, maxLimit: 130, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 130, growthText: "+10 (Max BT)", total: 140 },
            defense: { base: 170, growthText: "+25 (Max BT)", total: 195 },
            speed: { base: 155, growthText: "+7 (Max BT)", total: 162 },
            jump: { base: 130, growthText: "+0 (Max BT)", total: 130 }
        },
        skillStats: {
            parrygauge: [100, 110, 120, 130, 130, 130]
        },
        btBonusGauge: [0, 1, 2, 3, 3, 3],
        skills: [
            { name: "Parry", desc: "When an Opponent Player's Spike in Bumped, Charge the Gauge based on the Ball's Power. A higher Gauge provides a greater boost to Attack and Jump. The Gauge resets after you perform a Spike." },
            { name: "Serve Routine A", desc: "Performs a unique pre-Serve animation."},
            { name: "Blessing", desc: "When you first Bump the Ball coming from the Opponent Team Court, recover 20 Stamina for your Team."}
            ],
        synergies: [
            { name: "Double Queen", desc: "<span class='text-info'>Isabel + Hari</span> : Increase allies' max HP by 10" },
            { name: "Spartan Soul", desc: "<span class='text-info'>Isabel + Roberto + NN</span> : Attack +6, Defense +10, Speed +2, Jump +4" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ]
    },
    {
        id: "jaehyun",
        name: "Jaehyun",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Outside hitter for Sky High and Siwoo Baek's rival. Along with Yongsup Lee, he's considered one of the best high school attackers. Known for incredible stamina from his well-conditioned body and unbreakable willpower. He never stops moving during matches, exhausting anyone trying to mark him. Completely lacks natural volleyball talent -"+
                " his coordination is so poor he has to memorize every single movement and drill it repeatedly just to keep up with others. His coach, who cares about him most, even suggested he quit volleyball. But Jaehyun never gave up, training several times harder than everyone else to reach where he is today. He continues working tirelessly toward becoming the best.",
        image: "../tsc_web/img/jaehyun.webp",
        baseStats: {
            attack: { base: 80, maxLimit: 150, growth: [0, 1, 2, 3, 4, 5] },
            defense: { base: 80, maxLimit: 150, growth: [0, 1, 2, 3, 4, 5] },
            speed: { base: 80, maxLimit: 150, growth: [0, 1, 2, 3, 4, 5] },
            jump: { base: 80, maxLimit: 150, growth: [0, 1, 2, 3, 4, 5] }
        },
        recommended: {
            attack: { base: 150, growthText: "+5 (Max BT)", total: 155 },
            defense: { base: 135, growthText: "+5 (Max BT)", total: 140 },
            speed: { base: 150, growthText: "+5 (Max BT)", total: 155 },
            jump: { base: 150, growthText: "+5 (Max BT)", total: 155 }
        },
        skillStats: {
            determineAtk: [28.6, 35, 47.9, 47.9, 47.9, 62],
            determineJmp: [7.5, 10.2, 15.3, 15.3, 15.3, 20.7]
        },
        skills: [
            { name: "Determination", desc: "When Team Stamina falls to 30% or below, Attack and Jump increase. <br><span class='text-warning'> Attack: rageatk_VAL% , Jump: ragejmp_VAL%</span>" },
            { name: "Power Back Attack", desc: "Increases Power by 5.5 when performing a Spike from behind the Attack Line." }
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Low</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ]
    },
    {
        id: "jenny",
        name: "Jenny",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        sliderLabel: "Icarus", // Label dinamis untuk Jenny
        desc: "Phantom League's youngest attacker. After promising Sara Seo in childhood to 'become the best volleyball players,' she's been pushing forward relentlessly ever since. A childhood injury nearly ended her volleyball career forever, but through sheer determination and blood, sweat, and tears, she overcame it and showed the most remarkable growth rate in Phantom League. Her emotional intensity runs high,"+
            " causing dramatic performance swings based on her mental state, but when she's locked in, her focus becomes razor-sharp. Having devoted her entire life to volleyball, she's out of touch with general knowledge and struggles with normal teenage social interactions."+
            " It's not that she's uninterested in other things - she simply hasn't had opportunities to explore them, so she sometimes watches her peers with quiet longing.",
        image: "../tsc_web/img/jenny.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 150, growth: [0, 2, 5, 7, 10, 12] },
            defense: { base: 90, maxLimit: 160, growth: [0, 5, 10, 12, 15, 15] },
            speed: { base: 105, maxLimit: 160, growth: [0, 1, 3, 5, 8, 12] },
            jump: { base: 115, maxLimit: 145, growth: [0, 1, 3, 4, 4, 4] }
        },
        recommended: {
            attack: { base: 150, growthText: "+12 (Max BT)", total: 162 },
            defense: { base: 140, growthText: "+15 (Max BT)", total: 155 },
            speed: { base: 160, growthText: "+12 (Max BT)", total: 172 },
            jump: { base: 145, growthText: "+4 (Max BT)", total: 149 }
        },
        skillStats: {
            icarusHeights: [
                [0, 3.0, 3.2, 3.4, 3.6, 3.8],                     
                [0, 3.16, 3.37, 3.58, 3.79, 4.0],             
                [0, 3.24, 3.45, 3.67, 3.88, 4.1],                   
                [0, 3.32, 3.54, 3.76, 3.92, 4.2],             
                [0, 3.39, 3.62, 3.85, 4.07, 4.2],             
                [0, 3.55, 3.79, 4.03, 4.26, 4.5]              
            ],
            icarusAtk: [
                [3, 3, 6, 11, 17, 22],                             
                [3, 3, 4, 10, 16, 22, 28],                         
                [3, 7, 13, 19, 25, 31],                             
                [3, 3, 9, 15, 21, 27, 33],                         
                [3, 3, 11, 17, 24, 30, 36],                        
                [3, 3, 15, 22, 29, 35, 42]                         
            ],
            icarusJmp: [
                [3, 3, 6, 13, 21, 29],                             
                [3, 3, 4, 12, 20, 28, 37],                         
                [3, 3, 7, 23, 32, 42],                             
                [3, 3, 10, 18, 27, 36, 46],                        
                [3, 3, 13, 22, 31, 40, 50],                        
                [3, 3, 15, 28, 38, 49, 59]                         
            ]
        },
        skills: [
            { name: "Wings of Icarus", desc: "When performing a Spike, setting a new personal best Contact Point temporarily increases the Ball's Power. Attack and Jump increase based on your highest Contact Point. <br><span class='text-warning'>Power: +20%, Spin: +50%</span><br><span class='text-small text-warning'>Icarus Contact Point : ICARUS_HGT m, <br>Increases Attack by ICARUS_ATK and Jump by ICARUS_JMP</span>" },
            { name: "Burn the Ship", desc: "Transitions into a vertical Spike from a feint motion while Mid-air." },
            { name: "Energize", desc: "Press Spike Button to approach and charge the Gauge. Press Spike Button again to jump, and Jump changes depending on the Gauge." },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>High</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom fw-bolder'>Impossible</span>",
        ]
    },
    {
        id: "jihoon",
        name: "Jihoon",
        role: "SE",
        position: "Setter (SE)",
        isDave: true,
        desc: "Starting setter of Terra High’s volleyball club. With his natural friendliness, he plays the role of the team’s mood maker wherever he goes. In elementary school, he moved to the United States with his father, where he faced players bigger than himself and developed strong stamina and mental toughness. He never loses heart, even against powerful opponents,"+
                " and stays full of energy even when all his teammates are exhausted, making him a reliable source of vitality for the team. His hobby is running. However, he has a terrible sense of direction, so he often wanders off the walking path and gets lost. When walking his dog, he frequently ends up in another neighborhood.",
        image: "../tsc_web/img/jihoon.webp",
        baseStats: {
            attack: { base: 95, maxLimit: 155, growth: [0, 3, 5, 7, 11, 11] },
            defense: { base: 100, maxLimit: 155, growth: [0, 10, 10, 20, 20, 25] },
            speed: { base: 100, maxLimit: 155, growth: [0, 4, 7, 10, 10, 10] },
            jump: { base: 110, maxLimit: 155, growth: [0, 0, 0, 0, 0, 2] }
        },
        recommended: {
            attack: { base: 155, growthText: "+11 (Max BT)", total: 166 },
            defense: { base: 100, growthText: "+25 (Max BT)", total: 125 },
            speed: { base: 140, growthText: "+10 (Max BT)", total: 150 },
            jump: { base: 155, growthText: "+2 (Max BT)", total: 157 }
        },
        skillStats: {
            miracletoss: [15, 15, 15, 13, 12, 12, 12],
            miraclepwr: [0, 13, 26, 39, 52, 65, 78, 91],
            miraclespin: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4]
        },
        skills: [
            { name: "Miraculous Toss", desc: "Upon Skill Activation, performs a Miraculous Toss. The skill lasts until a teammate spikes that Set. When spiking this Set, the greater the score difference in favor of the opposing team, the more the Ball's Power increases proportionally,"+
                    " stacking up to a 7-point difference. <br><span class='text-warning'>Cooldown miracleset_VALs , Power Spike miracleatk_VAL% , Ball Spin miracleball_VAL% </span>" },
            { name: "Problem Solver", desc: "Attempts Attack Two when a teammate fails to spike the Ball received from Toss twice in a row. During Attack Two, <span class='text-warning'>the Ball's Power increases by 20% and ignores Blocking.</span>" },
            { name: "Speed Setter", desc: "<span class='text-warning'>Reduces the Speed penalty caused by Rally duration by 40%.</span>" },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "leon",
        name: "Leon",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Captain of Green Leon. Despite his apperance, his rough playing style and sharp tongue often draw criticism. Having always pursued strength above all else, he's completely indifferent to those he considers weak,"+
                " but turns docile as a lamb around Isabel and Robert, whom he respects as strong players. Strangely gets embarrassed when others acknowledge his skills.",
        image: "../tsc_web/img/leon.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 155, growth: [0, 5, 8, 12, 14, 15] },
            defense: { base: 100, maxLimit: 155, growth: [0, 3, 5, 5, 5, 10] },
            speed: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 5] },
            jump: { base: 100, maxLimit: 155, growth: [0, 4, 7, 8, 9, 10] }
        },
        recommended: {
            attack: { base: 155, growthText: "+15 (Max BT)", total: 170 },
            defense: { base: 110, growthText: "+10 (Max BT)", total: 120 },
            speed: { base: 155, growthText: "+5 (Max BT)", total: 160 },
            jump: { base: 155, growthText: "+10 (Max BT)", total: 165 }
        },
        skillStats: {
            pridepwr: [-20, +0, +6, +12, +20],
        },
        skills: [
            { name: "Pride", desc: "If the Ball is Spiked from 6m or more away from the net, its Horizontal Power increases based on the distance. A Spike 7.5 or farther away from the Net triggers the Sliding Pierce Effect."+
                    " However, if the Spike occurs within 3m of the Net, its Horizontal Power is reduced. <br><span class='text-warning'>Spike Power: prideatk_VAL%</span>" },
        ],
        synergies: [
            { name: "Wild Colosseum", desc: "<span class='text-info'>Leon + Viola</span> : Speed +5, Jump +2" }
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "lisia",
        name: "Lisia",
        role: "SE",
        position: "Setter (SE)",
        isDave: true,
        desc: "Player for Sun Receivers, the youth team of Sun Volleyball Team. Like her idol Oasis, she aims to enjoy the sport without being constrained by rules and victory. Though relatively new to beach volleyball, she's already secured a starting position and performs more brilliantly than anyone."
                +" Playing under the scorching sun all day has given her quite an appetite - she never leaves food unfinished and calmly devours even bizarre dishes, making her the main culprit behind emptying Oasis's wallet."
                +" She delivers the team's most devastating serves, launching the ball high before hammering it down with both power and precision that prevents opponents from even attempting returns. However, her power control needs work - consecutive attempts often sail out of bounds.",
        image: "../tsc_web/img/lisia.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 100, growth: [0, 0, 0, 0, 0, 0] },
            defense: { base: 100, maxLimit: 175, growth: [0, 0, 0, 0, 2, 4] },
            speed: { base: 100, maxLimit: 175, growth: [0, 0, 0, 0, 2, 4] },
            jump: { base: 100, maxLimit: 135, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 100, growthText: "+0 (Max BT)", total: 100 },
            defense: { base: 175, growthText: "+4 (Max BT)", total: 179 },
            speed: { base: 175, growthText: "+4 (Max BT)", total: 179 },
            jump: { base: 135, growthText: "+0 (Max BT)", total: 135 }
        },
        skillStats: {
            skyball: [
                [110, 85, 60, 35, 10],                     
                [130, 105, 80, 55, 30],             
                [140, 115, 90, 65, 40],                   
                [150, 125, 100, 75, 50],             
                [160, 135, 110, 85, 60],             
                [170, 145, 120, 95, 70]              
            ],
        },
        skills: [
            { name: "Skyball Serve", desc: "Has a chance to launch a powerful Skyball Serve high into the air. Any Opponent Player who Bumps it is inflicted with Discouraged for the remainder of the Rally."+
                " Success probability decreases with each consecutive successful Skyball Serve. <span class='text-warning'>Sky Serve chance: skyserve_VAL%</span>" },
            { name: "Sunshine", desc: "Upon the first Player Substitution of the Match, <span class='text-warning'>All Team Players enter the Engaged state.</span>" },
            { name: "Excellent Concentration", desc: "For every Service Ace scored by the Opponent Player, <span class='text-warning'>Team Max Stamina is permanently increased by 10.</span>" }
        ],
        synergies: [
            { name: "Small but Strong", desc: "<span class='text-info'>Lisia + Yongsup</span> : Attack +7, Jump +4 " },
            { name: "Wave Riding", desc: "<span class='text-info'>Lisia + Atis + Oasis</span> : Attack +7, Defense+5, Speed +5, Jump +5 " }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "lucas",
        name: "Lucas",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Phantom League's strongest attacker. Natural talent and instinct let him excel at whatever he tries. Self-centered with strong narcissistic tendencies, but he takes his responsibilities as a superstar seriously. Before his final Phantom League match,"+
                " he accidentally glimpsed Sanghyeon's tablet and discovered notes that had been erased and rewritten countless times. When he saw the word 'Oasis' on the last line, he immediately grasped its meaning and adopted it as his stage name.",
        image: "../tsc_web/img/lucas.webp",
        baseStats: {
            attack: { base: 120, maxLimit: 180, growth: [0, 3, 4, 7, 7, 7] },
            defense: { base: 95, maxLimit: 160, growth: [0, 5, 10, 10, 12, 15] },
            speed: { base: 100, maxLimit: 160, growth: [0, 0, 0, 0, 3, 5] },
            jump: { base: 110, maxLimit: 170, growth: [0, 1, 2, 3, 4, 5] }
        },
        recommended: {
            attack: { base: 180, growthText: "+7 (Max BT)", total: 187 },
            defense: { base: 95, growthText: "+15 (Max BT)", total: 110 },
            speed: { base: 160, growthText: "+5 (Max BT)", total: 165 },
            jump: { base: 170, growthText: "+5 (Max BT)", total: 175 }
        },
        skillStats: {
            heliospwr: [
                [0, 2.2, 6.3, 11.5, 17.7, 24.8, 32.6, 41],                     
                [0, 2.3, 6.6, 12.1, 18.6, 26, 34.2, 43.1],             
                [0, 2.4, 6.9, 12.7, 19.5, 27.3, 35.8, 45.1],                   
                [0, 2.5, 7.2, 13.2, 20.4, 28.5, 37.5, 47.2],             
                [0, 2.5, 7.2, 13.2, 20.4, 28.5, 37.5, 47.2],
                [0, 2.5, 7.2, 13.2, 20.4, 28.5, 37.5, 47.2],              
            ],
            sunburstchance: [15, 20, 25, 25, 30, 35],
            daveGrowth: {
            0: { atk: 0, def: 0, spd: 0, jmp: 0 },
            1: { atk: 7, def: 5, spd: 5, jmp: 3 },
            2: { atk: 14, def: 10, spd: 10, jmp: 5 },
            3: { atk: 21, def: 15, spd: 15, jmp: 8 },
            4: { atk: 28, def: 20, spd: 20, jmp: 11 },
            5: { atk: 35, def: 25, spd: 25, jmp: 14 },
            6: { atk: 42, def: 30, spd: 30, jmp: 16 },
            7: { atk: 49, def: 35, spd: 35, jmp: 19 },
            8: { atk: 56, def: 40, spd: 40, jmp: 22 },
            9: { atk: 62, def: 45, spd: 45, jmp: 25 },
            10: { atk: 69, def: 50, spd: 50, jmp: 27 },
            11: { atk: 76, def: 55, spd: 55, jmp: 30 },
            12: { atk: 83, def: 60, spd: 60, jmp: 33 },
            },
            flareatk: [25, 30, 33, 33, 33, 33],
            flaredef: [50, 52, 52, 53, 53, 53],
            flarespd: [30, 31, 31, 31.5, 31.5, 31.5],
            flarejmp: [27, 29, 29, 29, 29, 29],
            flaredur: [5, 6, 6, 7, 7, 8],
            flarecldwn: [7, 6, 5, 5, 4, 4]
        },
        skills: [
            { name: "Flare", desc: "During the Skill's Activation, all Status increases. However, Status during skill Deactivation decreases according to the Skill's Activation counts."+
                    " (Status reduction stacks up to 12 times) Timeouts and Player Substitutions resets this Status penalty. <br><span class='small text-warning'>Duration : flaredur_VALs , Cooldown : flarecldwn_VALs</span>"+
                    " <br><span class='small text-warning'>Attack : +flareatk_VAL , Def : +flaredef_VAL , Speed : +flarespd_VAL , Jump : +flarejmp_VAL</span><br><span class='small text-danger-custom2'>flaredebuff_VAL</span>" },
            { name: "Helios", desc: "Dives toward the ground Mid-air during the Spike to accelerate the fall. The faster the descent, the more the Ball's Power increases. <br><span class='text-warning'>Power: +heliospwr_VAL%</span>" },
            { name: "Brave Heart", desc: "<span class='text-warning'> Changes the Discouraged state into the Engaged state.</span>" },
            { name: "Long Serve Toss", desc: "Can perform a very high Serve Toss with a boosted minimum Set speed." },
            { name: "Sunspot Burst", desc: "Spike has a chance to trigger Sunspot Burst. When active, <span class='text-warning'>Power is increased by 13% and Spin by 1. Activation Chance: sunburst_VAL%</span>" },
        ],
        synergies: [
            { name: "Glory of the Past", desc: "<span class='text-info'>Lucas + Atis</span> : Increases speed after Atis Slides and stands up" },
            { name: "Eclipse", desc: "<span class='text-info'>Lucas + Zero</span> : Attack +3, Jump +2" },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very High</span>",
            "Engaged: <span class='text-success-custom'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ]
    },
    {
        id: "mike",
        name: "Mike",
        role: "MB",
        position: "Middle Blocker (MB)",
        isDave: true, 
        desc: "Dave's twin brother who co-runs the lodge. He enjoys exercising with sandbags strapped to his ankles and was famous during his playing days for extreme training methods like running with tires tied to his waist. While he has no hair on top,"+
                " his sideburns are thicker than anyone's. He carefully grooms them in front of the mirror every morning.",
        image: "../tsc_web/img/mike.webp",
        baseStats: {
            attack: { base: 130, maxLimit: 165, growth: [0, 3, 5, 5, 7, 7] },
            defense: { base: 100, maxLimit: 160, growth: [0, 0, 0, 0, 3, 5] },
            speed: { base: 95, maxLimit: 160, growth: [0, 5, 10, 15, 18, 20] },
            jump: { base: 110, maxLimit: 160, growth: [0, 0, 0, 2, 2, 2] }
        },
        recommended: {
            attack: { base: 165, growthText: "+7 (Max BT)", total: 172 },
            defense: { base: 120, growthText: "+5 (Max BT)", total: 125 },
            speed: { base: 140, growthText: "+20 (Max BT)", total: 160 },
            jump: { base: 160, growthText: "+2 (Max BT)", total: 162 }
        },
        skillStats: {
            tire: [
                {
                    inactive: { attack: 0, speed: -35, jump: -15 },
                    active:   { attack: 14, speed: 20, jump: 13 }
                },
                {
                    inactive: { attack: 0, speed: -35, jump: -15 },
                    active:   { attack: 14, speed: 20, jump: 13 }
                },
                {
                    inactive: { attack: 0, speed: -38.5, jump: -15 },
                    active:   { attack: 15, speed: 22, jump: 13 }
                },
                {
                    inactive: { attack: 0, speed: -42, jump: -16 },
                    active:   { attack: 17, speed: 24, jump: 14 }
                },
                {
                    inactive: { attack: 0, speed: -43.75, jump: -16 },
                    active:   { attack: 17, speed: 25, jump: 14 }
                },
                {
                    inactive: { attack: 0, speed: -43.75, jump: -16 },
                    active:   { attack: 17, speed: 25, jump: 14 }
                }
            ]
        },
        skills: [
            { name: "Tire", desc: "Speed and Jump are reduced while wearing the Tire. Each Bump Charges the Gauge;"+
                    " once full, the Tire breaks, greatly increasing your Attack, Jump, and Speed. <br><span class='text-warning'>tire_VAL</span>" },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
        ],
        synergies: [
            { name: "Brotherly Respect", desc: "<span class='text-info'>Mike + Dave</span> : Dave's push-up speed increases by 20%" }
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-danger'>Very High</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ]
    },
    {
        id: "minjun",
        name: "Minjun",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "The unlucky attacker. Misfortune strikes without fail before every important match, so he's never shown his full abilities. But for him, misfortune is just another seasoning to life."+
            " He brushes off the past and quickly starts new challenges. Teams with Minjun Cho never lose their fighting spirit.",
        image: "../tsc_web/img/minjun.webp",
        baseStats: {
            attack: { base: 115, maxLimit: 145, growth: [0, 5, 8, 13, 15, 15] },
            defense: { base: 125, maxLimit: 155, growth: [0, 3, 5, 5, 5, 10] },
            speed: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 5] },
            jump: { base: 115, maxLimit: 160, growth: [0, 4, 7, 8, 9, 10] }
        },
        recommended: {
            attack: { base: 145, growthText: "+15 (Max BT)", total: 160 },
            defense: { base: 125, growthText: "+10 (Max BT)", total: 135 },
            speed: { base: 145, growthText: "+5 (Max BT)", total: 150 },
            jump: { base: 160, growthText: "+10 (Max BT)", total: 170 }
        },
        skillStats: {
            blitzpwr: [20, 22, 24, 26, 28, 30],
            blitzspin: [3, 3.3, 3.6, 3.9, 4.2, 4.5]
        },
        skills: [
            { name: "Blitz Spin", desc: "Increases the Vertical Power and Spin of the Ball during a Spike, causing its Trajectory to curve."+
                    "<br><span class='text-warning'>Power: +blitzpwr_VAL% , Spin: +blitzspin_VAL</span>" },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ]
    },
    {
        id: "muyeong",
        name: "Muyeong",
        role: "SE",
        position: "Setter (SE)",
        desc: "One of Seonrim's disciples with a cautious, composed personality that lands him with various odd jobs. He has an old soul - when Ryuhyeon gets stuck-up or Hongshi causes trouble, he clicks his tongue and launches into lectures."+
                " His defensive prowess earned him the title 'Guardian of Seonrim.' Strategic thinking is his forte - he never panics, calmly reads situations, then chooses optimal moves. "+
                "Not flashy, but extremely troublesome to face. He accurately gauges teammates' abilities and seamlessly coordinates them, elevating the entire team's defense.",
        image: "../tsc_web/img/muyeong.webp",
        baseStats: {
            attack: { base: 85, maxLimit: 155, growth: [0, 2, 2, 5, 5, 5] },
            defense: { base: 130, maxLimit: 180, growth: [0, 0, 3, 3, 6, 10] },
            speed: { base: 85, maxLimit: 160, growth: [0, 3, 6, 6, 10, 10] },
            jump: { base: 130, maxLimit: 170, growth: [0, 0, 0, 3, 3, 6] }
        },
        recommended: {
            attack: { base: 85, growthText: "+5 (Max BT)", total: 90 },
            defense: { base: 170, growthText: "+10 (Max BT)", total: 180 },
            speed: { base: 160, growthText: "+10 (Max BT)", total: 170 },
            jump: { base: 170, growthText: "+6 (Max BT)", total: 176 }
        },
        skillStats: {
            aegisdur: [10, 10, 10, 10, 10, 10],
            aegiscldwn: [15, 15, 15, 13, 13, 11],
            aegisdef: [30, 35, 35, 40, 40, 50],
            aegisrange: [30, 30, 30, 30, 30, 40],

            smitedur: [5, 7, 10, 15, 18, 22],
            smiteatk: [24, 26, 29, 35, 38, 42],
        },
        skills: [
            { name: "Aegis", desc: "Upon Skill Activation, the player with the lowest Defense among Teammate enters the Aegis state. <span class='text-warning'>While in the Aegis state,"+
                    " Defense and Defense Range increase</span>, and the Aegis state is removed upon defending a Spike. <br><span class='text-warning'>Duration: aegisdur_VALs , Cooldown: aegiscldwn_VALs</span>"+
                    "<br><span class='small text-warning'>Defense: +aegisdef_VAL , Range Def: +aegisrange_VAL%</span>" },
            { name: "Stable Play", desc: "During a Rally, <span class='text-warning'>every 10 combined Touches restore 20 Stamina to the Team.</span>" },
            { name: "Slow Set", desc: "Performs a stable Set with reduced Spin, causing the Ball to fall slowly." },
            { name: "Smite", desc: "When defending against Feint in the Aegis state, it transitions to the Smite state. <span class='text-warning'>While in the Smite state, Attack increases.</span>"+
                    "<br><span class='text-warning'>Attack: +smiteatk_VAL , Duration: smitedur_VALs</span>" },
        ],
        synergies: [
            { name: "Indifferent", desc: "<span class='text-info'>Muyeong + Atis</span> : Defense +10" },
            { name: "Seonrim Partner", desc: "<span class='text-info'>Muyeong + Ryuhyeon</span> : Ryuhyeon's charging speed increases by 20%" },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "nishikawa",
        name: "Nishikawa",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "One of the Big Five attackers. When he spikes, thunder echoes through the gym, earning him the nickname 'Thunder Nishikawa.' Considered to have the best jumping skills among the Big Five, he's the one every young volleyball player dreams of becoming.",
        image: "../tsc_web/img/nishikawa.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 195, growth: [0, 0, 2, 4, 5, 6] },
            defense: { base: 100, maxLimit: 160, growth: [0, 10, 15, 20, 25, 25] },
            speed: { base: 100, maxLimit: 160, growth: [0, 0, 0, 0, 3, 5] },
            jump: { base: 110, maxLimit: 180, growth: [0, 0, 0, 0, 1, 1] }
        },
        recommended: {
            attack: { base: 195, growthText: "+6 (Max BT)", total: 201 },
            defense: { base: 100, growthText: "+25 (Max BT)", total: 125 },
            speed: { base: 120, growthText: "+5 (Max BT)", total: 145 },
            jump: { base: 180, growthText: "+2 (Max BT)", total: 181 }
        },
        skillStats: {
            thunderSpike: [37.2, 38.3, 39.1, 40.2, 40.2, 40.2], 
            highToss: [0, 0, 3, 5, 8, 12]      
        },
        skills: [
            { name: "Energize", desc: "Press Spike Button to approach and charge the Gauge. Press Spike Button again to jump, and Jump changes depending on the Gauge." },
            { name: "Thunder Spike", desc: "If Contact Point exceeds 4m, performs a thunderous Spike with increased Power and Spin. The Spike gains the Sliding Pierce Effect (<strong class='text-warning'>+TS_VAL% Ball's Power</strong>)." },
            { name: "Double Spike", desc: "Can Swing twice while in Mid-air. When performing a Spike on the second Swing, if the Contact Point is below 4m, the Ball's Power increases by 15%" },
            { name: "High 3rd Ball Play", desc: "On the third Touch, if the Ball is sent over without an Attack, it is sent high into the air." },
            { name: "Zap Zap Trail", desc: "Changes the color of the Ball's Trail during the Serve Toss." },
            { name: "Topspin Feint", desc: "The Feint has added spin, causing the Ball to drop faster. Ball's spin : +260%" },
            { name: "Spark", desc: "When performing a Spike, Power increases if the Contact Point is below 4m (<strong class='text-warning'>+HT_VAL%% Attack Power</strong>)." }
        ],
        synergies: [
            { name: "None", desc: "None" },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "noname",
        name: "NN",
        role: "SE",
        position: "Setter (SE)",
        desc: "Chocolate milk is a beverage that combines the flavor of chocolate with the nutrition of milk and provides a balance of carbohydrates,"+
                " protein, and fat. It is a popular choice for increased calcium intake, especially in children.",
        image: "../tsc_web/img/nn.webp",
        baseStats: {
            attack: { base: 105, maxLimit: 160, growth: [0, 2, 2, 4, 7, 10] },
            defense: { base: 105, maxLimit: 160, growth: [0, 0, 2, 3, 5, 5] },
            speed: { base: 105, maxLimit: 160, growth: [0, 0, 2, 3, 5, 5] },
            jump: { base: 105, maxLimit: 160, growth: [0, 2, 2, 2, 2, 2] }
        },
        recommended: {
            attack: { base: 160, growthText: "+10 (Max BT)", total: 170 },
            defense: { base: 105, growthText: "+5 (Max BT)", total: 110 },
            speed: { base: 160, growthText: "+5 (Max BT)", total: 165 },
            jump: { base: 160, growthText: "+2 (Max BT)", total: 162 }
        },
        skillStats: {
        },
        skills: [
            { name: "Snipe", desc: "Attempts Snipe just before Set. <span class='text-warning'>If a Player is at the targeted location, performs a very fast Set.</span> If no Player is near the targeted location, performs a different Set." },
            { name: "Long-Distance Set", desc: "When the distance to the Net exceeds 9.8m, performs a Set with reduced Spin and high Contact Point." },
        ],
        synergies: [
            { name: "Strawberry Choco Milk", desc: "<span class='text-info'>NN + Jenny</span> : Jump +5" },
            { name: "Spartan Soul", desc: "<span class='text-info'>NN + Roberto + Isabel</span> : Attack +6, Defense +10, Speed +2, Jump +4" },
        ],
        overall: [
            "Worked Up: <span class='text-danger-custom fw-bolder'>Impossible</span>",
            "Careless: <span class='text-success-custom'>Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "oasis",
        name: "Oasis",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "The world's best professional beach volleyball player. Currently retired and developing youth players at Sun Volleyball Team. 'Oasis' isn't his real name,"+
                " and nothing is known about his pre-professional career. He just laughs off any questions about his past.",
        image: "../tsc_web/img/oasis.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 2, 5] },
            defense: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            speed: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            jump: { base: 110, maxLimit: 155, growth: [0, 0, 0, 0, 2, 5] }
        },
        recommended: {
            attack: { base: 155, growthText: "+5 (Max BT)", total: 160 },
            defense: { base: 120, growthText: "+0 (Max BT)", total: 120 },
            speed: { base: 155, growthText: "+0 (Max BT)", total: 155 },
            jump: { base: 155, growthText: "+5 (Max BT)", total: 160 }
        },
        skillStats: {
            sunrise: [
                {
                    0:  { attack: 0, speed: 0, jump: 0 },
                    3:  { attack: 21, speed: 5, jump: 9 },
                    6:  { attack: 42, speed: 10, jump: 18 },
                    9:  { attack: 62, speed: 15, jump: 27 },
                    12: { attack: 83, speed: 20, jump: 36 },
                    14: { attack: 83, speed: 20, jump: 36 },

                },
                {
                    0:  { attack: 0, speed: 0, jump: 0 },
                    3:  { attack: 22, speed: 5.25, jump: 10 },
                    6:  { attack: 44, speed: 10.5, jump: 19 },
                    9:  { attack: 66, speed: 15.75, jump: 29 },
                    12: { attack: 88, speed: 21, jump: 38 },
                    14: { attack: 88, speed: 21, jump: 38 },
                },
                {
                    0:  { attack: 0, speed: 0, jump: 0 },
                    3:  { attack: 23, speed: 5.5, jump: 10 },
                    6:  { attack: 46, speed: 11, jump: 20 },
                    9:  { attack: 69, speed: 16.5, jump: 30 },
                    12: { attack: 92, speed: 22, jump: 40 },
                    14: { attack: 92, speed: 22, jump: 40 },
                },
                {
                    0:  { attack: 0, speed: 0, jump: 0 },
                    3:  { attack: 24, speed: 5.75, jump: 10 },
                    6:  { attack: 48, speed: 11.5, jump: 21 },
                    9:  { attack: 72, speed: 17.25, jump: 31 },
                    12: { attack: 96, speed: 23, jump: 42 },
                    14: { attack: 96, speed: 23, jump: 42 },
                },
                {
                    0:  { attack: 0, speed: 0, jump: 0 },
                    3:  { attack: 24, speed: 5.75, jump: 10 },
                    6:  { attack: 48, speed: 11.5, jump: 21 },
                    9:  { attack: 72, speed: 17.25, jump: 31 },
                    12: { attack: 96, speed: 23, jump: 42 },
                    14: { attack: 96, speed: 23, jump: 42 },
                },
                {
                    0:  { attack: 0, speed: 0, jump: 0 },
                    3:  { attack: 24, speed: 5.75, jump: 10 },
                    6:  { attack: 48, speed: 11.5, jump: 21 },
                    9:  { attack: 72, speed: 17.25, jump: 31 },
                    12: { attack: 96, speed: 23, jump: 42 },
                    14: { attack: 96, speed: 23, jump: 42 },
                }
            ]
        },
        skills: [
            { name: "Sunrise", desc: "Until 'Noon,' <span class='text-warning'>for every 3 points gained by Opponent Team, Attack, Speed, and Jump increase.</span>"+
                    " Status increases only until reaching 15 points. <br><span class='text-warning'>sunrise_VAL</span>" },
            { name: "High Noon", desc: "From High Noon (15 points) until Sunset, <span class='text-warning'>Attack is fixed at 262.5, Speed at 175, and Jump at 198.18 .</span>" },
            { name: "Sunset", desc: "From Sunset (21 points), <span class='text-warning'>Attack is fixed at 75, Speed at 80, and Jump at 56.36.</span>" },
            { name: "Opportunistic Feint", desc: "When Opponent Team Stamina is 20 or below, <span class='text-warning'>has a 66.7% chance to perform a Feint.</span>" },
        ],
        synergies: [
            { name: "None", desc: "<span class='text-info'>Oasis + Hanra</span> : Oasis High Noon activates at 9 points" },
            { name: "Wave Riding", desc: "<span class='text-info'>Oasis + Lisia + Atis</span> : Attack +7, Defense+5, Speed +5, Jump +5 " }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
    {
        id: "raul",
        name: "Raul",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "One of the Big Five attackers. With overwhelming power, he crushes his opponents on the court. Not only is he incredibly strong, but his ball control is frighteningly precise, allowing him to fire cannon-like serves straight onto the sideline without hesitation. Once known for recording the highest transfer fee across all five major leagues,"+
                " he shattered multiple personal award records and drew global attention from fans. He even declared he would claim the MVP title in all five leagues and transferred teams to compete with Viktor for the championship. However, after a major incident that caused a huge uproar and led to his suspension, he is now seeking redemption in the Phantom League.",
        image: "../tsc_web/img/raul.webp",
        baseStats: {
            attack: { base: 105, maxLimit: 200, growth: [0, 2, 3, 5, 5, 5] },
            defense: { base: 95, maxLimit: 155, growth: [0, 1, 3, 5, 8, 10] },
            speed: { base: 95, maxLimit: 145, growth: [0, 1, 3, 5, 8, 10] },
            jump: { base: 105, maxLimit: 160, growth: [0, 2, 3, 5, 5, 5] }
        },
        recommended: {
            attack: { base: 200, growthText: "+5 (Max BT)", total: 205 },
            defense: { base: 95, growthText: "+10 (Max BT)", total: 105 },
            speed: { base: 140, growthText: "+10 (Max BT)", total: 150 },
            jump: { base: 160, growthText: "+5 (Max BT)", total: 165 }
        },
        skillStats: {
            darknight: [
                {
                    0:  { attack: +0, speed: +0, jump: +0 },
                    1:  { attack: +4, speed: +3, jump: +0 },
                    2:  { attack: +8, speed: +6, jump: +1 },
                    3:  { attack: +12, speed: +9, jump: +1 },
                    4: { attack: +17, speed: +12, jump: +2 },
                    5: { attack: +21, speed: +15, jump: +2 },
                    6:  { attack: +25, speed: +18, jump: +3 },
                    7:  { attack: +29, speed: +21, jump: +3 },
                    8:  { attack: +33, speed: +24, jump: +4 },
                    9: { attack: +38, speed: +27, jump: +4 },
                    10: { attack: +42, speed: +30, jump: +5 },
                },
                {
                    0:  { attack: +0, speed: +0, jump: +0 },
                    1:  { attack: +4, speed: +3, jump: +0 },
                    2:  { attack: +8, speed: +6, jump: +1 },
                    3:  { attack: +12, speed: +9, jump: +1 },
                    4: { attack: +17, speed: +12, jump: +2 },
                    5: { attack: +21, speed: +15, jump: +2 },
                    6:  { attack: +25, speed: +18, jump: +3 },
                    7:  { attack: +29, speed: +21, jump: +3 },
                    8:  { attack: +33, speed: +24, jump: +4 },
                    9: { attack: +38, speed: +27, jump: +4 },
                    10: { attack: +42, speed: +30, jump: +5 },
                },
                {
                    0:  { attack: +0, speed: +0, jump: +0 },
                    1:  { attack: +5, speed: +3.3, jump: +0 },
                    2:  { attack: +9, speed: +6.6, jump: +1 },
                    3:  { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6:  { attack: +28, speed: +19.8, jump: +3 },
                    7:  { attack: +32, speed: +23.1, jump: +3 },
                    8:  { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
                {
                    0:  { attack: +0, speed: +0, jump: +0 },
                    1:  { attack: +5, speed: +3.3, jump: +0 },
                    2:  { attack: +9, speed: +6.6, jump: +1 },
                    3:  { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6:  { attack: +28, speed: +19.8, jump: +3 },
                    7:  { attack: +32, speed: +23.1, jump: +3 },
                    8:  { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
                {
                    0:  { attack: +0, speed: +0, jump: +0 },
                    1:  { attack: +5, speed: +3.3, jump: +0 },
                    2:  { attack: +9, speed: +6.6, jump: +1 },
                    3:  { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6:  { attack: +28, speed: +19.8, jump: +3 },
                    7:  { attack: +32, speed: +23.1, jump: +3 },
                    8:  { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
                {
                    0:  { attack: +0, speed: +0, jump: +0 },
                    1:  { attack: +5, speed: +3.3, jump: +0 },
                    2:  { attack: +9, speed: +6.6, jump: +1 },
                    3:  { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6:  { attack: +28, speed: +19.8, jump: +3 },
                    7:  { attack: +32, speed: +23.1, jump: +3 },
                    8:  { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
            ]
        },
        skills: [
            { name: "Beast Spike", desc: "Power and Spin of the Ball scale with the Wild Pounce's Charged Gauge. <span class='text-warning'>A max-Gauge Spike aimed toward the Net breaks through other Player's Block. However, penetration is only possible if it exceeds the Attack of the blocking Player."+
                    " A max-Gauge Spike while jumping away from the Net will trigger the Sliding Pierce Effect. However, that Spike cannot penetrate a Block.</span> <span class='text-danger-custom2'>Automatic Mode reduces all Attack speed bonuses by 25%.</span>" },
            { name: "First Impact", desc: "Upon performing a Spike with maximum Gauge for the first time during a Match, <span class='text-warning'>the Power of the Ball increases by 40% and the Spin increases by 60%.</span>" },
            { name: "Dark Night", desc: "The larger the Opponent Team's Score lead, <span class='text-warning'>the more Status increases.</span> (Scales up to a 10 point difference.)"+
                    "<br><span class='text-warning'>darknight_VAL</span>" },
            { name: "Royal Quality", desc: "If not controlled manually, <span class='text-danger-custom2'>the Player's Attack decreases by 15%. Automatic Mode is also affected.</span>" },
            { name: "Wild Pounce", desc: "Moving toward the Net Charges the Gauge, providing a speed boost that scales with the amount charged. Automatic Mode automatically Charges the Gauge while Mid-air." },
            { name: "Beast Fang", desc: "<span class='text-warning'>Has a wider Spike range of 1.2m.</span>" },
            { name: "Long Serve Toss", desc: "Allows the Serve Toss to be performed further forward." },
        ],
        synergies: [
            { name: "Unified Offense & Defense", desc: "<span class='text-info'>Raul + Sif</span> : Raul's charging speed increases by 10%" }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ]
    },
];

let activeCharacter = null;
let currentBt = 0;
let currentPushup = 0;

let manualPoints = JSON.parse(localStorage.getItem('tsc_manual_points')) || {};

function getMaxManualPoint(charId) {
    if (charId === 'iris' || charId === 'raul') {
        return 195;
    } else if (charId === 'hongshi' || charId === 'ahyeon' || charId === 'claire' || charId === 'nishikawa' || charId === 'jenny' || charId === 'lisia') {
        return 185;
    } else if (charId === 'atis' || charId === 'clyde' || charId === 'leon' || charId === 'oasis') {
        return 175;
    }  else if (charId === 'lucas' ) {
        return 170;
    } else if (charId === 'noname') {
        return 165;
    } else if (charId === 'muyeong') {
        return 155;
    } else if (charId === 'heeseong' || charId === 'mike') {
        return 150;
    }  else if (charId === 'ellio' || charId === 'jihoon') {
        return 145;
    } else if (charId === 'hanra') {
        return 135;
    } else if (charId === 'crow' || charId === 'hari') {
        return 125;
    } else if (charId === 'minjun') {
        return 120;
    } else if (charId === 'isabel') {
        return 110;
    } else if (charId === 'dave') {
        return 105;
    } else if (charId === 'jaehyun') {
        return 265;
    } else {
        return 120;
    }
}

function renderCharacterList(filter = 'ALL') {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;
    grid.innerHTML = "";

    const filteredData = charactersData.filter(char => {
        if (filter === 'ALL') return true;
        return char.role.toUpperCase() === filter.toUpperCase();
    });

    if (filteredData.length === 0) {
        grid.innerHTML = `<div class="text-center text-light py-4">Belum ada karakter untuk posisi ini.</div>`;
        return;
    }

    filteredData.forEach(char => {
        grid.innerHTML += `
            <div class="col-md-4 col-sm-6">
                <div class="card card-custom p-4 text-center character-card h-100 shadow-sm" onclick="selectCharacter('${char.id}')" style="cursor: pointer;">
                    <div class="char-img-wrapper mb-3">
                        <img src="${char.image}" alt="${char.name}" class="img-fluid" style="max-height: 150px; object-fit: contain;">
                    </div>
                    <h4 class="text-white mb-1 fw-bold">${char.name}</h4>
                    <p class="text-warning fw-semibold mb-3">${char.position}</p>
                    <p class="small text-light-custom mb-0">Click to view stat and breakthrough details.</p>
                </div>
            </div>
        `;
    });
}

function selectCharacter(id) {
    activeCharacter = charactersData.find(c => c.id === id);
    currentBt = 0;
    currentPushup = (id === 'iris') ? 1 : 0; 

    if (!manualPoints[activeCharacter.id]) {
        manualPoints[activeCharacter.id] = { attack: 0, defense: 0, speed: 0, jump: 0 };
    }

    //slider 1
    const slider = document.getElementById('daveRange');
    const sliderLabelText = document.getElementById('sliderLabelText');
    //slider 2
    const slider2Container = document.getElementById('sliderContainer2');
    const slider2 = document.getElementById('daveRange2');
    const sliderLabelText2 = document.getElementById('sliderLabelText2');
    const pushupValEl2 = document.getElementById('pushupVal2');

    if (slider) {
        if (activeCharacter.id === 'claire') {
            slider.min = 0;
            slider.max = 100;
            slider.step = 10;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Overdrive Gauge";
        } else if (activeCharacter.id === 'ellio') {
            slider.min = 0;
            slider.max = 89;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Spike Angle (Abyss Toss)";
        } else if (activeCharacter.id === 'hari') {
            slider.min = 0;
            slider.max = 3;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Death Bloom Stacks";
        } else if (activeCharacter.id === 'iris') {
            slider.min = 0;
            slider.max = 3;
            slider.step = 1;
            slider.value = 1; 
            if (sliderLabelText) sliderLabelText.innerText = "Compass Accuracy";
        } else if (activeCharacter.id === 'isabel') {
            slider.min = 0;
            let bonusMax = activeCharacter.btBonusGauge ? activeCharacter.btBonusGauge[currentBt] : 0; 
            slider.max = 10 + bonusMax; 
            slider.step = 1;
            slider.value = 0;
            currentPushup = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Parry Gauge";
        } else if (activeCharacter.id === 'jaehyun') {
            slider.min = 0;
            slider.max = 1;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Determination";
        } else if (activeCharacter.id === 'jenny') {
            slider.min = 0;
            slider.max = 5;
            slider.step = 1;
            slider.value = 0;
            currentPushup = 0;
            if (sliderLabelText) sliderLabelText.innerText = activeCharacter.sliderLabel || "Push-up";
        } else if (activeCharacter.id === 'jihoon') {
            slider.min = 0;
            slider.max = 7;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Miracle Toss (Score Gap)";
        } else if (activeCharacter.id === 'leon') {
            slider.min = 0;
            slider.max = 4;
            slider.step = 1;
            slider.value = 1;
            if (sliderLabelText) sliderLabelText.innerText = "Pride Power";
        }  else if (activeCharacter.id === 'lisia') {
            slider.min = 0;
            slider.max = 4;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Skyball Serve";
        } else if (activeCharacter.id === 'lucas') {
            slider.min = 0;
            slider.max = 7;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Fall Power ";
        } else if (activeCharacter.id === 'mike') {
            slider.min = 0;
            slider.max = 1;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Tire ";
        } else if (activeCharacter.id === 'oasis') {
            const sunriseData = activeCharacter.skillStats.sunrise[currentBt];
            const sunriseLvls = Object.keys(sunriseData).map(Number);

            slider.min = 0;
            slider.max = sunriseLvls.length - 1;
            slider.step = 1;
            slider.value = 0;

            currentPushup = sunriseLvls[0];

            if (sliderLabelText) {
                sliderLabelText.innerText = "Sunrise Point";
            }
        } else if (activeCharacter.id === 'raul') {
            slider.min = 0;
            slider.max = 10;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Score Difference ";
        } else {
            slider.min = 0;
            slider.max = 300;
            slider.step = 50;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = activeCharacter.sliderLabel || "Push-up";
        }
    }
    
    // =====================================
    // Slider 2 — Flare Debuff
    // Lucas ONLY
    // =====================================
    if (slider2Container) {
        if (activeCharacter.id === 'lucas') {
            slider2Container.style.display = 'block';
            if (slider2) {
                slider2.min = 0;
                slider2.max = 12;
                slider2.step = 1;
                slider2.value = currentFlareStack;
            }

            if (sliderLabelText2) {
                    sliderLabelText2.innerText = "Flare Debuff";
            }

            if (pushupValEl2) {
                    pushupValEl2.innerText =
                        "Stack " + currentFlareStack;
            }

        } else {
            slider2Container.style.display = 'none';
        }
    }

    const pushupValEl = document.getElementById('pushupVal');
    if (pushupValEl) {
        if (activeCharacter.id === 'ellio') {
            pushupValEl.innerText = "0°";
        } else if (activeCharacter.id === 'hari') {
            pushupValEl.innerText = "Stack 0";
        } else if (activeCharacter.id === 'iris') {
            pushupValEl.innerText = "Fair (Power: 0%, Spin: 0%)";
        } else if (activeCharacter.id === 'isabel' || activeCharacter.id === 'leon') {
            pushupValEl.innerText = "0%";  
        } else if (activeCharacter.id === 'mike') {
            pushupValEl.innerText = "Inactive";
        } else if (activeCharacter.id === 'oasis') {
            pushupValEl.innerText = "Sunrise Point 0";
        } else if (activeCharacter.id === 'raul') {
            pushupValEl.innerText = "0 Points";
        } else {
            pushupValEl.innerText = 0;
        }
    }

    document.getElementById('detailImg').src = activeCharacter.image;
    document.getElementById('detailName').innerText = activeCharacter.name;
    document.getElementById('detailPosition').innerText = activeCharacter.position;
    document.getElementById('detailDesc').innerText = activeCharacter.desc;

    const checkboxes = document.querySelectorAll('.buff-checkbox');
    checkboxes.forEach(cb => {
        const buffRole = cb.getAttribute('data-position');
        const parentLabel = cb.closest('label');

        if (buffRole === activeCharacter.role) {
            cb.checked = false;
            cb.disabled = true;
            if (parentLabel) parentLabel.style.opacity = '0.4';
        } else {
            cb.disabled = false;
            if (parentLabel) parentLabel.style.opacity = '1';
        }
    });

    renderSkillsAndSynergies();

    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';

    updateDetailView();
}

let currentFallPower = 0;   // Variabel untuk slider 1
let currentFlareStack = 0;  // Variabel untuk slider 2 (Overdrive/Flare Debuff)

function handleSliderChange(value) {
    let val = parseInt(value) || 0;

    if (activeCharacter?.id === 'oasis') {

        const sunriseData =
            activeCharacter.skillStats.sunrise[currentBt];

        const sunriseLvls =
            Object.keys(sunriseData).map(Number);

        currentPushup =
            sunriseLvls[val] ?? sunriseLvls[0];

    } else {
        currentPushup = val;
    }

    const pushupValEl = document.getElementById('pushupVal');

    // lanjut kode lama

    if (pushupValEl) {
        if (activeCharacter && activeCharacter.id === 'ellio') {
            pushupValEl.innerText = val + "°";
        } else if (activeCharacter && activeCharacter.id === 'hari') {
            pushupValEl.innerText = "Stack " + val;
        } else if (activeCharacter && activeCharacter.id === 'iris') {
            const irisStatus = [
                "Bad (Power: -10%, Spin: 0%)",
                "Fair (Power: 0%, Spin: 0%)",
                "Good (Power: 8%, Spin: 6%)",
                "Perfect (Power: 20%, Spin: 30%)"
            ];

            pushupValEl.innerText =
                irisStatus[val] || "Fair (Power: 0%, Spin: 0%)";

        } else if (activeCharacter && activeCharacter.id === 'isabel') {
            pushupValEl.innerText = (val * 10) + "%";

        } else if (activeCharacter && activeCharacter.id === 'jaehyun') {
            pushupValEl.innerText = val === 0 ? "Inactive" : "Active";

        } else if (activeCharacter && activeCharacter.id === 'jenny') {
            pushupValEl.innerText = "Stage " + val;

        } else if (activeCharacter && activeCharacter.id === 'jihoon') {
            pushupValEl.innerText = "Gap " + val;

        } else if (activeCharacter && activeCharacter.id === 'leon') {
            const leonpwr = [
                "less than 2.6m (Power: -20%, Slide Pierce : +0)",
                "around 4.4m (Power: 0%, Slide Pierce : +0)",
                "around 5.9m (Power: 6%, Slide Pierce : +0)",
                "around 7.5m (Power: 12%, Slide Pierce : +0)",
                "more than or exact 10m (Power: 20%, Slide Pierce : +90)"
            ];

            pushupValEl.innerText =
                leonpwr[val] || "Pride (Power: 0%)";

        } else if (activeCharacter && activeCharacter.id === 'lisia') {
            pushupValEl.innerText = "Success " + val;

        } else if (activeCharacter && activeCharacter.id === 'lucas') {
            if (val > 5) {
                pushupValEl.innerText =
                    "Stage " + val + " (Slide Pierce: +90)";
            } else {
                pushupValEl.innerText = "" + val;
            }
        } else if (activeCharacter && activeCharacter.id === 'mike') {
            pushupValEl.innerText = val === 0 ? "Inactive" : "Active";
        }  else if (activeCharacter && activeCharacter.id === 'raul') {
            pushupValEl.innerText = val + " Points";
        } else {
            pushupValEl.innerText = val;
        }
    }

    
    updateDetailView();
}

// Fungsi slider kedua (Overdrive / Flare Debuff - 0 sampai 12)
function handleSliderChange2(value) {
    let val = parseInt(value) || 0;

    currentFlareStack = val;

    const pushupValEl2 = document.getElementById('pushupVal2');

    if (pushupValEl2) {
        pushupValEl2.innerText = "Stack " + val;
    }

    updateDetailView();
}

function goBack() {
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('listView').style.display = 'block';
    activeCharacter = null;
}

function changeBreakthrough(amount) {
    let newBt = currentBt + amount;
    if (newBt >= 0 && newBt <= 5) {
        currentBt = newBt;
        
        if (activeCharacter && activeCharacter.id === 'isabel') {
            const slider = document.getElementById('daveRange');
            if (slider) {
                let maxSteps = 10 + (activeCharacter.btBonusGauge ? activeCharacter.btBonusGauge[currentBt] : 3);
                slider.max = maxSteps;
                if (parseInt(slider.value) > maxSteps) {
                    slider.value = maxSteps;
                    currentPushup = maxSteps;
                }
            }
        }
        
        updateDetailView();
    }
}

function modifyManualStat(statKey, amount) {
    if (!activeCharacter) return;
    let currentData = manualPoints[activeCharacter.id];
    let statObj = activeCharacter.baseStats[statKey];
    
    let growthBonus = statObj.growth[currentBt] || 0;
    if (activeCharacter.isDave && activeCharacter.daveGrowth) {
        const pushupData = activeCharacter.daveGrowth[currentPushup];
        if (pushupData) {
            const mapKey = { attack: 'atk', defense: 'def', speed: 'spd', jump: 'jmp' }[statKey];
            if (mapKey && pushupData[mapKey] !== undefined) {
                growthBonus += pushupData[mapKey];
            }
        }
    } else if (activeCharacter.id === 'jenny' && activeCharacter.skillStats && activeCharacter.skillStats.icarusAtk) {
        let atkAdd = activeCharacter.skillStats.icarusAtk[currentBt][currentPushup] || 0;
        let jmpAdd = activeCharacter.skillStats.icarusJmp[currentBt][currentPushup] || 0;
        if (statKey === 'attack') growthBonus += atkAdd;
        if (statKey === 'jump') growthBonus += jmpAdd;
    } 

    let currentManualVal = currentData[statKey];
    let targetManualVal = currentManualVal + amount;

    if (targetManualVal < 0) targetManualVal = 0;

    let maxCap = statObj.maxLimit !== undefined ? statObj.maxLimit : 200;
    let projectedTotal = statObj.base + growthBonus + targetManualVal;

    if (projectedTotal > maxCap && amount > 0) {
        let allowedManualVal = maxCap - (statObj.base + growthBonus);
        if (allowedManualVal < 0) allowedManualVal = 0;
        targetManualVal = allowedManualVal;
    }

    let otherStatsSum = 0;
    for (let key in currentData) {
        if (key !== statKey) {
            otherStatsSum += currentData[key];
        }
    }
    
    let characterMaxPoint = getMaxManualPoint(activeCharacter.id);

    if (otherStatsSum + targetManualVal > characterMaxPoint) {
        let allowedByGlobal = characterMaxPoint - otherStatsSum;
        if (allowedByGlobal < 0) allowedByGlobal = 0;
        if (targetManualVal > currentManualVal) {
            targetManualVal = Math.min(targetManualVal, allowedByGlobal);
        }
    }

    currentData[statKey] = targetManualVal;
    localStorage.setItem('tsc_manual_points', JSON.stringify(manualPoints));
    updateDetailView();
}

function handleBuffChange(changedCheckbox) {
    const position = changedCheckbox.getAttribute('data-position');

    if (activeCharacter && position === activeCharacter.role) {
        alert(`Aturan Tim: Karakter berrole ${activeCharacter.role} tidak dapat disandingkan dengan buff dari role yang sama!`);
        changedCheckbox.checked = false;
        return;
    }

    if (changedCheckbox.checked) {
        document.querySelectorAll('.buff-checkbox').forEach(cb => {
            if (cb !== changedCheckbox && cb.getAttribute('data-position') === position) {
                cb.checked = false;
            }
        });
    }
    updateDetailView();
}

function updateDetailView() {
    if (!activeCharacter) return;

    document.getElementById('btDisplay').innerText = `+${currentBt}`;

    const tbody = document.getElementById('statTableBody');
    const recTbody = document.getElementById('recommendedTableBody');
    if (!tbody || !recTbody) return;

    tbody.innerHTML = "";
    recTbody.innerHTML = "";

    const statsMap = [
        { key: 'attack', label: 'Attack' },
        { key: 'defense', label: 'Defense' },
        { key: 'speed', label: 'Speed' },
        { key: 'jump', label: 'Jump' }
    ];

    const sliderContainer = document.getElementById('daveSliderContainer');
    if (sliderContainer) {
        sliderContainer.style.display = (activeCharacter.isDave || activeCharacter.id === 'claire' || activeCharacter.id === 'ellio' || activeCharacter.id === 'iris') ? 'block' : 'none';
    }

    let buffBonusAtk = 0;
    let buffBonusDef = 0;
    let buffBonusSpd = 0;
    let buffBonusJmp = 0;
    let totalPowerPct = 0;   
    let finalSpinRate = 1.0; 
    let activeBuffNames = [];

    document.querySelectorAll('.buff-checkbox:checked').forEach(cb => {
        buffBonusAtk += parseInt(cb.getAttribute('data-atk')) || 0;
        buffBonusDef += parseInt(cb.getAttribute('data-def')) || 0;
        buffBonusSpd += parseInt(cb.getAttribute('data-spd')) || 0;
        buffBonusJmp += parseInt(cb.getAttribute('data-jump')) || 0;
        totalPowerPct += parseFloat(cb.getAttribute('data-power-pct')) || 0;
        
        let spinVal = parseFloat(cb.getAttribute('data-spin'));
        if (!isNaN(spinVal) && spinVal > finalSpinRate) {
            finalSpinRate = spinVal;
        }

        let labelText = cb.closest('label').innerText.trim().split('\n')[0];
        activeBuffNames.push(labelText);
    });

    let ellioBonusPct = 0;
    if (activeCharacter.id === 'ellio') {
        if (currentPushup >= 35 && currentPushup < 90) {
            let maxAbysVal = activeCharacter.skillStats.abysSet ? activeCharacter.skillStats.abysSet[currentBt] : 24;
            let angleProgress = (currentPushup - 35) / (89 - 35);
            ellioBonusPct = parseFloat((angleProgress * maxAbysVal).toFixed(1));
        }
    }

    let irisPowerPct = 0;
    let irisSpinRate = 1.0;
    if (activeCharacter.id === 'iris') {
        const irisSettings = [
            { power: -10, spin: 1.0 }, 
            { power: 0,   spin: 1.0 }, 
            { power: 8,   spin: 1.06 },
            { power: 20,  spin: 1.30 } 
        ];
        let currentSetting = irisSettings[currentPushup] || irisSettings[1];
        irisPowerPct = currentSetting.power;
        irisSpinRate = currentSetting.spin;
        
        totalPowerPct += irisPowerPct;
        if (irisSpinRate > finalSpinRate) {
            finalSpinRate = irisSpinRate;
        }
    }

    if (activeCharacter.id === 'jihoon') {
        totalPowerPct += 20;
    }

    if (activeCharacter.id === 'leon') {
        const leonSettings = [
            { power: -20}, 
            { power: 0},
            { power: 6}, 
            { power: 12},
            { power: 20} 
        ];
        let currentSetting = leonSettings[currentPushup] || leonSettings[1];
        leonPowerPct = currentSetting.power;
        totalPowerPct += leonPowerPct;
    }

    if (activeCharacter.id === 'minjun') {
        totalPowerPct += activeCharacter.skillStats.blitzpwr[currentBt];
    }

    if (activeCharacter.id === 'raul') {
        totalPowerPct += 40;
    }

    let currentManual = manualPoints[activeCharacter.id] || { attack: 0, defense: 0, speed: 0, jump: 0 };

    let isabelAtkBonus = 0;
    let isabelJumpBonus = 0;
    if (activeCharacter && activeCharacter.id === 'isabel') {
        isabelAtkBonus = currentPushup * 18;
        for (let i = 1; i <= currentPushup; i++) {
            isabelJumpBonus += (i % 2 !== 0) ? 5 : 4;
        }
    }

    if (activeCharacter.id === 'lucas') {

    // Ambil data berdasarkan index dari slider kedua (currentFlareStack)
        let growthData = activeCharacter.skillStats.daveGrowth[currentFlareStack];
    
        let bonusAtk = 0, bonusDef = 0, bonusSpd = 0, bonusJmp = 0;

        if (activeCharacter && activeCharacter.id === 'lucas') {
            let growthData = activeCharacter.skillStats.daveGrowth[currentFlareStack];
            if (growthData) {
                bonusAtk = growthData.atk || 0;
                bonusDef = growthData.def || 0;
                bonusSpd = growthData.spd || 0;
                bonusJmp = growthData.jmp || 0;
            }
                
        }

    }

    statsMap.forEach(s => {
        const statObj = activeCharacter.baseStats[s.key];
        let growthBonus = statObj.growth[currentBt] || 0; 

        if (activeCharacter.isDave && activeCharacter.daveGrowth) {
            const pushupData = activeCharacter.daveGrowth[currentPushup];
            if (pushupData) {
                const mapKey = { attack: 'atk', defense: 'def', speed: 'spd', jump: 'jmp' }[s.key];
                if (mapKey && pushupData[mapKey] !== undefined) growthBonus += pushupData[mapKey];
            }
        } else if (activeCharacter.id === 'jenny' && activeCharacter.skillStats) {
            if (s.key === 'attack' && activeCharacter.skillStats.icarusAtk) {
                growthBonus += activeCharacter.skillStats.icarusAtk[currentBt][currentPushup] || 0;
            }
            if (s.key === 'jump' && activeCharacter.skillStats.icarusJmp) {
                growthBonus += activeCharacter.skillStats.icarusJmp[currentBt][currentPushup] || 0;
            }
        }

        if (activeCharacter.id === 'mike' && activeCharacter.skillStats.tire) {
            const tireState = currentPushup === 1 ? 'active' : 'inactive';

            const tireStat =
                activeCharacter.skillStats.tire[currentBt][tireState];

            if (tireStat) {
                growthBonus += tireStat[s.key] || 0;
            }
        }

        if (activeCharacter.id === 'oasis' && activeCharacter.skillStats.sunrise) {
            const sunriseStat =
                activeCharacter.skillStats.sunrise[currentBt]?.[currentPushup];

            if (sunriseStat) {
                growthBonus += sunriseStat[s.key] || 0;
            }
        }

        if (activeCharacter.id === 'raul' && activeCharacter.skillStats.darknight) {
            const darknightStat =
                activeCharacter.skillStats.darknight[currentBt]?.[currentPushup];

            if (darknightStat) {
                growthBonus += darknightStat[s.key] || 0;
            }
        }


        let manualVal = currentManual[s.key] || 0;
        let activeBuffFlat = 0;
        
        if (s.key === 'attack') activeBuffFlat = buffBonusAtk + isabelAtkBonus;
        if (s.key === 'defense') activeBuffFlat = buffBonusDef;
        if (s.key === 'speed') activeBuffFlat = buffBonusSpd;
        if (s.key === 'jump') activeBuffFlat = buffBonusJmp + isabelJumpBonus;

        let dynamicBase = statObj.base + growthBonus; 
        let total = dynamicBase + manualVal + activeBuffFlat;
        let finalBonusDisplay = manualVal + activeBuffFlat;

        let combinedPowerPct = totalPowerPct + (s.key === 'attack' ? ellioBonusPct : 0);
        if (s.key === 'attack' && combinedPowerPct !== 0) {
            let percentBonus = Math.round(total * (combinedPowerPct / 100));
            total += percentBonus;
            finalBonusDisplay += percentBonus;
        }

        let jaehyunPercentBonus = 0;
        if (activeCharacter.id === 'jaehyun' && currentPushup === 1 && activeCharacter.skillStats) {
            if (s.key === 'attack' && activeCharacter.skillStats.determineAtk) {
                let pct = activeCharacter.skillStats.determineAtk[currentBt] || 0;
                jaehyunPercentBonus = Math.round(total * (pct / 100));
            } else if (s.key === 'jump' && activeCharacter.skillStats.determineJmp) {
                let pct = activeCharacter.skillStats.determineJmp[currentBt] || 0;
                jaehyunPercentBonus = Math.round(total * (pct / 100));
            }
        }

        total += jaehyunPercentBonus;
        finalBonusDisplay += jaehyunPercentBonus;

        let descParts = [`Man: +${manualVal}`];
        if (activeBuffNames.length > 0) {
            descParts.push(activeBuffNames.join(', '));
        }
        if (activeCharacter.id === 'ellio' && s.key === 'attack' && ellioBonusPct > 0) {
            descParts.push(`Abyss Toss (${currentPushup}°): +${ellioBonusPct}%`);
        }
        if (activeCharacter.id === 'iris' && s.key === 'attack') {
            const statusNames = ["Bad", "Fair", "Good", "Perfect"];
            descParts.push(`Compass (${statusNames[currentPushup]}): ${irisPowerPct}%`);
        }
        if (activeCharacter.id === 'isabel') {
            if (s.key === 'attack' && isabelAtkBonus > 0) descParts.push(`Parry (${currentPushup * 10}%): +${isabelAtkBonus}`);
            if (s.key === 'jump' && isabelJumpBonus > 0) descParts.push(`Parry (${currentPushup * 10}%): +${isabelJumpBonus}`);
        }
        if (activeCharacter.id === 'jaehyun' && jaehyunPercentBonus > 0) {
            let pctVal = (s.key === 'attack') ? activeCharacter.skillStats.determineAtk[currentBt] : activeCharacter.skillStats.determineJmp[currentBt];
            descParts.push(`Determination (${pctVal}%): +${jaehyunPercentBonus}`);
        }
        if (activeCharacter.id === 'jenny') {
            if (s.key === 'attack') {
                let aAdd = activeCharacter.skillStats.icarusAtk[currentBt][currentPushup];
                if (aAdd) descParts.push(`Icarus Stage ${currentPushup}: +${aAdd}`);
            }
            if (s.key === 'jump') {
                let jAdd = activeCharacter.skillStats.icarusJmp[currentBt][currentPushup];
                if (jAdd) descParts.push(`Icarus Stage ${currentPushup}: +${jAdd}`);
            }
        }

        let bonusText = `+${finalBonusDisplay} <span class='text-light' style='font-size:0.7rem;'>(${descParts.join(' | ')})</span>`;
        
        let maxLimitStr = statObj.maxLimit !== undefined ? ` <span class='text-light' style='font-size:0.75rem;'>(max ${statObj.maxLimit})</span>` : '';
        let baseStatText = dynamicBase + maxLimitStr;

        tbody.innerHTML += `
            <tr>
                <td class="text-start fw-semibold text-light">${s.label}</td>
                <td>${baseStatText}</td>
                <td class="text-success fw-bold">${bonusText}</td>
                <td class="stat-highlight text-white">${total}</td>
                <td>
                    <div class="d-flex justify-content-center gap-1">
                        <button class="btn btn-sm btn-outline-warning py-0 px-2 fw-bold" onclick="modifyManualStat('${s.key}', 5)">+</button>
                        <button class="btn btn-sm btn-outline-danger py-0 px-2 fw-bold" onclick="modifyManualStat('${s.key}', -5)">-</button>
                    </div>
                </td>
            </tr>
        `;

        const recData = activeCharacter.recommended ? activeCharacter.recommended[s.key] : { base: statObj.base, growthText: "+0", total: statObj.base };
        
        recTbody.innerHTML += `
            <tr>
                <td class="text-start fw-semibold text-light">${s.label}</td>
                <td>${recData.base}</td>
                <td class="text-info fw-bold">${recData.growthText}</td>
                <td class="text-warning fw-bold">${recData.total}</td>
            </tr>
        `;
    });

    let totalUsedPoints = currentManual.attack + currentManual.defense + currentManual.speed + currentManual.jump;
    let remainingEl = document.getElementById('remainingPoints');
    if (remainingEl) {
        let characterMaxPoint = getMaxManualPoint(activeCharacter.id);
        let remainingVal = characterMaxPoint - totalUsedPoints;
        remainingEl.innerText = `${remainingVal} / ${characterMaxPoint}`;
    }

    const multiplierInfoBox = document.getElementById('ballMultiplierInfo');
    if (multiplierInfoBox) {
        if (totalPowerPct !== 0 || finalSpinRate > 1.0 || (activeCharacter.id === 'ellio' && ellioBonusPct > 0)) {
            multiplierInfoBox.style.display = 'block';
            let activePowerDisplay = totalPowerPct + (activeCharacter.id === 'ellio' ? ellioBonusPct : 0);
            document.getElementById('valBallPower').innerText = `${activePowerDisplay >= 0 ? '+' : ''}${activePowerDisplay}%`;
            document.getElementById('valBallSpin').innerText = `${finalSpinRate} ${finalSpinRate > 1.0 ? '(Enhanced Spin)' : '(Standard)'}`;
        } else {
            multiplierInfoBox.style.display = 'none';
        }
    }

    renderSkillsAndSynergies();
}

function updateDaveStats(val) {
    currentPushup = parseInt(val);
    const pushupValEl = document.getElementById('pushupVal');
    if (pushupValEl) {
        if (activeCharacter && activeCharacter.id === 'iris') {
            const irisStatus = [
                "Bad (Power: -10%, Spin: 0%)", 
                "Fair (Power: 0%, Spin: 0%)", 
                "Good (Power: 8%, Spin: 6%)", 
                "Perfect (Power: 20%, Spin: 30%)"
            ];
            pushupValEl.innerText = irisStatus[currentPushup] || "Fair";
        } else if (activeCharacter && activeCharacter.id === 'isabel') {
            pushupValEl.innerText = (currentPushup * 10) + "%";
        } else if (activeCharacter && activeCharacter.id === 'jenny') {
            pushupValEl.innerText = "Stage " + currentPushup;
        }   else if (activeCharacter && activeCharacter.id === 'leon') {
            const leonpwr = [
                "less than 2.6m (Power: -20%, Slide Pierce : +0)", 
                "around 4.4m (Power: 0%, Slide Pierce : +0)",
                "around 5.9m (Power: 6%, Slide Pierce : +0)",
                "around 7.5m (Power: 12%, Slide Pierce : +0)",
                "more than or exact 10m (Power: 20%, Slide Pierce : +90)",
            ];
            pushupValEl.innerText = leonpwr[val] || "Power";
        } else {
            pushupValEl.innerText = currentPushup;
        }
    }
    updateDetailView(); 
}

function renderSkillsAndSynergies() {
    const skillContainer = document.getElementById('skillBuffList');
    if (!skillContainer) return;
    
    if (activeCharacter.skillStats && activeCharacter.id === 'jenny') {
        const hgtVal = activeCharacter.skillStats.icarusHeights[currentBt][currentPushup] || 3.0;
        const atkVal = activeCharacter.skillStats.icarusAtk[currentBt][currentPushup] || 0;
        const jmpVal = activeCharacter.skillStats.icarusJmp[currentBt][currentPushup] || 0;

        skillContainer.innerHTML = `<ul class='list-unstyled mb-0'>` + 
            activeCharacter.skills.map(s => {
                let desc = s.desc
                    .replace('ICARUS_HGT', hgtVal)
                    .replace('ICARUS_ATK', `+${atkVal}`)
                    .replace('ICARUS_JMP', `+${jmpVal}`);
                return `<li class='mb-3'><strong class='text-white'>${s.name}:</strong><br><span class='text-light-custom small'>${desc}</span></li>`;
            }).join('') + `</ul>`;
    } else if (activeCharacter.skillStats) {
        skillContainer.innerHTML = `<ul class='list-unstyled mb-0'>` + 
            activeCharacter.skills.map(s => {
                let desc = s.desc;
                
                if (activeCharacter.skillStats.height) {
                    const hgtVal = activeCharacter.skillStats.height[currentBt] || 0;
                    desc = desc.replace('ATIS_HGT', hgtVal);
                }
                if (activeCharacter.skillStats.chemicalreact) {
                    const crVal = activeCharacter.skillStats.chemicalreact[currentBt];
                    desc = desc.replace('CR_VAL%', crVal + '%');
                }
                if (activeCharacter.id === 'claire' && activeCharacter.skillStats.overdrive) {
                    const maxDur = activeCharacter.skillStats.overdriveDur[currentBt] || 13;
                    const durVal = (maxDur * (currentPushup / 100)).toFixed(2);
                    
                    desc = desc.replace('CLAIRE_DUR', durVal);
                    
                    if (s.name === "Overdrive") {
                        const atkStat = activeCharacter.skillStats.overdrive[currentBt];
                        const jmpStat = activeCharacter.skillStats.overdriveJmp[currentBt];
                        desc += `<br><span class='text-warning small'>[BT +${currentBt} | Gauge ${currentPushup}%] Atk: +${atkStat} | Jmp: +${jmpStat} | Dur: +${durVal} sec</span>`;
                    }
                }
                if (activeCharacter.skillStats.drkcrow) {
                    const drkcrowVal = activeCharacter.skillStats.drkcrow[currentBt];
                    desc = desc.replace('darkcrow_VAL%', drkcrowVal + '%');
                }
                
                if (activeCharacter.id === 'ellio' && activeCharacter.skillStats.abysSet) {
                    let maxAbysVal = activeCharacter.skillStats.abysSet[currentBt] || 24;
                    let ellioBonusPct = 0;
                    if (currentPushup >= 35 && currentPushup < 90) {
                        let angleProgress = (currentPushup - 35) / (89 - 35);
                        ellioBonusPct = parseFloat((angleProgress * maxAbysVal).toFixed(1));
                    }
                    desc = desc.replace('abysSet_VAL%', `${currentPushup}° <span class='text-success-custom fw-bold'><br>(+${ellioBonusPct}% Attack)</span>`);
                }
                
                if (activeCharacter.skillStats.flowerDef) {
                    const FlwrVal = activeCharacter.skillStats.flowerDef[currentBt];
                    const FlwrSpdVal = activeCharacter.skillStats.flowerSpd[currentBt];
                    desc = desc.replace('Flwr_VAL%', FlwrVal + '%').replace('FlwrSpd_VAL%', FlwrSpdVal + '%');
                }
                
                if (activeCharacter.id === 'hari' && s.name.includes("Death Bloom")) {
                    const maxAtk = activeCharacter.skillStats.bloomatk[currentBt] || 0;
                    const maxDef = activeCharacter.skillStats.bloomdef[currentBt] || 0;
                    const maxSpd = activeCharacter.skillStats.bloomspd[currentBt] || 0;
                    const maxJump = activeCharacter.skillStats.bloomjmp[currentBt] || 0;
    
                    const finalAtk = Math.round((maxAtk / 3) * currentPushup);
                    const finalDef = Math.round((maxDef / 3) * currentPushup);
                    const finalSpd = Math.round((maxSpd / 3) * currentPushup);
                    const finalJump = Math.round((maxJump / 3) * currentPushup);

                    desc = desc
                        .replace('bloomAtk_VAL%', `${finalAtk}%`)
                        .replace('bloomDef_VAL%', `${finalDef}%`)
                        .replace('bloomSpd_VAL%', `${finalSpd}%`)
                        .replace('bloomJmp_VAL%', `${finalJump}%`);
    
                    desc += `<br><span class='text-danger small'>[Death Bloom Stack: ${currentPushup} | BT: +${currentBt}]</span>`;
                }
                
                if (activeCharacter.skillStats.absltblckdur && activeCharacter.skillStats.absltblckcldwn) {
                    const absltblckdurVal = activeCharacter.skillStats.absltblckdur[currentBt];
                    const absltblckcldwnVal = activeCharacter.skillStats.absltblckcldwn[currentBt];
                    desc = desc.replace('absltblckdur_VAL', absltblckdurVal).replace('absltblckcldwn_VAL', absltblckcldwnVal);
                }
                
                if (activeCharacter.skillStats.firtigeratk && activeCharacter.skillStats.firtigerjmp) {
                    const tigeratkVal = activeCharacter.skillStats.firtigeratk[currentBt];
                    const tigerjmpVal = activeCharacter.skillStats.firtigerjmp[currentBt];
                    desc = desc.replace('tigeratk_VAL', tigeratkVal).replace('tigerjmp_VAL', tigerjmpVal);
                }
                
                if (activeCharacter.skillStats.imprlordrdur && activeCharacter.skillStats.imprlordrcldwn) {
                    const imperialdurVal = activeCharacter.skillStats.imprlordrdur[currentBt];
                    const imperialcldwnVal = activeCharacter.skillStats.imprlordrcldwn[currentBt];
                    desc = desc.replace('imperialdur_VAL', imperialdurVal).replace('imperialcldwn_VAL', imperialcldwnVal);
                }
                
                if (activeCharacter.skillStats.determineAtk && activeCharacter.skillStats.determineJmp) {
                    const rageatkVal = activeCharacter.skillStats.determineAtk[currentBt];
                    const ragejmpVal = activeCharacter.skillStats.determineJmp[currentBt];
                    desc = desc.replace('rageatk_VAL', rageatkVal).replace('ragejmp_VAL', ragejmpVal);
                }

                if (activeCharacter.skillStats.miraclepwr && activeCharacter.skillStats.miraclespin && activeCharacter.skillStats.miracletoss) {
                    const miracleatkVal = activeCharacter.skillStats.miraclepwr[currentPushup];
                    const miracleballVal = activeCharacter.skillStats.miraclespin[currentPushup];
                    const miraclesetVal = activeCharacter.skillStats.miracletoss[currentBt];
                    desc = desc.replace('miracleatk_VAL', miracleatkVal).replace('miracleball_VAL', miracleballVal).replace('miracleset_VAL', miraclesetVal);
                }

                if (activeCharacter.skillStats.pridepwr) {
                    const prideatkVal = activeCharacter.skillStats.pridepwr[currentPushup];
                    desc = desc.replace('prideatk_VAL', prideatkVal);
                }

                if (activeCharacter.skillStats.skyball) {
                    const skyserveVal = activeCharacter.skillStats.skyball[currentBt][currentPushup];
                    desc = desc.replace('skyserve_VAL', skyserveVal);
                }
                
                if (activeCharacter.skillStats.sunburstchance && activeCharacter.skillStats.heliospwr && activeCharacter.skillStats.flareatk && activeCharacter.skillStats.flaredef && activeCharacter.skillStats.flarespd
                    && activeCharacter.skillStats.flarejmp && activeCharacter.skillStats.flaredur && activeCharacter.skillStats.flarecldwn) {
                    const sunburstVal = activeCharacter.skillStats.sunburstchance[currentBt];
                    const heliospwrVal = activeCharacter.skillStats.heliospwr[currentBt][currentPushup];
                    const flareatkVal = activeCharacter.skillStats.flareatk[currentBt];
                    const flaredefVal = activeCharacter.skillStats.flaredef[currentBt];
                    const flarespdVal = activeCharacter.skillStats.flarespd[currentBt];
                    const flarejmpVal = activeCharacter.skillStats.flarejmp[currentBt];
                    const flaredurVal = activeCharacter.skillStats.flaredur[currentBt];
                    const flarecldwnVAL = activeCharacter.skillStats.flarecldwn[currentBt];
                    // =========================
                    // FLARE DEBUFF / daveGrowth
                    // =========================
                    let flareDebuffText = "0";

                    if (activeCharacter.id === 'lucas' &&
                        activeCharacter.skillStats.daveGrowth) {

                        const growthData =
                            activeCharacter.skillStats.daveGrowth[currentFlareStack] ||
                            activeCharacter.skillStats.daveGrowth[0];

                        flareDebuffText =
                            `Atk: -${growthData.atk} | ` +
                            `Def: -${growthData.def} | ` +
                            `Spd: -${growthData.spd} | ` +
                            `Jmp: -${growthData.jmp}`;
                    }
                    desc = desc.replace('flaredur_VAL', flaredurVal).replace('flarecldwn_VAL', flarecldwnVAL).replace('sunburst_VAL', sunburstVal).replace('heliospwr_VAL', heliospwrVal)
                    .replace('flareatk_VAL', flareatkVal).replace('flaredef_VAL', flaredefVal).replace('flarespd_VAL', flarespdVal).replace('flarejmp_VAL', flarejmpVal).replace('flaredebuff_VAL', flareDebuffText);
                }

                if (activeCharacter.skillStats.tire) {
                    const tireState = currentPushup === 1 ? 'active' : 'inactive';
                    const tireStat = activeCharacter.skillStats.tire[currentBt]?.[tireState];

                    if (tireStat) {
                        const tireVal =
                            `Attack: ${tireStat.attack ?? 0}, ` +
                            `Speed: ${tireStat.speed ?? 0}, ` +
                            `Jump: ${tireStat.jump ?? 0}`;

                        desc = desc.replace('tire_VAL', tireVal);
                    }
                }

                if (activeCharacter.skillStats.blitzpwr && activeCharacter.skillStats.blitzspin) {
                    const blitzpwrVal = activeCharacter.skillStats.blitzpwr[currentBt];
                    const blitzspinVal = activeCharacter.skillStats.blitzspin[currentBt];
                    desc = desc.replace('blitzpwr_VAL', blitzpwrVal).replace('blitzspin_VAL', blitzspinVal);
                }

                if (activeCharacter.skillStats.aegisdur && activeCharacter.skillStats.aegiscldwn && activeCharacter.skillStats.aegisdef && activeCharacter.skillStats.aegisrange 
                    && activeCharacter.skillStats.smiteatk && activeCharacter.skillStats.smitedur) {
                    const aegisdurVal = activeCharacter.skillStats.aegisdur[currentBt];
                    const aegiscldwnVal = activeCharacter.skillStats.aegiscldwn[currentBt];
                    const aegisdefVal = activeCharacter.skillStats.aegisdef[currentBt];
                    const aegisrangeVal = activeCharacter.skillStats.aegisrange[currentBt];
                    const smiteatkVal = activeCharacter.skillStats.smiteatk[currentBt];
                    const smitedurVal = activeCharacter.skillStats.smitedur[currentBt];
                    desc = desc.replace('aegisdur_VAL', aegisdurVal).replace('aegiscldwn_VAL', aegiscldwnVal).replace('aegisdef_VAL', aegisdefVal).replace('aegisrange_VAL', aegisrangeVal)
                            .replace('smiteatk_VAL', smiteatkVal).replace('smitedur_VAL', smitedurVal);
                }

                if (activeCharacter.skillStats.thunderSpike) {
                    const tsVal = activeCharacter.skillStats.thunderSpike[currentBt];
                    const htVal = activeCharacter.skillStats.highToss[currentBt];
                    desc = desc.replace('TS_VAL%', tsVal + '%').replace('HT_VAL%', htVal);
                }

                if (activeCharacter.skillStats.sunrise) {
                    const sunriseStat =
                        activeCharacter.skillStats.sunrise[currentBt]?.[currentPushup];

                    if (sunriseStat) {
                        const extra = currentPushup === 14 ? 2 : 0;

                        const sunriseVal =
                            `Attack: ${(sunriseStat.attack ?? 0) + extra}, ` +
                            `Speed: ${(sunriseStat.speed ?? 0) + extra}, ` +
                            `Jump: ${(sunriseStat.jump ?? 0) + extra}`;

                        desc = desc.replace('sunrise_VAL', sunriseVal);
                    }
                }

                if (activeCharacter.skillStats.darknight) {
                    const darknightStat =
                        activeCharacter.skillStats.darknight[currentBt]?.[currentPushup];

                    if (darknightStat) {
                        const extra = currentPushup === 10;

                        const darknightVal =
                            `Attack: ${(darknightStat.attack ?? 0) + extra}, ` +
                            `Speed: ${(darknightStat.speed ?? 0) + extra}, ` +
                            `Jump: ${(darknightStat.jump ?? 0) + extra}`;

                        desc = desc.replace('darknight_VAL', darknightVal);
                    }
                }

                return `<li class='mb-3'><strong class='text-white'>${s.name}:</strong><br><span class='text-light-custom small'>${desc}</span></li>`;
            }).join('') + `</ul>`;
    } 
    else if (activeCharacter.isDave && activeCharacter.daveSkillStats) {
        const pushupIndex = currentPushup / 50; 
        const hgtVal = activeCharacter.daveSkillStats.height[pushupIndex] || 0;

        skillContainer.innerHTML = `<ul class='list-unstyled mb-0'>` + 
            activeCharacter.skills.map(s => {
                let desc = s.desc.replace('DAVE_HGT', hgtVal);
                if (s.name === "Warm-Up") {
                    const pushupData = activeCharacter.daveGrowth[currentPushup] || { atk: 0, def: 0, spd: 0, jmp: 0 };
                    desc += `<br><span class='text-warning small'>[Push-up ${currentPushup}] Atk: +${pushupData.atk} | Def: +${pushupData.def} | Spd: +${pushupData.spd} | Jmp: +${pushupData.jmp}</span>`;
                }
                return `<li class='mb-3'><strong class='text-white'>${s.name}:</strong><br><span class='text-light-custom small'>${desc}</span></li>`;
            }).join('') + `</ul>`;
    } 
    else {
        skillContainer.innerHTML = `<ul class='list-unstyled mb-0'>` + 
            activeCharacter.skills.map(s => `<li class='mb-3'><strong class='text-white'>${s.name}:</strong><br><span class='text-light-custom small'>${s.desc}</span></li>`).join('') + 
            `</ul>`;
    }

    const synergyContainer = document.getElementById('synergyBuffList');
    if (synergyContainer) {
        synergyContainer.innerHTML = `<ul class='list-unstyled mb-0'>` + 
            activeCharacter.synergies.map(syn => `<li class='mb-3'><strong class='text-white'>${syn.name}:</strong><br><span class='text-light-custom small'>${syn.desc}</span></li>`).join('') + 
            `</ul>`;
    }

    const overallContainer = document.getElementById('overallBuffContent');
    if (overallContainer) {
        overallContainer.innerHTML = `<ul class='mb-0 text-sm ps-3'>` + 
            activeCharacter.overall.map(ov => `<li class='mb-1 text-light-custom'>${ov}</li>`).join('') + 
            `</ul>`;
    }

    const bufflist = document.getElementById('overallBuffList');
    if (bufflist) {
        if (activeCharacter.bufflist && activeCharacter.bufflist.length > 0) {
            bufflist.innerHTML = `<ul class='mb-0 text-sm ps-3'>` + 
                activeCharacter.bufflist.map(buff => `<li class='mb-1 text-light-custom'>${buff}</li>`).join('') + 
                `</ul>`;
        } else {
            bufflist.innerHTML = `<span class='text-muted small'>Tidak ada buff tambahan.</span>`;
        }
    }

}

function filterCharacters(position, btnElement) {
    document.querySelectorAll('.d-flex.justify-content-center.gap-2.mb-4 button').forEach(btn => {
        btn.classList.remove('btn-warning', 'active');
        btn.classList.add('btn-outline-warning');
    });
    btnElement.classList.remove('btn-outline-warning');
    btnElement.classList.add('btn-warning', 'active');

    renderCharacterList(position);
}

// Fungsi Pencarian Otomatis (Auto-Search) yang aman bagi kode lama
function searchCharacters() {
    const query = document.getElementById('characterSearchInput').value.toLowerCase().trim();
    
    // Ambil semua kartu karakter yang ada di HTML Anda
    const cards = document.querySelectorAll('.col, .character-card, [class*="col-"]'); // Sesuaikan dengan class pembungkus kartu Anda jika beda
    
    cards.forEach(card => {
        // Ambil teks di dalam kartu (nama, posisi, deskripsi, dll)
        const cardText = card.innerText.toLowerCase();
        
        // Jika teks kartu mengandung kata yang diketik, tampilkan. Jika tidak, sembunyikan.
        if (cardText.includes(query)) {
            card.style.display = ""; // Munculkan kembali
        } else {
            card.style.display = "none"; // Sembunyikan
        }
    });
}
renderCharacterList('ALL');