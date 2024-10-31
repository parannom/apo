const scenes = {
    "start": {
        "text": "시카고는 좀비들로 가득 차 있습니다. 지미는 샌드크릭으로 피신한 아내 린다를 찾아야 합니다. 어떻게 할까요?",
        "choices": [
            { "text": "도시를 빠져나갈 계획을 세운다.", "nextScene": "planEscape1" },
            { "text": "린다에게 연락을 시도한다.", "nextScene": "callLinda1" },
            { "text": "근처에 생존자가 있는지 찾아본다.", "nextScene": "searchSurvivors1" }
        ]
    },

    // 도시 빠져나가기 분기
    "planEscape1": {
        "text": "지미는 도시를 빠져나가기 위한 계획을 세웁니다. 무엇을 우선 챙길까요?",
        "choices": [
            { "text": "무기와 방어구를 찾는다.", "nextScene": "findWeapons1" },
            { "text": "식량과 의약품을 모은다.", "nextScene": "gatherSupplies1" }
        ]
    },
    "findWeapons1": {
        "text": "지미는 무기를 찾기 위해 경찰서를 탐색합니다.",
        "choices": [
            { "text": "조용히 잠입한다.", "nextScene": "stealthPoliceStation1" },
            { "text": "정면 돌파한다.", "nextScene": "attackPoliceStation1" }
        ]
    },
    "stealthPoliceStation1": {
        "text": "잠입에 성공해 무기를 확보했습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "샌드크릭으로 바로 출발한다.", "nextScene": "startJourney1" },
            { "text": "식량과 의약품을 추가로 수집한다.", "nextScene": "gatherSupplies2" }
        ]
    },
    "attackPoliceStation1": {
        "text": "정면 돌파 중 부상을 입었지만 무기를 확보했습니다. 응급 처치를 할까요?",
        "choices": [
            { "text": "응급 처치를 시도한다.", "nextScene": "doFirstAid1" },
            { "text": "부상에도 불구하고 출발한다.", "nextScene": "startJourney2" }
        ]
    },
    "doFirstAid1": {
        "text": "응급 처치를 성공적으로 마치고 무기를 챙겼습니다.",
        "choices": [
            { "text": "바로 샌드크릭으로 출발한다.", "nextScene": "startJourney3" },
            { "text": "식량과 의약품을 추가로 수집한다.", "nextScene": "gatherSupplies2" }
        ]
    },
    "gatherSupplies1": {
        "text": "식량과 의약품을 수집하기 위해 슈퍼마켓으로 향합니다. 약탈자들이 있을 수 있습니다.",
        "choices": [
            { "text": "약탈자들과 협상한다.", "nextScene": "negotiateLooters1" },
            { "text": "몰래 들어가 물품을 챙긴다.", "nextScene": "sneakIntoSupermarket1" }
        ]
    },
    "negotiateLooters1": {
        "text": "약탈자들과의 협상이 실패해 위험한 상황이 되었습니다.",
        "choices": [
            { "text": "싸운다.", "nextScene": "fightLooters1" },
            { "text": "도망친다.", "nextScene": "escapeFromLooters1" }
        ]
    },
    "fightLooters1": {
        "text": "지미는 약탈자들과의 싸움에서 승리했지만 약간의 부상을 입었습니다.",
        "choices": [
            { "text": "응급 처치를 시도한다.", "nextScene": "doFirstAid2" },
            { "text": "부상에도 불구하고 이동한다.", "nextScene": "startJourney2" }
        ]
    },
    "doFirstAid2": {
        "text": "응급 처치를 성공적으로 마치고 식량과 의약품을 챙겼습니다.",
        "choices": [
            { "text": "바로 샌드크릭으로 출발한다.", "nextScene": "startJourney4" },
            { "text": "린다에게 연락을 시도한다.", "nextScene": "callLinda1" },
            { "text": "근처에 생존자가 있는지 찾아본다.", "nextScene": "searchSurvivors1" }
        ]
    },
    "sneakIntoSupermarket1": {
        "text": "몰래 들어가 식량을 확보했습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "바로 출발한다.", "nextScene": "startJourney5" },
            { "text": "무기와 방어구를 찾으러 경찰서로 향한다.", "nextScene": "findWeapons2" }
        ]
    },
    "findWeapons2": {
        "text": "지미는 무기를 찾기 위해 경찰서로 향합니다.",
        "choices": [
            { "text": "조용히 잠입한다.", "nextScene": "stealthPoliceStation2" },
            { "text": "정면 돌파한다.", "nextScene": "attackPoliceStation2" }
        ]
    },
    "stealthPoliceStation2": {
        "text": "잠입에 성공하여 무기를 확보했습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "샌드크릭으로 출발한다.", "nextScene": "startJourney5" }
        ]
    },
    "attackPoliceStation2": {
        "text": "정면 돌파 중 부상을 입었습니다. 어떻게 할까요?",
        "choices": [
            { "text": "응급 처치를 시도한다.", "nextScene": "doFirstAid3" },
            { "text": "부상에도 불구하고 출발한다.", "nextScene": "startJourney2" }
        ]
    },
    "doFirstAid3": {
        "text": "응급 처치를 성공적으로 마치고 무기를 확보했습니다.",
        "choices": [
            { "text": "샌드크릭으로 출발한다.", "nextScene": "startJourney3" }
        ]
    },
    "escapeFromLooters1": {
        "text": "지미는 물품을 얻지 못하고 슈퍼마켓을 빠져나옵니다.",
        "choices": [
            { "text": "도시를 떠난다.", "nextScene": "startJourney6" },
            { "text": "다른 곳에서 보급품을 찾아본다.", "nextScene": "gatherSupplies3" }
        ]
    },
    "gatherSupplies2": {
        "text": "슈퍼마켓에서 추가 식량과 의약품을 수집했습니다. 다음으로 어떻게 할까요?",
        "choices": [
            { "text": "무기를 찾아 경찰서로 향한다.", "nextScene": "findWeapons1" },
            { "text": "바로 샌드크릭으로 출발한다.", "nextScene": "startJourney4" }
        ]
    },
    "gatherSupplies3": {
        "text": "지미는 다른 곳에서 보급품을 찾기 위해 탐색합니다. 어디로 갈까요?",
        "choices": [
            { "text": "근처 주택가를 수색한다.", "nextScene": "searchResidentialArea1" },
            { "text": "약국을 찾아본다.", "nextScene": "searchPharmacy1" }
        ]
    },
    "searchResidentialArea1": {
        "text": "주택가에서 식량을 조금 찾았지만, 좀비 무리에 둘러싸였습니다. 어떻게 할까요?",
        "choices": [
            { "text": "싸운다.", "nextScene": "fightZombies1" },
            { "text": "도망친다.", "nextScene": "startJourney6" }
        ]
    },
    "fightZombies1": {
        "text": "무기가 없어 싸움에서 패배하고 말았습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "searchPharmacy1": {
        "text": "약국에서 의약품을 찾았지만, 좀비에게 물렸습니다.",
        "choices": [
            { "text": "의약품으로 응급 처치를 시도한다.", "nextScene": "doFirstAid4" },
            { "text": "도시를 떠난다.", "nextScene": "startJourney6" }
        ]
    },
    "doFirstAid4": {
        "text": "응급 처치를 시도했지만 감염을 막을 수 없었습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },

    // 린다에게 연락 시도하기 분기
    "callLinda1": {
        "text": "전기가 끊기고 통신망이 불안정하여 연락이 쉽지 않습니다. 이제 어떻게 할까요?",
        "choices": [
            { "text": "통신 장비를 찾아본다.", "nextScene": "searchForCommDevice1" },
            { "text": "린다가 남긴 흔적을 찾는다.", "nextScene": "findLindaClues1" }
        ]
    },
    "findLindaClues1": {
        "text": "린다의 흔적을 찾을 수가 없습니다.",
        "choices": [
            { "text": "통신 장비를 찾아본다.", "nextScene": "searchForCommDevice1" }
        ]
    },
    "searchForCommDevice1": {
        "text": "지미는 통신 장비가 있을 가능성이 높은 장소를 떠올립니다. 어디로 갈까요?",
        "choices": [
            { "text": "군사기지로 간다.", "nextScene": "searchMilitaryBase1" },
            { "text": "방송국으로 간다.", "nextScene": "searchBroadcastStation1" }
        ]
    },
    "searchMilitaryBase1": {
        "text": "군사기지로 갔지만 경비가 삼엄합니다. 접근 방법을 선택하세요.",
        "choices": [
            { "text": "군인들과 협상한다.", "nextScene": "negotiateWithMilitary1" },
            { "text": "몰래 잠입한다.", "nextScene": "sneakIntoMilitaryBase1" }
        ]
    },
    "negotiateWithMilitary1": {
        "text": "군인들이 협상을 수락하여 통신 장비를 사용할 수 있게 되었습니다.",
        "choices": [
            { "text": "린다에게 연락을 시도한다.", "nextScene": "attemptContactLinda1" }
        ]
    },
    "sneakIntoMilitaryBase1": {
        "text": "잠입을 시도했지만 발각되었습니다. 어떻게 할까요?",
        "choices": [
            { "text": "싸운다.", "nextScene": "fightMilitary1" },
            { "text": "도망친다.", "nextScene": "escapeMilitaryBase1" }
        ]
    },
    "fightMilitary1": {
        "text": "군인들과의 싸움에서 지미는 중상을 입고 체포됩니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "escapeMilitaryBase1": {
        "text": "군사기지에서 도망치는 데 성공했지만 통신 장비는 확보하지 못했습니다.",
        "choices": [
            { "text": "다른 통신 장비를 찾는다.", "nextScene": "searchBroadcastStation1" },
            { "text": "바로 샌드크릭으로 향한다.", "nextScene": "startJourney6" }
        ]
    },
    "searchBroadcastStation1": {
        "text": "방송국에 도착했지만 문이 잠겨있습니다. 어떻게 할까요?",
        "choices": [
            { "text": "문을 부순다.", "nextScene": "breakIntoStation1" },
            { "text": "다른 경로를 찾는다.", "nextScene": "findAlternateRoute1" }
        ]
    },
    "breakIntoStation1": {
        "text": "문을 부수고 들어갔으나 경보가 울렸습니다. 빨리 통신 장비를 사용해야 합니다.",
        "choices": [
            { "text": "린다에게 급히 연락을 시도한다.", "nextScene": "attemptContactLinda2" },
            { "text": "경보를 무시하고 계속 진행한다.", "nextScene": "ignoreAlarm1" }
        ]
    },
    "attemptContactLinda1": {
        "text": "통신이 일시적으로 연결되었으나 린다는 전화를 받지 않습니다.",
        "choices": [
            { "text": "린다에게 메시지를 남긴다.", "nextScene": "leaveMessageForLinda1" },
            { "text": "다시 연락을 시도한다.", "nextScene": "attemptContactLinda3" }
        ]
    },
    "attemptContactLinda2": {
        "text": "급하게 연락을 시도했지만 통신이 연결되지 않습니다. 경보 소리에 좀비들이 몰려옵니다.",
        "choices": [
            { "text": "도망친다.", "nextScene": "startJourney7" },
            { "text": "싸운다.", "nextScene": "fightZombiesInStation1" }
        ]
    },
    "fightZombiesInStation1": {
        "text": "좀비들과의 싸움에서 지미는 목숨을 잃습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },
    "ignoreAlarm1": {
        "text": "경보를 무시하고 통신 장비를 사용하려 했지만, 좀비들이 몰려옵니다.",
        "choices": [
            { "text": "도망친다.", "nextScene": "startJourney7" },
            { "text": "싸운다.", "nextScene": "fightZombiesInStation1" }
        ]
    },
    "attemptContactLinda3": {
        "text": "더 이상 통신 장비가 작동하지 않습니다.",
        "choices": [
            { "text": "장비를 다시 점검하고 연락을 시도한다.", "nextScene": "attemptContactLinda1" },
            { "text": "연락을 포기하고 샌드크릭으로 출발한다.", "nextScene": "startJourney8" }
        ]
    },
    "leaveMessageForLinda1": {
        "text": "린다에게 메시지를 남기고 도시를 빠져나갈 준비를 합니다.",
        "choices": [
            { "text": "샌드크릭으로 출발한다.", "nextScene": "startJourney8" }
        ]
    },
    "findAlternateRoute1": {
        "text": "다른 경로를 찾다가 방송국의 뒷문을 발견했습니다.",
        "choices": [
            { "text": "뒷문으로 잠입한다.", "nextScene": "attemptContactLinda1" },
            { "text": "경비가 많아 포기하고 떠난다.", "nextScene": "startJourney7" }
        ]
    },

    // 생존자 찾기 분기
    "searchSurvivors1": {
        "text": "지미는 주변에서 생존자를 찾기 시작합니다. 어두운 골목에서 희미한 빛이 보입니다. 어떻게 할까요?",
        "choices": [
            { "text": "빛이 나는 곳으로 간다.", "nextScene": "helpVoice1" },
            { "text": "위험할 수 있으니 무시한다.", "nextScene": "planEscape1" }
        ]
    },
    "helpVoice1": {
        "text": "주변에서 들리는 도움 요청 소리에 따라가 생존자를 발견했습니다. 어떻게 할까요?",
        "choices": [
            { "text": "부상자를 도와준다.", "nextScene": "assistSurvivor1" },
            { "text": "부상자를 데리고 간다.", "nextScene": "takeSurvivor1" }
        ]
    },
    "assistSurvivor1": {
        "text": "생존자는 지미에게 감사를 표하며 도움을 제안합니다.",
        "choices": [
            { "text": "생존자와 함께 여정을 이어간다.", "nextScene": "becomeAlly1" },
            { "text": "혼자 이동한다.", "nextScene": "startJourney11" }
        ]
    },
    "takeSurvivor1": {
        "text": "부상당한 생존자를 데리고 함께 이동하기로 했습니다.",
        "choices": [
            { "text": "샌드크릭으로 함께 이동한다.", "nextScene": "startJourney10" },
            { "text": "주변을 더 탐색한다.", "nextScene": "searchMoreSurvivors1" }
        ]
    },
    "becomeAlly1": {
        "text": "생존자와 함께 팀을 이루어 여정을 시작합니다.",
        "choices": [
            { "text": "샌드크릭으로 함께 이동한다.", "nextScene": "startJourney9" },
            { "text": "더 많은 생존자를 찾아본다.", "nextScene": "searchMoreSurvivors1" }
        ]
    },
    "searchMoreSurvivors1": {
        "text": "새로운 생존자 그룹을 만나 함께 샌드크릭으로 떠나기로 합니다.",
        "choices": [
            { "text": "함께 샌드크릭으로 떠난다.", "nextScene": "startJourney12" },
            { "text": "안전한 장소로 이동한다.", "nextScene": "findSafeSpot1" }
        ]
    },
    "findSafeSpot1": {
        "text": "생존자들과 함께 안전한 은신처를 찾았습니다. 그러나 린다를 찾으러 가야 합니다.",
        "choices": [
            { "text": "샌드크릭으로 출발한다.", "nextScene": "startJourney13" },
            { "text": "은신처에 머무른다.", "nextScene": "stayInShelter1" }
        ]
    },
    "stayInShelter1": {
        "text": "지미는 은신처에 머무르며 다른 생존자들과 지냅니다. 하지만 린다에 대한 소식은 들을 수 없습니다.",
        "choices": [
            { "text": "린다를 찾으러 떠난다.", "nextScene": "startJourney14" },
            { "text": "은신처에 남는다.", "nextScene": "endStayShelter1" }
        ]
    },
    "endStayShelter1": {
        "text": "지미는 은신처에 남아 생존자들과 새로운 삶을 시작합니다. 그러나 린다에 대한 미련은 남습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ]
    },

    // 엔딩들
    "startJourney1": {
        "text": "식량이 부족하여 결국 지미는 탈진해 쓰러집니다. 여정이 여기서 끝납니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 신중하고 계획적인 성격입니다. 무모한 도전을 피하고 항상 대비를 우선시합니다.",
        "image": "data/1.png"
    },
    "startJourney2": {
        "text": "과다출혈로 인해 지미는 샌드크릭에 도착하지 못하고 쓰러집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 용감하고 목표 지향적인 성격입니다. 어려움이 있어도 목표를 향해 끝까지 나아가는 강한 의지를 지니고 있습니다.",
        "image": "data/2.png"
    },
    "startJourney3": {
        "text": "보급품이 부족하여 지미는 결국 탈진해 쓰러집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 대담하고 모험을 즐기는 성격입니다. 언제나 앞을 향해 나아가지만, 가끔은 준비 부족이 발목을 잡을 수 있습니다.",
        "image": "data/3.png"
    },
    "startJourney4": {
        "text": "샌드크릭으로 가는 여정이 너무 멀게 느껴집니다. 린다는 이미 죽었을지도 모릅니다. 지미는 깊은 절망에 빠집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 감정이 깊고 연민이 강한 성격입니다. 어려운 상황에서도 사랑하는 사람을 위한 헌신을 멈추지 않습니다.",
        "image": "data/4.png"
    },
    "startJourney5": {
        "text": "무기가 없는 상태에서 좀비와 마주친 지미는 싸우다 결국 목숨을 잃습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 결단력 있고 강인한 성격입니다. 어려움 속에서도 포기하지 않고 위험에 맞서 싸우는 용기를 가지고 있습니다.",
        "image": "data/5.png"
    },
    "startJourney6": {
        "text": "지미는 보급품 없이 도시를 떠납니다. 길에서 탈진하여 쓰러집니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 신속한 결정을 내리지만 때로는 준비 부족으로 어려움을 겪습니다.",
        "image": "data/6.png"
    },
    "startJourney7": {
        "text": "지미는 통신 장비를 확보하지 못하고 도시를 떠납니다. 린다의 생사는 알 수 없습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 현실적이고 상황 판단이 빠릅니다. 무리한 행동을 피하고 생존을 우선시합니다.",
        "image": "data/7.png"
    },
    "startJourney8": {
        "text": "샌드크릭으로 가는 여정이 시작됩니다. 그러나 장담할 수 없는 미래입니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 현실적이며 인내심이 강한 성격입니다. 미래가 불확실해도 목표를 향해 흔들림 없이 나아갑니다.",
        "image": "data/8.png"
    },
    "startJourney9": {
        "text": "동료와 함께 힘을 모아 샌드크릭으로 향합니다. 서로 협력하여 어려움을 극복합니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 협동적이며 신뢰할 수 있는 성격입니다. 팀워크의 중요성을 알고 있습니다.",
        "image": "data/9.png"
    },
    "startJourney10": {
        "text": "부상자를 데리고 이동하던 중 지미는 체력이 한계에 달합니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 이타적이며 희생적인 성격입니다. 다른 사람의 안전을 자신의 것보다 우선시합니다.",
        "image": "data/10.png"
    },
    "startJourney11": {
        "text": "혼자 이동하던 지미는 외로움과 불안감에 시달립니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 독립적이지만 때로는 고독을 느낄 수 있습니다.",
        "image": "data/11.png"
    },
    "startJourney12": {
        "text": "생존자 그룹과 함께 샌드크릭에 도착하지만 린다를 찾을 수 없습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 사회적이며 다른 사람들과의 관계를 중요시합니다.",
        "image": "data/12.png"
    },
    "startJourney13": {
        "text": "은신처에서 휴식을 취한 후 지미는 새 힘을 얻어 샌드크릭으로 향합니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 신중하며 체력 관리의 중요성을 압니다.",
        "image": "data/13.png"
    },
    "startJourney14": {
        "text": "린다를 찾기 위해 혼자 떠난 지미는 여러 어려움을 겪습니다.",
        "choices": [
            { "text": "게임을 다시 시작한다.", "nextScene": "start" }
        ],
        "personality": "당신은 집념이 강하며 목표를 위해 노력하는 성격입니다.",
        "image": "data/14.png"
    }
};
