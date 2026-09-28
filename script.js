// Database Karakter
const charactersData = [
    {
        id: "atis",
        name: "Atis",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Youth coach for the International Beach Volleyball Federation. His intimidating height and fierce expression make him seem unapproachable, but he genuinely cares for children with a warm heart. Former teammate of Oasis who starred together at Sun Volleyball Team. Later transferred to Palm Spikes, becoming Oasis's rival. The transition reportedly involved considerable friction between them.",
        image: "img/Atis.webp",
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
            { name: "Rip Current", desc: "<span class='text-warning'>Slow to recover after Sliding, but boasts exceptional physical stats.</span>" },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.<span>" },
            { name: "Solid Blocking", desc: "<span class='text-warning'>Improves the Block Jump Accuracy of AI-controlled Players.</span>" },
            { name: "Light Movement", desc: "<span class='text-warning'>Performs a Quick Attack after a light Approach.</span>" },
            { name: "Height", desc: "<span class='text-warning'>Added Height: <strong class='text-warning'>+ATIS_HGT cm</strong></span>" }
        ],
        skillStats: {
            height: [0, 1, 3, 4, 5, 7]
        },
        synergies: [
            {
                name: "Indifferent",
                partners: [
                    { name: "Atis", icon: "img/Atis.webp" },
                    { name: "Muyeong", icon: "img/Muyeong.webp" }
                ],
                desc: "Defense +10"
            },
            {
                name: "Glory of the Past",
                partners: [
                    { name: "Atis", icon: "img/Atis.webp" },
                    { name: "Lucas", icon: "img/Lucas.webp" }
                ],
                desc: "Increases speed after Atis Slides and stands up"
            },
            {
                name: "Wave Riding",
                partners: [
                    { name: "Atis", icon: "img/Atis.webp" },
                    { name: "Oasis", icon: "img/Oasis.webp" },
                    { name: "Lisia", icon: "img/Lisia.webp" }
                ],
                desc: "Attack +7,Defense +5, Speed +5, Jump +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/1BM39bwuj-w?si=wsvqt_T0bicV1Os6" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Atis.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Atis.webp",
                caption: "Default"
            },
            {
                title: "Old Illustration",
                image: "img/oldillust/Atis_Illust_1.webp",
                caption: "Atis 2024"
            },
        ]
    },
    {
        id: "ahyeon",
        name: "Ayeon",
        role: "SE",
        position: "Setter (SE)",
        desc: "Starting setter for Chemistry High. A skilled player who led the previously weak Chemistry High volleyball team to national tournament preliminaries. Her eyesight deteriorated from nightly reading, so she wears thick glasses. Chemistry High's volleyball fan club members reportedly go crazy for her with glasses on, though they admire her quietly from a distance to avoid making her uncomfortable. Ayeon has no idea the fan club exists and thinks people avoid her.",
        image: "img/Ahyeon.webp",
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
            {
                name: "Chemical Reaction", desc: "<span class='text-warning'>Triggers Chemical Reaction if a Ball Bumped by this Player is Set by your Team. When Attacked, the Ball's Power and Spin increase. Any opponent attempting to Defense it will fail and their Team loses 100 Stamina.</span> " +
                    "<br><span class='text-success-custom fw-bold'>+CR_VAL% Power and +25% Spin</span>"
            },
        ],
        skillStats: {
            chemicalreact: [25, 26.2, 27.5, 28.7, 28.7, 30]
        },
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-warning'>Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oMes4vU9o94?si=r68DoAeLpAC5Mtst" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Ahyeon.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Ayeonstein",
                image: "img/skins/Ayeonstein.webp",
                obtain: "Event Skin / Azure Dragon Festival"
            }
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Ahyeon.webp",
                caption: "Default"
            },
            {
                title: "Skin Illustration",
                image: "img/skins/Ayeonstein.webp",
                caption: "Skin"
            },
        ]
    },
    {
        id: "claire",
        name: "Claire",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "A genius middle blocker who's every bit as arrogant as he is skilled. His striking looks and dominating playstyle make him impossible to ignore, drawing crowds wherever he plays. Though he's known for his terrible fan service, he insists he's being as polite as he can be in his own way. Cursed with bad luck when it comes to rivals, he's always been stuck in second place, first behind Lucas, now behind Raul. Enraged by his failure to win MVP, he's grown to despise the two who took the title. Determined to defeat Raul, he even switched his position to middle blocker. This season, he's ready to claim the MVP crown, no matter what it takes.",
        image: "img/Claire.webp",
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
            { name: "Overdrive", icon: "img/skill/Overdrive_Icon.webp", desc: "Overdrive Gauge fills by 10% at the end of each Rally. <span class='text-warning'>During Skill Activation, all Team Player stats are increased. Stat bonuses for Attack and Jump scale with the Charged Gauge level, and Skill Duration is extended (<strong class='text-warning'>+CLAIRE_DUR sec</strong>). The Skill Activation fails during a Serve; however, the Skill Duration will not deplete while the ball is being served.</span>" },
            { name: "The Perfect Out-of-System Set", desc: "<span class='text-warning'>Performs a Out-of-System Set near the Net, delivering an ideal set for the Wing Spiker to Spike.</span>" },
            { name: "Solid Blocking", desc: "<span class='text-warning'>Improves the Block Jump Accuracy of AI-controlled Players.</span>" },
            { name: "Line Shot", desc: "<span class='text-warning'>Performs a Spike aiming for the End Line.</span>" },
        ],
        skillStats: {
            overdrive: [188, 197, 206, 216, 225, 225],
            overdriveJmp: [13, 14, 15, 15, 16, 16],
            overdriveDur: [13, 13.65, 14.3, 14.95, 15.6, 15.6]
        },
        daveGrowth: {
            0: { atk: 0, def: 0, jmp: 0, dur: 3 },
            10: { atk: 24, def: 0, jmp: 4, dur: 4 },
            20: { atk: 44, def: 0, jmp: 6, dur: 5 },
            30: { atk: 63, def: 0, jmp: 7, dur: 6 },
            40: { atk: 82, def: 0, jmp: 8, dur: 7 },
            50: { atk: 101, def: 0, jmp: 9, dur: 8 },
            60: { atk: 118, def: 0, jmp: 10, dur: 9 },
            70: { atk: 136, def: 0, jmp: 11, dur: 10 },
            80: { atk: 153, def: 0, jmp: 12, dur: 11 },
            90: { atk: 171, def: 0, jmp: 13, dur: 12 },
            100: { atk: 188, def: 0, jmp: 13, dur: 13 }
        },
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-danger'>Very High</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/b7VBPvtsIBc?si=tvEeEBO8zVrVR8s9" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Claire.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "God Father",
                image: "img/skins/God_Father.webp",
                obtain: "Event Skin / Western Event"
            }
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Claire.webp",
                caption: "Default"
            },
            {
                title: "Skin Illustration",
                image: "img/skins/God_Father.webp",
                caption: "Skin"
            },
        ],
    },
    {
        id: "clyde",
        name: "Clyde",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Starting middle blocker for Rockwell Youth Volleyball Team. Not as rich as Tania, but still from a quite well-off family. Has an extremely laid-back personality - when he disappears for stretches, he's usually playing with cats." +
            " As a child, he'd often vanish chasing cats, causing small panics, and it was always Tania who had to track him down and bring him back. Even now, Tania remains his only real friend, and the two still bicker whenever they meet.",
        image: "img/Clyde.webp",
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
            {
                name: "Navi", desc: "Clyde's beloved cat appears alongside him. <span class='text-warning'>The cat roams the Court and changes any Teammate from Discouraged state to Engaged state.</span> " +
                    "<br><span class='text-success-custom fw-bold'>Increases Ally Team Max Stamina by 15%.</span>"
            },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/K0c2K-o8wTM?si=7Uf_wVQk3hiTmK5F" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Clyde.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Clyde.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "crow",
        name: "Crow",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Middle blocker who partnered with Isabel as a duo. Though they were recognized as top Colosseum players together, he's actually neurotic and obsessive by nature. Despite his high-strung personality," +
            " he carefully looks after Isabel with deep camaraderie.",
        image: "img/Crow.webp",
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
            {
                name: "Dark Crow", desc: "<span class='text-warning'>Performs a Spike that temporarily decreases the Opponent Player's Defense.</span> " +
                    "<br><span class='text-success-custom fw-bold'>darkcrow_VAL%.</span>"
            },
            { name: "Quick Recovery", desc: "<span class='text-warning'>Increases Stamina recovery from Scoring and Conceding by 25%.</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/YUWqaJI0mGY?si=IA1frFCbTBgdgUbB" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Crow.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Crow.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "dave",
        name: "Dave",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "Owner of the lodge where Rockwell Camp is held. Former volleyball player, though he was more famous for his magnificent mustache and muscular build than his skills. His solid physique and carefully maintained silky hair are points of pride. A true gentleman and genuinely good person." +
            " When Rockwell Camp starts, he and his older twin brother Mike voluntarily help care for the children, which he takes great pride in. However, his excessive concern for the kids sometimes leads to over-the-top moments.",
        image: "img/Dave.webp",
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
            0: { atk: 0, def: 0, spd: 0, jmp: 0 },
            50: { atk: 15, def: 6.25, spd: 6.25, jmp: 4 },
            100: { atk: 31, def: 12.5, spd: 12.5, jmp: 6 },
            150: { atk: 46, def: 18.75, spd: 18.75, jmp: 7 },
            200: { atk: 61, def: 25, spd: 25, jmp: 8 },
            250: { atk: 77, def: 31.25, spd: 31.25, jmp: 9 },
            300: { atk: 92, def: 37.5, spd: 37.5, jmp: 10 }
        },
        daveSkillStats: {
            height: [0, 10, 20, 30, 40, 50, 60]
        },
        skills: [
            { name: "Warm-Up", desc: "<span class='text-warning'>Performs push-ups while idle. Each repetition increases Attack and Height</span> (<strong class='text-warning'>+DAVE_HGT cm</strong>), stacking up to 300 times." },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
        ],
        synergies: [
            {
                name: "Brotherly Respect",
                partners: [
                    { name: "Dave", icon: "img/Dave.webp" },
                    { name: "Mike", icon: "img/Mike.webp" }
                ],
                desc: "Dave's push-up speed increases by 20%"
            },
            {
                name: "Beauty & the Beast",
                partners: [
                    { name: "Dave", icon: "img/Dave.webp" },
                    { name: "Sara[SE]", icon: "img/Sara_SE.webp" }
                ],
                desc: "Dave's push-up speed increases by 20%"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Qy1_bMPSyaw?si=MH9S6Gwdl5agd4TJ" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Dave.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Diver",
                image: "img/skins/Diver_max.webp",
                obtain: "Event Skin / Summer Training"
            },
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Dave.webp",
                caption: "Default"
            },
            {
                title: "Signature Illustration",
                image: "img/oldillust/Dave_max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Skin Illustration",
                image: "img/skins/Diver.webp",
                caption: "Skin"
            },
            {
                title: "Signature Skin Illustration",
                image: "img/skins/Diver_max.webp",
                caption: "Skin"
            },
        ]
    },
    {
        id: "ellio",
        name: "Ellio",
        role: "SE",
        position: "Setter (SE)",
        desc: "Once played for a prestigious team but was released for unknown reasons and drifted to Phantom League. Now he teammates with Jenny, gaining popularity through excellent fan service and showmanship." +
            " He feels sorry watching Jenny gradually break down in Phantom League and secretly looks after her, making him one of the few people she truly opens up to. He calls himself 'materialistic,' but everyone unanimously considers him a 'good person.' Though he acts selfish and calculating on the outside, he's always carefully supporting those around him behind the scenes.",
        image: "img/Ellio.webp",
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
            {
                name: "Abyss Toss", icon: "img/skill/Abyss_Toss_Icon.webp", desc: "<span class='text-warning'>The steeper the Spike trajectory from the Player's Set, the more the Ball's Power increases.</span> " +
                    "<br><span class='text-success-custom fw-bold'>abysSet_VAL%.</span>"
            },
            { name: "Hybrid Floater Serve", desc: "Fakes a Spike Serve to perform an unexpected Float Serve. <span class='text-warning'>If a Player with less than 150 Defense defends the Serve while Sliding, the Ball is deflected far out of bounds.</span>" },
        ],
        synergies: [
            {
                name: "Abyssal Amber",
                partners: [
                    { name: "Ellio", icon: "img/Ellio.webp" },
                    { name: "Hari", icon: "img/Hari.webp" },
                    { name: "Jenny", icon: "img/Jenny.webp" },
                ],
                desc: "Attack +4, Defense +10, Speed +2, Jump +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hS_4ZyQs4gs?si=BnTt2NT1edfa-2OU" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Ellio.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Star of The Encore",
                image: "img/skins/Encore.webp",
                obtain: "Event Skin / Encore Event"
            },
        ],
        gallery: [
            {
                title: "Default Illustration",
                image: "img/Ellio.webp",
                caption: "Default"
            },
            {
                title: "Skin Illustration",
                image: "img/skins/Encore.webp",
                caption: "Skin"
            },
        ]
    },
    {
        id: "haeun",
        name: "Haeun",
        role: "SE",
        position: "Setter (SE)",
        desc: "Haeun is the vice captain of Jisan High and also Dahee's friend. They both played on the same volleyball team during middle school and even after joining different teams and knowing about Dahee's situation," +
            " Haeun still tries to persuade her to join Jisan High.",
        image: "img/Haeun.webp",
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
            { name: "Head To Head", icon: "img/skill/Head_to_Head_Icon.webp", desc: "Null" },
        ],
        synergies: [
            {
                name: "uhh",
                partners: [
                    { name: "Haeun", icon: "img/Haeun.webp" },
                    { name: "Yongsup", icon: "img/Yongsup.webp" }
                ],
                desc: "idk"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Null</span>",
            "Careless: <span class='text-success-custom'>Null</span>",
            "Engaged: <span class='text-success-custom'>Null</span>",
            "Discourage: <span class='text-success-custom'>Null</span>",
        ],
        videos: [
            {
                embedCode: `null`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Haeun.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Haeun.webp",
                    caption: "Default"
                },
            ]
    },
    {
        id: "hanra",
        name: "Hanra",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "One of Seonrim High's four most skilled martial artists, and surprisingly, her martial arts abilities surpass even Ryuhyeon's. However, she acknowledges Ryuhyeon as Seonrim's grand disciple and focuses on supporting him." +
            " She essentially serves as the disciplinary committee head, and Hanra handles most campus disturbances. Despite her cold, stoic exterior, she absolutely loves cute things. Thinking this hobby doesn't suit her image, she tries to hide it from others.",
        image: "img/Hanra.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 170, growth: [0, 4, 7, 7, 7, 7] },
            defense: { base: 115, maxLimit: 155, growth: [0, 0, 0, 0, 8, 10] },
            speed: { base: 115, maxLimit: 155, growth: [0, 0, 0, 5, 8, 10] },
            jump: { base: 110, maxLimit: 165, growth: [0, 3, 5, 8, 8, 8] }
        },
        recommended: {
            attack: { base: 170, growthText: "+7 (Max BT)", total: 177 },
            defense: { base: 115, growthText: "+10 (Max BT)", total: 125 },
            speed: { base: 120, growthText: "+10 (Max BT)", total: 130 },
            jump: { base: 165, growthText: "+8 (Max BT)", total: 173 }
        },
        skillStats: {
        },
        skills: [
            { name: "Heart of the Sun", desc: "<span class='text-warning'>Reduces the chance of Team Players becoming Discouraged by 70%.</span>" },
            { name: "Sun Bump", desc: "During Bump,<span class='text-warning'> Defense Range increases by 33%, Defense by 70, and Speed by 18.</span>" },
            { name: "Topspin Feint", desc: "The Feint has added spin, causing the Ball to drop faster. <span class='text-warning'>Ball's spin 260%</span>" },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            { name: "Sharp Spike", desc: "Reduces the Ball's Spin to perform a sharply angled Spike." }
        ],
        synergies: [
            {
                name: "Under the Scorching Sun",
                partners: [
                    { name: "Hanra", icon: "img/Hanra.webp" },
                    { name: "Oasis", icon: "img/Oasis.webp" }
                ],
                desc: "Oasis High Noon activates at 9 points"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-warning'>Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_W1B1uVcjfc?si=qx0pjP5XWdtL5cQg" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Hanra.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Patissier",
                image: "img/skins/Patissier.webp",
                obtain: "Event Skin / Valentine Event"
            },
            {
                name: "Summer Training",
                image: "img/skins/Hanra_Summer_Training.webp",
                obtain: "Event Skin / Summer Training"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Hanra.webp",
                    caption: "Default"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Patissier.webp",
                    caption: "Skin"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Hanra_Summer_Training.webp",
                    caption: "Skin"
                },
            ]
    },
    {
        id: "hari",
        name: "Hari",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Former Queen of the Colosseum and member of Phantom League's 15-person committee. Isabel only claimed the queen's throne after Hari vanished from the Colosseum. She executes any order Carla gives without question - except one. She refuses to throw away the old," +
            " worn wrist guard on her left wrist, defying even Carla's commands on this matter. Only Carla and Hari know why. Her specialty is thoroughly analyzing opponents to completely dominate matches. Enemy players become paralyzed, unable to execute even their most confident plays.",
        image: "img/Hari.webp",
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
            {
                name: "Death Bloom", icon: "img/skill/Death_Bloom_Icon.webp", desc: "When Bumping, leaves a mark on the Opponent Player who last Touched the Ball. <span class='text-warning'>Upon Skill Activation, the Status of all marked Opponent Players decreases for a certain period of time." +
                    " A Opponent Player with two or more marks has their movement sealed briefly immediately after Skill Activation.</span>" +
                    "<span class='text-success-custom fw-bold'><br>Attack: -bloomAtk_VAL | Defense: -bloomDef_VAL | Speed: -bloomSpd_VAL | Jump: -bloomJmp_VAL</span>"
            },
            { name: "Flower Receive", desc: "<span class='text-warning'>The Defense Range of Bump is increased by 33%. Defense and Speed are also boosted.<br>Defense +Flwr_VAL%, Speed +FlwrSpd_VAL%</span>" },
            { name: "Solid Blocking", desc: "<span class='text-warning'>Improves the Block Jump Accuracy of AI-controlled Players.</span>" },
            { name: "Light Movement", desc: "<span class='text-warning'>Performs a Quick Attack after a light Approach.</span>" },
        ],
        synergies: [
            {
                name: "Double Queen",
                partners: [
                    { name: "Hari", icon: "img/Hari.webp" },
                    { name: "Isabel", icon: "img/Isabel.webp" }
                ],
                desc: "Increase allies' max HP by 10"
            },
            {
                name: "Abyssal Amber",
                partners: [
                    { name: "Hari", icon: "img/Hari.webp" },
                    { name: "Ellio", icon: "img/Ellio.webp" },
                    { name: "Jenny", icon: "img/Jenny.webp" },
                ],
                desc: "Attack +4, Defense +10, Speed +2, Jump +5"
            },
            {
                name: "None",
                partners: [
                    { name: "Hari", icon: "img/Hari.webp" },
                    { name: "Iris", icon: "img/Iris.webp" }
                ],
                desc: "Defense +10, Speed +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>High</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-danger-custom fw-bolder'>Impossible</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2pws8G9Qmsc?si=hkjO3AW1a36EoIMI" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Hari.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Midnight",
                image: "img/skins/Midnight.webp",
                obtain: "Event Skin / Encore Event"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Hari.webp",
                    caption: "Default"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Midnight.webp",
                    caption: "Skin"
                },
            ]
    },
    {
        id: "gitae",
        name: "Han Gitae",
        role: "MB",
        isDave: true,
        position: "Middle Blocker (MB)",
        desc: "A key middle blocker and the team’s mood-maker, with an unmatched presence both on and off the court. His confidence is well-founded, and he has plenty of nerve. The deeper his team falls into trouble, the more fired up he gets, sending everyone’s morale soaring. Straightforward and action-oriented, he dislikes beating around the bush and is clear about his likes and dislikes, " +
            "but never holds a grudge. Despite his intimidating first impression, he is remarkably friendly and approaches even strangers without hesitation. He also has an unexpectedly caring side: he might quietly give a dejected junior a gentle tap on the head and casually say, 'Let’s grab something to eat.' His goal: to be the strongest in the world!",
        image: "img/Gitae.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 190, growth: [0, 4, 7, 7, 8, 9] },
            defense: { base: 110, maxLimit: 165, growth: [0, 0, 5, 10, 15, 20] },
            speed: { base: 125, maxLimit: 165, growth: [0, 0, 0, 0, 0, 5] },
            jump: { base: 100, maxLimit: 160, growth: [0, 3, 5, 6, 7, 8] }
        },
        recommended: {
            attack: { base: 190, growthText: "+9 (Max BT)", total: 199 },
            defense: { base: 110, growthText: "+20 (Max BT)", total: 130 },
            speed: { base: 135, growthText: "+5 (Max BT)", total: 140 },
            jump: { base: 160, growthText: "+8 (Max BT)", total: 168 }
        },
        skillStats: {
            intimidationstck: [11, 10, 9, 9, 8, 8],
            metalbloodairbrn: [0, 0.07, 0.09, 0.13, 0.16, 0.2],
            metalbloodpwr: [
                {
                    0: { power: +0 },
                    1: { power: +6.8 },
                    2: { power: +13.6 },
                    3: { power: +20.4 },
                    4: { power: +27.2 },
                },
                {
                    0: { power: +0 },
                    1: { power: +7.5 },
                    2: { power: +15 },
                    3: { power: +22.4 },
                    4: { power: +29.9 },
                },
                {
                    0: { power: +0 },
                    1: { power: +7.7 },
                    2: { power: +15.4 },
                    3: { power: +23.1 },
                    4: { power: +30.7 },
                },
                {
                    0: { power: +0 },
                    1: { power: +8 },
                    2: { power: +16 },
                    3: { power: +24.1 },
                    4: { power: +32.1 },
                },
                {
                    0: { power: +0 },
                    1: { power: +8.4 },
                    2: { power: +16.7 },
                    3: { power: +25.1 },
                    4: { power: +33.5 },
                },
                {
                    0: { power: +0 },
                    1: { power: +8.7 },
                    2: { power: +17.4 },
                    3: { power: +26.1 },
                    4: { power: +34.8 },
                }
            ],
            ironclaw: [1, 1.1, 1.2, 1.3, 1.4], //[CurrentPushup]
            forgesteel: [
                { attack: 0, jump: 0 },
                { attack: 3, jump: 1 },
                { attack: 7, jump: 3 },
                { attack: 10, jump: 4 },
                { attack: 14, jump: 5 }
            ]
        },
        skills: [
            {
                name: "Intimidation", icon: "img/skill/Intimidation_Icon.webp", desc: "Each Touch of the Ball adds 1 Stack. At maximum Stack, the Skill triggers Activation automatically. <span class='text-warning'>During Skill Activation, Attack increases by 10 and Speed by 10. Additionally, performing Block against an Attack from a Opponent Player with lower Attack than your own always triggers Kill Block.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : 12s , Required Stack : intimidationstck_VAL</span>"
            },
            {
                name: "Metal Blood", desc: "Jumps with low Gravity and charges energy while airborne. When spiking, <span class='text-warning'>the Ball's Power increases based on Energy Charge Count. If the Ball is not hit with a Quick Attack, only 30% of the Power increase is applied.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Airborne Charge Time : metalbloodairbrn , Ball Power : metalbloodpwr_VAL</span>"
            },
            {
                name: "Iron Claw", desc: "<span class='text-warning'>Can Spike over a wider area based on the Energy Charge Count of Metal Blood.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Spike Range: +ironclaw_VAL</span>"
            },
            {
                name: "Hundred Forged Steel", desc: "<span class='text-warning'>Each Quick Attack during a Rally increases Jump and Attack (up to 4 times).</span> Resets when the Rally ends." +
                    "<br><span class='text-success-custom fw-bold'>Jump : +forgesteeljmp_VAL , Attack : +forgesteelatk_VAL</span>"
            },
            { name: "Solid Blocking", desc: "<span class='text-warning'>Improves the timing Accuracy of Block Jump s performed by Al-controlled Players.</span>" },
            { name: "Read Block", desc: "When an Al-controlled Player performs Block, <span class='text-warning'>they read the Setter's Set before jumping to Block.</span>" },
            { name: "Iron Halberd", desc: "For each S+ Player other than this player on Our Team, <span class='text-danger'>this player's Attack decreases by 10 and Jump decreases by 3.</span>" },
            { name: "Richochet", desc: "<span class='text-warning'>The One Touch Timing Window for blocking increase by 7</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TDv_qULzPhg?si=PcL5UzRiw4jvx3X5" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Gitae.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Gitae.webp",
                    caption: "Default"
                },
                {
                    title: "Signature illustration",
                    image: "img/oldillust/Gitae_max.webp",
                    caption: "Signature / Max"
                },
            ]
    },
    {
        id: "heeseong",
        name: "Heeseong Kim",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Captain of Hanbit High and arguably the best high school middle blocker. Though only a first-year, he earned the nickname 'Invulnerable' by perfectly shutting down last year's 'Best Player' award winner's quick attacks." +
            " His trademark 90-degree bow when greeting reflects his upright, sincere personality. Despite his usually gentle demeanor, his competitive fire explodes on court, making him quite intimidating to face.",
        image: "img/Heeseong.webp",
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
            {
                name: "Absolute Block", icon: "img/skill/Absolute_Block_Icon.webp", desc: "<span class='text-warning'>During Skill Activation, always triggers a Kill Block against any Attack that hits the Block.</span> " +
                    "<br><span class='text-success-custom fw-bold'>Duration absltblckdur_VALs , Cooldown absltblckcldwn_VALs</span>"
            },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
            { name: "Quick Preparation", desc: "<span class='text-warning'>Block preparation is performed 70% faster.</span>" },
            { name: "Quick Recovery", desc: "<span class='text-warning'>Increases Stamina recovery from Scoring and Cowarning</span>" },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
        ],
        synergies: [
            {
                name: "All-Star",
                partners: [
                    { name: "Heeseong", icon: "img/Heeseong.webp" },
                    { name: "Yongsup", icon: "img/Yongsup.webp" },
                    { name: "Seolhwa", icon: "img/Seolhwa.webp" },
                ],
                desc: "Attack +4, Jump +4"
            },
        ],

        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wyFSVlj4BZA?si=1U0ZlyrSOcVoF9Xz" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Heeseong.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Heeseong.webp",
                    caption: "Default"
                },
                {
                    title: "Signature illustration",
                    image: "img/oldillust/Heeseong_max.webp",
                    caption: "Signature / Max"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Heeseong_1.webp",
                    caption: "Heeseong 2018"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Heeseong_2.webp",
                    caption: "Heeseong The Spike PC 2023"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Heeseong_3.webp",
                    caption: "Heeseong The Spike Mobile 2023"
                },
            ]
    },
    {
        id: "hongshi",
        name: "Hongshi",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "One of Seonrim High's top martial artists. Full of curiosity, she often ditches school to explore the world. She and Ryuhyeon share the same mental age, so they constantly bicker and fight. When she's in a good mood, she lets out spirited shouts while serving." +
            "She thinks everyone gets intimidated when she raises her voice, but in reality, everyone finds her so adorable that their concentration wavers.",
        image: "img/Hongshi.webp",
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
            {
                name: "Fierce Tiger", icon: "img/skill/Fierce_Tiger_Icon.webp", desc: "When the Opponent Player with the lowest defense in the Back Court, <span class='text-warning'>is marked with Tiger Claw, Attack and Jump increase.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Attack +tigeratk_VAL , Jump +tigerjmp_VAL</span>"
            },
            { name: "RAWR!", desc: "<span class='text-warning'>One the first Serve of the Match, there is a very high chance to inflict Discouraged on all Opponent Players.</span>" },
            {
                name: "Tiger Claw", desc: "Applies a mark to any Opponent Player who Defenses the Attack. <span class='text-warning'>Marked Players lose 9 Jump. When the mark stacks, they automatically fail Defense and the mark is removed." +
                    " Opponent Players who fail Defense have a low chance to become Discouraged.</span>"
            },
            { name: "Hunt", desc: "<span class='text-warning'>Highlights the Opponent Player with the lowest Defense in the Back Court.</span> (Tip: Set 'Camera Movement' to 'Focus on Opponent Team' in Settings for a better view of the highlighted Opponent Player)" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/310e5WpMQRc?si=l8PsA2_LGrOKLc-w" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Hongshi.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Maid",
                image: "img/skins/Maid.webp",
                obtain: "Skin / Phantom Thief Event"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Hongshi.webp",
                    caption: "Default"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Maid.webp",
                    caption: "Skin"
                },
                {
                    title: "Signature illustration",
                    image: "img/skins/Maid_max.webp",
                    caption: "Signature / Max"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Hongshi_1.webp",
                    caption: "Hongshi The Spike Mobile 2024"
                },
            ]
    },
    {
        id: "iris",
        name: "Iris",
        role: "SE",
        position: "Setter (SE)",
        desc: "The captain of the Asheville Weasels. She took over the captain's armband and has led the team since the retirement of Kelly, one of the World's Big Five Spikers. Although she feels a deep sense of responsibility and a desire to lead the team well," +
            " her naturally timid personality leaves her constantly struggling between the front office and the players.",
        image: "img/Iris.webp",
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
            {
                name: "Imperial Order", icon: "img/skill/Imperial_Order_Icon.webp", desc: "During the Skill Activation, <span class='text-warning'>three Compasses on the Court are generated. The compasses rotate at different speeds, but there is always a moment when they overlap toward the Opponent Team Court. The Power increase of each compass is applied independently.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration: imperialdur_VALs , Cooldown: imperialcldwn_VALs</span>"
            },
            { name: "Kind Tyrant", desc: "During a High Set, <span? class='text-warning'>delivers a Set that falls rapidly. The Ball falls 0.7 seconds slower at the Wing Spiker's peak contact point.</span?" },
            {
                name: "Compass on the Court", desc: "Upon Set, a rotating compass is generated on the Ball. The compass points toward the Opponent Team Court at the Wing Spiker's peak Contact Point. <span class='text-warning'>The closer the angle of the Spike matches the compass's direction, the more Accuracy increases. Depending on Accuracy, the Ball's Power and Spin will increase or decrease. Performing a Spike with PERFECT Accuracy increases the compass's rotation speed for the duration of the Match.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Current Accuracy: compass_VAL</span>"
            }
        ],
        synergies: [
            {
                name: "Ultramarine",
                partners: [
                    { name: "Iris", icon: "img/Iris.webp" },
                    { name: "Ryuhyeon", icon: "img/Ryuhyeon.webp" },
                ],
                desc: "Attack +7, Defense +5"
            },
            {
                name: "Lily of the Valley",
                partners: [
                    { name: "Iris", icon: "img/Iris.webp" },
                    { name: "Hari", icon: "img/Hari.webp" },
                ],
                desc: "Defense +10, Speed +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>High</span>",
            "Careless: <span class='text-danger'>High</span>",
            "Engaged: <span class='text-success-custom'>High</span>",
            "Discourage: <span class='text-danger'>High</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SmffKZJWubA?si=isSm1z4SYMRy-GmV" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Iris.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Iris.webp",
                    caption: "Default"
                },
                {
                    title: "Signature illustration",
                    image: "img/oldillust/Iris_max.webp",
                    caption: "Signature / Max"
                },
            ]
    },
    {
        id: "isabel",
        name: "Isabel",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Queen of the Colosseum. She wandered searching for strong attackers before settling in the Colosseum League, where she's now considered one of the strongest players. Her ideal type is reportedly an attacker who can deliver serves so powerful she can't even touch them." +
            " She excels at defensive balance and loves receiving opponents' attacks then immediately counterattacking. She plays volleyball for the thrill of shutting down enemy attacks and paying them back with points.",
        image: "img/Isabel.webp",
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
            { name: "Parry", icon: "img/skill/Parry_Icon.webp", desc: "When an Opponent Player's Spike in Bumped, <span class='text-warning'>Charge the Gauge based on the Ball's Power. A higher Gauge provides a greater boost to Attack and Jump. The Gauge resets after you perform a Spike.</span>" },
            { name: "Serve Routine A", desc: "<span class='text-warning'>Performs a unique pre-Serve animation.</span>" },
            { name: "Blessing", desc: "<span class='text-warning'>When you first Bump the Ball coming from the Opponent Team Court, recover 20 Stamina for your Team.</span>" }
        ],
        synergies: [
            {
                name: "Double Queen",
                partners: [
                    { name: "Isabel", icon: "img/Isabel.webp" },
                    { name: "Hari", icon: "img/Hari.webp" }
                ],
                desc: "Increase allies' max HP by 10"
            },
            {
                name: "Spartan Soul",
                partners: [
                    { name: "Isabel", icon: "img/Isabel.webp" },
                    { name: "Roberto", icon: "img/Roberto.webp" },
                    { name: "NN", icon: "img/NN.webp" }
                ],
                desc: "Attack +6, Defense +10, Speed +2, Jump +4"
            }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/P3h37f6VE3Q?si=grzpHy43QuXsXnWL" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Isabel.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Wedding Dress",
                image: "img/skins/Wedding_Dress.webp",
                obtain: "Skin / June Bride Event"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Isabel.webp",
                    caption: "Default"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Wedding_Dress.webp",
                    caption: "Skin"
                },
            ]
    },
    {
        id: "jaehyun",
        name: "Jaehyun Nam",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Outside hitter for Sky High and Siwoo Baek's rival. Along with Yongsup Lee, he's considered one of the best high school attackers. Known for incredible stamina from his well-conditioned body and unbreakable willpower. He never stops moving during matches, exhausting anyone trying to mark him. Completely lacks natural volleyball talent -" +
            " his coordination is so poor he has to memorize every single movement and drill it repeatedly just to keep up with others. His coach, who cares about him most, even suggested he quit volleyball. But Jaehyun never gave up, training several times harder than everyone else to reach where he is today. He continues working tirelessly toward becoming the best.",
        image: "img/Jaehyun.webp",
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
            {
                name: "Determination", icon: "img/skill/Determination_Icon.webp", desc: "When Team Stamina falls to 30% or below, <span class='text-warning'>Attack and Jump increase.</span> " +
                    "<br><span class='text-success-custom fw-bold'> Attack: rageatk_VAL% , Jump: ragejmp_VAL%</span>"
            },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" }
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            }
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-warning'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/AimWIkPs9C4?si=dSn31lHZ22wrOC-h" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Jaehyun.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Training Nam",
                image: "img/skins/Training.webp",
                obtain: "Skin / Special Scout Event"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Jaehyun.webp",
                    caption: "Default"
                },
                {
                    title: "Signature illustration",
                    image: "img/oldillust/Jaehyun_max.webp",
                    caption: "Signature / Max"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Training.webp",
                    caption: "Skin"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Jaehyun_1.webp",
                    caption: "Jaehyun 2018"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Jaehyun_2.webp",
                    caption: "Jaehyun The Spike PC 2023"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Jaehyun_3.webp",
                    caption: "Jaehyun The Spike Mobile 2023"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Jaehyun_4.webp",
                    caption: "Jaehyun The Spike Mobile 2024"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Jaehyun_5.webp",
                    caption: "Jaehyun 2025"
                }
            ]
    },
    {
        id: "jenny",
        name: "Jenny",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        sliderLabel: "Icarus", // Label dinamis untuk Jenny
        desc: "Phantom League's youngest attacker. After promising Sara Seo in childhood to 'become the best volleyball players,' she's been pushing forward relentlessly ever since. A childhood injury nearly ended her volleyball career forever, but through sheer determination and blood, sweat, and tears, she overcame it and showed the most remarkable growth rate in Phantom League. Her emotional intensity runs high," +
            " causing dramatic performance swings based on her mental state, but when she's locked in, her focus becomes razor-sharp. Having devoted her entire life to volleyball, she's out of touch with general knowledge and struggles with normal teenage social interactions." +
            " It's not that she's uninterested in other things - she simply hasn't had opportunities to explore them, so she sometimes watches her peers with quiet longing.",
        image: "img/Jenny.webp",
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
            {
                name: "Wings of Icarus", icon: "img/skill/Icarus_Icon.webp", desc: "When performing a Spike, <span class='text-warning'>setting a new personal best Contact Point temporarily increases the Ball's Power. Attack and Jump increase based on your highest Contact Point.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Power: +20%, Spin: +50%</span>" +
                    "<br><span class='text-success-custom fw-bold'>Icarus Contact Point : ICARUS_HGT m, " +
                    "<br><span class='text-success-custom fw-bold'>Increases Attack by ICARUS_ATK and Jump by ICARUS_JMP</span>"
            },
            { name: "Burn the Ship", desc: "<span class='text-warning'>Transitions into a vertical Spike from a feint motion while Mid-air.</span>" },
            { name: "Energize", desc: "<span class='text-warning'>Press Spike Button to approach and charge the Gauge. Press Spike Button again to jump, and Jump changes depending on the Gauge.</span>" },
        ],
        synergies: [
            {
                name: "Abyssal Amber",
                partners: [
                    { name: "Jenny", icon: "img/Jenny.webp" },
                    { name: "Hari", icon: "img/Hari.webp" },
                    { name: "Ellio", icon: "img/Ellio.webp" },
                ],
                desc: "Attack +4, Defense +10, Speed +2, Jump +5"
            },
            {
                name: "Strawberry Choco Milk",
                partners: [
                    { name: "Jenny", icon: "img/Jenny.webp" },
                    { name: "NN", icon: "img/NN.webp" },
                ],
                desc: "Jump +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>High</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-danger-custom fw-bolder'>Impossible</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ram4eamXb-k?si=nbjBwGiLtJenalQC" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Jenny.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Straw Hat",
                image: "img/skins/Strawhat_Max.webp",
                obtain: "Skin / Summer Event"
            },
            {
                name: "Shooting Star",
                image: "img/skins/Shooting_Star.webp",
                obtain: "Skin / Encore Event"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Jenny.webp",
                    caption: "Default"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Strawhat.webp",
                    caption: "Skin"
                },
                {
                    title: "Signature illustration",
                    image: "img/skins/Strawhat_max.webp",
                    caption: "Skin"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Shooting_Star.webp",
                    caption: "Skin"
                },
                {
                    title: "Story illustration",
                    image: "img/oldillust/Jenny_1.webp",
                    caption: "Jenny Chapter 12"
                },
            ]
    },
    {
        id: "jihoon",
        name: "Jihoon",
        role: "SE",
        position: "Setter (SE)",
        isDave: true,
        desc: "Starting setter of Terra High’s volleyball club. With his natural friendliness, he plays the role of the team’s mood maker wherever he goes. In elementary school, he moved to the United States with his father, where he faced players bigger than himself and developed strong stamina and mental toughness. He never loses heart, even against powerful opponents," +
            " and stays full of energy even when all his teammates are exhausted, making him a reliable source of vitality for the team. His hobby is running. However, he has a terrible sense of direction, so he often wanders off the walking path and gets lost. When walking his dog, he frequently ends up in another neighborhood.",
        image: "img/Jihoon.webp",
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
            {
                name: "Miraculous Toss", icon: "img/skill/Miraculous_Toss_Icon.webp", desc: "Upon Skill Activation, performs a Miraculous Toss. The skill lasts until a teammate spikes that Set. <span class='text-warning'>When spiking this Set, the greater the score difference in favor of the opposing team, the more the Ball's Power increases proportionally, stacking up to a 7-point difference.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Cooldown miracleset_VALs , Power Spike miracleatk_VAL% , Ball Spin miracleball_VAL% </span>"
            },
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
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/aaywYsslqak?si=oQ2glBx3Rf_XbjcG" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Jihoon.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Jihoon.webp",
                    caption: "Default"
                },
            ]
    },
    {
        id: "leon",
        name: "Leon",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Captain of Green Leon. Despite his apperance, his rough playing style and sharp tongue often draw criticism. Having always pursued strength above all else, he's completely indifferent to those he considers weak," +
            " but turns docile as a lamb around Isabel and Robert, whom he respects as strong players. Strangely gets embarrassed when others acknowledge his skills.",
        image: "img/Leon.webp",
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
            {
                name: "Pride", desc: "If the Ball is Spiked from 6m or more away from the net, <span class='text-warning'>its Horizontal Power increases based on the distance. A Spike 7.5 or farther away from the Net triggers the Sliding Pierce Effect. However, if the Spike occurs within 3m of the Net, its Horizontal Power is reduced. " +
                    "<br><span class='text-success-custom fw-bold'>Spike Power: prideatk_VAL%</span>"
            },
        ],
        synergies: [
            {
                name: "Wild Colosseum",
                partners: [
                    { name: "Leon", icon: "img/Leon.webp" },
                    { name: "Viola", icon: "img/Viola.webp" },
                ],
                desc: "Speed +5, Jump +2"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Q-BJz63LULc?si=mnT_8AI_7xdoanE8" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Leon.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Leon.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "sejin",
        name: "Kang Sejin",
        role: "SE",
        position: "Setter (SE)",
        desc: "A setter who strives for a flawless, cool image, but whose poker face crumbles and ears turn red at sincere praise or kindness. Eager to impress, he puts effort into looking cool in everything from fashion to gaming nicknames. " +
            "In reality, he is a bit of a goof who can’t even watch horror movies or eat bell peppers. " +
            "He may seem distant at first, but once he opens up to someone, he approaches them freely. When the team is in trouble, he handles the match more calmly than anyone.",
        image: "img/Sejin.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 165, growth: [0, 3, 3, 4, 4, 4] },
            defense: { base: 100, maxLimit: 175, growth: [0, 3, 8, 8, 8, 13] },
            speed: { base: 100, maxLimit: 175, growth: [0, 10, 10, 15, 15, 20] },
            jump: { base: 100, maxLimit: 160, growth: [0, 0, 2, 2, 2, 3] }
        },
        recommended: {
            attack: { base: 100, growthText: "+4 (Max BT)", total: 104 },
            defense: { base: 150, growthText: "+13 (Max BT)", total: 163 },
            speed: { base: 175, growthText: "+20 (Max BT)", total: 195 },
            jump: { base: 165, growthText: "+3 (Max BT)", total: 168 }
        },
        skillStats: {
            fortuneturn: [60, 55, 45, 45, 40, 40]
        },
        skills: [
            {
                name: "Fortune's Turn", icon: "img/skill/Fortune's_Turn_Icon.webp", desc: "Upon Skill Activation, <span class='text-warning'>lowers a Teammate's Debuff by 1 levels. <span class='text-success-custom'>(Removes the Debuff if it is at level 1.)</span>" +
                    "<br><span class='text-success-custom fw-bold'>Wait Time : fortuneturn_VALs</span>"
            },
            { name: "Core Hit", desc: "<span class='text-warning'>Prioritizes setting the ball to the controlled player. When a Wing Spiker performs an Back-row Attack from the set, the Ball's Power increases by 5% and Slide Pierce increases by 30. When a Middle Blocker performs a Spike from a Quick Attack set, Block Pierce increases by 20.</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/hIzz_3qk5yQ?si=SzrSnj7ednfjZOZ_" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sejin.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Sejin.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "lisia",
        name: "Lisia",
        role: "SE",
        position: "Setter (SE)",
        isDave: true,
        desc: "Player for Sun Receivers, the youth team of Sun Volleyball Team. Like her idol Oasis, she aims to enjoy the sport without being constrained by rules and victory. Though relatively new to beach volleyball, she's already secured a starting position and performs more brilliantly than anyone."
            + " Playing under the scorching sun all day has given her quite an appetite - she never leaves food unfinished and calmly devours even bizarre dishes, making her the main culprit behind emptying Oasis's wallet."
            + " She delivers the team's most devastating serves, launching the ball high before hammering it down with both power and precision that prevents opponents from even attempting returns. However, her power control needs work - consecutive attempts often sail out of bounds.",
        image: "img/Lisia.webp",
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
            {
                name: "Skyball Serve", desc: "<span class='text-warning'>Has a chance to launch a powerful Skyball Serve high into the air. Any Opponent Player who Bumps it is inflicted with Discouraged for the remainder of the Rally.</span>" +
                    " Success probability decreases with each consecutive successful Skyball Serve. " +
                    "<br><span class='text-success-custom fw-bold'>Sky Serve chance: skyserve_VAL%</span>"
            },
            { name: "Sunshine", desc: "Upon the first Player Substitution of the Match, <span class='text-warning'>All Team Players enter the Engaged state.</span>" },
            { name: "Excellent Concentration", desc: "For every Service Ace scored by the Opponent Player, <span class='text-warning'>Team Max Stamina is permanently increased by 10.</span>" }
        ],
        synergies: [
            {
                name: "Small but Strong",
                partners: [
                    { name: "Lisia", icon: "img/Lisia.webp" },
                    { name: "Yongsup", icon: "img/Yongsup.webp" },
                ],
                desc: "Attack +7, Jump +4"
            },
            {
                name: "Wave Riding",
                partners: [
                    { name: "Lisia", icon: "img/Lisia.webp" },
                    { name: "Atis", icon: "img/Atis.webp" },
                    { name: "Oasis", icon: "img/Oasis.webp" },
                ],
                desc: "Attack +7, Defense+5, Speed +5, Jump +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/51LgnJ4xqW4?si=dNGaLCixKbjHiWb0" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Lisia.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Rudolph",
                image: "img/skins/Rudolph.webp",
                obtain: "Skin / Christmas Event"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Lisia.webp",
                caption: "Default"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Rudolph.webp",
                caption: "Skin"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Lisia_1.webp",
                caption: "Lisia The Spike Mobile 2023"
            },

        ]
    },
    {
        id: "lucas",
        name: "Lucas",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Phantom League's strongest attacker. Natural talent and instinct let him excel at whatever he tries. Self-centered with strong narcissistic tendencies, but he takes his responsibilities as a superstar seriously. Before his final Phantom League match," +
            " he accidentally glimpsed Sanghyeon's tablet and discovered notes that had been erased and rewritten countless times. When he saw the word 'Oasis' on the last line, he immediately grasped its meaning and adopted it as his stage name.",
        image: "img/Lucas.webp",
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
            {
                name: "Flare", icon: "img/skill/Flare_Icon.webp", desc: "During the Skill's Activation, all Status increases. However, Status during skill Deactivation decreases according to the Skill's Activation counts." +
                    " (Status reduction stacks up to 12 times) Timeouts and Player Substitutions resets this Status penalty. <br><span class='small text-warning'>Duration : flaredur_VALs , Cooldown : flarecldwn_VALs</span>" +
                    " <br><span class='text-success-custom fw-bold'>Attack : +flareatk_VAL , Def : +flaredef_VAL , Speed : +flarespd_VAL , Jump : +flarejmp_VAL</span><br><span class='small text-danger-custom2'>flaredebuff_VAL</span>"
            },
            {
                name: "Helios", desc: "Dives toward the ground Mid-air during the Spike to accelerate the fall. <span class='text-warning'>The faster the descent, the more the Ball's Power increases.</span> " +
                    "<span class='text-success-custom fw-bold'>Power: +heliospwr_VAL%</span>"
            },
            { name: "Brave Heart", desc: "<span class='text-warning'> Changes the Discouraged state into the Engaged state.</span>" },
            { name: "Long Serve Toss", desc: "Can perform a very high Serve Toss with a boosted minimum Set speed." },
            { name: "Sunspot Burst", desc: "Spike has a chance to trigger Sunspot Burst. When active, <span class='text-warning'>Power is increased by 13% and Spin by 1. <span class='text-success-custom fw-bold'>Activation Chance: sunburst_VAL%</span>" },
        ],
        synergies: [
            {
                name: "Glory of the Past",
                partners: [
                    { name: "Lucas", icon: "img/Lucas.webp" },
                    { name: "Atis", icon: "img/Atis.webp" }
                ],
                desc: "Increases speed after Atis Slides and stands up"
            },
            {
                name: "Eclipse",
                partners: [
                    { name: "Lucas", icon: "img/Lucas.webp" },
                    { name: "Zero", icon: "img/Zero.webp" }
                ], desc: "Attack +3, Jump +2"
            }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very High</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PuYaWvg5f8c?si=TN3QgabVehWbK9GU" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Lucas.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Summer Training",
                image: "img/skins/Summer_Training_max.webp",
                obtain: "Skin / Summer Training"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Lucas.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Lucas_max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Summer_Training.webp",
                caption: "Skin"
            },
            {
                title: "Signature illustration",
                image: "img/skins/Summer_Training_max.webp",
                caption: "Skin"
            },
        ]
    },
    {
        id: "mike",
        name: "Mike",
        role: "MB",
        position: "Middle Blocker (MB)",
        isDave: true,
        desc: "Dave's twin brother who co-runs the lodge. He enjoys exercising with sandbags strapped to his ankles and was famous during his playing days for extreme training methods like running with tires tied to his waist. While he has no hair on top," +
            " his sideburns are thicker than anyone's. He carefully grooms them in front of the mirror every morning.",
        image: "img/Mike.webp",
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
                    active: { attack: 14, speed: 20, jump: 13 }
                },
                {
                    inactive: { attack: 0, speed: -35, jump: -15 },
                    active: { attack: 14, speed: 20, jump: 13 }
                },
                {
                    inactive: { attack: 0, speed: -38.5, jump: -15 },
                    active: { attack: 15, speed: 22, jump: 13 }
                },
                {
                    inactive: { attack: 0, speed: -42, jump: -16 },
                    active: { attack: 17, speed: 24, jump: 14 }
                },
                {
                    inactive: { attack: 0, speed: -43.75, jump: -16 },
                    active: { attack: 17, speed: 25, jump: 14 }
                },
                {
                    inactive: { attack: 0, speed: -43.75, jump: -16 },
                    active: { attack: 17, speed: 25, jump: 14 }
                }
            ]
        },
        skills: [
            {
                name: "Tire", icon: "img/skill/tire_Icon.webp", icon: "img/skill/Tire_icon.webp", desc: "Speed and Jump are reduced while wearing the Tire. <span class='text-warning'>Each Bump Charges the Gauge; once full, the Tire breaks, greatly increasing your Attack, Jump, and Speed.</span> " +
                    "<br><span class='text-success-custom fw-bold'>tire_VAL</span>"
            },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
        ],
        synergies: [
            {
                name: "Brotherly Respect",
                partners: [
                    { name: "Mike", icon: "img/Mike.webp" },
                    { name: "Dave", icon: "img/Dave.webp" }
                ],
                desc: "Dave's push-up speed increases by 20%"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-danger'>Very High</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oDJ5OnoepQg?si=DMjxbg4ZaLX5MUxq" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "Spike King",
                creatorUrl: "https://youtube.com/@spikeking420"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Mike.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Mike.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Mike_max.webp",
                caption: "Signature / Max"
            },
        ]
    },
    {
        id: "minjun",
        name: "Cho  Minjun",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "The unlucky attacker. Misfortune strikes without fail before every important match, so he's never shown his full abilities. But for him, misfortune is just another seasoning to life." +
            " He brushes off the past and quickly starts new challenges. Teams with Minjun Cho never lose their fighting spirit.",
        image: "img/Minjun.webp",
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
            {
                name: "Blitz Spin", icon: "img/skill/Blitz_Spin_Icon.webp", desc: "<span class='text-warning'>Increases the Vertical Power and Spin of the Ball during a Spike, causing its Trajectory to curve.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Power: +blitzpwr_VAL% , Spin: +blitzspin_VAL</span>"
            },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/6O-9ugQ8W0c?si=vKLf2eoMOu5dneR9" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Minjun.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Minjun.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "muyeong",
        name: "Muyeong",
        role: "SE",
        position: "Setter (SE)",
        desc: "One of Seonrim's disciples with a cautious, composed personality that lands him with various odd jobs. He has an old soul - when Ryuhyeon gets stuck-up or Hongshi causes trouble, he clicks his tongue and launches into lectures." +
            " His defensive prowess earned him the title 'Guardian of Seonrim.' Strategic thinking is his forte - he never panics, calmly reads situations, then chooses optimal moves. " +
            "Not flashy, but extremely troublesome to face. He accurately gauges teammates' abilities and seamlessly coordinates them, elevating the entire team's defense.",
        image: "img/Muyeong.webp",
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
            {
                name: "Aegis", icon: "img/skill/Aegis_Icon.webp", desc: "Upon Skill Activation, the player with the lowest Defense among Teammate enters the Aegis state. <span class='text-warning'>While in the Aegis state," +
                    " Defense and Defense Range increase</span>, and the Aegis state is removed upon defending a Spike. <br><span class='text-warning'>Duration: aegisdur_VALs , Cooldown: aegiscldwn_VALs</span>" +
                    "<br><span class='text-success-custom fw-bold'>Defense: +aegisdef_VAL , Range Def: +aegisrange_VAL%</span>"
            },
            { name: "Stable Play", desc: "During a Rally, <span class='text-warning'>every 10 combined Touches restore 20 Stamina to the Team.</span>" },
            { name: "Slow Set", desc: "Performs a stable Set with reduced Spin, causing the Ball to fall slowly." },
            {
                name: "Smite", desc: "When defending against Feint in the Aegis state, it transitions to the Smite state. <span class='text-warning'>While in the Smite state, Attack increases.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Attack: +smiteatk_VAL , Duration: smitedur_VALs</span>"
            },
        ],
        synergies: [
            {
                name: "Indifferent",
                partners: [
                    { name: "Muyeong", icon: "img/Muyeong.webp" },
                    { name: "Atis", icon: "img/Atis.webp" }
                ],
                desc: "Defense +10"
            },
            {
                name: "Seonrim Partner",
                partners: [
                    { name: "Muyeong", icon: "img/Muyeong.webp" },
                    { name: "Ryuhyeon", icon: "img/Ryuhyeon.webp" }
                ],
                desc: "Ryuhyeon's charging speed increases by 20%"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tJ-f972DflI?si=rfKt8sRtLWMrtn0x" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Muyeong.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Muyeong.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "nishikawa",
        name: "Nishikawa",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "One of the Big Five attackers. When he spikes, thunder echoes through the gym, earning him the nickname 'Thunder Nishikawa.' Considered to have the best jumping skills among the Big Five, he's the one every young volleyball player dreams of becoming.",
        image: "img/Nishikawa.webp",
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
            thunderSpike: [
                { power: 37.2, spin: 86 },
                { power: 38.3, spin: 86 },
                { power: 39.1, spin: 86 },
                { power: 40.2, spin: 86 },
                { power: 40.2, spin: 86 },
                { power: 40.2, spin: 86 }
            ],
            highToss: [0, 0, 3, 5, 8, 12]
        },
        skills: [
            { name: "Energize", icon: "img/skill/Energize_Characteristic_Icon.webp", desc: "<span class='text-warning'>Press Spike Button to approach and charge the Gauge. Press Spike Button again to jump, and Jump changes depending on the Gauge.</span>" },
            {
                name: "Thunder Spike", desc: "If Contact Point exceeds 4m, <span class='text-warning'>performs a thunderous Spike with increased Power and Spin. The Spike gains the Sliding Pierce Effect</span>" +
                    "<br><span class='text-success-custom fw-bold'>Ball's Power : +TS_VAL% , Spin : +86% , Sliding Pierce : +90</span>."
            },
            { name: "Double Spike", desc: "Can Swing twice while in Mid-air. <span class='text-warning'>When performing a Spike on the second Swing, if the Contact Point is below 4m, the Ball's Power increases by 15%</span>" },
            { name: "High 3rd Ball Play", desc: "On the third Touch, <span class='text-warning'>if the Ball is sent over without an Attack, it is sent high into the air.</span>" },
            { name: "Zap Zap Trail", desc: "Changes the color of the Ball's Trail during the Serve Toss." },
            { name: "Topspin Feint", desc: "The Feint has added spin,<span class='text-warning'> causing the Ball to drop faster.</span> <span class='text-warning'>Ball's spin : +260%</span>" },
            {
                name: "Spark", desc: "When performing a Spike, <span class='text-warning'>Power increases if the Contact Point is below 4m " +
                    "<br><span class='text-success-custom fw-bold'>Attack Power : +HT_VAL%</span>."
            }
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2by5rx-O7_E?si=d9s8QhuWpDU0F76K" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Nishikawa.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "High School",
                image: "img/skins/High_School.webp",
                obtain: "Skin / Red Eyes Event"
            },
            {
                name: "Black Thunder",
                image: "img/skins/Black_Thunder_Max.webp",
                obtain: "Skin / The Tiger Eyes Event"
            }
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Nishikawa.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Nishikawa_Max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Skin illustration",
                image: "img/skins/High_School.webp",
                caption: "Skin"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Black_Thunder.webp",
                caption: "Skin"
            },
            {
                title: "Signature illustration",
                image: "img/skins/Black_Thunder_Max.webp",
                caption: "Skin"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_1.webp",
                caption: "Nishikawa 2018"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_2.webp",
                caption: "Nishikawa Full Upgrade 2018"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_3.webp",
                caption: "Nishikawa The Spike PC 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_4.webp",
                caption: "Nishikawa Full Upgrade The Spike PC 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_5.webp",
                caption: "Nishikawa The Spike 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_6.webp",
                caption: "Nishikawa Full Upgrade The Spike 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_7.webp",
                caption: "Nishikawa The Spike 2024"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_8.webp",
                caption: "Nishikawa Full Upgrade The Spike 2024"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Nishikawa_9.webp",
                caption: "Nishikawa Full Upgrade The Spike 2025"
            }
        ]
    },
    {
        id: "noname",
        name: "NN",
        role: "SE",
        position: "Setter (SE)",
        desc: "Chocolate milk is a beverage that combines the flavor of chocolate with the nutrition of milk and provides a balance of carbohydrates," +
            " protein, and fat. It is a popular choice for increased calcium intake, especially in children.",
        image: "img/NN.webp",
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
            { name: "Snipe", icon: "img/skill/Snipe_Icon.webp", desc: "Attempts Snipe just before Set. <span class='text-warning'>If a Player is at the targeted location, performs a very fast Set.</span> If no Player is near the targeted location, performs a different Set." },
            { name: "Long-Distance Set", desc: "When the distance to the Net exceeds 9.8m, performs a Set with reduced Spin and high Contact Point." },
        ],
        synergies: [
            {
                name: "Strawberry Choco Milk",
                partners: [
                    { name: "NN", icon: "img/NN.webp" },
                    { name: "Jenny", icon: "img/Jenny.webp" },
                ],
                desc: "Jump +5"
            },
            {
                name: "Spartan Soul",
                partners: [
                    { name: "Isabel", icon: "img/Isabel.webp" },
                    { name: "Roberto", icon: "img/Roberto.webp" },
                    { name: "NN", icon: "img/NN.webp" }
                ],
                desc: "Attack +6, Defense +10, Speed +2, Jump +4"
            }
        ],
        overall: [
            "Worked Up: <span class='text-danger-custom fw-bolder'>Impossible</span>",
            "Careless: <span class='text-success-custom'>Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sJ-nxs5-Oc8?si=Keu0Gg-7rSPXcr9e" title="YouTube video player" frameborder="0" allow="accelerometer; 
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/NN.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Surfer",
                image: "img/skins/Surfer_max.webp",
                obtain: "Skin / Summer Event"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/NN.webp",
                caption: "Default"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Surfer.webp",
                caption: "Skin"
            },
            {
                title: "Signature illustration",
                image: "img/skins/Surfer_max.webp",
                caption: "Skin"
            },
        ]
    },
    {
        id: "oasis",
        name: "Oasis",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "The world's best professional beach volleyball player. Currently retired and developing youth players at Sun Volleyball Team. 'Oasis' isn't his real name," +
            " and nothing is known about his pre-professional career. He just laughs off any questions about his past.",
        image: "img/Oasis.webp",
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
                    0: { attack: 0, speed: 0, jump: 0 },
                    3: { attack: 21, speed: 5, jump: 9 },
                    6: { attack: 42, speed: 10, jump: 18 },
                    9: { attack: 62, speed: 15, jump: 27 },
                    12: { attack: 83, speed: 20, jump: 36 },
                    14: { attack: 83, speed: 20, jump: 36 },

                },
                {
                    0: { attack: 0, speed: 0, jump: 0 },
                    3: { attack: 22, speed: 5.25, jump: 10 },
                    6: { attack: 44, speed: 10.5, jump: 19 },
                    9: { attack: 66, speed: 15.75, jump: 29 },
                    12: { attack: 88, speed: 21, jump: 38 },
                    14: { attack: 88, speed: 21, jump: 38 },
                },
                {
                    0: { attack: 0, speed: 0, jump: 0 },
                    3: { attack: 23, speed: 5.5, jump: 10 },
                    6: { attack: 46, speed: 11, jump: 20 },
                    9: { attack: 69, speed: 16.5, jump: 30 },
                    12: { attack: 92, speed: 22, jump: 40 },
                    14: { attack: 92, speed: 22, jump: 40 },
                },
                {
                    0: { attack: 0, speed: 0, jump: 0 },
                    3: { attack: 24, speed: 5.75, jump: 10 },
                    6: { attack: 48, speed: 11.5, jump: 21 },
                    9: { attack: 72, speed: 17.25, jump: 31 },
                    12: { attack: 96, speed: 23, jump: 42 },
                    14: { attack: 96, speed: 23, jump: 42 },
                },
                {
                    0: { attack: 0, speed: 0, jump: 0 },
                    3: { attack: 24, speed: 5.75, jump: 10 },
                    6: { attack: 48, speed: 11.5, jump: 21 },
                    9: { attack: 72, speed: 17.25, jump: 31 },
                    12: { attack: 96, speed: 23, jump: 42 },
                    14: { attack: 96, speed: 23, jump: 42 },
                },
                {
                    0: { attack: 0, speed: 0, jump: 0 },
                    3: { attack: 24, speed: 5.75, jump: 10 },
                    6: { attack: 48, speed: 11.5, jump: 21 },
                    9: { attack: 72, speed: 17.25, jump: 31 },
                    12: { attack: 96, speed: 23, jump: 42 },
                    14: { attack: 96, speed: 23, jump: 42 },
                }
            ]
        },
        skills: [
            {
                name: "Sunrise", icon: "img/skill/Sunrise_Icon.webp", desc: "Until 'Noon', <span class='text-warning'>for every 3 points gained by Opponent Team, Attack, Speed, and Jump increase.</span>" +
                    " Status increases only until reaching 15 points. " +
                    "<br><span class='text-success-custom fw-bold'>sunrise_VAL</span>"
            },
            { name: "High Noon", desc: "From High Noon (15 points) until Sunset, <span class='text-warning'>Attack is fixed at 262.5, Speed at 175, and Jump at 198.18 .</span>" },
            { name: "Sunset", desc: "From Sunset (21 points), <span class='text-warning'>Attack is fixed at 75, Speed at 80, and Jump at 56.36.</span>" },
            { name: "Opportunistic Feint", desc: "When Opponent Team Stamina is 20 or below, <span class='text-warning'>has a 66.7% chance to perform a Feint.</span>" },
        ],
        synergies: [
            {
                name: "Under the Scorching Sun",
                partners: [
                    { name: "Oasis", icon: "img/Oasis.webp" },
                    { name: "Hanra", icon: "img/Hanra.webp" },
                ],
                desc: "Oasis High Noon activates at 9 points"
            },
            {
                name: "Wave Riding",
                partners: [
                    { name: "Atis", icon: "img/Atis.webp" },
                    { name: "Oasis", icon: "img/Oasis.webp" },
                    { name: "Lisia", icon: "img/Lisia.webp" }
                ],
                desc: "Attack +7,Defense +5, Speed +5, Jump +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/GNU0-937wiQ?si=bT4Xh9aNRufahqP-" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Oasis.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Oasis.webp",
                caption: "Default"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Oasis_1.webp",
                caption: "Oasis 2018"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Oasis_2.webp",
                caption: "Oasis The Spike PC 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Oasis_3.webp",
                caption: "Oasis - Chapter 12"
            },
        ]
    },
    {
        id: "raul",
        name: "Raul Luca",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "One of the Big Five attackers. With overwhelming power, he crushes his opponents on the court. Not only is he incredibly strong, but his ball control is frighteningly precise, allowing him to fire cannon-like serves straight onto the sideline without hesitation. Once known for recording the highest transfer fee across all five major leagues," +
            " he shattered multiple personal award records and drew global attention from fans. He even declared he would claim the MVP title in all five leagues and transferred teams to compete with Viktor for the championship. However, after a major incident that caused a huge uproar and led to his suspension, he is now seeking redemption in the Phantom League.",
        image: "img/Raul.webp",
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
                    0: { attack: +0, speed: +0, jump: +0 },
                    1: { attack: +4, speed: +3, jump: +0 },
                    2: { attack: +8, speed: +6, jump: +1 },
                    3: { attack: +12, speed: +9, jump: +1 },
                    4: { attack: +17, speed: +12, jump: +2 },
                    5: { attack: +21, speed: +15, jump: +2 },
                    6: { attack: +25, speed: +18, jump: +3 },
                    7: { attack: +29, speed: +21, jump: +3 },
                    8: { attack: +33, speed: +24, jump: +4 },
                    9: { attack: +38, speed: +27, jump: +4 },
                    10: { attack: +42, speed: +30, jump: +5 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    1: { attack: +4, speed: +3, jump: +0 },
                    2: { attack: +8, speed: +6, jump: +1 },
                    3: { attack: +12, speed: +9, jump: +1 },
                    4: { attack: +17, speed: +12, jump: +2 },
                    5: { attack: +21, speed: +15, jump: +2 },
                    6: { attack: +25, speed: +18, jump: +3 },
                    7: { attack: +29, speed: +21, jump: +3 },
                    8: { attack: +33, speed: +24, jump: +4 },
                    9: { attack: +38, speed: +27, jump: +4 },
                    10: { attack: +42, speed: +30, jump: +5 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    1: { attack: +5, speed: +3.3, jump: +0 },
                    2: { attack: +9, speed: +6.6, jump: +1 },
                    3: { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6: { attack: +28, speed: +19.8, jump: +3 },
                    7: { attack: +32, speed: +23.1, jump: +3 },
                    8: { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    1: { attack: +5, speed: +3.3, jump: +0 },
                    2: { attack: +9, speed: +6.6, jump: +1 },
                    3: { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6: { attack: +28, speed: +19.8, jump: +3 },
                    7: { attack: +32, speed: +23.1, jump: +3 },
                    8: { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    1: { attack: +5, speed: +3.3, jump: +0 },
                    2: { attack: +9, speed: +6.6, jump: +1 },
                    3: { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6: { attack: +28, speed: +19.8, jump: +3 },
                    7: { attack: +32, speed: +23.1, jump: +3 },
                    8: { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    1: { attack: +5, speed: +3.3, jump: +0 },
                    2: { attack: +9, speed: +6.6, jump: +1 },
                    3: { attack: +14, speed: +9.9, jump: +1 },
                    4: { attack: +18, speed: +13.2, jump: +2 },
                    5: { attack: +23, speed: +16.5, jump: +2 },
                    6: { attack: +28, speed: +19.8, jump: +3 },
                    7: { attack: +32, speed: +23.1, jump: +3 },
                    8: { attack: +37, speed: +26.4, jump: +4 },
                    9: { attack: +41, speed: +29.7, jump: +4 },
                    10: { attack: +48, speed: +33, jump: +5 },
                },
            ]
        },
        skills: [
            {
                name: "Beast Spike", icon: "img/skill/Beast_Spike_Icon.webp", desc: "Power and Spin of the Ball scale with the Wild Pounce's Charged Gauge. <span class='text-warning'>A max-Gauge Spike aimed toward the Net breaks through other Player's Block. However, penetration is only possible if it exceeds the Attack of the blocking Player." +
                    " A max-Gauge Spike while jumping away from the Net will trigger the Sliding Pierce Effect. However, that Spike cannot penetrate a Block.</span> <span class='text-danger-custom2'>Automatic Mode reduces all Attack speed bonuses by 25%.</span>"
            },
            { name: "First Impact", desc: "Upon performing a Spike with maximum Gauge for the first time during a Match, <span class='text-warning'>the Power of the Ball increases by 40% and the Spin increases by 60%.</span>" },
            {
                name: "Dark Night", desc: "<span class='text-warning'>The larger the Opponent Team's Score lead, the more Status increases.</span> (Scales up to a 10 point difference.)" +
                    "<br><span class='text-success-custom fw-bold'>darknight_VAL</span>"
            },
            { name: "Royal Quality", desc: "If not controlled manually, <span class='text-danger-custom2'>the Player's Attack decreases by 15%. Automatic Mode is also affected.</span>" },
            { name: "Wild Pounce", desc: "<span class='text-warning'>Moving toward the Net Charges the Gauge, providing a speed boost that scales with the amount charged.</span> Automatic Mode automatically Charges the Gauge while Mid-air." },
            { name: "Beast Fang", desc: "<span class='text-warning'>Has a wider Spike range of 1.2m.</span>" },
            { name: "Long Serve Toss", desc: "Allows the Serve Toss to be performed further forward." },
        ],
        synergies: [
            {
                name: "Unified Offense & Defense",
                partners: [
                    { name: "Raul", icon: "img/Raul.webp" },
                    { name: "Sif", icon: "img/Sif.webp" },
                ],
                desc: "Raul's charging speed increases by 10%"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/C0KWudk3SFY?si=J79d4MVFSgIhlwtd" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Raul.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Raul.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Raul_max.webp",
                caption: "Signature / Max"
            },
        ]
    },
    {
        id: "roberto",
        name: "Roberto",
        role: "MB",
        position: "Middle Blocker (MB)",
        isDave: true,
        desc: "Roberto the Iron Wall. Built like a suit of armor with muscle covering every inch of his frame, and his stamina is so legendary he never shows fatigue even in five-set marathons. But he's not just a physical specimen - his court awareness and tactical thinking are exceptional," +
            " making him a nightmare matchup. He instantly bonds with anyone who shares his appreciation for serious muscle development.",
        image: "img/Roberto.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 180, growth: [0, 0, 0, 0, 0, 0] },
            defense: { base: 90, maxLimit: 165, growth: [0, 0, 5, 8, 10, 11] },
            speed: { base: 100, maxLimit: 150, growth: [0, 0, 5, 8, 10, 11] },
            jump: { base: 110, maxLimit: 165, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 180, growthText: "+0 (Max BT)", total: 180 },
            defense: { base: 100, growthText: "+11 (Max BT)", total: 111 },
            speed: { base: 140, growthText: "+11 (Max BT)", total: 151 },
            jump: { base: 165, growthText: "+0 (Max BT)", total: 165 }
        },
        skillStats: {
            gaugeblock: [7, 7.7, 8, 8.4, 8.8, 9.1],
            armorgauge: [
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    10: { attack: +7, speed: +1, jump: +1 },
                    20: { attack: +14, speed: +2, jump: +3 },
                    30: { attack: +21, speed: +3, jump: +4 },
                    40: { attack: +28, speed: +4, jump: +6 },
                    50: { attack: +35, speed: +5, jump: +7 },
                    60: { attack: +42, speed: +6, jump: +9 },
                    70: { attack: +49, speed: +7, jump: +10 },
                    80: { attack: +56, speed: +8, jump: +12 },
                    90: { attack: +62, speed: +9, jump: +13 },
                    100: { attack: +69, speed: +10, jump: +15 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    10: { attack: +7, speed: +1, jump: +1 },
                    20: { attack: +14, speed: +2, jump: +3 },
                    30: { attack: +21, speed: +3, jump: +4 },
                    40: { attack: +28, speed: +4, jump: +6 },
                    50: { attack: +35, speed: +5, jump: +7 },
                    60: { attack: +42, speed: +6, jump: +9 },
                    70: { attack: +49, speed: +7, jump: +10 },
                    80: { attack: +56, speed: +8, jump: +12 },
                    90: { attack: +62, speed: +9, jump: +13 },
                    100: { attack: +69, speed: +10, jump: +15 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    10: { attack: +7, speed: +1, jump: +1 },
                    20: { attack: +14, speed: +2, jump: +3 },
                    30: { attack: +21, speed: +3, jump: +4 },
                    40: { attack: +28, speed: +4, jump: +6 },
                    50: { attack: +35, speed: +5, jump: +7 },
                    60: { attack: +42, speed: +6, jump: +9 },
                    70: { attack: +49, speed: +7, jump: +10 },
                    80: { attack: +56, speed: +8, jump: +12 },
                    90: { attack: +62, speed: +9, jump: +13 },
                    100: { attack: +69, speed: +10, jump: +15 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    10: { attack: +7, speed: +1, jump: +1 },
                    20: { attack: +14, speed: +2, jump: +3 },
                    30: { attack: +21, speed: +3, jump: +4 },
                    40: { attack: +28, speed: +4, jump: +6 },
                    50: { attack: +35, speed: +5, jump: +7 },
                    60: { attack: +42, speed: +6, jump: +9 },
                    70: { attack: +49, speed: +7, jump: +10 },
                    80: { attack: +56, speed: +8, jump: +12 },
                    90: { attack: +62, speed: +9, jump: +13 },
                    100: { attack: +69, speed: +10, jump: +15 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    10: { attack: +7, speed: +1, jump: +1 },
                    20: { attack: +14, speed: +2, jump: +3 },
                    30: { attack: +21, speed: +3, jump: +4 },
                    40: { attack: +28, speed: +4, jump: +6 },
                    50: { attack: +35, speed: +5, jump: +7 },
                    60: { attack: +42, speed: +6, jump: +9 },
                    70: { attack: +49, speed: +7, jump: +10 },
                    80: { attack: +56, speed: +8, jump: +12 },
                    90: { attack: +62, speed: +9, jump: +13 },
                    100: { attack: +69, speed: +10, jump: +15 },
                },
                {
                    0: { attack: +0, speed: +0, jump: +0 },
                    10: { attack: +7, speed: +1, jump: +1 },
                    20: { attack: +14, speed: +2, jump: +3 },
                    30: { attack: +21, speed: +3, jump: +4 },
                    40: { attack: +28, speed: +4, jump: +6 },
                    50: { attack: +35, speed: +5, jump: +7 },
                    60: { attack: +42, speed: +6, jump: +9 },
                    70: { attack: +49, speed: +7, jump: +10 },
                    80: { attack: +56, speed: +8, jump: +12 },
                    90: { attack: +62, speed: +9, jump: +13 },
                    100: { attack: +69, speed: +10, jump: +15 },
                },
            ]
        },
        skills: [
            {
                name: "Armor", icon: "img/skill/Armor_Icon.webp", desc: "Charges the Gauge based on Block Accuracy. <span class='text-warning'>The Charged Gauge increases Attack, Speed, and Jump. Guarantees Soft Block even with low Block Accuracy.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Charge Gauge per Block: gaugeblock_VAL%</span>" +
                    "<br><span class='text-success-custom fw-bold'>armorgauge_VAL</span>"
            },
            { name: "Quick Preparation", desc: "<span class='text-warning'>Block preparation is performed 70% faster.</span>" },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
            { name: "Solid Blocking", desc: "Improves the Block Jump Accuracy of AI-controlled Players." },
            { name: "Team Armor", desc: "Upon Serve Bump, <span class='text-warning'>the Teammate's Defense is increased by 20 and Defense Range is boosted by 40%.</span>" },
            { name: "Light Movement", desc: "Performs a Quick Attack after a light Approach." },
        ],
        synergies: [
            {
                name: "Spartan Soul",
                partners: [
                    { name: "Roberto", icon: "img/Roberto.webp" },
                    { name: "Isabel", icon: "img/Isabel.webp" },
                    { name: "NN", icon: "img/NN.webp" }
                ],
                desc: "Attack +6, Defense +10, Speed +2, Jump +4"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qIOVsWEOzH4?si=-K53nxopXvFF3lYd" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "Spike Volleyball",
                creatorUrl: "https://www.youtube.com/@Spike-_-Volleyball"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Roberto.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Roberto.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "ryuhyeon",
        name: "Ryuhyeon",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "Student council president of Seonrim High and grand disciple of the traditional martial art 'Seonrim.' Raised from childhood by Seonrim's master as his top student. He wants to carry on the master's legacy and continue Seonrim's martial arts tradition," +
            " but his growing love for volleyball creates inner conflict. His body, forged through years of martial arts training, allows him to deliver powerful spikes from any position. Even after a long break from volleyball, his spikes remain as heavy as stone.",
        image: "img/Ryuhyeon.webp",
        baseStats: {
            attack: { base: 125, maxLimit: 195, growth: [0, 4, 7, 7, 7, 7] },
            defense: { base: 110, maxLimit: 160, growth: [0, 0, 0, 5, 8, 10] },
            speed: { base: 110, maxLimit: 160, growth: [0, 0, 0, 0, 3, 5] },
            jump: { base: 120, maxLimit: 170, growth: [0, 4, 6, 7, 7, 7] }
        },
        recommended: {
            attack: { base: 195, growthText: "+7 (Max BT)", total: 202 },
            defense: { base: 100, growthText: "+10 (Max BT)", total: 110 },
            speed: { base: 120, growthText: "+5 (Max BT)", total: 125 },
            jump: { base: 170, growthText: "+7 (Max BT)", total: 177 }
        },
        skillStats: {
            azureDragon: [
                {
                    0: { power: +2, spin: +0 },
                    40: { power: +2, spin: +0 },
                    80: { power: +17, spin: +0.2 },
                    100: { power: +46, spin: +1.05 },
                },
                {
                    0: { power: +2, spin: +0 },
                    40: { power: +2, spin: +0 },
                    80: { power: +17, spin: +0.2 },
                    100: { power: +47, spin: +1.05 },
                },
                {
                    0: { power: +2, spin: +0 },
                    40: { power: +2, spin: +0 },
                    80: { power: +17, spin: +0.2 },
                    100: { power: +48, spin: +1.1 },
                },
                {
                    0: { power: +2, spin: +0 },
                    40: { power: +2, spin: +0 },
                    80: { power: +17, spin: +0.2 },
                    100: { power: +49, spin: +1.2 },
                },
                {
                    0: { power: +2, spin: +0 },
                    40: { power: +2, spin: +0 },
                    80: { power: +17, spin: +0.2 },
                    100: { power: +50, spin: +1.2 },
                },
                {
                    0: { power: +2, spin: +0 },
                    40: { power: +2, spin: +0 },
                    80: { power: +17, spin: +0.2 },
                    100: { power: +51, spin: +1.25 },
                },
            ],
            basecharge: [30, 36, 42, 54, 60, 90],
            rechargedragon: [0, 20, 40, 80, 100, 200],
            soaringair: [100, 110, 110, 125, 140, 160]
        },
        skills: [
            {
                name: "Azure Dragon", icon: "img/skill/Azure_Dragon_Icon.webp", desc: "While On Ground, Charges the Gauge. While in Mid-air, holding Spike Button consumes Gauge to gather Energy. <span class='text-warning'>The more Energy gathered, the greater the Ball's Power and Spin." +
                    " At maximum Energy, the Spike gains the Sliding Pierce Effect. If Energy exceeds the limit, the Ball will be hit out of bounds.<span>" +
                    "<br><span class='text-success-custom fw-bold'>Gauge Charge Speed: +rechargedragon_VAL%" +
                    "<br><span class='text-success-custom fw-bold'>Base Charge Amount: basecharge_VAL%</span>" +
                    "<br><span class='text-success-custom fw-bold'>azuredragon_VAL</span>"
            },
            { name: "Soaring", desc: "Air movement speed increases during a spike jump. <br><span class='text-warning'>Air Movement Speed: soaringair_VAL%</span>" },
            { name: "Topspin Feint", desc: "The Feint has added spin, causing the Ball to drop faster. <span class='text-warning'>Ball's spin : +260%</span>" },
        ],
        synergies: [
            {
                name: "Seonrim Partner",
                partners: [
                    { name: "Ryuhyeon", icon: "img/Ryuhyeon.webp" },
                    { name: "Muyeong", icon: "img/Muyeong.webp" },
                ],
                desc: "Ryuhyeon's charging speed increases by 20%"
            },
            {
                name: "Dragon Flower",
                partners: [
                    { name: "Ryuhyeon", icon: "img/Ryuhyeon.webp" },
                    { name: "Sohee", icon: "img/Sohee.webp" }
                ],
                desc: "Attack +4, Jump +2"
            },
            {
                name: "Ultramarine",
                partners: [
                    { name: "Ryuhyeon", icon: "img/Ryuhyeon.webp" },
                    { name: "Iris", icon: "img/Iris.webp" },
                ],
                desc: "Attack +7, Defense +5"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MN1g1Mmm7PI?si=Utsn2yJ5FapIxUWC" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Ryuhyeon.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Chief Disciple",
                image: "img/skins/Chief_Disciple.webp",
                obtain: "Skin / Art of the Sword Event"
            },
            {
                name: "Red Hood",
                image: "img/skins/Red_Hood.webp",
                obtain: "Skin / Western Event"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Ryuhyeon.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Ryuhyeon_max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Chief_Disciple.webp",
                caption: "Skin"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Red_Hood.webp",
                caption: "Skin"
            },
        ]
    },
    {
        id: "sanghyeon",
        name: "Sanghyeon",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "The court's golden boy. His height and movie-star looks have earned him legions of fans. Fully aware of his marketability, he leverages it to orchestrate 'Superstar Challenge,' functioning more as a marketing mastermind than a traditional player. While this project opened new professional pathways for talented high schoolers, its reality-TV-style drama caused many players to burn out and quit." +
            " He embodies both volleyball's commercial potential and its pitfalls. Ironically, he is very passionate about the sport itself. Though he gained fame as a player-influencer in Artistry High, he was already an industry insider by middle school, having created his own youth league." +
            " His obsession with volleyball's commercial viability stems from watching that self-created league fail due to lack of interest. Someone who recognized his unique talents later recruited him for training in Italy.",
        image: "img/Sanghyeon.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 165, growth: [0, 0, 0, 2, 3, 3] },
            defense: { base: 105, maxLimit: 155, growth: [0, 0, 0, 2, 3, 4] },
            speed: { base: 120, maxLimit: 160, growth: [0, 0, 0, 2, 3, 4] },
            jump: { base: 110, maxLimit: 165, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 105, growthText: "+3 (Max BT)", total: 108 },
            defense: { base: 155, growthText: "+4 (Max BT)", total: 159 },
            speed: { base: 160, growthText: "+4 (Max BT)", total: 164 },
            jump: { base: 165, growthText: "+0 (Max BT)", total: 165 }
        },
        skillStats: {
            highlightdur: [5, 5, 6, 6, 6, 6],
            highlightcldwn: [30, 30, 30, 30, 30, 30],
        },
        skills: [
            {
                name: "Highlight", icon: "img/skill/Highlight_Icon.webp", desc: "While Skill is active, <span class='text-warning'>all stats for Team Player's are increased. Attack +90, Speed +35, Defense +100, Jump +9</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : highlightdur_VALs, Wait Time : highlightcldwn_VALs</span>"
            },
            { name: "Rainbow Trail", desc: "Changes the color of the Ball's Trail during the Serve Toss." },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vK4hIZlW-Wg?si=SK5L5xQcL-HfG5Pw" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sanghyeon.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Sanghyeon.webp",
                caption: "Default"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Sanghyeon_1.webp",
                caption: "Sanghyeon The Spike 2018"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Sanghyeon_2.webp",
                caption: "Sanghyeon The Spike 2018"
            },
        ]
    },
    {
        id: "sara",
        name: "Sara Seo",
        role: "WS",
        position: "Wing Spiker (WS)",
        isDave: true,
        desc: "One of the World's Big Five Spikers. Having hidden her true talent just to play alongside Siwoo, she has finally revealed her full potential. Though she is usually gentle and kind, she is a girl of 'iron will in a velvet glove' who shows unparalleled skill once the match begins. " +
            "Despite being a minor, she debuted in the American-based global pro league LOV (League One Volleyball) and led her team to victory in her first season. After winning back-to-back MVP titles," +
            " she rose to become the final member of the World's Big Five Spikers. The world is now buzzing over the birth of this new superstar.",
        image: "img/Sara.webp",
        baseStats: {
            attack: { base: 95, maxLimit: 180, growth: [0, 5, 6, 7, 8, 10] },
            defense: { base: 100, maxLimit: 155, growth: [0, 5, 10, 15, 20, 25] },
            speed: { base: 100, maxLimit: 190, growth: [0, 5, 5, 5, 10, 10] },
            jump: { base: 120, maxLimit: 175, growth: [0, 2, 3, 5, 6, 7] }
        },
        recommended: {
            attack: { base: 180, growthText: "+10 (Max BT)", total: 190 },
            defense: { base: 100, growthText: "+25 (Max BT)", total: 125 },
            speed: { base: 140, growthText: "+10 (Max BT)", total: 150 },
            jump: { base: 175, growthText: "+7 (Max BT)", total: 182 }
        },
        skillStats: {
            typhoondur: [12, 13, 13, 13, 14, 15],
            typhooncldwn: [12, 11, 10, 9, 8, 7],
            typhoon: [
                {
                    100: { attack: +14, jump: +9 },
                    120: { attack: +17, jump: +9 },
                    140: { attack: +19, jump: +9 },
                    160: { attack: +22, jump: +9 },
                    180: { attack: +25, jump: +9 },
                    200: { attack: +28, jump: +9 },
                },
                {
                    100: { attack: +14, jump: +9 },
                    120: { attack: +17, jump: +9 },
                    140: { attack: +19, jump: +9 },
                    160: { attack: +22, jump: +9 },
                    180: { attack: +25, jump: +9 },
                    200: { attack: +28, jump: +9 },
                },
                {
                    100: { attack: +14, jump: +9 },
                    120: { attack: +17, jump: +9 },
                    140: { attack: +19, jump: +9 },
                    160: { attack: +22, jump: +9 },
                    180: { attack: +25, jump: +9 },
                    200: { attack: +28, jump: +9 },
                },
                {
                    100: { attack: +14, jump: +9 },
                    120: { attack: +17, jump: +9 },
                    140: { attack: +19, jump: +9 },
                    160: { attack: +22, jump: +9 },
                    180: { attack: +25, jump: +9 },
                    200: { attack: +28, jump: +9 },
                },
                {
                    100: { attack: +14, jump: +9 },
                    120: { attack: +17, jump: +9 },
                    140: { attack: +19, jump: +9 },
                    160: { attack: +22, jump: +9 },
                    180: { attack: +25, jump: +9 },
                    200: { attack: +28, jump: +9 },
                },
                {
                    100: { attack: +14, jump: +9 },
                    120: { attack: +17, jump: +9 },
                    140: { attack: +19, jump: +9 },
                    160: { attack: +22, jump: +9 },
                    180: { attack: +25, jump: +9 },
                    200: { attack: +28, jump: +9 },
                }
            ],
            gustprep: [0.25, 0.2, 0.15, 0.1, 0.09, 0.05], gustmovement: [95, 98.75, 102.5, 106.25, 107, 110],
            calmstorm: [-40, -48, -52, -64, -64, -72], calmstormdur: [0.58, 0.65, 0.68, 0.78, 0.78, 0.85],
            razorwind: [
                {
                    0: { power: +0 },
                    1: { power: +12.65 },
                    2: { power: +25.3 },
                    3: { power: +37.95 },
                    4: { power: +50.6 },
                    5: { power: +63.25 },
                },
                {
                    0: { power: +0 },
                    1: { power: +13.2 },
                    2: { power: +26.4 },
                    3: { power: +39.6 },
                    4: { power: +52.8 },
                    5: { power: +66 },
                },
                {
                    0: { power: +0 },
                    1: { power: +13.75 },
                    2: { power: +27.5 },
                    3: { power: +41.25 },
                    4: { power: +55 },
                    5: { power: +68.75 },
                },
                {
                    0: { power: +0 },
                    1: { power: +14.3 },
                    2: { power: +28.6 },
                    3: { power: +42.9 },
                    4: { power: +57.2 },
                    5: { power: +71.5 },
                },
                {
                    0: { power: +0 },
                    1: { power: +14.3 },
                    2: { power: +28.6 },
                    3: { power: +42.9 },
                    4: { power: +57.2 },
                    5: { power: +71.5 },
                },
                {
                    0: { power: +0 },
                    1: { power: +14.85 },
                    2: { power: +29.7 },
                    3: { power: +44.55 },
                    4: { power: +59.4 },
                    5: { power: +74.25 },
                },
                {
                    0: { power: +0 },
                    1: { power: +15.4 },
                    2: { power: +30.8 },
                    3: { power: +46.2 },
                    4: { power: +61.6 },
                    5: { power: +77 },
                },
            ]
        },
        skills: [
            {
                name: "Typhoon", icon: "img/skill/Typhoon_Icon.webp", desc: "During the Skill Activation, <span class='text-warning'>Attack and Jump increase. The higher the Speed, the more Attack increases.</span>" +
                    "<br><span class='text-success-custom fw-bold'>typhoon_VAL</span>"
            },
            {
                name: "Calm Before the Storm", desc: "Immediately after a Gust jump, <span class='text-warning'>the opponent moves slower temporarily.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Opponent team speed: calmstorm_VAL% , Skill Duration: calmstormdur_VALs"
            },
            {
                name: "Gust", desc: "Press Spike Button to move quickly to the Ball's impact point. <span class='text-warning'>The moment you release Spike Button, you quickly jump to the highest point.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Run prep time: gustprep_VALs, Run movement speed: gustmovement_VALs"
            },
            {
                name: "Razor Wind", desc: "Press Spike Button while Mid-air to hover briefly. The moment you release Spike Button, you perform a Swing. <span class='text-warning'>Performing a Spike while in Typhoon state displays a target point on the opponent's court." +
                    " You Spike toward the last point that appeared at the moment you released Spike Button.</span>" +
                    "<br><span class='text-success-custom fw-bold'>razorwind_VAL</span>"
            },
            { name: "Tempest Lash", desc: "<span class='text-warning'>Allows for Spike in a wider range than usual.</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XJ1_wZaKk18?si=Vd75egN-gzBQMJQJ" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sara.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Sara.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Sara_max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Story illustration",
                image: "img/oldillust/Young_Sara.webp",
                caption: "Story"
            },
        ]
    },
    {
        id: "sara_se",
        name: "Sara Seo",
        role: "SE",
        position: "Setter (SE)",
        desc: "Sara Seo, the World's Big Five Spiker. A player renowned for her incredibly fast movement on the court. As an all-rounder, " +
            "she can perform at a pro starter level in any position. Currently filling in as a Setter for Siwoo, she is expected to return to her Spiker role in the future.",
        image: "img/Sara_se.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 180, growth: [0, 5, 6, 7, 8, 10] },
            defense: { base: 100, maxLimit: 150, growth: [0, 5, 10, 15, 20, 25] },
            speed: { base: 100, maxLimit: 190, growth: [0, 5, 5, 5, 10, 10] },
            jump: { base: 100, maxLimit: 170, growth: [0, 2, 3, 5, 6, 7] }
        },
        recommended: {
            attack: { base: 180, growthText: "+10 (Max BT)", total: 190 },
            defense: { base: 100, growthText: "+25 (Max BT)", total: 125 },
            speed: { base: 135, growthText: "+10 (Max BT)", total: 145 },
            jump: { base: 170, growthText: "+7 (Max BT)", total: 177 }
        },
        skillStats: {
            criticaltoss: [+15, +15, +16.5, +17.25, +18, +18],
        },
        skills: [
            {
                name: "Critical Set", icon: "img/skill/Critical_Set_Icon.webp", desc: "When performing a Set, a circle appears around the Ball to indicate timing. <span class='text-warning'>If a Spike is used at the moment the Ball touches the circle, the Ball's Power increases.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Power : criticaltoss_VAL%</span>"
            },
            { name: "Snowflake Two-Attack", desc: "Performs a Spike with a snowflake effect, <span class='text-warning'>increasing the Ball's Spin by 35% and Power by 100%.</span>" },
            { name: "Speed Setter", desc: "<span class='text-warning'>Reduces the Speed penalty caused by Rally duration by 30%.</span>" },
        ],
        synergies: [
            {
                name: "Beauty & the Beast",
                partners: [
                    { name: "Sara[SE]", icon: "img/Sara_SE.webp" },
                    { name: "Dave", icon: "img/Dave.webp" },
                ],
                desc: "Dave's push-up speed increases by 20%"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/lYpPOJa2taU?si=-PwgE3YfCb8Yv2G_" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sara_Se.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Watersplash",
                image: "img/skins/Watersplash_max.webp",
                obtain: "Skin / Summer Event"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Sara_Se.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Sara_Se_max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Skin illustration",
                image: "img/skins/Watersplash.webp",
                caption: "Skin"
            },
            {
                title: "Signature illustration",
                image: "img/skins/Watersplash_max.webp",
                caption: "Skin"
            },
            {
                title: "Story illustration",
                image: "img/oldillust/Young_Sara.webp",
                caption: "Story"
            },
        ]
    },
    {
        id: "saya",
        name: "Yoo Saya",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Starting middle blocker of Terra High’s volleyball club. At first glance, she seems cold and blunt, but she is a loyal girl who cares about her team and friends more than anyone else. " +
            "Sometimes, she acts on quirky ideas without hesitation, leaving those around her flustered. Her favorite food is Fish Bun, and her favorite friend is Boss the cat.",
        image: "img/Saya.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 155, growth: [0, 3, 4, 6, 6, 10] },
            defense: { base: 105, maxLimit: 155, growth: [0, 3, 7, 10, 12, 12] },
            speed: { base: 95, maxLimit: 155, growth: [0, 3, 3, 5, 8, 12] },
            jump: { base: 100, maxLimit: 155, growth: [0, 0, 2, 2, 3, 3] }
        },
        recommended: {
            attack: { base: 110, growthText: "+10 (Max BT)", total: 120 },
            defense: { base: 145, growthText: "+12 (Max BT)", total: 157 },
            speed: { base: 155, growthText: "+12 (Max BT)", total: 167 },
            jump: { base: 155, growthText: "+3 (Max BT)", total: 158 }
        },
        skillStats: {
            fishbundur: [6, 6, 6, 7, 7, 7], //fih🥀🐟
            fishbuncldwn: [16, 16, 15, 14, 14, 14],
        },
        skills: [
            {
                name: "Fish Bun", icon: "img/skill/Fish_Bun_Icon.webp", desc: "Upon Skill Activation, <span class='text-warning'>eats a Fish Bun. After eating the Fish Bun, Team Stamina is recovered by 30, and Status increases for the skill duration.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : fishbundur_VALs <br>Wait Time : fishbuncldwn_VALs <br> Attack : +28, Defence : +40, Speed : +25, Jump : +5  </span>"
            },
            { name: "Out of Shape", desc: "<span class='small text-warning'>The amount of Speed reduction caused by Rally duration increases by 10%.</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: ``,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Saya.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Saya.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "yuna",
        name: "Seo Yuna",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "A hardworking wing spiker who earned a place on the national team through relentless effort despite difficult circumstances. Bright, cheerful, and easy to get along with, she is loved wherever she goes, like the team’s mascot. She always carries a training notebook to help her overcome the limits of her natural physique. " +
            "On the court, she is fiercely competitive and determined, using her exceptional flexibility to strike the ball from any angle. Even after a loss, she stays upbeat and says, 'It’s okay!' Yet she is tenacious and stubborn enough to train alone in secret at night. Despite her cute appearance, she seems eager to be seen as a dependable senior by her juniors.",
        image: "img/Seo_Yuna.webp",
        baseStats: {
            attack: { base: 95, maxLimit: 175, growth: [0, 5, 7, 7, 9, 11] },
            defense: { base: 95, maxLimit: 165, growth: [0, 3, 5, 5, 5, 10] },
            speed: { base: 95, maxLimit: 165, growth: [0, 2, 4, 6, 8, 10] },
            jump: { base: 95, maxLimit: 160, growth: [0, 4, 5, 6, 7, 8] }
        },
        recommended: {
            attack: { base: 175, growthText: "+11 (Max BT)", total: 186 },
            defense: { base: 100, growthText: "+10 (Max BT)", total: 110 },
            speed: { base: 150, growthText: "+10 (Max BT)", total: 160 },
            jump: { base: 160, growthText: "+8 (Max BT)", total: 168 }
        },
        skillStats: {
            outsyset: [13, 14, 16, 17, 17, 18]
        },
        skills: [
            { name: "Full-Body Spike", icon: "img/skill/Full-Body_Icon.webp", desc: "<span class='text-warning'>Depending on the position of the Ball, you can perform a Spike using different body positions, changing the trajectory of the Spike accordingly.</span>" },
            { name: "Block evasion", desc: "<span class='text-warning'>For Al-controlled players, if the landing point of the opponent's Spike is out, Block is canceled.</span>" },
            { name: "Solid Blocking", desc: "Improves the timing Accuracy of Block Jump s performed by Al-controlled Players." },
            {
                name: "Soft Out-of-System Set", desc: "Sets an Out-of-System Set toward the attack line. <span class='text-warning'>When that Set is Spiked, the Ball's Power increases.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Ball Power : +outsyset_VAL%</span>"
            },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-danger'>Very High</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/05xrWE6iPZ0?si=0JNzS-3xfOSiK_PA" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Seo_Yuna.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Seo_Yuna.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "seolhwa",
        name: "Seolhwa",
        role: "SE",
        position: "Setter (SE)",
        desc: "The nation's top high school setter. He's been recognized for tremendous potential since middle school. Originally played as an attacker but switched to setter in high school. " +
            "Thanks to his middle school achievements, many still remember him as a 'monster attacker.' People still suggest he'd be better as an attacker, but he firmly refuses, apparently due to middle school trauma. His excellence in both offense and defense makes his talent obvious even to casual observers.",
        image: "img/Seolhwa.webp",
        baseStats: {
            attack: { base: 105, maxLimit: 175, growth: [0, 2, 4, 6, 8, 10] },
            defense: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            speed: { base: 100, maxLimit: 165, growth: [0, 0, 0, 0, 0, 2] },
            jump: { base: 100, maxLimit: 165, growth: [0, 0, 0, 0, 1, 3] }
        },
        recommended: {
            attack: { base: 175, growthText: "+10 (Max BT)", total: 185 },
            defense: { base: 100, growthText: "+0 (Max BT)", total: 100 },
            speed: { base: 145, growthText: "+2 (Max BT)", total: 147 },
            jump: { base: 165, growthText: "+3 (Max BT)", total: 168 }
        },
        skillStats: {
            suprisecldwn: [35, 32, 30, 28, 25, 25]
        },
        skills: [
            {
                name: "Surprise Attack", icon: "img/skill/Surprise_Attack_Icon.webp", desc: "During the Skill's Activation, attempt Two-Attack instead of Set. <span class='text-warning'>During this time, Spike gains 30% Power and cannot be blocked by Block.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : 10s , Wait Time : suprisecldwn_VALs</span>"
            },
            { name: "Serve Routine A", desc: "Performs a unique pre-Serve animation." },
        ],
        synergies: [
            {
                name: "All-Star",
                partners: [
                    { name: "Seolhwa", icon: "img/Seolhwa.webp" },
                    { name: "Yongsup", icon: "img/Yongsup.webp" },
                    { name: "Heeseong", icon: "img/Heeseong.webp" },
                ],
                desc: "Attack +4, Jump +4"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/WMEpwtk8yic?si=QAk3DXBml8GhXgxh" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Seolhwa.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Seolhwa.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Seolhwa_Max.webp",
                caption: "Signature / Max"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Seolhwa_1.webp",
                caption: "Seolhwa 2018"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Seolhwa_2.webp",
                caption: "Seolhwa 2018"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Seolhwa_3.webp",
                caption: "Seolhwa The Spike PC 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Seolhwa_4.webp",
                caption: "Seolhwa The Spike Mobile 2023"
            },
            {
                title: "Old illustration",
                image: "img/oldillust/Seolhwa_5.webp",
                caption: "Seolhwa The Spike Mobile 2023"
            },

        ]
    },
    {
        id: "sif",
        name: "Sif",
        role: "SE",
        position: "Setter (SE)",
        isDave: true,
        desc: "The best setter in the Phantom League. Three words define her: calm, composed, perfectionist. She's the reliable backbone of her team, never panicking and always finding solutions when things get tough. " +
            "But that's just the surface. At her core lies love, pure and fiery. Everything else is just a mask. Her heart beats only for Raul, and she constantly struggles to suppress her overflowing admiration for him." +
            "Sometimes, her feelings slip out unintentionally, but she still firmly believes that no one has noticed her secret.",
        image: "img/Sif.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 170, growth: [0, 3, 5, 7, 8, 10] },
            defense: { base: 95, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            speed: { base: 95, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            jump: { base: 95, maxLimit: 160, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 110, growthText: "+10 (Max BT)", total: 120 },
            defense: { base: 145, growthText: "+12 (Max BT)", total: 157 },
            speed: { base: 155, growthText: "+12 (Max BT)", total: 167 },
            jump: { base: 155, growthText: "+3 (Max BT)", total: 158 }
        },
        skillStats: {
            gladius: [
                {
                    100: { defense: +38 },
                    120: { defense: +52.4 },
                    140: { defense: +66.8 },
                    160: { defense: +81.2 },
                    180: { defense: +95.6 },
                    200: { defense: +110 },
                    220: { defense: +124.4 },
                    240: { defense: +138.8 },
                    260: { defense: +153.2 },
                    280: { defense: +167.6 },
                    300: { defense: +182 },
                },
                {
                    100: { defense: +38 },
                    120: { defense: +52.4 },
                    140: { defense: +66.8 },
                    160: { defense: +81.2 },
                    180: { defense: +95.6 },
                    200: { defense: +110 },
                    220: { defense: +124.4 },
                    240: { defense: +138.8 },
                    260: { defense: +153.2 },
                    280: { defense: +167.6 },
                    300: { defense: +182 },
                },
                {
                    100: { defense: +38 },
                    120: { defense: +52.4 },
                    140: { defense: +66.8 },
                    160: { defense: +81.2 },
                    180: { defense: +95.6 },
                    200: { defense: +110 },
                    220: { defense: +124.4 },
                    240: { defense: +138.8 },
                    260: { defense: +153.2 },
                    280: { defense: +167.6 },
                    300: { defense: +182 },
                },
                {
                    100: { defense: +38 },
                    120: { defense: +52.4 },
                    140: { defense: +66.8 },
                    160: { defense: +81.2 },
                    180: { defense: +95.6 },
                    200: { defense: +110 },
                    220: { defense: +124.4 },
                    240: { defense: +138.8 },
                    260: { defense: +153.2 },
                    280: { defense: +167.6 },
                    300: { defense: +182 },
                },
                {
                    100: { defense: +38 },
                    120: { defense: +52.4 },
                    140: { defense: +66.8 },
                    160: { defense: +81.2 },
                    180: { defense: +95.6 },
                    200: { defense: +110 },
                    220: { defense: +124.4 },
                    240: { defense: +138.8 },
                    260: { defense: +153.2 },
                    280: { defense: +167.6 },
                    300: { defense: +182 },
                },
                {
                    100: { defense: +38 },
                    120: { defense: +52.4 },
                    140: { defense: +66.8 },
                    160: { defense: +81.2 },
                    180: { defense: +95.6 },
                    200: { defense: +110 },
                    220: { defense: +124.4 },
                    240: { defense: +138.8 },
                    260: { defense: +153.2 },
                    280: { defense: +167.6 },
                    300: { defense: +182 },
                },
            ],
            gladiusdur: [13, 13, 12, 12, 11, 11],
            gladiuscldwn: [3, 4, 4, 5, 5, 5],
        },
        skills: [
            {
                name: "Gladius Wall", icon: "img/skill/Gladius_Wall_Icon.webp", desc: "Upon Skill Activation, <span class='text-warning'>restores 30 Stamina of the Team. While active, Team Player Defense increases, scaling with their individual Attack.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : gladiusdur_VALs , Wait Time : gladiuscldwn_VALs</span>" +
                    "<br><span class='text-success-custom fw-bold'>Defence : gladius_VAL</span>"
            },
            { name: "Crown Pass", desc: "Prioritize the Player with the highest Attack in the Team for the Set. <span class='text-warning'>If no other Player has the highest Attack, the chance of Two-Attack is increased by 95%.</span>" },
        ],
        synergies: [
            {
                name: "Unified Offense & Defense",
                partners: [
                    { name: "Sif", icon: "img/Sif.webp" },
                    { name: "Raul", icon: "img/Raul.webp" },
                ],
                desc: "Raul's charging speed increases by 10%"
            },
            {
                name: "Center Ace",
                partners: [
                    { name: "Sif", icon: "img/Sif.webp" },
                    { name: "Yuri", icon: "img/Yuri.webp" },
                ],
                desc: "Attack +10"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/l5jgOStxUQc?si=ZycVXTqGwZXlFIbM" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sif.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Sif.webp",
                caption: "Default"
            },
            {
                title: "Signature illustration",
                image: "img/oldillust/Sif_Max.webp",
                caption: "Signature / Max"
            },
        ]
    },
    {
        id: "sodam",
        name: "Sodam",
        role: "SE",
        position: "Setter (SE)",
        desc: "Attends martial arts school but dreams of being a volleyball player instead of a martial artist. She happened to visit Seonrim High and fell for volleyball after watching students play passionately, leading her to enroll there. " +
            "She was crushed when Ryuhyeon banned volleyball shortly after her arrival. She adores Hanra and follows her around like a chick. " +
            "She often gets stomachaches from dutifully eating the enormous portions Hanra feeds her.",
        image: "img/Sodam.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            defense: { base: 100, maxLimit: 155, growth: [0, 10, 10, 20, 25, 30] },
            speed: { base: 100, maxLimit: 155, growth: [0, 3, 6, 9, 12, 15] },
            jump: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 110, growthText: "+0(Max BT)", total: 110 },
            defense: { base: 155, growthText: "+30 (Max BT)", total: 185 },
            speed: { base: 155, growthText: "+15 (Max BT)", total: 170 },
            jump: { base: 155, growthText: "+0 (Max BT)", total: 158 }
        },
        skillStats: {
            hope: [5, 6.5, 9, 10, 12.5, 15]
        },
        skills: [
            { name: "Sunflower", icon: "img/skill/Sunflower_Characteristic_Icon.webp", desc: "During the Skill's Activation, <span class='text-warning'>performs a Set targeting the Wing Spiker.</span> This skill can be toggled ON/OFF." },
            {
                name: "Light of Hope", desc: "Each time the Team loses a point, there is a chance for Team Players to enter the Engaged state." +
                    "<br><span class='text-success-custom fw-bold'>Engaged Chance: hope_VAL%</span>"
            },
        ],
        synergies: [
            { name: "None", desc: "None" }
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very Low</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/em2CJcEg5ec?si=rNOjjo952g9R99-D" title="YouTube video player" frameborder="0" allow="accelerometer;
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sodam.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                title: "Default illustration",
                image: "img/Sodam.webp",
                caption: "Default"
            },
        ]
    },
    {
        id: "sohee",
        name: "Sohee",
        role: "SE",
        position: "Setter (SE)",
        desc: "Starting setter for Yellow Panthers. Her cheerful and considerate nature means she can't ignore teammates being left out. Her meddling sometimes causes trouble, but she says it helped her make many good friends. Despite her outgoing appearance, she gets quite lonely. " +
            "Starting her career in Japan at a young age and shouldering team responsibilities made it increasingly difficult to open up to others. Her only weakness is constantly putting her emotions aside to meet everyone's expectations.",
        image: "img/Sohee.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 155, growth: [0, 0, 3, 5, 5, 5] },
            defense: { base: 100, maxLimit: 165, growth: [0, 0, 0, 0, 3, 5] },
            speed: { base: 100, maxLimit: 165, growth: [0, 5, 10, 15, 18, 20] },
            jump: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 100, growthText: "+5 (Max BT)", total: 105 },
            defense: { base: 165, growthText: "+5 (Max BT)", total: 170 },
            speed: { base: 165, growthText: "+20 (Max BT)", total: 185 },
            jump: { base: 155, growthText: "+0 (Max BT)", total: 155 }
        },
        skillStats: {
            stableset: [5, 4, 4, 4, 4, 3],
        },
        skills: [
            {
                name: "Stable Set", icon: "img/skill/Stable_Set_Characteristic_Icon.webp", desc: "During Skill Activation, performs a stable Set with reduced Power and Spin of the Ball. <span class='text-warning'>When performing Set during Skill Activation, immediately restores 15 Stamina to the Team, [Elite Rule] " +
                    "Restores the Stamina of the Teammate with the lowest Individual Stamina.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : 2s , Wait Time : stableset_VALs</span>"
            },
            { name: "Pass Feint to Exploit Gaps", desc: "If the Opponent Players are gathered within 4m of the Net, <span class='text-warning'>performs a deep Setter's Dump to the back court.</span>" }
        ],
        synergies: [
            {
                name: "Dragon Flower",
                partners: [
                    { name: "Sohee", icon: "img/Sohee.webp" },
                    { name: "Ryuhyeon", icon: "img/Ryuhyeon.webp" }
                ],
                desc: "Attack +4, Jump +2"
            },
            {
                name: "Stable Strength",
                partners: [
                    { name: "Sohee", icon: "img/Sohee.webp" },
                    { name: "Yongsup", icon: "img/Yongsup.webp" }
                ],
                desc: "Attack +4, Jump +2"
            },
            {
                name: "Speed King",
                partners: [
                    { name: "Sohee", icon: "img/Sohee.webp" },
                    { name: "Yuri", icon: "img/Yuri.webp" }
                ],
                desc: "Attack +7, Jump +4"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/xfha99UqYIY?si=pt8fySULfT-UjPyo" title="YouTube video player" frameborder="0" allow="accelerometer;
                autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Sohee.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Vampire",
                image: "img/skins/Vampire.webp",
                obtain: "Event Skin / Halloween"
            },
        ],
        gallery: [
            {
                name: "Skin Illustration",
                image: "img/skins/Vampire.webp",
                caption: "Skin"
            }
        ]
    },
    {
        id: "tania",
        name: "Tania",
        role: "SE",
        position: "Setter (SE)",
        desc: "Youngest daughter of world-famous Wilton Group's chairman. She naturally fell for volleyball while playing with balls from 'RISE,' Wilton Group's volleyball brand. " +
            "She has both passion and talent but grew up spoiled, making her somewhat self-centered. She carelessly delivers quick sets without considering teammates, " +
            "often leaving them scrambled. She's known Clyde, another rich kid, since childhood. She's secretly bothered that Clyde doesn't try to impress her like others do and aims to make him recognize her greatness someday.",
        image: "img/Tania.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] },
            defense: { base: 100, maxLimit: 155, growth: [0, 10, 10, 20, 25, 30] },
            speed: { base: 100, maxLimit: 155, growth: [0, 3, 6, 9, 12, 15] },
            jump: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 110, growthText: "+0 (Max BT)", total: 110 },
            defense: { base: 155, growthText: "+30 (Max BT)", total: 185 },
            speed: { base: 155, growthText: "+15 (Max BT)", total: 170 },
            jump: { base: 155, growthText: "+0 (Max BT)", total: 155 }
        },
        skillStats: {
        },
        skills: [
            { name: "Speed Set", icon: "img/skill/Speed_Set_Icon.webp", desc: "Performs a rapid, steep Set. <span class='text-warning'>The Ball's Power increases based on its vertical velocity after the Set. Difficulty: High (Expert-level timing required.)</span>" },
            { name: "Speed Setter", desc: "<span class='text-warning'>Reduces the Speed penalty caused by Rally duration by 30%.</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners:
                    [
                    ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-danger'>Very High</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/NvJ91Nfdlmo?si=joUTB6V6SncjWPzS" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Tania.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery: [
            {
                name: "Default Illustration",
                image: "img/Tania.webp",
                caption: "Default"
            }
        ]
    },
    {
        id: "viola",
        name: "Viola",
        role: "SE",
        position: "Setter (SE)",
        desc: "The Colosseum's mischievous girl, considered a candidate to succeed Isabel as the next queen. She loves romance stories indiscriminately and is especially interested in Isabel's love life. For someone so interested in others romance, she's surprisingly dense about her own situation, leaving quite a few people secretly pining for her. " +
            "She suffers from amnesia and remembers nothing from childhood. She has strong hands and enjoys unconventional plays, especially setting back attacks during quick situations by sending the ball behind the attack line. Her unique setter style gives new teammates quite a hard time adjusting.",
        image: "img/Viola.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 155, growth: [0, 5, 5, 10, 10, 10] },
            defense: { base: 100, maxLimit: 155, growth: [0, 10, 20, 30, 40, 50] },
            speed: { base: 100, maxLimit: 155, growth: [0, 5, 10, 15, 18, 20] },
            jump: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 155, growthText: "+10 (Max BT)", total: 165 },
            defense: { base: 110, growthText: "+50 (Max BT)", total: 160 },
            speed: { base: 155, growthText: "+20 (Max BT)", total: 175 },
            jump: { base: 155, growthText: "+0 (Max BT)", total: 155 }
        },
        skillStats: {
            curestamina: [40, 44, 48, 52, 56, 60]
        },
        skills: [
            {
                name: "Frantic", icon: "img/skill/Frantic_Icon.webp", desc: "If the Wing Spiker is positioned approximately 2.5m or farther from the Net, <span class='text-warning'>the setter performs a Set to the Wing Spiker far from the Net. Skill can be toggled ON/OFF.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Stamina Recovery : +curestamina_VAL</span>"
            },
            { name: "Cure Set", desc: "When performing Set, <span class='text-warning'>has a 50% chance to restore the Team's Stamina. [Elite Rule] Restores the Stamina of the Teammate with the lowest Individual Stamina.</span>" },
            { name: "Excellent Concentration", desc: "For every Ace scored by the Opponent Player, <span class='text-warning'>Team Max Stamina is permanently increased by 10.</span>" },
        ],
        synergies: [
            {
                name: "Wild Colosseum",
                partners: [
                    { name: "Viola", icon: "img/Viola.webp" },
                    { name: "Leon", icon: "img/Leon.webp" }
                ],
                desc: "Speed +5, Jump +2"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/WnYPO2v5Bic?si=g4PWm1b_UC60JhW0" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Viola.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Summer Training",
                image: "img/skins/Viola_Summer_Training.webp",
                obtain: "Event-exclusive / Summer Event"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Viola.webp",
                    caption: "Default"
                },
                {
                    title: "Old illustration",
                    image: "img/oldillust/Viola_Illust_1.webp",
                    caption: "Viola / The Spike Mobile 2024"
                },
                {
                    title: "Skin",
                    image: "img/skins/Viola_Summer_Training.webp",
                    caption: "Summer Training"
                },
            ]
    },
    {
        id: "yamadera",
        name: "Yamadera",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "Starting middle blocker for Valentia Spikes. Extremely uncomfortable with social interaction and a chronic case of can't-be-bothered syndrome. His gloomy appearance and characteristically blunt speech lead to frequent misunderstandings. Nishikawa's high school junior who had a depressing school life due to his introverted nature, OCD tendencies, and poor social skills. " +
            "His life changed when Nishikawa approached him first after entering high school and invited him to join the volleyball club. Now they work together as an oddball duo. Excels at observing opponents during matches to find solutions, quickly identifying small habits or strategies to neutralize their strengths.",
        image: "img/Yamadera.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 175, growth: [0, 0, 0, 3, 3, 5] },
            defense: { base: 100, maxLimit: 160, growth: [0, 0, 2, 2, 4, 4] },
            speed: { base: 80, maxLimit: 160, growth: [0, 0, 2, 2, 4, 4] },
            jump: { base: 115, maxLimit: 160, growth: [0, 0, 1, 2, 2, 2] }
        },
        recommended: {
            attack: { base: 165, growthText: "+5 (Max BT)", total: 170 },
            defense: { base: 100, growthText: "+4 (Max BT)", total: 104 },
            speed: { base: 160, growthText: "+4 (Max BT)", total: 164 },
            jump: { base: 160, growthText: "+2 (Max BT)", total: 162 }
        },
        skillStats: {
            lockjump: [42, 70.1, 84, 84, 84, 84],
            lockspeed: [42, 70.1, 84, 84, 84, 84,]
        },
        skills: [
            {
                name: "Lock", icon: "img/skill/Lock_Icon.webp", desc: "<span class='fw-bold text-danger-custom'>Debuff Level: 1</span><br><span class='text-warning'>When Bumping an Attack that was not stopped by Block, the Opponent Player who performed the Attack is inflicted with Lock for a short time. While Locked, they cannot Sliding, and their Speed and Jump decrease.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Jump Debuff : -lockjump_VAL%, Speed Debuff : -lockspeed_VAL%</span>"
            },
            { name: "Enhancement", desc: "<span class='text-warning'>Team Player Defense is increased by 15 for every consecutive Service Ace scored by the Opponent Player.</span>" },
            { name: "Light Movement", desc: "Performs a Quick Attack after a light Approach." },
        ],
        synergies: [
            {
                name: "None",
                partners:
                    [
                    ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0iHYrwJ-ppA?si=kWz2XXtHbMhcUTNM" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Yamadera.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Yamadera.webp",
                    caption: "Default"
                },
            ]
    },
    {
        id: "yongsup",
        name: "Lee Youngseob",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "The ace of Jisan High. Though short in stature, he's earned his place as a top-tier ace with explosive jumps and crushing spikes. The true backbone of the team, he embodies the ideal leader who always looks after his teammates. " +
            "His stiff, formal way of speaking can make him seem intimidating, but in truth, he's surprisingly kind to his juniors.",
        image: "img/Yongsup.webp",
        baseStats: {
            attack: { base: 120, maxLimit: 185, growth: [0, 1, 3, 4, 5, 5] },
            defense: { base: 100, maxLimit: 160, growth: [0, 0, 1, 3, 3, 5] },
            speed: { base: 100, maxLimit: 180, growth: [0, 0, 1, 3, 3, 5] },
            jump: { base: 125, maxLimit: 170, growth: [0, 1, 1, 3, 3, 5] }
        },
        recommended: {
            attack: { base: 185, growthText: "+5 (Max BT)", total: 190 },
            defense: { base: 100, growthText: "+5 (Max BT)", total: 105 },
            speed: { base: 130, growthText: "+5 (Max BT)", total: 135 },
            jump: { base: 170, growthText: "+5 (Max BT)", total: 175 }
        },
        skillStats: {
        },
        skills: [
            { name: "Hidden Brilliance", desc: "Even without special abilities, he is a top high school Wing Spiker who dominates the court with overwhelming physical prowess." },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
            { name: "High 3rd Ball Play", desc: "On the third Touch, <span class='text-warning'>if the Ball is sent over without an Attack, it is sent high into the air.</span>" },
            { name: "Steel Mentality", desc: "<span class='text-warning'>When a Lv. 1 Debuff is applied, it is immediately removed if this player's Defense is 10 higher than that of the Opponent Player who applied the Debuff.</span>" },
        ],
        synergies: [
            {
                name: "All-Star",
                partners: [
                    { name: "Yongsup", icon: "img/Yongsup.webp" },
                    { name: "Heeseong", icon: "img/Heeseong.webp" },
                    { name: "Seolhwa", icon: "img/Seolhwa.webp" },
                ],
                desc: "Attack +4, Jump +4"
            },
            {
                name: "Stable Strength",
                partners: [
                    { name: "Yongsup", icon: "img/Yongsup.webp" },
                    { name: "Sohee", icon: "img/Sohee.webp" },
                ],
                desc: "Attack +4, Jump +2"
            },
            {
                name: "Small but Strong",
                partners: [
                    { name: "Yongsup", icon: "img/Yongsup.webp" },
                    { name: "Lisia", icon: "img/Lisia.webp" },
                ],
                desc: "Attack +7, Jump +4"
            },
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-danger'>Very High</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ibmhj2XWgEY?si=dO4WC_dakvSAy-3J" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Yongsup.webp",
                obtain: "Base Character / Story Appearance"
            },
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Yongsup.webp",
                    caption: "Default"
                },
                {
                    title: "Signature",
                    image: "img/oldillust/Yongsup_max.webp",
                    caption: "Signature / Max"
                },
                {
                    title: "Old illustration 1",
                    image: "img/oldillust/Yongsup_1.webp",
                    caption: "Yongsup / 2018"
                },
                {
                    title: "Old illustration 2",
                    image: "img/oldillust/Yongsup_2.webp",
                    caption: "Yongsup / The Spike PC 2023"
                },
                {
                    title: "Old illustration 3",
                    image: "img/oldillust/Yongsup_3.webp",
                    caption: "Yongsup / The Spike Mobile 2023"
                },
                {
                    title: "Old illustration 4",
                    image: "img/oldillust/Yongsup_4.webp",
                    caption: "Yongsup / 2024"
                },
            ]
    },
    {
        id: "yoonseok",
        name: "Ma Yoonseok",
        role: "WS",
        position: "Wing Spiker (WS)",
        desc: "I, one of the world's Big Five attackers, am temporarily hiding my identity while enjoying my youth in high school. However, I'm troubled by the constant confessions from female students lately. Especially the volleyball team manager, Dahee Jung. " +
            "Recently, she's been openly showing her feelings for me. Why don't they understand that a cool guy like me lives only for volleyball? The path of a popular star is indeed rough. Source: Yoonseok Ma's diary",
        image: "img/Yoonseok.webp",
        baseStats: {
            attack: { base: 110, maxLimit: 155, growth: [0, 3, 5, 7, 10, 10] },
            defense: { base: 115, maxLimit: 155, growth: [0, 3, 5, 5, 5, 10] },
            speed: { base: 100, maxLimit: 155, growth: [0, 0, 0, 0, 0, 5] },
            jump: { base: 100, maxLimit: 155, growth: [0, 4, 7, 8, 9, 10] }
        },
        recommended: {
            attack: { base: 155, growthText: "+10 (Max BT)", total: 165 },
            defense: { base: 115, growthText: "+10 (Max BT)", total: 125 },
            speed: { base: 155, growthText: "+5 (Max BT)", total: 160 },
            jump: { base: 155, growthText: "+10 (Max BT)", total: 165 }
        },
        skillStats: {
            sharpfeint: [175, 175, 202.5, 216.2, 230, 243.8],
        },
        skills: [
            { name: "Yoonseok", icon: "img/skill/Yoonseok_Icon.webp", desc: "<span class='text-warning'>Increases the chance of Opponent Players becoming Careless by 50%</span>" },
            {
                name: "Sharp Feint", desc: "<span class='text-warning'>The Feint creates a faster-dropping Ball due to its spin.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Ball's Spin : +sharpfeint_VAL%</span>"
            },
            { name: "Power Back Attack", desc: "<span class='text-warning'>Increases Power by 5.5 when performing a Spike from behind the Attack Line.</span>" },
        ],
        synergies: [
            {
                name: "None",
                partners: [
                ],
                desc: "None"
            },
        ],
        overall: [
            "Worked Up: <span class='text-success-custom'>Very High</span>",
            "Careless: <span class='text-warning'>Low</span>",
            "Engaged: <span class='text-danger'>Very Low</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/G1ly2pxNLWc?si=ty_jtnZVGghc01NV" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Yoonseok.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Yoonseok.webp",
                    caption: "Default"
                },
            ]
    },
    {
        id: "yuri",
        name: "Yuri",
        role: "MB",
        position: "Middle Blocker (MB)",
        desc: "The troublemaker of the Black Lions. He couldn't care less about what others think, earning him a reputation as a total rebel. With a personality that forces him to speak his mind no matter what, his interviews almost always end up as front-page news. His goal is to become a 'player better than Victor.' " +
            "Although he is still just a reserve player for the Black Lions, that doesn't matter to him at all. He believes this is the only way to repay Victor, who led him to volleyball when he was about to head down the wrong path. Guided by his personal conviction that 'I can't live owing anyone anything,' " +
            "Yuri is training today to surpass his ultimate target: Victor.",
        image: "img/Yuri.webp",
        baseStats: {
            attack: { base: 100, maxLimit: 165, growth: [0, 3, 3, 5, 8, 10] },
            defense: { base: 90, maxLimit: 165, growth: [0, 0, 0, 0, 3, 6] },
            speed: { base: 90, maxLimit: 155, growth: [0, 0, 0, 0, 5, 10] },
            jump: { base: 100, maxLimit: 165, growth: [0, 3, 0, 5, 6, 8] }
        },
        recommended: {
            attack: { base: 165, growthText: "+10 (Max BT)", total: 175 },
            defense: { base: 110, growthText: "+6 (Max BT)", total: 116 },
            speed: { base: 155, growthText: "+10 (Max BT)", total: 165 },
            jump: { base: 165, growthText: "+8 (Max BT)", total: 173 }
        },
        skillStats: {
            cementarydef: [25, 35, 35, 35, 40, 40],
            cementaryspeed: [25, 35, 35, 35, 40, 40],
            paindur: [25, 25, 27, 28, 30, 30],
            painwait: [15, 15, 15, 14, 14, 12],
            painteamdef: [30, 30, 30, 36, 36, 39],
            painteamspd: [30, 30, 30, 36, 36, 39],
            painselfatk: [35, 35, 35, 42, 42, 45],
        },
        skills: [
            {
                name: "Pain Killer", icon: "img/skill/Pain_Killer_Icon.webp", desc: "When Skill is Activation, <span class='text-warning'>Speed and Defense of Teammate increase, and the Player's Attack and Jump increase. The Player's Gravity increases by 160%, and Sliding Recovery Speed becomes 50% faster.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : paindur_VALs , Wait Time : painwait_VALs</span>" +
                    "<br><span class='text-success-custom fw-bold'>(Teammate) Defense : +painteamdef_VAL , Speed : +painteamspd_VAL</span>" +
                    "<br><span class='text-success-custom fw-bold'>(to the self) Attack : +painselfatk_VAL , Jump : +164</span>"
            },
            { name: "Sandman", desc: "<span class='text-warning'>Increases the duration of Opponent Player's Discouraged state by 2 seconds.</span>" },
            {
                name: "Cemetery Gate", desc: "When Ally Team Stamina is 15% or lower, <span class='text-warning'>Teammate's Speed and Defense increase. </span>" +
                    "<br><span class='text-success-custom fw-bold'>Defence : +cementarydef_VAL , Speed : +cementaryspeed_VAL"
            },
        ],
        synergies: [
            {
                name: "Center Ace",
                partners: [
                    { name: "Yuri", icon: "img/Yuri.webp" },
                    { name: "Sif", icon: "img/Sif.webp" }
                ],
                desc: "Attack +10"
            },
            {
                name: "Speed King",
                partners: [
                    { name: "Yuri", icon: "img/Yuri.webp" },
                    { name: "Sohee", icon: "img/Sohee.webp" }
                ],
                desc: "Attack +7, Jump +4"
            }
        ],
        overall: [
            "Worked Up: <span class='text-danger'>Very Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-warning'>Low</span>",
            "Discourage: <span class='text-success-custom'>Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7q3FGFimXGQ?si=oTW-21OF3YBeIcF8" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Yuri.webp",
                obtain: "Base Character / Story Appearance"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Yuri.webp",
                    caption: "Default"
                },
            ]
    },
    {
        id: "zero",
        name: "Zero",
        role: "SE",
        position: "Setter (SE)",
        desc: "This is Sanghyeon from 5 years ago. From the moment he entered middle school, his overwhelming talent drew attention as a 'genius setter.' He was considered capable of excelling at any position, not just setter. This talent earned him Sun Spark's starting setter role after advancing to Phantom League. " +
            "'Zero' isn't his real name but one he chose for international activities. Rumors suggest Carla gave him the name. " +
            "After leaving Phantom League, Sanghyeon transferred to Artistry High. On his first day, even his old middle school friends didn't recognize him - he'd dyed his hair in bright colors and completely changed the way he spoke. Some friends asked why, but Sanghyeon just kept his eyes on his phone screen, offering no explanation.",
        image: "img/Zero.webp",
        baseStats: {
            attack: { base: 90, maxLimit: 160, growth: [0, 0, 0, 2, 3, 3] },
            defense: { base: 120, maxLimit: 165, growth: [0, 0, 0, 2, 3, 4] },
            speed: { base: 130, maxLimit: 165, growth: [0, 0, 0, 2, 3, 5] },
            jump: { base: 100, maxLimit: 160, growth: [0, 0, 0, 0, 0, 0] }
        },
        recommended: {
            attack: { base: 140, growthText: "+3 (Max BT)", total: 143 },
            defense: { base: 120, growthText: "+4 (Max BT)", total: 124 },
            speed: { base: 165, growthText: "+5 (Max BT)", total: 170 },
            jump: { base: 160, growthText: "+0 (Max BT)", total: 160 }
        },
        skillStats: {
            spotdur: [20, 18, 18, 15, 12, 12],
            spotwait: [5, 5, 6, 6, 6, 6],
        },
        skills: [
            {
                name: "Spotlight Toss", desc: "During Skill Activation, performs a low, slow-falling Set toward the Wing Spiker. The ball glows at its peak; it cannot be Spike before this moment. <span class='text-warning'>Timing a Spike with the glow increases Power by 35% and Spin by 2.5. If the Wing Spiker fails to Spike the ball, they will enter a Discouraged state.</span>" +
                    "<br><span class='text-success-custom fw-bold'>Duration : spotdur_VALs , Wait Time : spotwait_VALs</span>"
            },
        ],
        synergies: [
            {
                name: "Eclipse",
                partners: [
                    { name: "Zero", icon: "img/Zero.webp" },
                    { name: "Lucas", icon: "img/Lucas.webp" }
                ],
                desc: "Attack +3, Jump +2"
            },
        ],
        overall: [
            "Worked Up: <span class='text-warning'>Low</span>",
            "Careless: <span class='text-success-custom'>Very Low</span>",
            "Engaged: <span class='text-success-custom'>Very High</span>",
            "Discourage: <span class='text-success-custom'>Very Low</span>",
        ],
        videos: [
            {
                embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KRMm5XRL9Lo?si=H41BwybEruIsiF16" title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>`,
                creatorName: "TheSpikeStation",
                creatorUrl: "https://www.youtube.com/@thespikestation"
            }
        ],
        skins: [
            {
                name: "Default",
                image: "img/Zero.webp",
                obtain: "Base Character / Story Appearance"
            },
            {
                name: "Street Artist",
                image: "img/skins/Street_Artist.webp",
                obtain: "Event Skin / Zero to One"
            }
        ],
        gallery:
            [
                {
                    title: "Default illustration",
                    image: "img/Zero.webp",
                    caption: "Default"
                },
                {
                    title: "Skin illustration",
                    image: "img/skins/Street_Artist.webp",
                    caption: "Skin"
                },
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
    } else if (charId === 'sif') {
        return 190;
    } else if (charId === 'hongshi' || charId === 'ahyeon' || charId === 'claire' || charId === 'nishikawa' || charId === 'jenny' || charId === 'lisia' || charId === 'sara_se' || charId === 'sohee' || charId === 'sejin') {
        return 185;
    } else if (charId === 'sara' || charId === 'seolhwa' || charId === 'yamadera') {
        return 180;
    } else if (charId === 'atis' || charId === 'clyde' || charId === 'leon' || charId === 'oasis' || charId === 'roberto' || charId === 'sodam' || charId === 'tania' || charId === 'viola') {
        return 175;
    } else if (charId === 'lucas') {
        return 170;
    } else if (charId === 'noname') {
        return 165;
    } else if (charId === 'gitae') {
        return 160;
    } else if (charId === 'muyeong' || charId === 'saya') {
        return 155;
    } else if (charId === 'heeseong' || charId === 'mike' || charId === 'sanghyeon' || charId === 'yoonseok') {
        return 150;
    } else if (charId === 'ellio' || charId === 'jihoon' || charId === 'zero') {
        return 145;
    } else if (charId === 'yongsup') {
        return 140;
    } else if (charId === 'hanra') {
        return 135;
    } else if (charId === 'ryuhyeon') {
        return 130;
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
    } else if (charId === 'yuri' || charId === 'yuna') {
        return 205;
    } else {
        return 120;
    }
}

function renderCharacterList(filter = 'ALL', searchQuery = '') {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;

    grid.innerHTML = '';

    const query = searchQuery.toLowerCase().trim();

    // ==========================================
    // FILTER CHARACTER
    // ==========================================
    const filteredData = charactersData.filter(char => {

        // 1. Filter berdasarkan role
        const matchesRole =
            filter === 'ALL' ||
            char.role.toUpperCase() === filter.toUpperCase();

        if (!matchesRole) return false;

        // 2. Kalau search kosong, langsung lolos
        if (!query) return true;

        // 3. Data yang bisa dicari
        const searchableText = [
            char.name,
            char.id,
            char.role,
            char.position,
            char.desc
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();

        return searchableText.includes(query);
    });

    // ==========================================
    // TIDAK ADA HASIL
    // ==========================================
    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center text-light py-5">
                <div class="mb-2" style="font-size: 2rem;">🔍</div>
                <h5 class="text-warning">Character not found</h5>
                <p class="text-muted small mb-0">
                    No characters match the search
                    "${searchQuery}"
                </p>
            </div>
        `;
        return;
    }

    // ==========================================
    // RENDER CHARACTER CARD
    // ==========================================
    filteredData.forEach(char => {
        grid.innerHTML += `
            <div class="col-md-4 col-sm-6">
                <div
                    class="card card-custom p-4 text-center character-card h-100 shadow-sm"
                    onclick="selectCharacter('${char.id}')"
                    style="cursor: pointer;"
                >

                    <div class="char-img-wrapper mb-3">
                        <img
                            src="${char.image}"
                            alt="${char.name}"
                            class="img-fluid"
                            style="max-height: 150px; object-fit: contain;"
                        >
                    </div>

                    <h4 class="text-white mb-1 fw-bold">
                        ${char.name}
                    </h4>

                    <p class="text-warning fw-semibold mb-3">
                        ${char.position}
                    </p>

                    <p class="small text-light-custom mb-0">
                        Click to view stat and breakthrough details.
                    </p>

                </div>
            </div>
        `;
    });
}

function selectCharacter(id) {
    // 1. RST ALL TEAM BUFFS DAHULU SEBELUM GANTI KARAKTER
    resetAllTeamBuffs();

    activeCharacter = charactersData.find(c => c.id === id);
    if (!activeCharacter) return;

    currentBt = 0;
    currentPushup = (id === 'iris') ? 1 : 0;

    if (!manualPoints[activeCharacter.id]) {
        manualPoints[activeCharacter.id] = { attack: 0, defense: 0, speed: 0, jump: 0 };
    }

    const slider = document.getElementById('daveRange');
    const sliderLabelText = document.getElementById('sliderLabelText');
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
        } else if (activeCharacter.id === 'lisia') {
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
                sliderLabelText.innerText = "Sunrise Phase";
            }
        } else if (activeCharacter.id === 'raul') {
            slider.min = 0;
            slider.max = 10;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Score Difference ";
        } else if (activeCharacter.id === 'roberto') {
            slider.min = 0;
            slider.max = 100;
            slider.step = 10;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Armor Gauge ";
        } else if (activeCharacter.id === 'ryuhyeon') {
            slider.min = 0;
            slider.max = 3;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Charge Spike ";
        } else if (activeCharacter.id === 'sara') {
            slider.min = 100;
            slider.max = 200;
            slider.step = 20;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Speed ";
        } else if (activeCharacter.id === 'sif') {
            slider.min = 100;
            slider.max = 300;
            slider.step = 20;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Attack ";
        } else if (activeCharacter.id === 'gitae') {
            slider.min = 0;
            slider.max = 4;
            slider.step = 1;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = "Energy Charge (Metal Blood & Iron Claw) ";
        } else {
            slider.min = 0;
            slider.max = 300;
            slider.step = 50;
            slider.value = 0;
            if (sliderLabelText) sliderLabelText.innerText = activeCharacter.sliderLabel || "Push-up";
        }
    }

    if (slider2Container) {
        if (activeCharacter.id === 'lucas') {
            slider2Container.style.display = 'block';
            if (slider2) {
                slider2.min = 0;
                slider2.max = 12;
                slider2.step = 1;
                slider2.value = currentSlider2Value;
            }

            if (sliderLabelText2) {
                sliderLabelText2.innerText = "Flare Debuff";
            }

            if (pushupValEl2) {
                pushupValEl2.innerText = "Stack " + currentSlider2Value;
            }
        } else if (activeCharacter.id === 'sara') {
            slider2Container.style.display = 'block';
            if (slider2) {
                slider2.min = 0;
                slider2.max = 5;
                slider2.step = 1;
                slider2.value = 0;
            }

            if (sliderLabelText2) {
                sliderLabelText2.innerText = "Number Of Target Points ";
            }
        } else if (activeCharacter.id === 'gitae') {
            slider2Container.style.display = 'block';
            if (slider2) {
                slider2.min = 0;
                slider2.max = 4;
                slider2.step = 1;
                slider2.value = 0;
            }
            if (sliderLabelText2) {
                sliderLabelText2.innerText = "Hundred Forged Steel";
            }
            if (pushupValEl2) {
                pushupValEl2.innerText = "0";
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
        } else if (activeCharacter.id === 'isabel' || activeCharacter.id === 'leon' || activeCharacter.id === 'roberto' || activeCharacter.id === 'ryuhyeon') {
            pushupValEl.innerText = "0%";
        } else if (activeCharacter.id === 'mike') {
            pushupValEl.innerText = "Inactive";
        } else if (activeCharacter.id === 'oasis') {
            pushupValEl.innerText = "0";
        } else if (activeCharacter.id === 'raul') {
            pushupValEl.innerText = "0 Points";
        } else if (activeCharacter.id === 'sara' || activeCharacter.id === 'sif') {
            pushupValEl.innerText = "100";
        } else if (activeCharacter.id === 'gitae') {
            pushupValEl.innerText = "0 Count";
        } else {
            pushupValEl.innerText = 0;
        }
    }

    document.getElementById('detailImg').src = activeCharacter.image;
    document.getElementById('detailName').innerText = activeCharacter.name;
    document.getElementById('detailPosition').innerText = activeCharacter.position;
    document.getElementById('detailDesc').innerText = activeCharacter.desc;

    // 2. DISABLE BUFF YANG POSISINYA SAMA DENGAN KARAKTER UTAMA
    const checkboxes = document.querySelectorAll('.buff-checkbox');
    checkboxes.forEach(cb => {
        const buffRole = cb.getAttribute('data-position');
        const parentLabel = cb.closest('label');

        if (buffRole === activeCharacter.role || buffRole === activeCharacter.position) {
            cb.checked = false;
            cb.disabled = true;

            if (parentLabel) {
                parentLabel.style.opacity = '0.4';

                const optionsContainer = parentLabel.querySelector('.buff-options-container');
                if (optionsContainer) {
                    optionsContainer.style.display = 'none';
                }
            }
        } else {
            cb.disabled = false;
            if (parentLabel) {
                parentLabel.style.opacity = '1';
            }
        }
    });

    renderSkillsAndSynergies();

    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';

    updateDetailView();
}

// 1. Fungsi khusus untuk membersihkan semua buff & slider
function resetAllTeamBuffs() {
    document.querySelectorAll('.buff-checkbox').forEach(cb => {
        cb.checked = false;
        cb.disabled = false;

        const parentLabel = cb.closest('label');
        if (parentLabel) {
            parentLabel.style.opacity = '1';

            // Sembunyikan opsi slider
            const optionsContainer = parentLabel.querySelector('.buff-options-container');
            if (optionsContainer) {
                optionsContainer.style.display = 'none';
            }

            // PERBAIKAN: Deklarasikan valText di sini bersama rangeInput 
            // agar bisa diakses oleh blok kode di bawahnya
            const rangeInput = parentLabel.querySelector('.buff-range-input');
            const valText = parentLabel.querySelector('.slider-val-text');

            // Reset value slider
            if (rangeInput) {
                const defaultVal = cb.dataset.sliderDefault || 0;
                rangeInput.value = defaultVal;
                delete rangeInput.dataset.initialized;

                if (valText) valText.textContent = defaultVal;
            }

            // Reset dropdown Breakthrough (BT) kembali ke 0
            const btSelect = parentLabel.querySelector('.buff-bt-select');
            if (btSelect) {
                btSelect.value = "0";
            }

            // PERBAIKAN: Kembalikan string result stat ke teks awal
            const resultText = parentLabel.querySelector('.buff-result-text');
            if (resultText) {
                const charId = cb.dataset.character;
                if (charId === 'claire') {
                    resultText.textContent = 'Atk +0 | Jmp +0';
                } else if (charId === 'ellio') {
                    resultText.textContent = 'Ball Power +0% (35°)';
                } else if (charId === 'jihoon') {
                    resultText.textContent = 'Power +0% | Ball Spin +0.0';
                } else if (charId === 'iris') {
                    resultText.textContent = 'Power +0% | Spin 0%';
                    // Karena valText sudah dideklarasikan di atas, sekarang kodenya tidak akan error
                    if (valText) valText.textContent = 'Fair';
                } else if (charId === 'sif') {
                    resultText.textContent = 'Defense +0';
                } else if (charId === 'yuna') {
                    resultText.textContent = 'Power +13%';
                } else if (charId === 'sejin') {
                    resultText.textContent = 'Power +5% (WS Only)';
                }
            }
        }
    });
}

let currentFallPower = 0;
let currentSlider2Value = 0;

function handleSliderChange(value) {
    let val = parseInt(value) || 0;

    if (activeCharacter?.id === 'oasis') {
        const sunriseData = activeCharacter.skillStats.sunrise[currentBt];
        const sunriseLvls = Object.keys(sunriseData).map(Number);
        currentPushup = sunriseLvls[val] ?? sunriseLvls[0];
    } else {
        currentPushup = val;
    }

    const pushupValEl = document.getElementById('pushupVal');
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
            pushupValEl.innerText = irisStatus[val] || "Fair (Power: 0%, Spin: 0%)";
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
            pushupValEl.innerText = leonpwr[val] || "Pride (Power: 0%)";
        } else if (activeCharacter && activeCharacter.id === 'lisia') {
            pushupValEl.innerText = "Success " + val;
        } else if (activeCharacter && activeCharacter.id === 'lucas') {
            if (val > 5) {
                pushupValEl.innerText = "Stage " + val + " (Slide Pierce: +90)";
            } else {
                pushupValEl.innerText = "" + val;
            }
        } else if (activeCharacter && activeCharacter.id === 'mike') {
            pushupValEl.innerText = val === 0 ? "Inactive" : "Active";
        } else if (activeCharacter && activeCharacter.id === 'raul') {
            pushupValEl.innerText = val + " Points";
        } else if (activeCharacter && activeCharacter.id === 'roberto') {
            pushupValEl.innerText = val + "%";
        } else if (activeCharacter && activeCharacter.id === 'ryuhyeon') {
            const energyLevels = [0, 40, 80, 100];
            let actualEnergy = energyLevels[val] ?? 0;
            // Cek apakah slider berada di posisi maksimal (indeks 3 / 100%)
            if (val === 3) {
                pushupValEl.innerText = actualEnergy + "% (Slide Pierce: +60)"; // Sesuaikan angka pierce-nya jika berbeda
            } else {
                pushupValEl.innerText = actualEnergy + "%";
            }
        } else if (activeCharacter && activeCharacter.id === 'gitae') {
            pushupValEl.innerText = val + " Count";
        } else {
            pushupValEl.innerText = val;
        }
    }
    updateDetailView();
}

function handleSliderChange2(value) {
    let val = parseInt(value) || 0;
    currentSlider2Value = val; // Pastikan pakai currentSliderVal2 agar sinkron

    const pushupValEl2 = document.getElementById('pushupVal2');
    if (pushupValEl2) {
        pushupValEl2.innerText = val; // Hapus "Value: ", cukup tampilkan angkanya saja
    }
    updateDetailView();
}

let activeBuffParam = 0;
let activeBuffType = null;

const BUFF_CALCULATORS = {
    claire: (bt, sliderVal) => {
        const atk = [188, 197, 206, 216, 225, 225][bt] * (sliderVal / 100);
        const jmp = [13, 14, 15, 15, 16, 16][bt] * (sliderVal / 100);
        return `Atk +${Math.round(atk)} | Jmp +${Math.round(jmp)}`;
    },
    ellio: (bt, sliderVal) => {
        const maxPower = [24, 25.2, 26.4, 27.6, 30, 30][bt];
        const power = (sliderVal / 90) * maxPower;
        return `Ball Power +${power.toFixed(1)}% (${sliderVal}°)`;
    },
    jihoon: (bt, sliderVal) => {
        const power = sliderVal * 13;
        const spin = (sliderVal * 0.2).toFixed(1);
        return `Power +${power}% | Ball Spin +${spin}`;
    },
    iris: (bt, sliderVal) => {
        const power = [-10, 0, 8, 20][sliderVal] || 0;
        const spin = [0, 0, 6, 30][sliderVal] || 0;
        const pwrText = power > 0 ? `+${power}` : power;
        const spinText = spin > 0 ? `+${spin}` : spin;
        return `Power ${pwrText}% | Spin ${spinText}%`;
    },
    sif: (bt, sliderVal) => {
        // Rumus Defense: Base 38 + (Kelipatan step * 14.4)
        const step = (sliderVal - 100) / 20;
        const def = 38 + (step * 14.4);

        // .toFixed(1).replace('.0', '') supaya 110.0 jadi 110, tapi 52.4 tetap 52.4
        return `Defense +${def.toFixed(1).replace('.0', '')}`;
    },
    yuna: (bt, sliderVal) => {
        const power = [13, 14, 16, 17, 17, 18][bt] || 13;
        return `Power +${power}%`;
    },
    sejin: (bt, sliderVal) => {
        return `Power +5% (WS Only)`;
    }
};

let currentSlider3Value = 0;

function handleSliderChange3(value) {
    let val = parseInt(value) || 0;
    currentSlider3Value = val;

    const pushupValEl3 = document.getElementById('pushupVal3');
    if (pushupValEl3) {
        pushupValEl3.innerText = val;
    }
    updateDetailView();
}

const slider3Container = document.getElementById('sliderContainer3');
const slider3 = document.getElementById('daveRange3');
const sliderLabelText3 = document.getElementById('sliderLabelText3');
const pushupValEl3 = document.getElementById('pushupVal3');

// Sembunyikan slider 3 secara default saat ganti karakter
if (slider3Container) {
    slider3Container.style.display = 'none';
    currentSlider3Value = 0;
}

function handleUniversalBuffChange(element) {
    const wrapper = element.closest('label');
    if (!wrapper) return;

    const checkbox = wrapper.querySelector('.buff-checkbox');
    const container = wrapper.querySelector('.buff-options-container');
    const charId = checkbox ? checkbox.dataset.character : null;

    // Sembunyikan container jika checkbox tidak dicentang
    if (!checkbox || !checkbox.checked) {
        if (container) container.style.display = 'none';
        updateDetailView();
        return;
    }

    // Tampilkan container jika dicentang
    if (container) container.style.display = 'block';

    // Logika eksklusif posisi (cuma 1 karakter per posisi)
    const currentPos = checkbox.dataset.position;
    if (currentPos) {
        document.querySelectorAll('.buff-checkbox:checked').forEach(otherCb => {
            if (otherCb !== checkbox && otherCb.dataset.position === currentPos) {
                otherCb.checked = false;
                const otherWrapper = otherCb.closest('label');
                if (otherWrapper) {
                    const otherContainer = otherWrapper.querySelector('.buff-options-container');
                    if (otherContainer) otherContainer.style.display = 'none';
                }
            }
        });
    }

    const btSelect = wrapper.querySelector('.buff-bt-select');
    const rangeInput = wrapper.querySelector('.buff-range-input');
    const labelText = wrapper.querySelector('.slider-label-text');
    const valText = wrapper.querySelector('.slider-val-text');
    const unitText = wrapper.querySelector('.slider-unit-text');
    const resultText = wrapper.querySelector('.buff-result-text');

    if (element === checkbox && rangeInput) {
        rangeInput.min = checkbox.dataset.sliderMin || 0;
        rangeInput.max = checkbox.dataset.sliderMax || 100;

        if (!rangeInput.dataset.initialized) {
            rangeInput.value = checkbox.dataset.sliderDefault !== undefined ? checkbox.dataset.sliderDefault : 0;
            rangeInput.dataset.initialized = "true";
        }

        if (labelText) labelText.textContent = checkbox.dataset.sliderLabel || 'Parameter';
        if (unitText) unitText.textContent = checkbox.dataset.sliderUnit || '';
    }

    const currentBt = parseInt(btSelect ? btSelect.value : 0);
    const currentSlider = parseFloat(rangeInput ? rangeInput.value : 0);

    if (valText) {
        if (charId === 'iris') {
            const irisStatusName = ["Bad", "Fair", "Good", "Perfect"];
            valText.textContent = irisStatusName[currentSlider] || currentSlider;
        } else {
            valText.textContent = currentSlider;
        }
    }

    if (BUFF_CALCULATORS[charId] && resultText) {
        resultText.textContent = BUFF_CALCULATORS[charId](currentBt, currentSlider);
    }

    updateDetailView();
}

function updateUniversalSlider(val) {
    const numericVal = parseInt(val) || 0;
    const valElement = document.getElementById('dynamicSliderVal');
    if (valElement) {
        valElement.innerText = numericVal;
    }

    activeBuffParam = numericVal;
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
                // Uncheck karakter dengan role yang sama
                cb.checked = false;

                // PERBAIKAN: Pastikan slider containernya juga ikut disembunyikan
                const parentLabel = cb.closest('label');
                if (parentLabel) {
                    const optionsContainer = parentLabel.querySelector('.buff-options-container');
                    if (optionsContainer) {
                        optionsContainer.style.display = 'none';
                    }
                }
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
    let teamBuffBonusPct = 0;

    document.querySelectorAll('.buff-checkbox:checked').forEach(cb => {
        let dynType = cb.getAttribute('data-dynamic-type') || cb.getAttribute('data-buff-type');
        let charId = cb.getAttribute('data-character');

        if (charId === 'ellio' || dynType === 'ellio_abys') {

            // --- BUFF ELLIO SUPPORT ---
            const wrapper = cb.closest('label');
            const rangeInput = wrapper ? wrapper.querySelector('.buff-range-input') : null;
            const btSelect = wrapper ? wrapper.querySelector('.buff-bt-select') : null;

            let ellioSupportBt = btSelect ? parseInt(btSelect.value) : 0;
            let currentAngle = rangeInput ? (parseFloat(rangeInput.value) || 35) : 35;

            let ellioMaster = charactersData.find(c => c.id === 'ellio');
            let maxAbysVal = 24;
            if (ellioMaster?.skillStats?.abysSet) {
                maxAbysVal = ellioMaster.skillStats.abysSet[ellioSupportBt] || 24;
            }

            let ellioTeamBonus = 0;
            if (currentAngle >= 35 && currentAngle < 90) {
                let angleProgress = (currentAngle - 35) / (89 - 35);
                ellioTeamBonus = parseFloat((angleProgress * maxAbysVal).toFixed(1));
            } else if (currentAngle >= 90) {
                ellioTeamBonus = maxAbysVal;
            }

            totalPowerPct += ellioTeamBonus;

            const resultTextEl = wrapper ? wrapper.querySelector('.buff-result-text') : null;
            if (resultTextEl) {
                resultTextEl.innerHTML = `Ball Power +${ellioTeamBonus}% <span class="text-success">(${currentAngle}°)</span>`;
            }
            activeBuffNames.push(`Ellio (Abyss Set +${ellioTeamBonus}%)`);

        } else if (charId === 'claire') {

            // --- BUFF CLAIRE SUPPORT ---
            const wrapper = cb.closest('label');
            const rangeInput = wrapper ? wrapper.querySelector('.buff-range-input') : null;
            const btSelect = wrapper ? wrapper.querySelector('.buff-bt-select') : null;

            const sliderVal = rangeInput ? (parseFloat(rangeInput.value) || 0) : 100;
            const claireBt = btSelect ? parseInt(btSelect.value) : 0;

            const atkBase = [188, 197, 206, 216, 225, 225][claireBt] || 188;
            const jmpBase = [13, 14, 15, 15, 16, 16][claireBt] || 13;

            const claireAtk = Math.round(atkBase * (sliderVal / 100));
            const claireJmp = Math.round(jmpBase * (sliderVal / 100));

            buffBonusAtk += claireAtk;
            buffBonusJmp += claireJmp;

            const resultTextEl = wrapper ? wrapper.querySelector('.buff-result-text') : null;
            if (resultTextEl) {
                resultTextEl.innerText = `Atk +${claireAtk} | Jmp +${claireJmp}`;
            }

            activeBuffNames.push(`Claire (Atk +${claireAtk}, Jmp +${claireJmp})`);

        } else if (charId === 'jihoon') {

            // --- BUFF JIHOON SUPPORT ---
            const wrapper = cb.closest('label');
            const rangeInput = wrapper ? wrapper.querySelector('.buff-range-input') : null;
            const val = rangeInput ? (parseInt(rangeInput.value) || 0) : 0;

            const pwr = val * 13;
            const spin = parseFloat((val * 0.2).toFixed(1));

            totalPowerPct += pwr;
            finalSpinRate += spin;

            const resultTextEl = wrapper ? wrapper.querySelector('.buff-result-text') : null;
            if (resultTextEl) {
                resultTextEl.innerText = `Power +${pwr}% | Ball Spin +${spin.toFixed(1)}`;
            }

            activeBuffNames.push(`Jihoon (Miraculous Toss +${pwr}%, Spin +${spin.toFixed(1)})`);

        } else if (charId === 'iris') {

            // --- BUFF IRIS SUPPORT ---
            const wrapper = cb.closest('label');
            const rangeInput = wrapper ? wrapper.querySelector('.buff-range-input') : null;
            const sliderVal = rangeInput ? (parseInt(rangeInput.value) || 1) : 1; // Default 1 (Fair)

            const irisSettings = [
                { power: -10, spin: 1.0 },
                { power: 0, spin: 1.0 },
                { power: 8, spin: 1.06 },
                { power: 20, spin: 1.30 }
            ];
            const currentSetting = irisSettings[sliderVal] || irisSettings[1];

            totalPowerPct += currentSetting.power;
            if (currentSetting.spin > finalSpinRate) {
                finalSpinRate = currentSetting.spin;
            }

            const irisStatusName = ["Bad", "Fair", "Good", "Perfect"];
            activeBuffNames.push(`Iris (Compass Accuracy: ${irisStatusName[sliderVal]})`);

        } else if (charId === 'sif') {

            // --- BUFF SIF SUPPORT ---
            const wrapper = cb.closest('label');
            const rangeInput = wrapper ? wrapper.querySelector('.buff-range-input') : null;
            const sliderVal = rangeInput ? (parseInt(rangeInput.value) || 100) : 100;

            // Rumus matematika langsung agar hemat memori
            const step = (sliderVal - 100) / 20;
            const defBonus = 38 + (step * 14.4);

            buffBonusDef += defBonus;

            const formattedDef = defBonus.toFixed(1).replace('.0', '');
            activeBuffNames.push(`Sif (Gladius Defense +${formattedDef})`);

        } else if (charId === 'yuna') {

            // --- BUFF SEO YUNA SUPPORT ---
            const wrapper = cb.closest('label');
            const btSelect = wrapper ? wrapper.querySelector('.buff-bt-select') : null;
            
            const yunaBt = btSelect ? parseInt(btSelect.value) : 0;
            const powerBonus = [13, 14, 16, 17, 17, 18][yunaBt] || 13;
            
            totalPowerPct += powerBonus;
            activeBuffNames.push(`Seo Yuna (Power +${powerBonus}%)`);

        } else if (charId === 'sejin') {

            // --- BUFF KANG SEJIN SUPPORT ---
            // Hanya aktifkan penambahan stat power jika karakter yang sedang dibuka adalah WS
            if (activeCharacter.role === 'WS') {
                totalPowerPct += 5;
                activeBuffNames.push(`Kang Sejin (Power +5%)`);
            } else {
                activeBuffNames.push(`Kang Sejin (Not Active - WS only)`);
            }

        } else {

            // --- BUFF STATIS / DEFAULT ---
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
        }
    });

    totalPowerPct += teamBuffBonusPct;

    let ellioBonusPct = 0;
    if (activeCharacter.id === 'ellio') {
        if (currentPushup >= 35 && currentPushup < 90) {
            let maxAbysVal = activeCharacter.skillStats.abysSet ? activeCharacter.skillStats.abysSet[currentBt] : 24;
            let angleProgress = (currentPushup - 35) / (89 - 35);
            ellioBonusPct = parseFloat((angleProgress * maxAbysVal).toFixed(1));
        } else if (currentPushup >= 90) {
            ellioBonusPct = activeCharacter.skillStats.abysSet ? activeCharacter.skillStats.abysSet[currentBt] : 24;
        }
    }

    let irisPowerPct = 0;
    let irisSpinRate = 1.0;
    if (activeCharacter.id === 'iris') {
        const irisSettings = [
            { power: -10, spin: 1.0 },
            { power: 0, spin: 1.0 },
            { power: 8, spin: 1.06 },
            { power: 20, spin: 1.30 }
        ];
        let currentSetting = irisSettings[currentPushup] || irisSettings[1];
        irisPowerPct = currentSetting.power;
        irisSpinRate = currentSetting.spin;

        totalPowerPct += irisPowerPct;
        if (irisSpinRate > finalSpinRate) {
            finalSpinRate = irisSpinRate;
        }
    }

    if (activeCharacter.id === 'jihoon' && activeCharacter.skillStats.miraclepwr) {
        const pwrVal = activeCharacter.skillStats.miraclepwr[currentPushup] || 0;
        const spinVal = activeCharacter.skillStats.miraclespin[currentPushup] || 0;

        totalPowerPct += pwrVal + 20; // +20% dari Problem Solver
        finalSpinRate += spinVal;
    }

    if (activeCharacter.id === 'leon') {
        const leonSettings = [
            { power: -20 },
            { power: 0 },
            { power: 6 },
            { power: 12 },
            { power: 20 }
        ];
        let currentSetting = leonSettings[currentPushup] || leonSettings[1];
        totalPowerPct += currentSetting.power;
    }

    if (activeCharacter.id === 'lucas' && activeCharacter.skillStats.heliospwr) {
        // Ambil angka langsung berdasarkan Breakthrough dan nilai Slider 1 (currentPushup)
        const heliosVal = activeCharacter.skillStats.heliospwr[currentBt]?.[currentPushup] || 0;
        totalPowerPct += heliosVal;
    }

    if (activeCharacter.id === 'nishikawa' && activeCharacter.skillStats.thunderSpike) {
        const thunderStat = activeCharacter.skillStats.thunderSpike[currentBt];
        if (thunderStat) {
            totalPowerPct += thunderStat.power || 0;
            // Karena spin Nishikawa nilainya besar (86), sesuaikan apakah mau ditambah langsung 
            // atau dikali/diset sebagai persentase tambahan spin.
            finalSpinRate += (thunderStat.spin / 100) || 0;
        }
    }

    if (activeCharacter.id === 'minjun') {
        totalPowerPct += activeCharacter.skillStats.blitzpwr[currentBt];
    }

    if (activeCharacter.id === 'raul') {
        totalPowerPct += 40;
    }

    if (activeCharacter.id === 'ryuhyeon' && activeCharacter.skillStats.azureDragon) {
        const energyLevels = [0, 40, 80, 100];
        const currentEnergy = energyLevels[currentPushup] ?? 0;

        const azureStat = activeCharacter.skillStats.azureDragon[currentBt]?.[currentEnergy];

        if (azureStat) {
            totalPowerPct += azureStat.power || 0;
            finalSpinRate += azureStat.spin || 0;
        }
    }

    if (activeCharacter.id === 'sara') {
        // 1. Slider 1 (Speed) -> Stat dari Typhoon (Attack & Jump)
        const currentSpeed = currentPushup || 100;
        const typhoonStat = activeCharacter.skillStats.typhoon?.[currentBt]?.[currentSpeed];

        if (typhoonStat) {
            buffBonusAtk += typhoonStat.attack || 0;
            buffBonusJmp += typhoonStat.jump || 0; // Sesuaikan nama variabel Jump kamu
        }

        // 2. Slider 2 (Target Points) -> Stat dari Razor Wind (Power)
        const targetPoints = currentSlider2Value ?? 0;
        const razorWindStat = activeCharacter.skillStats.razorwind?.[currentBt]?.[targetPoints];

        if (razorWindStat) {
            totalPowerPct += razorWindStat.power || 0; // Sesuaikan nama variabel Power kamu
        }
    }

    if (activeCharacter.id === 'sif' && activeCharacter.skillStats.gladius) {
        const currentAtk = currentPushup || 100;

        const gladiusStat = activeCharacter.skillStats.gladius[currentBt]?.[currentAtk];

        if (gladiusStat) {
            buffBonusDef += gladiusStat.defense || 0;
        }
    }

    if (activeCharacter.id === 'gitae' && activeCharacter.skillStats.metalbloodpwr) {
        const mbPower = activeCharacter.skillStats.metalbloodpwr[currentBt]?.[currentPushup]?.power || 0;
        totalPowerPct += mbPower;

        const forgeStat = activeCharacter.skillStats.forgesteel[currentSlider2Value];
        if (forgeStat) {
            buffBonusAtk += forgeStat.attack || 0;
            buffBonusJmp += forgeStat.jump || 0;
        }
    }

    if (activeCharacter.id === 'jenny') {
        totalPowerPct += 20;
        finalSpinRate += 50;
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
            const tireStat = activeCharacter.skillStats.tire[currentBt][tireState];
            if (tireStat) growthBonus += tireStat[s.key] || 0;
        }

        if (activeCharacter.id === 'oasis' && activeCharacter.skillStats.sunrise) {
            const sunriseStat = activeCharacter.skillStats.sunrise[currentBt]?.[currentPushup];
            if (sunriseStat) growthBonus += sunriseStat[s.key] || 0;
        }

        if (activeCharacter.id === 'raul' && activeCharacter.skillStats.darknight) {
            const darknightStat = activeCharacter.skillStats.darknight[currentBt]?.[currentPushup];
            if (darknightStat) growthBonus += darknightStat[s.key] || 0;
        }

        if (activeCharacter.id === 'roberto' && activeCharacter.skillStats.armorgauge) {
            const armorgaugeStat = activeCharacter.skillStats.armorgauge[currentBt]?.[currentPushup];
            if (armorgaugeStat) growthBonus += armorgaugeStat[s.key] || 0;
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
        if (activeBuffNames.length > 0) descParts.push(activeBuffNames.join(', '));
        if (activeCharacter.id === 'ellio' && s.key === 'attack' && ellioBonusPct > 0) {
            descParts.push(`Abyss Toss (${currentPushup}°): +${ellioBonusPct}%`);
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
            document.getElementById('valBallSpin').innerText = `${finalSpinRate.toFixed(2)} ${finalSpinRate > 1.0 ? '(Enhanced Spin)' : '(Standard)'}`;
        } else {
            multiplierInfoBox.style.display = 'none';
        }
    }

    renderSkillsAndSynergies();
    renderVideoGuides(activeCharacter);
    renderSkins(activeCharacter);
    renderGallery(activeCharacter);
    updateNavButtons();
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
        } else if (activeCharacter && activeCharacter.id === 'leon') {
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

// 1. FUNGSI UTAMA (Hanya bertugas memanggil pemicu)
function renderSkillsAndSynergies() {
    renderSkills();
    renderSynergies();
    renderOverall();
    renderBuffList();
}

// 2. KHUSUS RENDER SKILL
function renderSkills() {
    const skillContainer = document.getElementById('skillBuffList');
    if (!skillContainer) return;

    if (!activeCharacter.skills || activeCharacter.skills.length === 0) {
        skillContainer.innerHTML = `<span class='text-muted small'>Tidak ada skill.</span>`;
        return;
    }

    const skillsHTML = activeCharacter.skills.map(s => {
        const formattedDesc = parseSkillDescription(s, activeCharacter);

        // Tampilkan logo skill jika ada
        const iconHTML = s.icon
            ? `<img src="${s.icon}" alt="${s.name}" class="skill-icon me-2">`
            : '';

        return `
            <li class='mb-3 d-flex align-items-start'>
                ${iconHTML}
                <div>
                    <strong class='text-white'>${s.name}</strong><br>
                    <span class='text-light-custom small'>${formattedDesc}</span>
                </div>
            </li>`;
    }).join('');

    skillContainer.innerHTML = `<ul class='list-unstyled mb-0'>${skillsHTML}</ul>`;
}

// 3. HELPER KHUSUS PEMROSES TEXT/REPLACEMENT DESKRIPSI
function parseSkillDescription(s, char) {
    let desc = s.desc;

    // --- Jenny ---
    if (char.skillStats && char.id === 'jenny') {
        const hgtVal = char.skillStats.icarusHeights[currentBt][currentPushup] || 3.0;
        const atkVal = char.skillStats.icarusAtk[currentBt][currentPushup] || 0;
        const jmpVal = char.skillStats.icarusJmp[currentBt][currentPushup] || 0;

        return desc.replace('ICARUS_HGT', hgtVal)
            .replace('ICARUS_ATK', `+${atkVal}`)
            .replace('ICARUS_JMP', `+${jmpVal}`);
    }

    // --- Dave ---
    if (char.isDave && char.daveSkillStats) {
        const pushupIndex = currentPushup / 50;
        const hgtVal = char.daveSkillStats.height[pushupIndex] || 0;
        desc = desc.replace('DAVE_HGT', hgtVal);

        if (s.name === "Warm-Up") {
            const pushupData = char.daveGrowth[currentPushup] || { atk: 0, def: 0, spd: 0, jmp: 0 };
            desc += `<br><span class='text-warning small'>[Push-up ${currentPushup}] Atk: +${pushupData.atk} | Def: +${pushupData.def} | Spd: +${pushupData.spd} | Jmp: +${pushupData.jmp}</span>`;
        }
        return desc;
    }

    // --- Karakter Lainnya (Logika General) ---
    if (char.skillStats) {
        if (char.skillStats.height) {
            desc = desc.replace('ATIS_HGT', char.skillStats.height[currentBt] || 0);
        }
        if (char.skillStats.chemicalreact) {
            desc = desc.replace('CR_VAL%', char.skillStats.chemicalreact[currentBt] + '%');
        }
        if (char.id === 'claire' && char.skillStats.overdrive) {
            const maxDur = char.skillStats.overdriveDur[currentBt] || 13;
            const durVal = (maxDur * (currentPushup / 100)).toFixed(2);
            desc = desc.replace('CLAIRE_DUR', durVal);
            if (s.name === "Overdrive") {
                const atkStat = char.skillStats.overdrive[currentBt];
                const jmpStat = char.skillStats.overdriveJmp[currentBt];
                desc += `<br><span class='text-warning small'>[BT +${currentBt} | Gauge ${currentPushup}%] Atk: +${atkStat} | Jmp: +${jmpStat} | Dur: +${durVal} sec</span>`;
            }
        }
        if (char.skillStats.drkcrow) {
            desc = desc.replace('darkcrow_VAL%', char.skillStats.drkcrow[currentBt] + '%');
        }
        if (char.id === 'ellio' && char.skillStats.abysSet) {
            let maxAbysVal = char.skillStats.abysSet[currentBt] || 24;
            let ellioBonusPct = 0;
            if (currentPushup >= 35 && currentPushup < 90) {
                let angleProgress = (currentPushup - 35) / (89 - 35);
                ellioBonusPct = parseFloat((angleProgress * maxAbysVal).toFixed(1));
            }
            desc = desc.replace('abysSet_VAL%', `${currentPushup}° <span class='text-warning'><br>(+${ellioBonusPct}% Ball Power)</span>`);
        }
        if (char.skillStats.flowerDef) {
            desc = desc.replace('Flwr_VAL%', char.skillStats.flowerDef[currentBt] + '%')
                .replace('FlwrSpd_VAL%', char.skillStats.flowerSpd[currentBt] + '%');
        }
        if (char.id === 'hari' && s.name.includes("Death Bloom")) {
            const maxAtk = char.skillStats.bloomatk[currentBt] || 0;
            const maxDef = char.skillStats.bloomdef[currentBt] || 0;
            const maxSpd = char.skillStats.bloomspd[currentBt] || 0;
            const maxJump = char.skillStats.bloomjmp[currentBt] || 0;

            const finalAtk = Math.round((maxAtk / 3) * currentPushup);
            const finalDef = Math.round((maxDef / 3) * currentPushup);
            const finalSpd = Math.round((maxSpd / 3) * currentPushup);
            const finalJump = Math.round((maxJump / 3) * currentPushup);

            desc = desc.replace('bloomAtk_VAL', `${finalAtk}`)
                .replace('bloomDef_VAL', `${finalDef}`)
                .replace('bloomSpd_VAL', `${finalSpd}`)
                .replace('bloomJmp_VAL', `${finalJump}`);
            desc += `<br><span class='text-danger small'>[Death Bloom Stack: ${currentPushup} | BT: +${currentBt}]</span>`;
        }

        if (char.id === 'gitae') {
            if (char.skillStats.intimidationstck) {
                desc = desc.replace('intimidationstck_VAL', char.skillStats.intimidationstck[currentBt]);
            }
            if (char.skillStats.metalbloodairbrn) {
                desc = desc.replace('metalbloodairbrn', char.skillStats.metalbloodairbrn[currentBt]);
            }
            if (char.skillStats.metalbloodpwr) {
                let pwr = char.skillStats.metalbloodpwr[currentBt]?.[currentPushup]?.power || 0;
                desc = desc.replace('metalbloodpwr_VAL', `+${pwr}%`);
            }
            if (char.skillStats.ironclaw) {
                desc = desc.replace('ironclaw_VAL', char.skillStats.ironclaw[currentPushup]);
            }
            if (char.skillStats.forgesteel) {
                const currentForge = char.skillStats.forgesteel[currentSlider2Value];
                const atkVal = currentForge ? currentForge.attack : 0;
                const jmpVal = currentForge ? currentForge.jump : 0;

                desc = desc.replace('forgesteelatk_VAL', atkVal)
                    .replace('forgesteeljmp_VAL', jmpVal);
            }
        }
        if (char.skillStats.absltblckdur && char.skillStats.absltblckcldwn) {
            desc = desc.replace('absltblckdur_VAL', char.skillStats.absltblckdur[currentBt])
                .replace('absltblckcldwn_VAL', char.skillStats.absltblckcldwn[currentBt]);
        }
        if (char.skillStats.firtigeratk && char.skillStats.firtigerjmp) {
            desc = desc.replace('tigeratk_VAL', char.skillStats.firtigeratk[currentBt])
                .replace('tigerjmp_VAL', char.skillStats.firtigerjmp[currentBt]);
        }
        if (char.skillStats.imprlordrdur && char.skillStats.imprlordrcldwn) {
            desc = desc.replace('imperialdur_VAL', char.skillStats.imprlordrdur[currentBt])
                .replace('imperialcldwn_VAL', char.skillStats.imprlordrcldwn[currentBt]);
            const irisStatus = [
                "Bad (Power: -10%, Spin: 0%)",
                "Fair (Power: 0%, Spin: 0%)",
                "Good (Power: 8%, Spin: 6%)",
                "Perfect (Power: 20%, Spin: 30%)"
            ];
            desc = desc.replace('compass_VAL', irisStatus[currentPushup] || "Fair (Power: 0%, Spin: 0%)");
        }

        if (char.skillStats.determineAtk && char.skillStats.determineJmp) {
            desc = desc.replace('rageatk_VAL', char.skillStats.determineAtk[currentBt])
                .replace('ragejmp_VAL', char.skillStats.determineJmp[currentBt]);
        }
        if (char.skillStats.miraclepwr && char.skillStats.miraclespin && char.skillStats.miracletoss) {
            desc = desc.replace('miracleatk_VAL', char.skillStats.miraclepwr[currentPushup])
                .replace('miracleball_VAL', char.skillStats.miraclespin[currentPushup])
                .replace('miracleset_VAL', char.skillStats.miracletoss[currentBt]);
        }
        if (char.skillStats.pridepwr) {
            desc = desc.replace('prideatk_VAL', char.skillStats.pridepwr[currentPushup]);
        }
        if (char.skillStats.fortuneturn) {
            desc = desc.replace('fortuneturn_VAL', char.skillStats.fortuneturn[currentPushup]);
        }
        if (char.skillStats.skyball) {
            desc = desc.replace('skyserve_VAL', char.skillStats.skyball[currentBt][currentPushup]);
        }
        if (char.skillStats.sunburstchance && char.skillStats.heliospwr) {
            const sunburstVal = char.skillStats.sunburstchance[currentBt];
            const heliospwrVal = char.skillStats.heliospwr[currentBt][currentPushup];
            const flareatkVal = char.skillStats.flareatk[currentBt];
            const flaredefVal = char.skillStats.flaredef[currentBt];
            const flarespdVal = char.skillStats.flarespd[currentBt];
            const flarejmpVal = char.skillStats.flarejmp[currentBt];
            const flaredurVal = char.skillStats.flaredur[currentBt];
            const flarecldwnVAL = char.skillStats.flarecldwn[currentBt];
            let flareDebuffText = "0";

            if (char.id === 'lucas' && char.skillStats.daveGrowth) {
                const growthData = char.skillStats.daveGrowth[currentSlider2Value] || char.skillStats.daveGrowth[0];
                flareDebuffText = `Atk: -${growthData.atk} | Def: -${growthData.def} | Spd: -${growthData.spd} | Jmp: -${growthData.jmp}`;
            }

            desc = desc.replace('flaredur_VAL', flaredurVal).replace('flarecldwn_VAL', flarecldwnVAL)
                .replace('sunburst_VAL', sunburstVal).replace('heliospwr_VAL', heliospwrVal)
                .replace('flareatk_VAL', flareatkVal).replace('flaredef_VAL', flaredefVal)
                .replace('flarespd_VAL', flarespdVal).replace('flarejmp_VAL', flarejmpVal)
                .replace('flaredebuff_VAL', flareDebuffText);
        }
        if (char.skillStats.tire) {
            const tireState = currentPushup === 1 ? 'active' : 'inactive';
            const tireStat = char.skillStats.tire[currentBt]?.[tireState];
            if (tireStat) {
                desc = desc.replace('tire_VAL', `Attack: ${tireStat.attack ?? 0}, Speed: ${tireStat.speed ?? 0}, Jump: ${tireStat.jump ?? 0}`);
            }
        }
        if (char.skillStats.blitzpwr && char.skillStats.blitzspin) {
            desc = desc.replace('blitzpwr_VAL', char.skillStats.blitzpwr[currentBt])
                .replace('blitzspin_VAL', char.skillStats.blitzspin[currentBt]);
        }
        if (char.skillStats.aegisdur && char.skillStats.smiteatk) {
            desc = desc.replace('aegisdur_VAL', char.skillStats.aegisdur[currentBt])
                .replace('aegiscldwn_VAL', char.skillStats.aegiscldwn[currentBt])
                .replace('aegisdef_VAL', char.skillStats.aegisdef[currentBt])
                .replace('aegisrange_VAL', char.skillStats.aegisrange[currentBt])
                .replace('smiteatk_VAL', char.skillStats.smiteatk[currentBt])
                .replace('smitedur_VAL', char.skillStats.smitedur[currentBt]);
        }
        if (char.id === 'nishikawa') {
            if (char.skillStats.thunderSpike) {
                const tsStat = char.skillStats.thunderSpike[currentBt];
                if (tsStat) desc = desc.replace('TS_VAL', tsStat.power);
            }
            if (char.skillStats.highToss) {
                desc = desc.replace('HT_VAL', char.skillStats.highToss[currentBt] || 0);
            }
        }
        if (char.skillStats.sunrise) {
            const sunriseStat = char.skillStats.sunrise[currentBt]?.[currentPushup];
            if (sunriseStat) {
                const extra = currentPushup === 14 ? 2 : 0;
                desc = desc.replace('sunrise_VAL', `Attack: ${(sunriseStat.attack ?? 0) + extra}, Speed: ${(sunriseStat.speed ?? 0) + extra}, Jump: ${(sunriseStat.jump ?? 0) + extra}`);
            }
        }
        if (char.skillStats.darknight) {
            const darknightStat = char.skillStats.darknight[currentBt]?.[currentPushup];
            if (darknightStat) {
                const extra = currentPushup === 10;
                desc = desc.replace('darknight_VAL', `Attack: +${(darknightStat.attack ?? 0) + extra}, Speed: +${(darknightStat.speed ?? 0) + extra}, Jump: +${(darknightStat.jump ?? 0) + extra}`);
            }
        }
        if (char.skillStats.armorgauge && char.skillStats.gaugeblock) {
            const armorgaugeStat = char.skillStats.armorgauge[currentBt]?.[currentPushup];
            if (armorgaugeStat) {
                const extra = currentPushup === 10;
                desc = desc.replace('armorgauge_VAL', `Attack: +${(armorgaugeStat.attack ?? 0) + extra}, Speed: +${(armorgaugeStat.speed ?? 0) + extra}, Jump: +${(armorgaugeStat.jump ?? 0) + extra}`);
            }
            desc = desc.replace('gaugeblock_VAL', char.skillStats.gaugeblock[currentBt]);
        }
        if (char.id === 'ryuhyeon' && char.skillStats.azureDragon) {
            const energyLevels = [0, 40, 80, 100];
            const currentEnergy = energyLevels[currentPushup] ?? 0;
            const azureStat = char.skillStats.azureDragon[currentBt]?.[currentEnergy];

            if (azureStat) {
                desc = desc.replace('azuredragon_VAL', `Power: +${azureStat.power ?? 0}%, Spin: +${azureStat.spin ?? 0}`);
            }
            desc = desc.replace('basecharge_VAL', char.skillStats.basecharge[currentBt])
                .replace('rechargedragon_VAL', char.skillStats.rechargedragon[currentBt])
                .replace('soaringair_VAL', char.skillStats.soaringair[currentBt]);
        }
        if (char.id === 'sara' && char.skillStats.typhoondur) {
            desc = desc.replace('typhoondur_VAL', char.skillStats.typhoondur[currentBt])
                .replace('typhooncldwn_VAL', char.skillStats.typhooncldwn[currentBt]);

            const currentSpeed = currentPushup || 100;
            const typhoonStat = char.skillStats.typhoon[currentBt]?.[currentSpeed];
            if (typhoonStat) {
                desc = desc.replace('typhoon_VAL', `Attack: +${typhoonStat.attack ?? 0}, Jump: +${typhoonStat.jump ?? 0}`);
            }

            desc = desc.replace('gustprep_VAL', char.skillStats.gustprep[currentBt])
                .replace('gustmovement_VAL', char.skillStats.gustmovement[currentBt])
                .replace('calmstorm_VAL', char.skillStats.calmstorm[currentBt])
                .replace('calmstormdur_VAL', char.skillStats.calmstormdur[currentBt]);

            const targetPoints = currentSlider2Value ?? 0;
            const razorWindStat = char.skillStats.razorwind?.[currentBt]?.[targetPoints];
            if (razorWindStat) {
                desc = desc.replace('razorwind_VAL', `Ball Power : +${razorWindStat.power}%`);
            }
        }
        if (char.skillStats.criticaltoss) {
            desc = desc.replace('criticaltoss_VAL', char.skillStats.criticaltoss[currentBt]);
        }
        if (char.skillStats.highlightdur && char.skillStats.highlightcldwn) {
            desc = desc.replace('highlightdur_VAL', char.skillStats.highlightdur[currentBt])
                .replace('highlightcldwn_VAL', char.skillStats.highlightcldwn[currentBt]);
        }
        if (char.skillStats.fishbundur && char.skillStats.fishbuncldwn) {
            desc = desc.replace('fishbundur_VAL', char.skillStats.fishbundur[currentBt])
                .replace('fishbuncldwn_VAL', char.skillStats.fishbuncldwn[currentBt]);
        }
        if (char.skillStats.outsyset) {
            desc = desc.replace('outsyset_VAL', char.skillStats.outsyset[currentBt]);
        }
        if (char.skillStats.suprisecldwn) {
            desc = desc.replace('suprisecldwn_VAL', char.skillStats.suprisecldwn[currentBt]);
        }
        if (char.id === 'sif' && char.skillStats.gladius) {
            const currentAtk = currentPushup || 100;
            const gladiusStat = char.skillStats.gladius?.[currentBt]?.[currentAtk];
            const gladiusVal = gladiusStat ? `+${gladiusStat.defense}` : "+0";

            desc = desc.replace('gladius_VAL', gladiusVal)
                .replace('gladiusdur_VAL', char.skillStats.gladiusdur?.[currentBt] ?? 0)
                .replace('gladiuscldwn_VAL', char.skillStats.gladiuscldwn?.[currentBt] ?? 0);
        }
        if (char.skillStats.hope) {
            desc = desc.replace('hope_VAL', char.skillStats.hope[currentBt]);
        }
        if (char.skillStats.stableset) {
            desc = desc.replace('stableset_VAL', char.skillStats.stableset[currentBt]);
        }
        if (char.skillStats.curestamina) {
            desc = desc.replace('curestamina_VAL', char.skillStats.curestamina[currentBt]);
        }
        if (char.skillStats.lockjump && char.skillStats.lockspeed) {
            desc = desc.replace('lockjump_VAL', char.skillStats.lockjump[currentBt])
                .replace('lockspeed_VAL', char.skillStats.lockspeed[currentBt]);
        }
        if (char.skillStats.sharpfeint) {
            desc = desc.replace('sharpfeint_VAL', char.skillStats.sharpfeint[currentBt]);
        }
        if (char.skillStats.cementarydef && char.skillStats.cementaryspeed && char.skillStats.paindur && char.skillStats.painwait && char.skillStats.painteamdef && char.skillStats.painteamspd && char.skillStats.painselfatk) {
            desc = desc.replace('cementarydef_VAL', char.skillStats.cementarydef[currentBt])
                .replace('cementaryspeed_VAL', char.skillStats.cementaryspeed[currentBt])
                .replace('paindur_VAL', char.skillStats.paindur[currentBt])
                .replace('painwait_VAL', char.skillStats.painwait[currentBt])
                .replace('painteamdef_VAL', char.skillStats.painteamdef[currentBt])
                .replace('painteamspd_VAL', char.skillStats.painteamspd[currentBt])
                .replace('painselfatk_VAL', char.skillStats.painselfatk[currentBt])
        }
        if (char.skillStats.spotdur && char.skillStats.spotwait) {
            desc = desc.replace('spotdur_VAL', char.skillStats.spotdur[currentBt])
                .replace('spotwait_VAL', char.skillStats.spotwait[currentBt]);
        }
    }

    return desc;
}

// 4. KHUSUS RENDER SYNERGY
function renderSynergies() {
    const synergyContainer = document.getElementById('synergyBuffList');
    if (!synergyContainer) return;

    if (!activeCharacter.synergies || activeCharacter.synergies.length === 0) {
        synergyContainer.innerHTML = `<span class='text-muted small'>Has no synergies</span>`;
        return;
    }

    const synergyHTML = activeCharacter.synergies.map(syn => {
        // Loop foto partner + teks nama overlay
        const partnersHTML = syn.partners ? syn.partners.map(p => `
            <div class="synergy-avatar-card">
                <img src="${p.icon}" alt="${p.name}" class="synergy-avatar-img">
                <div class="synergy-avatar-name">${p.name}</div>
            </div>
        `).join('') : '';

        return `
            <div class="synergy-card mb-3">
                <div class="synergy-header">
                    <strong>${syn.name}</strong>
                </div>
                <div class="synergy-body">
                    <div class="synergy-partners">
                        ${partnersHTML}
                    </div>
                    <div class="synergy-desc">
                        ${syn.desc}
                    </div>
                </div>
            </div>`;
    }).join('');

    synergyContainer.innerHTML = synergyHTML;
}

// 5. KHUSUS RENDER OVERALL NOTES
function renderOverall() {
    const overallContainer = document.getElementById('overallBuffContent');
    if (!overallContainer) return;

    if (Array.isArray(activeCharacter.overall)) {
        overallContainer.innerHTML = `<ul class='mb-0 text-sm ps-3'>` +
            activeCharacter.overall.map(ov => `<li class='mb-1 text-light-custom'>${ov}</li>`).join('') +
            `</ul>`;
    } else if (activeCharacter.overall) {
        overallContainer.innerHTML = `<div class='text-light-custom small'>${activeCharacter.overall}</div>`;
    } else {
        overallContainer.innerHTML = '';
    }
}

// 6. KHUSUS RENDER BUFF LIST
function renderBuffList() {
    const bufflist = document.getElementById('overallBuffList');
    if (!bufflist) return;

    if (activeCharacter.bufflist && activeCharacter.bufflist.length > 0) {
        bufflist.innerHTML = `<ul class='mb-0 text-sm ps-3'>` +
            activeCharacter.bufflist.map(buff => `<li class='mb-1 text-light-custom'>${buff}</li>`).join('') +
            `</ul>`;
    } else {
        bufflist.innerHTML = `<span class='text-muted small'>There are no additional buffs.</span>`;
    }
}

// 7. Render Video Guide
function renderVideoGuides(character) {
    const container = document.getElementById("guideVideoContainer");
    if (!container) return;

    // 1. Cek apakah properti 'videos' ada dan tidak kosong
    if (!character.videos || character.videos.length === 0) {
        container.innerHTML = `<p class="text-light small mb-0">There is no video guide for this character yet.</p>`;
        return;
    }

    // 2. Loop array character.videos dan ambil v.embedCode
    const videoHTML = character.videos.map(v => `
    <div class="video-item mb-3">
        <!-- Wrapper rasio responsif -->
        <div class="ratio ratio-16x9 mb-2 rounded overflow-hidden border border-secondary">
        ${v.embedCode}
        </div>
        <p class="text-light-custom small mb-0 big">
        Original video by: 
        <a href="${v.creatorUrl}" target="_blank" rel="noopener noreferrer" class="text-warning text-decoration-none fw-semibold">
            ${v.creatorName}
        </a>
        </p>
    </div>
    `).join('');

    container.innerHTML = videoHTML;
}

function renderSkins(character) {
    const container = document.getElementById("skinsContainer");
    if (!container) return;

    // Fallback jika tidak ada data skins
    const skinList = (character.skins && character.skins.length > 0)
        ? character.skins
        : [{ name: "Default", image: character.image, obtain: "Base Character" }];

    const html = skinList.map(skin => `
        <div class="col-6 col-sm-4 col-md-3">
            <div class="skin-item-card text-center h-100 d-flex flex-column justify-content-between">
                <!-- Area Gambar -->
                <div class="skin-img-wrapper mb-2">
                    <img src="${skin.image}" alt="${skin.name}" class="skin-img rounded">
                </div>
                
                <!-- Area Teks (Di Tengah & Di Bawah Gambar) -->
                <div class="skin-info w-100">
                    <p class="fw-bold text-light mb-0 small">${skin.name}</p>
                    <p class="text-secondary text-extra-small mb-0">(${skin.obtain || 'Default'})</p>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

function renderGallery(character) {
    const container = document.getElementById("galleryContainer");
    if (!container) return;

    // Jika karakter tidak punya array gallery atau datanya kosong
    if (!character.gallery || character.gallery.length === 0) {
        container.innerHTML = `<p class="text-light small mb-0">There are no additional official illustrations for this character yet.</p>`;
        return;
    }

    const html = character.gallery.map(item => `
        <div class="col-6 col-sm-4 col-md-3">
            <div class="skin-item-card text-center h-100 d-flex flex-column justify-content-between">
                <div class="skin-img-wrapper mb-2">
                    <img src="${item.image}" alt="${item.title}" class="skin-img rounded">
                </div>
                <div class="skin-info w-100">
                    <p class="fw-bold text-light mb-0 small">${item.title}</p>
                    ${item.caption ? `<p class="text-secondary text-extra-small mb-0">(${item.caption})</p>` : ''}
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

function filterCharacters(position, btnElement) {
    // Simpan filter yang sedang aktif
    currentCharacterFilter = position;

    // Update tampilan tombol
    document
        .querySelectorAll('.d-flex.justify-content-center.gap-2.mb-4 button')
        .forEach(btn => {
            btn.classList.remove('btn-warning', 'active');
            btn.classList.add('btn-outline-warning');
        });

    btnElement.classList.remove('btn-outline-warning');
    btnElement.classList.add('btn-warning', 'active');

    // Ambil search yang sedang aktif
    const searchInput = document.getElementById('characterSearchInput');
    const query = searchInput
        ? searchInput.value.toLowerCase().trim()
        : '';

    // Render berdasarkan filter + search
    renderCharacterList(position, query);
}

// Fungsi untuk cek posisi karakter & atur status tombol Prev/Next
function updateNavButtons() {
    const btnPrev = document.getElementById('btnPrevChar');
    const btnNext = document.getElementById('btnNextChar');
    if (!btnPrev || !btnNext || !activeCharacter) return;

    // Pakai data array karaktermu (charactersData atau characters)
    const charList = typeof charactersData !== 'undefined' ? charactersData : characters;
    const sortedChars = [...charList].sort((a, b) => a.name.localeCompare(b.name));

    const currentIndex = sortedChars.findIndex(c => c.id === activeCharacter.id);

    // Jika di Atis (Paling Awal / Index 0) -> Mati/Fade tombol Prev
    if (currentIndex <= 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('opacity-50'); // Efek fade dari Bootstrap
    } else {
        btnPrev.disabled = false;
        btnPrev.classList.remove('opacity-50');
    }

    // Jika di Karakter Paling Akhir -> Mati/Fade tombol Next
    if (currentIndex >= sortedChars.length - 1) {
        btnNext.disabled = true;
        btnNext.classList.add('opacity-50');
    } else {
        btnNext.disabled = false;
        btnNext.classList.remove('opacity-50');
    }
}

let currentCharacterFilter = 'ALL';
// Fungsi Klik Tombol Prev / Next
function navigateCharacter(direction) {
    const charList = charactersData;

    if (!charList || charList.length === 0 || !activeCharacter) return;

    // Urutkan karakter A-Z
    const sortedChars = [...charList].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    // Cari karakter yang sedang aktif
    const currentIndex = sortedChars.findIndex(
        c => c.id === activeCharacter.id
    );

    if (currentIndex === -1) return;

    // Tentukan karakter berikutnya/sebelumnya
    const newIndex = currentIndex + direction;

    // Jangan keluar dari array
    if (newIndex < 0 || newIndex >= sortedChars.length) return;

    // PENTING:
    // Gunakan selectCharacter agar SEMUA data karakter ikut di-refresh
    selectCharacter(sortedChars[newIndex].id);
}

function searchCharacters() {
    const searchInput = document.getElementById('characterSearchInput');

    if (!searchInput) return;

    const query = searchInput.value.toLowerCase().trim();

    // Gunakan filter yang sedang aktif
    renderCharacterList(currentCharacterFilter, query);
}

function renderCharacterSearchResults(data) {
    const grid = document.getElementById('characterGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center text-light py-4">
                Tidak ada karakter yang ditemukan.
            </div>
        `;
        return;
    }

    data.forEach(char => {
        grid.innerHTML += `
            <div class="col-md-4 col-sm-6">
                <div class="card card-custom p-4 text-center character-card h-100 shadow-sm"
                     onclick="selectCharacter('${char.id}')"
                     style="cursor: pointer;">

                    <div class="char-img-wrapper mb-3">
                        <img src="${char.image}"
                             alt="${char.name}"
                             class="img-fluid"
                             style="max-height: 150px; object-fit: contain;">
                    </div>

                    <h4 class="text-white mb-1 fw-bold">
                        ${char.name}
                    </h4>

                    <p class="text-warning fw-semibold mb-3">
                        ${char.position}
                    </p>

                    <p class="small text-light-custom mb-0">
                        Click to view stat and breakthrough details.
                    </p>

                </div>
            </div>
        `;
    });
}

renderCharacterList('ALL');